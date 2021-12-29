import React, { useState } from "react";
import DeApp from "../box/deApp";
import Features from "../features/features";
import Hero from "./hero";
import { HeroAdTwo, HeroMobile } from "../heroAd";
import Footer from "../footer/footer";
import bg from "../../assets/svg/bg.svg";

const Homepage = () => {
  return (
    <div
      className='grid grid-cols-1 bg-gradient-to-r from-primary-900 via-primary-700 to-primary-900'
     
    >
      {/* <div className='bg-primary-500'> */}
      <Hero />
      {/* </div> */}
      <div
        className='bg-gradient-to-r from-primary-900 via-primary-700 to-primary-900 -mb-20'
        style={{
        
          transform: "translateY(-4.2rem)",
  
          clipPath:
            "polygon(66% 1%, 71% 4%, 100% 4%, 100% 81%, 100% 100%, 0 100%, 0 4%, 29% 4%, 34% 1%)",
        }}
      >
        <Features />
      </div>
      <div
        className=''
        // style={{
        //   transform: "translateY(-4.2rem)",
        // }}
      >
        <HeroMobile />
        <DeApp />
        <HeroAdTwo />
      </div>
      <div
        className='bg-gradient-to-r from-primary-900 via-primary-700 to-primary-900 pt-2 -mb-20'
        style={{
          transform: "translateY(-4rem)",
        
          clipPath:
            "polygon(66% 1%, 71% 4%, 100% 4%, 100% 81%, 100% 100%, 0 100%, 0 4%, 29% 4%, 34% 1%)",
        }}
      >
        <Footer />
      </div>
    </div>
  );
};

export default Homepage;
