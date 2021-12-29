import React from "react";
import { Heading, SmText, SubText } from "../../constant/styles/text";
import img from "../../assets/svg/cha1.svg";
import bg from "../../assets/svg/fea.svg";
import img1 from "../../assets/svg/2.svg";
import img4 from "../../assets/svg/Union.svg";
import img2 from "../../assets/svg/22.svg";
import img3 from "../../assets/svg/cone.svg";
import { paddingX } from "../../constant/styles/spacing";

const Tab = ({ title, icon, description }) => {
  return (
    <div className='grid md:grid-cols-2 grid-cols-1 gap-12 '>
      <div className='relative mt-8 md:row-span-full'>
        <div className='flex gap-4 absolute lg:bottom-32 md:bottom-48 -bottom-20 sm:left-8 left-3 items-center  z-10'>
          <div className='flex flex-col -space-y-12 > * items-center z-10'>
            <img src={img1} alt='' className='md:h-20 md:w-32 h-20 w-20' />
            <img src={img3} alt='' className='md:h-20 md:w-32 h-20 w-20' />
          </div>
        </div>
        <img src={img2} alt='' className='' />{" "}
        <p className='absolute text-white lg:text-xl  md:text-sm sm:text-xl text-base px-8 lg:top-8 md:top-2 top-4 left-2'>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ex, ducimus?
          Accusamus rerum, mollitia ex nihil quas exercitationem quos et beatae
          veniam nobis quasi itaque voluptatem laborum commodi, voluptatum
          assumenda eaque?
        </p>
      </div>
      <img src={img} alt='side img' className=' row-span-full' />{" "}
    </div>
  );
};
const TabRev = ({ title, icon, description }) => {
  return (
    <div className='grid md:grid-cols-2 grid-cols-1 gap-12'>
      <img src={img} alt='side img' className='' />{" "}
      <div className='relative mt-8'>
        <div className='flex gap-4 absolute lg:bottom-32 md:bottom-48 -bottom-20 right-3 items-center  z-10'>
          <div className='flex flex-col -space-y-12 > * items-center z-10'>
            <img src={img1} alt='' className='md:h-20 md:w-32 h-20 w-20' />
            <img src={img3} alt='' className='md:h-20 md:w-32 h-20 w-20' />
          </div>
        </div>
        <img src={img4} alt='' className=' ' />{" "}
        <p className='absolute text-white lg:text-xl  md:text-sm sm:text-xl text-base px-8 lg:top-8 md:top-2 top-4 left-2'>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ex, ducimus?
          Accusamus rerum, mollitia ex nihil quas exercitationem quos et beatae
          veniam nobis quasi itaque voluptatem laborum commodi, voluptatum
          assumenda eaque?
        </p>
      </div>
    </div>
  );
};

const DeApp = () => {
  return (
    <div
      style={{
        background: `url(${bg})`,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        backgroundSize: "cover ",
      }}
      className={`${paddingX} grid grid-cols-1 py-20 `}
    ><SubText className='text-center text-white'>Some charaterics if Zor</SubText>
      <div className='grid grid-cols-1 gap-8'>
        <Tab />
        <TabRev/>
        <Tab />
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
