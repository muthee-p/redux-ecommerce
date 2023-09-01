'use client'
import { Provider } from 'react-redux';
import store from '@store';
import Nav from '@components/Nav';
import Footer from '@components/Footer';
import Products from '@components/Products';
import Image from 'next/image'


const Shop = () =>{
  return (
    <Provider store={store}>
      <Nav/>
        <div className='bg-shop flex items-center justify-end w-full '>
         <div className='flex items-start flex-col w-1/3 mr-24'>
         
         <Image
              src="/shopping.svg"
              alt="shopping Logo"
              className="mb-4 "
              width={24}
              height={24}
              priority
            />
           <h4 className='text-5xl font-bold text-gray-900'>
            <span className='text-orange-600'>Elevate </span> Your Wardrobe with Timeless Elegance.</h4>
          
          </div>
          </div>
      <main className="flex min-h-screen flex-col items-center justify-between">


          <Products />
      
        
      </main>
      <Footer/>
    </Provider>
  )
}

export default Shop
