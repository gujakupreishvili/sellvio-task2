import Image, { StaticImageData } from 'next/image'
import React from 'react'
type Props = {
  title:string,
  description:string
  Img:StaticImageData
}

export default function Offers({title,description,Img}:Props) {
  return (
    <div className="bg-[linear-gradient(0deg,#3012B3_0%,#7B62E8_100%)] flex flex-col rounded-[8px] items-center justify-center h-[254px] w-[19%] max-w-[304px]">
      <div className='w-[60px] h-[60px] rounded-[30px] bg-white/12 flex items-center justify-center mb-[15px] '>
        <Image src={Img} alt='' />
      </div>
      <h1 className='xl:text-[18px] text-[14px] text-white font-medium font-manrope text-center px-[15px]'>{title}</h1>
      <p className='text-[#B3B3B3] xl:text-[12px] text-[11px] font-manrope font-medium text-center px-[15px] pt-[8px]'>{description}</p>
    </div>
  )
}
