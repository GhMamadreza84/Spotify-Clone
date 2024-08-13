import React from "react";
import Navbar from "./Navbar";
import { albumsData, assets, songsData } from "../assets/assets";
import AlbumItem from "./AlbumItem";
import SongItem from "./SongItem";
const DisplayHome = () => {
  return (
    <>
      <Navbar />
      <div className="mb-4">
        <h1 className="my-5 text-2xl font-bold">Featured Charts</h1>
        <div className="flex overflow-auto ">
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
        <h1 className="my-5 text-2xl font-bold">Today's biggest hits</h1>
        <div className="flex overflow-auto ">
          {songsData.map((item, index) => (
            <SongItem
              key={index}
              name={item.name}
              desc={item.desc}
              id={item.id}
              image={item.image}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default DisplayHome;
