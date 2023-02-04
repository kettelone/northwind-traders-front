import React, { useState , useEffect} from 'react';
import MenuOutlinedIcon from '@mui/icons-material/MenuOutlined';
import KeyboardArrowDownOutlinedIcon from '@mui/icons-material/KeyboardArrowDownOutlined';
import LinkIcon from '@mui/icons-material/Link';
import './NavBar.css'

const NavBar = () => {
  let [time, setTime] = useState(new Date())
  useEffect(() => {
    var timer = setInterval(() => setTime(new Date()), 1000)
    return function cleanup() {
      clearInterval(timer)
    }
  }); 

  const handleDropdown = () => {
    document.getElementById("dropdown-content")?.classList.toggle("show");
    const dropbtn = document.getElementById("dropbtn");
    const linkColor = "rgb(59 130 246)"
    dropbtn!.style.color = dropbtn!.style.color === ""
      ? linkColor
      : dropbtn!.style.color === "black" ? linkColor : "black"

  }


  return (
    <div className='navbar-menu'>
      <div className='navbar-clock, navbar-item'>
        {time.toLocaleTimeString("en-GB")}
      </div>
      <div className='navbar-end'>
        <div className="dropdown navbar-item" onClick={handleDropdown} >
          <a id="dropbtn" href='#'>
            <span><MenuOutlinedIcon /></span>
            <span className='dropbtn-middle'>SQLite Links</span>
            <span><KeyboardArrowDownOutlinedIcon  /></span>
          </a>
          <div className="dropdown-content" id="dropdown-content" >
            <a href='https://blog.cloudflare.com/introducing-d1' className='navbar-option'>
              <span><LinkIcon /></span>
              <span className='link-text'>Introducing D1</span>
            </a>
            <a href="https://www.sqlite.org/lang.html" className='navbar-option'>
              <span><LinkIcon /></span>
              <span className='link-text'>SQLite SQL Flavour</span>
            </a>
            <a href="https://developers.cloudflare.com/workers/learning/using-durable-objects/" className='navbar-option'>
              <span><LinkIcon /></span>
              <span className='link-text'>Durable Objects</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavBar;