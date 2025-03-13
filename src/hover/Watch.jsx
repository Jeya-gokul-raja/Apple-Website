import React from "react";

export default function Watch() {
  return (
    <div className="flex justify-center sm:fixed z-20  gap-32 absolute bg-white w-full sm:-mt-16  h-[500px]  text-gray-800 ">
      <ul className="font-semibold mt-6  -ml-[325px]">
        <h5 className="text-sm text-gray-400 mb-3">Explore Watch</h5>
        <li className="text-2xl mb-3">
          <a href="">Explore All Apple Watch</a>
        </li>
        <li className="text-2xl mb-3">
          <a href="">Apple Watch Series 10</a>
        </li>
        <li className="text-2xl mb-3">
          <a href="">Apple Watch Ultra 2</a>
        </li>
        <li className="text-2xl mb-3">
          <a href="">Apple Watch SE</a>
        </li>
        <li className="text-2xl mb-6">
          <a href="">Apple Watch Nike</a>
        </li>
        <li className="text-base text-gray-400 font-normal hover:text-black mb-3 ">
          <a href="">Compare Mac</a>
        </li>{" "}
        <li className="text-base text-gray-400 font-normal hover:text-black mb-3">
          <a href="">Switch from PC to Mac</a>
        </li>
      </ul>

      <ul className="mt-6 font-medium">
        <h5 className="text-sm text-gray-500 mb-3">Shop Watch</h5>
        <li className="text-base mb-2">
          <a href="">Shop Apple Watch</a>
        </li>
        <li className="text-base mb-2">
          <a href="">Apple Watch Straps</a>
        </li>
        <li className="text-base mb-2">
          <a href="">Apple Watch Accessories</a>
        </li>
        <li className="text-base">
          <a href="">Ways to buy</a>
        </li>
      </ul>
      <ul className="mt-6 font-medium">
        <h5 className="text-sm text-gray-500 mb-3">More from Watch</h5>
        <li className="text-base mb-2">
          <a href="">Apple Watch Support</a>
        </li>
        <li className="text-base mb-2">
          <a href="">AppleCare+</a>
        </li>
        <li className="text-base mb-2">
          <a href="">watchOS 11</a>
        </li>
        <li className="text-base mb-2">
          <a href="">Apple Watch For Your Kids</a>
        </li>
        <li className="text-base mb-2">
          <a href="">Apps by Apple</a>
        </li>
      </ul>
    </div>
  );
}
