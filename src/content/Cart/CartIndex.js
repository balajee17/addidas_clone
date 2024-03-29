import React, { useEffect, useState } from "react";
import { IoIosArrowDown } from "react-icons/io";
import { RxCrossCircled } from "react-icons/rx";
import { FaLongArrowAltRight } from "react-icons/fa";
import { TbBus } from "react-icons/tb";
import { MdPhoneIphone } from "react-icons/md";
import { useDispatch, useSelector } from "../../redux/store/store";
import { useNavigate } from "react-router-dom";
import { deleteCart, postCart, updateCart } from "../../redux/slices/cart";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

const CartIndex = () => {
  const [selectedQuantities, setSelectedQuantities] = useState({});
  const [id, setId] = useState("");
  const [changeCartid, setChangeCartid] = useState();

  const handleChange = (productId, quantity, cartid) => {
    setId(productId);
    console.log(productId,quantity,cartid);
    setChangeCartid(cartid);
    setSelectedQuantities((prevState) => ({
      ...prevState,
      [productId]: quantity,
    }));
  };

  const handleDelete = async (cartid)=> {
   await dispatch(deleteCart(cartid))
   getCarts();


  }

  const quantity = selectedQuantities[id];
  console.log(quantity, "quantity");

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const cartData = useSelector((state) => state?.cart?.cart);
  const user = useSelector((state) => state.auth.user);

  const handleClick = () => {
    navigate("/checkout");
  };

  const getCarts = async () => {
    let data = {
      query: { userId: user?.id, isDeleted: false },
      sort: { name: 1 },
      page: 1,
      limit: 10,
    };
    let result = await dispatch(postCart(data));
    if (result) {
      return true;
    } else {
      return false;
    }
  };

  useEffect(() => {
    
    getCarts();
  }, []);

  useEffect(() => {
    const updateCarts = async () => {
      console.log(selectedQuantities)
      let data = {
        products: [
          {
            productId: id,
            qty: selectedQuantities[id],
          },
        ],
      };
      let result = await dispatch(updateCart(data, changeCartid));
      if (result) {
        getCarts();
      } else {
        return false;
      }
    };

    if (id && id !== "" && changeCartid) {
      updateCarts();
    }
  }, [id]);

  console.log(cartData);

  return (
    <>
      <div className="flex flex-col gap-y-4  ml-2 mr-2 overflow-x-hidden md:flex-row md:justify-between     ">
        <div className=" mt-4 ml-4   lg:mt-20 lg:ml-40   ">
          <div>
            <h1 className="font-bold text-3xl  ">YOUR BAG</h1>
            <p className="mt-5 ">TOTAL (4 items) ₹14 396.00</p>
            <p className="mt-4 ">
              Items in your bag are not reserved — check out now to make them
              yours.
            </p>
          </div>

          {cartData?.data?.map((data, index) => (
            <div className="flex border mr-2 mt-10 lg:w-[400px] ">
              <div className=" ">
                <img
                  src={data?.products[0]?.productId?.image}
                  alt=""
                  className=" lg:h-full lg:w-86   "
                ></img>
              </div>

              <div className="flex flex-col p-2 w-1/2  ">
                <div className="flex justify-evenly ">
                  <h1 className="mr-2">
                    {data?.products[0]?.productId?.title?.shortTitle}
                  </h1>
                  <RxCrossCircled onClick={() => handleDelete(data?.id)} className="cursor-pointer ml-10  " />
                </div>
                <p className="">
                  {data?.products[0]?.productId?.title?.longTitle}
                </p>
                <p className="mt-2 ">SIZE: 15-16Y</p>
                <p className="font-bold ">Low in stock</p>

                <div className=" mt-6  mr-[200px]  font-bold cursor-pointer   lg:flex lg:justify-between  ">
                  <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
                    <InputLabel id="demo-select-small-label">
                      Quantity
                    </InputLabel>
                    <Select
                      labelId={`quantity-select-label-${index}`}
                      id={`quantity-select-${index}`}
                      value={
                        selectedQuantities[data?.products[0]?.productId?.id] ||
                        data?.products[0]?.qty || ""
                      }
                      onChange={(e) =>
                        handleChange(
                          data?.products[0]?.productId?.id,
                          e.target.value,
                          data.id
                        )
                      }
                      label="quantity"
                    >
                      {/* Here you can dynamically generate the quantity options */}
                      {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((quantity) => (
                        <MenuItem key={quantity} value={quantity}>
                          {quantity}
                        </MenuItem>
                      ))}
                    </Select>
                  </FormControl>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="    lg:w-1/2 lg:ml-40     ">
          <div className=" p-4  m-4 cursor-pointer mt-20 mr-40   ">
            <button
              onClick={handleClick}
              className="flex justify-between border-4  p-2 w-[200px]  font-bold lg:w-1/2    "
            >
              <h1 className="w ">CHECKOUT</h1>
              <FaLongArrowAltRight className="" />
            </button>
            <div>
              <h1 className="mt-[45px] font-bold text-2xl w-[300px] ">
                ORDER SUMMARY
              </h1>
              <div className="flex justify-between mt-[30px] w-[250px]">
                <p>7 items</p>
                <p>₹34 633.50</p>
              </div>
              <div className="flex justify-between w-[250px] ">
                <p>Original price</p>
                <p>₹34 633.50</p>
              </div>
              <div className="flex justify-between w-[250px] ">
                <p>Delivery</p>
                <p>₹34 633.50</p>
              </div>
              <div className="flex justify-between w-[250px] ">
                <p>On sale</p>
                <p>₹34 633.50</p>
              </div>
              <div className="flex font-bold mt-[20px] justify-between w-[250px] ">
                <p>Total</p>
                <p>₹34 633.50</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="ml-5 lg:flex lg:flex-col ">
        <div className="flex underline mt-2   md:cursor-pointer md:mt-20 md:ml-40 md:flex md:underline md:hover:bg-primary md:w-28 ">
          <TbBus />
          <p>Free delivery</p>
        </div>
        <div className="flex underline mt-2  md:cursor-pointer md:ml-40 md:flex md:underline md:hover:bg-primary md:w-28 ">
          <TbBus />
          <p>Free delivery</p>
        </div>
        <div className="flex underline mt-2   md:cursor-pointer  md:ml-40 md:flex md:underline md:hover:bg-primary md:w-28">
          <TbBus />
          <p>Free delivery</p>
        </div>
      </div>

      <div className="grid grid-cols place-content-center gap-y-2 pt-5 pb-5 mt-40 bg-[#5e595a] text-sm  ">
        <div className="flex gap-x-4  ">
          <MdPhoneIphone />
          <p className=" ">Questions? 1800-120-3300</p>
          <p>|</p>
          <p>8AM - 8PM, 7 days a week</p>
        </div>

        <div className="grid place-content-center ">
          <p>Privacy Statement | Terms and Conditions</p>
        </div>
        <div className="grid place-content-center ">
          <p>© 2024 adidas India Marketing Private Limited</p>
        </div>
      </div>
    </>
  );
};

export default CartIndex;
