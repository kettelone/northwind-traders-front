import React from 'react';
import { v4 as uuidv4 } from 'uuid';

const TableThead = (props) => {
  return (
    <thead className='thead'>
      <tr>
      {
        props.theads.map(thead => 
          thead === 'Company'
            ? <th> </th>
            : ''
        )  
      }
      {
        props.theads.map(thead =>
          <th key={uuidv4()}>
            <div>{thead}</div>
          </th>
        ) 
      }
      </tr>
    </thead>
  );
};

export default TableThead;