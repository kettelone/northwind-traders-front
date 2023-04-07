import React from 'react';
import styled from 'styled-components';

const Field = styled.div`
  margin-bottom: 0.75rem;
`

const Label = styled.label`
  display: block;
  font-weight: 700;
  margin-bottom: 0.5rem;
`

const Selector = styled.div`
  display: flex;
`
const Control = styled.div`
  margin-right: 0.75rem;
`

const RadioLabel= styled.div`
  align-items: center;
  cursor: pointer;
  display: inline-flex;
  position: relative;
`

const Input = styled.input`
  
`
const LabelControl = styled.span`
  font-weight: 400;
  padding-left: 0.5rem;
`


interface Props{
  productsChecked:boolean
  productChange: () => void
  customerChecked: boolean
  customerChange: () => void
}

const RadioButtons = (props: Props) => {

  return (
    <Field>
      <Label>Tables</Label>
      <div>
        <Selector>
          <Control>
            <RadioLabel>
              <Input
                type="radio"
                value='products'
                checked={props.productsChecked}
                onChange={props.productChange}
              />
              <LabelControl>Products</LabelControl>
            </RadioLabel>
          </Control>
          <Control>
            <RadioLabel>
              <Input
                type="radio"
                value='customers'
                checked={props.customerChecked}
                onChange={props.customerChange}
              />
              <LabelControl>Customers</LabelControl>
            </RadioLabel>
          </Control>
        </Selector>
      </div>
    </Field>
  );
};

export default RadioButtons;