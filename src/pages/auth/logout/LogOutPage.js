import * as React from "react";
import Navbar from "../../../layouts/Navbar";
import Footbar from "../../../layouts/footbar";

import { FaArrowRightLong } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";


import { LogoutPageSchema } from "../../../schemas/logoutschema";
import { authApi } from "../../../mocks/auth";



const LogOutPage = () => {
  const navigate = useNavigate();
  
  

    

  return (
    
      <div className="  p-10">

        
          <div className="mt-4  ">
           <h1 className="text-2xl ">Are you sure you want to log out ?</h1>
            
          </div>

         
       

        <button onClick={() => navigate("/login")}  
       type="submit"
         className="flex justify-between cursor-pointer mt-2  p-2 font-bold bg-primary w-[110px]  "
       
       >
       LOG OUT

       <FaArrowRightLong />
       </button>
      </div>

      
    
  );
};

export default LogOutPage;
