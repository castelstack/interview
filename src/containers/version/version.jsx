import React from "react";
import { paddingX } from "../../constant/styles/spacing";
import { MdHeading } from "../../constant/styles/text";
import { versionDesktop, versionMobile } from "../../mock/version";
import Tab from "./tab";

const Version = () => {
  return (
      <div className={`${paddingX} py-12 gap-12`}>
          {/* for desktop */}
      <div className='sm:grid hidden'>
        <MdHeading>
          Download ZOR for <br /> computers
        </MdHeading>
        <div className='flex flex-col divide-y'>
          {versionDesktop.map((el) => (
            <Tab key={el.title} title={el.title} description={el.description} />
          ))}
        </div>
      </div>
          {/* for mobile */}
      <div>
        <MdHeading>
          Download ZOR for <br /> mobile
        </MdHeading>
        <div className='flex flex-col divide-y'>
          {versionMobile.map((el) => (
            <Tab key={el.title} title={el.title} description={el.description} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Version;
