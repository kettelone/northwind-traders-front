import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import MenuOutlinedIcon from '@mui/icons-material/MenuOutlined';
import KeyboardArrowDownOutlinedIcon from '@mui/icons-material/KeyboardArrowDownOutlined';
import LinkIcon from '@mui/icons-material/Link';
import MoreVert from '@mui/icons-material/MoreVert';

const NavBarMain = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: white;
  margin-left: 15em;
  height: 3.5rem;

  @media only screen and (max-width: 1023px) {
    margin-left: 0;
  }
`
const LeftNavbar =styled.div`
  display: block;
  padding: 0.5rem 0.75rem;
     
  @media only screen and (min-width: 1023px) {
      display:none
    }
`
const RightNavBar = styled.div`
  display: block;
  padding: 0.5rem 0.75rem;

@media only screen and (min-width: 1023px) {
      display:none
    }
`
const StyledNavBar = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;

    @media only screen and (max-width: 1023px) {
      display:none
    }
  `

const NavBarClock = styled.div`
    padding: 0.5rem 0.75rem;
    margin-left: 1.5rem;
  `

  const Container = styled.div`
    padding: 0.5rem 0.75rem;
  `

const DropDownContainer = styled.div`
    cursor: pointer;
    padding: 0.5rem 0.75rem;
    margin-left: 1.5rem;
  `

  const Wrapper = styled.div`
    display: flex;
    align-items: center;
  `

const StyledSpan = styled.span`
    width: 24px;
    height:24px;
  `

const DropDownMiddle = styled.span`
     margin-left: 0.5rem;
  `

const DropDownContent = styled.div`
    display:none;
    font-size: .875rem;
    position: absolute;
    background-color: white;
    margin-top: 1.15em;
    width: 110%;
    margin-left: -1.5rem;
    box-shadow: 0 4px 6px -1px rgba(0, 0, 0, .1), 0 2px 4px -2px rgba(0, 0, 0, .1);
  & a {
  padding: 0.5rem 0.75rem;
  color:black;
} 
  `

const NarBarOption = styled.a`
    display: flex;
    align-items: center;

    &span{
        display: flex;
    }
  `

const LinkText = styled.span`
     margin-left: 0.5rem;
  `


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
  
  
  const handleClick = () => {
  document.getElementById("navbar-main")?.classList.toggle("move");
  document.getElementById("side-menu")?.classList.toggle("move-side-menu");
  document.getElementById("items-list")?.classList.toggle("move");
 
  }

  return (
    <NavBarMain id='navbar-main'>
      <LeftNavbar className="small-navbar">
        <span onClick={handleClick} className='checkbtn'>
          <MenuOutlinedIcon/>
        </span>
      </LeftNavbar>
      <RightNavBar className='more-vert'>
        <MoreVert />
      </RightNavBar>
      <StyledNavBar>
        <NavBarClock>
          {time.toLocaleTimeString("en-GB")}
        </NavBarClock>
        <Container>
          <DropDownContainer onClick={handleDropdown}>
            <Wrapper id="dropbtn">
              <span><MenuOutlinedIcon /></span>
              <DropDownMiddle>SQLite Links</DropDownMiddle>
              <span><KeyboardArrowDownOutlinedIcon /></span>
            </Wrapper>
            <DropDownContent id="dropdown-content" >
              <NarBarOption href='https://blog.cloudflare.com/introducing-d1'>
                <StyledSpan><LinkIcon /></StyledSpan>
                <LinkText>Introducing D1</LinkText>
              </NarBarOption>
              <NarBarOption href="https://www.sqlite.org/lang.html">
                <StyledSpan><LinkIcon /></StyledSpan>
                <LinkText>SQLite SQL Flavour</LinkText>
              </NarBarOption>
              <NarBarOption
                href="https://developers.cloudflare.com/workers/learning/using-durable-objects/"
              >
                <StyledSpan><LinkIcon /></StyledSpan>
                <LinkText>Durable Objects</LinkText>
              </NarBarOption>
            </DropDownContent>
          </DropDownContainer>
        </Container>
      </StyledNavBar>
    </NavBarMain>
  );
};

export default NavBar;