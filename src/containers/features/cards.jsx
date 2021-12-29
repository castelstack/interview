import React from "react";
import { Heading } from "../../constant/styles/text";
import bg from "../../assets/svg/feature.svg";

import img1 from "../../assets/svg/1.svg";

import img2 from "../../assets/svg/2.svg";
import img3 from "../../assets/svg/3.svg";
import img4 from "../../assets/svg/firewall.svg";
import "./style.css";
import {
  ScrollInRight
} from "../../constant/layout/animateOnScroll";

export const FeatureCardRight = ({title, img, desc}) => {
  return (
    <ScrollInRight>
    <div
      // style={{
      //   background: `linear-gradient(rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.1)), url(${bg})`,
      //   backgroundRepeat: "no-repeat",
      //   backgroundPosition: "center",
      //   backgroundSize: "cover",
      //   backgroundAttachment: "fixed",
      // }}
      className='relative mt-8'
    >
      <img
        src={img}
        alt=''
        className='md:h-20 md:w-20 h-12 w-12 absolute md:-top-32 md:left-24 -top-28 left-20 z-20'
      />
      <div className='flex gap-4 absolute lg:-top-44 md:-top-48 -top-40 left-12 items-center  z-10'>
        <div className='flex flex-col -space-y-16 > * items-center z-10'>
          <img src={img3} alt='' className='md:h-48 md:w-48 h-40 w-40' />
          <img src={img2} alt='' className='md:h-20 md:w-20 h-20 w-20' />
          <img src={img1} alt='' className='md:h-20 md:w-32 h-20 w-20' />
        </div>
        <p className='text-2xl text-white'>{title}</p>
      </div>
      <img src={bg} alt='' className='' />{" "}
      <p className='absolute text-white lg:text-xl  md:text-sm sm:text-xl text-xs sm:px-8 px-2 lg:top-8 md:top-2 top-4 left-2'>
   {desc}
      </p>
    </div>
    </ScrollInRight>
  );
};
