import React, { useEffect, useState } from 'react';
import { useAppSelector } from '../../../app/hooks';
import axios from 'axios';
import styled from 'styled-components';
import { v4 as uuidv4 } from 'uuid';

const Container = styled.div`
  width: 100%;
  padding-left: 15em;
  padding-top: 3.5em;
`

const Content = styled.div`
  padding: 1.5rem;
`

const Card = styled.div`
  font-size: 1em;
  font-family: sans-serif;
  line-height: 1.5rem;
  padding: 1.5rem;
`

const DashGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));

`
const TextXL = styled.p`
  font-size: 1.25rem;
  line-height: 1.75rem;
`

const TextS = styled.p`
  font-size: .875rem;
  line-height: 1.25rem;
  color: rgb(31 41 55);
`

const TextXS = styled.p`
  font-size: .75rem;
  line-height: 1rem;
`

const ActivityLog = styled(TextXL)`
  padding-top: 1.5rem;
`

const SingleQuery = styled.div`
  padding-top: 0.5rem;
  font-size: .875rem;
  line-height: 1.25rem;
  font-family: ui-monospace, Courier, monospace;

`

const QueryInfo = styled.p`
  color:rgb(156 163 175);
`

const SQLQuery = styled.p`
  font-family: monospace;
`

const Dashboard = () => {

  const [country, setCountry] = useState('')
  
  useEffect(() => {
    const getCountry = async () => {
      //AddBlock browser extension blocks call to this API
      const response: { data: string } = await axios.get('https://ipapi.co/country/')
      setCountry(response.data)
    }
    getCountry()
  },[])

  // const { data, metrics } = useSelector((state: DefaultState) => state)
  const { data, metrics } = useAppSelector(state => state.queryUpdate)

  return (
    <Container>
      <Content>
        <Card>
          <DashGrid>
            <div>
              <TextXL>Worker</TextXL>
              <TextS>Colo: NRT</TextS>
              <TextS>Country: {country}</TextS>
            </div>
            <div>
              <TextXL>SQL Metrics</TextXL>
              <TextS>Query count: {metrics.query_count ? metrics.query_count : 0}</TextS>
              <TextS>Results count: {metrics.result_count ? metrics.result_count : 0}</TextS>
              <TextS>#SELECT: {metrics.select ? metrics.select : 0}</TextS>
              <TextS>#SELECT WHERE: {metrics.select_where ? metrics.select_where : 0}</TextS>
              <TextS>#SELECT LEFT JOIN: {metrics.select_left_join ? metrics.select_left_join : 0}</TextS>
            </div>
          </DashGrid>
          <ActivityLog>Activity log</ActivityLog>
          <TextXS>Explore the app and see metrics here</TextXS>
          <div>
            {data
              ? data.map(el =>
                <SingleQuery key={uuidv4()}>
                  <QueryInfo>
                    <span>{el.date ? el.date + ',' : ''} </span>
                    <span>{el.timing ? el.timing + 'ms': ''}</span>
                  </QueryInfo>
                  <SQLQuery>{el.sqlString}</SQLQuery>
                </SingleQuery>
              )
              : ''}
          </div>
        </Card>
      </Content>
    </Container>     
  );
};

export default Dashboard;