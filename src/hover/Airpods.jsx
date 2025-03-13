import React from "react";

export default function Airpods() {
  return (
    <div className="flex justify-center sm:-mt-16 sm:fixed z-20  gap-32 absolute bg-white w-full h-[470px]   text-gray-800 ">
      <ul className="font-semibold   -ml-[405px]">
        <h5 className="text-sm text-gray-400 mb-3">Explore AirPods</h5>
        <li className="text-2xl mb-3">
          <a href="">Explore All AirPods</a>
        </li>
        <li className="text-2xl mb-3">
          <a href="">AirPods 4</a>
        </li>
        <li className="text-2xl mb-3">
          <a href="">AirPods Pro 2</a>
        </li>
        <li className="text-2xl mb-3">
          <a href="">AirPods Max</a>
        </li>
        <li className="text-base text-gray-400 font-normal hover:text-black mb-3 ">
          <a href="">Compare AirPods</a>
        </li>{" "}
      </ul>

      <ul className="mt-6 font-medium">
        <h5 className="text-sm text-gray-500 mb-3">Shop AirPods</h5>
        <li className="text-base mb-2">
          <a href="">Shop AirPods</a>
        </li>
        <li className="text-base mb-2">
          <a href="">AirPods Accessories</a>
        </li>
      </ul>
      <ul className="mt-6 font-medium">
        <h5 className="text-sm text-gray-500 mb-3">More from AirPods</h5>
        <li className="text-base mb-2">
          <a href="">AirPods Support</a>
        </li>
        <li className="text-base mb-2">
          <a href="">AppleCare+ for Headphone</a>
        </li>
        <li className="text-base mb-2">
          <a href="">Apple Music</a>
        </li>
      </ul>
    </div>
  );
}
