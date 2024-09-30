import React from 'react'
import Html from '../assets/Html.svg'
import Css from '../assets/Css.svg'
import Javascript from '../assets/Javascript.svg'
import ReactImage from '../assets/React.svg'
import Nextjs from '../assets/Nextjs.svg'
import Vuejs from '../assets/Vuejs.svg'
import MaterialUI from '../assets/materialUI.svg'
import Bootstrap from '../assets/Bootstrap.svg'
import Tailwind from '../assets/Tailwind.svg'
import Sass from '../assets/Sass.svg'
import Nodejs from '../assets/Nodejs.svg'
import Expressjs from '../assets/Expressjs.svg'
import Mongodb from '../assets/Mongodb1.svg'
import Mysql from '../assets/Mysql.svg'
import Flutter from '../assets/Flutter.svg'
import Ionic from '../assets/Ionic.svg'

function SkillsSection() {
  return (
    <div className='xl:h-screen h-auto mx-auto max-w-7xl grid md:grid-cols-2 z-10'>
        <div className='flex flex-col justify-center items-center px-10 xl:pt-0 pt-20'>
          <div>
            <h5 className='text-[#ffd317] text-[23px] font-semibold mb-2 md:mb-0'>Mission</h5>
            <h3 className='text-[#eeeeec] text-[46px] font-bold mb-5 md:leading-none leading-[50px]'>Serving you great time</h3>
            <p className='text-[#eeeeec] text-lg font-sans w-[100%] sm:line-clamp-none mb-8'>
              My mission is to empower businesses by transforming innovative ideas into robust, high-quality software solutions.
              Am committed to providing top-notch development services that deliver exceptional user experiences.
              The satisfaction of clients is my top priority, and strive to bring their vision to life with every line of code.
            </p>

            <p className='text-[#eeeeec] text-lg font-sans w-[100%] sm:line-clamp-none'>As we continue to evolve, my goal remains the same — to create impactful digital solutions that drive long-term success.</p>
          </div>
        </div>

        <div className='flex flex-col justify-center items-center px-10 xl:pt-0 pt-20 xl:pb-0 pb-32'>
          <div>
            <h5 className='text-[#ffd317] text-[23px] font-semibold mb-5'>My Skills</h5>

            <h5 className='text-[#eeeeec] text-[23px] font-semibold mb-3'>FrontEnd</h5>
            <div className='flex flex-wrap items-center gap-4'>
              <img src={Html} alt="Html" className='h-[40px] w-[40px]' />
              <img src={Css} alt="Css" className='h-[40px] w-[40px]' />
              <img src={MaterialUI} alt="MUI" className='h-[40px] w-[40px]' />
              <img src={Bootstrap} alt="Bootstrap" className='h-[40px] w-[40px]' />
              <img src={Tailwind} alt="Tailwind" className='h-[40px] w-[40px]' />
              <img src={Javascript} alt="Javascript" className='h-[40px] w-[40px]' />
              <img src={ReactImage} alt="Reactjs" className='h-[40px] w-[40px]' />
              <img src={Nextjs} alt="Nestjs" className='h-[40px] w-[40px]' />
              <img src={Vuejs} alt="Vuejs" className='h-[40px] w-[40px]' />
              <img src={Sass} alt="Sass" className='h-[40px] w-[40px]' />
            </div>

            <h5 className='text-[#eeeeec] text-[23px] font-semibold mt-10 mb-3'>Backend</h5>
            <div className='flex flex-wrap items-center gap-4'>
              <img src={Nodejs} alt="Nodejs" className='h-[40px] w-[40px]' />
              <img src={Expressjs} alt="Expressjs" className='h-[40px] w-[40px]' />
              <img src={Mongodb} alt="Mongodb" className='h-[40px] w-[40px]' />
              <img src={Mysql} alt="Mysql" className='h-[40px] w-[40px]' />
            </div>

            <h5 className='text-[#eeeeec] text-[23px] font-semibold mt-10 mb-3'>Mobile App</h5>
            <div className='flex flex-wrap items-center gap-4'>
              <img src={Flutter} alt="Flutter" className='h-[40px] w-[40px]' />
              <img src={Ionic} alt="Ionic" className='h-[40px] w-[40px]' />
            </div>


          </div>
        </div>
    </div>
  )
}

export default SkillsSection