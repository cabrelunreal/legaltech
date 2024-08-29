import React from 'react'
import Image from 'next/image'

interface Props{
    image: string;
    imagedescription: string;
    Name: string;
    entitle: string;
}

const Member:React.FC<Props> = ({ image, imagedescription, Name, entitle }) => {
  return (
    <div>
        <div className='w-fit'>
            <div>
                <Image
                    src={image}
                    alt={imagedescription}
                    width={300}
                    height={150}
                    className=''
                ></Image>
            </div>
            <div className='text-center py-2'>
                <h2 className='text-xl font-semibold'>{Name}</h2>
                <p className='text-sm text-green-700'>{entitle}</p>
            </div>
        </div>
    </div>
  )
}

export default Member