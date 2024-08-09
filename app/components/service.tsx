import Image from 'next/image'
import React from 'react'

interface serviceProps{
    image: string;
    title: string;
    description: string;
}

const Service:React.FC<serviceProps> = ({ title, description, image }) => {
  return (
    <div className='flex h-32 md:h-48'>
        <div className='px-1 rounded-sm mx-1 bg-gray-100'></div>
        <div className='w-full flex py-2 md:py-6 bg-gray-100'>
            <div className='w-3/12'>
                <Image
                   src={image}
                   alt='document'
                   width={120}
                   height={90}
                   className='px-4 pt-4'
                >
                </Image>
            </div>
            <div className='px-2 w-9/12 py-2 md:px-4'>
                <h2 className='text-sm font-semibold md:text-xl'>{title}</h2>
                <p className='md:py-2 py-0 text-sm md:text-lg'>{description}</p>
            </div>
        </div>
    </div>
  )
}

export default Service