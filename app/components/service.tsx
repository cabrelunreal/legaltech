import Image from 'next/image'
import React from 'react'

interface serviceProps{
    title: string;
    description: string;
    className: string;
}

const service:React.FC<serviceProps> = ({ title, description, className }) => {
  return (
    <div>
        <div></div>
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
                <h2>{title}</h2>
                <p>{description}</p>
            </div>
        </div>
    </div>
  )
}

export default service