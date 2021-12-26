import React, { useState } from "react";
import DeApp from "../box/deApp";
import Spec from "../box/spec";
import Features from "../features/features";
import Hero from './hero';
import { HeroAdTwo,HeroMobile } from "../heroAd";
import Version from "../version/version";
import MobileFeatures from "../features/mobile";
import Footer from "../footer/footer";

const Homepage = () => {
  const [open, setOpen] = useState(false);
  return (
    <div className='grid grid-cols-1'>
      <Hero />
      <Features />
      <MobileFeatures/>
      <HeroMobile/>
      <Spec />
      <DeApp  />
      <HeroAdTwo/>
      <Version />
      <Footer/>
    </div>
  );
};

export default Homepage;
