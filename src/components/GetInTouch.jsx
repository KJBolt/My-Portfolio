import React from 'react';
import { FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import Contact from '../assets/contact.jpg'

function GetInTouch() {
  return (
    <div className='h-auto w-[100%]'>
      <div className='flex justify-center'>
        <div className='w-fit'>
            <h5 className='text-[#ffd317] text-[23px] font-semibold text-center'>Contact</h5>
            <h3 className='text-[#eeeeec] text-[46px] font-bold mb-3 text-center'>Lets Connect</h3>
        </div>
      </div>

      
      
      <div className='h-auto flex-col flex md:flex-row justify-center md:col p-10 w-[100%] overflow-x-hidden'>
        {/* Image */}
        <div data-aos="flip-left" className='h-[450px] flex flex-col justify-center items-center mb-5'>
          <div className='h-[100%] rounded-md overflow-hidden'>
            <img src={Contact} alt="ContactImage" className='h-[100%] object-cover' />
          </div>
        </div>

        {/* Content */}
        <div data-aos="fade-right" data-aos-delay="200" className='flex flex-col items-start font-medium px-10 py-10 w-[100%] md:w-[40%]'>
          <h5 className='text-[#eeeeec] text-2xl font-normal text-left mb-3'><span className='text-[#ffd317]'>Reach Out</span> to Me</h5>
          <p className='text-[#eeeeec] font-sans font-light lg:w-[60%] w-[100%] mb-5'>Let's build something amazing together! Connect with me to discuss ideas, projects, or just say hello!</p>

          <p className='text-[#eeeeec] text-xl font-normal font-sans mb-3'>Lets have a discussion</p>
          <div className='flex flex-col gap-2'>
            <div className='flex items-center gap-3'>
              <FaPhoneAlt className='text-2xl text-[#ffd317]' />
              <p className='text-[#eeeeec] font-sans font-light'>+233 50 991 2663 |  +233 53 512 7329</p>

            </div>
            <div className='flex items-center gap-3'>
              <MdEmail className='text-2xl text-[#ffd317]' />
              <p className='text-[#eeeeec] font-sans font-light'>kennethrockson026@gmail.com</p>
            </div>
          </div>
        </div>
        
      </div>
    </div>
  )
}

export default GetInTouch