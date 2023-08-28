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
    <div className= 'fixed w-full px-20 py-4 flex justify-between backdrop-blur'>
      <Link href="/">YouShop
      </Link>

     <div className='inline-flex gap-4'>
     <Link href="/">Home
      </Link>
      <Link href="/hop">Shop
      </Link>

       <Link href="/cart">
        <div className="">

        {cartItemCount > 0 && 
          <span 
            className="badge bg-orange-500 absolute flex items-center justify-center cart-font text-white rounded-full z-10 w-3 h-3">
        {cartItemCount}</span>}
         <Image
              src="/cart.svg"
              alt="Vercel Logo"
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