import styled from "styled-components";
import LibrarySong from "./LibrarySong";
import { useContext } from "react";
import { LibraryContext } from "../contexts/LibraryContext";

const LibContainer = styled.div`
  position: fixed;
  inset: 0;
  width: 20rem;
  height: 100%;
  box-shadow: 2px 2px 50px gray;
  overflow: auto;
  transform: translateX(-100%);
  transition: all 0.5s ease;
  opacity: 0;

  h2 {
    padding: 2rem 2rem 0.5rem 2rem;
  }

  &.active-library {
    transform: translateX(0%);
    opacity: 1;
  }
`;

const Library = () => {
  const {
    songs,
    setCurrentSong,
    audioRef,
    isPlaying,
    currentSong,
    libraryStatus,
  } = useContext(LibraryContext);
  return (
    <LibContainer className={libraryStatus === true ? "active-library" : ""}>
      <h2>Library</h2>
      {songs.map((song) => (
        <LibrarySong
          key={song.id}
          setCurrentSong={setCurrentSong}
          songs={songs}
          song={song}
          audioRef={audioRef}
          isPlaying={isPlaying}
          currentSong={currentSong}
        />
      ))}
    </LibContainer>
  );
};

export default Library;
