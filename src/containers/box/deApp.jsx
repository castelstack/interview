import React from "react";
import { Heading, SmText } from "../../constant/styles/text";
import img from "../../assets/svg/wal.svg";
import { paddingX } from "../../constant/styles/spacing";
import './style.css';

const Tab = ({title, icon, description}) => {
  return (
      <div className=' h-40 w-40  flex flex-col py-3 px-6 rounded-md  justify-items-center items-center  shadow-white'>
          <img src={img} alt='icon for dApps' className='h-20 w-20 animate-float' />
          <h5 className='text-center text-sm sm:text-base'>{title}</h5>
          {/* <SmText className='text-center text-sm sm:text-base '>{description}</SmText> */}
    </div>
  );
};

const DeApp = () => {
  return (
    <div className={`${paddingX} gradient-border m-4 grid grid-cols-1 py-8 items-center justify-items-center divide-y  bg-gray-100`} >
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
      <div className='flex gap-4 sm:p-12 p-2 justify-items-center'>
              {
                  data.map(el =>
                      <Tab key={el.title} title={el.title} icon={el.icon}/>
                    )
          }
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
