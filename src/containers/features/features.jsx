import React from "react";
import {
  FeatureCardRight
} from "./cards";
import bg from "../../assets/svg/feaa.svg";
import { paddingX } from "../../constant/styles/spacing";

const Features = () => {
  return (
    <div className={`${paddingX} grid grid-cols-1  py-40 `}
    style={{
      background: `linear-gradient(rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.1)), url(${bg})`,
      backgroundRepeat: "no-repeat",
      backgroundPosition: "center",
      backgroundSize: "cover",
    }}>
      <h1 className='text-3xl text-center font-extrabold text-white mb-40 '>
        Built-in functions
      </h1>
      <div className='grid lg:grid-cols-2 md:grid-cols-1 lg:gap-x-20 gap-y-40'>
        <FeatureCardRight />
        <FeatureCardRight />
         <FeatureCardRight />
          <FeatureCardRight />

         <FeatureCardRight />
          <FeatureCardRight />
      </div>
    </div>
  );
};

export default Features;
