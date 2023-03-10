import React from 'react';
import { Link } from 'react-router-dom'
import { v4 as uuidv4 } from 'uuid';

interface Props {
  class: string,
  value: {
    companyName: string,
    id: number,
    productId: number
  },
  tableValue: Array<string>,
  base: string
  prodInOrder?:boolean
}

const ItemSummary = (props: Props) => {
  return (
    <tbody className={props.class}>
      <tr>
        {
          props.value.companyName
            ? <td className='image-cell'>
              <div className='name-initials-container'>
                <img
                  src={`https://avatars.dicebear.com/v2/initials/${props.tableValue[1]}.svg`}
                  alt='initials'
                  className='rounded-full'
                />
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
            :
              index === 1 && props.base === '/order'    
                ? <td key={uuidv4()}>${value}</td>
                : index === 2 && props.base === '/product'
                  ? <td key={uuidv4()}>${value}</td>
                  : index === 3 && props.prodInOrder === true
                    ? <td key={uuidv4()}>${value}</td>
                    : index === 4 && props.prodInOrder
                      ? <td key={uuidv4()}>{value}%</td>
                      : <td key={uuidv4()}>{value}</td>

          )
        }
      </tr>
    </tbody>
  );
};

export default ItemSummary;