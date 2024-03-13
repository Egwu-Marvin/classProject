import Link from 'next/link'
import React from 'react'
import styles from './footer.module.css'
import Image from 'next/image'

const year = new Date().getFullYear()

export default function Footer() {
  return (
    <footer className={` h-[55vh] bg-yellow-50 ${styles.footer} `}>

      <div className='grid grid-cols lg:grid-cols-2'>
      <div>
     <div className='flex justify-between p-7'>
     <section>
      <h2 className='font-black'>Navigate</h2>
      <ul>
        <li>
          <Link href='/'>Home</Link>
        </li>

        <li>
          <Link href='/products'>Products</Link>
        </li>
        <li>

          <Link href='/'>Services</Link>
        </li>

        <li>
          <Link href='/about'>About</Link>
        </li>

        <li>
          <Link href='/contact'>Contact</Link>
        </li>
      </ul>
     </section>


     <section>
      <h2 className='font-black'>Shop</h2>
      <ul>
        <li>
          <Link href='/products'>All Products</Link>
        </li>

        <li>
          <Link href='/products/gadgets'>Gadgets</Link>
        </li>

        <li>
          <Link href='/products/accessories'>Accessories</Link>
        </li>


      </ul>
     </section>


     <section>
      <h2 className='font-black'>Account</h2>
      <ul>
        <li>
          <Link href='/'>Login</Link>
        </li>

        <li>
          <Link href='/'>Create Account</Link>
        </li>

        <li>
          <Link href='/'>Licence and Assets</Link>
        </li>
      </ul>
     </section>

     <section>
      <h2 className='font-black'>Care</h2>
      <ul>
        <li>
          <Link href='/contact'>Delivery</Link>
        </li>

        <li>
          <Link href='/contact'>Returns</Link>
        </li>

        <li>
          <Link href='/contact'>Contact</Link>
        </li>
      </ul>
     </section>
      </div>
      </div>

{/* sub */}

<div>
     <section className='pl-40 sm:pl-80 lg:pl-40 '>
      <h2 className='font-bold'>Subscribe</h2>
      <p>Join our newsletter and get vouchers and exclusive deals straight to your inbox</p>
     
                <form action="" method="post" className='p-3 flex mr-3'>              
                        <input placeholder="Enter Your Email Please" id="email" name="email" type="email" className='bg-yellow-700 text-white rounded-md '/> 
                    
                        <button type="submit" className='bg-yellow-700 rounded-md p-2 ml-4 text-white '>SUBSCRIBE</button>
                </form>
                <p className='text-sm'>
                  By subscribing you agree to with our <Link href='/' className='underline'>Privacy Policy</Link> and provide concent to recieve updates from us
                </p>
            
     </section>
</div>
     </div>
       
       <p className='bg-yellow-800 text-yellow-800'>.</p>
        <div className='flex font-bold justify-center'> Copyright &copy; {year} Illumine Business Hub.
        <p className='pl-7 pr-1'>Powered By </p> 
        <Link href='/'>  
        <Image src = '/img/univelcity_logo.jpg' alt= 'univelcity logo' height={50} width={100} /> 
        </Link>
        <Image src = '/img/frontEnd6B7.jpg' alt= 'univelcity logo' height={200} width={150} className='pt-1'/> 
        </div>

            
    </footer>
  )
}