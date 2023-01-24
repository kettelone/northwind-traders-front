import React, { useState , useEffect} from 'react';
import MenuOutlinedIcon from '@mui/icons-material/MenuOutlined';
import KeyboardArrowDownOutlinedIcon from '@mui/icons-material/KeyboardArrowDownOutlined';

const NavBar = () => {
  let [time, setTime] = useState(new Date())
  useEffect(() => {
    var timer = setInterval(() => setTime(new Date()), 1000)
    return function cleanup() {
      clearInterval(timer)
    }
  }); 

  return (
    <div className='navbar-menu'>
      <div className='navbar-clock, navbar-item'>
        {time.toLocaleTimeString("en-GB")}
      </div>
      <div className='navbar-end'>
        <div className='navbar-dropdown, navbar-item'>
          <div className='navbar-link'>
            <span ><MenuOutlinedIcon /></span>
            <span className='sqlite-links'>SQLite Links</span>
            <span ><KeyboardArrowDownOutlinedIcon /></span>
          </div>  
        </div>
      </div>
    </div>
  );
};

export default NavBar;