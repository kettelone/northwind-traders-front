import React from 'react';
import { Link } from 'react-router-dom';
import NavButton from './NavButton';

const NavButtonElement = (props) => {
  return (
    <div className="go-back-button-container">
      <div className="go-back-button-wrapper">
        <hr className='card-content-hr' />
        <div className="sub-container">
          <Link to={props.backTo} className='btn-link'><NavButton /></Link>
        </div>
      </div>
    </div>
  );
};

export default NavButtonElement;