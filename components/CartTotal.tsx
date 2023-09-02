"use client";

import React, {useState} from 'react';
import CheckoutButton from './CheckoutButton'

const CartTotal = ({ cartItems, shippingOption, setShippingOption, couponCode, totalCost }) => {
  const shippingCosts = { flat: 10, pickup: 15 };

  const calculatedTotalCost = () => {
    let total = cartItems.reduce((sum, item) => sum + item.totalPrice, 0);

    if (shippingOption === 'flat') {
      total += shippingCosts.flat;
    } else if (shippingOption === 'pickup') {
      total += shippingCosts.pickup;
    }

    if (couponCode === 'YOUSHOP') {
      total -= 10;
    }

    return total.toFixed(2);
  };

  const calculateTotalCost = calculatedTotalCost(); 

  return (
    <div className="w-full my-8 md:w-1/3 md:border-l p-8 bg-white text-sm">
      <h4 className="pb-8 font-semibold">Cart total</h4>
      <table className="flex items-center flex-col font-mono">
        <tbody>
          <tr className="w-full border-y border-gray-400 py-4">
            <td className="md:w-40 py-4">Subtotal</td>
            <td className="md:w-60 text-right py-4">${totalCost.toFixed(2)}</td>
          </tr>

          <tr>
            <td className="py-4">Shipping</td>
            <td className="flex flex-col items-end py-4">
              <label className="inline-flex">
                Free Shipping
                <input
                  type="radio"
                  value="free"
                  disabled={cartItems.length === 0}
                  className="ml-2 appearance-none h-[13px] w-[13px] mt-[2px] rounded-full border border-gray-800 checked:bg-gray-800 checked:ring-inset checked:ring-offset-2 checked:ring-2 ring-gray-800"
                  checked={shippingOption === 'free'}
                   onChange={() => setShippingOption('free')}
                />
              </label>
              <label className="inline-flex">
                Flat Shipping: $10
                <input
                  type="radio"
                  value="flat"
                  disabled={cartItems.length === 0}
                  className="ml-2 appearance-none h-[13px] w-[13px] mt-[2px] rounded-full border border-gray-800 checked:bg-gray-800 checked:ring-inset checked:ring-offset-2 checked:ring-2 ring-gray-800"
                  checked={shippingOption === 'flat'}
                  onChange={() => setShippingOption('flat')}
                />
              </label>
              <label className="inline-flex">
                Pickup: $15
                <input
                  type="radio"
                  value="pickup"
                  disabled={cartItems.length === 0}
                  className="ml-2 appearance-none h-[13px] w-[13px] mt-[2px] rounded-full border border-gray-800 checked:bg-gray-800 checked:ring-inset checked:ring-offset-2 checked:ring-2 ring-gray-800"
                  checked={shippingOption === 'pickup'}
                  onChange={() => setShippingOption('pickup')}
                />
              </label>
            </td>
          </tr>
          <tr>
            <td className="py-4">Coupon</td>
            <td className="flex flex-col items-end py-4">
              {couponCode}
              {couponCode === 'YOUSHOP' ? (
                <span className="text-green-500 ml-2">$10</span>
              ) : (
                <span className="text-red-500 ml-2">X</span>
              )}
            </td>
          </tr>
          <tr className=" border-t border-gray-800">
            <td className="font-bold py-4">Total</td>
            <td className="flex flex-col items-end py-4">${calculateTotalCost}</td>
          </tr>
        </tbody>
      </table>
      <CheckoutButton
        cartItems={cartItems} 
          shippingOption={shippingOption} 
          setShippingOption={setShippingOption} 
          couponCode={couponCode}
          totalCost={totalCost}
          calculateTotalCost={calculateTotalCost} 
           />
    </div>
  );
};

export default CartTotal;
