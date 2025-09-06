import Image, { StaticImageData } from 'next/image';
import React from 'react'
type Props = {
  text:string;
  description:string;
  Img:StaticImageData
  span:string
}
export default function Result({text,description,Img,span}:Props) {
  return (
    <div className='flex z-100 items-center border-[2px] border-[#583CCF] bg-white/80 px-[15px] py-[20px] rounded-[8px] [box-shadow: 0px 0px 9.9px 0px #00000040] gap-[20px] w-full   ;
'>  
    <div className='border-[2px] border-[#00000014] bg-[#3012B314] rounded-[38px] w-[60px] h-[60px] flex items-center justify-center'>
      <Image  src={Img} alt='Icon' className='w-[30px] h-[30px]'/>
    </div>
      <div className='flex flex-col   flex-1 '>
        <h2 className='text-[18px] text-black font-manrope font-bold'><span className='text-[22px] text-black font-manrope font-bold pr-[6px]'>{span}</span>{text}</h2>
        <p className=' text-[12px] h-[30px]'>{description}</p>
      </div> 
    </div>
  )
}
