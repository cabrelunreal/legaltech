import Image from 'next/image';
import React from 'react';

interface CallsProps {
  image: string;
  description: string;
}

const Calls: React.FC<CallsProps> = ({ image, description }) => {
  return (
    <div className='flex flex-col items-center text-center md:text-left'>
      <div className='flex justify-center mb-4'>
        <Image
          src={image}
          alt=''
          height={60}
          width={60}
          className='m-auto'
        />
      </div>
      <div className='px-4 md:px-6'>
        <p className='text-base md:text-lg'>{description}</p>
      </div>
    </div>
  );
}

export default Calls;
