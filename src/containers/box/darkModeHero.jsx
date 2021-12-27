import React from "react";
import { paddingX } from "../../constant/styles/spacing";
import bg from "../../assets/svg/phone.svg";
import { SmText, Heading } from "../../constant/styles/text";
import DarkButton from "../../components/darkMode/DarkButton";

const DarkModeHero = () => {
  return (
    <div
      className={`${paddingX} py-12 grid grid-cols-2 justify-center h-screen my-12`}
    >
      <div className={`relative flex flex-col gap-2 p-12 shadow-white bg-gray-100 dark:bg-dark-800 transform translate-x-12 z-20`}>
          <Heading className='text-gray-800 dark:text-gray-100 '>Dark Mode <br/> and <br/> Light Mode</Heading>
          <SmText className='text-gray-800 dark:text-gray-100'>
            Allows users to configure the browser for their exact
            specifications. for day or night mode. Change color themes, tones,
            and light frequencies for the most comfortable web experience.
          </SmText>
              <div className='absolute top-4 right-4'>

      <DarkButton />
              </div>
      </div>
          <div className=' flex justify-items-center transform translate-y-12 -translate-x-12 shadow-white z-10 hover:z-40  bg-white dark:bg-dark-900'>
              
      <img src={bg} alt='zor dark and light mode' className='' />
      </div>
    </div>
  );
};

export default DarkModeHero;
