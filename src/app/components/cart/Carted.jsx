"use client";

import {React, useContext} from "react";

import { useCart } from "./Cart";
import Image from "next/image";

 

export default function Carted() {

  const { cartItems, setCartItems } = useCart();

 

  return (

    <div>

      {cartItems.length === 0 ? (

        <p>Please, pick something to buy. There is nothing in your cart</p>

      ) : (

        cartItems.map((product, index) => (

          <div key={index}>

          <section className="pb-[10%]">
            <h2>
              {product.visual}
              {product.name}
            </h2>

            <p>Quantity: {product.quantity}</p>
          
            <p>Price: &#x20A6;{(product.totalPrice).toFixed(0)}</p>

            </section>

          </div>

        ))

      )}

    </div>

  );

}

 