import React from "react";

export default function Storeopen() {
  return (
    <div className="flex justify-center z-20  gap-32 absolute bg-white w-full sm:fixed sm:-mt-16 h-[400px]  text-gray-800 ">
      <ul className="font-semibold mt-6 -ml-[556px]">
        <h5 className="text-sm text-gray-400 mb-3">Shop</h5>
        <li className="text-2xl mb-1">
          <a href="">Shop the Latest</a>
        </li>
        <li className="text-2xl mb-1">
          <a href="">Mac</a>
        </li>
        <li className="text-2xl mb-1">
          <a href="">iPad</a>
        </li>
        <li className="text-2xl mb-1">
          <a href="">iPhone</a>
        </li>
        <li className="text-2xl mb-1">
          <a href="">Apple Watch</a>
        </li>
        <li className="text-2xl">
          <a href="">Accessories</a>
        </li>
      </ul>

      <ul className="mt-6 font-medium">
        <h5 className="text-sm text-gray-500 mb-3">Quick Link</h5>
        <li className="text-base mb-1">
          <a href="">Find a Store</a>
        </li>
        <li className="text-base mb-1">
          <a href="">Order Status</a>
        </li>
        <li className="text-base mb-1">
          <a href="">Ways to Buy</a>
        </li>
        <li className="text-base mb-1">
          <a href="">Personal Setup</a>
        </li>
      </ul>
      <ul className="mt-6 font-medium">
        <h5 className="text-sm text-gray-500 mb-3">Shop Special Stores</h5>
        <li className="text-base mb-1">
          <a href="">Education</a>
        </li>
        <li className="text-base mb-1">
          <a href="">Business</a>
        </li>
      </ul>
    </div>
  );
}
