import * as React from "react";
import { RxCross1 } from "react-icons/rx";
import Checkbox from "@mui/material/Checkbox";

const label = { inputProps: { "aria-label": "Checkbox demo" } };

const OrderSliderPage = ({ setDrawer, value1, setValue1 }) => {
  function valuetext(value) {
    return `${value}°C`;
  }



  return (
    <>
      <div className="w-[380px] md:w-[480px] z-[999999] overflow-x-hidden  ">
        <div className="p-2 flex justify-between    ">
          <h1 className="cursor-pointer text-[18px] font-bold ">
            Filter & Sort
          </h1>
          <div className="flex gap-x-2  ">
            <p className="underline cursor-pointer "> Clear All</p>
            <RxCross1
              className="size-[30px] cursor-pointer "
              onClick={() => setDrawer(false)}
            />
          </div>
        </div>
       

        <div className=" cursor-pointer ml-6  ">
          <h1 className="font-bold ">ORDER STATUS</h1>
          <div className="flex flex-col item-center mt-2  ">
            <div className="flex ">
              <Checkbox {...label} />
              <p className="mt-2 ">On the way</p>
            </div>
            <div className="flex ">
              <Checkbox {...label} />
              <p className="mt-2 ">Delivered</p>
            </div>
            <div className="flex ">
              <Checkbox {...label} />
              <p className="mt-2 ">Cancelled</p>
            </div>
            <div className="flex ">
              <Checkbox {...label} />
              <p className="mt-2 ">Returned</p>
            </div>
           
          </div>
        </div>

        <div className=" cursor-pointer ml-6 mt-4    ">
          <h1 className="font-bold ">ORDER TIME</h1>
          <div className="flex flex-col item-center mt-4  ">
            <div className="flex ">
              <Checkbox {...label} />
              <p className="mt-2 ">Last 30 days</p>
            </div>
            <div className="flex ">
              <Checkbox {...label} />
              <p className="mt-2 ">2023</p>
            </div>
            <div className="flex ">
              <Checkbox {...label} />
              <p className="mt-2 ">2022</p>
            </div>
            <div className="flex ">
              <Checkbox {...label} />
              <p className="mt-2 ">2021</p>
            </div>
            <div className="flex ">
              <Checkbox {...label} />
              <p className="mt-2 ">Older</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default OrderSliderPage;
