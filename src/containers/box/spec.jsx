import React from "react";
import { paddingX } from "../../constant/styles/spacing";
import Box from "./box";
import bg from "../../assets/svg/peak.svg";
import { Dark, ScrollBottom } from "../../constant/layout/animateOnScroll";
import { spec } from "../../mock/spec";
import { SmText, Heading } from "../../constant/styles/text";

const Spec = () => {
  return (
    <div className='flex flex-col'>
      <div
        className='py-12'
        style={{
          background: `linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.5)), url(${bg})`,
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          backgroundSize: "cover",
        }}
      >
        <p className='font-extrabold text-2xl pb-8 text-white text-center'>
          Zor init{" "}
        </p>

        <ScrollBottom>
          <div className={`${paddingX} grid sm:grid-cols-2 sm:gap-20 gap-8`}>
            {spec.map((el) => (
              <Box key={el.title} title={el.title} desc={el.desc} />
            ))}
          </div>
        </ScrollBottom>
      </div>
      <div className={`sm:m-4 m-2 rounded-md`}>
        <Dark>
          <div
            className={`${paddingX} py-12 flex flex-col gap-2 m-4 items-center `}
          >
            <div className={` flex flex-col gap-2 items-center`}>
              <Heading className='text-center'>Dark and Light Mode</Heading>
              <SmText className='text-center md:px-80 sm:px-8 px-0'>
                Allows users to configure the browser for their exact
                specifications. for day or night mode. Change color themes,
                tones, and light frequencies for the most comfortable web
                experience.
              </SmText>
            </div>
            <img
              src={bg}
              alt='zor dark and light mode'
              className='h-96 sm:w-96'
            />
          </div>
        </Dark>
      </div>
    </div>
  );
};

export default Spec;
