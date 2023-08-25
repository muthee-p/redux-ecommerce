'use client'

import { useDispatch, useSelector } from 'react-redux';
import { addToCart } from '../slices/cartSlice';

const Cart = () =>{
	const cartItems = useSelector(state => state.cart)
	const dispatch = useDispatch();


	const handleRemoveFromCart = item => {
		dispatch(removeFromCart(item));
	};
	
	return(
		<div>
			<h2>Cart</h2>
			{cartItems.map(item =>(
				<div key={item.id}>
					<h4>{item.name}</h4>
					<h3>{item.price}</h3>
					<button onClick={() => handleRemoveFromCart(product)}>Remove</button>
				</div>
				))}
		</div>
		)

}
export default Cart