/** @format */

import React from "react";
import Navbar from "./Navbar";
import { assets } from "../assets/assets";

export const Home = () => {
  return (
    <div
      //   className="mb-4 bg-no-repeat bg-contain flex items-center w-full overflow-hidden"
      //   className="relative w-full overflow-hidden mb-4"
      //   style={{
      //     backgroundImage: `url(${assets.desktop})`,
      //     border: "solid red",
      //   }}
      className="relative w-full overflow-hidden mb-4"
    >
      <picture>
        <source media="(min-width: 640px)" srcSet={assets.desktop_hero} />
        <img
          src={assets.mobile_hero}
          alt="Hero Background"
          className="w-full h-auto object-cover"
        />
      </picture>
      <>
        <div className="absolute inset-0">
          <Navbar />
          <div className="flex min-h-screen px-20 py-10">
            <div className="py-20 flex items-start lg:items-center lg:py-30 text-white lg:p-8 w-full h-1/2">
              <h1 className="flex flex-col lg:text-5xl border border-white p-8 ">
                <span>IMMERSIVE</span>
                <span>EXPERIENCE</span>
                <span>THAT DELIVER</span>
              </h1>
            </div>
          </div>
        </div>
      </>
    </div>
  );
};
