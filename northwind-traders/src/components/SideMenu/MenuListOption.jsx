import React from 'react';

const MenuListOption = (props) => {
  return (
    <div className='menu-list-container'>
      <span className='material-icons'>{props.icon}</span>
      <span>{props.text}</span>
    </div>
  );
};

export default MenuListOption;