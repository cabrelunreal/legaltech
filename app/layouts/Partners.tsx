'use client'
import React from 'react'
import Heads from '../components/proprieteIntellectuelle/General/Heads'
import Carousel from '../components/Carousel'


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
      alt: 'Slide 3'
    },
    {
      src: 'https://res.cloudinary.com/dedakscgk/image/upload/v1724497106/logo_ssahd5.jpg',
      alt: 'Slide 3'
    },
    {
      src: 'https://res.cloudinary.com/dedakscgk/image/upload/v1723168651/logo3_hix6h4.jpg',
      alt: 'Slide 3'
    },
];

const Partners = () => {
  return (
    <div className='md:w-9/12 px-8 md:px-0 m-auto py-24'>
        <div className='text-center pb-4'>
            <Heads title='Ils nous font confiance' description='' headcust='text-lg md:text-2xl capitalize'  structure='font-semibold' />
        </div>
        <div>
            <Carousel items={items}/>
        </div>
    </div>
  )
}

export default Partners