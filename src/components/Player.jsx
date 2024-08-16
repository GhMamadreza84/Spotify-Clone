import React, { useContext } from "react";
import { assets, songsData } from "../assets/assets";
import { PlayerContext } from "../context/PlayerContext";

const Player = () => {
  const { seekBg, seekBar } = useContext(PlayerContext);

  return (
    <div
      className="h-[10%] bg-black flex justify-between items-center text-white px-4
    "
    >
      <div className="items-center hidden gap-4 lg:flex">
        <img
          src={songsData[0].image}
          alt={songsData[0].name}
          className="w-12"
        />
        <div>
          <p>{songsData[0].name}</p>
          <p>{songsData[0].desc.slice(0, 12)}</p>
        </div>
      </div>
      <div className="flex flex-col items-center gap-1 m-auto">
        <div className="flex gap-4">
          <img
            src={assets.shuffle_icon}
            alt=""
            className="w-4 cursor-pointer"
          />
          <img src={assets.prev_icon} alt="" className="w-4 cursor-pointer" />
          <img src={assets.plays_icon} alt="" className="w-4 cursor-pointer" />
          <img src={assets.next_icon} alt="" className="w-4 cursor-pointer" />
          <img src={assets.loop_icon} alt="" className="w-4 cursor-pointer" />
        </div>
        <div className="flex items-center gap-5">
          <p>1:06</p>
          <div
            ref={seekBg}
            className="w-[60vw] max-w-[500px] bg-gray-300 rounded-full cursor-pointer"
          >
            <hr
              ref={seekBar}
              className="w-0 h-1 bg-green-800 border-none rounded full"
            />
          </div>
          <p>3:20</p>
        </div>
      </div>
      <div className="items-center hidden gap-2 opacity-75 lg:flex">
        <img src={assets.plays_icon} alt="" className="w-4 cursor-pointer" />
        <img src={assets.mic_icon} alt="" className="w-4 cursor-pointer" />
        <img src={assets.queue_icon} alt="" className="w-4 cursor-pointer" />
        <img src={assets.speaker_icon} alt="" className="w-4 cursor-pointer" />
        <img src={assets.volume_icon} alt="" className="w-4 cursor-pointer" />
        <div className="w-20 h-1 rounded bg-slate-50"></div>
        <img
          src={assets.mini_player_icon}
          alt=""
          className="w-4 cursor-pointer"
        />
        <img src={assets.zoom_icon} alt="" className="w-4 cursor-pointer" />
      </div>
    </div>
  );
};

export default Player;
