import React from 'react'
import { useCart } from './Cart';

export default function CartButton({productCart}) {
    const { addToCart } = useCart();
    
  return (
    <div className='flex justify-center pt-3'>
      <button onClick={()=>addToCart(productCart)} className=' font-extrabold text-2xl text-yellow-700 border-y-4 border-yellow-700'>Add To Cart</button>
      </div>
  )
}
