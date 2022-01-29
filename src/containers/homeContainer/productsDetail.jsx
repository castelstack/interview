import React from 'react';

const ProductsDetail = () => {
    return (
        <div className='flex flex-col gap-2 justify-center'>
        <p className='text-black text-sm font-bold'>$120</p>
        <h1 className='text-black font-bold text-5xl'>
          NIKE WINDRUNER <br /> WILD RUN
        </h1>
        <p className='text-black text-sm font-bold'>MEN RUNNING JACKET</p>
        <p className='text-grey-600 text-sm border-t-2 border-gray-300 py-2'>
          Lorem ipsum dolor sit amet consectetur, quibusdam veniam. Voluptate
          culpa reprehenderit voluptatibus commodi eius impedit dicta! Impedit,

          culpa reprehenderit voluptatibus commodi eius impedit dicta! Impedit,
          minus?
        </p>
        <p className='text-black text-xs font-bold mt-3'>Select size</p>
        <div className='flex '>
          <button className='p-2 border-2 border-grey-400'>MD</button>
          <button className='p-2 border-2 border-black'>L</button>
          <button className='p-2 border-2 border-grey-400'>S</button>
          <button className='p-2 border-2 border-grey-400'>Xl</button>
          <button className='p-2 border-2 border-grey-400 text-xs w-max'>select guide</button>
        </div>
      </div>
    );
};

export default ProductsDetail;