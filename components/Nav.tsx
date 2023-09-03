"use client";
import React, {useState} from "react";

import { useSelector } from 'react-redux';
import Link from 'next/link';
import Image from 'next/image'
import SigninButton from './SigninButton';


const Nav = () => {
 
   const cartItems = useSelector(state => state.cart);
  const cartItemCount = cartItems.reduce((total, item) => total + item.quantity, 0);

  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  const handleLinkClick = () => {
    setIsOpen(false);
  };


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

     <div className='inline-flex gap-4 '>
     <Link href="/" className='hidden md:block hover:text-orange-600 px-4'>Home
      </Link>
      <Link href="/shop" className='hidden md:block hover:text-orange-600 px-4 mr-4'>Shop
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
      <div className="hidden md:block">
        <SigninButton />
      </div>
        
    </div>

    {/*mobile*/}

    <div className='md:hidden'>
      <button
              type="button"
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-orange-500 focus:outline-none focus:bg-black focus:text-white transition duration-150 ease-in-out"
            >
              <svg
                className={`${isOpen ? 'hidden' : 'block'} h-6 w-6`}
                stroke="currentColor"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
              </svg>
              <svg
                className={`${isOpen ? 'block' : 'hidden'} h-6 w-6`}
                stroke="currentColor"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
              </svg>
            </button>
    </div>
    <div className={`${isOpen ? 'block w-full' : 'hidden'} md:hidden`}>
          <div className=" pb-4 flex flex-col justify-center items-center h-[80%]">
            <Link href="/"
            className="py-4"
         onClick={handleLinkClick}>Home</Link>
      <Link href="/shop"
         onClick={handleLinkClick}>Shop</Link>
      
          </div>
       
    </div>

  </div>
  );
};

export default Nav;