import Image from 'next/image';
import React from 'react';

interface CategoryProps {
  title?: string;
  image: string;
  description: string;
}

const Category: React.FC<CategoryProps> = ({ title, image, description }) => {
  return (
    <div className='flex flex-col md:flex-row items-center md:items-start bg-gray-100 p-4 rounded-md shadow-sm'>
      <div className='flex-shrink-0'>
        <Image
          src={image}
          alt={description}
          width={100}
          height={100}
          className='object-contain'
        />
      </div>
      <div className='md:ml-4 mt-4 md:mt-0 w-full grid place-items-center h-18 md:h-24 md:text-left'>
        <h2 className='text-xl md:text-2xl text-center font-bold'>{title}</h2>
      </div>
    </div>
  );
};

export default Category;
