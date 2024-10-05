import React from 'react';
import HeroSection from '../components/HeroSection';
import SkillsSection from '../components/SkillsSection';
import WorksSection from '../components/WorksSection';
import AudioButton from '../components/AudioButton';
import GetInTouch from '../components/GetInTouch';
import Quote from '../components/Quote';
import Experience from '../components/Experience';
import Footer from '../components/Footer';


function Homepage() {
  return (
    <div>
        <HeroSection />
        <SkillsSection />
        <Experience classname="overflow-x-hidden" />
        <Quote />
        <WorksSection />
        <GetInTouch />
        <AudioButton />
        <Footer />
    </div>
  )
}

export default Homepage