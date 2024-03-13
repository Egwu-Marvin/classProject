import Image from 'next/image'
import Link from 'next/link'
import React from 'react'



export default function Home() {

//   const { tsParticles } = require("tsparticles-engine");
// const { loadExternalRemoveInteraction } = require("tsparticles-interaction-external-remove");

// (async () => {
//   await loadExternalRemoveInteraction(tsParticles);
// })();
  return (
    
    <main className='grid grid-cols-1'>
      
      <div className=' justify-center text-center grid  font-bold items-center '>
        
      <p className=' hover:animate-pulse text-yellow-700'>This Is </p>
      <span className='flex justify-center'>
          <Image src= '/img/vr user.avif' alt='vr user' height={50} width={700} />
      </span>
      <h1 className='text-8xl text-yellow-700 font-bold -mt-28 border-b-8 border-black'>Illumine Business Hub</h1>
      
      <p className=' -mt-2 text-yellow-700 border-t-8 border-yellow-700'></p>

              <div className=' -z-10 '>
              <Image src='/img/dronGif.jpg' alt='drone'  fill='true' />
            </div>
            
      </div>

      <div className='grid grid-cols-2  pt-6 '>
        <Link href='/products' className='col-span-1 w-[100%] flex flex-col justify-end items-end' >
          <div className='text-center font-bold ml-20 '><p className='mr-24'>Our Gadgets</p></div>
          <Image src= '/img/vrBlackfront.png' alt='Black VR' height={50} width={500} className=''/>
        </Link> 

        <Link href='/products/accessories' className='pl-12 font-bold col-span-1'>
          <p className=''>Our Accessories</p>
        <Image src= '/img/powerBox2.jpg' alt='Laptop Powerbank' height={200} width={400}  />
        </Link>
      </div>
      

    </main>
  )
}