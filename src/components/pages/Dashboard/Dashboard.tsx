import React, {useEffect} from 'react';
import axios from 'axios'
import { useDispatch, useSelector } from 'react-redux'
import './Dashboard.css'
import { v4 as uuidv4 } from 'uuid';
import { DeafultState } from '../../../store/store'

const Dashboard = () => {

  const dispatch = useDispatch()
  const sql = useSelector((state: DeafultState) => state.info)

  const updateSql = (data: { msg: Array<string | number> }) => {
    dispatch({ type: "ADD_SQL", payload: data })
  }

  const subscribe = async () => {
    try {
      const response = await axios.get('http://localhost:3001/api/dash/get-messages')
      updateSql(response.data)
      await subscribe()
    } catch(e) {
      setTimeout(() => {
          subscribe()
        }, 500)
    }
  }

  useEffect(() => {
    subscribe()
  }, [])

  return (
    <div className='card-container'>
      <div className="dash-card-content">
        <div className="card">
          <div className="dash-grid">
            <div>
              <p className="dash-text-xl">Worker</p>
              <p className="dash-text-sm">Colo: NRT</p>
              <p className="dash-text-sm">Country: AE</p>
            </div>
            <div>
              <p className="dash-text-xl">SQL Metrics</p>
              <p className="dash-text-sm">Query count: {sql.length ? sql.length: 0}</p>
              <p className="dash-text-sm">Results count: 46</p>
              <p className="dash-text-sm">#SELECT: 6</p>
              <p className="dash-text-sm">#SELECT WHERE: 2</p>
              <p className="dash-text-sm  ">#SELECT LEFT JOIN: 0</p>
            </div>
          </div>
          <p className="dash-text-xl activity-log">Activity Log</p>
          <p className="dash-text-xs">Explore the app and see metrics here</p>
          <div className="queries-container">
            {sql
              ? sql.map(data =>
                <div className='single-query' key={uuidv4()}>
                  {/* <p className="sql-query-info">{ new Date(Date.now()).toISOString()}{data.timing}</p> */}
                  <p className="sql-query">{data.msg[0]}</p>
                </div>
              )
              : ''}
          </div>
        </div>
      </div>
    </div>     
  );
};

export default Dashboard;