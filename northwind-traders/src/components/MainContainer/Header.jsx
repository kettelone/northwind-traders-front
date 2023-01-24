import React from 'react';
import RedoIcon from '@mui/icons-material/Redo';
const Header = (props) => {
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