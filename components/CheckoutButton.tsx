"use client";

import React, {useState} from "react";
import { signIn, signOut, useSession } from "next-auth/react";
import Link from 'next/link'
import PaymentPage from './PaymentPage'

const CheckoutButton = ({cartItems, calculateTotalCost, shippingOption, shippingValue, setShippingOption, couponCode, totalCost}) => {
  const { data: session } = useSession();

  //const cartItems = useSelector(state => state.cart);
  const [showPayment, setShowPayment] = useState(false);

  const handleCheckOut = () =>{
    event.preventDefault();
    setShowPayment(true);
    //dispatch(clearCart());
  }

  if (session && session.user) {
    return (
      <div className="flex gap-4 ml-auto pt-1">
        
        <button className='bg-black text-center text-white mt-4 w-full text-sm py-1 disabled:bg-gray-600'
          disabled={cartItems.length === 0}
          onClick={handleCheckOut}
          >Checkout</button>

          {showPayment && (
        <PaymentPage
          
          cartItems={cartItems} 
          shippingOption={shippingOption} 
          setShippingOption={setShippingOption} 
          couponCode={couponCode}
          totalCost={totalCost} 
          calculateTotalCost={calculateTotalCost} 
          shippingValue={shippingValue}
          onClose={() => setShowPayment(false)}
        />
      )}
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