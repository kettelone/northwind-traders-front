import React from 'react';
import { SvgIconProps } from '@material-ui/core';

interface Props{
  icon: React.ReactElement<SvgIconProps>,
  text:string
}

const MenuListOption = (props: Props) => {
  return (
    <div className='menu-list-container'>
      <span className='material-icons'>{props.icon}</span>
      <span>{props.text}</span>
    </div>
  );
};

export default MenuListOption;