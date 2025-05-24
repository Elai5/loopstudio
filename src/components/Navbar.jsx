/** @format */

import React from "react";
import { assets } from "../assets/assets";

const Navbar = () => {
  return (
    <div className="absolute top-0 left-0 w-full z-10">
      <div className="container mx-auto flex justify-between items-center gap-8 py-4 px-6 md:px-20 lg:px-32 bg-transparent">
        <img className="h-1/2" src={assets.logo} alt="LogoIcon" />
        <ul className="hidden md:flex gap-7 text-white text-2xl">
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
        <div>
          <img src={assets.hamburger} alt="" className="lg:hidden" />
        </div>
      </div>
      {/* mobile nav */}
      <div className="hidden h-screen bg-black text-white">
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
      </div>
    </div>
  );
};

export default Navbar;
