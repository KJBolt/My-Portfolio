import React, { useState } from 'react';
import '../styles/humburger.css';
import { FaHeart } from "react-icons/fa";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className='sticky top-0 bg-[#000000d3] z-40'>
      <div className='flex items-center justify-between py-5 px-10 md:px-20 relative'>
        <div className='text-[#eeeeec] md:text-2xl text-xl'>Kenneth Rockson</div>
        <p className='text-[#eeeeec] font-sans flex gap-3 items-center'>Made with <span><FaHeart className='text-2xl text-[#ffd317] animate-ping'/> </span></p>
      </div>
      {/* <div className='absolute top-16 right-0 w-[400px] h-[600px] bg-white z-30'>

      </div> */}
    </div>
  )
}

export default Navbar