'use client'
import React from 'react';
import { Provider } from 'react-redux';
import store from '../../store';
import Products from '../../components/Products';
import Cart from '../../components/Cart';
import Nav from '../../components/Nav';

const Shop = () => {
  return (
    <Provider store={store}>
      <div>
        <Nav />
        <h1>E-Commerce App</h1>
        <Products />
        <Cart />
      </div>
    </Provider>
  );
};

export default Shop;
