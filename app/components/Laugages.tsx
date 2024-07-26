import Image from 'next/image'
import { title } from 'process'
import React from 'react'

interface docProps{
    title: string;
    description: string;
    image: string;
}

const Laugages:React.FC<docProps> = ({ title, description, image}) => {
  return (
    <div>
        <div className='h-24 my-6'>
            <Image
              src={image}
              alt=''
              width={100}
              height={100}
              className='justify-center m-auto classname'
            >
            </Image>
        </div>
        <div className='text-center py-1 px-6'>
            <div className='font-semibold text-2xl'>
                <h2>{title}</h2>
            </div>
            <div className='text-lg pt-1'>
                <p>{description}</p>
            </div>
        </div>
    </div>
  )
}

export default Laugages