'use client'

import { useDispatch, useSelector } from 'react-redux';
import Image from 'next/image'
import { addToCart, adjustQuantity } from '../slices/cartSlice';
import products from '@utils/productData'
import Link from 'next/link';
import { useState } from 'react';


const Products = () =>{
	const dispatch = useDispatch();
	const [productCategory, setProductCategory] = useState(products)
	const [selectedCategory, setSelectedCategory] = useState('All');

	const handleAddToCart = (product) => {
		console.log(product)
		dispatch(addToCart({...product, quantity:1}));
	};

	const handleAdjustQuantity = (product, newQuantity) =>{
		dispatch(adjustQuantity({...product, quantity:  newQuantity}))
	};

	const handleCategoryClick = category => {
    	setSelectedCategory(category);
  	};
  	const filteredProducts = selectedCategory === 'All'
    ? products
    : products.filter(product => product.category === selectedCategory);

    const categories = ['All', 'Mens Clothing', 'Women Clothing', 'Shoes', 'Accessories']

	
	return(
		<div className='px-24 pt-16 pb-16'>
		 <div className='flex justify-center'>
        {categories.map(category => (
        	
          <button
            key={category}
            onClick={() => handleCategoryClick(category)}
            className={`py-1  mx-2 rounded-full w-36 text-sm mb-12 hover:bg-orange-600 hover:border-0 ${selectedCategory === category ? 'bg-orange-600' : 'border border-black'}`}
          >
            {category}
          </button>
         
        ))}
      </div>
			{/*<div className='px-24 py-8 inline-flex gap-4 justify-center w-full text-sm'>
				<button 
					className=' py-1 px-4 rounded-full'
					onClick={() => handleCategoryClick('All')}
					>All Categories
				</button>
				<button
					className=' py-1 px-4 rounded-full'
					onClick={() => handleCategoryClick('womens clothing')}
					>Women's Clothing
				</button>
				<Link href='/' className='border border-black py-1 px-4 rounded-full'>Womens Categories</Link>
				<Link href='/' className='border border-black py-1 px-4 rounded-full'>Shoes</Link>
				<Link href='/' className='border border-black py-1 px-4 rounded-full'>Accessories</Link>
			</div>*/}
			<div className='products-grid px-8'>
			{filteredProducts.map(product =>(
				<div key={product.id} className='rounded-sm bg-white p-2 '>
					<div className='flex justify-center mb-4'>
					<Image
              			src={product.image}
              			alt={product.name}
              			width={240}
              			height={240}
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
						className='bg-black text-white w-10/12 text-sm'
						>Add to Cart</button>
					</div>

				</div>
				))}
			</div>
		</div>
		)

}
export default Products