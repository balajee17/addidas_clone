import  react,{useState} from "react";

import TextField from "@mui/material/TextField";
import { Formik, useFormik } from "formik";

import { ResetPasswordOtpPageSchema } from "../../../schemas/resetpasswordotpschema";

import { useNavigate } from "react-router-dom";

import { FaArrowRightLong } from "react-icons/fa6";
import { authApi } from "../../../mocks/auth";

const initialValues = {
  email: "",
};

const ResetPasswordOtpPage = () => {
  const navigate = useNavigate();
  
const handleSubmitForm =()=>{
  alert("hello")
}
console.log("50");
  const { values, errors, touched, handleBlur, handleChange, handleSubmit } = useFormik({
      initialValues: initialValues,
      validationSchema: ResetPasswordOtpPageSchema,
      onSubmit: async(values, action) => {
        console.log("100");
        const { email } = values;
        const data = { email };
        console.log("hello");
        let result = await authApi.resetPasswordOtp(data);
       
        console.log(result)
        if(result?.status==="SUCCESS") {
          alert(result?.message)
          navigate("/reset-page")
           action.resetForm();

        }else {
          alert("something went wrong!")

        }
      },
    });

  const handleButton = () => {
    console.log("heelo");
  };

  return (
    <div className=" p-10">
    
       <form onSubmit={handleSubmit}>
        
          <div className="mt-4  ">
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
            {errors.email && touched.email ? (
              <p className="form-error text-[red]">{errors.email}</p>
            ) : null}
          </div>
         
          <button
            type="submit"
            className="flex justify-between cursor-pointer mt-2  p-2 font-bold bg-primary w-40  "
            
          >
            CONTINUE
            <FaArrowRightLong />
          </button> 
         </form>
         
         
         
    
    </div>
  );
};

export default ResetPasswordOtpPage;
