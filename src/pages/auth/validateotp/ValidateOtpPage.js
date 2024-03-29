import  react,{useState} from "react";

import TextField from "@mui/material/TextField";
import { Formik, useFormik } from "formik";
import { ValidateOtpPageSchema } from "../../../schemas/validateotpschema";

import { useNavigate } from "react-router-dom";

import { FaArrowRightLong } from "react-icons/fa6";
import { authApi } from "../../../mocks/auth";



const initialValues = {
  otp: "",
  
};

const ValidateOtpPage = () => {
  const navigate = useNavigate();
  

  const handleSubmitForm =()=>{
    alert("hello")
  }



  const { values, errors, touched, handleBlur, handleChange, handleSubmit } = useFormik({
      initialValues: initialValues,
      validationSchema: ValidateOtpPageSchema,
      onSubmit: async(values, action) => {
        console.log("100");
        const {otp} = values;
        const data = {otp};
        console.log("hello");
        console.log(data);
        let result = await authApi.validateOtp(data);


       
        if(result?.status==="SUCCESS") {
          alert(result?.message)
          navigate("/login")
          action.resetForm();

        }else {
          alert("something went wrong!")

        }
      },
    });

  

  return (

    
     <div className=" p-10">
    
    <form onSubmit={handleSubmit}> 
       
         <div className="mt-4  ">
           <TextField
             className="w-3/4 "
             name="otp"
             type="string"
             label="Enter your otp *"
             variant="outlined"
             value={values.string}
             onChange={handleChange}
             onBlur={handleBlur}
           />
           {errors.otp && touched.otp ? (
             <p className="form-error text-[red]">{errors.code}</p>
           ) : null}
         </div>
        
       
 
       </form>

       <button onClick={() => navigate("/reset-page")}  
       type="submit"
         className="flex justify-between cursor-pointer mt-2  p-2 font-bold bg-primary w-40  "
       
       >
       CONTINUE

       <FaArrowRightLong />
       </button>
     
     

   
   </div>

    
   
  );
};

export default ValidateOtpPage;

