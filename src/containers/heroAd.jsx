import React from "react";
import { Button } from "../components/common/button/btn";
import { paddingX } from "../constant/styles/spacing";
import { Heading, SubText } from "../constant/styles/text";
import img from "../assets/svg/free.svg";

import apple from "../assets/svg/apple.svg";
import play from "../assets/svg/play-store.svg";
import phone from "../assets/svg/phone2.svg";

import {
  ScrollBottom,
  ScrollInRight,
} from "../constant/layout/animateOnScroll";

export const HeroAdOne = () => {
  return (
    <div className=''>
      <div className='w-full flex gap-8 px-12'>
        <SubText>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vitae nemo,
          accusamus in placeat eos,
        </SubText>
        <SubText>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vitae nemo,
          accusamus in placeat eos, Lorem, ipsum dolor sit amet
          consecteturLorem, ipsum dolor sit amet consectetur adipisicing elit.
          Vitae nemo, accusamus in placeat eos, adipisicing elit. Vitae nemo,
          accusamus in placeat eos,
        </SubText>
      </div>
      <Button>Download</Button>
    </div>
  );
};

export const HeroAdTwo = () => {
  return (
    <div  
      className={`${paddingX} py-8  justify-between flex flex-col items-center bg-gray-500`}
    >
      <div className='flex  flex-col md:flex-row items-center gap-12'>
        <img src={img} alt='mobile zor browser' className='sm:w-full w-full ' />
        <div className='w-full flex flex-col sm:items-start items-center gap-12 sm:px-8 px-2'>
          <ScrollBottom>
            <Heading className='font-extrabold text-white sm:text-left text-center'>
              Stay Updated with our browser
            </Heading>
          </ScrollBottom>
          <ScrollBottom>
            <SubText className='font-bold sm:text-left text-white text-center text-sm sm:text-base '>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vitae
              nemo, accusamus in placeat eos, Lorem, ipsum dolor sit amet
              consectetur adipisicing elit. Vitae nemo, accusamus
            </SubText>
          </ScrollBottom>
        </div>
      </div>
    </div>
  );
};

export const HeroMobile = () => {
  return (
    <div
      className={`${paddingX} py-8  justify-between  flex flex-col items-center bg-gray-500`}
    >
      <div className='flex  flex-col md:flex-row items-center gap-12'>
        <div className='w-full flex flex-col sm:items-start items-center gap-12 sm:px-12 px-2'>
          <ScrollBottom>
            <Heading className='font-extrabold text-white sm:text-left text-center'>
              Mobile Responsive
            </Heading>
          </ScrollBottom>
          <ScrollBottom>
            <SubText className='font-bold sm:text-left text-white text-center text-sm sm:text-base '>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vitae
              nemo, accusamus in placeat eos, Lorem, ipsum dolor sit amet
              consectetur adipisicing elit. Vitae nemo, accusamus
            </SubText>
          </ScrollBottom>
          <ScrollBottom>
            <div className='grid sm:grid-cols-2 grid-cols-1 gap-4 justify-between w-full'>
              <button
                className={` py-4 px-6 rounded-full shadow-white bg-gray-200 flex items-center
                 text-gray-800 font-bold text-base transition duration-300 ease-linear focus:outline-none`}
              >
                  <img
          src={play}
          alt='download zor'
          className='h-8 w-8'
        />Play Store
              </button>
              <button
                className={` py-4 px-6 rounded-full shadow-white bg-gray-200 flex items-center
                 text-gray-800 font-bold text-base transition duration-300 ease-linear focus:outline-none`}
              >
                  <img
          src={apple}
          alt='download zor'
          className='h-6 w-6 mr-2'
        />App Store
              </button>
            </div>
          </ScrollBottom>
        </div>
        <img
          src={phone}
          alt='mobile zor browser'
          className='w-full  animate-spring'
        />
      </div>
    </div>
  );
};

const list = ["Andriod", "IOS"];
const web = ["Windows", "(macIOS)", "Linux"];
