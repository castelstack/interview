import React from "react";
import { Heading, SmText } from "../../constant/styles/text";
import img from "../../assets/svg/wal.svg";
import { paddingX } from "../../constant/styles/spacing";
import './style.css';

const Tab = ({title, icon, description}) => {
  return (
      <div className=' gradient-border  flex flex-col p-2 rounded-md h-40 justify-items-center items-center w-full'>
          <img src={img} alt='icon for dApps' className='h-12 w-12 animate-float' />
          <h5 className='text-center text-sm sm:text-base'>{title}</h5>
          {/* <SmText className='text-center text-sm sm:text-base '>{description}</SmText> */}
    </div>
  );
};

const DeApp = () => {
  return (
    <div className={`${paddingX} grid sm:grid-cols-2 py-8 items-center sm:divide-x divide-none bg-gray-100`} >
      <div className='grid grid-cols-2 sm:row-start-1 row-start-2 sm:gap-8 gap-2 sm:p-12 p-2 justify-items-center'>
              {
                  data.map(el =>
                      <Tab key={el.title} title={el.title} icon={el.icon}/>
                    )
          }
      </div>
      <div className='flex flex-col md:p-12 p-2 pb-4'>
        <Heading className='pb-8 sm:text-left text-center'>Decentralized Applications</Heading>
        <SmText className=' sm:text-left text-center'>
          The modern world’s dramatic increase in internet use sparked the
          demand to make more and more digital tools part and parcel of the web
          browsing experience. In addition to its built-in programs, ZOR’s
          browser offers templates for the construction of decentralized apps
          that can be accessed by all the ecosystem’s use
        </SmText>
      </div>
    </div>
  );
};

const data = [
  {
    title: "Dapps",
    description: "",
    icon: "",
    },
    {
        title: "Crypto wallet",
        description: "",
        icon: "",
    },
    {
        title: "Blockchain ecosystem",
        description: "",
        icon: "",
    },
    {
        title: "DeFi",
        description: "",
        icon: "",
      },
];
export default DeApp;
