import Image from 'next/image'
import { title } from 'process'
import React from 'react'

interface docProps{
    title: string;
    description: string;
    image: string;
}

const DocCreation:React.FC<docProps> = ({ title, description, image}) => {
  return (
    <div>
        <div className='h-72 md:h-80'>
            <Image
              src={image}
              alt=''
              width={260}
              height={300}
              className='justify-center m-auto classname'
            >
            </Image>
        </div>
        <div className='text-black text-center md:py-2 px-8 md:px-6'>
            <div className='font-semibold text-lg md:text-2xl'>
                <h2>{title}</h2>
            </div>
            <div className='md:text-lg text-sm py-2 md:pt-3'>
                <p>{description}</p>
            </div>
        </div>
    </div>
  )
}

export default DocCreation