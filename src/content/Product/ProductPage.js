import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useDispatch, useSelector } from "../../redux/store/store";
import { postProduct } from "../../redux/slices/product";
import {
  useLocation,
  useNavigate,
  useParams,
  useSearchParams,
} from "react-router-dom";
import { TbMenuOrder } from "react-icons/tb";
import Drawer from "@mui/material/Drawer";
import ProductSliderPage from "./ProductSliderPage";
import { ClassNames } from "@emotion/react";
import { Pagination } from "@mui/material";

const ProductPage = () => {
  const handleChangePage = (event, value) => {
    setPage(value);
  };

  const [drawer, setDrawer] = useState(false);
  const [searchParams, setSearchParams] = useSearchParams();
  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(9);
  const location = useLocation();

  const dispatch = useDispatch();
  const navigate = useNavigate();
  console.log("navigate", navigate, location);
  const { product } = useSelector((state) => state.productRoutes);
  const [value1, setValue1] = React.useState([0, 20000]);
  const [gender, setGender] = React.useState();
  const [productType, setProductType] = React.useState();
  const [surface, setSurface] = React.useState();
  const [feature, setFeature] = React.useState();
  const [sport, setSport] = React.useState();
  const [size, setSize] = React.useState();
  const [sortBy, setSortBy] = React.useState();

  const [filter, setFilter] = React.useState({});
  const [checkBoxes, setCheckBoxes] = useState("");

  console.log("checkboxe", checkBoxes);
  console.log("filter", filter, value1);

  useEffect(() => {
    let val = {};
    if (checkBoxes) {
      val["colour"] = { $regex: checkBoxes, $options: "i" };
    }
    if (gender) {
      val["gender"] = { $regex: gender, $options: "i" };
    }
    if ((value1 && value1[0] !== 0) || (value1 && value1[1] !== 20000)) {
      val["price.mrp"] = { $gte: value1[0], $lte: value1[1] };
    }
    if (productType) {
      val["productType"] = { $regex: productType, $options: "i" };
    }
    if (surface) {
      val["surface"] = { $regex: surface, $options: "i" };
    }
    if (feature) {
      val["feature"] = { $regex: feature, $options: "i" };
    }
    if (sport) {
      val["sport"] = { $regex: sport, $options: "i" };
    }
    if (size) {
      val["size"] = { $regex: size, $options: "i" };
    }

    if (sortBy) {
      val["sortBy"] = { $regex: sortBy, $options: "i" };
    }

    // if (searchParams) {
    //   console.log(searchParams);
    //   setFilter({
    //     ...filter,
    //     ["featured"]: { $regex: searchParams.length>0?searchParams:"", $options: "i" },
    //   });
    // }
    setFilter({
      ...filter,
      ...val,
    });
  }, [
    value1,
    checkBoxes,
    gender,
    productType,
    surface,
    feature,
    sport,
    size,
    sortBy,
  ]);

  useEffect(() => {
    if (searchParams) {
      let val = {};
      searchParams.getAll("key").length > 0 &&
        searchParams.getAll("key").map((key, index) => {
          if (
            searchParams.getAll("value").length > 0 &&
            searchParams.getAll("value")[index]
          )
            val[key] = {
              $regex:
                searchParams.getAll("value").length > 0 &&
                searchParams.getAll("value")[index],
              $options: "i",
            };
        });
      setFilter({
        ...val,
      });
      setValue1([0, 20000]);
      setCheckBoxes("");
      setGender(null);
      setProductType(null);
      setSurface(null);
      setFeature(null);
      setSport(null);
      setSize(null);
      setSortBy(null);
    }
  }, [searchParams]);

  useEffect(() => {
    dispatch(postProduct(page, limit, filter));
  }, [filter, page]);

  var settings = {
    dots: false,
    infinite: true,
    speed: 400,
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="ml-40 mr-40  ">
      <div className="flex justify-between mt-40    ">
        <p className="font-bold italic ml-4 ">OUTDOOR SPORTSWEAR</p>
        <div className="border-2 p-2 flex gap-x-2   ">
          <button onClick={() => setDrawer(true)} className="">
            Filter and sort
          </button>
          {drawer && (
            <Drawer
              anchor="right"
              open={drawer}
              onClose={() => setDrawer(false)}
            >
              <ProductSliderPage
                value1={value1}
                setValue1={setValue1}
                setDrawer={setDrawer}
                checkBoxes={checkBoxes}
                setCheckBoxes={setCheckBoxes}
                gender={gender}
                setGender={setGender}
                productType={productType}
                setProductType={setProductType}
                surface={surface}
                setSurface={setSurface}
                feature={feature}
                setFeature={setFeature}
                sport={sport}
                setSport={setSport}
                size={size}
                setSize={setSize}
                sortBy={sortBy}
                setSortBy={setSortBy}
              />
            </Drawer>
          )}

          <TbMenuOrder className="mt-2 " />
        </div>
      </div>

      <div className=" cursor-pointer grid md:grid-cols-4 sm:grid-cols-3 grid-cols-2 gap-2 px-2 sm:px-4">
        {product &&
          product.data &&
          product.data.data &&
          product.data.data.length > 0 &&
          product.data.data.map((item, id) => (
            <div
              onClick={() => navigate(`/product-detail/${item.id}`)}
              key={id}
            >
              <img
                src={item?.image}
                alt=""
                className="mt-4  gap-2   md:h-[280px] md:w-[280px]"
              />
              <div className=" p-2">
                <p>{item?.title?.shortTitle}</p>
                <p>{item.title?.longTitle}</p>
                <p>{item?.price?.mrp}</p>
              </div>
            </div>
          ))}
      </div>

      <div className="w-full  my-6  flex justify-center    ">
        <Pagination
          className=""
          count={
            (product &&
              product.data &&
              product.data.paginator &&
              product.data.paginator.itemCount) / limit
          }
          page={page}
          onChange={handleChangePage}
        />
      </div>
    </div>
  );
};

export default ProductPage;
