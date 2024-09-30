import React from 'react';
import HeroSection from '../components/HeroSection';
import SkillsSection from '../components/SkillsSection';
import WorksSection from '../components/WorksSection';
import AudioButton from '../components/AudioButton';
import GetInTouch from '../components/GetInTouch';
import Quote from '../components/Quote';


function Homepage() {
  return (
    <div>
        <HeroSection />
        <SkillsSection />
        <Quote />
        <WorksSection />
        <GetInTouch />
        <AudioButton />
    </div>
  )
}

export default Homepage