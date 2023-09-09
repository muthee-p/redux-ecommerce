'use client'
import React, { useState } from 'react';
import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';
import Link from 'next/link';
import Receipt from './Receipt'
//import { useSelector } from 'react-redux';



const PaymentPage = ({calculateTotalCost, shippingValue, cartItems, shippingOption, setShippingOption, couponCode, totalCost}) => {
  const stripe = useStripe();
  const elements = useElements();
  //const cartItems = useSelector((state) => state.cart.cartItems);
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
      console.log(calculateTotalCost)
      console.log(result.token);
    }
  };

  return (
    <div className='fixed top-0 left-0 backdrop-blur w-full h-screen z-10 flex justify-center items-center'>
    <div className=' bg-gray-100 md:w-1/3 p-4 w-full  flex flex-col justify-around items-center text-sm'>
     <Link href='/cart' 
      className='mb-8' 
      onClick={(e) => { e.preventDefault();}}
      >
      &larr; Go Back
     </Link>
     <p className='mb-8'>Your Total is $ {calculateTotalCost}</p>
     <div className='text-gray-500 text-xs mb-8'>
        <h4> Dummy data to use</h4>
        <p>Card Number: 4242424242424242</p>
        <p>Date: Any date in the future</p>
        <p>CVC: Any 3 digits</p>
        <p>Zip: 90001</p>
     </div>
    <form onSubmit={handleSubmit} className='flex flex-col w-full'>

      <CardElement />

      {error && <div className="text-red-500 text-sm">{error}</div>}
      <button type="submit" className=' mt-8 w-full bg-black text-white py-2 '>Pay</button>
    </form>
     {showReceipt && (
        <Receipt
          cartItems={cartItems} 
          shippingOption={shippingOption} 
          setShippingOption={setShippingOption} 
          couponCode={couponCode}
          totalCost={totalCost} 
          calculateTotalCost={calculateTotalCost}
          shippingValue={shippingValue} 
          onClose={() => setShowReceipt(false)}
        />
      )}
    </div>
    </div>
  );
};

export default PaymentPage;
