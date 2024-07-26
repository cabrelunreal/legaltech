import Image from 'next/image'
import React from 'react'

interface CallsProps{
    image: string;
    description: string;
}

const Calls:React.FC<CallsProps> = ({image, description}) => {
  return (
    <div>
        <div className='justify-center'>
            <div>
                <Image
                    src={image}
                    alt=''
                    height={60}
                    width={60}
                    className='m-auto py-4'
                ></Image>  
            </div>
            <div className='text-justify px-6'>
                <p>{description}</p>
            </div>
        </div>
    </div>
  )
}

export default Calls