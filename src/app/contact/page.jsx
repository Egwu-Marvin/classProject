import React from 'react'
import Image from 'next/image'
import { FaFacebookF } from "react-icons/fa6";
import { SiGmail } from "react-icons/si";
import { FaXTwitter } from "react-icons/fa6";
import { FaTiktok } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import Link from 'next/link';





export default function Contact() {
  return (
    <div>
      <div  className='grid grid-cols-2 pt-14 '>
      
      
      <div className='col-span-1 pl-28 '>
         <ul className='text-[.8rem] sm:text-[1rem] md:text-[1.3rem]'>
            <li> Get in touch, we respond to all mail within 48 hours.</li>
            
            <li className='flex'><p className='font-bold'>email:</p><Link href="mailto:egwumarvin@gmail.com" target='_blank'>contact@illuminebusinesshub.com</Link> </li>

            <li className='flex'> <p className='font-bold'>phone:</p> <Link href="tel:+2348038784781"> +2348038784781 </Link></li>

            <li className='flex'> <p className='font-bold'>address:</p> Jakande Estate, Lagos Nigeria. </li>
            </ul>
      </div>
           
           <Image src='/img/drone style.png' alt='slanted drone' fill='true' className='-z-10 pt-28 pl-[30%] '  />
            

       <div className='col-span-1 text-[.8rem] sm:text-[1rem] md:text-[1.3rem] ml-24'>
       <div className=' '>                            
          <input placeholder="Enter First Name" id="first_name" name="first_name" type="text" className='rounded-md mr-7 '/> 

         <input placeholder="Enter Last Name" id="last_name" name="last_name" type="text" className='rounded-md mt-3'/> 
       </div>  

         <div className=' pt-3 -mb-5 '>
         <input placeholder="Enter Email Please" id="email" name="email" type="text" className=' rounded-md mr-7'/> 
                        
         <input placeholder="Enter Phone Number" id="phone" name="phone" type="phone" className=' rounded-md mt-3'/> 
        </div>               
                    
        <button type="submit" className=' rounded-md mt-7  text-yellow-700 font-black bg-white  '>Submit</button>
        </div> 
     
     </div>


     <div>
        <p  className='justify-center flex items-center text-2xl mt-4  font-black '>We Can Also Meet On Social Media Through </p>
        <div className='justify-center flex gap-16 pt-3 text-yellow-700 text-4xl'>

         <Link href='https://www.facebook.com/profile.php?id=100064147050726' target='blank'>
         <FaFacebookF/>
         </Link>

         <Link href="mailto:egwumarvin@gmail.com">
         <SiGmail/>
         </Link>

         <FaXTwitter/>

         <FaTiktok/>

         <FaInstagram/>

        </div>
        </div>

     </div>

     
    
    
  )
}