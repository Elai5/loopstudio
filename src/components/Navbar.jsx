/** @format */

import React from "react";
import { assets } from "../assets/assets";

const Navbar = () => {
  return (
    <header className="header absolute top-0 left-0 w-full z-10">
      <nav className="main-nav container w-full mx-auto flex justify-between gap-8 py-8 px-6 md:px-20 lg:px-10">
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
        <div>
          <img src={assets.hamburger} alt="" className="lg:hidden" />
        </div>
      </nav>
      {/* mobile nav */}
      <div className="hidden h-screen bg-black text-[hsl(0,0%,100%)]">
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
    </header>
  );
};

export default Navbar;
