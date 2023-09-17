'use client'

import { useDispatch } from 'react-redux';
import Image from 'next/image'
import { addToCart, adjustQuantity } from '../slices/cartSlice';
import products from '@utils/productData'
import { useState } from 'react';

interface Product {
	id: number;
	name: string;
	description: string;
	price: number;
	image: string;
	category: string;
	quantity: number | null;
  }

const Products = () =>{
	const dispatch = useDispatch();
	const [selectedCategory, setSelectedCategory] = useState<string>('All');

	const handleAddToCart = (product:Product) => {
		dispatch(addToCart({
			...product, quantity: 1,
			totalPrice: 0
		}));
	};

	const handleAdjustQuantity = (product: Product, newQuantity: number) =>{
		dispatch(adjustQuantity({...product, quantity:  newQuantity}))
	};

	const handleCategoryClick = (category: string) => {
    	setSelectedCategory(category);
  	};
  	const filteredProducts = selectedCategory === 'All'
    ? products
    : products.filter(product => product.category === selectedCategory)
	.map(product => ({
		..product, price: product.price.toLocaleString(),
	     }));

	

    const categories = ['All', 'Mens Clothing', 'Women Clothing', 'Shoes', 'Accessories']

	
	return(
		<div className='px-2 md:px-24 md:pt-16 pt-8 pb-16'>
		 <div className='flex md:justify-center w-screen md:w-full overflow-x-scroll md:overflow-x-hidden'>
        {categories.map(category => (
        	
          <button
            key={category}
            onClick={() => handleCategoryClick(category)}
            className={`py-1 mx-2 rounded-full px-4 md:px-0  md:w-36 text-sm mb-8 md:mb-12 hover:bg-orange-600 hover:border-0 ${selectedCategory === category ? 'bg-orange-600' : 'border border-black'}`}
          >
            {category}
          </button>
         
        ))}
      </div>
			
			<div className='products-grid md:px-8 px-2'>
			{filteredProducts.map((product) =>(
				<div key={product.id} className='rounded-sm bg-white p-2'>
					<div className='flex justify-center mb-4 '>
					<Image
              			src={product.image}
              			alt={product.name}
              			className=''
              			width={240}
              			height={240}
              			priority
            		/>
            		</div>
          <div className='flex flex-col md:h-64'>
          <div className='grow'>
          <h4 className='font-bold text-lg mb-2'>{product.name}</h4>
					<p className='text-sm py-2 text-gray-800'>{product.description}</p>
					<h3 className='text-lg  pt-2 pb-4 font-semibold'>ksh{product.price}</h3>
					</div>
					<div className=' inline-flex gap-2'>
					<input
              			type="number"
              			placeholder='1'
              			className='border w-2/12 text-center'
              			value={product.quantity !== null ? product.quantity: ''}
              			onChange={e =>
                			handleAdjustQuantity(product, parseInt(e.target.value))
              			}
            		/>
					<button 
						onClick={() => handleAddToCart(product)}
						className='bg-black text-white w-10/12 text-sm py-1'
						>Add to Cart</button>
					</div>
					</div>
				</div>
				))}
			</div>
		</div>
		)

}
export default Products
