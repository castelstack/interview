import React from "react";
import { Heading, SubText } from "../../constant/styles/text";
import { paddingX } from "../../constant/styles/spacing";
import { Button } from "../../components/common/button/btn";
import img from "../../assets/svg/hero.svg";
import logo from "../../assets/svg/logo.svg"; 
import bg from "../../assets/svg/bg.svg";

const Hero = () => {
  return (
    <div className='relative h-full sm:mb-32 bg-gray-100 overflow-hidden '>
      <div
        className={`${paddingX}  flex flex-col items-center sm:py-20 py-12 gap-12 bg-gray-100 sm:bg-gradient-to-r from-primary-900  to-primary-500`}
        style={{
          background: `linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.5)), url(${bg})`,
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundAttachment: "fixed",
        }}
      >
        <div className='flex flex-col sm:flex-row mb-8 w-full sm:items-start items-center gap-8 justify-between'>
          <div className='flex'>
            <img
              src={logo}
              className='sm:h-20 sm:w-40 h-12 w-12 mr-2'
              alt='zor logo'
            />
            <Heading className='sm:text-white text-gray-800 flex items-start font-extrabold capitalize sm:text-left text-center'>
              ZOR Browser
            </Heading>
          </div>
          <h2 className='text-primary-900 sm:text-right text-center capitalize md:text-3xl text-2xl font-extrabold'>
            The first integrated online
            <br /> ecosystem
          </h2>
        </div>

        <div className='grid sm:grid-cols-2 grid-cols-1 items-center  justify-between gap-12 '>
          <div className='flex-col flex gap-8  sm:items-start  items-center mr-0 sm:mr-12'>
            <p className='text-base text-white sm:inline-block hidden sm:text-left text-center'>
              We bring together exclusive e-commerce platforms, decentralized
              apps, and a cutting-edge browsing suite, that rewards users for
              surfing the web.
            </p>
            <p className='text-base text-white sm:inline-block hidden sm:text-left text-center'>
              Based on superior blockchain technology, the browser’s
              infrastructure produces both ZOR’s robust security and the
              possibility for adding additional features and capabilities over
              time, for the benefit of the entire community.
            </p>
            <Button className='sm:justify-self-start justify-self-center'>
              Download Now
            </Button>
          </div>
          <img
            src={img}
            alt='zor browser hero image '
            className=' w-full absolute -bottom-20  -right-80 sm:block hidden pb-4'
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
