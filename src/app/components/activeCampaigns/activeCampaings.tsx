import Image, { StaticImageData } from 'next/image'
import React from 'react'
import verify from "../../../../public/assets/contentImgs/verified-check-svgrepo-com 1.svg"
import start from "../../../../public/assets/contentImgs/star-svgrepo-com 1.svg"
import dollar from "../../../../public/assets/contentImgs/dollar-sign-svgrepo-com 1.svg"
import users from "../../../../public/assets/contentImgs/users-svgrepo-com 1.svg"
import Button from '../button/button'
import filter from "../../../../public/assets/contentImgs/filter-svgrepo-com 1.svg"
import calendar from "../../../../public/assets/contentImgs/calendar-svgrepo-com 1.svg"
type Props = {
  compaName: string;
  rate: string
  text:string
  pricePer1k:number,
  currentOrders:number,
  totalOrders:number
}


export default function ActiveCampaings({compaName ,rate ,text,pricePer1k,currentOrders,totalOrders}:Props) {
   const totalBudget = totalOrders * pricePer1k;
   const usedBudget = currentOrders * pricePer1k;
   const remainingBudget = Math.max(totalBudget - usedBudget, 0);
   const progress = Math.min((currentOrders / totalOrders) * 100, 100);
  return (
    <div className='flex flex-col border-[2px] border-[#3012B3CC] rounded-[8px] py-[23px] px-[25px]  w-[32%] h-[416px]'>
      <div className='flex justify-between '>
        <div className='flex items-center gap-[8px]'>
        <div className='border-[#0000007A] border-[0.5px] bg-[#D9D9D9] rounded-[8px] w-[28px] h-[28px]'></div>
        <p className='flex items-center text-[22px] font-bold font-manrope'>{compaName} <span className='ml-[7px] '><Image  src={verify} alt=''/></span></p>
        </div>
        <div className='flex items-center gap-[4px]'>
          <Image  src={start} alt=''/>
          <p className='text-[14px] font-bold text-black font-manrope'>{rate}</p>
        </div>
      </div>
      <p className='text-[14px] text-black font-normal font-manrope mt-[19px]'>პოპულარული კვირის ჰაილაითები</p>
      <div className='flex flex-row gap-[9px] mt-[8px]'>
        <Button text="პოპულარული" className='border-[#3012B3] border-[0.5px] bg-[#F1E7FF] text-[#3012B3] text-[10px] font-manrope font-normal px-[10px] py-[6px] rounded-[60px]' />
        <Button text="ტრენდი" className='border-[#3012B3] border-[0.5px] bg-[#F1E7FF] text-[#3012B3] text-[10px] font-manrope font-normal px-[10px] py-[6px] rounded-[60px]' />
        <Button text="სტილი" className='border-[#3012B3] border-[0.5px] bg-[#F1E7FF] text-[#3012B3] text-[10px] font-manrope font-normal px-[10px] py-[6px] rounded-[60px]' />
      </div>
      <p className='mt-[6px] text-[14px] font-normal font-manrope text-black h-[50px] overflow-auto'>{text}</p>
      <div className='mt-[13px] w-full rounded-[10px] bg-[#3012B30F] px-[15px] py-[16px]'>
        <div className='flex items-center w-[70%] justify-between'>
          <div className='flex items-center'>
            <Image src={dollar} alt='dolar'/>
            <p className='text-[#00B737] text-[16px] font-manrope font-bold'>{pricePer1k} <span className='text-[#00B737] text-[16px] font-manrope font-bold'>/1k</span></p>
            </div>
            <div className='flex items-center'>
            <Image src={users} alt='users'/>
          <p className='text-[16px] text-[#3012B3] font-bold font-manrope pl-[4px]'>{currentOrders}/ {totalOrders}</p>
            </div>
        </div>
        <div className='flex items-center w-[80%] justify-between'>
          <p>ყოველ 1მ ნახვაზე</p>
          <p>შემქმნელები</p>
        </div>
        <div className='flex w-full justify-between items-center mt-[15px]'>
          <p className='text-[12px] font-manrope font-normal text-black'>ბიუჯეტი</p>
          <p className='text-[14px] font-manrope font-medium'>${remainingBudget} დარჩა</p>
        </div>
        <div className="w-full bg-gray-200 rounded-full h-2.5  mt-[14px] ">
          <div
            className="bg-[#8265FF] h-2.5 rounded-full dark:bg-[#8265FF]] "
            style={{ width: `${progress}%` }}
          ></div>
        </div>
      </div>
      <div className=' flex gap-[8px] mt-[7.5px]'>
        <Image  src={filter} alt='filter'/>
        <p className='text-[#000000D4] text-[12px] font-bold font-manrope'>მოდური კონტენტი, კარგი სტილი, 20+ წმ</p>
      </div>
      <div className='mt-[11px] flex gap-[8px]'>
        <Image  src={calendar} alt='calendar'/>
        <p className='text-dark/83 text-[12px] font-bold font-manrope'>ბოლო ვადა: სექტემბერი 5, 2025</p>
      </div>
    </div>
  )
}
