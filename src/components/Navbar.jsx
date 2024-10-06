import React from 'react';
import '../styles/humburger.css';
import { FaHeart } from "react-icons/fa";
import {motion} from 'framer-motion';

const nameLogoVariants = {
  initial:{
      y: -50,
      opacity: 0
  },
  animate: {
      y: 0,
      opacity: 1,
      transition: {
          duration: 1,
          stiffness: 50
      }
  }
}

const rightVariants = {
  initial:{
      y: -50,
      opacity: 0
  },
  animate: {
      y: 0,
      opacity: 1,
      transition: {
          duration: 1,
          stiffness: 50,
          delay: 0.4
      }
  }
}


function Navbar() {
  return (
    <div className='sticky top-0 bg-[#000000d3] z-50 w-[100%]'>
      <div className='flex items-center justify-between py-5 px-5 sm:px-10 md:px-20 relative'>
        <motion.div variants={nameLogoVariants} initial='initial' animate='animate' className='text-[#eeeeec] md:text-2xl sm:text-xl text-lg'>Kenneth Rockson</motion.div>
        {/* <img src={Logo} className='h-[80px] w-[100px] object-cover' alt="Logo" /> */}
        <motion.p variants={rightVariants} initial='initial' animate='animate' className='text-[#eeeeec] font-sans flex gap-3 items-center'>Made with <span><FaHeart className='text-2xl text-[#ffd317] animate-ping'/> </span></motion.p>
      </div>
    </div>
  )
}

export default Navbar