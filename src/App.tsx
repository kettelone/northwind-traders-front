import React, { useEffect } from 'react';
import axios from 'axios'
import { BrowserRouter } from 'react-router-dom'
import SideMenu from './components/SideMenu/SideMenu';
import NavBar from './components/NavBar/NavBar';
import './styles/App.css'
import AppRouter from './components/AppRouter/AppRouter';

function App() {

  const sendMessage = async () => {
    await axios.post(`${process.env.REACT_APP_SERVER_URL}/api/dash/new-messages`)
  }

  useEffect(() => {
    sendMessage()
  },[])

  return (
    <BrowserRouter>
      <NavBar />
      <SideMenu/>
      <AppRouter />
    </BrowserRouter>
  );
}

export default App;
