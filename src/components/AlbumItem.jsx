import React from "react";

const AlbumItem = ({ image, name, desc, id }) => {
  return (
    <div className="min-w-[180px] p-2 px-3 rounded cursor-pointer hover:bg-[#ffffff26]">
      <img className="rounded" src={image} alt="" />
    </div>
  );
};

export default AlbumItem;
