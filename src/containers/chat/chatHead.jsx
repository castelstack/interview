import React, { useState } from "react";
import { CustomButton } from "../../components/common/button/btn";

const ChatHead = () => {
    const [admin, setAdmin] = useState(false);
  return (
    <div className='px-2 py-4 bg-gray-100 dark:bg-dark-700 rounded'>
        {
              admin ?
              <div className='flex gap-2 items-center justify-between'>
        <h4 className='font-bold text-base text-gray-800 dark:text-gray-200 '>
          Chat subject
        </h4>
        <div className='flex gap-2 items-center justify-between'>
          <h4 className='font-bold text-base text-blue-800 dark:text-blue-600 px-2 py-1 bg-blue-100 rounded-full'>
            Pass****
          </h4>
          <CustomButton className='bg-green-600 text-sm rounded-full'>Change</CustomButton>
        </div>
      </div>
                  :
                  
      <div className='flex gap-2 items-center justify-between'>
        <h4 className='font-bold text-base text-gray-800 dark:text-gray-200 '>
          Chat subject <sup className='text-yellow-700 text-base'>*</sup>
        </h4>

        <h4 className='font-bold text-base px-2 py-1 bg-blue-100 dark:bg-blue-200 rounded-full text-blue-800 dark:text-blue-600 '>
          Pass****
        </h4>
      </div>
        }

      
    </div>
  );
};

export default ChatHead;
