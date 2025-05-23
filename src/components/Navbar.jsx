/** @format */

import React from "react";
import { Link } from "react-router-dom";
import { assets } from "../assets/assets";

const Navbar = () => {
  return (
    <div>
      <div className="flex">
        <div className="image">
          <img src={assets.logo} alt="LogoIcon" />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
