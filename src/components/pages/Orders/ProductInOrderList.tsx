import React from 'react';
import styled from 'styled-components';
import { v4 as uuidv4 } from 'uuid';
import ItemSummary
  from '../../common/itemSummary/ItemSummary';

const Container = styled.div`
  width: 100%;
  margin-top: -3em;
`

const Card = styled.div`
  font-size: 1em;
  font-family: sans-serif;
  line-height: 1.5rem;
  padding: 1.5rem;
`
const Header = styled.div`
  background-color: white;
  padding: 0.75rem 1rem;
  border: 1px solid #e5e7eb;
`

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

    <Container>
      {
        props.isLoading
          ? props.loader ? props.loader : ''
          : <Card>
            {
              props.header ? <Header><b>{props.header}</b></Header> : ''
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
          </Card>
      }
    </Container>
  );
};

export default ProductInOrderList;