'use client'
import React, {createContext, useContext, useEffect, useState, } from 'react';
import { products } from '@/app/products/page';

const CartContext = createContext()
export const CartProvider = ({children}) => {
  // useEffect (() => {
    
    const [cartItems, setCartItems] = useState([]);
  
  const [totalCart, setTotalCart] = useState(0);
  
  const [totalItem, setTotalItem] = useState(0);
  
  const [quant, setQuant] = useState(1);
  
  
  useEffect (() => {
  
  const productCart = products.find((product) => product.name.split(" ").join("-") === window.location.pathname.split("/").slice(-1)[0] );
    
      },[]);
      
      const addToCart = (product) => {
        
        // Check if the product already exists in the addedItems array
        
        console.log(

          product.name.split(" ").join("-") === window.location.pathname.split("/").slice(-1)[0]
          
        );
        
        console.log(product.name.split(" ").join("-"));
        
        console.log(window.location.pathname.split("/").slice(-1)[0]);
        
        const prodCardIndex = cartItems.findIndex((item) => item.name === product.name);
        
        
        if (!quant || quant < 1) {
          
          alert("Quantity must be at least 1.");
          
          setQuant(1)
          
          return; // Exit the function if quant is less than 1 or empty
          
        }
        

    if (prodCardIndex !== -1) {
      
      // If the product exists, update its quantity
      
      const updatedAddedItems = [...cartItems];
      
      const totalQuantity = updatedAddedItems[prodCardIndex].quantity + quant;
      
      if (totalQuantity > product.stock) {
        
         
        return;
        
      }
      
      updatedAddedItems[prodCardIndex].quantity++;
      
      updatedAddedItems[prodCardIndex].totalPrice += product.price;
      
      setCartItems(updatedAddedItems);
      
      
      
      setTotalCart(Number((totalCart + parseFloat(product.price)).toFixed(2)));
      
      let tQuant = 1;
      
      setTotalItem(totalItem + tQuant++);
      
      const updateCart = (productCart) => {setTotalItem(Number(quant) + totalItem);

      };
      
      
      
      if (updatedAddedItems[prodCardIndex].quantity === product.stock) {
        
        alert('all stock in cart')
        
        return;
        
      }
      
      
      
      if (!productCart) {
        
        // If the product doesn't exist, add it to addedItems array
        
        const updatedAddedItems = [...cartItems];
        
        const updateCart = (productCart) => {setTotalItem((prev) => prev + Number(quant));
        };
      }
      
      else
      {updateCart();

        updatedAddedItems[prodCardIndex].totalPrice +=

        product.price * quant - product.price;
            
        updatedAddedItems[prodCardIndex].quantity += parseInt(quant) - 1;
            
        setTotalCart(Number((totalCart + parseFloat(product.price*quant)).toFixed(2)));
          }} 
          
          else {
            
            if (productCart) {
              
              setCartItems((prevItems) => [
                
                ...prevItems,
                
                { ...product, quantity: quant, totalPrice: product.price * quant },
                
              ]);
              
              setTotalCart((...prevItems) =>
                
                Number(parseFloat(prevItems) + parseFloat(product.price * quant))
                
              );
              
              
              
              setTotalItem((...prevItems) =>
                
                Number(parseInt(prevItems) + parseInt(quant))
                
              );
              
              
              
              console.log(quant);
              
              console.log(typeof(quant))
              
            } 
            
            else {
              
              setCartItems((prevItems) => [
                
                ...prevItems,
                
                { ...product, quantity: 1, totalPrice: product.price },
                
              ]);
              
              setTotalCart((...prevItems) =>
                
                Number((parseFloat(prevItems) + parseFloat(product.price)))
                
              );
              
              setTotalItem((...prevItems) => Number(parseInt(prevItems) + 1));
              
              
              
            }
            
          }
          
          setQuant(1);
          
        };
        
        
        
        
        return (
          
          <CartContext.Provider
          
          value={{
            
            cartItems,
            
            setCartItems,
            
            totalCart,
            
            setTotalCart,
            
            totalItem,
            
            setTotalItem,
            
            addToCart,
            
            quant,
            
            setQuant,
            
            
          }}
          
          >

      {children}

    </CartContext.Provider>
  );
  
  // },[]);
};



export const useCart = () => {
  
  return useContext(CartContext);
  
};


// if(typeof window !== "undefined") {
// }

