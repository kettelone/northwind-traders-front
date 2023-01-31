import React from 'react';

interface Props{
  productsChecked:boolean
  productChange: () => void
  customerChecked: boolean
  customerChange: () => void
}

const RadioButtons = (props: Props) => {

  return (
    <div className="field">
      <label className="label">Tables</label>
      <div className="field-body">
        <div className="selectors">
          <div className="control">
            <label className="radio">
              <input
                type="radio"
                className='selectors-input'
                value='products'
                checked={props.productsChecked}
                onChange={props.productChange}
              />
              <span className="check"></span>
              <span className="control-label">
                Products
              </span>
            </label>
          </div>
          <div className="control">
            <label className="radio">
              <input type="radio"
                className='selectors-input'
                value='customers'
                checked={props.customerChecked}
                onChange={props.customerChange}
              />
              <span className="control-label">
                Customers
              </span>
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RadioButtons;