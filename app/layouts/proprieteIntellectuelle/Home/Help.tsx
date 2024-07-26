import Button from '@/app/components/proprieteIntellectuelle/General/Button'
import Heads from '@/app/components/proprieteIntellectuelle/General/Heads'
import Image from 'next/image'
import React from 'react'

const Help = () => {
  const Title = 'Vous ne savez pas ce dont vous avez besoin ? Demander a un expert'
  const Description = 'Obtenez les bons conseils avec un avocat à vos côtés.'
  
  return (
    <div className='py-24 px-2'>
        <div className='w-9/12 px-24 m-auto py-12 flex border-4 border-green-600'>
            <div className='w-8/12 px-4'>
                <Heads title={Title} description={Description} structure='' />
                <Button title='Obtenir une assistance juridique' structure='bg-green-700 w-80 text-white font-bold text-xl px-6 py-1 hover:bg-green-800' />
            </div>
            <div className='w-4/12'>
                <Image
                    src='https://res.cloudinary.com/dedakscgk/image/upload/v1721945472/Rectangle_32_z9wfe3.png'
                    alt='help'
                    width={150}
                    height={150}
                    className='m-auto'
                ></Image>
            </div>
        </div>
    </div>
  )
}

export default Help