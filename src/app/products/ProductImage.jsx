import React from 'react'
import Image from 'next/image'

export default function ProductImage({src,alt,pname}) {
  return (
    <div className='p-4 border'>
    <Image src={src} alt={alt} width={700} height={700} className='w-[300px] h-[300px]' />
    <p>{pname}</p>
    </div>
  )
}
