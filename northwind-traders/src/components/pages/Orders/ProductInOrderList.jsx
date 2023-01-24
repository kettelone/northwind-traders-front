import React from 'react';
import { v4 as uuidv4 } from 'uuid';
import ItemSummary
  from '../../MainContainer/ItemSummary';
const ProductInOrderList = (props) => {
  return (

    <div className='products-in-order-container'>
      {
        props.isLoading
          ? props.loader ? props.loader : ''
          : <div className='card'>
            {
              props.header ? <div className='products-in-order-header'><b>{props.header}</b></div> : ''
            }
            <table>
              {
                props.table ? props.table : ''
              }
              {
                props.items
                  ?
                  props.items.map((item, index) => {
                    let className = (index % 2) === 0 ? 'grey' : 'white'
                    return (
                      <ItemSummary
                        tableValue={
                          props.tableValues.map(key => item[key])
                        }
                        base={props.base}
                        value={item}
                        key={uuidv4()}
                        class={className} />
                    )
                  })
                  : ''
              }
            </table>
            {
              props.pagination ? props.pagination : ''
            }
          </div>
      }
    </div>
  );
};

export default ProductInOrderList;