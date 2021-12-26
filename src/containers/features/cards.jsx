import React from "react";
import { Heading } from "../../constant/styles/text";
import img from "../../assets/svg/computer.svg";
import "./style.css";
import { ScrollInRight , ScrollInLeft } from "../../constant/layout/animateOnScroll";

export const FeatureCardRight = () => {
  return (
    <div className='flex sm:flex-row flex-col w-full justify-between items-center'>
        <img src={img} alt='zor features' className='sm:h-96 h-40 w-2/4 px-12 text-white' />
        <ScrollInRight>
        <div className='card w-3/4  h-96 rounded-l-md p-12 bg-primary-900 float-right justify-self-end'>
          <Heading className='text-left text-white mb-6'>
            Secured
          </Heading>
          <p className='text-left text-white text-sm sm:text-base '>
            Personal privacy of community members is ZOR’s number one priority.
            Built into the ZOR browser is our customs-built VPN tool, allowing
            for full anonymity throughout browning time
          </p>
        </div>
    </ScrollInRight>
      </div>
  );
};

export const FeatureCardLeft = () => {
  return (
    <div className='flex sm:flex-row flex-col items-center'>
        <ScrollInLeft>
        <div className='card w-3/4  h-96 rounded-r-md p-12 bg-primary-900'>
          <Heading className='text-right text-white mb-6'>Fast and ad-Free</Heading>
          <p className='text-right text-white text-sm sm:text-base '>
            The currency that powers it all. ZOR Token constitutes the
            ecosystem’s unique cryptocurrency. After receiving pay-outs for
            their use of the ZOR Browser, users can redeem Tokens for e-commerce
            offers available only to the ZOR community.
          </p>
        </div>
        </ScrollInLeft>
        <img
          src={img}
          alt='zor features'
          className='h-96 w-2/4 px-12 text-white'
        />
      </div>
  );
};

export const FeatureCardRight1 = () => {
  return (
    <div className='flex sm:flex-row flex-col items-center'>
      <img src={img} alt='zor features' className='h-96 w-2/4  px-12 text-white' />
      <ScrollInRight>
      <div className='card w-3/4  h-96 rounded-l-md p-12 bg-primary-900 float-right justify-self-end'>
        <Heading className='text-left text-white mb-6'>Multilayered VPN</Heading>
        <p className='text-left text-white text-sm sm:text-base '>
          Personal privacy of community members is ZOR’s number one priority.
          Built into the ZOR browser is our customs-built VPN tool, allowing for
          full anonymity throughout browning time
        </p>
      </div>
      </ScrollInRight>
    </div>
  );
};

export const FeatureCardLeft1 = () => {
  return (

    <div className='flex sm:flex-row flex-col items-center'>
      <ScrollInLeft>

      <div className='card sm:w-3/4 w-full h-96 rounded-r-md p-12 float-left items-center bg-primary-900'>
        <Heading className='text-right text-white mb-6'>ZOR Token</Heading>
        <p className='text-right text-white text-sm sm:text-base '>
          The currency that powers it all. ZOR Token constitutes the ecosystem’s
          unique cryptocurrency. After receiving pay-outs for their use of the
          ZOR Browser, users can redeem Tokens for e-commerce offers available
          only to the ZOR community.
        </p>
      </div>
      </ScrollInLeft>
      <img
        src={img}
        alt='zor features'
        className='h-96 w-2/4 px-12 text-white'
      />
    </div>
  );
};
