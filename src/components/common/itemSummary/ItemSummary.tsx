import React from 'react';
import { Link } from 'react-router-dom'
import { v4 as uuidv4 } from 'uuid';
import styled from 'styled-components';

interface Props {
  class: string,
  value: {
    companyName?: string,
    fullName?: string;
    id: number,
    productId: number
  },
  tableValue: Array<string>,
  base: string
  prodInOrder?:boolean
}

const InitialsContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  border-radius: 100px;
  font-size: 12px;
`

const Image = styled.img`
  border-radius: 9999px;
  width: 1.5rem;
  height: 1.5rem;
`

const ItemSummary = (props: Props) => {
  return (
    <tbody className={props.class}>
      <tr>
        {
          props.value.companyName || props.value.fullName
            ? <td>
              <InitialsContainer>
                <Image
                  src={
                    `https://avatars.dicebear.com/v2/initials/
                    ${props.value.companyName
                    ? props.tableValue[1]
                    : props.value.fullName}
                    .svg`}
                  alt='initials'
                />
              </InitialsContainer>
            </td>
            : ''
        }
        {
          props.tableValue.map((value, index) => 
          index === 0 
            ?
              <td key={uuidv4()}>
                <Link
                  to={`${props.base}/${props.value.id ? props.value.id : props.value.productId}`}>
                  {value}
                </Link>
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