import Image from 'next/image'
import { title } from 'process'
import React from 'react'

interface docProps{
    title: string;
    description: string;
    image: string;
}

const DocCreation:React.FC<docProps> = ({ title, description, image }) => {
  return (
    <div>
        <div className='h-80'>
            <Image
              src={image}
              alt=''
              width={300}
              height={300}
              className='justify-center m-auto'
            >
            </Image>
        </div>
        <div className='text-black text-center py-6 px-6'>
            <div className='font-semibold text-3xl'>
                <h2>{title}</h2>
            </div>
            <div className='text-lg pt-6'>
                <p>{description}</p>
            </div>
        </div>
    </div>
  )
}

export default DocCreation