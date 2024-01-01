import "./App.css";
import Navbar from "./components/Navbar";
import DetailSong from "./components/DetailSong";
import ListSongs from "./components/ListSongs";
import { Songs } from "./Context";
import DataSongs from "./data/songs.json";
import Playing from "./components/Playing";
import { useState } from "react";
function App() {
  const [song, setSong] = useState(DataSongs[0]);
  const hundlesetSong = (idSong) => {
    const song = DataSongs.find((song) => song.id === idSong);
    if (!song) {
      setSong(DataSongs[0]);
    } else {
      setSong(song);
    }
  };
  return (
    <div className="App">
      <Songs.Provider value={{ DataSongs, song, hundlesetSong }}>
        <Navbar />
        <div className="lg:grid grid-cols-3 bg-slate-700 h-screen-navbar-player sm:overflow-hidden overflow-y-scroll">
          {/* space 1 */}
          <DetailSong />
          {/* space 2 */}
          <ListSongs />
        </div>
        <Playing />
      </Songs.Provider>
    </div>
  );
}

export default App;
