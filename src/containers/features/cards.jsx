import React from "react";
import { Heading } from "../../constant/styles/text";
import img from "../../assets/svg/computer.svg";
import logo from "../../assets/svg/logo.svg";
import "./style.css";
import {
  ScrollInRight,
  ScrollInLeft,
} from "../../constant/layout/animateOnScroll";

export const FeatureCardRight = () => {
  return (
    <div className='flex sm:flex-row flex-col w-full justify-between items-center'>
      <img
        src={img}
        alt='zor features'
        className='sm:h-96 h-40 w-2/4 px-12 text-white'
      />
      <ScrollInRight>
      <div
          className='card-right w-3/4  h-screen rounded-l-md p-20 bg-primary-900 float-right justify-self-end'
       
        >
          <img
            src={logo}
            alt='logo'
            className='absolute bottom-0 left-0 h-40 w-40 z-20 animate-bounce p-4 hover:animate-none'
          />
          <Heading className='text-left text-white mb-6 mt-32'>Secured</Heading>
          <p className='text-left text-white text-sm sm:text-xl '>
            Personal privacy of community members is ZOR’s number one priority.
            Built into the ZOR browser is our customs-built VPN tool, allowing
            for full anonymity throughout browning time
          </p>
        </div>
      </ScrollInRight>
    </div>
  );
};

export const FeatureCardLeft = () => {
  return (
    <div className=' flex sm:flex-row h-screen  flex-col items-center'>
      <ScrollInLeft>
      <div
          className='relative card z-10 w-4/5  h-screen rounded-r-md p-20 bg-primary-900'
          // style={{
          //   clipPath:
          //     "polygon(20% 0, 100% 0, 100% 20%, 100% 76%, 100% 100%, 20% 100%, 0% 80%, 0% 20%)",
          // }}
        >
          <img
            src={logo}
            alt='logo'
            className='absolute bottom-0 right-0 h-40 w-40 z-20 animate-bounce p-4'
          />
          <Heading className='text-right text-white mb-6 mt-32'>
            Fast and ad-Free
          </Heading>
          <p className='text-right text-white text-sm sm:text-xl '>
            The currency that powers it all. ZOR Token constitutes the
            ecosystem’s unique cryptocurrency. After receiving pay-outs for
            their use of the ZOR Browser, users can redeem Tokens for e-commerce
            offers available only to the ZOR community.
          </p>
        </div>
      </ScrollInLeft>
      <img
        src={img}
        alt='zor features'
        className='h-96 w-2/4 px-12 text-white'
      />
    </div>
  );
};

export const FeatureCardRight1 = () => {
  return (
    <div className='flex sm:flex-row flex-col items-center'>
      <img
        src={img}
        alt='zor features'
        className='h-96 w-2/4  px-12 text-white'
      />
      <ScrollInRight>
        <div
          className='card-right w-3/4  h-screen rounded-l-md p-20 bg-primary-900 float-right justify-self-end'
        
        >
          <img
            src={logo}
            alt='logo'
            className='absolute bottom-0 left-0 h-40 w-40 z-20 animate-bounce p-4 hover:animate-none'
          />
          <Heading className='text-left text-white mb-6 mt-32'>
            Multilayered VPN
          </Heading>
          <p className='text-left text-white text-sm sm:text-xl '>
            Personal privacy of community members is ZOR’s number one priority.
            Built into the ZOR browser is our customs-built VPN tool, allowing
            for full anonymity throughout browning time
          </p>
        </div>
      </ScrollInRight>
    </div>
  );
};

export const FeatureCardLeft1 = () => {
  return (
    <div className='flex sm:flex-row flex-col items-center'>
      <ScrollInLeft>
        <div
          className='relative card z-10 w-4/5  h-screen rounded-r-md p-20 bg-primary-900'
         
        >
          <img
            src={logo}
            alt='logo'
            className='absolute bottom-0 right-0 h-40 w-40 z-20 animate-bounce p-4'
          />
          <Heading className='text-right text-white mb-6 mt-32'>
            ZOR Token
          </Heading>
          <p className='text-right text-white text-sm sm:text-xl '>
            The currency that powers it all. ZOR Token constitutes the
            ecosystem’s unique cryptocurrency. After receiving pay-outs for
            their use of the ZOR Browser, users can redeem Tokens for e-commerce
            offers available only to the ZOR community.
          </p>
        </div>
      </ScrollInLeft>
      <img
        src={img}
        alt='zor features'
        className='h-96 w-2/4 px-12 text-white'
      />
    </div>
  );
};
