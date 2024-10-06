import React from 'react';
import { FaArrowsToDot } from "react-icons/fa6";
import {motion} from 'framer-motion'

// const containerRotate = {
//     initial: {},
//     animate: {
//         transition: {
//             staggerChildren: 0.1
//         }
//     },
// }

const cardRotate = {
    initial: {
        rotateY: 180,
        opacity: 0,
        y: 300,
    },
    animate: {
        y: 0,
        rotateY: 0,
        opacity: 1,
        transition: {
            type: "spring",
            bounce: 0.4,
            duration: 0.8,
            stiffness: 50
        }
    },
}

function Experience() {
    <script>
  AOS.init();
</script>
    
  return (
    <div className='mx-auto max-w-7xl'>
        <div className='flex justify-center'>
            <div className='w-fit'>
                <h5 className='text-[#ffd317] text-[23px] font-semibold mb-2 md:mb-0 text-center'>Working</h5>
                <h3 className='text-[#eeeeec] text-[46px] font-bold mb-5 md:leading-none leading-[50px]'>Experience</h3>
            </div>
        </div>
        <div className='p-10'>
            <motion.div className='w-[100%]'>
                {/* First Content */}
                <motion.div className='p-5 bg-[#19191b] border border-amber-400 md:w-[50%] w-[100%] rounded-xl shadow-md overflow-x-auto'
                    variants={cardRotate} initial='initial' whileInView='animate' viewport={{ once: true }}
                >
                    <div className='flex flex-row items-center mb-3'>
                        <p className='text-sm border-2 border-[#ffd317] rounded-xl px-3 text-[#eeeeec] mr-3'>2023 - Present</p>
                        <p className='text-xs text-[#eeeeec] font-sans'>Sensei Technology</p>
                    </div>
                    <div className='px-10'>
                        <p className='text-lg font-semibold font-sans mb-1 text-[#eeeeec]'>Frontend Developer</p>
                        <div className='flex gap-3 sm:items-center item-start '>
                            <FaArrowsToDot className='text-[#ffd317] tex-3xl flex-shrink-0 mt-3 sm:mt-0' />
                            <p className='text-md text-[#eeeeec] font-sans font-light mb-3'>
                                Collaborate with designers and back-end developers to gather requirements and translate them into functional user interfaces
                            </p>
                        </div>
                        
                        <div className='flex gap-3 items-center '>
                            <FaArrowsToDot className='text-[#ffd317] tex-3xl flex-shrink-0 mt-3 sm:mt-0' />
                            <p className='text-md text-[#eeeeec] font-sans font-light mb-3'>
                                Utilize front-end frameworks like React, or Vue.js to build dynamic and interactive user interfaces. 
                            </p>
                        </div>

                        <div className='flex gap-3 items-center '>
                            <FaArrowsToDot className='text-[#ffd317] tex-3xl flex-shrink-0 mt-3 sm:mt-0' />
                            <p className='text-md text-[#eeeeec] font-sans font-light mb-3'>
                                Conduct thorough testing and debugging to deliver high-quality, bug-free code 
                            </p>
                        </div>

                        <div className='flex gap-3 items-center '>
                            <FaArrowsToDot className='text-[#ffd317] tex-3xl flex-shrink-0 mt-3 sm:mt-0' />
                            <p className='text-md text-[#eeeeec] font-sans font-light mb-3'>
                                Ensure that web applications are compatible and responsive across various devices and screen sizes 
                            </p>
                        </div>

                        <div className='flex gap-3 items-center '>
                            <FaArrowsToDot className='text-[#ffd317] tex-3xl flex-shrink-0 mt-3 sm:mt-0' />
                            <p className='text-md text-[#eeeeec] font-sans font-light mb-3'>
                                Consume API endpoints to fetch and display data in a user-friendly manner

                            </p>
                        </div>
                    </div>
                </motion.div>

                {/* Second Content */}
                <div className='flex md:my-0 my-5'>
                    <div className='md:w-[50%] w-[100%] md:block hidden py-16'>
                        <div className='hidden'> 
                        </div>
                    </div>
                    <motion.div className='p-5 bg-[#19191b] md:w-[50%] w-[100%] border border-amber-400 overflow-x-hidden rounded-xl shadow-sm'
                        variants={cardRotate} initial='initial' whileInView='animate' viewport={{ once: true }}
                    >
                        <div>
                            <div className='flex flex-row items-center mb-3'>
                                <p className='text-sm border-2 border-[#ffd317] rounded-xl px-3 text-[#eeeeec] mr-3'>2022</p>
                                <p className='text-xs text-[#eeeeec] font-sans'>Euphoria Studos</p>
                            </div>
                            <div className='px-10'>
                                <p className='text-lg font-semibold font-sans mb-1 text-[#eeeeec]'>Frontend Developer</p>
                                <div className='flex gap-3 items-center '>
                                    <FaArrowsToDot className='text-[#ffd317] tex-3xl flex-shrink-0 mt-3 sm:mt-0' />
                                    <p className='text-md text-[#eeeeec] font-sans font-light mb-3'>
                                        Create user-friendly, responsive, and visually appealing layouts using HTML, Tailwind Css and React
                                    </p>
                                </div>
                        
                            <div className='flex gap-3 items-center '>
                                <FaArrowsToDot className='text-[#ffd317] tex-3xl flex-shrink-0 mt-3 sm:mt-0' />
                                <p className='text-md text-[#eeeeec] font-sans font-light mb-3'>
                                    Optimize UI for various devices to ensure a seamless user experience. 
                                </p>
                            </div>

                            <div className='flex gap-3 items-center '>
                                <FaArrowsToDot className='text-[#ffd317] tex-3xl flex-shrink-0 mt-3 sm:mt-0' />
                                <p className='text-md text-[#eeeeec] font-sans font-light mb-3'>
                                    Work closely with backend developers to ensure seamless integration and optimization
                                </p>
                            </div>
                            </div>
                        </div>
                    </motion.div>
                </div>

                {/* Third Content */}
                <div className='flex md:my-0 my-5'>
                    <motion.div className='p-5 bg-[#19191b] md:w-[50%] w-[100%] border border-amber-400 overflow-x-hidden rounded-xl shadow-sm'
                        variants={cardRotate} initial='initial' whileInView='animate' viewport={{ once: true }}
                    >
                        <div>
                            <div className='flex flex-row items-center mb-3'>
                                <p className='text-sm border-2 border-[#ffd317] rounded-xl px-3 text-[#eeeeec] mr-3'>2022</p>
                                <p className='text-xs text-[#eeeeec] font-sans'>VisionInDream</p>
                            </div>
                            <div className='px-10'>
                                <p className='text-lg font-semibold font-sans mb-1 text-[#eeeeec]'>Web Developer</p>
                                <div className='flex gap-3 items-center '>
                                    <FaArrowsToDot className='text-[#ffd317] tex-3xl flex-shrink-0 mt-3 sm:mt-0' />
                                    <p className='text-md text-[#eeeeec] font-sans font-light mb-3'>
                                        Assist in code review/debugging, offer insight into fixes, as well as 
                                        host zoom meetings with colleagues to facilitate sharing of ideas, work progress, and guidance
                                    </p>
                                </div>
                        
                            <div className='flex gap-3 items-center '>
                                <FaArrowsToDot className='text-[#ffd317] tex-3xl flex-shrink-0 mt-3 sm:mt-0' />
                                <p className='text-md text-[#eeeeec] font-sans font-light mb-3'>
                                    Develop responsive and visually engaging web applications using HTML, CSS, and JavaScript 
                                </p>
                            </div>

                            <div className='flex gap-3 items-center '>
                                <FaArrowsToDot className='text-[#ffd317] tex-3xl flex-shrink-0 mt-3 sm:mt-0' />
                                <p className='text-md text-[#eeeeec] font-sans font-light mb-3'>
                                    Work closely with teamates to determine problems, testing methods, and best practices.
                                </p>
                            </div>
                            </div>
                        </div>
                    </motion.div>
                    <div className='md:w-[50%] w-[100%] md:block hidden py-16'>
                        <div className='hidden'> 
                        </div>
                    </div>
                </div>

                {/* Fourth Content */}
                <div className='flex md:my-0 my-5'>
                    <div className='md:w-[50%] w-[100%] md:block hidden py-16'>
                        <div className='hidden'> 
                        </div>
                    </div>
                    <motion.div className='p-5 bg-[#19191b] md:w-[50%] w-[100%] border border-amber-400 overflow-x-hidden rounded-xl shadow-sm'
                        variants={cardRotate} initial='initial' whileInView='animate' viewport={{ once: true }}
                    >
                        <div>
                            <div className='flex flex-row items-center mb-3'>
                                <p className='text-sm border-2 border-[#ffd317] rounded-xl px-3 text-[#eeeeec] mr-3'>2019</p>
                                <p className='text-xs text-[#eeeeec] font-sans'>Freelance</p>
                            </div>
                            <div className='px-10'>
                                <p className='text-lg font-semibold font-sans mb-1 text-[#eeeeec]'>Frontend Developer</p>
                                <div className='flex gap-3 items-center '>
                                    <FaArrowsToDot className='text-[#ffd317] tex-3xl flex-shrink-0 mt-3 sm:mt-0' />
                                    <p className='text-md text-[#eeeeec] font-sans font-light mb-3'>
                                        Develop and maintain web and mobile applications for startup companies
                                    </p>
                                </div>
                        
                            <div className='flex gap-3 items-center '>
                                <FaArrowsToDot className='text-[#ffd317] tex-3xl flex-shrink-0 mt-3 sm:mt-0' />
                                <p className='text-md text-[#eeeeec] font-sans font-light mb-3'>
                                    Utilize React, and Node.js to build responsive, user-friendly interfaces and 
                                    implemented features such as payment processing, real-time data syncing, and user authentication. 
                                </p>
                            </div>

                            <div className='flex gap-3 items-center '>
                                <FaArrowsToDot className='text-[#ffd317] tex-3xl flex-shrink-0 mt-3 sm:mt-0' />
                                <p className='text-md text-[#eeeeec] font-sans font-light mb-3'>
                                    Collaborate with designers, project managers, and other developers to deliver
                                    projects on time and within budget.
                                </p>
                            </div>
                            </div>
                        </div>
                    </motion.div>
                </div>

                
            </motion.div>
        </div>
    </div>
  )
}

export default Experience