import React from 'react'
import Offers from '../offers/offers'
import gallery from "../../../../public/assets/contentImgs/gallery-grid-view-1405-svgrepo-com 2.svg"
import user from "../../../../public/assets/contentImgs/user-check-svgrepo-com 1.svg"
import vetor from "../../../../public/assets/contentImgs/Vector.svg"
import license from "../../../../public/assets/contentImgs/license-svgrepo-com 1.svg"
import ActiveCampaings from '../activeCampaigns/activeCampaings'

export default function Content() {
  return (
    <div className='flex flex-col max-w-[1980px justify-center]'>
      <div className='flex flex-col mt-[64px] items-center mb-[64px]  '>
        <h1 className='text-[32px] font-manrope font-medium text-[#1E1E1E] mb-[28px]'>როგორ მუშაობს</h1>

        <div className="w-[95%] h-[72px] bg-[#00000014] rounded-[12px] flex items-center px-[14px] py-[7px] mb-[28px] max-w-[1980px]">
        <p className="w-[50%] text-center  py-[8px] rounded-[4px] text-[#3012B3CC] text-[16px] font-bold font-manrope ">
          ანალიტიკა
        </p>
        <p className="w-[50%] text-center bg-[linear-gradient(90deg,#3012B3_0%,#7B62E8_100%)] py-[12px] rounded-[12px] text-white text-[16px] font-bold font-manrope  ">
          კამპინგი
        </p>
      </div>
      <div className='flex flex-wrap gap-[13px] w-full justify-center'>
        <Offers  Img={vetor} title='გაწევრიანდი კამპანიისჩატში' description='ყველა კამპანიას აქვს საკუთარი ჩატი, სადაც კრეატორს გაწევრიანება და დეტალებზე კომუნიკაცია შეუძლია კამპანიის მენეჯერთან'/>
        <Offers  Img={gallery} title='გაეცანი ინსტრუქციებს და შექმენი კონტენტი' description='ჩატში არსებული ინფორმაციები საშუალებას გაძლევს დეტალურად გაეცნო საჭირო ინფორმაციას და შექმნა კონტენტი'/>
        <Offers  Img={user} title='ავტომატური ხელშეკრულება' description='გაგაზავნე შექმნილი კონტენტი ბიზნესთან ჩატის შიდა სისტემაში და კამპანიის მენეჯერის თანხმობის შემთხვევაში განათავსე ის საკუთარ პლათფორმებზე'/>
        <Offers  Img={license} title='დაელოდე ვიდეოს დადასტურებას და განათავსე' description='დადე იურიდიული ხელშეკრულება ბიზნესთან, ავტომატური სისტემის დახმარებით.'/>
        <Offers  Img={license} title='შედეგების ანალიზი' description='მიიღე დეატალური ანალიტიკა შენს ყველა კამპანაზე და დააკვირდი სხვადასხვა მეტრიკის პერფორმანსს.'/>
      </div>
      </div>

      <div className='flex flex-col items-center mx-[17px] '>
        <h1 className=' text-[#583CCF] text-[32px] font-manrope font-bold mb-[31px]'>აღმოაჩინე აქტიური კამპანიები</h1>
        <div className='flex flex-wrap xl:justify-center  w-full mb-[100px] gap-[26px] '>
          <ActiveCampaings  compaName='კარფური' rate='4.6' text='შექმენი ტრენდული ცონტენტი კარფურისთვის შენივე სტილით.' pricePer1k={28} currentOrders={18} totalOrders={25}/>
          <ActiveCampaings  compaName='სპარი' rate='4.9' text='შექმენი ტრენდული კონტენტი სპარისთვის შენივე სტილით სპარი განძი კარფური ბანძიშექმენი ტრენდული კონტენტი სპარისთვის შენივე სტილით სპარი განძი კარფური ბანძი.' pricePer1k={38} currentOrders={24} totalOrders={25}/>
          <ActiveCampaings  compaName='დეილი' rate='4.0' text='შექმენი ტრენდული ცონტენტი დეილისთვსი შენივე სტილით.' pricePer1k={18} currentOrders={18} totalOrders={25}/>
        </div>
      </div>
    </div>
  )
}
