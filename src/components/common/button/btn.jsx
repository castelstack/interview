import React from 'react';

export const Button = ({ children, type, onClick, disabled, className }) => (
  <button
    disabled={disabled}
    type={type}
    onClick={onClick}
    className={`${className} uppercase bg-gradient-to-r from-primary-500 hover:from-primary-500 to-primary-500 text-base shadow-white text-white py-4 px-8 rounded-full font-bold  transition duration-500 ease-linear focus:outline-none`}  >
   {children}
  </button>
);


export const CustomButton = ({ children, type, onClick, disabled, className }) => (
  <button
    disabled={disabled}
    type={type}
    onClick={onClick}
    className={`${className} py-2 px-5 text-sm rounded text-white transition duration-300 ease-linear focus:outline-none`}  >
    <span className="span1"> {children}</span>
  </button>
);
