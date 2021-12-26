import React from "react";
import {
  FeatureCardRight,
  FeatureCardLeft,
  FeatureCardRight1,
  FeatureCardLeft1,
} from "./cards";

const Features = () => {
  return (
    <div className='sm:grid hidden grid-cols-1 py-20 bg-gray-100'>
      {/* <h1 className='text-3xl font-extrabold text-primary-800 pb-12 uppercase ml-5'>
        What do we have?
      </h1> */}
      <div className='grid grid-cols-1 gap-12'>
        <FeatureCardRight />
        <FeatureCardLeft />
        <FeatureCardRight1 />
        <FeatureCardLeft1 />
      </div>
    </div>
  );
};

export default Features;
