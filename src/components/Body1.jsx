import React from "react";

export default function Body1() {
  //   const items = [
  //     {
  //         text:"MacBook Air"
  //       image:
  //         "https://www.apple.com/v/macbook-air/t/images/overview/hero/hero_static__c9sislzzicq6_small_2x.png",
  //       style: "w-[600px] h-[400px] mt-82",
  //     },
  //   ];

  return (
    <div className="bg-[url('Lap.jpg')] sm:bg-[url('Laplg.jpg')] bg-no-repeat bg-center bg-cover flex justify-center pt-20 sm:-mt-16 sm:h-[1000px] h-[500px]  w-full sm:w-full">
      <a href="#" className=" text-center">
        <div className=" sm:mt-4 -mt-11">
          <h1 className="sm:text-7xl text-3xl font-bold">MacBook Air</h1>
          <h3 className=" text-xl sm:text-4xl mt-2 sm:mt-4 ">
            Sky blue colour
          </h3>
          <p className="text-xl   sm:text-4xl -mt-1">
            Sky-high performance with M4
          </p>
          <h5 className="sm:font-semibold sm:m-4 m-2 text-gray-400 sm:text-2xl text-base">
            Available form 12 March
          </h5>
          <div className="flex justify-center">
            <button className="bg-blue-500 border sm:w-42 sm:h-14 h-10 w-26 sm:p-2 p-1 text-white sm:text-2xl text-sm rounded-4xl">
              Learn more
            </button>
            <button className="hover:bg-blue-500 hover:text-white  border ml-6 border-blue-500 sm:w-42 sm:h-14 h-10 w-26 sm:p-2 p-1 text-blue-500 sm:text-2xl text-sm rounded-4xl">
              Pre-order
            </button>
          </div>

          <div className="sm:mt-[460px] mt-56">
            <h4 className="sm:text-3xl text-base ">
              Build for Apple Intelligence
            </h4>
            <p className="sm:text-xl text-sm sm:mt-2 text-gray-400">
              Coming in English in early April
            </p>
          </div>
        </div>
      </a>
    </div>
  );
}
