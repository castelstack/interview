import React from "react";
import { Button } from "../components/common/button/btn";
import { paddingX } from "../constant/styles/spacing";
import { Heading, SubText } from "../constant/styles/text";
import img from "../assets/img/img.png";
import bg from "../assets/svg/cube.svg";
import phone from "../assets/svg/phone.svg";

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
      style={{
        background: `linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.5)), url(${bg})`,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundAttachment: "fixed",
      }}
      className={`${paddingX} py-20  justify-between gap-12 flex flex-col items-center`}
    >
      <div className='w-full flex flex-col items-center gap-12 sm:px-12 px-2'>
        <p className='font-extrabold text-xl text-primary-300 uppercase'>
          Switching ZOR?
        </p>

        <SubText className='font-extrabold text-center text-white text-sm sm:text-base '>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vitae nemo,
          accusamus in placeat eos, Lorem, ipsum dolor sit amet consectetur
          adipisicing elit. Vitae nemo, accusamus in placeat eos,
        </SubText>
        <Button>Download Now</Button>
      </div>
      <div className='w-full flex justify-center  divide-x mt-32'>
        {web.map((el) => (
          <p className='text-sm sm:text-base  text-gray-100 font-extrabold transform uppercase px-8 cursor-pointer animate-bounce  '>
            {el}
          </p>
        ))}
      </div>
    </div>
  );
};

export const HeroMobile = () => {
  return (
    <div className={` py-8  justify-between  flex flex-col items-center`}>
      <div className='flex  flex-col sm:flex-row items-center gap-12'>
        <div className='w-full flex flex-col sm:items-start items-center gap-12 sm:px-12 px-2'>
          <ScrollBottom>
            <Heading className='font-extrabold text-primary-300 sm:text-left text-center'>
              Zor your mobile <br /> device
            </Heading>
          </ScrollBottom>
          <ScrollBottom>
            <SubText className='font-bold sm:text-left text-center text-sm sm:text-base '>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vitae
              nemo, accusamus in placeat eos, Lorem, ipsum dolor sit amet
              consectetur adipisicing elit. Vitae nemo, accusamus in placeat
              eos,
            </SubText>
          </ScrollBottom>
          <ScrollBottom>
            <div className='grid sm:grid-cols-2 grid-cols-1 gap-4 justify-between w-full'>
              <button
                className={` py-4 px-6 rounded-full shadow-white bg-gray-300
                 text-gray-800 font-bold text-base transition duration-300 ease-linear focus:outline-none`}
              >
                Play Store
              </button>
              <button
                className={` py-4 px-6 rounded-full shadow-white bg-gray-300
                 text-gray-800 font-bold text-base transition duration-300 ease-linear focus:outline-none`}
              >
                iTunes
              </button>
            </div>
          </ScrollBottom>
        </div>
        <img src={phone} alt='mobile zor browser' className='sm:w-full w-2/4' />
      </div>
      <ScrollBottom>
        <div className='w-full flex justify-center mt-8 divide-x'>
          {list.map((el) => (
            <p className='text-sm sm:text-base  text-gray-800 font-extrabold transform uppercase px-8 cursor-pointer animate-bounce  '>
              {el}
            </p>
          ))}
        </div>
      </ScrollBottom>
    </div>
  );
};

const list = ["Andriod", "IOS"];
const web = ["Windows", "(macIOS)", "Linux"];
