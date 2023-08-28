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

          <Products />
      
          </div>
        </div>
        <Footer />
      </main>
    </Provider>
  )
}
