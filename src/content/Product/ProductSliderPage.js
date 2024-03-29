import * as React from "react";
import { RxCross1 } from "react-icons/rx";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

import Slider from "@mui/material/Slider";
import { FaArrowRightLong } from "react-icons/fa6";

import { FormControlLabel, Radio, RadioGroup } from "@mui/material";

const label = { inputProps: { "aria-label": "Checkbox demo" } };

const ProductSliderPage = ({
  setDrawer,
  value1,
  setValue1,
  checkBoxes,
  setCheckBoxes,
  gender,
  setGender,
  productType,
  setProductType,
  surface,
  setSurface,
  feature,
  setFeature,
  sport,
  setSport,
  size,
  setSize,
  sortBy,
  setSortBy,
}) => {
  function valuetext(value) {
    return `${value}°C`;
  }

  const minDistance = 10;

  const handleCheckBoxChange = (event) => {
    const { name, value } = event.target;
    setCheckBoxes({
      ...checkBoxes,
      [name]: value,
    });
  };
  console.log("checkbox", checkBoxes);
  const handleSubmit = (event) => {
    event.preventDefault();

    console.log("Checkbox 1:", checkBoxes.checkBox1);
    console.log("Checkbox 2:", checkBoxes.checkBox2);
    console.log("Checkbox 3:", checkBoxes.checkBox3);
    console.log("Checkbox 4:", checkBoxes.checkBox3);
    console.log("Checkbox 5:", checkBoxes.checkBox3);
    console.log("Checkbox 6:", checkBoxes.checkBox3);
    console.log("Checkbox 7:", checkBoxes.checkBox3);
  };

  const handleChange1 = (event, newValue, activeThumb) => {
    if (!Array.isArray(newValue)) {
      return;
    }

    if (activeThumb === 0) {
      setValue1([Math.min(newValue[0], value1[1] - minDistance), value1[1]]);
    } else {
      setValue1([value1[0], Math.max(newValue[1], value1[0] + minDistance)]);
    }
  };

  const [value2, setValue2] = React.useState([20, 37]);

  const handleChange2 = (event, newValue, activeThumb) => {
    if (!Array.isArray(newValue)) {
      return;
    }

    if (newValue[1] - newValue[0] < minDistance) {
      if (activeThumb === 0) {
        const clamped = Math.min(newValue[0], 100 - minDistance);
        setValue2([clamped, clamped + minDistance]);
      } else {
        const clamped = Math.max(newValue[1], minDistance);
        setValue2([clamped - minDistance, clamped]);
      }
    } else {
      setValue2(newValue);
    }
  };

  return (
    <>
      <div className="w-[380px] md:w-[480px] z-[999999] overflow-x-hidden  ">
        <div className="p-2 flex justify-between border-b    ">
          <h1 className="cursor-pointer text-[18px] font-bold ">
            Filter & Sort
          </h1>
          <div className="flex gap-x-2  ">
            <p className="underline cursor-pointer "> Clear All</p>
            <RxCross1
              className="size-[30px] cursor-pointer "
              onClick={() => setDrawer(false)}
            />
          </div>
        </div>
        <div>
          <h1 className="p-2 cursor-pointer text-[18px] font-bold border-b ">
            Applied filters
          </h1>
        </div>
        <div className="border-b-2 ">
          <div className=" cursor-pointer ">
            <Accordion>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1-content"
                id="panel1-header"
                className="font-bold"
              >
                SORT BY
              </AccordionSummary>
              <AccordionDetails>
                <div>
                  <p
                    className="pb-4  border-b "
                    onClick={() => setSortBy("PRICE(LOW-HIGH)")}
                  >
                    PRICE(LOW-HIGH)
                  </p>
                  <p
                    className="p-4  border-b "
                    onClick={() => setSortBy("NEWEST")}
                  >
                    NEWEST
                  </p>
                  <p
                    className="p-4  border-b "
                    onClick={() => setSortBy("TOP SELLERS")}
                  >
                    TOP SELLERS
                  </p>
                  <p
                    className="p-4  border-b "
                    onClick={() => setSortBy("PRICE(HIGH-LOW)")}
                  >
                    PRICE(HIGH-LOW)
                  </p>
                </div>
              </AccordionDetails>
            </Accordion>
          </div>
        </div>

        <div className=" cursor-pointer border-b-2 ">
          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1-content"
              id="panel1-header"
              className="font-bold"
            >
              FEATURE
            </AccordionSummary>
            <AccordionDetails>
              <RadioGroup
                aria-labelledby="demo-radio-buttons-group-label"
                name="radio-buttons-group"
                value={feature}
                onChange={(e) => {
                  setFeature(e.target.value);
                }}
              >
                <FormControlLabel
                  value="Cushioning"
                  control={<Radio />}
                  label="Cushioning"
                />
                <FormControlLabel
                  value="Lightweight"
                  control={<Radio />}
                  label="Lightweight"
                />
                <FormControlLabel
                  value="Breathable"
                  control={<Radio />}
                  label="Breathable"
                />
                <FormControlLabel
                  value="Grip"
                  control={<Radio />}
                  label="Grip"
                />
                <FormControlLabel
                  value="Hook & Loop"
                  control={<Radio />}
                  label="Hook & Loop"
                />
              </RadioGroup>
            </AccordionDetails>
          </Accordion>
        </div>

        <div className=" cursor-pointer border-b-2">
          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1-content"
              id="panel1-header"
              className="font-bold"
            >
              SURFACE
            </AccordionSummary>
            <AccordionDetails>
              <RadioGroup
                aria-labelledby="demo-radio-buttons-group-label"
                name="radio-buttons-group"
                value={surface}
                onChange={(e) => {
                  setSurface(e.target.value);
                }}
              >
                <FormControlLabel
                  value="Track"
                  control={<Radio />}
                  label="Track"
                />
                <FormControlLabel
                  value="Road"
                  control={<Radio />}
                  label="Road"
                />
                <FormControlLabel
                  value="Treadmill"
                  control={<Radio />}
                  label="Treadmill"
                />
                <FormControlLabel
                  value="Clay Court"
                  control={<Radio />}
                  label="Clay Court"
                />
              </RadioGroup>
            </AccordionDetails>
          </Accordion>
        </div>

        <div className=" cursor-pointer border-b-2 ">
          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1-content"
              id="panel1-header"
              className="font-bold"
            >
              PRODUCT TYPE
            </AccordionSummary>
            <AccordionDetails>
              <RadioGroup
                aria-labelledby="demo-radio-buttons-group-label"
                name="radio-buttons-group"
                value={productType}
                onChange={(e) => {
                  setProductType(e.target.value);
                }}
              >
                <FormControlLabel
                  value="Sneakers"
                  control={<Radio />}
                  label="Sneakers"
                />
                <FormControlLabel
                  value="Football Boots"
                  control={<Radio />}
                  label="Football Boots"
                />
              </RadioGroup>
            </AccordionDetails>
          </Accordion>
        </div>

        <div className=" cursor-pointer border-b-2 ">
          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1-content"
              id="panel1-header"
              className="font-bold"
            >
              GENDER
            </AccordionSummary>
            <AccordionDetails>
              <RadioGroup
                aria-labelledby="demo-radio-buttons-group-label"
                name="radio-buttons-group"
                value={gender}
                onChange={(e) => {
                  setGender(e.target.value);
                }}
              >
                <FormControlLabel
                  value="male"
                  control={<Radio />}
                  label="male"
                />
                <FormControlLabel
                  value="female"
                  control={<Radio />}
                  label="female"
                />
              </RadioGroup>
            </AccordionDetails>
          </Accordion>
        </div>

        <div className=" cursor-pointer border-b-2 ">
          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1-content"
              id="panel1-header"
              className="font-bold"
            >
              SPORT
            </AccordionSummary>
            <AccordionDetails>
              <RadioGroup
                aria-labelledby="demo-radio-buttons-group-label"
                name="radio-buttons-group"
                value={sport}
                onChange={(e) => {
                  setSport(e.target.value);
                }}
              >
                <FormControlLabel
                  value="Lifestyle"
                  control={<Radio />}
                  label="Lifestyle"
                />
                <FormControlLabel
                  value="Football"
                  control={<Radio />}
                  label="Football"
                />
                <FormControlLabel
                  value="Training"
                  control={<Radio />}
                  label="Training"
                />
              </RadioGroup>
            </AccordionDetails>
          </Accordion>
        </div>

        <div className=" cursor-pointer border-b-2 ">
          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1-content"
              id="panel1-header"
              className="font-bold"
            >
              SIZE
            </AccordionSummary>
            <AccordionDetails>
              <div className="flex flex-col item-center ">
                <div className="flex ">
                  <div class=" m-2 cursor-pointer   grid grid-cols-5 grid-flow-row  md:p-2  md:w-[400px] ">
                    <div
                      className="text-center border-2 p-2 "
                      onClick={() => setSize("XS")}
                    >
                      XS
                    </div>
                    <div
                      className="text-center border-2 p-2 "
                      onClick={() => setSize("S")}
                    >
                      S
                    </div>
                    <div
                      className="text-center border-2 p-2 "
                      onClick={() => setSize("M")}
                    >
                      M
                    </div>
                    <div
                      className="text-center border-2 p-2 "
                      onClick={() => setSize("L")}
                    >
                      L
                    </div>
                    <div
                      className="text-center border-2 p-2 "
                      onClick={() => setSize("XL")}
                    >
                      XL
                    </div>
                    <div
                      className="text-center border-2 p-2 "
                      onClick={() => setSize("2XL")}
                    >
                      2XL
                    </div>
                    <div
                      className="text-center border-2 p-2 "
                      onClick={() => setSize("3XL")}
                    >
                      3XL
                    </div>
                  </div>
                </div>
              </div>
            </AccordionDetails>
          </Accordion>
        </div>

        <div className=" cursor-pointer border-b-2 ">
          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1-content"
              id="panel1-header"
              className="font-bold"
            >
              COlOUR
            </AccordionSummary>
            <AccordionDetails>
              <div
                onSubmit={handleSubmit}
                className="flex flex-col item-center "
              >
                <RadioGroup
                  aria-labelledby="demo-radio-buttons-group-label"
                  name="radio-buttons-group"
                  value={checkBoxes}
                  onChange={(e) => {
                    setCheckBoxes(e.target.value);
                  }}
                >
                  <FormControlLabel
                    value="grey"
                    control={<Radio />}
                    label="black"
                  />
                  <FormControlLabel
                    value="blue"
                    control={<Radio />}
                    label="Blue"
                  />
                  <FormControlLabel
                    value="yellow"
                    control={<Radio />}
                    label="Yellow"
                  />
                  <FormControlLabel
                    value="faSkyatlas"
                    control={<Radio />}
                    label="FaSkyatlas"
                  />
                  <FormControlLabel
                    value="deepOrange"
                    control={<Radio />}
                    label="DeepOrange"
                  />
                  <FormControlLabel
                    value="red"
                    control={<Radio />}
                    label="Red"
                  />
                  <FormControlLabel
                    value="green"
                    control={<Radio />}
                    label="Green"
                  />
                </RadioGroup>
              </div>
            </AccordionDetails>
          </Accordion>
        </div>

        <div className=" cursor-pointer border-b-2 ">
          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1-content"
              id="panel1-header"
              className="font-bold"
            >
              PRICE
            </AccordionSummary>
            <AccordionDetails>
              <div className="flex flex-col item-center ">
                <div className="flex ">
                  <Slider
                    getAriaLabel={() => "Minimum distance"}
                    value={value1}
                    onChange={handleChange1}
                    valueLabelDisplay="auto"
                    getAriaValueText={valuetext}
                    disableSwap
                    min={0}
                    max={20000}
                  />
                </div>
              </div>
            </AccordionDetails>
          </Accordion>
        </div>

        <div className="m-8 ">
          <button className=" relative flex justify-between h-[60px] border-2 outline outline-offset-2 outline-2 font-bold   w-full p-4  bg-[#ffffff] mt-4  ">
            APPLY
            <FaArrowRightLong className="mt-2 " />
          </button>
        </div>
      </div>
    </>
  );
};

export default ProductSliderPage;
