import React from "react";
import Navbar from "./Navbar";
import { useParams } from "react-router-dom";
import { albumsData, assets } from "../assets/assets";

const DisplayAlbum = () => {
  const { id } = useParams();
  const albumData = albumsData[id];
  console.log(albumData);
  return (
    <>
      <Navbar />
      <div className="flex flex-col gap-8 mt-10 md:flex-row md:items-end">
        <img
          className="w-48 rounded"
          src={albumData.image}
          alt="album_data_image"
        />
        <div className="flex flex-col">
          <p>Playlist</p>
          <h2 className="mb-4 text-5xl font-bold md:text-7xl">
            {albumData.name}
          </h2>
          <h4>{albumData.desc}</h4>
          <p className="mt-1">
            <img src={assets.spotify_logo} alt="spotify_logo" />
            <b>Spotify</b> &#x2022; 1,332,365 &#x2022; <b> 50 songs, </b>
            about 2 hr 30 min
          </p>
        </div>
      </div>
      <div className="grid grid-cols-3 pl-2 mt-10 mb-4 sm:grid-cols-4 text-[#a7a7a7]">
        <p>
          <b className="mr-4">#</b>Title
        </p>
        <p>Album</p>
        <p className="hidden sm:block">Date Added</p>
        <img className="w-4 m-auto" src={assets.clock_icon} alt="clock_icon" />
      </div>
      <hr />
    </>
  );
};

export default DisplayAlbum;
