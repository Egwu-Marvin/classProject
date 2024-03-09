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
    
    <main>
      
      <div className=' justify-center text-center grid -mb-28 font-bold items-center '>
        
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

      <div className='grid grid-cols-2 items-center pl-[200px] pt-6 md:grid '>
        <Link href='/products' className='pr-7'>
          <div className='text-center font-bold '><p className='mt-24'>Our Gadgets</p></div>
          <Image src= '/img/vrBlackfront.png' alt='Black VR' height={50} width={500} />
        </Link>

        <Link href='/products/accessories'className='pl-12 font-bold'>
          <p>Our Accessories</p>
        <Image src= '/img/powerBox2.jpg' alt='Laptop Powerbank' height={200} width={400}  />
        </Link>
      </div>
      

    </main>
  )
}
