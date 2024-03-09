import React from 'react'
import Link from 'next/link'


export default function layout({children}) {
  return (

    <div >
          <nav className='bg-yellow-700 flex justify-center text-white text-xl py-1 md:mx-32 lg:mx-64 rounded-b-xl border-t-4 border-yellow-900'>

  <Link href='/products' className='px-7 rounded animate-pulse'>
    All Products
  </Link>
 
  <Link href='/products/gadgets' className='px-7  rounded animate-pulse'>
    Gadgets
  </Link>

  <Link href='/products/accessories' className='px-7  rounded animate-pulse'>
    Accessories
  </Link>
  </nav>

  


      {children}
    </div>
  )
}
