import React from 'react'
import { Carousel } from 'antd';
import Slider1 from "../../../public/slider1.png"
import Slider2 from "../../../public/slider2.png"
import Slider3 from "../../../public/slider3.webp"
import Slider4 from "../../../public/slider4.png"
import Image from 'next/image';

const SliderBanner = () => {
  
  return (
   <Carousel autoplay className="w-[100%]" >
        <Image className="w-[100%] object-cover max-md:h-[350px]"   src={Slider1} alt='banner'/>
        <Image className="w-[100%] object-cover max-md:h-[350px]"  src={Slider2} alt='banner'/>
         <Image className="w-[100%] object-cover max-md:h-[350px]" src={Slider3} alt='banner'/>
        <Image className="w-[100%] object-cover max-md:h-[350px]"  src={Slider4} alt='banner'/>
  </Carousel>
  )
}

export default SliderBanner