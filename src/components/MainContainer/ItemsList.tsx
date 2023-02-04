import React from 'react';
import { v4 as uuidv4 } from 'uuid';
import ItemSummary from './ItemSummary';

//Replace any with correct one !!!!!!!!!!!


interface Props {
  isLoading: boolean,
  loader: JSX.Element,
  header: JSX.Element,
  table: JSX.Element,
  items: Array<any>,
  tableValues: Array<string>,
  base: string,
  pagination: JSX.Element | null
}

const ItemsList = (props: Props) => {
  return (
    <div className='card-container'>
      {
        props.isLoading
          ? props.loader ? props.loader : ''
          : <div className='card'>
            {
              props.header ? props.header : ''
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

export default ItemsList;