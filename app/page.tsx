'use client'
import { Provider } from 'react-redux';
import store from '@store';
import Nav from '@components/Nav';
import Products from '@components/Products';
import Image from 'next/image'


export default function Home() {
  return (
    <Provider store={store}>
      <main className="flex min-h-screen flex-col items-center justify-between p-24">
        <Nav />
        <h1>E-Commerce App</h1>
        <Products />
      
      </main>
    </Provider>
  )
}
