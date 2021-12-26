import { motion } from "framer-motion";
import React from "react";
import img from "../../assets/img/img.png";
const Box = ({title, desc}) => {
  return (
    <div className=' flex flex-col justify-items-start items-start sm:px-8 px-3 sm:py-12 py-3 rounded-md bg-transparent backdrop-filter backdrop-blur-sm  shadow-white'>
      <motion.img
        whileHover={{
          scale: 1.2,
                  transition: { duration: .6 }
        }}
        whileTap={{ scale: 0.9 }}
        src={img}
        alt='zor image'
        className='h-40 w-40'
      />
      <h3 className='text-white text-2xl font-extrabold text-left mb-4'>
        {title}
      </h3>
      <p className='text-white sm:text-base text-sm   px-0'>
       {desc}
      </p>
    </div>
  );
};

export default Box;
