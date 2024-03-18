import Image from 'next/image'
import React from 'react'
import ProductImage from './ProductImage'


export const products = [
  { name: "Apple Laptop", 
  description: ["Apple MacBook Pro is a macOS laptop with a 13.30-inch display that has a resolution of 2560x1600 pixels. It is powered by a Core i5 processor and it comes with 12GB of RAM. The Apple MacBook Pro packs 512GB of SSD storage."], 
  type: "laptop",
  price: 1599000, 
  visual: <Image src = {`/img/appleLaptop.jpg`} alt = "apple laptop" 
  width =  {250} height = {0} /> },


  { name: "canonCamera", 
  description: ["Canon EOS (Electro-Optical System) is an autofocus single-lens reflex camera (SLR) and mirrorless camera series produced by Canon Inc. Introduced in 1987 with the Canon EOS 650, all EOS cameras used 35 mm film until October 1996 when the EOS IX was released using the new and short-lived APS film"], 
  type: "camera",
  price: 5600000, 
  visual: <Image src = {`/img/canonCamera.jpg`} alt = "canon camera" 
  width =  {250} height = {0} /> },

  { name: "Phone Charger", 
  description: ["Model: Universal PD Charger USB-C Output: 5V ⎓ 3A / 9V ⎓ 2A USB-A Output: 5V ⎓ 4.5A (max.) Fast Charging Speed Fast Dual Port with High Charging ability Universal charger for; Smartphones, Tablets, Music Player, Bluetooth headset and Speakers, etc..."], 
  type: "camera",
  price: 5600000, 
  visual: <Image src = {`/img/charger.jpg`} alt = "Phone Charger" 
  width =  {250} height = {0} /> },

  { name: "Laptop Charger", 
  description: ["New Hp 19.5V 3.33A Laptop Charger – blue/m for all model of HP Envy 19.5V-3.33A.  Also all models of HP Pavillion 15 Laptop with rating of 19.5V-3.33A. Place your order now at best price for all our HP Pavilion Replacement Laptop Charger in Nigeria Market. Material: Plastic. Product: AC Adapter  Fit for:    All HP of same voltage Output Voltage‎:‎ 19.5VOutput Current‎:‎ 3.33A. Total Output Power‎:‎ 65W Tip pin "], 
  type: "camera",
  price: 5600000, 
  visual: <Image src = {`/img/laptopCharger.jpg`} alt = "Laptop Charger" 
  width =  {250} height = {0} /> },


  { name: "Drone", 
  description: ["Featuring a 1-inch CMOS sensor, powerful autonomous functions, and a compact body weighing less than 600 g, DJI Air 2S is the ultimate drone for aerial photographers on the move. Take this all-in-one aerial powerhouse along anywhere to experience and record your world in stunning detail."],
  type: "drone",
  price: 2500000,
  visual: <Image src = {`/img/smalDrone.jpg`} alt = "dji drone" 
  width =  {300} height = {0} /> },


  { name: "DJ1 Drone", 
  description: ["Featuring a 1-inch CMOS sensor, powerful autonomous functions, and a compact body weighing less than 600 g, DJI Air 2S is the ultimate drone for aerial photographers on the move. Take this all-in-one aerial powerhouse along anywhere to experience and record your world in stunning detail."], 
  type: "drone",
  price: 2500000, 
  visual: <Image src = {`/img/dronDJ1.jpg`} alt = "dronDJ1" 
  width =  {250} height = {0} /> },


  { name: "earbud", 
  description: ["Bluetooth. Bluetooth is a specification that almost all earbuds have. Noise canceling. Noise canceling is a specification you see more and more often with earbuds. Built-in microphone. Almost all earbuds have a built-in microphone. Waterproofness. NFC. Hi-Res audio."], 
  type: "earphone",
  price: 46000, 
  visual: <Image src = {`/img/earphone.jpg`} alt = "earbud" 
  width =  {400} height = {0} /> },


  { name: "jbl headphone", 
  description: ["Frequency Response: This is the range of bass, mids, and treble. Impedance: Lower-impedance headphones require less power to deliver high audio levels. Sensitivity: This refers to how loud the headphones can get."], 
  type: "headphone",
  price: 164000, 
  visual: <Image src = {`/img/headphone.jpg`} alt = "jbl headphone" 
  width =  {400} height = {300} /> },


  { name: "headphone wired", 
  description: ["Frequency Response: This is the range of bass, mids, and treble. Impedance: Lower-impedance headphones require less power to deliver high audio levels. Sensitivity: This refers to how loud the headphones can get."], 
  type: "headphone",
  price: 1.99, 
  visual: <Image src = {`/img/headphoneStanding.jpg`} alt = "headphone wired" 
  width =  {250} height = {200} /> },


  { name: "Iphone 15", 
  description: ["Splash, Water and Dust Resistant 3 Rated IP68 (maximum depth of 6 metres up to 30 minutes) under IEC standard 60529. Chip. A16 Bionic chip. ..Camera. Advanced dual-camera system. ...Video Recording. 4K video recording at 24 fps, 25 fps, 30 fps or 60 fps. ...TrueDepth Camera. 12MP camera. ...Face ID. ...Safety. ...Cellular and Wireless."], 
  type: "phone",
  price: 1500000, 
  visual: <Image src = {`/img/iphone15InBox.jpg`} alt = "Iphone15" 
  width =  {400} height = {300} /> },


  { name: "LCD Power Bank", 
  description: ["Splash, Water and Dust Resistant 3 Rated IP68 (maximum depth of 6 metres up to 30 minutes) under IEC standard 60529. Chip. A16 Bionic chip. ..Camera. Advanced dual-camera system. ...Video Recording. 4K video recording at 24 fps, 25 fps, 30 fps or 60 fps. ...TrueDepth Camera. 12MP camera. ...Face ID. ...Safety. ...Cellular and Wireless."], 
  type: "powerbank",
  price: 1500000, 
  visual: <Image src = {`/img/powerBank.jpg`} alt = "powerbank" 
  width =  {300} height = {300} /> },

  { name: "Power Bank", 
  description: ["Splash, Water and Dust Resistant 3 Rated IP68 (maximum depth of 6 metres up to 30 minutes) under IEC standard 60529. Chip. A16 Bionic chip. ..Camera. Advanced dual-camera system. ...Video Recording. 4K video recording at 24 fps, 25 fps, 30 fps or 60 fps. ...TrueDepth Camera. 12MP camera. ...Face ID. ...Safety. ...Cellular and Wireless."], 
  type: "powerbank",
  price: 1500000, 
  visual: <Image src = {`/img/powerBank2.jpg`} alt = "powerbank" 
  width =  {300} height = {300} /> },


  { name: "Playstation5", 
  description: ["The original PlayStation 5 console with optical drive, and DualSense controller.  CPU	Custom 8-core AMD Zen 2 Variable frequency up to 3.5 GHz. Memory	16 GB/256-bit GDDR6 SDRAM 512 MB DDR4 RAM (used as SSD controller cache) Storage	Custom 825 GB PCIe 4.0 NVMe SSD 1 TB in 2023 version"], 
  type: "game console",
  price: 2.99, 
  visual: <Image src = {`/img/playstation5.jpg`} alt = "playstation5" 
  width =  {300} height = {300} /> },


  { name: "Playstation4", 
  description: ["The original PlayStation4 console with optical drive, and DualSense controller.  CPU	Custom 8-core AMD Zen 2 Variable frequency up to 3.5 GHz. Memory	8 GB/256-bit GDDR6 SDRAM 512 MB DDR4 RAM (used as SSD controller cache) Storage	Custom 825 GB PCIe 4.0 NVMe SSD 1TB in 2023 version"], 
  type: "game console",
  price: 2.99, 
  visual: <Image src = {`/img/playstation4.jpg`} alt = "playstation4" 
  width =  {300} height = {300} /> },


  { name: "Black VR", 
  description: ["Memory	4 GB RAM or more	8 GB RAM or more. Video output	DisplayPort 1.2 or newer	DisplayPort 1.2 or newer USB port	1x USB 3.0 or newer	1x USB 3.0 or newerOperating system	Windows 10	Windows 10, Windows 11"], 
  type: "vr",
  price: 3.49, 
  visual: <Image src = {`/img/vr2.jpg`} alt = "black vr" 
  width =  {400} height = {300} /> },

  { name: "White VR", 
  description: ["Memory	4 GB RAM or more	8 GB RAM or more. Video output	DisplayPort 1.2 or newer	DisplayPort 1.2 or newer USB port	1x USB 3.0 or newer	1x USB 3.0 or newerOperating system	Windows 10	Windows 10, Windows 11"], 
  type: "vr",
  price: 3.49, 
  visual: <Image src = {`/img/vr.jpg`} alt = "White VR" 
  width =  {400} height = {300} /> },


  { name: "New Age Powerbank", 
  description: ["Oranges are juicy and packed with vitamin C, making them great for juicing. They add a burst of citrus flavor to your morning routine.", "Oranges are not only refreshing but also a nutritious choice."], 
  type: "Citrus Fruits",
  price: 1.99, 
  visual: <Image src = {`/img/newAgePowerBank.jpg`} alt = "powerbank" 
  width =  {300} height = {200} /> },


  { name: "Canon Camera", 
  description: ["Image sensor technology.Image engine technology.Dual-pixel CMOS AF.Area AF (autofocus) technology. An optical viewfinder that captures the subject's movement in real time. High-speed continuous shooting up to approx. 16 frames per second. New mirror actuating system."], 
  type: "camera",
  price: 3.49, 
  visual: <Image src = {`/img/canonCamera.jpg`} alt = "canon camera" 
  width =  {300} height = {300} /> },


  { name: "JBL Headphone",
  description: ["Strawberries are juicy and versatile, making them ideal for a wide range of desserts.", "They pair wonderfully with chocolate, cream, and other fruits.", "Whether you're making a strawberry shortcake or adding them to your morning breakfast, they are a crowd-pleaser."], 
  type: "Berries",
  price: 2.79, 
   visual: <Image src = {`/img/jblHeadphone.jpg`} alt = "strawberry" 
   width =  {300} height = {300} /> },


  { name: "Headphone Standing", 
  description: ["Red raspberries are known for their delicate and sweet taste.", "They are perfect for fresh consumption and can be enjoyed on their own or added to various desserts.", "These vibrant berries add a touch of elegance to your culinary creations."], 
  type: "Headphone", 
  price: 4.29, 
  visual: <Image src = {`/img/headphoneStanding.jpg`} alt = "raspberries" 
  width =  {300} height = {300} />},
  
  { name: "JBL Gray headphone", 
  description: ["Red raspberries are known for their delicate and sweet taste.", "They are perfect for fresh consumption and can be enjoyed on their own or added to various desserts.", "These vibrant berries add a touch of elegance to your culinary creations."], 
  type: "Headphone", 
  price: 4.29, 
  visual: <Image src = {`/img/headphone.jpg`} alt = "JBL Gray Headphone" 
  width =  {300} height = {300} />},

  { name: "Iphone15 Pro", 
  description: ["Red raspberries are known for their delicate and sweet taste.", "They are perfect for fresh consumption and can be enjoyed on their own or added to various desserts.", "These vibrant berries add a touch of elegance to your culinary creations."], 
  type: "phone", 
  price: 4.29, 
  visual: <Image src = {`/img/Iphone15.jpg`} alt = "Iphone15 Pro" 
  width =  {300} height = {300} />},

  { name: "Wired Headphone", 
  description: ["Splash, Water and Dust Resistant 3 Rated IP68 (maximum depth of 6 metres up to 30 minutes) under IEC standard 60529. Chip. A16 Bionic chip. ..Camera. Advanced dual-camera system. ...Video Recording. 4K video recording at 24 fps, 25 fps, 30 fps or 60 fps. ...TrueDepth Camera. 12MP camera. ...Face ID. ...Safety. ...Cellular and Wireless."], 
  type: "phone",
  price: 1500000, 
  visual: <Image src = {`/img/headphoneStanding.jpg`} alt = "Wireless Headphone" 
  width =  {300} height = {300} /> },

  { name: "Smart Watch", 
  description: ["Red raspberries are known for their delicate and sweet taste.", "They are perfect for fresh consumption and can be enjoyed on their own or added to various desserts.", "These vibrant berries add a touch of elegance to your culinary creations."], 
  type: "watch", 
  price: 4.29, 
  visual: <Image src = {`/img/smatWatchGif.jpg`} alt = "Smart Watch" 
  width =  {300} height = {300} />},

  { name: "Earbud", 
  description: ["Red raspberries are known for their delicate and sweet taste.", "They are perfect for fresh consumption and can be enjoyed on their own or added to various desserts.", "These vibrant berries add a touch of elegance to your culinary creations."], 
  type: "Earbud", 
  price: 4.29, 
  visual: <Image src = {`/img/earphone.jpg`} alt = "Earbud" 
  width =  {300} height = {300} />},

  

  { name: "Power Box", 
  description: ["Bananas are sweet and portable, perfect for snacking.", "They are a convenient source of energy and can be enjoyed on the go"], 
  type: "Tropical Fruits",
  price: 0.99, 
  visual: <Image src = {`/img/powerBox2.jpg`} alt = "banana" 
  width =  {300} height = {200} />}] 



  export default function AllProducts() {
    return (
      
      <div className='grid  grid-cols-2 lg:grid-cols-3 pt-7 '>


      
        <ProductImage src='/img/jblHeadphone.jpg' alt='Canon Camera' pname='JBL Headphone'/>
  
        <ProductImage src='/img/Vr2.jpg' alt='vr black' pname='Black VR' />
    
        <ProductImage src='/img/headphoneStanding.jpg' alt='Wired Headphone' pname='Headphone Standing'/>

      
        <ProductImage src='/img/powerBox2.jpg' alt='PowerBox' pname='Power Box'/>
        
        <ProductImage src='/img/newAgePowerBank.jpg' alt='smart watch' pname='New Age Powerbank'/>
        
        <ProductImage src='/img/Iphone15.jpg' alt='Iphone15 Pro' pname='Iphone15 Pro'/>
     
        <ProductImage src='/img/canonCamera.jpg' alt='Canon Camera' pname='Canon Camera'/>
        
        <ProductImage src='/img/headphone.jpg' alt='Canon Camera' pname='JBL Gray headphone'/>

        <ProductImage src='/img/appleLaptop.jpg' alt='DJ1 Drone on flieght' pname='Apple Laptop'/>

        <ProductImage src='/img/playstation5.jpg' alt='Playstation5' pname='Playstation5'/>
     
        <ProductImage src='/img/iphone15InBox.jpg' alt='iphone15' pname='Iphone 15'/>
        
        <ProductImage src='/img/Smalldron.jpg' alt='small drone' pname='Drone' />
        
        <ProductImage src='/img/playstation4.jpg' alt='Playstation4' pname='Playstation4'/>

        <ProductImage src='/img/powerBank.jpg' alt='small drone' pname='LCD Power Bank' />
        
        <ProductImage src='/img/vr.jpg' alt='vr white' pname='White VR'/>
      
        <ProductImage src='/img/powerBank2.jpg' alt='Power bank' pname='Power Bank'/>
      
        <ProductImage src='/img/dron.jpg' alt='DJ1 Drone on flieght' pname='DJ1 Drone'/>

        <ProductImage src='/img/smartWatch.avif' alt='Smart Watch' pname='Smart Watch'/>

      
        {/* <products/> */}
      </div>
    
  )
}