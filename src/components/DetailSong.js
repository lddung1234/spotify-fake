import React, { useContext, useEffect } from "react";
import { Songs } from "../Context";

export default function DetailSong() {
  const { song } = useContext(Songs);
  return (
    <div className="col-span-1 text-left p-3">
      <h2 className="text-cyan-500 font-bold ">Now Playing</h2>
      <h2 className="text-gray-500 text-2xl">{song.name}</h2>
      <div className="max-w-[240px] m-auto mt-5">
        <img
          className="max-w-[210px]"
          src={song.links.images[0].url}
          alt="avatar"
        ></img>
      </div>
      <div className="flex items-center justify-evenly mt-10">
        <img
          className="w-[70px] rounded-full"
          src={song.links.images[1].url}
          alt="avatar"
        ></img>
        <span className="text-xl text-white">{song.author}</span>
      </div>
    </div>
  );
}
