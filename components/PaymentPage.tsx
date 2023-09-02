'use client'
import React, { useState } from 'react';
import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';
import Link from 'next/link';
import CartTotal from './CartTotal'
import { useSelector } from 'react-redux';



const PaymentPage = () => {
  const stripe = useStripe();
  const elements = useElements();
   const cartItems = useSelector((state) => state.cart.cartItems);
  const [showReceipt, setShowReceipt] = useState(false);
  const [error, setError] = useState(null);

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!stripe || !elements) {
      
      return;
    }

    const result = await stripe.createToken(elements.getElement(CardElement));

    if (result.error) {
      setError(result.error.message);
    } else {
      setShowReceipt(true);
      console.log(result.token);
    }
  };

  return (
    <div className='flex flex-col justify-around p-24 items-center text-sm h-screen'>
     <Link href='/cart' >&larr; Go Back</Link>
     <div className='text-gray-500 text-xs'>
        <p>Card Number: 4242424242424242</p>
        <p>CVC: Any 3 digits</p>
        <p>Date: Any date in the future</p>
        <p>Zip: 90001</p>
     </div>
    <form onSubmit={handleSubmit} className='flex flex-col w-1/3'>

      <CardElement />

      {error && <div className="text-red-500 text-sm">{error}</div>}
      <button type="submit" className=' mt-8 w-full bg-black text-white py-2 '>Pay</button>
    </form>
     {showReceipt && (
      <CartTotal 
          cartItems={cartItems} 
          shippingOption={shippingOption} 
          couponCode={couponCode} />
      )}
    </div>
  );
};

export default PaymentPage;
