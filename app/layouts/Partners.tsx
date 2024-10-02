'use client'
import React from 'react'
import Heads from '../components/proprieteIntellectuelle/General/Heads'
import Image from 'next/image';

const items = [
    {
      src: 'https://res.cloudinary.com/dedakscgk/image/upload/v1723168653/logo4_kiv65s.png',
      alt: 'Slide 1'
    },
    {
      src: 'https://res.cloudinary.com/dedakscgk/image/upload/v1723168651/logo6_vsqmsa.png',
      alt: 'Slide 2'
    },
    {
      src: 'https://res.cloudinary.com/dedakscgk/image/upload/v1723168651/logo5_jieb7n.jpg',
      alt: 'Slide 3'
    },
    {
      src: 'https://res.cloudinary.com/dedakscgk/image/upload/v1723168651/logo2_qnkjui.jpg',
      alt: 'Slide 4'
    },
    {
      src: 'https://res.cloudinary.com/dedakscgk/image/upload/v1724497106/logo_ssahd5.jpg',
      alt: 'Slide 5'
    },
    {
      src: 'https://res.cloudinary.com/dedakscgk/image/upload/v1723168651/logo3_hix6h4.jpg',
      alt: 'Slide 6'
    },
    {
      src: 'https://res.cloudinary.com/dedakscgk/image/upload/v1727857984/logo_tj_xokqji.jpg',
      alt: 'Slide 7'
    }
];

const Partners = () => {
  return (
    <div className='md:w-9/12 px-8 md:px-0 m-auto py-24'>
        <div className='text-center pb-4'>
            <Heads title='Ils nous font confiance' description='' headcust='text-lg md:text-2xl capitalize' structure='font-semibold' />
        </div>
        <div className='flex justify-center space-x-4 overflow-auto'>
          {items.map((item, index) => (
            <div
              key={index}
              className='transform transition-transform duration-500 ease-in-out hover:scale-150'
              style={{
                perspective: '1000px', // Adds 3D space for zoom effect
              }}
            >
              <Image
                src={item.src}
                alt={item.alt}
                width={700}
                height={700}
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                className='w-40 h-40 object-contain'
                style={{
                  transform: 'translateZ(0)', // Resets any existing 3D transform
                }}
              />
            </div>
          ))}
        </div>
    </div>
  )
}

export default Partners;
