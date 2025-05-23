/** @format */

import React from "react";
import Navbar from "./Navbar";
import { assets } from "../assets/assets";

export const Home = () => {
  return (
    <div
      className="mb-4 bg-no-repeat bg-contain flex items-center w-full overflow-hidden"
      style={{
        backgroundImage: `url(${assets.desktop})`,
        border: "solid red",
      }}
    >
      <>
        <Navbar />
        <div className="flex min-h-screen px-20">
          <div className=" flex justify-center items-center lg:py-30 text-white p-8 w-full h-1/2">
            <h1 className="flex flex-col lg:text-5xl border border-white p-8 ">
              <span>IMMERSIVE</span>
              <span>EXPERIENCE</span>
              <span>THAT DELIVER</span>
            </h1>
          </div>
        </div>
      </>
    </div>
  );
};
