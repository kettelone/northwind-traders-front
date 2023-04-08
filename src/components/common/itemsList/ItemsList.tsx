import React from 'react';
import { v4 as uuidv4 } from 'uuid';
import ItemSummary from '../itemSummary/ItemSummary';
import styled from 'styled-components';

const CardContainer = styled.div`
  width: 100%;
`
const Card = styled.div`
  font-size: 1em;
  font-family: sans-serif;
  line-height: 1.5rem;
  padding: 1.5rem;
`

//TO DO: Replace any with correct one !!!!!!!!!!!
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
    <CardContainer>
      {
        props.isLoading
          ? props.loader
            ? props.loader : ''
          : <Card>
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
                    let className = (index % 2) === 0 ? 'grey' : ''
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
          </Card>
      }
    </CardContainer>
  );
};

export default ItemsList;