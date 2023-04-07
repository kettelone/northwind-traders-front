import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from '../components/pages/home/Home'
import Dashboard from '../components/pages/dashboard/Dashboard'

import SuppliersList from '../components/pages/suppliers/Suppliers'
import Supplier from '../components/pages/supplier/Supplier'

import ProductsList from '../components/pages/products/Products'
import Product from '../components/pages/product/Product'

import OrdersList from '../components/pages/orders/Orders'
import Order from '../components/pages/order/Order'

import EmployeesList from '../components/pages/employees/Employees'
import Employee from '../components/pages/employee/Employee'

import CustomersList from '../components/pages/customers/Customers'
import Customer from '../components/pages/customer/Customer'

import Search from '../components/pages/search/Search'
const AppRouter = () => {
	return (
		<Routes>
			<Route path="/" element={<Home />} />
			<Route path="/dash" element={<Dashboard />} />

			<Route path="/suppliers" element={<SuppliersList />} />
			<Route path="/supplier/:id" element={<Supplier />} />

			<Route path="/products" element={<ProductsList />} />
			<Route path="/product/:id" element={<Product />} />

			<Route path="/orders" element={<OrdersList />} />
			<Route path="/order/:id" element={<Order />} />

			<Route path="/employees" element={<EmployeesList />} />
			<Route path="/employee/:id" element={<Employee />} />

			<Route path="/customers" element={<CustomersList />} />
			<Route path="/customer/:id" element={<Customer />} />

			<Route path="/search" element={<Search />} />

			<Route path="*" element={<Home />} />
		</Routes>
	)
}

export default AppRouter
