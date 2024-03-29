import  react,{useState} from "react";

import TextField from "@mui/material/TextField";
import { Formik, useFormik } from "formik";

import { ResetPasswordPageSchema } from "../../../schemas/resetpasswordschema";

import { useNavigate } from "react-router-dom";

import { FaArrowRightLong } from "react-icons/fa6";
import { authApi } from "../../../mocks/auth"





const initialValues = {
  code: "",
  newPassword: "",
};

const ResetPasswordPage = () => {
  const navigate = useNavigate();
  

  const handleSubmitForm = () => {
    alert("hello");
  };
  



  const { values, errors, touched, handleBlur, handleChange, handleSubmit } = useFormik({
      initialValues: initialValues,
      validationSchema: ResetPasswordPageSchema,
      onSubmit: async(values, action) => {
        console.log("100");
        const {code , newPassword} = values;
        const data = {code, newPassword};
        console.log("hello");
        console.log(data);
        let result = await authApi.resetPassword(data);

       
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
             name="code"
             type="number"
             label="Enter your Code *"
             variant="outlined"
             value={values.code}
             onChange={handleChange}
             onBlur={handleBlur}
           />
           {errors.code && touched.code ? (
             <p className="form-error text-[red]">{errors.code}</p>
           ) : null}
         </div>
        
        
        
        
       
      
        <div className="mt-4  ">
         <TextField
           className="w-3/4 "
           name="newPassword"
           type="password"
           label="Enter Your New Password *"
           variant="outlined"
           value={values.newPassword}
           onChange={handleChange}
           onBlur={handleBlur}
         />
         {errors.newPassword && touched.newPassword ? (
           <p className="form-error text-[red]">{errors.password}</p>
         ) : null}
       </div>
       
       </form>

       <button onClick={() => navigate("/login")}  
       type="submit"
         className="flex justify-between cursor-pointer mt-2  p-2 font-bold bg-primary w-40  "
       
       >
       CONTINUE

       <FaArrowRightLong />
       </button>
     
     

   
   </div>

    
   
  );
};

export default ResetPasswordPage;
