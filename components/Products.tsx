'use client'

import { useDispatch } from 'react-redux';
import Image from 'next/image'
import { addToCart, adjustQuantity } from '../slices/cartSlice';

const Products = () =>{
	const dispatch = useDispatch();


	const products = [
		{
			id:1,
			name:'Black Evening Dress',
			description: "Make a statement of elegance while embracing sustainability with our eco-friendly black evening dress. This stunning gown is not only a fashion statement but also a conscious choice for the planet.",
			image: "/images/dress1",
			price: 100,
			quantity: null,
			category: "womens clothing"
		},
		{
			id: 2,
			name:'White Picnic Dress',
			description: "Crafted with sustainable materials and designed for timeless beauty, it features intricate lace details, a flowing silhouette, and a touch of shimmer. Shine bright at any special occasion with a dress that reflects both your style and your commitment to a greener world.",
			image: "/images/dress2",
			price: 80,
			quantity: null,
			category: "womens clothing"
		}
	];

	const handleAddToCart = (product) => {
		console.log(product)
		dispatch(addToCart({...product, quantity:1}));
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
					<Image
              src={product.image}
              alt={product.name}
              width={40}
              height={40}
              priority
            />
					<p>{product.description}</p>
					<h3>{product.price}</h3>
					<input
              			type="number"
              			className='border'
              			value={product.quantity}
              			onChange={e =>
                			handleAdjustQuantity(product, parseInt(e.target.value))
              			}
            		/>
					<button 
						onClick={() => handleAddToCart(product)}
						className='bg-black text-white'
						>Add</button>
				</div>
				))}
		</div>
		)

}
export default Products