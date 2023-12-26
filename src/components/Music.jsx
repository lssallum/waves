import { useContext } from "react"
import { LibraryContext } from "../contexts/LibraryContext"

export default function Music(){
    const { timeUpdateHandler, currentSong, audioRef } = useContext(LibraryContext)
    return(
        <audio
        onTimeUpdate={timeUpdateHandler}
        onLoadedMetadata={timeUpdateHandler}
        ref={audioRef}
        src={currentSong.audio}
      ></audio>
    )
}