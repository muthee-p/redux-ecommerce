'use client'
import React from 'react';
import { Provider } from 'react-redux';
import store from '@store';
import CartPage from '@components/CartPage';
import Nav from '@components/Nav';
import Footer from '@components/Footer'
import Link from 'next/link';

const Cart = () => {
  return (
    <Provider store={store}>
    
    <Nav />
   
      <div className="flex min-h-screen flex-col md:p-24 px-2 pt-24">

        <CartPage />
        
      </div>
      <Footer/>
    </Provider>
  );
};

export default Cart;
