import Image from 'next/image'
import React from 'react'

interface serviceProps{
    image: string;
    title: string;
    description: string;
}

const Service:React.FC<serviceProps> = ({ title, description, image }) => {
  return (
    <div className='flex h-40'>
        <div className='px-1 rounded-sm bg-black mx-1'></div>
        <div className='bg-black flex py-4'>
            <div>
                <Image
                   src={image}
                   alt='document'
                   width={90}
                   height={90}
                   className='px-2 pt-2'
                >
                </Image>
            </div>
            <div className='px-2'>
                <h2 className='text-xl'>{title}</h2>
                <p className='py-4 text-2sm'>{description}</p>
            </div>
        </div>
    </div>
  )
}

export default Service