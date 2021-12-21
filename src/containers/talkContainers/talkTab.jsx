import React, { useState } from "react";
import { CustomButton } from "../../components/common/button/btn";
import { PasswordInput, Input } from "../../components/common/input";

const TalkTab = () => {
  const [locked, setLocked] = useState(true);
  const [open, setOpen] = useState(false);
  return (
    <div className='grid grid-cols-1 gap-2 flex-grow items-center rounded bg-gray-100 dark:bg-dark-700  hover:shadow-white py-2 px-2'>
      {open ? (
        <div className='flex gap-2 items-center justify-between'>
          <h3 className='text-gray-800 dark:text-gray-200 flex flex-wrap text-base'>
            let talk football 
          </h3>
          <button
            onClick={() => {
              setOpen(!open);
              setLocked(true);
            }}
            className='text-red-500 font-bold px-2'
          >
            close
          </button>
        </div>
      ) : (
        ""
      )}
      <div className='flex gap-2 items-center justify-between'>
        {open ? (
          <Input placeholder='Password' />
        ) : (
          <h3 className='text-gray-800 dark:text-gray-200  text-base'>
            let talk football 
          </h3>
        )}
        {locked ? (
          <CustomButton
            className='bg-green-800 text-sm '
            onClick={() => {
              setOpen(true);
              setLocked(false);
            }}
          >
            Locked
          </CustomButton>
        ) : (
          <CustomButton className='bg-green-600 text-sm '>Join</CustomButton>
        )}
      </div>
    </div>
  );
};

export default TalkTab;
