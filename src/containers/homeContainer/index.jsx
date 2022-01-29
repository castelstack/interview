import React from 'react';
import ImageView from './imageView';
import ProductsDetail from './productsDetail';

const HomePage = () => {
    return (
        <div className='flex md:flex-row flex-col h-screen gap-12'>
            <ProductsDetail/>
            <ImageView/>
        </div>
    );
};

export default HomePage;