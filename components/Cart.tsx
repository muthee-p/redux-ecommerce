'use client'

import { useDispatch, useSelector } from 'react-redux';
import { removeFromCart, adjustQuantity } from '../slices/cartSlice';

const Cart = () =>{
	const cartItems = useSelector(state => state.cart)
	const dispatch = useDispatch();

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
	
	return(
		<div className= 'bg-gray-800 p-8'>
			<h2>Cart</h2>
			{cartItems.map(item =>(
				<div key={item.id}>
					<h4>{item.name}</h4>
					<p>{item.quantity}</p>
					<h3>{item.price}</h3>
					<p>Total price : {item.totalPrice}</p>
					<input
              			type="number"
              			className='bg-black'
              			value={item.quantity}
              			onChange={e =>
                			handleAdjustQuantity(item, parseInt(e.target.value))
              			}
            		/>
					<button 
						onClick={() => handleRemoveFromCart(item)}
						className='bg-blue-600'
						>Remove</button>
				</div>
				))}
		</div>
		)

}
export default Cart