import React from "react";
import Faq from "../Faq/Faq";
import Accordion from "../Home/components/Accordion";
import CalculateCharge from "../Home/components/CalculateCharge";
import HeroSection from "../Home/components/HeroSection";
import OurServices from "../Home/components/OurServices";
import Testimonial from "../Home/components/Testimonial";
import Track from "../Home/components/Track";

const Pricing = () => {
  return (
    <>
      <HeroSection /> 
      <Track />
      <Accordion />
      <OurServices />
      <CalculateCharge />
      <Testimonial />
      <Faq />
    </>
  );
};

export default Pricing;
