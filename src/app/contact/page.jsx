import React from 'react'
import Image from 'next/image'

export default function Contact() {
  return (
    <div  className='grid grid-cols md:grid-cols-2 h-svh pl-52 '>
      <div>
      <div className='p-7'>
          <h1 className='font-bold text-center text-5xl text-yellow-700'> Contact Us</h1>
      
            <div className='py-9'>
              <ul>
            <li> Get in touch, we respond to all mail within 48 hours.</li>
            <li>email: contact@illuminebusinesshub.com </li>
            <li> phone: +2348038784781 </li>
            <li> address: Jakande Estate, Lagos Nigeria. </li>
            <li>Or lets meet on social media </li>
            </ul>
            </div>
      </div>
      </div>



 <div>
       <form action="" method=""  >   

      <div className='grid grid-cols pl-12 '>

      <div className='pb-7 pt-28  lg:left-[100px] '>                            
          <input placeholder="Enter First Name" id="first_name" name="first_name" type="text" className='bg-yellow-50 rounded-md '/> 
    
         <input placeholder="Enter Last Name" id="last_name" name="last_name" type="text" className='bg-yellow-50 rounded-md mt-3'/> 
       </div>  

         <div className=' pt-7'>
         <input placeholder="Enter Email Please" id="email" name="email" type="text" className='bg-yellow-50  rounded-md '/> 
                        
         <input placeholder="Enter Phone Number" id="phone" name="phone" type="phone" className='bg-yellow-50  rounded-md mt-3'/> 
        </div>               
                    
        </div> 
        <button type="submit" className='bg-yellow-50 rounded-md mt-7  text-yellow-700 '>Submit</button>
     </form>
     </div>
    </div>
  )
}
