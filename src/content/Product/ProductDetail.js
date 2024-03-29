import React, { useEffect, useState } from "react";
import { IoMdStar } from "react-icons/io";
import { TiChartLine } from "react-icons/ti";
import { FaLongArrowAltRight } from "react-icons/fa";
import { IoIosHeart } from "react-icons/io";
import { LuBus } from "react-icons/lu";
import { useDispatch, useSelector } from "react-redux";
// import { getProduct } from "../../redux/slices/product";
import { useLocation, useParams, useSearchParams } from "react-router-dom";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useReducer } from "react";
import { createCart } from "../../redux/slices/cart";

const ProductDetailPage = () => {
  const { user } = useSelector((state) => state.auth);
  console.log(user);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleClick = async (id) => {
    const data = {
      userId: user.id,
      products: [
        {
          productId: id,
          qty: 1,
        },
      ],
    };

    const response = await dispatch(createCart(data));
    console.log(response);
    navigate("/cart-index");
  };

  const [data, setdata] = useState(null);
  const location = useLocation();
  console.log("location", location.pathname.split("/"));
  const id = location.pathname.split("/")[2];

  const getProduct = async () => {
    try {
      const res = await axios.get(
        `http://localhost:5000/userapp/product/get/${id}`
      );
      setdata(res.data.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getProduct();
  }, []);
  console.log(data);
  console.log(data);

  return (
    <>
      <div className="  md:flex md:flex-row    ">
        <div className="w-[1200px] ">
          <div className="grid grid-cols-2 border-2  ">
            <img
              className="hidden md:border md:flex  md:border-[#000000] "
              src={data?.image}
            ></img>
            <img
              className="hidden md:border md:flex md:border-[#000000]"
              src={data?.image}
            ></img>
            <img
              className="hidden md:border md:flex md:border-[#000000]"
              src={data?.image}
            ></img>
            <img
              className="hidden md:border md:flex  md:border-[#000000]"
              src={data?.image}
            ></img>
          </div>
        </div>

        <div className=" md:w-[450px] md:pl-10 md:pr-10      ">
          <div className=" md:flex md:justify-between     ">
            <div className="hidden md:flex md:space-x-1  ">
              <h1>Boys </h1>
              <h1> • </h1>
              <h1>{data?.subCategory}</h1>
            </div>

            <div className="w-[50px] flex justify-center ml-60   bg-[#fffff] cursor-pointer  ">
              <IoMdStar />
              <IoMdStar />
              <IoMdStar />
              <IoMdStar />
              <IoMdStar />
              <p className="underline ">26</p>
            </div>
          </div>

          <h1 className="font-bold text-2xl ml-2   w-[300px] md:w-[350px] md:fonr-extrabold  md:text-3xl md:mt-2     ">
            {data?.title?.longTitle}
          </h1>
          <h1 className="font-bold text-2xl ml-2   w-[300px] md:w-[350px] md:fonr-extrabold  md:text-3xl md:mt-2     ">
            {data?.title?.shortTitle}
          </h1>
          <p className="ml-2 md:ml-0">MRP in Indian currency:</p>
          <p className="font-bold ml-2 md:ml-0">{data?.price?.mrp}</p>
          <p className="ml-2 md:ml-0 ">(Inclusive of all taxes)</p>
          <img
            className="mt-2  auto-fill  border border-[#000000] md:hidden "
            src="/messi1.jpg "
          ></img>
          <p className="hidden  md:mt-6 ">Easy Pink</p>

          <div className="flex justify-between  ">
            <p className="mt-6 font-bold ml-4  md:mt-6 ">Sizes</p>
            <p className="hidden  md:cursor-pointer md:underline md:mt-6 md:bg-primary md:w-[100px] md:h-8">
              Find your size
            </p>
          </div>

          <div class=" m-2 cursor-pointer   grid grid-cols-5 grid-flow-row  md:p-2  md:w-[400px] ">
            <div className="text-center border-2 p-2 ">XS</div>
            <div className="text-center border-2 p-2 ">S</div>
            <div className="text-center border-2 p-2 ">M</div>
            <div className="text-center border-2 p-2 ">L</div>
            <div className="text-center border-2 p-2 ">XL</div>
            <div className="text-center border-2 p-2 ">2XL</div>
            <div className="text-center border-2 p-2 ">3XL</div>
          </div>

          <div className="  cursor-pointer hover:bg-primary flex  ml-2  md:mt-3  md:w-[100px]">
            <TiChartLine />
            <h1 className="  md:underline  ">Size guide</h1>
          </div>

          <div className="m-2 cursor-pointer   flex justify-between gap-x-4  ">
            <button
              onClick={() => handleClick(data?.id)}
              className="flex justify-between border-4  p-2 bg-prima font-bold w-[400px]   "
            >
              <h1>ADD TO BAG</h1>
              <FaLongArrowAltRight />
            </button>

            <div>
              <IoIosHeart className="border-2 p-3 size-[50px] " />
            </div>
          </div>

          <div className="ml-2  flex gap-x-2 md:mt-4 ">
            <LuBus />
            <h1 className="underline  cursor-pointer hover:bg-primary ">
              Free Delivery, Free Returns
            </h1>
          </div>

          <div className=" ml-2 mt-4 ">
            <h1 className="underline  cursor-pointer hover:bg-primary ">
              DELIVERY WITHIN: METRO CITIES:2-3 DAYS, OTHERS: 4-5 DAYS
            </h1>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductDetailPage;
