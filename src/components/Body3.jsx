import React from "react";

export default function Body3() {
  const items = [
    {
      image:
        "https://www.apple.com/v/home/cd/images/promos/ipad/promo_ipad__fioegapg12qi_small_2x.jpg",
      image_style: "sm:w-full  sm:block hidden sm:h-[700px]",
      image1:
        "https://www.apple.com/in/home/promos/ipad/images/promo_ipad__fioegapg12qi_medium.jpg",
      image1_style: "w-full mt-2 sm:hidden h-[450px] object-cover",

      text_style: "absolute text-center ml-9 mt-8 sm:ml-[190px] sm:mt-18",
      text1: "iPad",
      text1_style: "sm:text-4xl text-3xl font-medium ",
      text2: "Now with the speed of the A16 chip",
      text2_style: "sm:text-xl text-base sm:mt-3",
      text3: "and double the starting storage.",
      text3_style: "sm:text-xl text-base",
      text4: "Available from 12 March",
      text4_style: "sm:text-base text-base text-gray-500 mt-3 mb-3",

      button1: "Learn more",
      button1_style:
        "bg-blue-500 border sm:w-36 w-28  border-blue-500 h-10 sm:h-10 p-2 text-white text-sm sm:text-base rounded-4xl",
      button2: "Pre-order",
      button2_style:
        "hover:bg-blue-500 hover:text-white  border ml-6 border-blue-500 sm:w-36 sm:h-10 w-28 h-10 p-2 text-blue-500 sm:text-base text-sm rounded-4xl",
    },
    {
      image:
        "https://www.apple.com/v/home/cd/images/promos/iphone-family/promo_iphone_family__ofrg9zdy1teq_small.jpg",
      image_style: "sm:w-full sm:block hidden sm:h-[700px] ",
      image1:
        "https://www.apple.com/v/home/cd/images/promos/iphone-family/promo_iphone_family__ofrg9zdy1teq_medium.jpg",
      image1_style: "sm:hidden h-[450px] w-full mt-2 object-cover",
      text_style: "absolute text-center sm:mt-18 mt-7 ml-7 sm:ml-48",
      text1: "iPhone",
      text1_style: "sm:text-5xl text-3xl font-medium",
      text2: "Meet the iPhone 16 family",
      text2_style: "sm:text-xl text-base sm:mt-3 mb-2 sm:mb-3",
      button1: "Learn more",
      button1_style:
        "bg-blue-500 border sm:w-36  border-blue-500 sm:h-10 h-10 w-28 p-2  text-white text-sm sm:text-base rounded-4xl",
      button2: "Shop iPhone",
      button2_style:
        "hover:bg-blue-500 hover:text-white bg-white border ml-6 border-blue-500 sm:w-36 sm:h-10 h-10 w-28 p-2 text-blue-500 sm:text-base text-sm rounded-4xl",
      textt1: "Build for Apple Intelligence",
      textt1_style: "sm:mt-2 mt-2 sm:text-xl text-base",
      textt2: "Coming in English in early April",
      textt2_style: " text-sm text-gray-500  mb-3",
    },
    {
      image:
        " https://www.apple.com/v/home/cd/images/promos/iphone-tradein/promo_iphone_tradein__bugw15ka691e_small.jpg",
      image_style: "sm:w-full sm:block hidden sm:h-[700px]",
      image1:
        "https://www.apple.com/v/home/cd/images/promos/iphone-tradein/promo_iphone_tradein__bugw15ka691e_medium_2x.jpg",
      image1_style: "sm:hidden h-[400px] w-full mt-2 object-cover",

      text_style: "absolute text-center sm:ml-54 mt-10 ml-12 sm:mt-18",
      text1: "Trade In",
      text1_style: "sm:text-4xl text-3xl font-medium",
      svg: (
        <svg
          className="sm:size-7 mt-2 size-5"
          width="20px"
          height="20px"
          viewBox="0 0 22.773 22.773"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g>
            <path d="M15.769,0c0.053,0,0.106,0,0.162,0c0.13,1.606-0.483,2.806-1.228,3.675c-0.731,0.863-1.732,1.7-3.351,1.573 c-0.108-1.583,0.506-2.694,1.25-3.561C13.292,0.879,14.557,0.16,15.769,0z" />
            <path d="M20.67,16.716c0,0.016,0,0.03,0,0.045c-0.455,1.378-1.104,2.559-1.896,3.655c-0.723,0.995-1.609,2.334-3.191,2.334 c-1.367,0-2.275-0.879-3.676-0.903c-1.482-0.024-2.297,0.735-3.652,0.926c-0.155,0-0.31,0-0.462,0 c-0.995-0.144-1.798-0.932-2.383-1.642c-1.725-2.098-3.058-4.808-3.306-8.276c0-0.34,0-0.679,0-1.019 c0.105-2.482,1.311-4.5,2.914-5.478c0.846-0.52,2.009-0.963,3.304-0.765c0.555,0.086,1.122,0.276,1.619,0.464 c0.471,0.181,1.06,0.502,1.618,0.485c0.378-0.011,0.754-0.208,1.135-0.347c1.116-0.403,2.21-0.865,3.652-0.648 c1.733,0.262,2.963,1.032,3.723,2.22c-1.466,0.933-2.625,2.339-2.427,4.74C17.818,14.688,19.086,15.964,20.67,16.716z" />
          </g>
        </svg>
      ),

      text2: "Upgrade and save. It's that easy.",
      text2_style: "sm:text-xl text-base mt-2 mb-7",
      text3: "",
      text3_style: "",
      button1: "Get your estimate",
      button1_style:
        "bg-blue-500 border sm:w-52 sm:h-10 h-10 w-40 p-2 text-white sm:text-base text-base rounded-4xl",
      button2: "",
      button2_style: "",
      text4: "",
      text4_style: "",
    },
    {
      image:
        "https://www.apple.com/v/home/cd/images/promos/apple-watch-series-10/promo_apple_watch_series_10_avail__b9etp10v9tn6_large_2x.jpg",
      image_style: "w-full sm:block hidden h-[700px]",
      image1:
        "https://www.apple.com/v/home/cd/images/promos/apple-watch-series-10/promo_apple_watch_series_10_avail__b9etp10v9tn6_medium.jpg",
      image1_style: "sm:hidden h-[450px] w-full mt-2 object-cover",

      text_style: "absolute text-center mt-7 ml-9 sm:mt-18 sm:ml-[200px]",
      svg: (
        <svg
          className="sm:size-7 size-5 mt-2"
          width="20px"
          height="20px"
          viewBox="0 0 22.773 22.773"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g>
            <path d="M15.769,0c0.053,0,0.106,0,0.162,0c0.13,1.606-0.483,2.806-1.228,3.675c-0.731,0.863-1.732,1.7-3.351,1.573 c-0.108-1.583,0.506-2.694,1.25-3.561C13.292,0.879,14.557,0.16,15.769,0z" />
            <path d="M20.67,16.716c0,0.016,0,0.03,0,0.045c-0.455,1.378-1.104,2.559-1.896,3.655c-0.723,0.995-1.609,2.334-3.191,2.334 c-1.367,0-2.275-0.879-3.676-0.903c-1.482-0.024-2.297,0.735-3.652,0.926c-0.155,0-0.31,0-0.462,0 c-0.995-0.144-1.798-0.932-2.383-1.642c-1.725-2.098-3.058-4.808-3.306-8.276c0-0.34,0-0.679,0-1.019 c0.105-2.482,1.311-4.5,2.914-5.478c0.846-0.52,2.009-0.963,3.304-0.765c0.555,0.086,1.122,0.276,1.619,0.464 c0.471,0.181,1.06,0.502,1.618,0.485c0.378-0.011,0.754-0.208,1.135-0.347c1.116-0.403,2.21-0.865,3.652-0.648 c1.733,0.262,2.963,1.032,3.723,2.22c-1.466,0.933-2.625,2.339-2.427,4.74C17.818,14.688,19.086,15.964,20.67,16.716z" />
          </g>
        </svg>
      ),
      text1: "WATCH",
      text1_style: "sm:text-4xl text-3xl font-bold",
      text2: "SERIES 10",
      text2_style: "sm:text-xl text-base sm:mt-2",
      text3: "Thinstant classic",
      text3_style: "sm:text-xl text-base mb-2",
      button1: "Learn more",
      button1_style:
        "bg-blue-500 border sm:w-36 sm:h-12 w-28 h-10 border-blue-500 p-2 text-white text-base sm:text-xl rounded-3xl",
      button2: "Buy",
      button2_style:
        "hover:bg-blue-500 hover:text-white bg-white border ml-6 border-blue-500 sm:w-30 sm:h-12 w-28 h-10 p-2 text-blue-500 sm:text-xl text-base rounded-3xl",
    },
    {
      image:
        " https://www.apple.com/v/home/cd/images/promos/airpods-4/promo_airpods_4_avail__bl22kvpg6ez6_medium.jpg",
      image_style: "sm:w-full hidden sm:block sm:h-[700px]",
      image1:
        "https://www.apple.com/v/home/cd/images/promos/airpods-4/promo_airpods_4_avail__bl22kvpg6ez6_medium.jpg",
      image1_style: "sm:hidden h-[450px] w-full mt-2 object-cover",

      text_style: "absolute text-center sm:ml-[180px] sm:mt-[500px] mt-66",
      text1: "AirPods 4",
      text1_style: "sm:text-4xl text-3xl font-bold text-white  ",
      text2: "Iconic. Now supersonic.",
      text2_style: "sm:text-xl text-base text-white sm:mt-2",
      text3: "Available with Active Noise Cancellation.",
      text3_style: " text-white text-xl  sm:text-xl sm:mb-6 mb-5",

      button1: "Learn more",
      button1_style:
        "bg-blue-500 border border-blue-500 sm:w-36 sm:h-10 h-10 w-28 p-2 text-white text-base sm:text-base rounded-4xl",
      button2: "Buy",
      button2_style:
        "hover:bg-blue-500 hover:text-white  border ml-6 border-blue-500 sm:w-32 sm:h-10 w-24 h-10 p-2 text-blue-500 sm:text-base text-base rounded-4xl",
    },
    {
      image:
        "https://www.apple.com/v/home/cd/images/promos/ipad-pro/promo_ipadpro_avail__s271j89g8kii_large.jpg",
      image_style: "sm:w-full sm:block hidden sm:h-[700px]",
      image1:
        "https://www.apple.com/in/home/promos/ipad-pro/images/promo_ipadpro_avail__s271j89g8kii_medium.jpg",
      image1_style: "sm:hidden h-[450px] w-full mt-2",

      text_style: "absolute text-center mt-9 ml-6 sm:mt-18 sm:ml-42",
      text1: "iPad Pro",
      text1_style: "sm:text-5xl text-3xl font-bold text-white",
      text2: "Unbelievably thin. Incredible powerful",
      text2_style: "sm:text-xl text-white m-2 sm:mt-4 sm:mb-4",
      textb1: "Build for Apple Indelligence.",
      textb1_style: "sm:text-xl text-white mt-62 text-base sm:mt-[400px]",
      textb2: "Coming in English in early April",
      textb2_style: "sm:text-base text-sm text-gray-500 ",
      button1: "Learn more",
      button1_style:
        "bg-blue-500 border sm:w-36 border-blue-500 h-10 w-28 sm:h-10 p-2 text-white sm:text-base text-base rounded-4xl",
      button2: "Pre-order",
      button2_style:
        "hover:bg-blue-500 hover:text-white  border ml-6 border-blue-500 sm:w-36 sm:h-10 h-10 w-28 p-2 text-blue-500 sm:text-base text-base rounded-4xl",
    },
  ];
  return (
    <>
      <div className="grid sm:grid-cols-2 grid-cols-1 sm:gap-2 sm:p-3">
        {items.map((item, index) => (
          <>
            <a href="">
              <div className={item.text_style}>
                <div className="flex justify-center">
                  {item.svg}
                  <h3 className={item.text1_style}>{item.text1}</h3>
                </div>
                <p className={item.text2_style}> {item.text2}</p>
                <p className={item.text3_style}>{item.text3}</p>
                <p className={item.text4_style}>{item.text4}</p>
                {/* <p className={item.text5_style}>{item.text5}</p> */}
                <button className={item.button1_style}>{item.button1}</button>
                <button className={item.button2_style}> {item.button2}</button>
                <p className={item.textb1_style}>{item.textb1}</p>
                <p className={item.textb2_style}>{item.textb2}</p>
                <p className={item.textt1_style}>{item.textt1}</p>
                <p className={item.textt2_style}>{item.textt2}</p>
              </div>
              <img src={item.image} className={item.image_style} alt="" />

              <img src={item.image1} className={item.image1_style} alt="" />
            </a>
          </>
        ))}
      </div>{" "}
    </>
  );
}
