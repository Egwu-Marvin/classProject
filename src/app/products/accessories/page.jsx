import React from 'react'
import Image from 'next/image'
import ProductImage from '../ProductImage'

export default function accessories() {
  return (
    <div className='grid grid-cols-3 pt-7'>
      
        <ProductImage src='/img/powerBox2.jpg' alt='laptop powerbank' pname='Laptop PowerBox' />
        

      
        <ProductImage src='/img/powerbank2.jpg' alt='powerbank' pname='Power Bank' />
        

      
        <ProductImage src='/img/headphoneStanding.jpg' alt='Wired headphone' pname='Wired Headphone' />
        

      
        <ProductImage src='/img/headphone.jpg' alt='Wireless headphone' pname='Wireless Headphone' />
        

      
        <ProductImage src='/img/earphone.jpg' alt='earbud' pname='Earbud' />
        

      
        <ProductImage src='/img/laptopCharger.jpg' alt='laptop charger' pname='Laptop Charger' />
        
    </div>
  )
}
