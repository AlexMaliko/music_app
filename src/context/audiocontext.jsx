import { createContext, useState } from "react";
import tracksList from "../assets/tracksList";
const defaultTrack = tracksList[0];

const audio = new Audio(defaultTrack.src);
export const AudioContext = createContext({});

const AudioProvider = ({ children }) => {
  const [currentTrack, setCurrentTrack] = useState(defaultTrack);
  const [isPlaying, setisPlaying] = useState(false);

  const handleToggleAudio = (track) => {
    if (currentTrack.id !== track.id) {
      setCurrentTrack(track);
      setisPlaying(true);
      audio.src = track.src;
      audio.currentTime = 0;
      audio.play();
      return;
    }
    if (isPlaying) {
      audio.pause();
      setisPlaying(false);
    } else {
      audio.play();
      setisPlaying(true);
    }
  };

  const value = { audio, currentTrack, isPlaying, handleToggleAudio };
  return (
    <AudioContext.Provider value={value}>{children}</AudioContext.Provider>
  );
};
export default AudioProvider;
