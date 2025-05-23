/** @format */

import React from "react";
import Navbar from "./Navbar";
import { assets } from "../assets/assets";

export const Home = () => {
  return (
    <div
      className="min-h-screen mb-4 bg-cover bg-center flex items-center w-full overflow-hidden"
      style={{ backgroundImage: `url(${assets.desktop_hero})` }}
    >
      <>
        <Navbar />
        <div className="flex justify-center items-center min-h-screen px-20">
          <div className="text-white border border-white p-8 w-full">
            <h1 className="flex flex-col text-5xl">
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
