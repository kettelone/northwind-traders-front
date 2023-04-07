import React from 'react';
import { useLocation } from 'react-router-dom'
import styled from 'styled-components';
import MenuListOption from './MenuListOption';
import HomeIcon from '@mui/icons-material/Home';
import DisplaySettingsIcon from '@mui/icons-material/DisplaySettings';
import InventoryIcon from '@mui/icons-material/Inventory';
import ProductionQuantityLimitsIcon from '@mui/icons-material/ProductionQuantityLimits';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import BadgeIcon from '@mui/icons-material/Badge';
import GroupIcon from '@mui/icons-material/Group';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import { Link } from 'react-router-dom';
import './SideMenu.css'

const MainContainer = styled.div`
  font-family: sans-serif;
  width: 15rem;
  background-color: rgb(31 41 55);
  color: white;
  position: fixed;
  height: 100%;
`

const HeaderContainer = styled.div`
  height: 100vh;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  height: 3.5rem;
  padding: 0 0.75em;
  background-color: rgb(17 24 39);
`
const Menu = styled.div`
 & li a {
  display: flex;
  align-items: center;
  padding-bottom: 0.5rem;
  padding-top: 0.5rem;
  color: rgb(209 213 219)
}
`
const Label = styled.p`
  font-size: .75rem;
  line-height: 1rem;
  padding: 0.75rem;
  text-transform: uppercase;
  color: rgb(156 163 175);
`

//TO DO: how to pass props active in the Link coponent

const SideMenu = () => {
  const { pathname } = useLocation();
  return (
    <MainContainer>
      <HeaderContainer>
        <div>
          <b style={{ fontWeight:'900'}}>Northwind</b> Traders  
        </div>
      </HeaderContainer>
      <Menu>
        <Label>General</Label>
        <ul>
          <li>
            <Link
              to='/'
              className={`side-menu-option ${(pathname === '/') ? 'active ' : ''}`}>
              <MenuListOption icon={<HomeIcon />} text={'Home'} />
            </Link>
            <Link to='/dash'
              className={`side-menu-option ${(pathname === '/dash') ? 'active ' : ''}`}>
              <MenuListOption icon={<DisplaySettingsIcon />} text={'Dashboard'} />
            </Link>
          </li>
        </ul>
        <Label>Backoffice</Label>
        <ul>
          <li>
            <Link to='/suppliers' className={`side-menu-option ${(pathname === '/suppliers') ? 'active ' : ''}`}>
              <MenuListOption icon={<InventoryIcon />} text={'Suppliers'} />
            </Link>
            <Link to='/products' className={`side-menu-option ${(pathname === '/products') ? 'active ' : ''}`}>
              <MenuListOption icon={<ProductionQuantityLimitsIcon />} text={'Products'} />
            </Link>
            <Link to='/orders' className={`side-menu-option ${(pathname === '/orders') ? 'active ' : ''}`}>
              <MenuListOption icon={<ShoppingCartIcon />} text={'Orders'} />
            </Link>
            <Link to='/employees' className={`side-menu-option ${(pathname === '/employees') ? 'active ' : ''}`}>
              <MenuListOption icon={<BadgeIcon />} text={'Employees'} />
            </Link>
            <Link to='/customers' className={`side-menu-option ${(pathname === '/customers') ? 'active ' : ''}`}>
              <MenuListOption icon={<GroupIcon />} text={'Customers'} />
            </Link>
            <Link to='/search' className={`side-menu-option ${(pathname === '/search') ? 'active ' : ''}`}>
              <MenuListOption icon={<SearchOutlinedIcon />} text={'Search'} />
            </Link>
          </li>
        </ul>
      </Menu>
    </MainContainer>
  );
};

export default SideMenu;