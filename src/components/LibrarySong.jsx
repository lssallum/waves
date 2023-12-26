import PropTypes from "prop-types"
import styled from "styled-components";

const LibSongs = styled.div`
  display: flex;
  align-items: center;
  padding: 1rem 2rem 1rem 2rem;
  cursor: pointer;
  background: #FFF;
  transition-property: background;
  transition-duration: 300ms;
  transition-timing-function: ease-in-out;

  img {
    width: 30%;
  }
  div {
    padding-left: 1rem;
    h3 {
      font-size: 1rem;
    }
    h4 {
      font-size: 0.7rem;
    }
  }
  &:hover {
    background: rgb(231, 251, 255);
  }
  &.selected{
    background: rgb(183,239,250);
    background: linear-gradient(90deg, rgba(183,239,250,1) 0%, rgba(126,207,223,1) 100%);
  }
`;

const LibrarySong = ({ song, setCurrentSong, audioRef, isPlaying, currentSong }) => {
  LibrarySong.propTypes = {
    song: PropTypes.object,
    setCurrentSong: PropTypes.func,
    audioRef: PropTypes.object,
    isPlaying: PropTypes.func,
    currentSong: PropTypes.array,
  }

  const songSelectHandler = () => {
    setCurrentSong(song);
    if(isPlaying){
      const playPromise = audioRef.current.play();
      if(playPromise !== undefined){
        playPromise.then((audio) => {
          audioRef.current.play(audio)
        })
      }
    }
  };

  return (
    <LibSongs className={song === currentSong ? "selected" : ""} onClick={songSelectHandler}>
      <img src={song.cover} alt={song.name} />
      <div>
        <h3>{song.name}</h3>
        <h4>{song.artist}</h4>
      </div>
    </LibSongs>
  );
};

export default LibrarySong;
