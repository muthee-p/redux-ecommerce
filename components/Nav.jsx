"use client";
import React, {useState} from "react";

import { useSelector } from 'react-redux';
import Link from 'next/link';
import Image from 'next/image'
import SigninButton from './SigninButton';
import { signIn, signOut, useSession } from "next-auth/react";


const Nav = () => {
  const { data: session } = useSession();
 
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
    <nav className= 'fixed w-full text-gray-900  py-8 z-10 backdrop-blur-lg  md:backdrop-blur'>
      <div className="max-w-screen px-2 md:px-20 ">
        <div className="flex items-center ">
          <div className="w-full flex items-center justify-between">
            <div className="flex-shrink-0">
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
            </div>


            <div className='inline-flex gap-4 '>
              <Link href="/" className='hidden md:block hover:text-orange-600 px-4'>Home</Link>
              <Link href="/shop" className='hidden md:block hover:text-orange-600 px-4 mr-4'>Shop</Link>

              <Link href="/cart">
                <div className="">

                  {cartItemCount > 0 && 
                    <span className="badge bg-orange-500 absolute flex items-center justify-center cart-font text-white rounded-full z-10 w-3 h-3">
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
              <div className="hidden md:block"><SigninButton /></div>
                
            </div>
          

            <div className='md:hidden pr-2'>
              <button
                      type="button"
                      onClick={toggleMenu}
                      className="inline-flex items-center justify-center p-2 rounded-md text-gray-800 hover:text-white hover:bg-orange-500 focus:outline-none focus:bg-black focus:text-white transition duration-150 ease-in-out"
                    >
                      <svg
                        className={`${isOpen ? 'hidden' : 'block'} h-4 w-4`}
                        stroke="currentColor"
                        fill="none"
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
                      </svg>
                      <svg
                        className={`${isOpen ? 'block' : 'hidden'} h-4 w-4`}
                        stroke="currentColor"
                        fill="none"
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
                      </svg>
                    </button>
            </div>
          </div>
          </div>


          <div className={`${isOpen ? 'block w-full' : 'hidden'} md:hidden`}>
            <div className=" pt-4 flex flex-col justify-center items-center w-full">
              <Link href="/"
                className="py-4 border-b"
                onClick={handleLinkClick}
                >Home
              </Link>
              <Link href="/shop"
                className='py-4 border-b'
                onClick={handleLinkClick}
                >Shop
              </Link>
              <div className=""><SigninButton /></div>
            </div>
          </div>
       
    </div>
  </nav>
  );
};

export default Nav;


