import React from "react";
import { FaInstagramSquare } from "react-icons/fa";
import { FaArrowRightLong } from "react-icons/fa6";

const Footbar = () => {
  return (
    <>
      <div className="flex flex-col   md:flex md:justify-center md:gap-x-8   md:h-[150px] md:w-full   md:bg-[#716F0A]">
        <div>
          <h1 className=" text-4xl p-8 justify-center flex md:justify-center  md:text-3xl md:font-bold md:pr-70  md:mt-9  " style={{color:"white"}}>
            JOIN ADIDAS AND GET 15% OFF
          </h1>
        </div>

        <div className="flex justify-center p-5 gap-x-5 bg-[#FFFFFF]  md:flex  md:flex-row md:pr-70 md:mt-9 md:cursor-pointer md:h-14  md:gap-x-4 md:p-4  md:font-bold   ">

          <button className=" ">SIGN UP FOR FREE </button>
          <FaArrowRightLong className=" mt-1  md:pr-70 md:mt-1 " />
        </div>
      </div>

      <div className="flex justify-center gap-x-20 bg-[#FFFFFF] pt-8 pb-8 md:mt-6   ">
        <div className="hidden md:block   ">
          <h1 className="font-bold ">PRODUCTS</h1>
          <div className="text-sm  mt-6 cursor-pointer  ">
            <p className="hover:underline text-sm">Sports</p>
            <p>Sports</p>
            <p>Sports</p>
            <p>Sports</p>
            <p>Sports</p>
          </div>
        </div>

        <div className="hidden md:block">
          <h1 className="font-bold ">PRODUCTS</h1>
          <div className="text-sm  mt-6 cursor-pointer  ">
            <p className="hover:underline text-sm">Sports</p>
            <p>Sports</p>
            <p>Sports</p>
            <p>Sports</p>
            <p>Sports</p>
          </div>
        </div>

        <div className="hidden md:block">
          <h1 className="font-bold ">PRODUCTS</h1>
          <div className="text-sm  mt-6 cursor-pointer  ">
            <p className="hover:underline text-sm">Sports</p>
            <p>Sports</p>
            <p>Sports</p>
            <p>Sports</p>
            <p>Sports</p>
          </div>
        </div>

        <div className="hidden md:block">
          <h1 className="font-bold ">PRODUCTS</h1>
          <div className="text-sm  mt-6 cursor-pointer  ">
            <p className="hover:underline text-sm">Sports</p>
            <p>Sports</p>
            <p>Sports</p>
            <p>Sports</p>
            <p>Sports</p>
          </div>
        </div>

        <div className="hidden md:block ">
          <h1 className="font-bold ">PRODUCTS</h1>
          <div className="text-sm  mt-6 cursor-pointer  ">
            <p className="hover:underline text-sm">Sports</p>
            <p>Sports</p>
            <p>Sports</p>
            <p>Sports</p>
            <p>Sports</p>
          </div>
        </div>

        <div className="hidden md:hidden ">
          <h1>PRODUCTS</h1>
          <div>
            <FaInstagramSquare className="size-10 mt-5 " />
          </div>
        </div>
      </div>

      <div className="  grid grid-rows-4 grid-flow-col justify-around pt-4 pb-4   gap-4 border-2 bg-[#716F0A] text-sm ">
      <p className="text-black ">Delivery</p>
      <p className="text-white ">Delivery</p>
      <p className="text-white ">Delivery</p>
      <p className="text-white ">Delivery</p>
      <p className="text-white ">Delivery</p>
      <p className="text-white ">Delivery</p>
      <p className="text-white ">Delivery</p>
      <p className="text-white ">Delivery</p>

      </div>

      <div className="mt-6  pb-8 font-thin      ">
        <div className="flex justify-center gap-x-6 text-sm  ">
          <p className="text-[10px]">Privacy Policy</p>
          <div className="text-[10px]"> | </div>
          <p className="text-[10px]">Terms and Conditions</p>
          <div className="text-[10px]"> | </div>
          <p className="text-[10px]">Cookies</p>
        </div>

        <div>
          <p className="flex items-center justify-center mt-6 text-[10px]">
            ©2021 adidas India Marketing Pvt. Ltd
          </p>
        </div>
      </div>
    </>
  );
};

export default Footbar;
