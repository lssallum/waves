import styled from "styled-components"
// import PropTypes from "prop-types";
import { useContext } from "react";
import { LibraryContext } from "../contexts/LibraryContext";

const SongContainer = styled.div`
  min-height: 60vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  img {
    width: 20%;
    border-radius: 50%;
    /* offset-x | offset-y | blur-radius | spread-radius | color */
    box-shadow: 0 0 10rem 2rem rgba(0, 0, 0, 0.3);
  }
  h2{
   padding: 3rem 1rem 1rem 1rem ;
  }
  h3{
    font-size: 1rem;
  }
`


const Song = () => {
  const { currentSong } = useContext(LibraryContext)

  return (
    <SongContainer>
        <img src={currentSong.cover} alt={currentSong.name} />
        <h2>{currentSong.name}</h2>
        <h3>{currentSong.artist}</h3>
    </SongContainer>
  )
}

export default Song