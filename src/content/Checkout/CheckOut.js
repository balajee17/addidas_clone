import React, { useEffect, useState } from "react";
import { MdOutlineShoppingBag } from "react-icons/md";
import { Link, useNavigate } from "react-router-dom";
import { MdPhoneIphone } from "react-icons/md";
import Badge from "@mui/material/Badge";
import Checkbox from "@mui/material/Checkbox";
import { FaLongArrowAltRight } from "react-icons/fa";
import BillingPage from "../../components/Checkout/billing";
import CircularProgress from "@mui/material/CircularProgress";
import { BsTruck } from "react-icons/bs";
import { RiRotateLockLine } from "react-icons/ri";
import axios from 'axios'
import { useDispatch, useSelector } from "../../redux/store/store";

const label = { inputProps: { "aria-label": "Checkbox demo" } };



const CheckOutPage = () => {
  const [show, setShow] = useState(false);
  const [progress, setProgress] = useState(false);
  const [step, setStep] = useState(1);
  const dispatch = useDispatch();



  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/");
  };

  const handleClick1 = () => {
    navigate("/cart-index");
  };

  const handleClick3 = () => {
    navigate("/order-page")

  };
  

  const handleNext = () => {
    setProgress(true);
    const timeoutFunction = () => {
      setStep((value) => (value >= 3 ? 0 : (value + 1)));
      setProgress(false);
    };
    
    // Set the timeout and keep a reference to it
    const timeoutId = setTimeout(timeoutFunction, 2000);
    
    // Clear the timeout after 2 seconds
    setTimeout(() => {
      clearTimeout(timeoutId);
    }, 2000);

  };

  const getPosition = async (latitude,longitude)=>{
    await axios.get(`https://maps.googleapis.com/maps/api/geocode/json?latlng=${latitude},${longitude}&key=${process.env.REACT_APP_GOOGLE_CLIENTID}`).then((res)=>{
      console.log(res)
      if(res?.data?.status==='OK'){
        const locality = res.data?.results[0]?.address_components.filter((item)=>{ return item.types.includes('sublocality_level_1')})
        const city = res.data?.results[0]?.address_components.filter((item)=> item.types.includes('locality'))
        const state = res.data?.results[0]?.address_components.filter((item)=> item.types.includes('administrative_area_level_1'))
        const country = res.data?.results[0]?.address_components.filter((item)=> item.types.includes('country'))
        const pin = res.data?.results[0]?.address_components.filter((item)=> item.types.includes('postal_code'))

              // values.city = city.length !==0? city[0].long_name:"";
              // values.locality =  locality.length !==0 ? locality[0].long_name :"";
              // values.state = state.length!==0 ? state[0].long_name:"";
              // values.country = country.length!==0 ? country[0].long_name :"";
              // values.zipcode = pin!==0 ? parseFloat(pin[0].long_name):"";
              // setOpen(true);
        }
        else{
          // enqueueSnackbar('Some Error Occured', {
          //   variant: 'error',
          //   anchorOrigin: {
          //     vertical: 'top',
          //     horizontal: 'center'
          //   },
          //   TransitionComponent: Zoom
          //   });
        }
      }).catch((e)=>{
        // console.log(e)
        // enqueueSnackbar('Some Error Occured '+e, {
        //   variant: 'error',
        //   anchorOrigin: {
        //     vertical: 'top',
        //     horizontal: 'center'
        //   },
        //   TransitionComponent: Zoom
        //   });
      })
    }

   const handleCurrLocation = async ()=>{
    setShow((value) => !value)
    // if((user.currentLocation===null)||((user.currentLocation && user.currentLocation.latitude!=undefined) && (user.currentLocation && user.currentLocation.longitude!=undefined))){
      if(navigator.geolocation){
          navigator.geolocation.getCurrentPosition((position)=>{
            const {latitude,longitude} = position.coords;
            getPosition(latitude,longitude)
          },(error)=>{
            // dispatch(updateLocation({code:error.code,message:error.message}))
            console.log(error)
          })
        }
        else{
          alert('Your Browser is not supporting geoLocation, Please Update your browser');
        }
  // }
  // else if(user.currentLocation.latitude!=undefined&&user.currentLocation.longitude!=undefined){
  //     getPosition(user.currentLocation.latitude,user.currentLocation.longitude)
  // }
  // else{
  //     enqueueSnackbar(`${user.currentLocation.code}`==='1'?'User Blocked Loaction, Please unblocked and reload ':`${user.currentLocation.message}`, {
  //         variant: 'error',
  //         anchorOrigin: {
  //           vertical: 'top',
  //           horizontal: 'center'
  //         },
  //         TransitionComponent: Zoom
  //         });
  // }
   }

  return (
    <>
      <div>
        <div className="flex justify-between ml-[160px] mr-[160px] p-4  ">
          <img
            height={50}
            width={50}
            onClick={handleClick}
            src="./download-removebg-preview.png"
            className="cursor-pointer "
          ></img>

          <button onClick={handleClick1}>
            <Badge
              badgeContent={7}
              color="secondary"
              className="cursor-pointer "
            >
              <MdOutlineShoppingBag className="size-[25px] cursor-pointer " />
            </Badge>
          </button>
        </div>
        <div className="ml-[650px] mt-8 ">
          <h1 className="font-bold text-3xl  ">CHECKOUT</h1>
          <p>(7 items) ₹34 633.50</p>
        </div>

        <div className="flex  justify-between ml-[160px] mr-[160px]  gap-x-16   mt-20   ">
          <div>
            <h1 className="font-bold left-[50px]   ">CONTACT</h1>

            <p className="mt-10 ">balajee1600@gmail.com</p>
            <div className="border-2 mt-10 w-[600px]"></div>
            <div className="w-[600px] mt-10  flex justify-between">
              <h1 className="font-bold ">ADDRESS</h1>
              <p className="underline cursor-pointer  ">ADD NEW</p>
            </div>

            {!progress && step>=1 &&  (
              <div>
                <h1 className="mt-10 font-bold ">Delivery address</h1>

                <div className="mt-6 border-2 border-b-4  w-[300px] h-[220px]">
                  <div className="p-4">
                    <h1>bala jee</h1>
                    <p>harridwar , bhadrabad</p>
                    <p>apartment - 5</p>
                    <p>gandhi maidan</p>
                    <p>patna, Bihar, 804408, IN</p>
                    <p>6794641647</p>
                    <div className="flex justify-start gap-x-6 mt-2 mb-4 font-bold underline cursor-pointer   ">
                      <p>EDIT</p>
                      <p>REMOVE</p>
                    </div>
                  </div>
                </div>
              </div>
            )}
            {progress && step===1 && (
              <div className="ml-[150px]     ">
                <CircularProgress />
              </div>
            )}
          </div>

          <div className=" w-[460px]">
            <div className="flex gap-x-[250px]  ml-[20px]">
              <h1 className="font-bold ">YOUR CART</h1>
              <p className="font-bold underline cursor-pointer  ">EDIT</p>
            </div>
            <div>
              <div className="flex gap-x-[250px]  ml-[20px] mt-8 ">
                <p>7 items</p>
                <p>7 $ 34 633</p>
              </div>
              <div className="flex gap-x-[210px]  ml-[20px] ">
                <p>Original price</p>
                <p>7 $ 34 633</p>
              </div>
              <div className="flex gap-x-[250px]  ml-[20px]  ">
                <p>Dekivery</p>
                <p>Free</p>
              </div>
              <div className="flex gap-x-[250px]  ml-[20px]  ">
                <p>On sale</p>
                <p>7 $ 34 633</p>
              </div>
              <div className="flex gap-x-[250px] font-bold mt-6   ml-[20px]  ">
                <p>Total</p>
                <p>7 $ 34 633</p>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-6 relative ml-[150px] flex   ">
          <Checkbox
            {...label}
            checked={show}
            onClick={handleCurrLocation}
            
          />
          <p className="mt-2 ">
            My billing and delivery information are the same.
          </p>
        </div>
        {show && (
          <div className="ml-[150px]     ">
            <BillingPage />
          </div>
        )}

        <div className="mt-6 ml-[150px] cursor-pointer     ">
          {step===1 && <button
            onClick= {handleNext}
            className="flex justify-between border-4  p-2  font-bold w-[225px]   "
          >
            <h1>Next</h1>
            <FaLongArrowAltRight />
          </button>
          }

          <div></div>
        </div>

        <div className=" ml-[150px] w-[600px]">
          <div className="border-2 mt-16"></div>
          <h1 className="text-2xl mt-8  ">DELIVERY OPTIONS</h1>
          {step>=2 &&
          <div>
            <div className="bg-[#ECEFF1] h-[60px] mt-4 p-4 ">
              <h1 className="font-bold ">
                Pay Online for Faster Delivery and Faster Return/Refund
              </h1>
            </div>
            <div className="mt-4 border-2 p-4   ">
              <div className="flex justify-between ">
                <h1 className="font-bold">Standard Delivery</h1>
                <BsTruck />
              </div>
              <p className="mt-4 font-bold  ">Free</p>
              <p>Delivery within:- Metro cities: 2-3 days/ Others: 4-5 Days</p>
            </div>
            {step===2&&<button onClick= {handleNext} className="flex justify-between border-4 mt-8  p-2  font-bold w-[225px]   ">
              <h1>Next</h1>
              <FaLongArrowAltRight />
            </button>}
          </div>
          }

          <div className="border-2 mt-12"></div>
          <h1 className="text-xl font-bold  mt-8  ">PAYMENT</h1>
          {step>=3 &&
          <div>
            <div className="bg-[#ECEFF1] flex justify-between  h-[60px] mt-12 p-4 ">
              <h1 className=" text-sm ">
              Payments are SSL encrypted so that your credit card and payment details stay safe.
              </h1>
              <RiRotateLockLine className="size-[30px]" />
            </div>
            <div className="mt-4 border-2 p-4 cursor-pointer  ">
              <div className="flex justify-between ">
                <h1 className="font-bold">UPI</h1>
                <img src="./upi.png"></img>
              </div>
              
            </div>
            <div className="mt-4 border-2 p-4 cursor-pointer  ">
              <div className="flex justify-between ">
                <h1 className="font-bold">Credit/Debit Card</h1>
                <img src="./visa.png"></img>
              </div>
              
            </div>
            <div className="mt-4 border-2 p-4 cursor-pointer   ">
              <div className="flex justify-between ">
                <h1 className="font-bold">NET BANKING</h1>
                <img src="./banking.png"></img>
              </div>
              
            </div>
            <div onClick={handleClick3} className="mt-4 border-2 p-4 cursor-pointer  ">
              <div className="flex justify-between ">
                <h1 className="font-bold">CASH ON DELIVERY</h1>
                <img src="./banking.png"></img>
              </div>
              
            </div>
            {step===2&&<button className="flex justify-between border-4 mt-8  p-2  font-bold w-[325px]   ">
              <h1>PLACE ORDER</h1>
              <FaLongArrowAltRight />
            </button>}
          </div>
          }
        </div>

        <div className="flex gap-x-2 ml-[150px] mt-[100px] ">
          <img src="./mastercard.png"></img>
          <img src="./rupay.png"></img>
          <img src="./upi.png"></img>
          <img src="./visa.png"></img>
        </div>

        <div className="grid grid-cols place-content-center gap-y-2 pt-5 pb-5 mt-40 bg-[#5e595a] text-sm    ">
          <div className="flex gap-x-4  ">
            <MdPhoneIphone />
            <p className=" ">Questions? 1800-120-3300</p>
            <p>|</p>
            <p>8AM - 8PM, 7 days a week</p>
          </div>

          <div className="grid place-content-center ">
            <p>Privacy Statement | Terms and Conditions</p>
          </div>
          {step===3 && <div className="grid place-content-center ">
            <p>© 2024 adidas India Marketing Private Limited</p>
          </div>}
        </div>
      </div>
    </>
  );
};

export default CheckOutPage;
