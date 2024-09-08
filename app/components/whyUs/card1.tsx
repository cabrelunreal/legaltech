import React from 'react'
import Image from 'next/image'

interface Props{
    image: string;
    imagedescription: string;
    Name: string;
}

const Card1:React.FC<Props> = ({ image, imagedescription, Name }) => {
  return (
    <div>
        <div className='w-fit'>
            <div>
                <Image
                    src={image}
                    alt={imagedescription}
                    width={300}
                    height={200}
                    className='' // Added filter and grayscale classes
                ></Image>
            </div>
            <div className='text-center py-2'>
                <h2 className='text-xl font-semibold'>{Name}</h2>
            </div>
        </div>
    </div>
  )
}

export default Card1