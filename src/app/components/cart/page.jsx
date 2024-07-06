"use client"
import {React, useContext, useState,} from "react";

import { ImCross } from "react-icons/im";
import Carted from './Carted';
import Link from 'next/link';
import { HiOutlineShoppingCart } from "react-icons/hi2";
import { useCart } from "./Cart";

export default function CartPage() {


    const { cartItems, setCartItems } = useCart();
  
    const { totalCart, setTotalCart } = useCart();
  
    const { totalItem, setTotalItem } = useCart(0);
  
    const { addToCart } = useCart();
  
    const [open2, setOpen2] = useState(true);
  
   
  
    const controlNav2 = () => {
      
      setOpen2(!open2);
  
    };
  
   
  
    return (
  
      <ul>
  
        <li>
  
          <Link href="" className="flex gap-3" onClick={controlNav2}>
  
            <HiOutlineShoppingCart />
  
            <span className="text-[20px] items-center">{totalItem}</span>
  
          </Link>
  
        </li>
  
        <div className="relative">
  
          {!open2 && (
  
            <div
  
              className="fixed top-0 left-0 w-screen h-screen bg-green-700 opacity-20 z-50"
  
              onClick={controlNav2} // this is to close cart when you click outside of it
              
              ></div>
              
            )}
  
        </div>
  
        <div
  
  className={`${
    
    open2 ? "hidden" : " flex flex-col max-w-96 mt-[-40px]"
    
  } lg:gap-14 md:gap-7 gap-6 flex-grow cart-positioning  self-center  shadow-md md:shadow-[0] md:mt-0 ease-in-out z-[60] overflow-y-scroll bg-white border-2 `}
  
  >
  
          <section className="flex justify-between pr-2 pt-6 border-b border-b-black w-[100%]">
  
            <li className="flex pl-[20%] justify-center">Your cart</li>
  
            <li onClick={controlNav2} className="cursor-pointer">
  
              <ImCross />
  
            </li>
  
          </section>
  
          <section>{<Carted/>}</section>
  
          <section>
  
            {cartItems.length === 0 ? (
  
              ""
              
            ) : (
  
              <section className="ml-1 w-[95%]">
  
                <p className="flex justify-between text-2xl">
  
                  <span>Subtotal</span>
  
                  <span className="font-bold ">&#x20A6;{totalCart}</span>
  
                </p>
  
                <button className="h-14 w-[100%] bg-black text-white rounded-md text-[1.2rem]">
  
                  Continue to Checkout
                  <p>If Backend Is Ready</p>
  
                </button>
  
              </section>
  
            )}
  
          </section>
  
        </div>
  
      </ul>
  
    );
  
  }
  
   
