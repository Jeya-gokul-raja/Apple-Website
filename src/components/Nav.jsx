import { useState } from "react";
import React from "react";
import Storeopen from "../hover/Storeopen";
import Mac from "../hover/Mac";
import Ipad from "../hover/Ipad";
import Iphone from "../hover/Iphone";
import Access from "../hover/Access";
import Airpods from "../hover/Airpods";
import Enter from "../hover/Enter";
import Tv from "../hover/Tv";
import Watch from "../hover/Watch";
import Support from "../hover/Support";

const menuItems = [
  { title: "Store", component: <Storeopen /> },
  { title: "Mac", component: <Mac /> },
  { title: "iPad", component: <Ipad /> },
  { title: "iPhone", component: <Iphone /> },
  { title: "Watch", component: <Watch /> },
  { title: "AirPods", component: <Airpods /> },
  { title: "TV & Home", component: <Tv /> },
  { title: "Entertainment", component: <Enter /> },
  { title: "Accessories", component: <Access /> },
  { title: "Support", component: <Support /> },
];

export default function Nav() {
  const [activeMenu, setActiveMenu] = useState(null);
  const [toggleMenu, setToggleMenu] = useState(false);

  const handleMenuClick = (menu) => {
    setActiveMenu(menu);
  };

  const closeMenu = () => {
    setActiveMenu(null);
  };

  return (
    <div>
      <nav
        className={`z-20 relative justify-center ${
          activeMenu ? "rounded-b-3xl" : "bg-none"
        }`}
        onMouseLeave={closeMenu}
      >
        <ul className="flex sm:hidden mt-2 justify-between ">
          <li className="ml-3">
            {" "}
            <a href="#">
              <svg
                fill="#000000"
                height="20px"
                width="20px"
                viewBox="0 0 22.773 22.773"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g>
                  <path d="M15.769,0c0.053,0,0.106,0,0.162,0c0.13,1.606-0.483,2.806-1.228,3.675c-0.731,0.863-1.732,1.7-3.351,1.573 c-0.108-1.583,0.506-2.694,1.25-3.561C13.292,0.879,14.557,0.16,15.769,0z" />
                  <path d="M20.67,16.716c0,0.016,0,0.03,0,0.045c-0.455,1.378-1.104,2.559-1.896,3.655c-0.723,0.995-1.609,2.334-3.191,2.334 c-1.367,0-2.275-0.879-3.676-0.903c-1.482-0.024-2.297,0.735-3.652,0.926c-0.155,0-0.31,0-0.462,0 c-0.995-0.144-1.798-0.932-2.383-1.642c-1.725-2.098-3.058-4.808-3.306-8.276c0-0.34,0-0.679,0-1.019 c0.105-2.482,1.311-4.5,2.914-5.478c0.846-0.52,2.009-0.963,3.304-0.765c0.555,0.086,1.122,0.276,1.619,0.464 c0.471,0.181,1.06,0.502,1.618,0.485c0.378-0.011,0.754-0.208,1.135-0.347c1.116-0.403,2.21-0.865,3.652-0.648 c1.733,0.262,2.963,1.032,3.723,2.22c-1.466,0.933-2.625,2.339-2.427,4.74C17.818,14.688,19.086,15.964,20.67,16.716z" />
                </g>
              </svg>
            </a>
          </li>
          <div className="flex gap-6 mr-3 ">
            <li>
              <a href="#">
                <svg
                  className="w-[25px] h-[25px]"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle
                    cx="10.5"
                    cy="10.5"
                    r="6.5"
                    stroke="#000000"
                    strokeWidth="1.5"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M20.3536 19.6464L15.3536 14.6464"
                    stroke="#000000"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </a>
            </li>{" "}
            <li>
              <a href="#">
                <svg
                  className="w-[23px] h-[23px]"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M22 10.56C22 9.49913 21.5786 8.48171 20.8284 7.73157C20.0783 6.98142 19.0609 6.56 18 6.56H6C4.93913 6.56 3.92178 6.98142 3.17163 7.73157C2.42149 8.48171 2 9.49913 2 10.56"
                    stroke="#000000"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M21.9999 10.56L20.9999 18.56C20.8507 19.6487 20.3192 20.649 19.5002 21.3818C18.6813 22.1146 17.6285 22.5322 16.5299 22.56H7.38989C6.29132 22.5322 5.23847 22.1146 4.41956 21.3818C3.60064 20.649 3.0691 19.6487 2.91992 18.56L1.91992 10.56"
                    stroke="#000000"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </a>
            </li>{" "}
            <li className=":hidden">
              <button onClick={() => setToggleMenu(!toggleMenu)}>☰</button>
            </li>{" "}
          </div>
        </ul>

        <ul className="sm:flex hidden justify-center gap-12 bg-white fixed top-0 w-full  h-16 pt-4">
          {/* Toggle Button */}
          <li className="">
            <a href="#">
              <svg
                fill="#000000"
                height="20px"
                width="20px"
                viewBox="0 0 22.773 22.773"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g>
                  <path d="M15.769,0c0.053,0,0.106,0,0.162,0c0.13,1.606-0.483,2.806-1.228,3.675c-0.731,0.863-1.732,1.7-3.351,1.573 c-0.108-1.583,0.506-2.694,1.25-3.561C13.292,0.879,14.557,0.16,15.769,0z" />
                  <path d="M20.67,16.716c0,0.016,0,0.03,0,0.045c-0.455,1.378-1.104,2.559-1.896,3.655c-0.723,0.995-1.609,2.334-3.191,2.334 c-1.367,0-2.275-0.879-3.676-0.903c-1.482-0.024-2.297,0.735-3.652,0.926c-0.155,0-0.31,0-0.462,0 c-0.995-0.144-1.798-0.932-2.383-1.642c-1.725-2.098-3.058-4.808-3.306-8.276c0-0.34,0-0.679,0-1.019 c0.105-2.482,1.311-4.5,2.914-5.478c0.846-0.52,2.009-0.963,3.304-0.765c0.555,0.086,1.122,0.276,1.619,0.464 c0.471,0.181,1.06,0.502,1.618,0.485c0.378-0.011,0.754-0.208,1.135-0.347c1.116-0.403,2.21-0.865,3.652-0.648 c1.733,0.262,2.963,1.032,3.723,2.22c-1.466,0.933-2.625,2.339-2.427,4.74C17.818,14.688,19.086,15.964,20.67,16.716z" />
                </g>
              </svg>
            </a>
          </li>
          {menuItems.map((item, index) => (
            <li key={index} onMouseEnter={() => handleMenuClick(item.title)}>
              <a href="#">{item.title}</a>
            </li>
          ))}
          <li>
            <a href="#">
              <svg
                className="w-[25px] h-[25px]"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle
                  cx="10.5"
                  cy="10.5"
                  r="6.5"
                  stroke="#000000"
                  strokeWidth="1.5"
                  strokeLinejoin="round"
                />
                <path
                  d="M20.3536 19.6464L15.3536 14.6464"
                  stroke="#000000"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </a>
          </li>{" "}
          <li>
            <a href="#">
              <svg
                className="w-[23px] h-[23px]"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M22 10.56C22 9.49913 21.5786 8.48171 20.8284 7.73157C20.0783 6.98142 19.0609 6.56 18 6.56H6C4.93913 6.56 3.92178 6.98142 3.17163 7.73157C2.42149 8.48171 2 9.49913 2 10.56"
                  stroke="#000000"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M21.9999 10.56L20.9999 18.56C20.8507 19.6487 20.3192 20.649 19.5002 21.3818C18.6813 22.1146 17.6285 22.5322 16.5299 22.56H7.38989C6.29132 22.5322 5.23847 22.1146 4.41956 21.3818C3.60064 20.649 3.0691 19.6487 2.91992 18.56L1.91992 10.56"
                  stroke="#000000"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </a>
          </li>
        </ul>

        <p className="sm:flex-row flex flex-col  items-center bg-white text-center px-8 mb-3 sm:mb-0 sm:px-0 mt-5 justify-center sm:mt-16 sm:p-4 text-sm sm:text-lg ">
          Get up to 24 months of No Cost EMI plus up to ₹10,000 instant cashback
          on selected products with eligible cards.
          <span className="text-blue-500">
            <a href="#" className="hover:underline">
              <div className="flex ">
                {" "}
                <h3>Shop</h3>
                <svg
                  className="sm:size-4 size-3 mt-2 sm:mt-2 "
                  fill="#329ee2"
                  viewBox="0 0 32 32"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                  <g
                    id="SVGRepo_tracerCarrier"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></g>
                  <g id="SVGRepo_iconCarrier">
                    <path d="M 6 6 L 6 8.15625 L 22.53125 16 L 6 23.84375 L 6 26 L 26 16.78125 L 26 15.21875 Z"></path>
                  </g>
                </svg>
              </div>
            </a>
          </span>
        </p>

        {menuItems.map((item) => activeMenu === item.title && item.component)}
      </nav>

      {/* Mobile Menu */}
      {toggleMenu && (
        <nav className="block sm:hidden absolute z-30 -mt-10   top-10 left-0 bg-white w-full h-full">
          <ul className="flex flex-col mt-18 ml-12  gap-2 text-2xl font-semibold">
            {menuItems.map((item, index) => (
              <li
                key={index}
                className="p-2 bg-white  -mt-3  "
                onClick={() => setToggleMenu(false)}
              >
                <a href="#">{item.title}</a>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </div>
  );
}
