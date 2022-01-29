import { useState } from "react";
import img1 from "../../assets/1.jpeg";
import img2 from "../../assets/2.jpg";
import img3 from "../../assets/3.jpeg";
import img4 from "../../assets/4.jpeg";

const ImageView = () => {
  const [image, setImage] = useState(img1);
  const images = [img1, img2, img3, img4];
  return (
  
 
      <div className='flex  gap-2'>
        <div className=' w-96' >
          <img className='h-screen w-96' src={image} alt='product image' />
        </div>
        <div className='flex flex-col gap-2 justify-items-stretch'>
          <button  className='justify-self-stretch' onClick={() => setImage(images[0])}>
            <div className='h-40 w-40'>
              <img className='h-40 w-40' src={images[0]} alt='product image' />
            </div>
          </button>
          <button  className='justify-self-stretch' onClick={() => setImage(images[1])}>
            <div className='h-40 w-40'>
              <img className='h-40 w-40' src={images[1]} alt='product image' />
            </div>
          </button>
          <button  className='justify-self-stretch' onClick={() => setImage(images[2])}>
            <div className='h-40 w-40'>
              <img className='h-40 w-40' src={images[2]} alt='product image' />
            </div>
          </button>
        </div>
      </div>
  );
};

export default ImageView;
