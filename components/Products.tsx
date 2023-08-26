'use client'

import { useDispatch } from 'react-redux';
import { addToCart, adjustQuantity } from '../slices/cartSlice';

const Products = () =>{
	const dispatch = useDispatch();


	const products = [
		{
			id:1,
			name:'plate',
			price: 100,
			quantity: null
		},
		{
			id:2,
			name:'cup',
			price: 15,
			quantity: null
		}
	];

	const handleAddToCart = (product, quantity) => {
		console.log(product)
		dispatch(addToCart({ ...product, quantity }));
	};
	const handleAdjustQuantity = (product, newQuantity) =>{
		dispatch(adjustQuantity({...product, quantity:  newQuantity}))
	}
	
	return(
		<div>
			<h2>Our Products</h2>
			{products.map(product =>(
				<div key={product.id}>
					<h4>{product.name}</h4>
					<h3>{product.price}</h3>
					<input
              			type="number"
              			className='bg-black'
              			value={product.quantity}
              			onChange={e =>
                			handleAdjustQuantity(product, parseInt(e.target.value))
              			}
            		/>
					<button 
						onClick={() => handleAddToCart(product, product.quantity, product.totalPrice)}
						className='bg-blue-600'
						>Add</button>
				</div>
				))}
		</div>
		)

}
export default Products