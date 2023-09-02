'use client'
import React from 'react';
import { useSelector } from 'react-redux';
import Link from 'next/link'
import { signIn, signOut, useSession } from "next-auth/react";


const Receipt = ({calculateTotalCost, cartItems, shippingOption, setShippingOption, couponCode, totalCost}) => {
   const { data: session } = useSession();
   const currentDate = new Date();

  const formattedDate = currentDate.toDateString();

  return (
     <div className='fixed w-full h-screen backdrop-blur top-0 left-0 z-50 flex justify-center items-center'>
        <div className='md:w-1/3 h-screen bg-white font-mono px-4 py-8'>
          <h2>Receipt</h2>
          <p>Date: {formattedDate}</p>
          {session && (
            <p>Receipt for: {session.user.name}</p>
          )}
          {cartItems.map(item =>(
            <table key={item.id}>
            <tr>
              <td>{item.quantity}</td>
              <td>{item.name}</td>
              <td>{item.totalPrice}</td>
            </tr>
            </table>
            ))}
          <p>Total Item Cost: ${totalCost}</p>
          <p>Coupon Code: {couponCode}</p>
          <p>Shipping Option: {shippingOption}</p>
          <p>Total Cost: ${calculateTotalCost}</p>
          <div className='bottom-0'>
            <p>CUSTOMER COPY</p>
            <p>THANK YOU FOR SHIPPING WITH US</p>
            <p>YOU SHOP</p>
          </div>
          <Link href='/'>Home</Link> 
    </div>
    </div>
  );
};

export default Receipt;
