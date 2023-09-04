'use client'

import {SetStateAction, useState} from 'react'
import Image from 'next/image'
import Link from 'next/link';
import { useDispatch, useSelector } from 'react-redux';
import { removeFromCart, adjustQuantity } from '../slices/cartSlice';


import CartTotal from './CartTotal'

export interface CartItem {
	price: number;
	image: string;
	reduce(arg0: (total: any, item: any) => any, arg1: number): number;
	map(arg0: (item: any) => import("react").JSX.Element): import("react").ReactNode;
	
	length: number;
	
	id: number;
	name: string;
	quantity: number;
	totalPrice: number;
  }

const CartPage = () =>{

	const cartItems: CartItem[] = useSelector((state: CartItem[]) => state) || [];
	const dispatch = useDispatch();
	const [shippingOption, setShippingOption] = useState<string>('free');
  	const [couponCode, setCouponCode] = useState<string>('');
  	const [isCouponValid, setIsCouponValid] = useState<boolean>(false);
 
	

	if (!cartItems) {
  		return <div>Loading cart...</div>;
	}


	if (cartItems.length === 0){
		return <div>the cart is empty</div>
	}

	const totalCost: number = cartItems.reduce(
		(total:number, item: CartItem) => total + item.totalPrice,
		0
	);


	const handleAdjustQuantity = (item: CartItem, newQuantity: number) =>{
		dispatch(adjustQuantity({...item, quantity:  newQuantity}))
	};

	const handleRemoveFromCart = (item: CartItem) => {
		console.log(item)
		dispatch(removeFromCart(item));
	};

	const handleCouponChange = (e: { target: { value: SetStateAction<string>; }; }) => {
  setCouponCode(e.target.value);
};

const validateCoupon = () => {
 
  const isValid: boolean = couponCode ==="YOUSHOP";

  setIsCouponValid(isValid);
};


	
	return(
		<div className= 'flex flex flex-col md:flex-row border-t border-gray-600 pt-2'>
		<div className='md:w-2/3 w-full'>
			<h2 className='font-semibold py-4'>Shopping Cart</h2>
			<table className=' md:mr-8 text-sm'>
				<thead>
					<tr>
						<th className='md:w-20 text-center'></th>
						<th className='md:md:w-20 text-center hidden md:block'></th>
						<th className='md:w-32 text-center'>Product</th>
						<th className='md:w-20 text-center'>Price</th>
						<th className='md:w-20 text-center'></th>
						<th className='md:w-20 text-center'>Quantity</th>
						<th className='mdw-20 text-center'>Subtotal</th>

					</tr>
				</thead>
			{cartItems.map((item: CartItem) =>(
				<tbody key={item.id} className='border-b border-gray-400' >
					<tr>
						<td className='md:w-20 text-center py-4'>
							<button 
								onClick={() => handleRemoveFromCart(item)}
								className=''
								>X</button>
						</td>
						<td className='md:w-20 text-center py-4 hidden md:block'>
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

	          <div className='md:p-8 py-4 text-sm flex flex-col justify-between md:flex-row'>
	          	<div className='inline-flex md:justify-between '>
	            <input
	              type="text"
	              placeholder='YOUSHOP'
	              className=' mr-4 py-1 w-1/2 h-8 md:w-36 px-4 text-center border text-sm'
	              value={couponCode}
	              disabled={cartItems.length === 0}
	             	onChange={handleCouponChange}
	            />
	            <button
	            	className='bg-gray-300 text-sm text-gray-900 py-1 px-4 disabled:gray-100 '
	            	 disabled={cartItems.length === 0}
	             onClick={validateCoupon}>Apply Coupon</button>
  						</div>

	            <Link href='/' 
	            	
	            	className= 'bg-black text-white px-4 py-1 md:ml-16 text-center mt-4 md:mt-0'
	            	>&larr;  Continue Shopping</Link>
	          </div>
			</div>

			
  			<CartTotal 
  				cartItems={cartItems} 
  				shippingOption={shippingOption} 
  				setShippingOption={setShippingOption} 
  				couponCode={couponCode}
  				totalCost={totalCost} 
  				/>
			
		</div>
		)

}
export default CartPage