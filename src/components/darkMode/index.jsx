import React from "react";
import DarkMode from "../../constant/dark";
import { paddingX } from "../../constant/styles/spacing";
import { SmText } from "../../constant/styles/text";

const DarkModeToggle = () => {
  const [colorTheme, setIsDarkMode, dark] = DarkMode();
  return (
   
      <button
        onClick={() => setIsDarkMode(colorTheme)}
        className='justify-self-end max-w-min p-3 text-3xl bg-gray-100 grid dark:bg-dark-700 rounded-full shadow-white'
      >
        {dark ? (
          <div className='flex items-center gap-2 '>
            <i
              className='fa fa-sun-o text-white '
              aria-hidden='true'
            ></i>
            
          </div>
        ) : (
          <div className='flex items-center gap-2 focus:'>
            {" "}
            <i className='fa fa-moon-o text-gray-800 ' aria-hidden='true' />
           
          </div>
        )}
      </button>
   
  );
};

export default DarkModeToggle;
