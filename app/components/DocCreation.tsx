import Image from 'next/image'
import { title } from 'process'
import React from 'react'

interface docProps{
    title: string;
    description: string;
    className: string;
}

const DocCreation:React.FC<docProps> = ({ title, description, className }) => {
  return (
    <div>
        <div>
            <Image
              src=''
              alt=''
              width={200}
              height={200}
              className={className}
            >
            </Image>
        </div>
        <div>
            <div>
                <h2>{title}</h2>
            </div>
            <div>
                <p>{description}</p>
            </div>
        </div>
    </div>
  )
}

export default DocCreation