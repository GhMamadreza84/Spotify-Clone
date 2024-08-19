import React from "react";
import { assets } from "../assets/assets";
import { useNavigate } from "react-router-dom";
const Sidebar = () => {
  const navigate = useNavigate();
  return (
    <div className="w-[25%] h-full p-2 flex-col hidden lg:flex text-white gap-2">
      <div className="h-[15%] rounded flex flex-col justify-around bg-[#121212]">
        <div
          onClick={() => navigate('/')}
          className="flex items-center gap-3 pl-8 cursor-pointer"
        >
          <img src={assets.home_icon} alt="home icon" className="w-6" />
          <p className="font-bold">Home</p>
        </div>

        <div className="flex items-center gap-3 pl-8 cursor-pointer">
          <img src={assets.search_icon} alt="search icon" className="w-6" />
          <p className="font-bold">Search</p>
        </div>
      </div>
      <div className="bg-[#121212] h-[85%] rounded">
        <div className="flex items-center justify-between p-4">
          <div className="flex items-center gap-3">
            <img src={assets.stack_icon} alt="stack icon" className="w-8" />
            <p className="font-semibold">Your Library</p>
          </div>
          <div className="flex items-center gap-3">
            <img src={assets.arrow_icon} alt="arrow icon" className="w-5" />
            <img src={assets.plus_icon} alt="plus icon" className="w-5" />
          </div>
        </div>
        <div className="bg-[#242424] m-2 rounded font-semibold flex flex-col items-start justify-start gap-1 p-4 pl-4 ">
          <h1>Create your first playlist</h1>
          <p className="font-light">it's easy we will help you</p>
          <button className="px-4 py-1.5 bg-white text-[15px] text-black rounded-full mt-4 ">
            Create Playlist
          </button>
        </div>
        <div className="bg-[#242424] m-2 rounded font-semibold flex flex-col items-start justify-start gap-1 p-4 pl-4 mt-4">
          <h1>Let's findsome podcast to follow</h1>
          <p className="font-light">we'll keep you update on new episodes</p>
          <button className="px-4 py-1.5 bg-white text-[15px] text-black rounded-full mt-4 ">
            Browse podcast
          </button>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
