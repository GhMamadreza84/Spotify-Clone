import React from "react";
import { assets } from "../assets/assets";

import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  return (
    <>
      <div className="flex items-center justify-between w-full font-semibold">
        <div className="flex items-center gap-2">
          <img
            onClick={() => navigate(-1)}
            className="w-8 p-2 bg-black cursor-pointer rounded-2xl"
            src={assets.arrow_left}
            alt="arrow-left"
          />
          <img
            onClick={() => navigate(1)}
            className="w-8 p-2 bg-black cursor-pointer rounded-2xl"
            src={assets.arrow_right}
            alt="arrow-right"
          />
        </div>
        <div className="flex items-center gap-4">
          <p className="px-4 py-1 text-[15px] rounded-2xl hidden md:block text-black bg-white cursor-pointer">
            Explore Premium
          </p>
          <p className="px-3 py-1 bg-black rounded-2xl text-[15px] cursor-pointer flex items-center gap-2">
            <img
              src={assets.download_icon}
              alt="download-icon"
              className="w-4 text-white"
            />
            Install Apps
          </p>
          <p className="flex items-center justify-center text-black bg-purple-500 rounded-full w-7 h-7">
            G
          </p>
        </div>
      </div>
      <div className="flex items-center gap-2 mt-4">
        <p className="px-4 py-1 text-black bg-white cursor-pointer rounded-2xl">
          All
        </p>
        <p className="px-4 py-1 bg-black cursor-pointer rounded-2xl">Music</p>
        <p className="px-4 py-1 bg-black cursor-pointer rounded-2xl">Podcast</p>
      </div>
    </>
  );
};

export default Navbar;
