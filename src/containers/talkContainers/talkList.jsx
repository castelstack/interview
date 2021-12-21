import React from "react";
import { Heading } from "../../constant/styles/text";
import ChatContainer from "../chat";
import TalkTab from "./talkTab";

const TalkList = ({ className }) => {
  return (
    <div
      className={` grid grid-cols-1 p-4  shadow-white  ${className} rounded bg-gray-100 dark:bg-dark-800 w-full`}
    >
      <Heading>Join a Talk</Heading>
      <div className={` grid grid-cols-1 gap-2 p-2 overflow-y-scroll h-full`}>
        {/* maps of talk tabs */}
        <TalkTab />
        <TalkTab /> <TalkTab /> <TalkTab />
         <TalkTab />
        <TalkTab /> <TalkTab /> <TalkTab />
          </div>
          
         
    </div>
  );
};

export default TalkList;
