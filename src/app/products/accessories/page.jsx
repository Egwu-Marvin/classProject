import React from 'react'
import ProductImage from '../ProductImage'


export default function Accessories() {
  return (
    
      <div className='grid grid-cols-2 lg:grid-cols-3 pt-7'>
        
        <ProductImage src='/img/powerBox2.jpg' alt='PowerBox' pname='Power Box'/>

        <ProductImage src='/img/charger.jpg' alt='PowerBox' pname='Phone Charger'/>
        
        <ProductImage src='/img/newAgePowerBank.jpg' alt='New Age Power Bank' pname='New Age Powerbank'/>
     
        <ProductImage src='/img/powerBank.jpg' alt='Power Bank' pname='LCD Power Bank' />

        <ProductImage src='/img/laptopCharger.jpg' alt='Laptop Charger' pname='Laptop Charger' />
        
        <ProductImage src='/img/powerBank2.jpg' alt='Power bank' pname='Power Bank'/>
        
        <ProductImage src='/img/earphone.jpg' alt='Earbud' pname='Earbud'/>

        <ProductImage src='/img/headphoneStanding.jpg' alt='Earbud' pname='Wired Headphone'/>
      
      </div>
    
  )
}
