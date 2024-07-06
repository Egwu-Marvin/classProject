import Image from 'next/image'
import React from 'react'

export default function About() {
  return (
    <div className='max-w-[100%] text-xl'>  
      <div className='grid grid-cols-2 items-center pl-20 md:pl-40 lg:pl-52 pt-8'>
      <p>At <span>Illumine Business Hub</span> your satisfaction is our topmost priority because when that smile comes from your heart to your face, we are satisfied also. That&apos;s why we go in and out of the way to make sure that what you get from quality to durability is always the best so that smile never stop.</p>

      <div>
        <Image src='/img/smilingVR.jpg' height={300} width={300} alt='VR User' />
      </div>
      </div>

      <div  className='grid grid-cols-2 items-center pl-20 md:pl-40 lg:pl-52 pt-32'>
      
      
        <p>Don&apos;t be surprise is a business hub that&apos;s why Gadgets and accessories is just the beginning at <span>Illumine Business Hub</span> as we go further in making available quality and hygienic food items such as undiluted red oil and vegetable oil, Oron grayfish, rice, beans, egusi, just name it we got it</p>
        

        <div>
          <Image src='/img/palmOil.png' alt='Palm Oil' height={300} width={200} />
        </div>

      </div>

      <div className=''>
        <h2 className='flex justify-center pb-10 font-black text-3xl '>Meet Our Suppliers</h2>
        <div className='flex space-x-16 justify-center  animate-bounce overflow-hidden'>
          <Image src='/img/TecnoLogo.png' alt='TecnoLogo' width={70} height={100} />
          <Image src='/img/samsungLogo.png' alt='SamsungLogo' width={70} height={100} />
          <Image src='/img/appleLogo.jpg' alt='AppleLogo' width={70} height={100} />
          <Image src='/img/redmiLogo.png' alt='RemiLogo' width={70} height={100} />
          <Image src='/img/oraimoLogo.jpg' alt='OraimoLogo' width={70} height={100} />
          <Image src='/img/jebraLogo.jpg' alt='JebraLogo' width={70} height={100} />
          <Image src='/img/univelcity_logo.jpg' alt='UnivelcityLogo' width={70} height={100} className='max-w-none'/>
          <Image src='/img/itelLogo.jpg' alt='ItelLogo' width={70} height={100} />
          
          <Image src='/img/hpLogo.jpg' alt='HpLogo' width={70} height={100} />

          <Image src='/img/newAgeLogo.jpg' alt='NewAgeLogo' width={70} height={100} />

        </div>

      </div>
    </div>
  )
}