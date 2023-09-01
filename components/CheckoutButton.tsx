"use client";

import React from "react";
import { signIn, signOut, useSession } from "next-auth/react";
import { useDispatch, useSelector } from 'react-redux';
import { clearCart } from '@slices/cartSlice';
import Link from 'next/link'

const CheckoutButton = () => {
  const { data: session } = useSession();
  const dispatch = useDispatch();
  const cartItems = useSelector(state => state.cart);

  const handleCheckOut = () =>{
    dispatch(clearCart());
  }

  if (session && session.user) {
    return (
      <div className="flex gap-4 ml-auto pt-1">
        
        <Link href='payment' className='bg-black text-center text-white mt-4 w-full text-sm py-1 disabled:bg-gray-600'
          disabled={cartItems.length === 0}
          onClick={handleCheckOut}>Checkout</Link>
      </div>
    );
  }
  return (
    <div>
    <p className='text-orange-600'>Please sign in to Checkout</p>
    <button onClick={() => signIn()} 
      className="bg-black text-white mt-4 w-full text-sm py-1 hover:bg-orange-600">
      Sign In
    </button>
    </div>
  );
};

export default CheckoutButton;
