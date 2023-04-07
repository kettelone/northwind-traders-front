import React from 'react';
import { BrowserRouter } from 'react-router-dom'
import SideMenu from './components/common/sideMenu/SideMenu';
import NavBar from './components/common/navBar/NavBar';
import './styles/index.css'
import AppRouter from './routes/AppRouter';

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <SideMenu/>
      <AppRouter />
    </BrowserRouter>
  );
}

export default App;
