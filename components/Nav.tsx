"use client";
import React from "react";
import { signIn, signOut, useSession } from "next-auth/react";
import { useSelector } from 'react-redux';
import Link from 'next/link';
import Image from 'next/image'


const Nav = () => {
  const { data: session } = useSession();
   const cartItems = useSelector(state => state.cart);
  const cartItemCount = cartItems.reduce((total, item) => total + item.quantity, 0);


  if (session && session.user) {
    return (
      <div className="flex gap-4 ml-auto">
       <Link href="/cart">
        <div className="cart-icon">
        {cartItemCount > 0 && <span className="badge">{cartItemCount}</span>}
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
        <p className="text-sky-600">{session.user.name}</p>
        <button onClick={() => signOut()} className="text-red-600">
          Sign Out
        </button>
      </div>
    );
  }
  return (
    <div>
     <Link href="/cart">
        <div className="cart-icon">
          {cartItemCount > 0 && <span className="badge">{cartItemCount}</span>}

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
    <button onClick={() => signIn()} className="text-green-600 ml-auto">
      Sign In
    </button>
  </div>
  );
};

export default Nav;