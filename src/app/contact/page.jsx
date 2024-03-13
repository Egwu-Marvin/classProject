import React from 'react'
import Image from 'next/image'

export default function Contact() {
  return (
    <div  className='grid grid-cols-2 '>
      
      
      <div className='col-span-1'>
         <ul className='text-[.8rem] sm:text-[1rem] md:text-[1.3rem]'>
            <li> Get in touch, we respond to all mail within 48 hours.</li>
            <li>email: contact@illuminebusinesshub.com </li>
            <li> phone: +2348038784781 </li>
            <li> address: Jakande Estate, Lagos Nigeria. </li>
            <li>Or lets meet on social media </li>
            </ul>
      </div>
           
            
      
      



       <div className='col-span-1 text-[.8rem] sm:text-[1rem] md:text-[1.3rem]'>
       <div className=' '>                            
          <input placeholder="Enter First Name" id="first_name" name="first_name" type="text" className='bg-yellow-50 rounded-md '/> 
    
         <input placeholder="Enter Last Name" id="last_name" name="last_name" type="text" className='bg-yellow-50 rounded-md mt-3'/> 
       </div>  

         <div className=' pt-7'>
         <input placeholder="Enter Email Please" id="email" name="email" type="text" className='bg-yellow-50  rounded-md '/> 
                        
         <input placeholder="Enter Phone Number" id="phone" name="phone" type="phone" className='bg-yellow-50  rounded-md mt-3'/> 
        </div>               
                    
        <button type="submit" className='bg-yellow-50 rounded-md mt-7  text-yellow-700 '>Submit</button>
        </div> 
     
     </div>
     
    
    
  )
}