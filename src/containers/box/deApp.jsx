import React from "react";
import { Heading, SmText, SubText } from "../../constant/styles/text";
import img from "../../assets/svg/cha1.svg";
import cha3 from "../../assets/svg/cha3.svg";
import cha4 from "../../assets/svg/cha4.svg";
import cha1 from "../../assets/svg/cha0.svg";
import bg from "../../assets/svg/fea.svg";
import img1 from "../../assets/svg/2.svg";
import img4 from "../../assets/svg/Union.svg";
import img2 from "../../assets/svg/22.svg";
import img3 from "../../assets/svg/cone.svg";
import stroke from "../../assets/svg/stroke2.svg";
import stroke1 from "../../assets/svg/stroke1.svg";
import { paddingX } from "../../constant/styles/spacing";
import {
  ScrollInRight,
  ScrollInLeft,
} from "../../constant/layout/animateOnScroll";

const DeApp = () => {
  return (
    <div
      style={{
        background: `url(${bg})`,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        backgroundSize: "cover ",
      }}
      className={` grid grid-cols-1 py-20 `}
    >
      <div className='grid grid-cols-3 gap-2 items-center py-4'>
        <img src={stroke} alt='' className='w-full self-start' />
        <h1 className='leading-none sm:text-3xl w-full text-2xl font-extrabold self-end text-white '>
          Some charateristics if Zor
        </h1>
        <img src={stroke1} alt='' className='w-full self-start' />
      </div>
      <div className={`${paddingX} grid grid-cols-1 gap-8`}>
        <Tab />
        <TabRev />
        <Tab1 />
        <TabRev1 />
      </div>
    </div>
  );
};

const Tab = ({ title, icon, description }) => {
  return (
    <div className='grid md:grid-cols-2 grid-cols-1 gap-12 '>
      <div className='relative mt-8 md:row-span-full'>
        <div className='flex gap-4 absolute lg:bottom-32 md:bottom-48 -bottom-20 sm:left-8 left-3 items-center  z-10'>
          <div className='flex flex-col -space-y-12 > * items-center z-10'>
            <img src={img1} alt='' className='md:h-20 md:w-32 h-20 w-20' />
            <img src={img3} alt='' className='md:h-20 md:w-32 h-20 w-20' />
          </div>
        </div>
        <img src={img2} alt='' className='' />{" "}
        <div className='absolute px-8 lg:top-8 md:top-2 top-4 left-2  flex flex-col gap-8'>
        <p className=' text-white lg:text-2xl font-bold md:text-sm sm:text-xl text-base '>
        Fast and ad-free
        </p>
        <p className=' text-white lg:text-xl  md:text-sm sm:text-xl text-base '>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi.
        </p>
        </div>
      </div>
      <ScrollInRight>

      <img src={cha1} alt='side img' className=' row-span-full' />{" "}
      </ScrollInRight>
    </div>
  );
};
const TabRev = ({ title, icon, description }) => {
  return (
    <div className='grid md:grid-cols-2 grid-cols-1 gap-12'>
      <ScrollInLeft>

      <img src={img} alt='side img' className='' />{" "}
      </ScrollInLeft>
      <div className='relative mt-8'>
        <div className='flex gap-4 absolute lg:bottom-32 md:bottom-48 -bottom-20 right-3 items-center  z-10'>
          <div className='flex flex-col -space-y-12 > * items-center z-10'>
            <img src={img1} alt='' className='md:h-20 md:w-32 h-20 w-20' />
            <img src={img3} alt='' className='md:h-20 md:w-32 h-20 w-20' />
          </div>
        </div>
        <img src={img4} alt='' className=' ' />{" "}
        <div className='absolute px-8 lg:top-8 md:top-2 top-4 left-2  flex flex-col gap-8'>
        <p className=' text-white lg:text-2xl font-bold md:text-sm sm:text-xl text-base '>
       Private
        </p>
        <p className=' text-white lg:text-2xl font-bold md:text-sm sm:text-xl text-base '>
        (reduces tracking & cookies)
        </p>
        <p className=' text-white lg:text-xl  md:text-sm sm:text-xl text-base '>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi.
        </p>
        </div>
      </div>
    </div>
  );
};

const Tab1 = ({ title, icon, description }) => {
  return (
    <div className='grid md:grid-cols-2 grid-cols-1 gap-12 '>
      <div className='relative mt-8 md:row-span-full'>
        <div className='flex gap-4 absolute lg:bottom-32 md:bottom-48 -bottom-20 sm:left-8 left-3 items-center  z-10'>
          <div className='flex flex-col -space-y-12 > * items-center z-10'>
            <img src={img1} alt='' className='md:h-20 md:w-32 h-20 w-20' />
            <img src={img3} alt='' className='md:h-20 md:w-32 h-20 w-20' />
          </div>
        </div>
        <img src={img2} alt='' className='' />{" "}
        <div className='absolute px-8 lg:top-8 md:top-2 top-4 left-2  flex flex-col gap-8'>
        <p className=' text-white lg:text-2xl font-bold md:text-sm sm:text-xl text-base '>
          Optimized and efficient
        </p>
        <p className=' text-white lg:text-xl  md:text-sm sm:text-xl text-base '>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi.
        </p>
        </div>
      </div>
      <ScrollInRight>

      <img src={cha3} alt='side img' className=' row-span-full' />{" "}
</ScrollInRight>
    </div>
  );
};
const TabRev1 = ({ title, icon, description }) => {
  return (
    <div className='grid md:grid-cols-2 grid-cols-1 gap-12'>
       <ScrollInLeft>

      <img src={cha4} alt='side img' className='' />{" "}
</ScrollInLeft>
      <div className='relative mt-8'>
        <div className='flex gap-4 absolute lg:bottom-32 md:bottom-48 -bottom-20 right-3 items-center  z-10'>
          <div className='flex flex-col -space-y-12 > * items-center z-10'>
            <img src={img1} alt='' className='md:h-20 md:w-32 h-20 w-20' />
            <img src={img3} alt='' className='md:h-20 md:w-32 h-20 w-20' />
          </div>
        </div>
        <img src={img4} alt='' className=' ' />{" "}
        <div className='absolute px-8 lg:top-8 md:top-2 top-4 left-2  flex flex-col gap-8'>
        <p className=' text-white lg:text-2xl font-bold md:text-sm sm:text-xl text-base '>
          Dark mode
        </p>
        <p className=' text-white lg:text-xl  md:text-sm sm:text-xl text-base '>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi.
        </p>
        </div>
      </div>
    </div>
  );
};

export default DeApp;
