import React from "react";

export default function Body2() {
  const items = [
    {
      // image:
      //   "https://www.apple.com/v/home/cd/images/heroes/ipad-air/hero_ipad_air_preorder__ftn4a0m2i0uq_medium_2x.jpg",
      // image_style: "w-full sm:block hidden h-[500px] sm:h-[1100px] pb-52",
      // image_mobile:
      //   "https://www.apple.com/v/home/cd/images/heroes/ipad-air/hero_ipad_air_preorder__ftn4a0m2i0uq_small_2x.jpg",
      // image_stylep: "sm:hidden sm:-ml-48 -ml-32  w-full",
      style:
        "sm:h-[800px] h-[500px]  w-full sm:w-full    sm:mt-3 sm:bg-[url('/tab.jpg')] bg-[url('/tabp.jpg')] bg-no-repeat bg-center bg-cover   ",
      text_style: "absolute text-center sm:ml-[510px] mt-4 sm:mt-18",
      text1: "iPad air",
      text1_style: "sm:text-5xl text-3xl font-bold",
      text2: "Now supercharged by the M3 chip.",
      text2_style: "sm:text-3xl text-xl ml-2 sm:mt-4",
      text3: "",
      text3_style: "",
      text4: "Available from 12 March",
      text4_style:
        "font-semibold sm:m-4 text-gray-400 text-base m-1 sm:text-xl",
      button1: "Learn More",
      button1_style:
        "bg-blue-500 border sm:w-36 sm:h-10 h-10 w-26 border-blue-500 p-2 text-white sm:text-base text-base rounded-4xl",
      button2: "Pre-order",
      button2_style:
        "hover:bg-blue-500 hover:text-white  border ml-6 border-blue-500 sm:w-36 sm:h-10 h-10 w-28 p-2 text-blue-500 sm:text-base text-base rounded-4xl",
      text5: "Build for Apple Intelligence",
      text5_style: "sm:text-3xl text-base sm:mt-4 ",
      text6: " Coming in English in early April",
      text6_style: "text-sm sm:text-xl sm:mt-2 text-gray-400",
      bottom_t_style: "sm:mt-[400px] mt-66 ml-7",
    },
    {
      // image:
      //   "https://www.apple.com/v/home/cd/images/heroes/mac-studio/hero_macstudio_announce__ceq1ppfwmdjm_mediumtall.jpg",
      // image_style: "w-full  sm:block hidden sm:h-[1100px]  h-[500px] pb-52",
      // image_mobile:
      //   "https://www.apple.com/v/home/cd/images/heroes/mac-studio/hero_macstudio_announce__ceq1ppfwmdjm_medium_2x.jpg",
      // image_stylep: "sm:hidden -ml-48  w-full",
      style:
        "bg-[url('/box.jpg')] bg-no-repeat bg-center bg-cover sm:bg-[url('/boxp.jpg')]  sm:h-[800px] sm:w-full sm:mt-3 mt-3 h-[500px] w-full ",
      text_style: "absolute ml-10 text-center mt-4 sm:ml-[560px] sm:mt-18",
      text1: "Mac Studio",
      text1_style: "sm:text-5xl text-3xl font-bold",
      text2: "M4 Max and M3 Ultra.",
      text2_style: "text-xl sm:text-3xl sm:mt-4",
      text3: "Choose your superpower.",
      text3_style: "text-xl sm:text-3xl sm:mt-4",
      text4: "Available from 12 March",
      text4_style:
        "sm:font-semibold sm:m-4 m-1 mb-5 text-gray-400 text-base sm:text-xl",
      button1: "Learn More",
      button1_style:
        "bg-blue-500 border sm:w-36 sm:h-10 h-10 w-26  border-blue-500 p-2 text-white text-base sm:text-base rounded-4xl",
      button2: "Pre-order",
      button2_style:
        "hover:bg-blue-500 hover:text-white  border ml-6 border-blue-500 h-10 w-26 sm:w-36 sm:h-10 p-2 text-blue-500 sm:text-base text-base rounded-4xl",
      text5: "Build for Apple Intelligence",
      text5_style: "sm:text-2xl text-base sm:mt-4 mt-62",
      text6: " Coming in English in early April",
      text6_style: "sm:text-xl text-sm  sm:mt-2 text-gray-400",
      bottom_t_style: "sm:mt-[360px] mt-34",
    },
  ];

  return (
    <div>
      {items.map((item, index) => (
        <div key={index} className={item.style}>
          <a href="">
            <div className={item.text_style}>
              <h2 className={item.text1_style}>{item.text1}</h2>
              <p className={item.text2_style}>{item.text2}</p>
              <p className={item.text3_style}>{item.text3}</p>
              <p className={item.text4_style}>{item.text4}</p>
              <button className={item.button1_style}>{item.button1}</button>
              <button className={item.button2_style}>{item.button2}</button>
              <div className={item.bottom_t_style}>
                <h2 className={item.text5_style}>{item.text5}</h2>
                <p className={item.text6_style}>{item.text6}</p>
              </div>
            </div>
            {/* <img src={item.image} alt="Product" className={item.image_style} />
            <img src={item.image_mobile} alt="" className={item.image_stylep} /> */}
          </a>
        </div>
      ))}
    </div>
  );
}
