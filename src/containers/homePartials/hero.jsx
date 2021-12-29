import React from "react";
import { Heading, SubText } from "../../constant/styles/text";
import { paddingX } from "../../constant/styles/spacing";
import { Button } from "../../components/common/button/btn";
import img from "../../assets/svg/hero.svg";
import bg from "../../assets/svg/bg.svg";

const Hero = () => {
  return (
    <div
      className={`${paddingX} flex flex-col gap-8 items-center py-12 `}
      style={{
        background: `linear-gradient(rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.1)), url(${bg})`,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        backgroundSize: "cover",
      }}
    >
        <div className='flex justify-between items-center w-full'>
        
          <Heading className='sm:text-white text-gray-800 flex items-start font-extrabold capitalize sm:text-left text-center'>
            ZOR
          </Heading>
           <Button className='sm:justify-self-start justify-self-center'>
              Download Now
            </Button>
        </div>
      <div className={`  grid grid-cols-1 md:grid-cols-2 md:gap-12 gap-8 items-center  `}>

          <div className='flex-col flex gap-8  sm:items-start  items-center '>
            <h2 className='text-white sm:text-left text-center capitalize md:text-3xl text-2xl font-extrabold'>
              The first integrated online ecosystem
            </h2>
            <p className='text-base sm:text-xl text-white  sm:text-left text-center'>
              We bring together exclusive e-commerce platforms, decentralized
              apps, and a cutting-edge browsing suite, that rewards users for
              surfing the web.
            </p>
            <p className='text-base sm:text-xl text-white  sm:text-left text-center'>
              Based on superior blockchain technology, the browser’s
              infrastructure produces both ZOR’s robust security and the
              possibility for adding additional features and capabilities over
              time, for the benefit of the entire community.
            </p>
           
        </div>
      <img
        src={img}
        alt='zor browser hero image '
        className='  pb-4'
      />
      </div>
    </div>
  );
};

export default Hero;
