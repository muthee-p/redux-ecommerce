'use client'

import Image from 'next/image'
import Link from 'next/link';
import { useDispatch, useSelector } from 'react-redux';
import { removeFromCart, adjustQuantity, clearCart } from '../slices/cartSlice';

const CartPage = () =>{
	const cartItems = useSelector(state => state.cart)
	const dispatch = useDispatch();
	
	const totalCost = cartItems.reduce(
		(total, item) => total + item.totalPrice,
		0
		);
	// const flatRate = totalCost-10;
	// const pickup = totalCost-15

	if (!cartItems) {
  		return <div>Loading cart...</div>;
	}


	if (cartItems === 0){
		return <div>the cart is empty</div>
	}

	const handleAdjustQuantity = (item, newQuantity) =>{
		dispatch(adjustQuantity({...item, quantity:  newQuantity}))
	}
	const handleRemoveFromCart = item => {
		console.log(item)
		dispatch(removeFromCart(item));
	};
	const handleCheckOut = () =>{
		dispatch(clearCart());
	}
	
	return(
		<div className= 'flex '>
		<div className='w-2/3'>
			<h2>shopping Cart</h2>
			{cartItems.map(item =>(
				<table key={item.id} className='table-fixed border-b py-2'>
				<thead>
				<tr>
					<th></th>
					<th></th>
					<th>Product</th>
					<th>Price</th>
					<th></th>
					<th>Quantity</th>
					<th>Subtotal</th>

				</tr>
				</thead>
				<tbody>
					<tr>
						<td>
							<button 
								onClick={() => handleRemoveFromCart(item)}
								className=''
								>X</button>
						</td>
						<td>
							<Image
              					src={item.image}
              					alt={item.name}
              					width={40}
              					height={40}
              					priority
            				/>
						</td>
						<td>{item.name}</td>
						<td>{item.price}</td>
						<td>
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
						<td>{item.quantity}</td>
						<td>{item.totalPrice}</td>
					</tr>
				</tbody>
					
				</table>
				))}
			</div>
			<div className='w-1/3 border-l pl-8' >
			<h4>Cart total</h4>
			<table className='table-fixed '>
			
				<thead>
					<tr>
						<th>Subtotal</th>
						<th>${totalCost.toFixed(2)}</th>
					</tr>
				</thead>
				<tbody>
					<tr>
						<td>Shipping</td>
						<td></td>
					</tr>
					<tr>
						<td>Total</td>
						<td>${totalCost.toFixed(2)}</td>
					</tr>
				</tbody>
				</table>
				
				 
				<button className='bg-black text-white px-4 text-sm py-1'
					onClick={handleCheckOut}>Checkout</button>
				
			</div>
		</div>
		)

}
export default CartPage