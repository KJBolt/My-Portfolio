import React, {useEffect} from 'react';
import Navbar from './Navbar';
import Image from '../assets/bolt.png';
import { Fireworks } from 'fireworks-js';
import { ImLinkedin } from "react-icons/im";
import { FaGithub } from "react-icons/fa";



function HeroSection() {
    // When the component is mounted start fireworks
    useEffect(() => {
        const container = document.querySelector('.fireworks')
        const fireworks = new Fireworks(container, { /* options */ })
        fireworks.start()
    }, [])
    
  return (
    <div className='hero lg:h-screen h-auto relative'>
        <Navbar />

        {/* Fireworks container */}
        <div className='fireworks absolute top-0 left-0 w-[100%] h-[600px] z-0 overflow-hidden pointer-events-none'></div>

        {/* Social Media Links */}
        <div className='absolute lg:flex  right-0 h-[600px] w-[70px] z-20 hidden flex-col justify-center'>
            <div className='bg-[#f0c020] h-[250px] rounded-tl-md rounded-bl-md flex flex-col justify-center items-center'>
                <a href="https://www.linkedin.com/in/kenneth-rockson-35956119b/" className='mb-8'>
                    <ImLinkedin className='text-4xl hover:text-5xl transition-all ease-in-out' />
                </a>
                <a href="https://github.com/KJBolt" className='mb-8'>
                    <FaGithub className='text-4xl hover:text-5xl transition-all ease-in-out' />
                </a>
            </div>
        </div>


        {/* Main Content */}
        <div className=" h-auto lg:h-[600px] w-[100%] border-blue-500 flex flex-col lg:flex-row z-10 overflow-hidden">
            <div className='flex flex-col lg:w-[30%] w-[100%] lg:items-end sm:items-start items-center justify-center pt-16 lg:pt-0 px-10'>
                <img className='rounded-full h-[200px] w-[200px] animate-bounce' src={Image} alt="Image" />
            </div>
            <div className='h-[100%] flex flex-col items-center justify-center lg:w-[70%] pt-10 md:pt-0 w-[100%] pb-16 lg:pb-0 '>
                <div className='px-10 flex flex-col justify-center w-fit'>
                    <div className="bg-[#f0bf2034] w-fit p-2 rounded-md mb-4">
                        <p className='text-[#eeeeec] font-sans capitalize'><span>✌🏻</span> Hi there! I'm Kenneth Rockson</p>
                    </div>
                    <div className='mb-5'>
                        <p className='text-[#eeeeec] text-3xl md:text-5xl mb-2'><span className='text-[#f0c020] text-5xl md:text-7xl font-bold'>Frontend Developer</span> </p>
                        <p className='text-[#eeeeec] text-lg font-sans md:w-[60%] w-[100%] sm:line-clamp-none line-clamp-2'>Driven by a passion for assisting clients and startups in realizing their dreams  through innovative web and mobile solutions.</p>
                    </div>
                    <div>
                        <a className='' href={require('../assets/CV.docx')} download>
                            <div className='w-fit text-black text-lg py-3 px-10 rounded-md cursor-pointer bg-[#f0c020]'>
                            Download CV
                            </div>
                        </a>
                    </div>
                    
                </div>
            </div>
        </div>

    </div>
  )
}

export default HeroSection