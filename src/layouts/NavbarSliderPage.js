import * as React from "react";

import { RxCross1 } from "react-icons/rx";
import { MdKeyboardArrowRight } from "react-icons/md";
import {  useNavigate } from "react-router-dom";



const NavbarSliderPage = ({setDrawer}) => {

    const handleClick1 = () => {
        navigate("../");

    };

    const navigate = useNavigate();



  return (
    <>
      <div className="p-4 ml-8 mr-8 lg:hidden    ">
        <div className="flex justify-between ">
          <div></div>
          <img
            src="./download-removebg-preview.png"
            height={50}
            width={50}
            alt="hii"
            className=" cursor-pointer  h-14  flex sm:items-center sm:justify-center "
          ></img>
          <RxCross1 onClick={() => setDrawer(false)} className="cursor-pointer " />
        </div>

        <div>
          <div className="flex justify-between ">
            <p className="font-bold ">MEN</p>
            <MdKeyboardArrowRight />
          </div>
          <div className="flex justify-between ">
            <p className="font-bold ">WOMEN</p>
            <MdKeyboardArrowRight />
          </div>
          <div className="flex justify-between ">
            <p className="font-bold ">KIDS</p>
            <MdKeyboardArrowRight />
          </div>
          <div className="flex justify-between ">
            <p>SPORTS</p>
            <MdKeyboardArrowRight />
          </div>
          <div className="flex justify-between ">
            <p>BRANDS</p>
            <MdKeyboardArrowRight />
          </div>
          <div className="flex justify-between ">
            <p>LIFESTYLE</p>
            <MdKeyboardArrowRight />
          </div>
          <div className="flex justify-between ">
            <p>CRICKET</p>
           
          </div>
          <div className="flex justify-between  ">
            <p className="font-bold ">OUTLET</p>
            <MdKeyboardArrowRight />
          </div>
        </div>

        <div className="mt-4 ">
            <p>Order Tracker</p>
            <p>My Profile</p>
            <p>Store finder</p>
            <p>Returns</p>
            <p>Sign up</p>
            

        </div>
      </div>
    </>
  );
};

export default NavbarSliderPage;
