import React, { useEffect, useState } from "react";
import { FaSearch } from "react-icons/fa";
import { useDispatch, useSelector } from "../../redux/store/store";
import Drawer from "@mui/material/Drawer";
import Slider from "react-slick";
import { deleteOrder, postOrder, updateOrder } from "../../redux/slices/order";
import OrderSliderPage from "./OrderSliderPage";
import { TbMenuOrder } from "react-icons/tb";
import { useNavigate } from "react-router-dom";

const OrderPage = () => {
  const [drawer, setDrawer] = useState(false);
  const [value1, setValue1] = React.useState([0, 20000]);

  const navigate = useNavigate();

  const [id, setId] = useState("");
  const [changeOrderid, setChangeOrderid] = useState();

  const dispatch = useDispatch();
  const orderData = useSelector((state) => state?.order?.order);
  const user = useSelector((state) => state.auth.user);

  const getOrders = async () => {
    let data = {
      query: {},
      sort: {},
      page: 1,
      limit: 10,
    };
    let result = await dispatch(postOrder(data));
    if (result) {
      return true;
    } else {
      return false;
    }
  };

  useEffect(() => {
    getOrders();
  }, []);

  console.log(orderData);

  return (
    <>
      <div className="p-4 ">
        <div className="border-2 p-1 flex  gap-x-2  w-[150px]  ">
          <button onClick={() => setDrawer(true)} className="">
            Filter and sort
          </button>
          {drawer && (
            <Drawer
              anchor="left"
              open={drawer}
              onClose={() => setDrawer(false)}
            >
              <OrderSliderPage
                value1={value1}
                setValue1={setValue1}
                setDrawer={setDrawer}
              />
            </Drawer>
          )}

          <TbMenuOrder className="mt-2 " />
        </div>
        <div className="flex justify-center mt-4  w-[320px] sm:w-[500px] lg:ml-[260px] lg:w-3/5      ">
          <div className="border-l-2 border-t-2 border-b-2 w-1/2 lg:w-3/5 p-2 ">
            <input placeholder="Search your orders here"></input>
          </div>
          <div className=" w-1/2 lg:w-1/5 pl-4 pr-4 font-bold  bg-[#2874F0] text-lime-500 flex justify-between    ">
            <FaSearch className="mt-3 text-[#fff]  " />
            <button className="text-[#FFF] p-2  ">Search Orders</button>
          </div>
        </div>

        {orderData &&
          orderData.data &&
          orderData.data.map((data, id) => (
            <div
              onClick={() => navigate(`/order-detail/${data.id}`)}
              className="flex justify-between cursor-pointer  border-2 mt-6 w-[300px] sm:w-[600px] lg:ml-[260px]  lg:w-3/5  "
            >
              <div className="p-6 flex justify-between gap-x-4  ">
                <img
                  src={data?.products[0]?.productId?.image}
                  alt=""
                  className="h-[70px]"
                ></img>
                <div>
                  <p className="font-bold ">
                    {data?.products[0]?.productId?.title?.longTitle}
                  </p>
                  <p>{data?.products[0]?.productId?.title?.shortTitle}</p>
                </div>
              </div>

              <div>
                <p className="mt-8 ">
                  {data?.products[0]?.productId?.price?.mrp}
                </p>
              </div>
              <div className="p-4 mr-[20px] mt-3 ">
                <div className="flex gap-x-2   ">
                  <div className="h-[10px] w-[10px] rounded-full mt-2    bg-[#228B22] "></div>
                  <p className="font-bold ">Delivery on May 20, 2024</p>
                </div>
                <p>Your item has been delivered</p>
              </div>
            </div>
          ))}
      </div>
    </>
  );
};

export default OrderPage;
