import React from 'react';
import { BrowserRouter } from 'react-router-dom'
import SideMenu from './components/SideMenu/SideMenu';
import NavBar from './components/NavBar/NavBar';
import './styles/App.css'
import AppRouter from './components/AppRouter/AppRouter';

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
