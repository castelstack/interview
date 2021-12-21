import React from "react";

export const MyChatTab = () => {
  return (
    <div className=' w-full grid-cols-1 grid justify-items-end '>
      <div className='bg-blue-100 p-2 rounded'>
        <p className=' border-b-1 border-gray-500 text-left sm:text-base text-sm text-gray-800 dark:text-gray-900 font-bold border-b-2'>
          Me
        </p>
        <p className='text-left sm:text-base text-sm text-gray-800 dark:text-gray-900 '>
          how are doing today?
        </p>
      </div>
    </div>
  );
};
export const OtherChatTab = () => {
  return (
    <div className=' w-full grid-cols-1 grid justify-items-start p-2'>
      <div className='bg-yellow-200 p-2 rounded'>
        <p className=' text-left sm:text-base text-sm text-gray-800 dark:text-gray-900 font-bold border-b-2'>
          Me
        </p>
        <p className='text-left sm:text-base text-sm text-gray-800 dark:text-gray-900 '>
          how are doing today?
        </p>
      </div>
    </div>
  );
};
