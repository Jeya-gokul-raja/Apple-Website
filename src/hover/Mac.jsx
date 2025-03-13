import React from "react";

export default function Mac() {
  return (
    <div className="flex justify-center z-20  gap-32 absolute bg-white sm:fixed sm:-mt-10 w-full h-[600px] text-gray-800 ">
      <ul className="font-semibold mt-6  -ml-[300px]">
        <h5 className="text-sm text-gray-400 mb-3">Explore Mac</h5>
        <li className="text-2xl mb-3">
          <a href="">Explore All Mac</a>
        </li>
        <li className="text-2xl mb-3">
          <a href="">MacBook Air</a>
        </li>
        <li className="text-2xl mb-3">
          <a href="">MacBook Pro</a>
        </li>
        <li className="text-2xl mb-3">
          <a href="">iMac</a>
        </li>
        <li className="text-2xl mb-3">
          <a href="">Mac mini</a>
        </li>
        <li className="text-2xl mb-3">
          <a href="">Mac Studio</a>
        </li>
        <li className="text-2xl mb-3">
          <a href="">Mac Pro</a>
        </li>
        <li className="text-2xl mb-7">
          <a href="">Displays</a>
        </li>
        <li className="text-base text-gray-400 font-normal hover:text-black mb-3 ">
          <a href="">Compare Mac</a>
        </li>{" "}
        <li className="text-base text-gray-400 font-normal hover:text-black mb-3">
          <a href="">Switch from PC to Mac</a>
        </li>
      </ul>

      <ul className="mt-6 font-medium">
        <h5 className="text-sm text-gray-500 mb-3">Shop Mac</h5>
        <li className="text-base mb-2">
          <a href="">Shop Mac</a>
        </li>
        <li className="text-base mb-2">
          <a href="">Mac Accessories</a>
        </li>
        <li className="text-base mb-2">
          <a href="">Ways to Buy</a>
        </li>
      </ul>
      <ul className="mt-6 font-medium">
        <h5 className="text-sm text-gray-500 mb-3">More from Mac</h5>
        <li className="text-base mb-2">
          <a href="">Mac Support</a>
        </li>
        <li className="text-base mb-2">
          <a href="">AppleCare+ for Mac</a>
        </li>
        <li className="text-base mb-2">
          <a href="">macOS Sequoia</a>
        </li>
        <li className="text-base mb-2">
          <a href="">Apple Intelligence</a>
        </li>
        <li className="text-base mb-2">
          <a href="">Continuity</a>
        </li>
        <li className="text-base mb-2">
          <a href="">icloud</a>
        </li>
        <li className="text-base mb-2">
          <a href="">Mac for Business</a>
        </li>
        <li className="text-base">
          <a href="">Education</a>
        </li>
      </ul>
    </div>
  );
}
