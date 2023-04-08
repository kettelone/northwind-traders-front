import React from 'react';
import { BrowserRouter } from 'react-router-dom'
import styled from 'styled-components';
import SideMenu from './components/common/sideMenu/SideMenu';
import NavBar from './components/common/navBar/NavBar';
import './styles/index.css'
import AppRouter from './routes/AppRouter';

const Wrapper = styled.div`
  @media only screen and(min-width: 1024px){
     margin-left:15em;
  }
`

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <SideMenu />
      <Wrapper id='items-list' className='itemsList'>
        <AppRouter/>
      </Wrapper>
    </BrowserRouter>
  );
}

export default App;
