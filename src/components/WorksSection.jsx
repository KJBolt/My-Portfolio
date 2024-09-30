import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import Tickella from '../assets/Tickella.png';
import Euphoria from '../assets/Euphoria.png';
import { BsImage } from "react-icons/bs";
import { FaBookOpen } from "react-icons/fa";

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';


function WorksSection() {
  return (
    <div className='max-w-7xl mx-auto h-auto py-32'>
        <div className=''>
            <div className='flex justify-center'>
                <div className='w-fit'>
                    <h5 className='text-[#ffd317] text-[23px] font-semibold text-center'>Explore</h5>
                    <h3 className='text-[#eeeeec] text-[46px] font-bold mb-5'>Featured Works</h3>
                </div>
            </div>

            <div className='w-[100%] h-[500px] p-8'>
            <Swiper
                slidesPerView={1}
                spaceBetween={30}
                pagination={{
                    clickable: true,
                }}
                autoplay={{
                  delay: 2500,
                  disableOnInteraction: false,
                }}
                modules={[Autoplay, Pagination, Navigation]}
                breakpoints={{
                    640: {
                      slidesPerView: 2,
                      spaceBetween: 30
                    },
                    768: {
                      slidesPerView: 3,
                      spaceBetween: 30
                    },
                    1024: {
                      slidesPerView: 3,
                      spaceBetween: 30
                    }
                  }}
                className="mySwiper w-[100%] h-[500px]"
            >
                <SwiperSlide className='h-[100%]'>
                  <div className='h-[50%] relative group '>
                      <img src={Tickella} alt="Banner" className='h-[100%] w-[100%] object-cover group-hover:bg-[#c7c7c780] bg-[#eeeeec] opacity-100 group-hover:opacity-80 transition-opacity duration-300' />
                      <div className='flex items-center gap-3 justify-center bg-[#0070f0] cursor-pointer transition-opacity duration-300 opacity-0 group-hover:opacity-100 w-fit  px-3 py-2 absolute top-1/2 left-1/3 rounded-md'>
                        <BsImage className='text-2xl text-[#eeeeec]' />
                        <p className='font-sans text-[#eeeeec]'>Preview</p>
                      </div>
                      {/* <div className='bg-[#3f4045] m-3 py-1 w-fit text-[#eeeeec] rounded-full px-3'>
                        <p className='font-sans text-md'>Tickella</p>
                      </div> */}
                      <div className='py-5'>
                        <p className='font-sans text-xl text-[#f0c020] font-semibold'>Tickella</p>
                        <p className='text-[#eeeeec] font-sans mb-5'>Tickella is a an ecommerce platform that brings event organizers and clients together. Explore events, get tickets and check in attendees with ease.</p>
                        <div className='bg-[#19191b] cursor-pointer rounded-sm py-2 flex items-center gap-4 justify-center'>
                          <FaBookOpen className='text-[#eeeeec] text-3xl' />
                          <p className='text-[#eeeeec]'>Read More</p>
                        </div>
                      </div>
                  </div>
                </SwiperSlide>

                <SwiperSlide className='h-[100%]'>
                  <div className='h-[50%] relative group '>
                      <img src={Euphoria} alt="Banner" className='h-[100%] w-[100%] object-cover group-hover:bg-[#c7c7c780] bg-[#eeeeec] opacity-100 group-hover:opacity-80 transition-opacity duration-300' />
                      <div className='flex items-center gap-3 justify-center bg-[#0070f0] cursor-pointer transition-opacity duration-300 opacity-0 group-hover:opacity-100 w-fit  px-3 py-2 absolute top-1/2 left-1/3 rounded-md'>
                        <BsImage className='text-2xl text-[#eeeeec]' />
                        <p className='font-sans text-[#eeeeec]'>Preview</p>
                      </div>
                      {/* <div className='bg-[#3f4045] m-3 py-1 w-fit text-[#eeeeec] rounded-full px-3'>
                        <p className='font-sans text-md'>Tickella</p>
                      </div> */}
                      <div className='py-5'>
                        <p className='font-sans text-xl text-[#f0c020] font-semibold'>Euphoria Studios</p>
                        <p className='text-[#eeeeec] font-sans mb-5'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex optio laboriosam suscipit eius aliquid animi sunt veniam eveniet, ipsum excepturi sed at quo.</p>
                        <div className='bg-[#19191b] rounded-sm cursor-pointer py-2 flex items-center gap-4 justify-center'>
                          <FaBookOpen className='text-[#eeeeec] text-3xl' />
                          <p className='text-[#eeeeec]'>Read More</p>
                        </div>
                      </div>
                  </div>
                </SwiperSlide>

                <SwiperSlide className='h-[100%]'>
                  <div className='h-[50%] relative group '>
                      <img src={Tickella} alt="Banner" className='h-[100%] w-[100%] object-cover group-hover:bg-[#c7c7c780] bg-[#eeeeec] opacity-100 group-hover:opacity-80 transition-opacity duration-300' />
                      <div className='flex items-center gap-3 justify-center bg-[#0070f0] cursor-pointer transition-opacity duration-300 opacity-0 group-hover:opacity-100 w-fit  px-3 py-2 absolute top-1/2 left-1/3 rounded-md'>
                        <BsImage className='text-2xl text-[#eeeeec]' />
                        <p className='font-sans text-[#eeeeec]'>Preview</p>
                      </div>
                      {/* <div className='bg-[#3f4045] m-3 py-1 w-fit text-[#eeeeec] rounded-full px-3'>
                        <p className='font-sans text-md'>Tickella</p>
                      </div> */}
                      <div className='py-5'>
                        <p className='font-sans text-xl text-[#f0c020] font-semibold'>Tickella</p>
                        <p className='text-[#eeeeec] font-sans mb-5'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex optio laboriosam suscipit eius aliquid animi sunt veniam eveniet, ipsum excepturi sed at quo.</p>
                        <div className='bg-[#19191b] rounded-sm cursor-pointer py-2 flex items-center gap-4 justify-center'>
                          <FaBookOpen className='text-[#eeeeec] text-3xl' />
                          <p className='text-[#eeeeec]'>Read More</p>
                        </div>
                      </div>
                  </div>
                </SwiperSlide>

                <SwiperSlide className='h-[100%]'>
                  <div className='h-[50%] relative group '>
                      <img src={Tickella} alt="Banner" className='h-[100%] w-[100%] object-cover group-hover:bg-[#c7c7c780] bg-[#eeeeec] opacity-100 group-hover:opacity-80 transition-opacity duration-300' />
                      <div className='flex items-center gap-3 justify-center bg-[#0070f0] cursor-pointer transition-opacity duration-300 opacity-0 group-hover:opacity-100 w-fit  px-3 py-2 absolute top-1/2 left-1/3 rounded-md'>
                        <BsImage className='text-2xl text-[#eeeeec]' />
                        <p className='font-sans text-[#eeeeec]'>Preview</p>
                      </div>
                      {/* <div className='bg-[#3f4045] m-3 py-1 w-fit text-[#eeeeec] rounded-full px-3'>
                        <p className='font-sans text-md'>Tickella</p>
                      </div> */}
                      <div className='py-5'>
                        <p className='font-sans text-xl text-[#f0c020] font-semibold'>Tickella</p>
                        <p className='text-[#eeeeec] font-sans mb-5'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex optio laboriosam suscipit eius aliquid animi sunt veniam eveniet, ipsum excepturi sed at quo.</p>
                        <div className='bg-[#19191b] rounded-sm py-2 flex items-center gap-4 justify-center cursor-pointer'>
                          <FaBookOpen className='text-[#eeeeec] text-3xl' />
                          <p className='text-[#eeeeec]'>Read More</p>
                        </div>
                      </div>
                  </div>
                </SwiperSlide>
            </Swiper>
            </div>

        </div>
    </div>
  )
}

export default WorksSection