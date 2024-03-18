import React from 'react'
import { products } from '../page'

export default function Page({params}) { 
  const productCart = products.find(product => product.name.split(' ').join('-') == params.prodSlug)
  return (
    <div className='grid grid-cols-1 py-12 px-32 sm:grid-cols-2 pl-9 text-2xl '>
      <div className='p-4 items-center'>
        {productCart.visual }
        {productCart.name}
     <p> Price: ₦{productCart.price} </p>
      {/* <h2>{productCart.type}</h2> */}
        
      </div>

      <span className='text-2xl sm:text-3xl '>
        <p className='font-bold'>Description:</p> 
        {productCart.description[0]}
      </span>

    </div>
  )
}
