import React, { useContext, useEffect } from "react";
import { Songs } from "../Context";

export default function DetailSong() {
  const { song } = useContext(Songs);
  return (
    <div className="md:col-span-1 text-left p-3 block sticky top-[0] bg-slate-700">
      <div className="flex sm:block justify-between">
        <h2 className="text-cyan-500 font-bold ">Now Playing</h2>
        <h2 className="text-gray-500 text-2xl">{song.name}</h2>

        <div className="max-w-[240px] m-auto mt-5 sm:block hidden">
          <img
            className="lg:max-w-[210px] max-w-[120px]"
            src={song.links.images[0].url}
            alt="avatar"
          ></img>
        </div>
      </div>
      <div>
        <div className="flex items-center justify-evenly sm:mt-10 mt-2">
          <img
            className="w-[70px] rounded-full img-mini"
            src={song.links.images[1].url}
            alt="avatar"
          ></img>
          <span className="text-xl text-white">{song.author}</span>
        </div>
      </div>
    </div>
  );
}
