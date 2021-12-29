import React from "react";
import { paddingX } from "../../constant/styles/spacing";
import { Heading, SubText } from "../../constant/styles/text";
import stroke from "../../assets/svg/stroke.svg";
import bg from "../../assets/svg/bg.svg";
import { Button } from "../../components/common/button/btn";
const Footer = () => {
  return (
    <div
      className={` flex flex-col  justify-between py-20`}
      style={{
        background: `linear-gradient(rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.1)), url(${bg})`,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        backgroundSize: "cover",
        clipPath:
        "polygon(66% 1%, 71% 4%, 100% 4%, 100% 81%, 100% 100%, 0 100%, 0 4%, 29% 4%, 34% 1%)",
      }}
    >
      <div className='w-full flex flex-col items-center gap-8 md:px-32 px-4'>
        <Heading className='text-center text-white'>Zor</Heading>
        <SubText className='text-center text-white'>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vitae nemo,
          accusamus in placeat eos, Lorem, ipsum dolor sit amet
          consecteturLorem, ipsum dolor sit amet consectetur adipisicing elit.
        </SubText>
        <Button>Download</Button>
      </div>
      <div>
        <img src={stroke} alt='' />
        <div className={`${paddingX} flex flex-col md:flex-row justify-between pt-12`}>
        <div className='flex gap-4'>
          <p className='text-sm text-white'>Privacy policy</p>
          <p className='text-sm text-white'>Terms and condition</p>
          </div>
          <p className='text-sm text-white'>Copyright @2021 ZOR all human right reserved.</p>
          </div>
      </div>
    </div>
  );
};

export default Footer;
