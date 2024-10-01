import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import Tickella from '../assets/Tickella.png';
import { BsImage } from "react-icons/bs";
import { RiGitRepositoryPrivateLine } from "react-icons/ri";
import { FaEye } from "react-icons/fa";
import { Lightbox } from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

// Tickella Images
import TickellaHome from '../assets/Tickella.png'
import TickellaSteps from '../assets/TickellaSteps.png'
import CreateEvent from '../assets/CreateEvent.png'
import OrganizerCreate from '../assets/OrganizerCreate.png'
import Register from '../assets/Register.png'
import Dashboard from '../assets/Dashboard.png'
import EventSuccess from '../assets/EventSuccess.png'
import UserEvents from '../assets/UserEvents.png'
import EventPreview from '../assets/EventPreview.png'
import PurchaseTicket1 from '../assets/PurchaseTicket1.png'
import PurchaseTicket2 from '../assets/PurchaseTicket2.png'
import Paystack from '../assets/Paystack.png'
import PaymentSuccess from '../assets/PaymentSuccess.png'
import TicketDownload from '../assets/TicketDownload.png'

// Asiewie Images
import AsiewieOnboard from '../assets/AsiewieOnboard.png'
import Asiewie1 from '../assets/Asiewie1.png'
import Asiewie2 from '../assets/Asiewie2.png'
import Asiewie3 from '../assets/Asiewie3.png'
import Asiewie4 from '../assets/Asiewie4.png'
import AsiewieOauth from '../assets/AsiewieOauth.png'
import Asiewie5 from '../assets/Asiewie5.png'
import Asiewie6 from '../assets/Asiewie6.png'

// Portfolio Images
import Portfolio1 from '../assets/Portfolio1.png'
import Portfolio2 from '../assets/Portfolio2.png'
import Portfolio3 from '../assets/Portfolio3.png'

// Tesacon Images
import Tesacon1 from '../assets/Tesacon1.png'
import Tesacon2 from '../assets/Tesacon2.png'
import Tesacon3 from '../assets/Tesacon3.png'
import Tesacon4 from '../assets/Tesacon4.png'

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';


