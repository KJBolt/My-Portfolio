import React, {useEffect} from 'react';
import Navbar from './Navbar';
import Image from '../assets/bolt.png';
import { Fireworks } from 'fireworks-js';
import { ImLinkedin } from "react-icons/im";
import { FaGithub } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import { FaTelegramPlane } from "react-icons/fa";
import { motion} from 'framer-motion';

const containerVariants = {
    initial: {},
    animate: {
        staggerChildren: 0.1
    }
        
}

const imageVariants = {
    initial:{
        scale: 0.5,
        opacity: 0
    },
    animate: {
        scale: 1,
        opacity: 1,
        transition: {
            duration: 1,
            stiffness: 50
        }
    }
}

const textVariants = {
    initial:{
        x: -80,
        opacity: 0
    },
    animate: {
        x: 0,
        opacity: 1,
        transition: {
            duration: 1,
            stiffness: 50,
            delay: 0.3
        }
    }
}

const linksVariants = {
    initial:{
        x: 30,
        opacity: 0
    },
    animate: {
        x: 0,
        opacity: 1,
        transition: {
            type: "spring",
            bounce: 0.4,
            duration: 1,
            stiffness: 50,
            delay: 0.5
        }
    }
}



function HeroSection() {
    // When the component is mounted start fireworks
    useEffect(() => {
        const container = document.querySelector('.fireworks')
        const fireworks = new Fireworks(container, { /* options */ })
        fireworks.start()
    }, [])
    
  return (
    <div className='hero lg:h-[700px] h-auto relative overflow-x-hidden'>
        <Navbar />

        {/* Fireworks container */}
        <div className='fireworks absolute top-0 left-0 w-[100%] h-[600px] z-0 overflow-hidden pointer-events-none'></div>

        {/* Social Media Links */}
        <motion.div variants={linksVariants} initial='initial' animate='animate' className='absolute lg:flex  right-0 h-[600px] w-[70px] z-20 hidden flex-col justify-center'>
            <div className='bg-[#f0c020] h-auto rounded-tl-md rounded-bl-md flex flex-col justify-center items-center py-8'>
                <a href="https://www.linkedin.com/in/kenneth-rockson-35956119b/" target="_blank" rel="noopener noreferrer" className='mb-8'>
                    <ImLinkedin className='text-4xl hover:text-5xl transition-all ease-in-out' />
                </a>
                <a href="https://github.com/KJBolt" target="_blank" rel="noopener noreferrer" className='mb-8'>
                    <FaGithub className='text-4xl hover:text-5xl transition-all ease-in-out' />
                </a>
                <a href="https://api.whatsapp.com/send?phone=233265896378&text=Let%27s%20connect." target="_blank" rel="noopener noreferrer" className='mb-8'>
                    <FaWhatsapp className='text-4xl hover:text-5xl transition-all ease-in-out' />
                </a>
                <a href="https://t.me/KennethRockson" target="_blank" rel="noopener noreferrer">
                    <FaTelegramPlane className='text-4xl hover:text-5xl transition-all ease-in-out' />
                </a>
            </div>
        </motion.div>


        {/* Main Content */}
        <motion.div variants={containerVariants} initial='initial' animate='animate' className=" h-auto lg:h-[600px] w-[100%] flex flex-col lg:flex-row z-10 overflow-hidden">
            <motion.div variants={imageVariants} className='flex flex-col lg:w-[30%] w-[100%] lg:items-end sm:items-start items-center justify-center pt-16 lg:pt-0 px-10'>
                <img className='rounded-full h-[200px] w-[200px]  ' src={Image} alt="Profile" />
            </motion.div>
            <div className='h-[100%] flex flex-col md:items-start items-center justify-center lg:w-[70%] pt-10 md:pt-0 w-[100%] pb-16 lg:pb-0'>
                <div className='px-10 flex flex-col justify-center w-fit'>
                    <motion.div variants={textVariants} className="bg-[#f0bf2034] w-fit p-2 rounded-md mb-4">
                        <p className='text-[#eeeeec] font-sans capitalize'><span>✌🏻</span> Hi there! I'm Kenneth Rockson</p>
                    </motion.div>
                    <motion.div variants={textVariants} className='mb-5'>
                        <p className='text-[#eeeeec] text-3xl md:text-5xl mb-2 leading-[50px] md:leading-none'><span className='text-[#f0c020] text-5xl md:text-7xl font-bold'>Frontend Developer</span> </p>
                        <p className='text-[#eeeeec] text-lg font-sans md:w-[85%] w-[100%] sm:line-clamp-none'>Who enjoys crafting visually appealing interfaces that captivate users.</p>
                    </motion.div>
                    <motion.div variants={textVariants}>
                        <div>
                        <a href="https://www.linkedin.com/in/kenneth-rockson-35956119b/" target="_blank" rel="noopener noreferrer" class="
                            group
                            p-5
                            relative  
                            text-xl 
                            font-normal 
                            border-0 
                            flex 
                            items-center 
                            justify-center
                            bg-transparent
                            text-[#f0c020] 
                            h-auto  
                            w-[170px]  
                            overflow-hidden   
                            transition-all
                            duration-100">
                            <span class="
                                group-hover:w-full
                                absolute 
                                left-0 
                                h-full 
                                w-5 
                                border-y
                                border-l
                                border-[#f0c020]
                                transition-all
                                duration-500"
                            >
                            </span>

                            <p class="group-hover:opacity-0 group-hover:translate-x-[-100%] absolute translate-x-0 transition-all
                            duration-200">Download CV</p>

                            <span class="group-hover:translate-x-0  group-hover:opacity-100 absolute  translate-x-full opacity-0  transition-all duration-200">Message me
                            </span>

                            <span
                                class="group-hover:w-full absolute right-0 h-full w-5  border-y border-r  border-[#f0c020] transition-all duration-500">
                            </span>
                        </a>
                        </div>
                    </motion.div>
                    
                </div>
            </div>
        </motion.div>

    </div>
  )
}

export default HeroSection