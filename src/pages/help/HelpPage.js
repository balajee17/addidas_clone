import React from "react";
import Navbar from "../../layouts/Navbar";
import { TbTruckDelivery } from "react-icons/tb";
import { IoIosArrowForward } from "react-icons/io";
import { GiReturnArrow } from "react-icons/gi";
import Footbar from "../../layouts/footbar";

const HelpPage = () => {
  return (
    <>
      

      <div className="sm:mt-10 sm:ml-10     font-bold mt-40 ml-60   ">
        <h1 className="text-3xl  ">FREQUENTLY ASKED QUESTIONS</h1>
        <div className="  ">
          <p className="mt-6 underline underline-offset-4 cursor-pointer hover:bg-primary w-80 ">
            WHAT IS THE DELIVERY TIME & COST ?
          </p>
          <p className="mt-6 underline underline-offset-4 cursor-pointer hover:bg-primary w-80 ">
            WHAT IS THE DELIVERY TIME & COST ?
          </p>
          <p className="mt-6 underline underline-offset-4 cursor-pointer hover:bg-primary w-80 ">
            WHAT IS THE DELIVERY TIME & COST ?
          </p>
          <p className="mt-6 underline underline-offset-4 cursor-pointer hover:bg-primary w-80 ">
            WHAT IS THE DELIVERY TIME & COST ?
          </p>
          <p className="mt-6 underline underline-offset-4 cursor-pointer hover:bg-primary w-80 ">
            WHAT IS THE DELIVERY TIME & COST ?
          </p>
        </div>
      </div>

      <div className=" sm:mt-10 sm:ml-10  mt-40 ml-80 mb-60  ">
        <h1 className="text-3xl font-bold  ">SUPPORT TOPICS</h1>
        <div className="flex  gap-x-6 mt-10    mb-60     ">
          <div className="sm:border sm:w-2/3  cursor-pointer mt-0   bg-[#161718] w-3/12    ml-0 flex flex-col    ">
            <div className="flex  border-b-2">
              <div className="sm:justify-between  flex flex-row items-center  py-3   gap-x-3 gap-y-8">
                <TbTruckDelivery />
                <p>DELIVERY</p>
                <IoIosArrowForward className="sm:ml-[290px] mt-2 mr-6   " />
              </div>
            </div>

            <div className="flex  border-b-2">
              <div className="flex flex-row items-center  py-3   gap-x-3 gap-y-8">
                <TbTruckDelivery />
                <p>DELIVERY</p>
                <IoIosArrowForward className="sm:ml-[290px] " />
              </div>
            </div>

            <div className="flex  border-b-2">
              <div className="flex flex-row items-center  py-3   gap-x-3 gap-y-8">
                <TbTruckDelivery />
                <p>DELIVERY</p>
                <IoIosArrowForward className="sm:ml-[290px] " />
              </div>
            </div>

            <div className="flex  border-b-2">
              <div className="flex flex-row items-center  py-3   gap-x-3 gap-y-8">
                <TbTruckDelivery />
                <p>DELIVERY</p>
                <IoIosArrowForward className="sm:ml-[290px] " />
              </div>
            </div>

            <div className="flex border-b-2">
              <div className="flex flex-row items-center  py-3   gap-x-3 gap-y-8">
                <TbTruckDelivery />
                <p>DELIVERY</p>
                <IoIosArrowForward className="sm:ml-[290px] " />
              </div>
            </div>

            <div className="flex  border-b-2">
              <div className="flex flex-row items-center  py-3   gap-x-3 gap-y-8">
                <TbTruckDelivery />
                <p>DELIVERY</p>
                <IoIosArrowForward className="sm:ml-[290px] " />
              </div>
            </div>

            <div className="flex  border-b-2">
              <div className="flex flex-row items-center  py-3   gap-x-3 gap-y-8">
                <TbTruckDelivery />
                <p>DELIVERY</p>
                <IoIosArrowForward className="sm:ml-[290px] " />
              </div>
            </div>

            <div className="flex  border-b-2">
              <div className="flex flex-row items-center  py-3   gap-x-3 gap-y-8">
                <TbTruckDelivery />
                <p>DELIVERY</p>
                <IoIosArrowForward className="sm:ml-[290px] " />
              </div>
            </div>
          </div>

          <div className=" sm:hidden  bg-[#1E2021] bg-opacity-80 rounded-md w-5/12 flex flex-col gap-y-0  ">
            <p className="mt-3 underline underline-offset-4 cursor-pointer hover:bg-primary w-80 ">
              What is the delivery time & cost ?
            </p>
            <p className="mt-2 underline underline-offset-4 cursor-pointer hover:bg-primary w-80 ">
              What is the delivery time & cost ?
            </p>
            <p className="mt-2 underline underline-offset-4 cursor-pointer hover:bg-primary w-80 ">
              What is the delivery time & cost ?
            </p>
            <p className="mt-2 underline underline-offset-4 cursor-pointer hover:bg-primary w-80 ">
              What is the delivery time & cost ?
            </p>
            <p className="mt-2 underline underline-offset-4 cursor-pointer hover:bg-primary w-80 ">
              What is the delivery time & cost ?
            </p>
            <p className="mt-2 underline underline-offset-4 cursor-pointer hover:bg-primary w-80 ">
              What is the delivery time & cost ?
            </p>
          </div>
        </div>
      </div>
      

      <div className="sm:mt-[10px] sm:border sm:mr-[80px] sm:w-1/2      mt-20 mr-60  mb-40 flex justify-center  ">
        <div className="sm:border sm:mt-[10px] w-3/5 ml-80 ">
          <h1 className="font-bold ">WHERE IS MY ORDER?</h1>
          <p className="sm:w-[200px] mt-4 w-[480px]  ">
            For all orders, shipping (delivery) is offered for free. Normally
            our delivery takes between 2-5 working days. An estimated delivery
            date will be provided to you at checkout.
          </p>
          <p className="cursor-pointer underline underline-offset-4 bg-primary mt-6 w-1/6  ">
            LOG IN
          </p>
        </div>

        <div className="sm:border w-4/5 ml-10 ">
          <h1 className="font-bold ">
            STILL CAN'T FIND YOUR ANSWER? ASK OUR CUSTOMER SERVICE
          </h1>
          <p className="mt-4  ">Everyday: 8:00 AM to 08:00 PM</p>
          <p className="cursor-pointer underline underline-offset-4 bg-primary mt-6 w-1/4  ">
            CONTACT US
          </p>
        </div>
      </div>
      
    </>
  );
};

export default HelpPage;
