import React, { useState, useRef } from "react";

const Faq = ({ description, title }) => {
  const dropdownRef = useRef(null);
  const [open, setOpen] = useState(false);
  const handleClick = () => {
    setOpen(!open);
  };
  // console.log(open);
  return (
    <div className='py-2 sm:px-8 px-2 '>
      <button
        onClick={handleClick}
        type='button'
        className='py-8 sm:px-8 px-2 w-full flex justify-between items-center text-gray-800 font-bold text-xl focus:outline-none'
      >
        <h3 className=' sm:text-xl text-base text-gray-800 text-left flex flex-wrap font-bold'>
          {title}
        </h3>
        {open ? (
          <i className='fa fa-chevron-up text-gray-800 font-bold text-5xl' />
        ) : (
          <i className='fa fa-chevron-down text-gray-800 font-bold text-5xl' />
        )}
      </button>
      {open ? (
        <div
          className={`${
            open ? "flex" : "hidden"
          } py-2 sm:px-8 px-2 transition duration-100`}
          ref={dropdownRef}
        >
          <h3 className='sm:text-base text-sm text-gray-800 font-bold'>
            {description}
          </h3>
        </div>
      ) : (
        <></>
      )}
    </div>
  );
};

export default Faq;
