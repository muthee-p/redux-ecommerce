"use client";
import React from "react";
import { signIn, signOut, useSession } from "next-auth/react";
import { useSelector } from 'react-redux';
import Link from 'next/link';
import Image from 'next/image'
import SigninButton from './SigninButton';


const Nav = () => {
  const { data: session } = useSession();
   const cartItems = useSelector(state => state.cart);
  const cartItemCount = cartItems.reduce((total, item) => total + item.quantity, 0);

  return (
    <div className= 'fixed w-full text-gray-900 px-2 md:px-20 py-8 z-10 flex justify-between backdrop-blur'>
      <Link href="/" className='inline-flex gap-2'>
      <Image
              src="/logo.svg"
              alt="Cart Icon"
              className="dark:invert"
              width={24}
              height={24}
              priority
            />
      <h4 className='md:text-2xl text-lg font-serif text-gray-100 hover:text-orange-600' >YouShop</h4>
      </Link>

     <div className='inline-flex gap-4'>
     <Link href="/" className='hover:text-orange-600 px-4'>Home
      </Link>
      <Link href="/shop" className='hover:text-orange-600 px-4 mr-4'>Shop
      </Link>

       <Link href="/cart">
        <div className="">

        {cartItemCount > 0 && 
          <span 
            className="badge bg-orange-500 absolute flex items-center justify-center cart-font text-white rounded-full z-10 w-3 h-3">
        {cartItemCount}</span>}
         <Image
              src="/cart.svg"
              alt="Cart Icon"
              className="dark:invert"
              width={24}
              height={24}
              priority
            />
        </div>
      </Link>

        <SigninButton />
    </div>
  </div>
  );
};

export default Nav;