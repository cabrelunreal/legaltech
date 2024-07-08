import React from 'react'
import Button from './Button'
import Image from 'next/image'

interface traductionProps{
    description: string;
    image: string;
    imagedescription: string;
    onClick?: () => void;
}

const Traduction:React.FC<traductionProps> = ({description, onClick, image, imagedescription}) => {
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
            <Button className='' title='Commencer' onClick={onClick}/>
        </div>
    </div>
  )
}

export default Traduction