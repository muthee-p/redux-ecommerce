'use client'
import React from 'react';
import { Provider } from 'react-redux';
import store from '@store';
import CartPage from '@components/CartPage';
import Nav from '@components/Nav';
import Link from 'next/link';

const Cart = () => {
  return (
    <Provider store={store}>
    <Nav />
      <div className="flex min-h-screen flex-col items-center pt-24">
        
        <Link href='/'>Back</Link>
        <CartPage />
      </div>
    </Provider>
  );
};

export default Cart;
