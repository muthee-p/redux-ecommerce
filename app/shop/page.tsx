'use client'
import React from 'react';
import { Provider } from 'react-redux';
import store from '../../store';
import Products from '../../components/Products';
import Cart from '../../components/Cart';

const Shop = () => {
  return (
    <Provider store={store}>
      <div>
        <h1>E-Commerce App</h1>
        <Products />
        <Cart />
      </div>
    </Provider>
  );
};

export default Shop;
