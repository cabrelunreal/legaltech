import React from 'react'
import Consult from '../components/Consult'
import Image from 'next/image'

const Experts = () => {
  return (
    <div className='w-full md:w-9/12 px-4 md:px-24 m-auto text-center pb-14'>
        <div>
            <h2 className='md:text-3xl uppercase text-xl font-semibold py-2'>CONTACTEZ NOS EXPERTS</h2>
        </div>
        <div className='grid md:grid-cols-2 w-full pt-6'>
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