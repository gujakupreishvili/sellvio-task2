import React from "react";
import logo from "../../../../public/assets/headerImgs/logo.svg";
import Image from "next/image";
import Button from "../button/button";
import computer from "../../../../public/assets/headerImgs/computerImg.svg";
import Result from "../result/result";
import Users from "../../../../public/assets/headerImgs/users-svgrepo-com 5.svg";
import cup from "../../../../public/assets/headerImgs/cup-1-svgrepo-com 1.svg";
import dollar from "../../../../public/assets/headerImgs/dollar-sign-svgrepo-com 1.svg";
import Union from "../../../../public/assets/headerImgs/Union.svg";
import user from "../../../../public/assets/headerImgs/user-add-svgrepo-com 1.svg";
import { IoArrowDown } from "react-icons/io5";
import company from "../../../../public/assets/headerImgs/company_svgrepo.com.svg";

export default function Header() {
  return (
    <>
      <div className="flex flex-col mt-[12px] h-[710px] rounded-[60px] relative overflow-hidden w-full max-w-[1980px] mx-auto px-[10px]">
        <div
          className=" px-[80px]  pr-[58.25] rounded-[60px]  h-[710px]  "
          style={{
            backgroundImage: `url(${Union.src})`,
            backgroundSize: "cover ",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
        >
          <div className="flex  items-start justify-between mb-[45px] pt-[44px] ">
            <Image src={logo} alt="" />
            <div className="flex gap-[17px]">
              <Button
                text="რეგისტრაცია"
                className="border-[1px] border-[#0000000A] rounded-[8px] px-[21px] py-[10px] bg-white text-[16px] text-[#1E1E1E] font-manrope font-medium [box-shadow:0_0_8.8px_0_#0000000A]"
              />
              <Button
                text="ავტორიზაცია"
                className="border-[1px] border-[#0000000A] rounded-[8px] px-[21px] py-[10px] bg-white text-[16px] text-[#1E1E1E] font-manrope font-medium [box-shadow:0_0_8.8px_0_#0000000A]"
              />
            </div>
          </div>

          <div className=" flex items-end  relative mb-[60px] ">
            <Image
              src={computer}
              alt="computer"
              className=" absolute right-0 top-[-15px]"
            />
            <div className="flex flex-col gap-[20px]">
              <h1 className="text-[35px] text-white font-manrope font-medium w-[571px] z-10">
                პლათფორმა, რომელიც აკავშირებს ბრენდებს და UGC კონტენტის
                შემქმნელებს
              </h1>
              <p className="text-[#B3B3B3] text-[16px] font-manrope font-medium w-[571px] z-10">
                პლათფორმა, სადაც ბიზნესები ქმნიან კამპანიებს, ხოლო კონტენტ
                კრეატორებს შეუძლიათ გამოიმუშაონ ფული კამპანიებზე შექმნილი
                კონტენტის პერფორმანსის შესაბამისად
              </p>
            </div>
          </div>
          <div className="flex items-center justify-between  mb-[49px] gap-[34px]">
            <Result
              Img={Users}
              span="25,000+"
              text="აქტიური შემქმნელი"
              description="პლათფორმაზე რეგისტრირებულია 350-ზე მეტი კრეატორი საქართველოს ყველა კუთხიდან"
            />
            <Result
              Img={cup}
              span="8,500+"
              text="აქტიური ბიზნესი"
              description="ჩვენ უკვე 100-ზე მეტ ბიზნესთან ვმეგობრობთ საქართველოში"
            />
            <Result
              Img={dollar}
              span="12M+"
              text="გამომუშავებული თანხა"
              description="კრეატორების მიერ ჯამურად გამომუშავებული თანხის რაოდენობა"
            />
          </div>
          <div className="flex items-center bottom-[15px]  left-[29px] xl:left-[17px]  absolute gap-[42px] w-full justify-between">
            <div className="flex items-center gap-[11px]">
              <Button
                text="როგორ მუშაობს"
                icon={IoArrowDown}
                className="flex flex-row-reverse bg-[#0866FF1F] rounded-[33px] px-[15px] xl:px-[30px] py-[18px] items-center text-white  gap-[10px] midNext:text-[18px] text-[13px] font-manrope font-medium"
              />
              <Button
                text="აღმოაჩინე კამპანიები"
                icon={IoArrowDown}
                className="flex flex-row-reverse bg-[#0866FF1F] rounded-[33px] px-[15px] xl:px-[30px] py-[18px] items-center text-white  gap-[10px] midNext:text-[17px] text-[13px] font-manrope font-medium"
              />
            </div>
            <div className="flex items-center gap-[34px] mr-[6%] ">
              <p className="midNext:text-[20px] mid:text-[16.5px] text-[15px]  text-[#1E1E1E] font-manrope font-bold">
                დარეგისტრირდი როგორც:
              </p>
              <div className="flex items-center gap-[26px]">
                <Button
                  Img={user}
                  text="შემქმნელი"
                  className="flex   border-[#0000001F] border-[1px] justify-center items-center px-[28px] py-[10px] rounded-[8px] shadow-[0_0_7.3px_0_#0000001F] gap-[10px] xl:text-[18px] text-[14px] text-black font-manrope font-bold"
                />
                <p className="text-[#1E1E1E] xl:text-[20px] text-[15px]font-manrope font-medium">
                  ან
                </p>
                <Button
                  Img={company}
                  text="ბიზნესი"
                  className="flex   border-[#0000001F] border-[1px] justify-center items-center px-[42px] py-[10px] rounded-[8px] shadow-[0_0_7.3px_0_#0000001F] gap-[10px] xl:text-[18px] text-[14px] text-black font-manrope font-bold"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
