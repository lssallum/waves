import { createContext, useState, useRef } from "react";
import PropTypes from "prop-types";
import chillHop from "../data/data";

export const LibraryContext = createContext({});

export function LibraryContextProvider({ children }) {
    LibraryContextProvider.propTypes = { children: PropTypes.object, }

  const [songs, setSongs] = useState(chillHop());
  const [currentSong, setCurrentSong] = useState(songs[0]);
  const [isPlaying, setIsPlaying] = useState(false);
  const [songInfo, setSongInfo] = useState({
    currentTime: 0,
    duration: 0,
  });
  const [libraryStatus, setLibraryStatus] = useState(false);

  const audioRef = useRef(null);

  const timeUpdateHandler = (e) => {
    const currentTime = e.target.currentTime;
    const duration = e.target.duration;
    setSongInfo({ ...songInfo, currentTime, duration });
  };

  const libChildren = {
    songs,
    setSongs,
    currentSong,
    setCurrentSong,
    isPlaying,
    setIsPlaying,
    songInfo,
    setSongInfo,
    libraryStatus,
    setLibraryStatus,
    audioRef,
    timeUpdateHandler,
  };

  return (
    <LibraryContext.Provider value={libChildren}>
      {children}
    </LibraryContext.Provider>
  );
}
