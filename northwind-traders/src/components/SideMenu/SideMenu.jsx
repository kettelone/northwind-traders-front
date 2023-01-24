import React from 'react';
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

const SideMenu = () => {

  return (
    <div className='side-menu-container'>
      <div className='side-menu-header-container'>
        <div className='side-menu-header'>
          <b style={{ fontWeight:'900'}}>Northwind</b> Traders  
        </div>
      </div>
      <div className='side-main-menu'>
        <p className='menu-label'>General</p>
        <ul className='menu-list'>
          <li>
            <Link to='/'><MenuListOption icon={<HomeIcon />} text={'Home'} /></Link>
            <Link to='/dash'>
              <MenuListOption icon={<DisplaySettingsIcon />} text={'Dashboard'} />
            </Link>
          </li>
        </ul>
        <p className='menu-label'>Backoffice</p>
        <ul className='menu-list'>
          <li>
            <Link to='/suppliers'><MenuListOption icon={<InventoryIcon />} text={'Suppliers'} /></Link>
            <Link to='/products'><MenuListOption icon={<ProductionQuantityLimitsIcon />} text={'Products'} /></Link>
            <Link to='/orders'><MenuListOption icon={<ShoppingCartIcon />} text={'Orders'} /></Link>
            <Link to='/employees'><MenuListOption icon={<BadgeIcon />} text={'Employees'} /></Link>
            <Link to='/customers'><MenuListOption icon={<GroupIcon />} text={'Customers'} /></Link>
            <Link to='/search'><MenuListOption icon={<SearchOutlinedIcon />} text={'Search'} /></Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default SideMenu;