import React from 'react';
import { Link } from 'react-router-dom'
import { v4 as uuidv4 } from 'uuid';


const ItemSummary = (props) => {
  return (
    <tbody className={props.class}>
      <tr>
        {
          props.value.companyName
            ? <td className='image-cell'>
              <div className='name-initials-container'>
                CC
              </div>
            </td>
            : ''
        }
        {
          props.tableValue.map((value, index) => 
          index === 0 
            ?
              <td key={uuidv4()}>
                <Link to={`${props.base}/${props.value.id ? props.value.id : props.value.productId}`} className='link' >{value}</Link>
              </td>
              : <td key={uuidv4}>{value}</td>
          )
        }
      </tr>
    </tbody>
  );
};

export default ItemSummary;