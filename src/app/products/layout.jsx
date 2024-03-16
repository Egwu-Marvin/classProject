import React from 'react'
import Link from 'next/link'


export default function layout({children}) {
  return (

    <div >
          <nav className='bg-yellow-700 flex justify-center text-white text-xl sm:mx-20 md:mx-36 py-1 lg:mx-6 rounded-b-xl border-t-4 border-yellow-900'>

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
