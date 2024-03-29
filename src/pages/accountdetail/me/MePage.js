import * as React from "react";
import Navbar from "../../../layouts/Navbar";
import Footbar from "../../../layouts/footbar";
import { TbTruckPersonal } from "react-icons/tb";

import { IoIosArrowForward } from "react-icons/io";
import { GiReturnArrow } from "react-icons/gi";
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import { useSelector } from "react-redux";


import { FaArrowRightLong } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";

const MePage = () => {
  const {user} = useSelector((state)=>state.auth)
  const navigate = useNavigate();
  
    const [value, setValue] = React.useState('one');

    const handleChange = (event, newValue) => {
      setValue(newValue);
    };

  return (
    <div>
      <div className="flex justify-between mt-6 border-2 h-40   ">
        <div className="  md:ml-[120px] ">
          <h1 className="text-3xl font-bold mt-8 ">HI LEVEL 1</h1>
          <p>50 points to spend</p>
        </div>
        <div className="flex gap-x-4 mt-[100px] ">
          <Box sx={{ width: '100%' }}>
      <Tabs
        value={value}
        onChange={handleChange}
        textColor="primary"
        indicatorColor="primary"
        aria-label="secondary tabs example"
      >
        <Tab value="one" label="FEED" />
        <Tab value="two" label="ORDERS" />
        <Tab value="three" label="ACCOUNT" />
      </Tabs>
    </Box>

         
        </div>
        <div className="mr-[120px]">
          <img className="mt-8 " src="../mepic.png"></img>
        </div>
      </div>

      <div className="flex justify-between  ">
        <div className=" sm:mt-10 sm:ml-10  mt-40  mb-60  ">
          
          <div className="flex flex-col  gap-x-6 mt-10  ml-[100px]  mb-60     ">
          <h1 className="text-2xl font-bold  ">ACCOUNT OVERVIEW</h1>
            <div className=" cursor-pointer mt-0   bg-[#ffffff] w-[250px]   ml-0 flex flex-col     ">
            
              <div className="flex justify-between     ">
                <div className="justify-between p-2    flex flex-row items-center  py-3   gap-x-3 gap-y-8">
                  
                  <p className=" underline hover:underline-offset-2 hover:font-extrabold ">Personal Information</p>
                  <IoIosArrowForward className=" mt-2 ml-10     " />
                </div>
              </div>

              <div className="flex  ">
                <div className="flex flex-row items-center  p-2  py-3   gap-x-3 gap-y-8">
                  
                  <p className="hover:font-extrabold">Personal Information</p>
                  <IoIosArrowForward className=" ml-10   " />
                </div>
              </div>

              <div className="flex  ">
                <div className="flex flex-row items-center p-2   py-3   gap-x-3 gap-y-8">
                  
                  <p className="hover:font-extrabold">Personal Information</p>
                  <IoIosArrowForward className=" ml-10   " />
                </div>
              </div>

              <div className="flex  ">
                <div className="flex flex-row items-center p-2   py-3   gap-x-3 gap-y-8">
                  
                  <p className="hover:font-extrabold">Personal Information</p>
                  <IoIosArrowForward className=" ml-10   " />
                </div>
              </div>

              <div className="flex ">
                <div className="flex flex-row items-center  p-2  py-3   gap-x-3 gap-y-8">
                  
                  <p className="hover:font-extrabold">Personal Information</p>
                  <IoIosArrowForward className=" ml-10   " />
                </div>
              </div>

              <div className="flex  ">
                <div className="flex flex-row items-center p-2   py-3   gap-x-3 gap-y-8">
                  
                  <p className="hover:font-extrabold">Personal Information</p>
                  <IoIosArrowForward className=" ml-10   " />
                </div>
              </div>

              <div className="flex  ">
                <div className="flex flex-row items-center p-2   py-3   gap-x-3 gap-y-8">
                  
                  <p className="hover:font-extrabold">Personal Information</p>
                  
                </div>
              </div>

              <div className="flex  ">
                <div className="flex flex-row items-center  p-2  py-3   gap-x-3 gap-y-8">
                  
                  <p className="hover:font-extrabold">Personal Information</p>
                  
                </div>
              </div>
            </div>

            <div className=" sm:hidden  bg-[#1E2021] bg-opacity-80 rounded-md w-5/12 flex flex-col gap-y-0  ">
              <p className="mt-3 underline underline-offset-4 cursor-pointer hover:bg-primary w-80 ">
                What is the Personal Information time & cost ?
              </p>
              <p className="mt-2 underline underline-offset-4 cursor-pointer hover:bg-primary w-80 ">
                What is the Personal Information time & cost ?
              </p>
              <p className="mt-2 underline underline-offset-4 cursor-pointer hover:bg-primary w-80 ">
                What is the Personal Information time & cost ?
              </p>
              <p className="mt-2 underline underline-offset-4 cursor-pointer hover:bg-primary w-80 ">
                What is the Personal Information time & cost ?
              </p>
              <p className="mt-2 underline underline-offset-4 cursor-pointer hover:bg-primary w-80 ">
                What is the Personal Information time & cost ?
              </p>
              <p className="mt-2 underline underline-offset-4 cursor-pointer hover:bg-primary w-80 ">
                What is the Personal Information time & cost ?
              </p>
            </div>
          </div>
        </div>

        <div className=" bg-[#ffffff] mt-20   pt-2   pb-20 pl-10   ">
          <div>
            <h1 className="text-3xl font-bold ">MY DETAILS</h1>
            <p className="mt-2 ">
              Feel free to edit any of your details below so your account is up
              to date.
            </p>
          </div>

          <div className="mt-10  ">
            <h1 className="text-2xl font-bold " >DETAILS</h1>
            <p className="mt-2 ">NAME</p>
            <p className="mt-2 ">DATE OF BIRTH</p>
            <p className="mt-2 ">PHONE NUMBER</p>
            <p className="mt-2 ">GENDER</p>
            <button className="mt-2 underline underline-offset-2  font-bold   ">EDIT</button>
          </div>

          <div className="mt-10 ">
            <h1  className="text-2xl font-bold " >LOGIN DETAILS</h1>
            <p className="font-bold mt-2">EMAIL</p>
            <p className=" mt-2">BALAJEE1600@GMAIL.COM</p>
            <button className=" mt-2 underline underline-offset-2  font-bold">EDIT</button>
            <p className="font-bold mt-8  ">PASSWORD</p>
            <p className=" mt-2">********</p>
            <button className=" mt-2 underline underline-offset-2  font-bold">EDIT</button>
          </div>

          <div>
            <h1 className=" text-2xl font-bold mt-10 ">LOG OUT FROM ALL WEB BROWSERS</h1>
            <p className=" mt-3">
              This will log you out from all web browsers you have used to
              access the adidas website. To log in again, you'll have to enter
              your credentials.
            </p>
            <div className=" border-2 cursor-pointer hover: flex justify-between p-4 mt-2   w-[400px] h-[50px]  ">
            <button 
            onClick={() => navigate("/login")}  
       type="submit" className="  font-bold    ">LOG ME OUT</button>
            <FaArrowRightLong />

            </div>
            
            <p className=" mt-3 font-bold ">MANAGE ACCOUNT</p>

            <div className=" border-2 flex cursor-pointer hover:bg-slate-100  justify-between p-4  w-[400px] h-[50px] ">
            <button className="  font-bold  " >DELETE ACCOUNT</button>
            <FaArrowRightLong />

            </div>
            
            <p className=" mt-3">
              By deleting your account you will no longer have access to the
              information stored in your adidas account such as order history or
              your wishlist.
            </p>
          </div>

          <div>
            <h1 className="mt-8  font-bold ">NEED HELP?</h1>
            <div className="mt-4 grid grid-rows-3 grid-flow-col gap-4 ">
              <p className="cursor-pointer ">Products</p>
              <p className="cursor-pointer bg-black-500 hover:bg-black-700 ">Products</p>
              <p className="cursor-pointer bg-black-500 hover:bg-black-700 ">Products</p>
              <p className="cursor-pointer bg-black-500 hover:bg-black-700 ">Products</p>
              <p className="cursor-pointer bg-black-500 hover:bg-black-700 ">Products</p>
              <p className="cursor-pointer bg-black-500 hover:bg-black-700 ">Products</p>
              <p className="cursor-pointer bg-black-500 hover:bg-black-700 ">Products</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MePage;
