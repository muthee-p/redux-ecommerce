'use client'

import {useState} from 'react'
import Image from 'next/image'
import Link from 'next/link';
import { useDispatch, useSelector } from 'react-redux';
import { removeFromCart, adjustQuantity, clearCart } from '../slices/cartSlice';
import CheckoutButton from './CheckoutButton'

const CartPage = () =>{


	const cartItems = useSelector(state => state.cart)
	const dispatch = useDispatch();
	const [shippingOption, setShippingOption] = useState('free');
  const [couponCode, setCouponCode] = useState('');
  const shippingCosts = { flat: 10, pickup: 15 }
	

	if (!cartItems) {
  		return <div>Loading cart...</div>;
	}


	if (cartItems === 0){
		return <div>the cart is empty</div>
	}

	const totalCost = cartItems.reduce(
		(total, item) => total + item.totalPrice,
		0
	);

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

	const handleAdjustQuantity = (item, newQuantity) =>{
		dispatch(adjustQuantity({...item, quantity:  newQuantity}))
	}
	const handleRemoveFromCart = item => {
		console.log(item)
		dispatch(removeFromCart(item));
	};
	

	
	return(
		<div className= 'flex flex flex-col md:flex-row border-t border-gray-600 pt-2'>
		<div className='md:w-2/3 '>
			<h2 className='font-semibold py-4'>Shopping Cart</h2>
			<table className=' md: mr-8 text-sm'>
				<thead>
					<tr>
						<th className='md:w-20 text-center'></th>
						<th className='md:md:w-20 text-center'></th>
						<th className='w-32 text-center'>Product</th>
						<th className='md:md:w-20 text-center'>Price</th>
						<th className='md:md:w-20 text-center'></th>
						<th className='md:md:w-20 text-center'>Quantity</th>
						<th className='md:md:w-20 text-center'>Subtotal</th>

					</tr>
				</thead>
			{cartItems.map(item =>(
				<tbody key={item.id} className='border-b border-gray-400' >
				
				
					<tr>
						<td className='md:w-20 text-center py-4'>
							<button 
								onClick={() => handleRemoveFromCart(item)}
								className=''
								>X</button>
						</td>
						<td className='md:w-20 text-center py-4'>
							<Image
              					src={item.image}
              					alt={item.name}
              					width={40}
              					height={40}
              					priority
            				/>
						</td>
						<td className='md:w-32 text-center py-4'>{item.name}</td>
						<td className='md:w-20 text-center p-4'>{item.price}</td>
						<td className='md:w-20 text-center py-4'>
							<input
              					type="number"
              					placeholder='1'
              					className='border w-1/2 text-center'
              					value={item.quantity}
              					onChange={e =>
                					handleAdjustQuantity(item, parseInt(e.target.value))
              					}
            				/>
						</td>
						<td className='md:w-20 text-center py-4'>{item.quantity}</td>
						<td className='md:w-20 text-center py-4'>{item.totalPrice}</td>
					</tr>
				</tbody>
					
				
				))}
			</table>

	          <div className='p-8 text-sm inline-flex'>
	          Coupon Code
	            <input
	              type="text"
	              placeholder='YOUSHOP'
	              className=' ml-4 py-1 px-4 text-center border text-sm'
	              value={couponCode}
	              disabled={cartItems.length === 0}
	              onChange={e => setCouponCode(e.target.value)}
	            />

	            <Link href='/' className= 'bg-black text-white px-4 py-1 md:ml-16'>&larr;  Continue Shopping</Link>
	          </div>
			</div>


			<div className=' w-full md:w-1/3 md:border-l p-8 bg-white text-sm' >
			<h4 className='pb-8 font-semibold'>Cart total</h4>
			<table className='flex items-center flex-col font-mono '>
			
				<tbody>
					<tr className='w-full border-y border-gray-400 py-4'>
						<td className='md:w-40 py-4'>Subtotal</td>
						<td className='md:w-60 text-right py-4'>${totalCost.toFixed(2)}</td>
					</tr>
					
					<tr>
						<td className='py-4'>Shipping</td>
						<td className='flex flex-col items-end py-4'>
							 <label className='inline-flex'> 
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
					            <label className='inline-flex'> 
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
					            <label className='inline-flex'> 
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
						 <td className='py-4'>Coupon</td>
				          <td className='flex flex-col items-end py-4'>
				              {couponCode}
				              
				          </td>
					</tr>
					<tr className=' border-t border-gray-800'>
						<td className='font-bold py-4'>Total</td>
						<td className='flex flex-col items-end py-4'>${calculateTotalCost().toFixed(2)}</td>
					</tr>
				</tbody>
				</table>
				
				 
				<CheckoutButton />
				
			</div>
		</div>
		)

}
export default CartPage