function WorksSection() {
  const [tickellaOpen, setTickellaOpen] = React.useState(false);
  const [asiewieOpen, setAsiewieOpen] = React.useState(false);
  const [portfolioOpen, setPortfolioOpen] = React.useState(false);
  const [tesaconOpen, setTesaconOpen] = React.useState(false);

  return (
    <div className='max-w-7xl mx-auto h-auto py-32'>
        <div className=''>
            <div className='flex justify-center'>
                <div className='w-fit'>
                    <h5 className='text-[#ffd317] text-[23px] font-semibold text-center'>Explore</h5>
                    <h3 className='text-[#eeeeec] text-[46px] text-center font-bold mb-5'>Featured Works</h3>
                </div>
            </div>

            <div data-aos="fade-up" className='w-[100%] h-auto p-8'>
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
                  <div className='h-[50%] group relative'>
                      <img src={Tesacon3} alt="Banner" className='h-[100%] w-[100%] object-cover group-hover:bg-[#c7c7c780] bg-[#eeeeec] opacity-100 group-hover:opacity-80 transition-opacity duration-300' />
                      <div onClick={() => setTesaconOpen(true)} className='flex items-center gap-3 justify-center bg-[#0070f0] cursor-pointer transition-opacity duration-300 opacity-0 group-hover:opacity-100 w-fit  px-3 py-2 absolute top-1/2 left-1/3 rounded-md'>
                        <BsImage className='text-2xl text-[#eeeeec]' />
                        <p className='font-sans text-[#eeeeec]'>Preview</p>
                      </div>

                      <Lightbox
                          open={tesaconOpen}
                          close={() => setTesaconOpen(false)}
                          slides={[
                              { src: Tesacon1 }, 
                              { src: Tesacon2 }, 
                              { src: Tesacon3 }, 
                              { src: Tesacon4 },
                          ]}
                      />


                      <div className='bg-[#3f4045]  py-1 w-fit text-[#eeeeec] rounded-full px-3 mt-5'>
                        <p className='font-sans text-md'>Web Project</p>
                      </div>
                      <div className='pt-2 pb-5'>
                        <p className='font-sans text-xl text-[#f0c020] font-semibold'>Tesacon</p>
                        <p className='text-[#eeeeec] font-sans mb-5'>Tesacon is a comprehensive platform designed to help tenants efficiently manage land records and streamline the resolution of disputes</p>
                        <div className='bg-[#19191b] cursor-pointer rounded-sm py-2 flex items-center gap-4 justify-center'>
                          <RiGitRepositoryPrivateLine className='text-[#f0c020] text-2xl'/>
                          <p className='text-[#eeeeec]'>Repository is private</p>
                        </div>
                      </div>
                  </div>
                </SwiperSlide>


                <SwiperSlide className='h-[100%]'>
                  <div className='h-[50%] group relative'>
                      <img src={Tickella} alt="Banner" className='h-[100%] w-[100%] object-cover group-hover:bg-[#c7c7c780] bg-[#eeeeec] opacity-100 group-hover:opacity-80 transition-opacity duration-300' />
                      <div onClick={() => setTickellaOpen(true)} className='flex items-center gap-3 justify-center bg-[#0070f0] cursor-pointer transition-opacity duration-300 opacity-0 group-hover:opacity-100 w-fit  px-3 py-2 absolute top-1/2 left-1/3 rounded-md'>
                        <BsImage className='text-2xl text-[#eeeeec]' />
                        <p className='font-sans text-[#eeeeec]'>Preview</p>
                      </div>

                      <Lightbox
                          open={tickellaOpen}
                          close={() => setTickellaOpen(false)}
                          slides={[
                              { src: TickellaHome }, 
                              { src: TickellaSteps }, 
                              { src: CreateEvent }, 
                              { src: Register },
                              { src: OrganizerCreate },
                              { src: EventSuccess },
                              { src: Dashboard },
                              { src: UserEvents },
                              { src: EventPreview },
                              { src: PurchaseTicket1 },
                              { src: PurchaseTicket2 },
                              { src: Paystack },
                              { src: PaymentSuccess },
                              { src: TicketDownload },
                          ]}
                      />

                      <div className='bg-[#3f4045]  py-1 w-fit text-[#eeeeec] rounded-full px-3 mt-5'>
                        <p className='font-sans text-md'>Web Project</p>
                      </div>

                      <div className='pt-2 pb-5'>
                        <p className='font-sans text-xl text-[#f0c020] font-semibold'>Tickella</p>
                        <p className='text-[#eeeeec] font-sans mb-5'>Tickella is a an ecommerce platform that brings event organizers and clients together. Explore events, get tickets and check in attendees with ease.</p>
                        <div className='bg-[#19191b] cursor-pointer rounded-sm py-2 flex items-center gap-4 justify-center'>
                          <RiGitRepositoryPrivateLine className='text-[#f0c020] text-2xl'/>
                          <p className='text-[#eeeeec]'>Repository is private</p>
                        </div>
                      </div>
                  </div>
                </SwiperSlide>

                <SwiperSlide className='h-[100%]'>
                  <div className='h-[50%] group relative'>
                      <img src={Asiewie4} alt="Banner" className='h-[100%] w-[100%] object-cover group-hover:bg-[#c7c7c780] bg-[#eeeeec] opacity-100 group-hover:opacity-80 transition-opacity duration-300' />
                      <div onClick={() => setAsiewieOpen(true)} className='flex items-center gap-3 justify-center bg-[#0070f0] cursor-pointer transition-opacity duration-300 opacity-0 group-hover:opacity-100 w-fit  px-3 py-2 absolute top-1/2 left-1/3 rounded-md'>
                        <BsImage className='text-2xl text-[#eeeeec]' />
                        <p className='font-sans text-[#eeeeec]'>Preview</p>
                      </div>

                      <Lightbox
                        open={asiewieOpen}
                        close={() => setAsiewieOpen(false)}
                        slides={[
                            { src: AsiewieOnboard },
                            { src: Asiewie1 }, 
                            { src: Asiewie2 }, 
                            { src: Asiewie3 }, 
                            { src: Asiewie4 },
                            { src: AsiewieOauth },
                            { src: Asiewie5 },
                            { src: Asiewie6 },
                            { src: Asiewie6 },
                          ]}
                      />

                      <div className='bg-[#3f4045]  py-1 w-fit text-[#eeeeec] rounded-full px-3 mt-5'>
                        <p className='font-sans text-md'>Mobile App</p>
                      </div>

                      <div className='pt-2 pb-5'>
                        <p className='font-sans text-xl text-[#f0c020] font-semibold'>Asiewie App</p>
                        <p className='text-[#eeeeec] font-sans mb-5'>Featured in the development of Asiewie app. A mobile app that gives users the platform to advertise and manage their funeral services.</p>
                        <div className='bg-[#19191b] rounded-sm cursor-pointer py-2 flex items-center gap-4 justify-center'>
                          <RiGitRepositoryPrivateLine className='text-[#f0c020] text-2xl' />
                          <p className='text-[#eeeeec]'>Repository is private</p>
                        </div>
                      </div>
                  </div>
                </SwiperSlide>

                <SwiperSlide className='h-[100%]'>
                  <div className='h-[50%] group relative'>
                      <img src={Portfolio1} alt="Banner" className='h-[100%] w-[100%] object-cover group-hover:bg-[#c7c7c780] bg-[#eeeeec] opacity-100 group-hover:opacity-80 transition-opacity duration-300' />
                      <div onClick={() => setPortfolioOpen(true)} className='flex items-center gap-3 justify-center bg-[#0070f0] cursor-pointer transition-opacity duration-300 opacity-0 group-hover:opacity-100 w-fit  px-3 py-2 absolute top-1/2 left-1/3 rounded-md'>
                        <BsImage className='text-2xl text-[#eeeeec]' />
                        <p className='font-sans text-[#eeeeec]'>Preview</p>
                      </div>

                      <Lightbox
                          open={portfolioOpen}
                          close={() => setPortfolioOpen(false)}
                          slides={[
                              { src: Portfolio1 }, 
                              { src: Portfolio2 }, 
                              { src: Portfolio3 }, 
                          ]}
                      />

                      <div className='bg-[#3f4045]  py-1 w-fit text-[#eeeeec] rounded-full px-3 mt-2'>
                        <p className='font-sans text-md'>Mobile App</p>
                      </div>

                      <div className='py-5'>
                        <p className='font-sans text-xl text-[#f0c020] font-semibold'>Portfolio</p>
                        <p className='text-[#eeeeec] font-sans mb-5'>Gathered some inspiration online and created a portfolio website showcasing some of my works and experiences</p>

                        <a href='https://github.com/KJBolt/My-Portfolio' target="_blank" rel="noopener noreferrer" className='bg-[#19191b] rounded-sm cursor-pointer py-2 flex items-center gap-4 justify-center'>
                          <FaEye className='text-[#f0c020] text-3xl' />
                          <p className='text-[#eeeeec]'>View Repository</p>
                        </a>
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