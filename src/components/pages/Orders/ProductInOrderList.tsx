import React from 'react';
import { v4 as uuidv4 } from 'uuid';
import ItemSummary
  from '../../MainContainer/ItemSummary';

interface Props {
  isLoading?: boolean,
  loader?: JSX.Element,
  header: JSX.Element | string,
  table: JSX.Element,
  items: Array<any>,
  tableValues: Array<string>,
  base: string,
  pagination?: JSX.Element | null,
}

const ProductInOrderList = (props: Props) => {
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
                        class={className}
                        prodInOrder={true}
                      />
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