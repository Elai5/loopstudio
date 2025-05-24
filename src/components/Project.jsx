/** @format */

import React from "react";
import { assets } from "../assets/assets";

const Project = () => {
  return (
    <div className="w-full px-5 lg:px-20 py-20">
      <div className="w-full flex flex-col">
        <div className="flex w-full justify-between mb-5">
          <h2 className="text-sm md:text-4xl font-light">OUR CREATIONS</h2>
          <button className="border text-xs px-2 md:px-8 py-1">SEE ALL</button>
        </div>
        <div className="w-full flex flex-col gap-8">
          <div className="w-full flex flex-col md:flex-row gap-5">
            <div className="relative w-full md:w-1/3 cursor-pointer border-2 border-black hover:-translate-y-4">
              <picture>
                <source
                  media="(max-width:639px)"
                  srcSet={assets.mobile_deep_earth}
                  //   className="w-1/3 h-24 border border-red-500"
                />
                <img
                  src={assets.desktop_deep_earth}
                  alt=""
                  className="w-full object-cover"
                />
              </picture>
              <h2 className="absolute bottom-4 left-4 text-white text-base">
                THE
                <br /> EARTH
              </h2>
            </div>
            <div className="relative w-full md:w-1/3 cursor-pointer border-2 border-black hover:-translate-y-4">
              <picture>
                <source
                  media="(max-width:639px)"
                  srcSet={assets.mobile_night_arcade}
                />
                <img
                  src={assets.desktop_night_arcade}
                  alt=""
                  className="w-full object-cover"
                />
              </picture>
              <h2 className="absolute bottom-4 left-4 text-white text-base">
                NIGHT
                <br />
                ARCADE
              </h2>
            </div>
            <div className="relative w-full md:w-1/3 cursor-pointer border-2 border-black hover:-translate-y-4">
              <picture>
                <source
                  media="(max-width:639px)"
                  srcSet={assets.mobile_soccer_team}
                />
                <img
                  src={assets.desktop_soccer_team}
                  alt=""
                  className="w-full object-cover"
                />
              </picture>
              <h2 className="absolute bottom-4 left-4 text-white text-base">
                SOCCER
                <br /> TEAM
              </h2>
            </div>
            <div className="relative w-full md:w-1/3 cursor-pointer border-2 border-black hover:-translate-y-4">
              <picture>
                <source media="(max-width:639px)" srcSet={assets.mobile_grid} />
                <img
                  src={assets.desktop_grid}
                  alt=""
                  className="w-full object-cover"
                />
              </picture>
              <h2 className="absolute bottom-4 left-4 text-white text-base">
                THE
                <br />
                GRID
              </h2>
            </div>
          </div>
          <div className="w-full flex flex-col md:flex-row gap-5">
            <div className="relative w-full md:w-1/3 cursor-pointer border-2 border-black hover:-translate-y-4">
              <picture>
                <source
                  media="(max-width:639px)"
                  srcSet={assets.mobile_from_above}
                />
                <img
                  src={assets.desktop_from_above}
                  alt=""
                  className="w-full object-cover"
                />
              </picture>
              <h2 className="absolute bottom-4 left-4 text-white text-base">
                THE
                <br /> EARTH
              </h2>
            </div>
            <div className="relative w-full md:w-1/3 cursor-pointer border-2 border-black hover:-translate-y-4">
              <picture>
                <source
                  media="(max-width:639px)"
                  srcSet={assets.mobile_pocket_borealis}
                />
                <img
                  src={assets.desktop_pocket_borealis}
                  alt=""
                  className="w-full object-cover"
                />
              </picture>
              <h2 className="absolute bottom-4 left-4 text-white text-base">
                POCKET
                <br /> BOREALIS
              </h2>
            </div>
            <div className="relative w-full md:w-1/3 cursor-pointer border-2 border-black hover:-translate-y-4">
              <picture>
                <source
                  media="(max-width:639px)"
                  srcSet={assets.mobile_curiosity}
                />
                <img
                  src={assets.desktop_curiosity}
                  alt=""
                  className="w-full object-cover"
                />
              </picture>
              <h2 className="absolute bottom-4 left-4 text-white text-base">
                THE
                <br /> CURIOSITY
              </h2>
            </div>
            <div className="relative w-full md:w-1/3 cursor-pointer border-2 border-black hover:-translate-y-4">
              <picture>
                <source
                  media="(max-width:639px)"
                  srcSet={assets.mobile_fisheye}
                />
                <img
                  src={assets.desktop_fisheye}
                  alt=""
                  className="w-full object-cover"
                />
              </picture>
              <h2 className="absolute bottom-4 left-4 text-white text-base">
                MAKE IT
                <br /> FISHEYE
              </h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Project;
