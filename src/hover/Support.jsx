import React from "react";

export default function Support() {
  return (
    <div className="flex justify-center z-20  gap-32 absolute bg-white w-full sm:-mt-10 sm:fixed h-[600px]  text-gray-800 ">
      <ul className="font-semibold mt-6  -ml-[300px]">
        <h5 className="text-sm text-gray-400 mb-3">Explore Support</h5>
        <li className="text-2xl mb-3">
          <a href="">iPhone</a>
        </li>
        <li className="text-2xl mb-3">
          <a href="">Mac</a>
        </li>
        <li className="text-2xl mb-3">
          <a href="">iPad</a>
        </li>
        <li className="text-2xl mb-3">
          <a href="">Watch</a>
        </li>
        <li className="text-2xl mb-3">
          <a href="">AirPods</a>
        </li>
        <li className="text-2xl mb-3">
          <a href="">Music</a>
        </li>
        <li className="text-2xl mb-6 ">
          <a href="">TV</a>
        </li>
        <li className="text-base text-gray-400 font-normal hover:text-black mb-3 ">
          <a href="">Explore Support</a>
        </li>{" "}
      </ul>

      <ul className="mt-6 font-medium">
        <h5 className="text-sm text-gray-500 mb-3">Get Help</h5>
        <li className="text-base mb-2">
          <a href="">Community</a>
        </li>
        <li className="text-base mb-2">
          <a href="">Check Coverage</a>
        </li>
        <li className="text-base mb-2">
          <a href="">Repair</a>
        </li>
      </ul>
      <ul className="mt-6 font-medium">
        <h5 className="text-sm text-gray-500 mb-3">Helpful Topics</h5>
        <li className="text-base mb-2">
          <a href="">Get AppleCare+</a>
        </li>
        <li className="text-base mb-2">
          <a href="">Apple Account and Password</a>
        </li>
        <li className="text-base mb-2">
          <a href="">Billing & Subscription</a>
        </li>
        <li className="text-base mb-2">
          <a href="">Accessibility</a>
        </li>
      </ul>
    </div>
  );
}
