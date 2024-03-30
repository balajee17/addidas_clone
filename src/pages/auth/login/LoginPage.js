import * as React from "react";
import Navbar from "../../../layouts/Navbar";
import Footbar from "../../../layouts/footbar";
import { TiTick } from "react-icons/ti";
import { ImAppleinc } from "react-icons/im";
import { FaFacebook } from "react-icons/fa6";
import { FcGoogle } from "react-icons/fc";
import Checkbox from "@mui/material/Checkbox";
import { FaArrowRightLong } from "react-icons/fa6";
import { Formik, useFormik } from "formik";
import TextField from "@mui/material/TextField";
import { LoginPageSchema } from "../../../schemas/loginschema";
import { authApi } from '../../../mocks/auth';
import { useNavigate } from "react-router-dom";
import {useDispatch} from "react-redux"
import { register } from "../../../redux/slices/auth";
import ResetPasswordPage from "../resetpassword/ResetPasswordPage";


const handleGoogleLogin = () => {
  window.open(`http://localhost:5000/auth/google`,"_self");


}

const initialValues = {
  username: "",
  password: "",
  
};

const LoginPage = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const { values, errors, touched, handleBlur, handleChange, handleSubmit } = useFormik({
    initialValues: initialValues,
    validationSchema: LoginPageSchema,
    onSubmit : async(values, action) => {
      console.log(100);
      const {username, password} = values;
      const data = {username,password};
    // console.log("hello");
    let result = await authApi.login(data);
    console.log(result)
    if(result?.status==="SUCCESS") {
      alert(result?.message)
      navigate("/")
      action.resetForm();

 
    }else {
      alert("something went wrong!")

    }


    },

  });


  
  const handleButton = ()=>{
    console.log("heelo")
  }
  return (
    <>
      

      <div className="flex flex-col w-[1200px]   md:mt-20 md:flex-row md:justify-center md:w-[1500px] md:pb-20  md:pl-20 md:pr-20 md:gap-x-10 ">
        <div className="hidden md:block  md:w-1/2">
          <img src="/log-in.png"></img>
          <h1 className="text-4xl  font-bold mt-6 w-3/4       ">
            JOIN THE CLUB. GET REWARDED.
          </h1>
          <p className="mt-4 ">JOIN ADICLUB. GET REWARDED TODAY.</p>

          <div className="flex flex-row gap-x-2 mt-4 ">
            <TiTick />
            <p>A 15% off voucher for your next purchase</p>
          </div>

          <div className="flex flex- gap-x-2 mt-4 ">
            <TiTick />
            <p>A 15% off voucher for your next purchase</p>
          </div>

          <div className="flex flex-row gap-x-2 mt-4 ">
            <TiTick />
            <p>A 15% off voucher for your next purchase</p>
          </div>

          <div className="flex flex-row gap-x-2  mt-4 ">
            <TiTick />
            <p>A 15% off voucher for your next purchase</p>
          </div>

          <p className="sm:w-[450px]  mt-4 w-[45%]    ">
            Join now to start earning points, reach new levels and unlock more
            rewards and benefits from adiClub.
          </p>
        </div>

        <div className="p-6  md:w-1/2">
          <img src="/log2.png" className="h-12 w-15 md:h-auto w-auto   "></img>
          <h1 className=" font-bold text-2xl  md:text-3xl mt-2  ">
            YOUR ADICLUB BENEFITS AWAIT
          </h1>
          <p className="mt-2 ">
            Get free shipping, discount vouchers and members only products when
            you're in adiClub
          </p>
          <p className="font-bold ">Log in or sign up (it's free)</p>

          <div className="flex gap-x-2 mt-2  ">
            <ImAppleinc className="border-2 size-12 p-2 " />
            <FaFacebook className="border-2 size-12 p-2 " />
            <FcGoogle onClick={ handleGoogleLogin} className="border-2 size-12 p-2 " />
          </div>

          <form onSubmit={handleSubmit} >
          {/* <div className="mt-4   ">
            <TextField
              className="w-3/4 "
              name="username"
              label="USER NAME *"
              variant="outlined"
              value={values.email}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            { errors.name && touched.name ?(<p className="form-error text-[red] ">{errors.name}</p>) :null
            }
          </div> */}


          <div className="mt-4 ">
            <TextField
              className="w-3/4 "
              name="username"
              label="EMAIL ADDRESS *"
              variant="outlined"
              type="email"
              value={values.email}
              onChange={handleChange}
              onBlur={handleBlur}
              
            />
            { errors.email && touched.email ?(<p className="form-error text-[red]">{errors.email}</p>) :null
            }
          </div>

          <div className="mt-4  ">
            <TextField
              className="w-3/4 "
              name="password"
              label="PASSWORD *"
              variant="outlined"
              type="password"
              value={values.password}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            { errors.password && touched.password ?(<p className="form-error text-[red]">{errors.password}</p>) :null
            }
          </div>

          {/* <div className="mt-4">
            <div className="flex ">
              <Checkbox
                // checked={checked}
                // onChange={handleChange}
                inputProps={{ "aria-label": "controlled" }}
              />
              <p className="font-sm cursor-pointer ">
                I would like to stay up to date with adidas. I agree to receive
                personalised marketing messages from adidas India Marketing Pvt.
                Ltd.
              </p>
            </div>
            <p className="ml-10 underline cursor-pointer hover:bg-primary w-20    ">
              Read more
            </p>

            <div className="flex mt-4  ">
              <Checkbox
                // checked={checked}
                // onChange={handleChange}
                inputProps={{ "aria-label": "controlled" }}
              />
              <p className="cursor-pointer">
                I have read and accepted the Terms & Conditions, the adiClub
                Terms & Conditions and the adidas Privacy Policy.
              </p>
            </div>

            <div className="mt-2  flex  ">
              <Checkbox
                // checked={checked}
                // onChange={handleChange}
                inputProps={{ "aria-label": "controlled" }}
              />
              <p className="cursor-pointer">
                Keep me logged in. Applies to all options. More info
              </p>
            </div>
            <p className="ml-10 underline cursor-pointer  hover:bg-primary w-20    ">
              More info
            </p> 
            </div> */}

            <button type="submit" className="flex justify-between cursor-pointer mt-2   p-2 font-bold bg-primary w-40  ">
              <p className="text-[#fff]">CONTINUE</p>
              <FaArrowRightLong className="text-[#fff]" />
            </button>
            </form>
            <div onClick={()=>navigate('/reset-page')} className="cursor-pointer text-blue-600    ">Forgot password ?</div>
          </div>

         

       
        </div>
      

     
    </>
  );
};

export default LoginPage;
