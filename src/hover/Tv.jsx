import React from "react";

export default function Tv() {
  return (
    <div className="flex justify-center z-20  gap-32 absolute bg-white w-full sm:-mt-10 sm:fixed h-[470px]  text-gray-800 ">
      <ul className="font-semibold mt-6  -ml-[205px]">
        <h5 className="text-sm text-gray-400 mb-3">Explore TV & Home</h5>
        <li className="text-2xl mb-3">
          <a href="">Explore TV & Home</a>
        </li>
        <li className="text-2xl mb-3">
          <a href="">Apple TV 4K</a>
        </li>
        <li className="text-2xl mb-3">
          <a href="">HomePod</a>
        </li>
        <li className="text-2xl">
          <a href="">HomePod mini</a>
        </li>
      </ul>

      <ul className="mt-6 font-medium">
        <h5 className="text-sm text-gray-500 mb-3">Shop TV & Home</h5>
        <li className="text-base mb-2">
          <a href="">Shop Apple TV 4K</a>
        </li>
        <li className="text-base mb-2">
          <a href="">Shop HomePod</a>
        </li>{" "}
        <li className="text-base mb-2">
          <a href="">Shop HomePod mini</a>
        </li>{" "}
        <li className="text-base mb-2">
          <a href="">Shop Siri Remote</a>
        </li>{" "}
        <li className="text-base ">
          <a href="">TV & Home Accessories</a>
        </li>
      </ul>
      <ul className="mt-6 font-medium">
        <h5 className="text-sm text-gray-500 mb-3">More from TV & Home</h5>
        <li className="text-base mb-2">
          <a href="">Apple TV Support</a>
        </li>{" "}
        <li className="text-base mb-2">
          <a href="">HomePod Support</a>
        </li>
        <li className="text-base mb-2">
          <a href="">AppleCare+</a>
        </li>
        <li className="text-base mb-2">
          <a href="">Apple TV app</a>
        </li>{" "}
        <li className="text-base mb-2">
          <a href="">Apple TV+</a>
        </li>{" "}
        <li className="text-base mb-2">
          <a href="">Home app</a>
        </li>{" "}
        <li className="text-base mb-2">
          <a href="">Apple Music</a>
        </li>{" "}
        <li className="text-base mb-2">
          <a href="">Siri</a>
        </li>{" "}
        <li className="text-base mb-2">
          <a href="">AirPlay</a>
        </li>{" "}
      </ul>
    </div>
  );
}
