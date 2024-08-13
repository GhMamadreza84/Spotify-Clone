import React from "react";
import Navbar from "./Navbar";
import { albumsData, assets } from "../assets/assets";
import AlbumItem from "./AlbumItem";
const DisplayHome = () => {
  return (
    <>
      <Navbar />
      <div className="my-5 text-2xl font-bold">
        {albumsData.map((item, index) => (
          <AlbumItem
            key={index}
            name={item.name}
            desc={item.desc}
            id={item.id}
            image={item.image}
          />
        ))}
      </div>
    </>
  );
};

export default DisplayHome;
