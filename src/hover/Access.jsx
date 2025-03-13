import React from "react";

export default function Access() {
  return (
    <div className=" left-0 sm:-mt-16  sm:fixed  absolute w-full h-[500px] bg-white z-50">
      <div className="flex justify-center gap-42   text-gray-800">
        <ul className="font-semibold mt-9 -ml-[704px]">
          <h5 className="text-sm text-gray-400 mb-3">Shop Accessories</h5>
          <li className="text-2xl mb-3">
            <a href="">Shop All Accessories</a>
          </li>
          <li className="text-2xl mb-3">
            <a href="">Mac</a>
          </li>
          <li className="text-2xl mb-3">
            <a href="">iPad</a>
          </li>
          <li className="text-2xl mb-3">
            <a href="">iPhone</a>
          </li>
          <li className="text-2xl mb-6">
            <a href="">Apple Watch</a>
          </li>
          <li className="text-2xl mb-6">
            <a href="">AirPods</a>
          </li>
          <li className="text-2xl">
            <a href="">TV & Home</a>
          </li>
        </ul>

        <ul className="mt-9 font-medium">
          <h5 className="text-sm text-gray-500 mb-3">Explore Accessories</h5>
          <li className="text-base mb-2">
            <a href="">Made by Apple</a>
          </li>
          <li className="text-base mb-2">
            <a href="">Beats by Dr. Dre</a>
          </li>
          <li className="text-base mb-2">
            <a href="">AirTag</a>
          </li>
        </ul>
      </div>
    </div>
  );
}
