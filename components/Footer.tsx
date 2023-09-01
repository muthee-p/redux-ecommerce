import Link from 'next/link';
const Footer = () => {

  return (
    <div className='w-full bg-black text-white text-xs md:px-8 px-4 py-4 bottom-0 flex justify-around'>
      <div className='flex flex-col w-1/5 hidden md:block'>
      <h4 className='text-sm mb-2'>YouShop</h4>
      <p>Elevate Your Wardrobe with Timeless Elegance and Unparalleled Style.</p>
      </div>

      <div className='flex flex-col'>
        <h4 className='text-sm mb-2'>Quick links</h4>
        <Link href="/" className='hover:text-gray-200'>Home
        </Link>
        <Link href="/shop" className='hover:text-gray-200'>Shop
        </Link>
      </div>

      <div className='flex flex-col'>
        <h4 className='text-sm mb-2'>Categories</h4>
          <Link href='/' className=''>All Categories</Link>
          <Link href='/' className=''>Mens Clothing</Link>
          <Link href='/' className=''>Womens Categories</Link>
          <Link href='/' className=''>Shoes</Link>
          <Link href='/' className=''>Accessories</Link>
      </div>

      <div className='flex flex-col'>
        <h4 className='text-sm mb-2'>Socials</h4>
          <Link href='/' className=''>Instagram</Link>
          <Link href='/' className=''>Twitter</Link>
          <Link href='/' className=''>Facebook</Link>
          <Link href='/' className=''>Threads</Link>
          <Link href='/' className=''>Tiktok</Link>
      </div>
    </div>
  );
};

export default Footer;
