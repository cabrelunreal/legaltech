import React from 'react'
import Button from './Button'
import Image from 'next/image'

interface traductionProps{
    description: string;
    image: string;
    imagedescription: string;
}

const Traduction:React.FC<traductionProps> = ({description, image, imagedescription}) => {
  return (
    <div>
        <div>
            <Image 
                src={image}
                alt={imagedescription}
                width={180}
                height={180}
                className=''
            ></Image>
            <p>{description}</p>
            <Button className='' title='Commencer' />
        </div>
    </div>
  )
}

export default Traduction