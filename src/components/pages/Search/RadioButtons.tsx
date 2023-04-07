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
const CustomLabel = styled.label`
  width: 20px;
  height:20px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid rgb(209 213 219);

  & input {
  display: none;
};

& input:checked + .checkmark{
  display: inline-block;
}

& input[type=radio]:checked+.checkmark {
  border: 4px solid #3b82f6;
  box-sizing: border-box;
}
`
const Checkmark = styled.span`
  width: 100%;
  height: 100%;
  border-radius: 50%;
  background-color: white;
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
              <CustomLabel>
                <input
                  type="radio"
                  value='products'
                  checked={props.productsChecked}
                  onChange={props.productChange}
                />
                <Checkmark className='checkmark'/>
              </CustomLabel>
              <LabelControl>Products</LabelControl>
            </RadioLabel>
          </Control>
          <Control>
            <RadioLabel>
              <CustomLabel>
                <input
                  type="radio"
                  value='customers'
                  checked={props.customerChecked}
                  onChange={props.customerChange} 
                />
                <Checkmark className='checkmark'   />
              </CustomLabel>
              <LabelControl>Customers</LabelControl>
            </RadioLabel>
          </Control>
        </Selector>
      </div>
    </Field>
  );
};

export default RadioButtons;