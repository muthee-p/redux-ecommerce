"use client";

import React, {useState} from "react";
import { signIn, signOut, useSession } from "next-auth/react";
import PaymentPage from './PaymentPage'

import { CartItem } from './CartTotal'

interface PageProps {
  cartItems: CartItem[]; 
  shippingOption: string;
  setShippingOption: (option: string) => void; 
  couponCode: string;
  totalCost: number;
  calculateTotalCost:string;
  shippingValue: number;
}

const CheckoutButton: React.FC<PageProps> = ({cartItems, calculateTotalCost, shippingOption, shippingValue, setShippingOption, couponCode, totalCost}) => {
  const { data: session } = useSession();

  //const cartItems = useSelector(state => state.cart);
  const [showPayment, setShowPayment] = useState(false);

  const handleCheckOut = (event: { preventDefault: () => void; }) =>{
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