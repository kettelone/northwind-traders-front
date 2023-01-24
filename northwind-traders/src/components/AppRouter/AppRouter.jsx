import React from 'react';
import { Routes, Route } from 'react-router-dom'
import Home from '../pages/Home/Home';
import Dashboard from '../pages/Dashboard/Dashboard';

import SuppliersList from '../pages/Suppliers/SuppliersList';
import Supplier from '../pages/Suppliers/Supplier';

import ProductsList from '../pages/Products/ProductList';
import Product from '../pages/Products/Product';

import OrdersList from '../pages/Orders/OrdersList'
import Order from '../pages/Orders/Order';

import EmployeesList from '../pages/Employees/EmployeesList';
import Employee from '../pages/Employees/Employee';

import CustomersList from '../pages/Customers/CustomersList';
import Customer from '../pages/Customers/Customer';

import Search from '../pages/Search/Search';
const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/dash" element={<Dashboard />} />

      <Route exact path="/suppliers" element={<SuppliersList />} />
      <Route exact path="/supplier/:id" element={<Supplier />} />

      <Route exact path="/products" element={<ProductsList />} />
      <Route exact path="/product/:id" element={<Product />} />

      <Route exact path="/orders" element={<OrdersList />} />
      <Route exact path="/order/:id" element={<Order />} />


      <Route exact path="/employees" element={<EmployeesList />} />
      <Route exact path="/employee/:id" element={<Employee />} />

      <Route exact path="/customers" element={<CustomersList />} />
      <Route exact path="/customer/:id" element={<Customer />} />

      <Route path="/search" element={<Search />} />

      <Route path="*" element={<Home />} />
    </Routes>
  );
};

export default AppRouter