import Image from 'next/image'
import React from 'react'

interface CategoryProps{
    title?: string;
    image: string;
    description: string;
}

const Category:React.FC<CategoryProps> = ({title, image, description}) => {
  return (
    <div>
        <div className='flex'>
            <div className='px-1 rounded-md bg-gray-200'>

            </div>
            <div className='flex mx-2 h-40 py-6 bg-gray-100 w-full'>
                <div>
                    <Image
                        src={image}
                        alt={description}
                        width={100}
                        height={100}
                        className=''
                    ></Image>
                </div>
                <div>
                    <h2 className='text-2xl px-4 pt-6 font-bold'>{title}</h2>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Category