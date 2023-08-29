'use client'

import { useDispatch } from 'react-redux';
import Image from 'next/image'
import { addToCart, adjustQuantity } from '../slices/cartSlice';
import products from '@utils/productData'
import Link from 'next/link';

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
		<div className='px-16 pt-28 pb-16'>
			<div className='px-24 py-8 inline-flex gap-4 justify-center w-full text-sm'>
				<Link href='/' className='bg-orange-600 py-1 px-4 rounded-full'>All Categories</Link>
				<Link href='/' className='border border-black py-1 px-4 rounded-full'>Mens Clothing</Link>
				<Link href='/' className='border border-black py-1 px-4 rounded-full'>Womens Categories</Link>
				<Link href='/' className='border border-black py-1 px-4 rounded-full'>Shoes</Link>
				<Link href='/' className='border border-black py-1 px-4 rounded-full'>Accessories</Link>
			</div>
			<div className='products-grid '>
			{products.map(product =>(
				<div key={product.id} className='rounded-sm bg-white p-2 '>
					<div className='flex justify-center mb-4'>
					<Image
              			src={product.image}
              			alt={product.name}
              			width={220}
              			height={220}
              			priority
            		/>
            		</div>
            		<h4 className='font-bold text-lg mb-2'>{product.name}</h4>
					<p className='text-sm mb-2'>{product.description}</p>
					<h3 className='text-lg mb-2'>${product.price}</h3>

					<div className=' inline-flex gap-2'>
					<input
              			type="number"
              			placeholder='1'
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
		</div>
		)

}
export default Products