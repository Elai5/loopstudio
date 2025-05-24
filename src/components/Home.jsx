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
        <div className="absolute inset-0 px-20">
          <Navbar />
          <div className="w-full flex min-h-screen py-30 lg:px-10">
            <div className="w-full lg:w-3/4 text-left text-white">
              {/* <h1 className="text-4xl max-w-full p-6 flex flex-col border bg-transparent border-white lg:p-8 lg:text-5xl font-josefin"> */}
              <h1 className="text-2xl sm:text-3xl lg:text-5xl w-full p-4 sm:p-6 lg:p-8 flex flex-col border border-white font-josefin break-words">
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
