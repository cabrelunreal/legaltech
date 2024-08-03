import React from 'react'
import Image from 'next/image'


interface whyProps{
    title: string;
    description: string;
    image: string;
}

const Whys:React.FC<whyProps> = ({title, description, image}) => {
  return (
    <div>
        <div className='h-24'>
            <Image
              src={image}
              alt=''
              width={70}
              height={100}
              className='justify-center m-auto place-items-center'
            >
            </Image>
        </div>
        <div className='text-black text-center py-6 px-2'>
            <div className='font-semibold text-2lg md:text-xl'>
                <h2>{title}</h2>
            </div>
            <div className='text-sm pt-1'>
                <p>{description}</p>
            </div>
        </div>
    </div>
  )
}

export default Whys