import React from 'react';
import RedoIcon from '@mui/icons-material/Redo';

interface Props{
  title: string
}
const Header = (props: Props) => {
  return (
    <header className='card-header'>
      <p className='card-header-title'>{props.title}</p>
      <a className='card-header-icon' href='/'>
        <span style={{ color: 'black' }}><RedoIcon /></span>
      </a>
    </header>
  );
};

export default Header;