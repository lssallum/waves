import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMusic } from "@fortawesome/free-solid-svg-icons";
import { useContext } from "react";
import { LibraryContext } from "../contexts/LibraryContext";

const NavBar = styled.nav`
    min-height: 10vh;
    display: flex;
    justify-content: space-around;
    align-items: center;
    button{
        background: transparent;
        border: none;
        cursor: pointer;
        border: 2px solid rgb(65 65 65);
        padding: 0.5rem;
        transition: all 0.3s ease;
        &:hover{
            background: rgb(65 65 65);
            color: #FFF;
        }
    }
`;

const Nav = () => {
  const { libraryStatus, setLibraryStatus } = useContext(LibraryContext)
  return(
    <NavBar>
        <h1>Waves</h1>
        <button onClick={() => setLibraryStatus(!libraryStatus)}>
            Library 
            <FontAwesomeIcon icon={faMusic} />
        </button>
    </NavBar>
  )
};

export default Nav;
