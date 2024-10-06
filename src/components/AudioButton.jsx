import React, { useState } from 'react';
import { Bars } from "react-loader-spinner";
import useSound from 'use-sound';
import { FaMusic } from "react-icons/fa";
import {motion} from 'framer-motion';

// Import your song
import song from '../assets/AC.mp3'; 



const musicVariants = {
  initial:{
      y: 50,
      opacity: 0
  },
  animate: {
      y: 0,
      opacity: 1,
      transition: {
          duration: 1,
          stiffness: 50,
          delay: 0.6
      }
  }
}



function AudioButton() {
  // Initialize the useSound hook, adding an onend callback for looping the song
  const [play, { pause }] = useSound(song, {
    interrupt: true,
    volume: 0.4,
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
    <motion.div variants={musicVariants} initial='initial' animate='animate' className='bg-[#ffd317] rounded-full fixed right-5 bottom-10 p-5 cursor-pointer z-40' onClick={togglePlayPause}>
      {isPlaying ? (
        <Bars height="24" width="24" color="black" /> // Show a loading spinner while playing
      ) : (
        <FaMusic className='text-2xl' /> // Show play icon when stopped or paused
      )}
    </motion.div>
  );
}

export default AudioButton;
