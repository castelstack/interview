import React from 'react';
import { paddingX } from '../../constant/styles/spacing';

const Footer = () => {
    return (
        <div className={`${paddingX} flex justify-between py-12 bg-gray-200`}>
            <ul className='flex flex-col sm:flex-row gap-8'>
                <li className='sm:text-base text-sm text-gray-800'>
                    About
                </li>
                <li className='sm:text-base text-sm text-gray-800'>
                    Contact Us
                </li>
                <li className='sm:text-base text-sm text-gray-800'>
                    Privacy
                </li>
                <li className='sm:text-base text-sm text-gray-800'>
                    Terms and Conditions
                </li>
            </ul>
            <p className='sm:text-base text-sm text-gray-800'>
            Copyright © 2021 ZOR. All rights reserved.
            </p>
        </div>
    );
};

export default Footer;