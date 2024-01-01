import React, { useContext, useEffect, useState } from "react";
import { Songs } from "../Context";

export default function ListSongs() {
  const { DataSongs, hundlesetSong, song } = useContext(Songs);
  const [idSong, setidSong] = useState(0);
  const handlePlaySong = (idSong) => {
    setidSong(idSong);
    hundlesetSong(idSong);
  };
  useEffect(() => {
    setidSong(song.id);
  }, [song]);
  return (
    <div className="md:col-span-2 overflow-y-scroll col-span-1" id="style-2">
      <table className="table-auto w-full force-overflow">
        <thead>
          <tr className="text-white h-12">
            <th className="w-[10%]">#</th>
            <th className="text-left ">Title</th>
            <th className="sm:max-w-[10%] max-w-[10px]">Author</th>
            <th className="w-[10%]">
              <i className="fa fa-download"></i>
            </th>
          </tr>
        </thead>
        <tbody className="overflow-hidden ove">
          {DataSongs.map((song, index) => (
            <tr
              key={index}
              className={` bg-slate-800 text-white h-12 hover:bg-gray-900 
              ${idSong === song.id && "bg-gray-900 text-teal-400"} `}
              onClick={() => handlePlaySong(song.id)}
            >
              <td className="text-center">{index + 1}</td>
              <td className="text-left">{song.name}</td>
              <td className="text-center ">{song.author}</td>
              <td className="text-center">
                <a href={song.url} className="">
                  <i className="fa fa-download"></i>
                </a>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
