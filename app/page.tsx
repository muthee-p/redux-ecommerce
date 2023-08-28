'use client'
import { Provider } from 'react-redux';
import store from '@store';
import Nav from '@components/Nav';
import Products from '@components/Products';
import Image from 'next/image'
import Footer from '@components/Footer';


export default function Home() {
  return (
    <Provider store={store}>
      <main className="flex min-h-screen flex-col items-center justify-between">
        <div className="bg-cover-full">

        <Nav />

        <div className='mt-20 px-24 bg-white'>
          <h1 className='text-4xl font-bold '>
            Wear the best
          </h1>
          <p className='text-xl text-grey-700'>
            You name it we got it. Clothes in town for everyone</p>

        <div className='w-full inline-flex gap-2 px-24'>

          <div className='bg-gray-50 w-1/3 p-4 flex flex-col items-center justify-center'>
            <Image
              src="/cart.svg"
              alt="Vercel Logo"
              className="dark:invert bg-gray-100 p-4 rounded-full"
              width={24}
              height={24}
              priority
            />
            <p>Super Fast and Free Delivery</p>
          </div>

          <div className='w-1/3'>
            <div className='bg-gray-50 p-4 gap-2 flex mb-2 items-center justify-center'>
            <Image
              src="/next.svg"
              alt="Vercel Logo"
              className=" bg-gray-100 p-4 rounded-full"
              width={24}
              height={24}
              priority
            />
            <p>Non-contact Shipping</p>
          </div>

          <div className='bg-gray-50 p-4 flex gap-2 items-center justify-center'>
            <Image
              src="/cart.svg"
              alt="Vercel Logo"
              className="dark:invert bg-gray-100 p-4 rounded-full"
              width={24}
              height={24}
              priority
            />
            <p>Money-back Guaranteed</p>
          </div>
          </div>
          <div className='bg-gray-50 w-1/3 p-4 flex flex-col items-center justify-center'>
            <Image
              src="/cart.svg"
              alt="Vercel Logo"
              className="dark:invert bg-gray-100 p-4 rounded-full"
              width={24}
              height={24}
              priority
            />
            <p>Super Secure Payment System</p>
          </div>
        </div>
          <Products />
      
          </div>
        </div>
        <Footer />
      </main>
    </Provider>
  )
}
