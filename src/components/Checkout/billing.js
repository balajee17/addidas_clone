import React, { useEffect } from "react";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import { FaLongArrowAltRight } from "react-icons/fa";

const state = [
  { label: "Bihar" },
  { label: "Up" },
  { label: "Jharkhand" },
  { label: "Mharsashtra" },
  { label: "Karnatka" },
  { label: "Madhya pradesh" },
  { label: "Uttrakhand" },
  {
    label: "Punjab",
  },
  { label: "Goa" },
  { label: "Tamilnadu" },
  { label: "Kerla" },
  { label: "Andhra pradesh" },
  { label: "Udisa" },
];

const BillingPage = () => {
  return (
    <>
      <div className="p-4  ">
        <h1 className="font-bold ">Billing address</h1>
        <div className="mt-8 flex gap-x-4   ">
          <TextField
            className=" "
            id="outlined-basic"
            label="First Name *"
            variant="outlined"
          />
          <TextField
            className=" "
            id="outlined-basic"
            label="Last Name *"
            variant="outlined"
          />
        </div>
        <div className="flex flex-col gap-y-4 mt-4 w-[460px]  ">
          <TextField
            className=" "
            id="outlined-basic"
            label="Street Address *"
            variant="outlined"
          />
          <TextField
            className=" "
            id="outlined-basic"
            label="Landmark *"
            variant="outlined"
          />
        </div>
        <div className="mt-4 flex gap-x-4   ">
          <TextField
            className=" "
            id="outlined-basic"
            label="Additional info *"
            variant="outlined"
          />
          <TextField
            className=" "
            id="outlined-basic"
            label="City *"
            variant="outlined"
          />
        </div>
        <div className="flex gap-x-4 ">
          <div className="  mt-4  cursor-pointer ">
            <Autocomplete
              disablePortal
              id="combo-box-demo"
              options={state}
              sx={{ width: 220 }}
              renderInput={(params) => <TextField {...params} label="State" />}
            />
            
          </div>
          <div className="mt-4 ">
            <TextField
              className="  "
              id="outlined-basic"
              label="Pin code *"
              variant="outlined"
            />
          </div>
        </div>
        <div className="flex gap-x-2 mt-4   ">
            <h1 className="font-bold ">Country:</h1>
            <p>India</p>
        </div>
        <div className="mt-4 ">
            <TextField
              className="  "
              id="outlined-basic"
              label="Mobile number*"
              variant="outlined"
            />
          </div>
          
         

      </div>
    </>
  );
};

export default BillingPage;
