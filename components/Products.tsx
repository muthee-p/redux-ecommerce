'use client'

import { useDispatch } from 'react-redux';
import Image from 'next/image'
import { addToCart, adjustQuantity } from '../slices/cartSlice';
import products from '@utils/productData'

const Products = () =>{
	const dispatch = useDispatch();

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
				<div key={product.id} className='w-1/4 bg-gray-100 p-2 '>
					<div className='flex justify-center'>
					<Image
              			src={product.image}
              			alt={product.name}
              			width={140}
              			height={140}
              			priority
            		/>
            		</div>
            		<h4 className='font-bold text-lg'>{product.name}</h4>
					<p className='text-sm'>{product.description}</p>
					<h3 className='text-lg'>${product.price}</h3>

					<div className=' inline-flex gap-2'>
					<input
              			type="number"
              			className='border w-2/12 text-center'
              			value={product.quantity}
              			onChange={e =>
                			handleAdjustQuantity(product, parseInt(e.target.value))
              			}
            		/>
					<button 
						onClick={() => handleAddToCart(product)}
						className='bg-black text-white w-10/12'
						>Add</button>
					</div>
				</div>
				))}
		</div>
		)

}
export default Products