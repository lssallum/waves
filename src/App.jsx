import { LibraryContextProvider } from "./contexts/LibraryContext";

import Nav from "./components/Nav";
import Song from "./components/Song";
import Player from "./components/Player";
import Music from "./components/Music";
import Library from "./components/Library";

export default function App(){
  
 return(
   <LibraryContextProvider>
    <Nav />
    <Library />
    <Song />
    <Player />
    <Music />
   </LibraryContextProvider>
 )
}

