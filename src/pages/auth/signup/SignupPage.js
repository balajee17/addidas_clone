import * as React from 'react';
import { TiTick } from "react-icons/ti";
import { ImAppleinc } from "react-icons/im";
import { FaFacebook } from "react-icons/fa6";
import { FcGoogle } from "react-icons/fc";
import { FaArrowRightLong } from "react-icons/fa6";
import TextField from "@mui/material/TextField";
import {  Formik, useFormik } from 'formik';
import { SignupPageSchema } from "../../../schemas/signupschema";
import { register } from "../../../redux/slices/auth";
import { useNavigate } from "react-router-dom";
import {useDispatch} from "react-redux"
import { authApi } from '../../../mocks/auth';
// import {useDispatch} from 'red'
const initialValues = {
  name: "",
  email:"",
  password: "",
  
};
// console.log("initialValues",initialValues)
const SignupPage = () => {
  const navigate = useNavigate()
const dispatch = useDispatch()
  const { values, errors, touched, handleBlur, handleChange, handleSubmit } = useFormik({
    initialValues: initialValues,
    validationSchema: SignupPageSchema,
    onSubmit : async(values, action) => {
      // console.log(values)
      const {name,email,password} = values;
      const data = {name,email,password};
      // console.log(data);
      let result = await authApi.register(data);
     console.log(result)
      if(result?.status==="SUCCESS"){
        alert(result?.message)
       navigate("/login")
        action.resetForm();

      }else{
        alert("something went wrong!")
      }
     


    },

  });
  // console.log(values)

const handleButton = ()=>{
  console.log("heeelo")
}

  return (
    <>
  
      <div className="pb-20 mt-20  pl-40 pr-40   ">
        <div className="w-1/2">
          <img src="/log2.png"></img>
          <h1 className="font-bold text-3xl mt-2  ">
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
            <FcGoogle className="border-2 size-12 p-2 " />
          </div>
          <form onSubmit={handleSubmit} >
          <div  className="mt-4   ">
            <TextField
              className="w-3/4 "
              name="name"
              type="text"
              label="USER NAME *"
              variant="outlined"
              value={values.name}
              onChange={handleChange}
              onBlur={handleBlur}
              
            />
            { errors.name && touched.name ?(<p className="form-error text-[red]">{errors.name}</p>) :null
            }
          </div>
          <div  className="mt-4  ">
            <TextField
              className="w-3/4 "
              name="email"
              type="email"
              label="EMAIL ADDRESS *"
              variant="outlined"
              value={values.email}
              onChange={handleChange}
              onBlur={handleBlur}
              
            />
            { errors.email && touched.email ?(<p className="form-error text-[red]">{errors.email}</p>) :null}
            
          </div>
          <div className="mt-4  ">
            <TextField
              className="w-3/4 "
              name="password"
              label="PASSWORD *"
              type="password"
              variant="outlined"
              value={values.password}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            { errors.password && touched.password ?(<p className="form-error text-[red]">{errors.password}</p>) :null
            }
          </div>
          {/* <div className="mt-4  ">
            <TextField
              className="w-3/4 "
              name="confirm_password"
              label="CONFIRM PASSWORD *"
              variant="outlined"
              type="password"
              value={values.confirm_password}
              onChange={handleChange}
              onBlur={handleBlur}

            />
            { errors.confirm_password && touched.confirm_password ?(<p className="form-error text-[red]">{errors.confirm_password}</p>) :null
            }
          </div> */}


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
            <button type='submit' className="flex justify-between cursor-pointer mt-2   p-2 font-bold bg-primary w-40  "  >
              CONTINUE
              <FaArrowRightLong />
            </button>
          </form>
        </div>
      </div>
 

    </>
  );
};

export default SignupPage;
