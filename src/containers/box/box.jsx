import { motion } from "framer-motion";
import React from "react";
import img from "../../assets/svg/phone.svg";
const Box = ({ title, desc }) => {
  return (
    <div className=' overflow-hidden grid grid-cols-2 h-96 gap-12 justify-items-start items-start  sm:py-12 py-3 rounded-lg bg-gradient-to-r from-primary-600  to-primary-500 shadow-white'>
      <div className='sm:px-8 p-3'>
        <h3 className='text-white text-4xl font-extrabold text-left mb-4'>
          {title}
        </h3>
        <p className='text-white sm:text-xl text-sm   px-0'>{desc}</p>
      </div>
      <motion.img
        whileHover={{
          scale: 0.9,
          transition: { duration: 0.6 },
        }}
        whileTap={{ scale: 0.5 }}
        src={img}
        alt='zor image'
        className='w-full'
      />
    </div>
  );
};

export default Box;
