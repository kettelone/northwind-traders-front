import React from 'react';

const Loader = (props) => {
  return (
    <div className='loader'>Loading {props.value}...</div>
  );
};

export default Loader;