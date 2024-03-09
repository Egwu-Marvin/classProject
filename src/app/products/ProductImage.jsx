import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

export default function ProductImage({src,alt,pname}) {
  return (
    <div className='p-4 border'>
      <Link href={`/products/${pname.split(' ').join('-')}`} title={pname}>
    <Image src={src} alt={alt} width={100} height={100} className='w-[400px] h-[400px]' />
    <p className='text-[.8rem] md:text-[1rem] lg:text-[1.2rem]'>{pname}</p>
      </Link>
    </div>
  )
}
