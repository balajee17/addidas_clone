import React, { useEffect, useState } from "react";
import { IoIosArrowDown } from "react-icons/io";
import { IoIosSearch } from "react-icons/io";
import { IoPersonOutline } from "react-icons/io5";
import { MdKeyboardArrowDown } from "react-icons/md";
import { LiaShoppingBagSolid } from "react-icons/lia";
import { Link, useNavigate } from "react-router-dom";
import Badge from "@mui/material/Badge";
import { useDispatch, useSelector } from "react-redux";
import { logoutUser } from "../redux/slices/auth";
import Drawer from "@mui/material/Drawer";
import { IoReorderThreeOutline } from "react-icons/io5";
import { TbMenuOrder } from "react-icons/tb";
import { BsSuitHeart } from "react-icons/bs";
import ProductSliderPage from "../content/Product/ProductSliderPage";
import NavbarSlider2Page from "./NavbarSlider2Page";
import MenPage from "../components/Navbar/men";
import { Box } from "@mui/material";
import NavbarSliderPage from "./NavbarSliderPage";
import Cookies from "js-cookie";
import axios from "axios";


const Navbar = ({ name }) => {
  const [drawer1, setDrawer1] = useState(false);
  const [drawer2, setDrawer2] = useState(false);
  const [value1, setValue1] = React.useState([0, 20000]);
  const [cartBadge, setCartBadge] = useState(0);


  const [show, setShow] = useState(false);
  const handleClick1 = () => {
    navigate("/me");
  };

  const handleClick2 = () => {
    navigate("/cart-index");
  };

  const handleClick3 = () => {
    navigate("/wishlist");
  };

  const handleClick4 = () => {
    navigate("/");
  };

  const user = useSelector((state) => state.auth.user);
  // console.log("user", user);
  const handleLogout = async () => {
    const res = await dispatch(logoutUser());
    if (res) {
      localStorage.removeItem("accessToken");
      Cookies.remove("authCookie");
      alert("User Logout successfully");
      navigate("/login");
    }
  };

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const cartData = useSelector((state) => state?.cart?.cart);

  const getCarts = async () => {
    console.log(user)
    let payload = {

     query: { userId: user?.id, isDeleted: false },
      options: {
        collation: "",
        sort: { name: 1 },
        populate: "products.productId",
        projection: "",
        lean: false,
        leanWithId: true,
        page: 1,
        limit: 10,
        pagination: true,
        useEstimatedCount: false,
        useCustomCountFn: false,
        forceCountFn: false,
        read: {},
        options: {},
      },
      isCountOnly: true,
    };
    
    let result = await axios.post(
      `${process.env.REACT_APP_HOST}/cart/list`,
      payload,
      {
        method: "post",
        headers: {
          Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
        },
      }
    );
    if (result && result.data) {
     setCartBadge(result?.data?.data?.totalRecords)
    } else {
      return false;
    }
  };

  useEffect(() => {
    if(user && user.id)
      getCarts();
  }, [user]);

  return (
    <div className=" fixed top-0 w-full  z-[999]">
      <div className="flex justify-between p-2  font-bold  sm:cursor-pointer  sm:flex sm:justify-center sm:items-center sm:font-bold sm:gap-10 bg-[#ffffff] sm:border-b-2 sm:border-grey   ">
        <div
          onClick={() => setDrawer1(true)}
          className="text-xs flex gap-x-2    "
        >
          FREE DELIVERY , RETURN AND EXCHANGE
          <IoIosArrowDown className="mt-1 " />
        </div>

        {drawer1 && (
          <Drawer
            anchor="top"
            open={drawer1}
            className="cursor-pointer "
            onClose={() => setDrawer1(false)}
          >
            <NavbarSlider2Page setDrawer={setDrawer1} />
          </Drawer>
        )}
      </div>

      <div className=" w-full  h-14 sm:h-20 sm:p-4  sm:gap-x-5 md:flex md:justify-between items-center  font-bold bg-[#FFFFFF] ">
        <div className=" flex justify-between p-4    h-14 items-center  ">
          <div className="w-1/8 flex gap-x-4  ">
            <IoReorderThreeOutline
              onClick={() => setDrawer2(true)}
              className="lg:hidden "
            />
            {drawer2 && (
              <Drawer
                anchor="left"
                open={drawer2}
                onClose={() => setDrawer2(false)}
              >
                <NavbarSliderPage
                  value1={value1}
                  setValue1={setValue1}
                  setDrawer={setDrawer2}
                />
              </Drawer>
            )}
            <BsSuitHeart onClick={handleClick3} className="lg:hidden" />
          </div>
          <img
            src="./download-removebg-preview.png"
            alt="image"
            height={50}
            width={50}
            onClick={handleClick4}
            className=" cursor-pointer  h-14  flex sm:items-center sm:justify-center "
          ></img>
          <div className=" w-1/6 mt-4  flex justify-between  size-[50px]  ">
            <IoPersonOutline className=" sm:hidden " />

            <IoIosSearch className=" sm:hidden   " />
            <LiaShoppingBagSolid className=" sm:hidden " />
          </div>
        </div>

        <div className="hidden lg:flex lg:gap-6   lg:mt-16  ">
          <div>
            <Box
              className="relative   w-[60px] h-[60px]"
              sx={{ "&:hover .dropdown": { display: "flex" } }}
            >
              <p className="cursor-pointer hover:border-b-4   ">MEN</p>

              <Box className={"dropdown"} sx={{ display: "none" }}>
                <div className="fixed  top-[110px] left-[0px] z-10 bg-secoundry w-full ">
                  <div className="flex justify-between ml-6 mr-6 p-10 w-full ">
                    <div>
                      <h1 className="font-bold cursor-pointer hover:underline ">
                        FEATURED
                      </h1>
                      <p
                        onClick={() =>
                          navigate(
                            `/product-page?key=featured&&value=New Arrivals`
                          )
                        }
                        className="cursor-pointer hover:underline "
                      >
                        New Arrivals
                      </p>
                      <p
                        onClick={() =>
                          navigate(
                            `/product-page?key=featured&&value=Online Exclusives`
                          )
                        }
                        className="cursor-pointer hover:underline "
                      >
                        Online Exclusives
                      </p>
                      <p
                        onClick={() =>
                          navigate(
                            `/product-page?key=featured&&value=Addidas Sportswear`
                          )
                        }
                        className="cursor-pointer hover:underline "
                      >
                        Addidas Sportswear
                      </p>
                    </div>

                    <div>
                      <h1 className="font-bold cursor-pointer hover:underline ">
                        FOOTWEAR
                      </h1>
                      <p className="cursor-pointer hover:underline ">
                        Running{" "}
                      </p>
                      <p className="cursor-pointer hover:underline ">
                        Running show finder
                      </p>
                      <p className="cursor-pointer hover:underline ">
                        Sneakers
                      </p>
                    </div>

                    <div>
                      <h1 className="font-bold cursor-pointer hover:underline ">
                        CLOTHING
                      </h1>
                      <p className=" cursor-pointer hover:underline ">
                        hoodies
                      </p>
                      <p className=" cursor-pointer hover:underline ">jacket</p>
                      <p className=" cursor-pointer hover:underline ">
                        tracksuits
                      </p>
                    </div>

                    <div>
                      <h1 className="font-bold cursor-pointer hover:underline ">
                        ACCESSORIES
                      </h1>
                      <p className=" cursor-pointer hover:underline ">socks</p>
                      <p className=" cursor-pointer hover:underline ">gloves</p>
                      <p className=" cursor-pointer hover:underline ">
                        headwear
                      </p>
                    </div>

                    <div>
                      <h1 className="font-bold cursor-pointer hover:underline ">
                        SPORTS
                      </h1>
                      <p className="cursor-pointer hover:underline ">running</p>
                      <p className="cursor-pointer hover:underline ">
                        football
                      </p>
                      <p className="cursor-pointer hover:underline ">cricket</p>
                    </div>
                  </div>
                </div>
              </Box>
            </Box>
          </div>

          <Box
            // className="relative  w-[60px] h-[60px]"
            sx={{ "&:hover .dropdown": { display: "flex" } }}
          >
            <p className="cursor-pointer hover:border-b-4  ">WOMEN</p>

            <Box className={"dropdown"} sx={{ display: "none" }}>
              <div className=" fixed top-[110px] left-[0px] z-10 bg-secoundry w-full ">
                <div className="flex justify-between ml-6 mr-6 p-6 w-full ">
                  <div>
                    <h1 className="font-bold cursor-pointer hover:underline ">
                      FEATURED
                    </h1>
                    <p>New Arrivals</p>
                    <p>Online Exclusives</p>
                    <p>Addidas Sportswear</p>
                  </div>

                  <div>
                    <h1 className="font-bold cursor-pointer hover:underline ">
                      FEATURED
                    </h1>
                    <p>New Arrivals</p>
                    <p>Online Exclusives</p>
                    <p>Addidas Sportswear</p>
                  </div>

                  <div>
                    <h1 className="font-bold cursor-pointer hover:underline ">
                      FEATURED
                    </h1>
                    <p>New Arrivals</p>
                    <p>Online Exclusives</p>
                    <p>Addidas Sportswear</p>
                  </div>

                  <div>
                    <h1 className="font-bold cursor-pointer hover:underline ">
                      FEATURED
                    </h1>
                    <p>New Arrivals</p>
                    <p>Online Exclusives</p>
                    <p>Addidas Sportswear</p>
                  </div>

                  <div>
                    <h1 className="font-bold cursor-pointer hover:underline ">
                      FEATURED
                    </h1>
                    <p>New Arrivals</p>
                    <p>Online Exclusives</p>
                    <p>Addidas Sportswear</p>
                  </div>
                </div>
              </div>
            </Box>
          </Box>

          <Box
            className="relative  w-[60px] h-[60px]"
            sx={{ "&:hover .dropdown": { display: "flex" } }}
          >
            <span className="cursor-pointer hover:border-b-4   ">KIDS</span>

            <Box className={"dropdown"} sx={{ display: "none" }}>
              <div className=" fixed top-[110px] left-[0px] z-10 bg-secoundry w-full ">
                <div className="flex justify-between ml-6 mr-6 p-6 w-full ">
                  <div>
                    <h1 className="font-bold cursor-pointer hover:underline ">
                      FEATURED
                    </h1>
                    <p>New Arrivals</p>
                    <p>Online Exclusives</p>
                    <p>Addidas Sportswear</p>
                  </div>

                  <div>
                    <h1 className="font-bold cursor-pointer hover:underline ">
                      FEATURED
                    </h1>
                    <p>New Arrivals</p>
                    <p>Online Exclusives</p>
                    <p>Addidas Sportswear</p>
                  </div>

                  <div>
                    <h1 className="font-bold cursor-pointer hover:underline ">
                      FEATURED
                    </h1>
                    <p>New Arrivals</p>
                    <p>Online Exclusives</p>
                    <p>Addidas Sportswear</p>
                  </div>

                  <div>
                    <h1 className="font-bold cursor-pointer hover:underline ">
                      FEATURED
                    </h1>
                    <p>New Arrivals</p>
                    <p>Online Exclusives</p>
                    <p>Addidas Sportswear</p>
                  </div>

                  <div>
                    <h1 className="font-bold cursor-pointer hover:underline ">
                      FEATURED
                    </h1>
                    <p>New Arrivals</p>
                    <p>Online Exclusives</p>
                    <p>Addidas Sportswear</p>
                  </div>
                </div>
              </div>
            </Box>
          </Box>

          <Box
            className="relative  w-[60px] h-[60px]"
            sx={{ "&:hover .dropdown": { display: "flex" } }}
          >
            <p className="cursor-pointer hover:border-b-4  ">SPORTS</p>

            <Box className={"dropdown"} sx={{ display: "none" }}>
              <div className=" fixed top-[110px] left-[0px] z-10 bg-secoundry w-full ">
                <div className="flex justify-between ml-6 mr-6 p-6 w-full ">
                  <div>
                    <h1 className="font-bold cursor-pointer hover:underline ">
                      FEATURED
                    </h1>
                    <p>New Arrivals</p>
                    <p>Online Exclusives</p>
                    <p>Addidas Sportswear</p>
                  </div>

                  <div>
                    <h1 className="font-bold cursor-pointer hover:underline ">
                      FEATURED
                    </h1>
                    <p>New Arrivals</p>
                    <p>Online Exclusives</p>
                    <p>Addidas Sportswear</p>
                  </div>

                  <div>
                    <h1 className="font-bold cursor-pointer hover:underline ">
                      FEATURED
                    </h1>
                    <p>New Arrivals</p>
                    <p>Online Exclusives</p>
                    <p>Addidas Sportswear</p>
                  </div>

                  <div>
                    <h1 className="font-bold cursor-pointer hover:underline ">
                      FEATURED
                    </h1>
                    <p>New Arrivals</p>
                    <p>Online Exclusives</p>
                    <p>Addidas Sportswear</p>
                  </div>

                  <div>
                    <h1 className="font-bold cursor-pointer hover:underline ">
                      FEATURED
                    </h1>
                    <p>New Arrivals</p>
                    <p>Online Exclusives</p>
                    <p>Addidas Sportswear</p>
                  </div>
                </div>
              </div>
            </Box>
          </Box>

          <Box
            className="relative  w-[60px] h-[60px]"
            sx={{ "&:hover .dropdown": { display: "flex" } }}
          >
            <p className="cursor-pointer hover:border-b-4  ">BRANDS</p>

            <Box className={"dropdown"} sx={{ display: "none" }}>
              <div className=" fixed top-[110px] left-[0px] z-10 bg-secoundry w-full ">
                <div className="flex justify-between ml-6 mr-6 p-6 w-full ">
                  <div>
                    <h1 className="font-bold cursor-pointer hover:underline ">
                      FEATURED
                    </h1>
                    <p>New Arrivals</p>
                    <p>Online Exclusives</p>
                    <p>Addidas Sportswear</p>
                  </div>

                  <div>
                    <h1 className="font-bold cursor-pointer hover:underline ">
                      FEATURED
                    </h1>
                    <p>New Arrivals</p>
                    <p>Online Exclusives</p>
                    <p>Addidas Sportswear</p>
                  </div>

                  <div>
                    <h1 className="font-bold cursor-pointer hover:underline ">
                      FEATURED
                    </h1>
                    <p>New Arrivals</p>
                    <p>Online Exclusives</p>
                    <p>Addidas Sportswear</p>
                  </div>

                  <div>
                    <h1 className="font-bold cursor-pointer hover:underline ">
                      FEATURED
                    </h1>
                    <p>New Arrivals</p>
                    <p>Online Exclusives</p>
                    <p>Addidas Sportswear</p>
                  </div>

                  <div>
                    <h1 className="font-bold cursor-pointer hover:underline ">
                      FEATURED
                    </h1>
                    <p>New Arrivals</p>
                    <p>Online Exclusives</p>
                    <p>Addidas Sportswear</p>
                  </div>
                </div>
              </div>
            </Box>
          </Box>

          <Box
            className="relative  w-[60px] h-[60px]"
            sx={{ "&:hover .dropdown": { display: "flex" } }}
          >
            <p className="cursor-pointer hover:border-b-4  ">LIFESTYLE</p>

            <Box className={"dropdown"} sx={{ display: "none" }}>
              <div className=" fixed top-[110px] left-[0px] z-10 bg-secoundry w-full ">
                <div className="flex justify-between ml-6 mr-6 p-6 w-full ">
                  <div>
                    <h1 className="font-bold cursor-pointer hover:underline ">
                      FEATURED
                    </h1>
                    <p>New Arrivals</p>
                    <p>Online Exclusives</p>
                    <p>Addidas Sportswear</p>
                  </div>

                  <div>
                    <h1 className="font-bold cursor-pointer hover:underline ">
                      FEATURED
                    </h1>
                    <p>New Arrivals</p>
                    <p>Online Exclusives</p>
                    <p>Addidas Sportswear</p>
                  </div>

                  <div>
                    <h1 className="font-bold cursor-pointer hover:underline ">
                      FEATURED
                    </h1>
                    <p>New Arrivals</p>
                    <p>Online Exclusives</p>
                    <p>Addidas Sportswear</p>
                  </div>

                  <div>
                    <h1 className="font-bold cursor-pointer hover:underline ">
                      FEATURED
                    </h1>
                    <p>New Arrivals</p>
                    <p>Online Exclusives</p>
                    <p>Addidas Sportswear</p>
                  </div>

                  <div>
                    <h1 className="font-bold cursor-pointer hover:underline ">
                      FEATURED
                    </h1>
                    <p>New Arrivals</p>
                    <p>Online Exclusives</p>
                    <p>Addidas Sportswear</p>
                  </div>
                </div>
              </div>
            </Box>
          </Box>

          <Box
            className="relative  w-[60px] h-[60px]"
            sx={{ "&:hover .dropdown": { display: "flex" } }}
          >
            <p className="cursor-pointer text-[red] hover:border-b-4  ">
              OUTLET
            </p>

            <Box className={"dropdown"} sx={{ display: "none" }}>
              <div className=" fixed top-[110px] left-[0px] z-10 bg-secoundry w-full ">
                <div className="flex justify-between ml-6 mr-6 p-6 w-full ">
                  <div>
                    <h1 className="font-bold cursor-pointer hover:underline ">
                      FEATURED
                    </h1>
                    <p>New Arrivals</p>
                    <p>Online Exclusives</p>
                    <p>Addidas Sportswear</p>
                  </div>

                  <div>
                    <h1 className="font-bold cursor-pointer hover:underline ">
                      FEATURED
                    </h1>
                    <p>New Arrivals</p>
                    <p>Online Exclusives</p>
                    <p>Addidas Sportswear</p>
                  </div>

                  <div>
                    <h1 className="font-bold cursor-pointer hover:underline ">
                      FEATURED
                    </h1>
                    <p>New Arrivals</p>
                    <p>Online Exclusives</p>
                    <p>Addidas Sportswear</p>
                  </div>

                  <div>
                    <h1 className="font-bold cursor-pointer hover:underline ">
                      FEATURED
                    </h1>
                    <p>New Arrivals</p>
                    <p>Online Exclusives</p>
                    <p>Addidas Sportswear</p>
                  </div>

                  <div>
                    <h1 className="font-bold cursor-pointer hover:underline ">
                      FEATURED
                    </h1>
                    <p>New Arrivals</p>
                    <p>Online Exclusives</p>
                    <p>Addidas Sportswear</p>
                  </div>
                </div>
              </div>
            </Box>
          </Box>
        </div>

        <div className="  lg:flex lg:flex-col lg:gap-5 lg:mt-2  ">
          <div className="hidden lg:flex lg:gap-5 lg:text-[10px] lg:w-full lg:justify-end  ">
            <a href="/p">help</a>
            <a href="/order-tracker">orders and returns</a>
            {user !== " " ? (
              <div className=" flex gap-2 items-center">
                <p>{user.email}</p>
                <p onClick={handleLogout} className=" cursor-pointer">
                  LogOut
                </p>
              </div>
            ) : (
              <>
                <Link to="/signup">sign up</Link>
                <Link to="/login">log in</Link>
              </>
            )}
          </div>
          <div className=" gap-3 hidden md:flex      ">
            <input
              placeholder="Seacrh"
              className="hidden  lg:flex lg:h-[30px] lg:w-[219px] lg:relative bg-[#FFFFFF] lg:border lg:border-[white]"
            ></input>
            <div className="sm:absolute sm:right-[120px] sm:mt-[3px] ">
              <IoIosSearch className="hideen  sm:flex sm:absolute  " />
            </div>
            <Badge
              badgeContent={2}
              color="secondary"
              className="cursor-pointer "
              onClick={handleClick1}
            >
              <IoPersonOutline
                onClick={handleClick1}
                className="cursor-pointer  "
              />
            </Badge>
            <Badge
              badgeContent={1}
              color="secondary"
              className="cursor-pointer "
              onClick={handleClick3}
            >
              <MdKeyboardArrowDown
                onClick={handleClick3}
                className=" block   "
              />
            </Badge>
            <Badge
              badgeContent={cartBadge}
              color="secondary"
              onClick={handleClick2}
              className="cursor-pointer "
            >
              <LiaShoppingBagSolid
                onClick={handleClick2}
                className="cursor-pointer  "
              />
            </Badge>

            <IoIosSearch className=" sm:hidden sm:absolute    " />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
