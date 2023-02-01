import React from 'react';
import './Loader.css'

interface Props{
  value:string
}

const Loader = (props: Props) => {
  return (
    <div className='loader'>Loading {props.value}...</div>
  );
};

export default Loader;