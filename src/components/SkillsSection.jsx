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
import Jwt from '../assets/Jwt.svg'
import Git from '../assets/Git.svg'
import VsCode from '../assets/VsCode.svg'
import Figma from '../assets/Figma.svg'
import Redux from '../assets/Redux.svg'
import Postman from '../assets/Postman.svg'
import Firebase from '../assets/Firebase.svg'

import { Tooltip } from 'react-tooltip'

function SkillsSection() {
  return (
    <div className='xl:h-screen h-auto mx-auto max-w-7xl grid md:grid-cols-2 z-10'>
      {/* Left Section */}
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

        {/* Right Section */}
        <div className='flex flex-col justify-center items-center px-10 xl:pt-0 pt-20 xl:pb-0 pb-32'>
          <div>
            <h5 className='text-[#ffd317] text-[23px] font-semibold mb-5'>My Skills</h5>

            <h5 className='text-[#eeeeec] text-[23px] font-semibold mb-3'>FrontEnd</h5>
            <div className='flex flex-wrap items-center gap-4'>
              <Tooltip id="Html" />
              <img data-tooltip-id="Html" data-tooltip-content="Html" src={Html} alt="Html" className='h-[40px] w-[40px]' />

              <Tooltip id="Css" />
              <img data-tooltip-id="Css" data-tooltip-content="Css" src={Css} alt="Css" className='h-[40px] w-[40px]' />

              <Tooltip id="MaterialUI" />
              <img data-tooltip-id="MaterialUI" data-tooltip-content="Material UI" src={MaterialUI} alt="MUI" className='h-[40px] w-[40px]' />

              <Tooltip id="Bootstrap" />
              <img data-tooltip-id="Bootstrap" data-tooltip-content="Bootstrap" src={Bootstrap} alt="Bootstrap" className='h-[40px] w-[40px]' />

              <Tooltip id="Tailwind" />
              <img data-tooltip-id="Tailwind" data-tooltip-content="Tailwind Css" src={Tailwind} alt="Tailwind" className='h-[40px] w-[40px]' />

              <Tooltip id="Javascript" />
              <img data-tooltip-id="Javascript" data-tooltip-content="Javascript" src={Javascript} alt="Javascript" className='h-[40px] w-[40px]' />

              <Tooltip id="Reactjs" />
              <img data-tooltip-id="Reactjs" data-tooltip-content="Reactjs" src={ReactImage} alt="Reactjs" className='h-[40px] w-[40px]' />

              <Tooltip id="Nextjs" />
              <img data-tooltip-id="Nextjs" data-tooltip-content="Nextjs" src={Nextjs} alt="Nextjs" className='h-[40px] w-[40px]' />

              <Tooltip id="Vuejs" />
              <img data-tooltip-id="Vuejs" data-tooltip-content="Vuejs" src={Vuejs} alt="Vuejs" className='h-[40px] w-[40px]' />

              <Tooltip id="Sass" />
              <img data-tooltip-id="Sass" data-tooltip-content="Sass" src={Sass} alt="Sass" className='h-[40px] w-[40px]' />
            </div>

            <h5 className='text-[#eeeeec] text-[23px] font-semibold mt-10 mb-3'>Backend & Tools</h5>
            <div className='flex flex-wrap items-center gap-4'>
              <Tooltip id="Nodejs" />
              <img data-tooltip-id="Nodejs" data-tooltip-content="Nodejs" src={Nodejs} alt="Nodejs" className='h-[40px] w-[40px]' />

              <Tooltip id="Expressjs" />
              <img data-tooltip-id="Expressjs" data-tooltip-content="Expressjs" src={Expressjs} alt="Expressjs" className='h-[40px] w-[40px]' />

              <Tooltip id="Mongodb" />
              <img data-tooltip-id="Mongodb" data-tooltip-content="Mongodb" src={Mongodb} alt="Mongodb" className='h-[40px] w-[40px]' />

              <Tooltip id="Mysql" />
              <img data-tooltip-id="Mysql" data-tooltip-content="Mysql" src={Mysql} alt="Mysql" className='h-[40px] w-[40px]' />

              <Tooltip id="Git" />
              <img data-tooltip-id="Git" data-tooltip-content="Git" src={Git} alt="Git" className='h-[40px] w-[40px]' />

              <Tooltip id="Jwt" />
              <img data-tooltip-id="Jwt" data-tooltip-content="Jwt" src={Jwt} alt="Jwt" className='h-[40px] w-[40px]' />

              <Tooltip id="Redux" />
              <img data-tooltip-id="Redux" data-tooltip-content="Redux" src={Redux} alt="Redux" className='h-[40px] w-[40px]' />

              <Tooltip id="Postman" />
              <img data-tooltip-id="Postman" data-tooltip-content="Postman" src={Postman} alt="Postman" className='h-[40px] w-[40px]' />

              <Tooltip id="Firebase" />
              <img data-tooltip-id="Firebase" data-tooltip-content="Firebase" src={Firebase} alt="Firebase" className='h-[40px] w-[40px]' />

              <Tooltip id="VsCode" />
              <img data-tooltip-id="VsCode" data-tooltip-content="Vs Code" src={VsCode} alt="VsCode" className='h-[40px] w-[40px]' />

              <Tooltip id="Figma" />
              <img data-tooltip-id="Figma" data-tooltip-content="Figma" src={Figma} alt="Figma" className='h-[40px] w-[40px]' />
            </div>

            <h5 className='text-[#eeeeec] text-[23px] font-semibold mt-10 mb-3'>Mobile App</h5>
            <div className='flex flex-wrap items-center gap-4'>
              <Tooltip id="Flutter" />
              <img data-tooltip-id="Flutter" data-tooltip-content="Flutter" src={Flutter} alt="Flutter" className='h-[40px] w-[40px]' />

              <Tooltip id="Ionic" />
              <img data-tooltip-id="Ionic" data-tooltip-content="Ionic" src={Ionic} alt="Ionic" className='h-[40px] w-[40px]' />
            </div>
          </div>
        </div>

    </div>
  )
}

export default SkillsSection