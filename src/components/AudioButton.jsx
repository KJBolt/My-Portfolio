import React, { useState } from 'react';
import { Bars } from "react-loader-spinner";
import useSound from 'use-sound';
import { FaMusic } from "react-icons/fa";

// Import your song
import song from '../assets/song2.mp3'; 

function AudioButton() {
  // Initialize the useSound hook, adding an onend callback for looping the song
  const [play, { pause }] = useSound(song, {
    interrupt: true,
    volume: 0.5,
    loop: true
    // onend: () => {
    //   // Loop the song by playing it again when it ends
    //   songEnded();
    // }
  });
  
  const [isPlaying, setIsPlaying] = useState(false); // Manage play/pause state

  // Toggle play/pause functionality manually using the FAB button
  const togglePlayPause = () => {
    if (isPlaying) {
      pause(); // Pause the song
      setIsPlaying(false); // Update state to paused
    } else {
      play(); // Play the song
      setIsPlaying(true); // Update state to playing
    }
  };



  return (
    <div className='bg-[#ffd317] rounded-full fixed right-5 bottom-10 p-5 cursor-pointer z-40' onClick={togglePlayPause}>
      {isPlaying ? (
        <Bars height="24" width="24" color="black" /> // Show a loading spinner while playing
      ) : (
        <FaMusic className='text-2xl' /> // Show play icon when stopped or paused
      )}
    </div>
  );
}

export default AudioButton;
