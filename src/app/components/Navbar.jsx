"use client"
import React from 'react'
import { HiOutlineShoppingCart } from "react-icons/hi2";
import { ImMenu3 } from "react-icons/im";
import Link from 'next/link';
import { useState } from 'react';
import Image from 'next/image';


export default function Navbar() {
  const [cart, setCart] = useState(0)

  return (
    <nav className= "flex justify-between px[2rem] py-8">
      <ul className= "flex items-start gap-3">
        <li>
            <Link href="/">
            <Image src = "/illumine-transperent logo.png" width= "33" height= "33" alt= "logo" />
            </Link>
        </li>
        <li>
        <Link href= "/" className="flex flex-col">
            <span>Check it later</span>
            </Link> 
        </li>
      </ul>

      <ul className="justify-center hidden gap-3 md:flex">
        <li>
        <Link href="/latest">Latest</Link>
        </li>
        
        <li>
        <Link href="/topics">Topics</Link>
        </li>
        
        <li>
        <Link href="/about">About</Link>
        </li>

        <li>
        <Link href="/contact">Contacts</Link>
        </li>

        <li>
        <Link href="/cart">
          <HiOutlineShoppingCart />
          <span>{cart}</span>
        </Link>
        </li>
      </ul>

      <ul className="inline md:hidden">
        <li>
          <ImMenu3 />
        </li>
      </ul>
    </nav>
  )
}
