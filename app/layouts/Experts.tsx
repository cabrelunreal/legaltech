import React from 'react'
import Consult from '../components/Consult'
import Image from 'next/image'

const Experts = () => {
  return (
    <div className='w-7/12 px-24 m-auto text-center'>
        <div>
            <h2 className='text-4xl uppercase font-semibold py-2'>Nos experts</h2>
            <p className='text-lg'>Parce que vos angagements est la chose la plus importante ! Créez des documents juridiques rapidement et profiter de vos précieux moment en famille</p>
        </div>
        <div className='grid grid-cols-2 w-full pt-6'>
            <div>
                <Consult />
            </div>
            <div className='pt-12'>
                <Image
                    src='https://res.cloudinary.com/dedakscgk/image/upload/v1719703622/Groupe_924_kpdnr9.svg'
                    alt='expert'
                    width={1000}
                    height={1000}
                    className=''
                ></Image>
            </div>
        </div>
    </div>
  )
}

export default Experts