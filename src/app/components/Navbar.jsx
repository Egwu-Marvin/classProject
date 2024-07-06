"use client"
import React from 'react'
// import { HiOutlineShoppingCart } from "react-icons/hi2";
import Link from 'next/link';
import { useState } from 'react';
import Image from 'next/image';
import { ImMenu3 } from "react-icons/im";
import { ImCross } from "react-icons/im";
import CartPage from './cart/page';



export default function Navbar() {
  // hooks are used to change the initial value of a state.
  const [cart, setCart] = useState(0)
  const [open, setOpen] = useState(true)

  function controlNav(){
    setOpen(!open)
  }
  
  return (
    <div>
    <nav className= "flex  justify-between px[2rem] py-0">
      <ul className= "flex items-center gap-7 ">
        <li className='pt-0'>
            <Link href="/">
            <Image src = "/img/illumine-transperent2.png" width= "100" height= "10" alt= "logo" className='pl-2 -mb-2 ml-7 ' />

            <span className='ml-3 text-xl  text-yellow-700 font-bold'>BUSINESS HUB</span> 
            <br />
            <span className='ml-7 text-yellow-700 font-bold text-[0.9rem] '>...Spectacular Gadgets And Accessories Is Just Part Of The Picture</span>
            </Link>
        </li>
        
      </ul>

      <ul className={` md:flex ${open ? 'hidden' : 'flex flex-col'} justify-center gap-7 p-8 font-bold text-yellow-700 text-xl `}>
        <li>
        <Link href="/">Home</Link>
        </li>
        
        <li>
        <Link href="/products">Products</Link>
        </li>
        
        <li>
        <Link href="/about">About</Link>
        </li>

        <li>
        <Link href="/contact">Contacts</Link>
        </li>

        <li className='flex gap-1 text-4xl'>
          <CartPage/>
        </li>

      </ul>

      <ul className={`md:hidden text-3xl ${open ? 'flex' : 'hidden'}`}>
        <li onClick={controlNav}>
          <ImMenu3 />
        </li>
      </ul>
      
      <ul className={`md:hidden text-2xl ${open ? 'hidden' : 'flex'}`}>
        <li onClick={controlNav}>
          <ImCross />
        </li>
      </ul>
    </nav>
      <span className='bg-yellow-700 flex justify-center text-white text-xl py-1'>
      <p><b>Free Shipping </b>on all orders above ₦700,000</p>
      </span>
      </div>
  )
}
