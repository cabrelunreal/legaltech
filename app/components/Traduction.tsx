import React from 'react'
import Button from './Button'
import Image from 'next/image'

interface traductionProps{
    description: string;
    image: string;
    imagedescription: string;
    onclick?: () => void;
}

const Traduction:React.FC<traductionProps> = ({description, onclick, image, imagedescription}) => {
  return (
    <div className='w-full text-black text-center rounded-md'>
        <div className='py-6 px-6'>
          <div className='h-24'>
            <Image 
                src={image}
                alt={imagedescription}
                width={80}
                height={50}
                className='m-auto'
            ></Image>
          </div>
          <div>
            <p className='text-lg'>{description}</p>
            <Button className='py-3 bg-red-600 hover:bg--red-700 text-white rounded-md px-6 mt-3' title='Commencer' onClick={onclick}/>
          </div>
            </div>
    </div>
  )
}

export default Traduction