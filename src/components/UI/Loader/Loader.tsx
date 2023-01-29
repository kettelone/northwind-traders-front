import React from 'react';

interface Props{
  value:string
}

const Loader = (props: Props) => {
  return (
    <div className='loader'>Loading {props.value}...</div>
  );
};

export default Loader;