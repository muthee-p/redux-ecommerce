'use client'
import React from 'react';
import { Provider } from 'react-redux';
import store from '@store';
import CartPage from '@components/CartPage';
import Nav from '@components/Nav';
import Footer from '@components/Footer'
import Link from 'next/link';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';

const Cart = () => {
  const stripePromise = loadStripe('pk_test_51N1PcsAy6kbtVnGKlyJx5DyytFICTbgbKgPvPIktWBsl9Wj2uLYknc9KQh6iN3x6DvZTt8096LdpPO9JIVQ67QRR006UMJ6HYo');

  return (
    <Provider store={store}>
       <Elements stripe={stripePromise} >
    
        <Nav />
   
        <div className="flex min-h-screen flex-col md:p-24 px-2 pt-24">

        <CartPage />
        
      </div>
      <Footer/>
      </Elements>
    </Provider>
  );
};

export default Cart;
