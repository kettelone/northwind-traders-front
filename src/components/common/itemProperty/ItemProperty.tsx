import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

//TO DO: Replace any with correct one !!!!!!!!!!!

const Field = styled.div`
   margin-bottom: 1.25rem;
`

const Label = styled.label`
  display: block;
  font-weight: 700;
  margin-bottom: 0.75rem;
`

interface Props{
  currentKey: string,
  externalLink?: string,
  item:any
}
const Property = (props: Props) => {
  return (
    <Field key={props.currentKey}>
      <Label>{props.currentKey}</Label>
      <div>
        {
          props.externalLink
            ? <Link to={props['externalLink']}>
              <div>
                  {props.item[props.currentKey]}
              </div>
            </Link>
            :(props.currentKey.toLowerCase().includes('price')   || 
              props.currentKey.toLowerCase().includes('discount')|| 
              props.currentKey.toLowerCase().includes('freight'))
              ? <div>
                  ${props.item[props.currentKey]}
                </div>
              : <div>
                  {props.item[props.currentKey]}
                </div>

        }

      </div>
    </Field>
  );
};

export default Property;