/* eslint-disable @next/next/no-img-element */
// components/Card.tsx
import Image from 'next/image';
import React from 'react';
import Button from '../proprieteIntellectuelle/General/Button';

interface CardProps {
  title: string;
  content: string;
  image: string;
  onclick?: () => void;
}

const Card: React.FC<CardProps> = ({ title, content, image, onclick }) => {
  return (
    <div className="relative flex flex-col items-center p-4">
        <div className='relative w-8/12 flex bg-green-700 justify-center'>
            <Image 
                src={image} 
                alt={title}
                width={72}
                height={72}
                style={{ objectFit: 'fill', objectPosition: 'center' }}
                className="h-48 w-48 rounded-full bg-green-700 absolute top-[-24px]" 
            ></Image>
        </div>
        <div className='bg-gray-100 mt-24 text-center pb-14 py-3 pt-24 px-8 rounded-md'>  
            <h2 className="text-2xl text-green-900 font-semibold mt-2">{title}</h2>
            <p className="text-lg mt-1">{content}</p>
            <Button title='commencer' 
              onClick={onclick} 
              structure='py-3 px-6 border-2 border-green-700 font-semibold hover:bg-green-700 text-green-700 hover:text-white rounded-md mt-8' 
            />
        </div>
    </div>
  );
};

export default Card;
