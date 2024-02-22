import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export default function Home() {
  return (
    <main>
      <div className='border-solid justify-center items-center grid pt-7 font-bold'>
      <p>We Are</p>
      <h1 className='text-8xl text-yellow-700 font-bold'>Illumine Business Hub</h1>
      <p className='text-xl'>...Spectacular Gadgets And Accessories Is Just A Part Of The Picture</p>
      </div>

      <div className='grid grid-cols-2 items-center pl-[230px] pt-6 '>
        <Link href='/products' className='pr-7'>
          <p className='text-center'>Our Gadgets</p>
          <Image src= '/img/dronGif.jpg' alt='drone gif' height={50} width={700} />
        </Link>

        <Link href='/products/accessories'className='pl-12'>
          <p>Our Accessories</p>
        <Image src= '/img/headphones-3d.jpg' alt='headphone gif' height={300} width={280}  />
        </Link>
      </div>

    </main>
  )
}
