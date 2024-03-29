import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "../../redux/store/store";

import { useLocation, useParams, useSearchParams } from "react-router-dom";
import { deleteOrder, postOrder, updateOrder } from "../../redux/slices/order";

const OrderDetailPage = () => {
  const location = useLocation();
  console.log("location", location.pathname.split("/"));
  const id = location.pathname.split("/")[2];
  console.log("is", id);
  const [data, setData] = useState({});

  const dispatch = useDispatch();
  const orderData = useSelector((state) => state?.order?.order);
  // const user = useSelector((state) => state.auth.user);

  const getOrders = async () => {

    // console.log("data check", data)

    let data = {
      query: {},
      sort: {},
      page: 1,
      limit: 10,
    };
    let result = await dispatch(postOrder(data));
    // console.log("data check", data)
    if (result) {
      return true;
    } else {
      return false;
    }
  };

  console.log(orderData);

  const filterdata = orderData?.data?.filter((item) => {
    return item.id == id;
  });
  // console.log(filteredData);
  console.log(filterdata);

  useEffect(() => {
    getOrders();
  }, []);

  return (
    <>
      <div className="flex   p-8 gap-x-5   lg:ml-[100px]">
        <div className="w-1/4 ">
          <h1 className="font-bold   ">Delivery Address</h1>
          <p className="font-bold mt-2">BALA JEE</p>
          <p className=" ">
            {orderData &&
              orderData?.data &&
              orderData?.data[0] &&
              orderData?.data[0]?.address &&
              orderData?.data[0]?.address?.locality}
          </p>
          <p className=" ">
            {orderData &&
              orderData?.data &&
              orderData?.data[0] &&
              orderData?.data[0]?.address &&
              orderData?.data[0]?.address?.city}
          </p>
          <p className=" ">
            {orderData &&
              orderData?.data &&
              orderData?.data[0] &&
              orderData?.data[0]?.address &&
              orderData?.data[0]?.address?.country}
          </p>
          <p className=" ">
            {orderData &&
              orderData?.data &&
              orderData?.data[0] &&
              orderData?.data[0]?.address &&
              orderData?.data[0]?.address?.loacality}
          </p>
          <p className=" ">
            {orderData &&
              orderData?.data &&
              orderData?.data[0] &&
              orderData?.data[0]?.address &&
              orderData?.data[0]?.address?.state}
          </p>
          <p className=" ">
            {orderData &&
              orderData?.data &&
              orderData?.data[0] &&
              orderData?.data[0]?.address &&
              orderData?.data[0]?.address?.zipcode}
          </p>
          <p className="font-bold mt-2">Phone number</p>
          <p>8521774113, 7324047278</p>
        </div>

        <div>
          <p className="font-bold mt-2  ">Your Rewards</p>
        </div>
      </div>

      <div className="flex justify-between cursor-pointer  border-2 mt-6 mb-4 ml-4 mr-4    lg:ml-[130px]  lg:w-3/5  ">
        <div className="p-6 flex justify-between gap-x-4  ">
          <img
            src={filterdata && filterdata[0]  && filterdata[0]?.products && filterdata[0]?.products[0] && filterdata[0]?.products[0]?.productId && filterdata[0]?.products[0]?.productId?.image }
            alt="img"
            className="h-[70px]"
          ></img>
          <div>
            <p className="font-bold">{filterdata && filterdata[0]  && filterdata[0]?.products && filterdata[0]?.products[0] && filterdata[0]?.products[0]?.productId && filterdata[0]?.products[0]?.productId?.title && filterdata[0]?.products[0]?.productId?.title?.longTitle}</p>
            <p>{filterdata && filterdata[0]  && filterdata[0]?.products && filterdata[0]?.products[0] && filterdata[0]?.products[0]?.productId && filterdata[0]?.products[0]?.productId?.title && filterdata[0]?.products[0]?.productId?.title?.shortTitle}</p>
          </div>
        </div>
        <div>
          <p className="mt-8 ">{filterdata && filterdata[0]  && filterdata[0]?.products && filterdata[0]?.products[0] && filterdata[0]?.products[0]?.productId && filterdata[0]?.products[0]?.productId?.price && filterdata[0]?.products[0]?.productId?.price?.mrp}</p>
        </div>
        <div className="p-4 mr-[20px] mt-3 ">
          <div className="flex gap-x-2   ">
            <div className="h-[10px] w-[10px] rounded-full mt-2    bg-[#228B22] "></div>
            <p className="font-bold ">Delivery on May 20, 2024</p>
          </div>
          <p>Your item has been delivered</p>
        </div>
      </div>

      <div className="flex gap-x-4 lg:gap-x-12 text-[#008000] font-bold mt-8 ml-4 mr-4  lg:ml-[130px] mb-8  ">
        <p>Order Confirmed</p>
        <p>Shipped</p>
        <p>Out for delivery</p>
        <p>Delivered</p>
      </div>
      <div className="ml-4 mr-4 lg:ml-[170px] mb-6 flex   ">
        <div className="h-[10px] w-[10px] rounded-full mt-1     bg-[#228B22] "></div>
        <div className=" w-[150px] h-[3px]  mt-2    bg-[#228B22] "></div>
        <div className="h-[10px]  w-[10px] rounded-full mt-1    bg-[#228B22] "></div>
        <div className=" w-[130px] h-[3px]  mt-2    bg-[#228B22] "></div>
        <div className="h-[10px]  w-[10px] rounded-full mt-1    bg-[#228B22] "></div>
        <div className=" w-[130px] h-[3px]  mt-2    bg-[#228B22] "></div>
        <div className="h-[10px]  w-[10px] rounded-full mt-1    bg-[#228B22] "></div>
      </div>
      <div className="ml-4 mr-4 lg:ml-[130px] mb-6 flex lg:gap-x-12 font-bold    ">
        <p>Tue, 17th May</p>
        <p>Wed, 18th May</p>
        <p>Fri, 20th May</p>
        <p>Fri, 20th May</p>
      </div>
    </>
  );
};

export default OrderDetailPage;
