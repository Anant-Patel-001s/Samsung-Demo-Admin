import React from 'react'
import { Routes, Route } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import './App.css'
import Shop from './components/Shops/Shop'
import Products from './components/Products/Products';
// import HomePage from './components/HomePage';
import Card from './components/dashboard/Card';
import Customer from './components/Customers/Customer';
import Order from './components/Orders/Order';

const App = () => {
  return (
    <div>
      <Sidebar />
      <Routes> 
        <Route exact path='/' element={<Card />} />
        <Route exact path='/shops' element={<Shop />} />
        <Route exact path='/products' element={<Products />} />
        <Route exact path='/customers' element={<Customer />} />
        <Route exact path='/orders' element={<Order />} />
      </Routes>
    </div>
  )
}

export default App