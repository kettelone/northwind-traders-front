import React from 'react';
import { Link } from 'react-router-dom';

//Replace any with correct one !!!!!!!!!!!

interface Props{
  currentKey: string,
  externalLink?: string,
  item:any
}
const Property = (props: Props) => {
  return (
    <div className='field' key={props.currentKey}>
      <label>{props.currentKey}</label>
      <div className='field-body'>
        {
          props.externalLink
            ? <Link to={props['externalLink']}>
              <div className='field-name'>
                  {props.item[props.currentKey]}
              </div>
            </Link>
            : <div className='field-name'>
              {props.item[props.currentKey]}
            </div>
        }

      </div>
    </div>
  );
};

export default Property;