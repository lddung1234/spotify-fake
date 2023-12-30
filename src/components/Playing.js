import React, { useContext } from "react";
import AudioPlayer from "react-h5-audio-player";
import { Songs } from "../Context";
export default function Playing() {
  const { song, hundlesetSong } = useContext(Songs);
  const hundleClickNext = () => {
    hundlesetSong(song.id + 1);
  };
  const hundleClickPre = () => {
    hundlesetSong(song.id - 1);
  };
  return (
    <div>
      <AudioPlayer
        className="player-music"
        src={song.url}
        showSkipControls={true}
        showJumpControls={false}
        onClickNext={hundleClickNext}
        onClickPrevious={hundleClickPre}
      />
    </div>
  );
}
