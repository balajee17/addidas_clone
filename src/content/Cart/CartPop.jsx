import React from "react";
import { FaArrowRightLong } from "react-icons/fa6";

const CartDetail = () => {
  return (
    <div className="bg-primary">
      <div className="flex  justify-center mx-40   ">
        <h1 className="text-3xl font-bold   mt-10 ">
          SUCCESSFULLY ADDED TO BAG!
        </h1>
      </div>

      <div className=" flex justify-center  mr-60 mt-10   ">
        <div>
          <div className="flex ">
            <img src="/card1.png" className="w-40 "></img>
            <div className="ml-10 ">
              <h1 className="w-40 font-bold  ">
                INTER MIAMI CF 24/25 MESSI HOME JERSEY KIDS
              </h1>
              <p className="font-bold  ">₹3 599.00</p>
              <p>Colour: Easy Pink</p>
              <p>Size: 15-16Y</p>
              <p>Quantity: 1</p>
            </div>
          </div>
        </div>

        <div className="border-l-2 pl-4  ">
          <p>Your Bag</p>
          <p>3 items</p>
          <div className="flex justify-between  ">
            <p>Total Product Cost:</p>
            <p>₹10 797.00</p>
          </div>

          <div className="flex justify-between border-b-2 ">
            <p>Total Delivery Cost:</p>
            <p>Free</p>
          </div>

          <div className="flex justify-between">
            <p>Total :</p>
            <p>₹17 995.00</p>
          </div>

          <div className="flex justify-between">
            <p>(inclusive of tax)</p>
          </div>

          <p className="font-bold text-blue-400 " style={{ backgroundColor: "blue" }}  > 
            Members get unlimited free shipping
          </p>

          <div className="">
            <div className="border border-blue-400 h-[52px] w-[280px] absolute"></div>
            <div
              className="flex justify-between mt-2 bg-[#EBEEEF] font-bold border-2 p-3 relative bottom-1 right-1"
              style={{ backgroundColor: "blue" }}
            >
              <h1>JOIN FOR FREE</h1>
              <div>
                <FaArrowRightLong />
              </div>
            </div>
          </div>

          <div className="flex justify-between mt-2 font-bold border-2 p-3 ">
            <h1>VIEW BAG</h1>
            <div>
              <FaArrowRightLong />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartDetail;
