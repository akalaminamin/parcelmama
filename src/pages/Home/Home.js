import React from 'react'
import Faq from '../Faq/Faq'
import Accordion from './components/Accordion'
import CalculateCharge from './components/CalculateCharge'
import HeroSection from './components/HeroSection'
import OurServices from './components/OurServices'
import Testimonial from './components/Testimonial'
import Track from './components/Track'

const Home = () => {
  return (
    <>
      <HeroSection /> 
      <Track />
      <Accordion />
      <OurServices />
      <CalculateCharge />
      <Testimonial />
    </>
  )
}

export default Home