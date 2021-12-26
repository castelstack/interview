import React from "react";
import { ScrollInRight } from "../../constant/layout/animateOnScroll";
import { Heading } from "../../constant/styles/text";
import img from "../../assets/img/img.png";
import bg from "../../assets/svg/cube.svg";
const MobileFeatures = () => {
  return (
      <div className='grid sm:hidden px-3 grid-cols-1 gap-3'
      style={{
        background: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url(${bg})`,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundAttachment: "fixed",
      }}>
      <div className='flex flex-col w-full justify-between items-center'>
        <ScrollInRight>
          <div className=' w-full  rounded-l-md sm:p-12 p-3  float-right justify-self-end'>
            <Heading className='text-left text-white mb-6'>VPN</Heading>
            <p className='text-sm sm:text-base text-left text-white'>
              Personal privacy of community members is ZOR’s number one
              priority. Built into the ZOR browser is our customs-built VPN
              tool, allowing for full anonymity throughout browning time
            </p>
          </div>
        </ScrollInRight>
        <img
          src={img}
          alt='zor features'
          className=' h-40  w-full   text-white'
        />
      </div>
       <div className='flex flex-col w-full justify-between items-center'>
        <ScrollInRight>
          <div className=' w-full  rounded-l-md sm:p-12 p-3  float-right justify-self-end'>
            <Heading className='text-right text-white mb-6'>VPN</Heading>
            <p className='text-sm sm:text-base text-right text-white'>
              Personal privacy of community members is ZOR’s number one
              priority. Built into the ZOR browser is our customs-built VPN
              tool, allowing for full anonymity throughout browning time
            </p>
          </div>
        </ScrollInRight>
        <img
          src={img}
          alt='zor features'
          className=' h-40  w-full   text-white'
        />
      </div>
       <div className='flex flex-col w-full justify-between items-center'>
        <ScrollInRight>
          <div className=' w-full  rounded-l-md sm:p-12 p-3  float-right justify-self-end'>
            <Heading className='text-left text-white mb-6'>VPN</Heading>
            <p className='text-sm sm:text-base text-left text-white'>
              Personal privacy of community members is ZOR’s number one
              priority. Built into the ZOR browser is our customs-built VPN
              tool, allowing for full anonymity throughout browning time
            </p>
          </div>
        </ScrollInRight>
        <img
          src={img}
          alt='zor features'
          className=' h-40  w-full   text-white'
        />
      </div>
      <div className='flex flex-col w-full justify-between items-center'>
        <ScrollInRight>
          <div className=' w-full  rounded-l-md sm:p-12 p-3  float-right justify-self-end'>
            <Heading className='text-right text-white mb-6'>VPN</Heading>
            <p className='text-sm sm:text-base text-right text-white'>
              Personal privacy of community members is ZOR’s number one
              priority. Built into the ZOR browser is our customs-built VPN
              tool, allowing for full anonymity throughout browning time
            </p>
          </div>
        </ScrollInRight>
        <img
          src={img}
          alt='zor features'
          className=' h-40  w-full   text-white'
        />
      </div>
    </div>
  );
};

export default MobileFeatures;
