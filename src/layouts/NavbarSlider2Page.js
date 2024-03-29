import * as React from "react";
import { RxCross1 } from "react-icons/rx";

const NavbarSlider2Page = ({setDrawer} ) => {
  return (
    <>
      <div>
        <div className="flex justify-between ">
          <div></div>
          <div className=" ">
            <RxCross1 onClick={() => setDrawer(false)} className="mt-4 mr-4 p-1 border-2 size-[40px] " />
          </div>
        </div>

        <div className="flex justify-center  gap-x-8 p-8 ">
          <div className="w-1/4 ml-[60px]">
            <h1 className="font-bold ">SIGN UP & GET 15% OFF</h1>
            <p className="mt-2 ">
              Members get more! Like a 15% discount voucher, early access to the
              sale and access to limited edition products. Sign up now!
            </p>
            <p className="underline mt-4 font-bold  w-[120px] hover:bg-primary hover:text-secoundry cursor-pointer ">LEARN MORE</p>
          </div>
          <div className="w-1/4">
            <h1 className="font-bold ">FREE DELIVERY, RETURN & EXCHANGE</h1>
            <p className="mt-2 ">
              For all orders, shipping, return & exchange is offered for free.
              Delivery times for Metro Cities: 2-3 Days 
            </p>
            <p className="underline mt-2 font-bold w-[200px]  hover:bg-primary hover:text-secoundry cursor-pointer">READ MORE ON DELIVERY</p>
            <p className="underline mt-2 font-bold w-[200px] hover:bg-primary hover:text-secoundry cursor-pointer ">READ MORE ON DELIVERY</p>
            <p className="underline mt-2 font-bold w-[200px] hover:bg-primary hover:text-secoundry cursor-pointer ">READ MORE ON DELIVERY</p>
          </div>
          <div className="w-1/4 ">
            <h1 className="font-bold ">UPI & NET BANKING AVAILABLE</h1>
            <p className="mt-2">UPI & NET BANKING AVAILABLE</p>
        
          </div>
        </div>
      </div>
    </>
  );
};

export default NavbarSlider2Page;
