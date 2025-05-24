/** @format */

import React from "react";
import Navbar from "./Navbar";
import { assets } from "../assets/assets";

export const Home = () => {
  return (
    <section
      //   className="mb-4 bg-no-repeat bg-contain flex items-center w-full overflow-hidden"
      //   className="relative w-full overflow-hidden mb-4"
      //   style={{
      //     backgroundImage: `url(${assets.desktop})`,
      //     border: "solid red",
      //   }}
      className="home-section relative w-full overflow-hidden mb-4"
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
        <div className="absolute inset-0 px-2 lg:px-20 md:px-20 w-full">
          <Navbar />
          <div className="w-full flex min-h-screen py-30 lg:px-10 lg:py-40">
            <div className="w-full lg:w-3/4 md:w-1/2 text-left text-white">
              <h1 className="w-full lg:w-3/4 max-w-full flex flex-col gap-2 text-5xl lg:text-4xl md:text-4xl font-josefin border border-white p-2 lg:p-4 sm:p-2 ">
                <span>IMMERSIVE</span>
                <span>EXPERIENCE</span>
                <span>THAT DELIVER</span>
              </h1>
            </div>
          </div>
        </div>
      </>
    </section>
  );
};
