import React from "react";
import { CustomButton } from "../../components/common/button/btn";
import { Input } from "../../components/common/input";
import ChatHead from "./chatHead";
import { MyChatTab, OtherChatTab } from "./chatTab";
const ChatContainer = () => {
  return (
    <div className='grid grid-cols-1 rounded shadow-white dark:bg-dark-800'>
      <ChatHead />
      <div className='p-2 grid  grid-cols-1 gap-3'>
        <OtherChatTab />
        <MyChatTab />
        <OtherChatTab />
      </div>
      <div className='flex gap-2 items-center justify-between p-2'>
        <Input placeholder='message...' />
        <CustomButton className='bg-green-600 text-sm '>Send</CustomButton>
      </div>
    </div>
  );
};

export default ChatContainer;
