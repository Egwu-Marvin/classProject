import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { products } from './page'

export default function ProductImage({src,alt,pname}) {
  return (
    <div className='p-4 border'>
      <Link href={`/products/${pname.split(' ').join('-')}`} title={pname}>
    <Image src={src} alt={alt} width={700} height={700} className='w-[400px] h-[400px]' />
    <p>{pname}</p>
    <p>{products.price}</p>
      </Link>
    </div>
  )
}
