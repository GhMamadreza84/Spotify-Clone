import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { PlayerContext } from "../context/PlayerContext";
const SongItem = ({ name, desc, id, image }) => {
  const { playWithId, setPlayStatus } = useContext(PlayerContext);

  return (
    <div
      onClick={() => {
        playWithId(id);
      }}
      className="min-w-[180px] p-2 px-3 rounded cursor-pointer hover:bg-[#ffffff26]"
    >
      <img className="rounded" src={image} alt="" />
      <p className="mt-2 mb-1 font-bold">{name}</p>
      <p className="text-sm text-slate-200">{desc}</p>
    </div>
  );
};

export default SongItem;
