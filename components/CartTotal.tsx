"use client";

import React from 'react';
import CheckoutButton from './CheckoutButton'
import { useSelector } from 'react-redux';
import { finalCartInfo} from '@slices/cartSlice'


const CartTotal = () => {
  // Access cart items, shipping option, and coupon code from Redux store
  const cartItems = useSelector((state) => state.cart.cartItems);
  const shippingOption = useSelector((state) => state.cart.shippingOption);
  const couponCode = useSelector((state) => state.cart.couponCode);

  const shippingCosts = { flat: 10, pickup: 15 };

  const calculateTotalCost = () => {
    let total = cartItems.reduce((sum, item) => sum + item.totalPrice, 0);

    if (shippingOption === 'flat') {
      total += shippingCosts.flat;
    } else if (shippingOption === 'pickup') {
      total += shippingCosts.pickup;
    }

    if (couponCode === 'YOUSHOP') {
      total -= 10;
    }

    return total;
  };

  return (
    <div className="w-full my-8 md:w-1/3 md:border-l p-8 bg-white text-sm">
      <h4 className="pb-8 font-semibold">Cart total</h4>
      <table className="flex items-center flex-col font-mono">
        <tbody>
          <tr className="w-full border-y border-gray-400 py-4">
            <td className="md:w-40 py-4">Subtotal</td>
            <td className="md:w-60 text-right py-4">${calculateTotalCost().toFixed(2)}</td>
          </tr>

          <tr>
            <td className="py-4">Shipping</td>
            <td className="flex flex-col items-end py-4">
              {/* Rest of your shipping code remains the same */}
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
            <td className="flex flex-col items-end py-4">${calculateTotalCost().toFixed(2)}</td>
          </tr>
        </tbody>
      </table>
      <CheckoutButton />
    </div>
  );
};

export default CartTotal;
