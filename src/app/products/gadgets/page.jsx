import React from 'react'
import ProductImage from '../ProductImage'


export default function Gadgets() {
  return (
    
      <div className='grid grid-cols-2 lg:grid-cols-3 pt-7'>

        <ProductImage src='/img/playstation5.jpg' alt='Playstation5' pname='Playstation5'/>

        <ProductImage src='/img/headphoneStanding.jpg' alt='Wired Headphone' pname='Headphone Standing'/>
      
        <ProductImage src='/img/Smalldron.jpg' alt='small drone' pname='Drone' />
   
        <ProductImage src='/img/Vr2.jpg' alt='vr black' pname='Black VR' />
    
        <ProductImage src='/img/iphone15InBox.jpg' alt='iphone15' pname='Iphone 15'/>
      
        <ProductImage src='/img/smatWatchGif.jpg' alt='smart watch' pname='Smart Watch'/>
     
        <ProductImage src='/img/canonCamera.jpg' alt='Canon Camera' pname='Canon Camera'/>

        <ProductImage src='/img/jblHeadphone.jpg' alt='Canon Camera' pname='JBL Headphone'/>
     
        <ProductImage src='/img/playstation4.jpg' alt='Playstation4' pname='Playstation4'/>
   
        <ProductImage src='/img/vr.jpg' alt='vr white' pname='White VR'/>
      
        <ProductImage src='/img/dron.jpg' alt='DJ1 Drone on flieght' pname='DJ1 Drone'/>

        <ProductImage src='/img/appleLaptop.jpg' alt='DJ1 Drone on flieght' pname='Apple Laptop'/>

        {/* <ProductImage src='/img/powerBox2.jpg' alt='DJ1 Drone on flieght' pname='Power Box'/> */}
      
      </div>
    
  )
}
