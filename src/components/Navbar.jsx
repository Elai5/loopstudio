/** @format */

// import React from "react";
import React, { useState } from "react";

import { assets } from "../assets/assets";

const Navbar = () => {
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);
  return (
    <div className="absolute top-0 left-0 w-full z-10">
      <div className="container w-full mx-auto flex justify-between gap-8 py-8 px-6 md:px-20 lg:px-10">
        <img className="" src={assets.logo} alt="LogoIcon" />
        <ul className="hidden md:flex gap-7 text-white text-2xl">
          <li className="cursor-poiner hover:text-[hsl(0,0%,85%)]">
            <a href="">About</a>
          </li>
          <li>
            <a href="">Careers</a>
          </li>
          <li>
            <a href="">Events</a>
          </li>
          <li>
            <a href="">Products</a>
          </li>
          <li>
            <a href="">Support</a>
          </li>
        </ul>
        <div className="md:hidden">
          <img
            src={assets.hamburger}
            alt="Menu"
            className="cursor-pointer"
            onClick={() => setIsMobileNavOpen(true)}
          />
        </div>
      </div>
      {/* mobile nav */}
      {/* <div className="hidden h-screen bg-black text-[hsl(0,0%,100%)]">
        <img src={assets.icon_close} alt="" className="absolute right-0 p-4" />
        <ul className="md:flex p-5 gap-7 text-white text-xl">
          <li className="cursor-poiner">
            <a href="">About</a>
          </li>
          <li>
            <a href="">Careers</a>
          </li>
          <li>
            <a href="">Events</a>
          </li>
          <li>
            <a href="">Products</a>
          </li>
          <li>
            <a href="">Support</a>
          </li>
        </ul>
      </div> */}
      {isMobileNavOpen && (
        <div className="fixed inset-0 h-screen bg-black text-white flex flex-col z-20 p-6">
          <div className="flex justify-end">
            <img
              src={assets.icon_close}
              alt="Close"
              className="cursor-pointer w-8 h-8"
              onClick={() => setIsMobileNavOpen(false)}
            />
          </div>
          <ul className="flex flex-col gap-6 mt-10 text-2xl">
            <li className="cursor-pointer">
              <a href="">About</a>
            </li>
            <li>
              <a href="">Careers</a>
            </li>
            <li>
              <a href="">Events</a>
            </li>
            <li>
              <a href="">Products</a>
            </li>
            <li>
              <a href="">Support</a>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default Navbar;
