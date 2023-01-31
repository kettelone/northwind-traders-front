import React from 'react';
import {useSelector } from 'react-redux'
import './Dashboard.css'
import { v4 as uuidv4 } from 'uuid';
import { DeafultState } from '../../../store/store'
const Dashboard = () => {

  const {info, metrics} = useSelector((state: DeafultState) => state)

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
              <p className="dash-text-sm">Query count: {metrics.query_count ? metrics.query_count : 0}</p>
              <p className="dash-text-sm">Results count: {metrics.result_count ? metrics.result_count : 0}</p>
              <p className="dash-text-sm">#SELECT: { metrics.select ? metrics.select: 0}</p>
              <p className="dash-text-sm">#SELECT WHERE: { metrics.select_where ? metrics.select_where: 0}</p>
              <p className="dash-text-sm  ">#SELECT LEFT JOIN: { metrics.select_left_join ? metrics.select_left_join: 0}</p>
            </div>
          </div>
          <p className="dash-text-xl activity-log">Activity log</p>
          <p className="dash-text-xs">Explore the app and see metrics here</p>
          <div className="queries-container">
            {info
              ? info.map(data =>
                <div className='single-query' key={uuidv4()}>
                  <p className="sql-query-info">
                    <span>{data.date ? data.date + ',' : ''} </span>
                    <span>{data.timing ? data.timing + 'ms': ''}</span>
                  </p>
                  <p className="sql-query">{data.sqlString}</p>
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