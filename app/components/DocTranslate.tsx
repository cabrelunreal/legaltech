import React from 'react'
import Button from './Button'
import Image from 'next/image'

interface translateProps{
    image: string;
    title: string;
    buttonClass: string;
    buttonTitle: string;
}

const DocTranslate:React.FC<translateProps> = ({ image, title, buttonClass, buttonTitle}) => {
  return (
    <div className='bg-gray-100'>
        <div>
            <Image
               src={image}
               alt=''
               width={200}
               height={200}
               className=''
            >
            </Image>
        </div>
        <div className='w-full'>
            <div>
                {title}
            </div>
            <div>
                <Button className={buttonClass} title={buttonTitle}></Button>
            </div>
        </div>
    </div>
  )
}

export default DocTranslate