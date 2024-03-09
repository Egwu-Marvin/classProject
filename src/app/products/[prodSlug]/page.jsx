import React from 'react'
import { products } from '../page'

export default function Page({params}) { 
  const productCart = products.find(product => product.name.split(' ').join('-') == params.prodSlug)
  return (
    <div className='grid grid-cols-2 pt-7 px-36'>
      <div className='pl-32 items-center'>
        {productCart.visual}
        {productCart.name}
     <p> Price: {productCart.price} </p>
        
      </div>

      <span>
        <p className='font-bold'>Description:</p> 
        {productCart.description[0]}
      </span>

      {/* <h2>{productCart.type}</h2> */}
    </div>
  )
}
