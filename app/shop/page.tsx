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
      <main className="flex min-h-screen flex-col items-center justify-between">


          <Products />
      
        
      </main>
      <Footer/>
    </Provider>
  )
}

export default Shop
