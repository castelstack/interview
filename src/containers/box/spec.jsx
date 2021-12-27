import React from "react";
import { paddingX } from "../../constant/styles/spacing";
import Box from "./box";
import bg from "../../assets/svg/peak.svg";
import { Dark, ScrollBottom } from "../../constant/layout/animateOnScroll";
import { spec } from "../../mock/spec";
import { SmText, Heading } from "../../constant/styles/text";
import DarkButton from "../../components/darkMode/DarkButton";

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
          <div className={`${paddingX} grid grid-cols-1 sm:gap-20 gap-8`}>
            {spec.map((el) => (
              <Box key={el.title} title={el.title} desc={el.desc} />
            ))}
          </div>
        </ScrollBottom>
      </div>
    
    </div>
  );
};

export default Spec;
