import React from "react";
import { FaArrowRightLong } from "react-icons/fa6";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useNavigate } from "react-router-dom";


const Homeheader = () => {
 
  const navigate = useNavigate();

  const handleClick = () => {
    
    navigate('/product-page');
  };

  const handleClick1 = () => {
    
    navigate('/product-page');
  };

  const handleClick2 = () => {
    
    navigate('/product-page');
  };

  const imageData1 = [
    {
      id: 1,
      src: "/shoe1.jpg",
      txt: "NMD_R1 SHOES",
      mrp: "13999.00 $",
    },
    {
      id: 2,
      src: "/shoe2.jpg",
      txt: "NMD_R1 SHOES",
      mrp: "13999.00 $",
    },
    {
      id: 3,
      src: "/shoe3.jpg",
      txt: "NMD_R1 SHOES",
      mrp: "13999.00 $",
    },
    {
      id: 4,
      src: "/shoe1.jpg",
      txt: "NMD_R1 SHOES",
      mrp: "13999.00 $",
    },
    {
      id: 5,
      src: "/shoe2.jpg",
      txt: "NMD_R1 SHOES",
      mrp: "13999.00 $",
    },
    {
      id: 6,
      src: "/shoe3.jpg",
      txt: "NMD_R1 SHOES",
      mrp: "13999.00 $",
    },

  ]

  
    

    const imageData2 = [
      {
        id: 1,
        src: "/hotpic1.jpg",
        txt: "AE 1 New Wave",
        desc: "Anthony Edward's declaration to always lead, never follow that",
      },
      {
        id: 2,
        src: "/hotpic2.jpg",
        txt: "AE 1 New Wave",
        desc: "Anthony Edward's declaration to always lead, never follow that",
      },
      {
        id: 3,
        src: "/hotpic3.jpg",
        txt: "AE 1 New Wave",
        desc: "Anthony Edward's declaration to always lead, never follow that",
      },
      {
        id: 4,
        src: "/shoe1.jpg",
        txt: "AE 1 New Wave",
        desc: "Anthony Edward's declaration to always lead, never follow that",
      },
      {
        id: 5,
        src: "/shoe2.jpg",
        txt: "AE 1 New Wave",
        desc: "Anthony Edward's declaration to always lead, never follow that",
      },
      {
        id: 6,
        src: "/shoe3.jpg",
        txt: "AE 1 New Wave",
        desc: "Anthony Edward's declaration to always lead, never follow that",
      },

    ];


  

  var settings = {
    dots: true,
    infinite: true,
    speed: 400,
    slidesToShow: 4,
    slidesToScroll: 6,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1.5,
          slidesToScroll: 1
        }
      }
      
      
    ]
  };
  return (
    <>
      <div
        className="bg-cover bg-center h-screen relative flex items-center md:w-full "
        style={{ backgroundImage: 'url("./homepage.jpg")' , zIndex:'99'}}
      >
        <div className=" ml-4 mt-[150px]   md:absolute   md:top-0 md:h-full md:flex md:flex-col md:justify-center  md:left-10 md:gap-x-4 md:w-80  md:ml-20      ">
          <h2 className="font-extrabold text-4xl text-[#fff] ">
            ISN'T ICONIC THE WAY TO GO?
          </h2>

          <p className="text-xl text-[#fff] mt-5">Samba: the legacy </p>
          <div className="  flex flex-row gap-4 cursor-pointer bg-primary   mt-5 w-40 p-3 border-b border-r border-white   ">
            <div className="  flex flex-row justify-center gap-x-2  ">
              <p onClick={handleClick1} className="font-extrabold  text-[#ffff] ">SHOP NOW</p>
              <FaArrowRightLong className="mt-1   text-[#ffff]" />
            </div>
          </div>
        </div>
      </div>


      <div className="grid grid-flow-col relative ">
        <img src="./sneaker1.jpg" className="h-[300px] sm:h-auto "></img>
        <img src="./sneaker2.jpg"  className="h-[300px] sm:h-auto"></img>
        <img src="./sneaker3.jpg"  className="h-[300px] sm:h-auto"></img>

        <div className="absolute bottom-8 left-8 w-[300px]    ">
          <h2 className="font-extrabold sm:text-4xl text-xl text-[#fff] ">2000'S RUNNING</h2>

          <p className="sm:text-xl text-base text-[#fff]  mt-5">
            Rediscover the millennium's most iconic running shoes, today.
          </p>
          <div className="flex flex-row gap-4 cursor-pointer bg-primary shadow-lg  mt-5 w-40 p-3 border-b border-r border-white      ">
            <p onClick={handleClick2}  className="font-extrabold text-[#fff] ">SHOP NOW</p>
            <FaArrowRightLong className="mt-1  text-[#fff] " />
          </div>
        </div>
      </div>

      <div className="hidden md:flex md:justify-center ">
        <div className="w-[80%]  gap-y-12  ">
          <h1 className="sm:text-xl font-bold mt-12  text-3xl  gap-y-12     ">
            Popular right now
          </h1>
          <div className=" sm:flex flex-col  grid grid-cols-3  grid-flow   cursor-pointer text-4xl mt-12  gap-y-16 font-bold">
            <div className="flex flex-col   ">
              <p className="sm:text-xl">Samba</p>
              <div className="sm:w-[600px] w-96  h-0 mt-4  bg-secoundry border outline hover:outline-offset-2   "></div>
            </div>
            <div className="flex flex-col   ">
              <p className="sm:text-xl">running shoes men</p>
              <div className="sm:w-[600px] w-96  h-0 mt-4   bg-secoundry border outline hover:outline-offset-2  "></div>
            </div>

            <div className="flex flex-col  ">
              <p className="sm:text-xl">nmd</p>
              <div className="sm:w-[600px] w-96  h-0 mt-4   bg-secoundry border outline hover:outline-offset-2  "></div>
            </div>

            <div className="flex flex-col  ">
              <p className="sm:text-xl">backpack</p>
              <div className="sm:w-[600px] w-96  h-0 mt-4   bg-secoundry border outline hover:outline-offset-2  "></div>
            </div>

            <div className="flex flex-col  ">
              <p className="sm:text-xl">men sandals</p>
              <div className="sm:w-[600px] w-96  h-0 mt-4   bg-secoundry border outline hover:outline-offset-2  "></div>
            </div>

            <div className="flex flex-col  ">
              <p className="sm:text-xl">bag</p>
              <div className="sm:w-[600px] w-96  h-0 mt-4   bg-secoundry border outline hover:outline-offset-2  "></div>
            </div>
          </div>
        </div>
      </div>

      <div className="overflow-x-hidden ">
        <div className="flex font-bold mt-20 gap-x-4 pl-16 ">
          <button className="border-solid border-2 border-indigo-600 p-3">
            New arrivals
          </button>
          <button className="border-solid border-2 border-indigo-600 p-3">
            Best of adidas
          </button>
          <button onClick={handleClick} className="border-solid border-2 border-indigo-600 p-3">
            All products 
          </button>
        </div>

       <div className="sm:pl-12 overflow-y-hidden overflow-x-hidden     ">
          <Slider {...settings}>
            {imageData1.map((item) => (
              <div key={item.id} className=" mt-10 md:pl-16">
                <div className="sm:gap-x-0  ">
                  <img
                    src={item.src}
                    alt=""
                    className="h-[280px] w-[280px] "
                  />
                  <p>{item.txt}</p>
                  <p>{item.mrp}</p>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>

      <div>
        
      <div className="sm:pl-12 overflow-x-hidden overflow-y-hidden      ">
          <Slider {...settings}>
            {imageData2.map((item) => (
              <div key={item.id} className=" mt-10 md:pl-16">
                <div className="sm:gap-x-0  ">
                  <img
                    src={item.src}
                    alt="kumar"
                    className="h-[280px] w-[280px] "
                  />
                  <p>{item.txt}</p>
                  <p>{item.desc}</p>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>

         

      <div className="flex flex-col w-full ml-0 mr-0 md:flex md:justify-center   md:overflow-x-hidden  md:mt-8  md:p-10 bg-[#FFFFFF] ">
        <div className="mt-6 pl-6 ">
          <h1 className="text-3xl font-bold mt-6 ">
            STORIES, STYLES AND SPORTSWEAR AT ADIDAS, SINCE 1949
          </h1>
          <p className="mt-6 mb-8 ">
            Sport keeps us fit. Keeps you mindful. Brings us together. Through
            sport we have the power to change lives. Whether it is through
            stories of inspiring athletes. Helping you to get up and get moving.
            Sportswear featuring the latest technologies, to up your
            performance. Beat your PB. adidas offers a home to the runner, the
            basketball player, the soccer kid, the fitness enthusiast. The
            weekend hiker that loves to escape the city. The yoga teacher that
            spreads the moves. The 3-Stripes are seen in the music scene. On
            stage, at festivals. Our sports clothing keeps you focused before
            that whistle blows. During the race. And at the finish lines. We're
            here to support creators. Improve their game. Their lives. And
            change the world.
          </p>

          <p>
            adidas is about more than sportswear and workout clothes. We partner
            with the best in the industry to co-create. This way we offer our
            fans the sports apparel and style that match their athletic needs,
            while keeping sustainability in mind. We're here to support
            creators. Improve their game. Create change. And we think about the
            impact we have on our world.
          </p>
        </div>

        <div className="mt-6 pl-6    ">
          <h1 className="text-3xl font-bold mt-6  ">
            WORKOUT CLOTHES, FOR ANY SPORT
          </h1>
          <p className="mt-8 mb-8     ">
            adidas designs for and with athletes of all kinds. Creators, who
            love to change the game. Challenge conventions. Break the rules and
            define new ones. Then break them again. We supply teams and
            individuals with athletic clothing pre-match. To stay focussed. We
            design sports apparel that get you to the finish line. To win the
            match. We support women, with bras and tights made for purpose. From
            low to high support. Maximum comfort. We design, innovate and
            itterate. Testing new technologies in action. On the pitch, the
            tracks, the court, the pool. Retro workout clothes inspire new
            streetwear essentials. Like NMD, Ozweego and our Firebird
            tracksuits. Classic sports models are brought back to life. Like
            Stan Smith. And Superstar. Now seen on the streets and the stages.
          </p>
          <p className="pb-8 ">
            Through our collections we blur the borders between high fashion and
            high performance. Like our adidas by Stella McCartney athletic
            clothing collection - designed to look the part inside and outside
            of the gym. Or some of our adidas Originals lifestyle pieces, that
            can be worn as sportswear too. Our lives are constantly changing.
            Becoming more and more versatile. And adidas designs with that in
            mind.
          </p>
        </div>
      </div>




      

      


      
    </>
  );
};

export default Homeheader;
