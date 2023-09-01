'use client'
import { Provider } from 'react-redux';
import store from '@store';
import Nav from '@components/Nav';
import Products from '@components/Products';
import Image from 'next/image'
import Footer from '@components/Footer';
import Link from 'next/link';


export default function Home() {
  return (
    <Provider store={store}>
      <main className="flex min-h-screen flex-col items-center justify-between">
        <div className="bg-cover-full">

        <Nav />

        <div className='mt-[16rem] w-2/3 px-24 backdrop-blur-lg p-8 flex flex-col items-center justify-center '>
        <div className=''>
          <h1 className='text-8xl text-white font-serif text-center'>
            Wear the best
          </h1>
          <p className=' text-gray-900 py-8 px-16'>
            Discover a curated collection that transcends trends, embracing both the classic and the contemporary. From graceful silhouettes to intricate details, our passion for style is evident in every stitch.
            </p>
            <Link href='/shop' className='bg-teal-900 ml-16 px-8 py-2 text-sm text-white rounded-full'>
              Shop Now -->
            </Link>
          </div>
        </div>
        </div>

        <section className='py-16 text-sm'>
        <div className='w-full inline-flex gap-2 px-52'>

          <div className='bg-gray-50 w-1/3 p-4 rounded-md flex flex-col items-center justify-center'>
            <div className='bg-gray-100 p-4 rounded-full mb-2'>
            <Image
              src="/truck.svg"
              alt="truck Logo"
              className=""
              width={34}
              height={34}
              priority
            />
            </div>
            <p>Super Fast and Free Delivery</p>
          </div>

          <div className='w-1/3'>
            <div className='bg-gray-50 p-4 rounded-md gap-2 flex mb-2 items-center justify-center'>
            <div className='bg-gray-100 p-4 rounded-full'>
            <Image
              src="/shield.svg"
              alt="shield Logo"
              className=" "
              width={24}
              height={24}
              priority
            />
            </div>
            <p>Non-contact Shipping</p>
          </div>

          <div className='bg-gray-50 p-4 flex gap-2 rounded-md items-center justify-center'>
            <div className='bg-gray-100 p-4 rounded-full'>
            <Image
              src="/money.svg"
              alt="Money-back Logo"
              className=""
              width={24}
              height={24}
              priority
            />
            </div>
            <p>Money-back Guaranteed</p>
          </div>
          </div>
          <div className='bg-gray-50 w-1/3 p-4 rounded-md flex flex-col items-center justify-center'>
            <div className='bg-gray-100 p-4 rounded-full mb-2'>
            <Image
              src="/card.svg"
              alt="Card Logo"
              className=""
              width={24}
              height={24}
              priority
            />
            </div>
            <p>Super Secure Payment System</p>
          </div>
        </div>
          <Products />
      
          
        </section>
        <Footer />
      </main>
    </Provider>
  )
}
