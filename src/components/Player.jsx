import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPlay,
  faPause,
  faAngleLeft,
  faAngleRight,
} from "@fortawesome/free-solid-svg-icons";
import { useContext } from "react";
import { LibraryContext } from "../contexts/LibraryContext";

const PlayerContainer = styled.div`
  min-height: 20vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
`;
const TimeControl = styled.div`
  width: 50%;
  display: flex;

  input {
    width: 100%;
    padding: 1rem 0rem;
  }
  p {
    padding: 1rem;
  }
`;
const PlayControl = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  width: 30%;

  svg {
    cursor: pointer;
  }
`;
const FontAwesomeIconStyled = styled(FontAwesomeIcon)`
  color: rgb(70, 70, 70);
  &:hover {
    color: rgb(100 100 100);
  }
`;

const Player = () => {

const {
  isPlaying,
  setIsPlaying,
  audioRef,
  songInfo,
  setSongInfo,
  songs,
  currentSong,
  setCurrentSong,
} = useContext(LibraryContext)

  const playSongHandler = () => {
    if (isPlaying) {
      audioRef.current.pause();
      setIsPlaying(!isPlaying);
    } else {
      audioRef.current.play();
      setIsPlaying(!isPlaying);
    }
  };

  const getTime = (time) => {
    return (
      Math.floor(time / 60) + ":" + ("0" + Math.floor(time % 60)).slice(-2)
    );
  };

  const dragHandler = (e) => {
    audioRef.current.currentTime = e.target.value;
    setSongInfo({ ...songInfo, currentTime: e.target.value });
  };

  const playSong = () => {
      const playPromise = audioRef.current.play();
      if(playPromise !== undefined){
        playPromise.then((audio) => {
          audioRef.current.play(audio)
        })
      }
  }

  const skipTrackHandler = (direction) => {
    const index = songs.findIndex((song) => song.id === currentSong.id);
    const lastIndex = songs.length - 1;
    if(direction === 'skip-foward'){
      setCurrentSong(songs[(index + 1) % songs.length])
      if(isPlaying) playSong();
    } else {
      setCurrentSong(songs[index === 0 ? lastIndex : index - 1])   
      if(isPlaying) playSong();
    }  
  };

  return (
    <PlayerContainer>
      <TimeControl>
        <p>{getTime(songInfo.currentTime)}</p>
        <input
          min={0}
          max={songInfo.duration || 0}
          value={songInfo.currentTime}
          onChange={dragHandler}
          type="range"
          name="range"
          id="range"
        />
        <p>{getTime(songInfo.duration)}</p>
      </TimeControl>
      <PlayControl>
        <FontAwesomeIconStyled
          onClick={() => skipTrackHandler("skip-backward")}
          icon={faAngleLeft}
          size="2x"
        />
        <FontAwesomeIconStyled
          onClick={playSongHandler}
          icon={isPlaying ? faPause : faPlay}
          size="2x"
        />
        <FontAwesomeIconStyled
          onClick={() => skipTrackHandler("skip-foward")}
          icon={faAngleRight}
          size="2x"
        />
      </PlayControl>
    </PlayerContainer>
  );
};

export default Player;
