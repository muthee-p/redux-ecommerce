'use client'

import { useDispatch } from 'react-redux';
import { addToCart } from '../slices/cartSlice';

const Products = () =>{
	const dispatch = useDispatch();


	const products = [
		{
			id:1,
			name:'plate',
			price: 100
		},
		{
			id:2,
			name:'cup',
			price: 15
		}
	];

	const handleAddToCart = product => {
		dispatch(addToCart(product));
	};
	
	return(
		<div>
			<h2>Our Products</h2>
			{products.map(product =>(
				<div key={product.id}>
					<h4>{product.name}</h4>
					<h3>{product.price}</h3>
					<button onClick={() => handleAddToCart(product)}>Add</button>
				</div>
				))}
		</div>
		)

}
export default Products