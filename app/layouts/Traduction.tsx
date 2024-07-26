import React from 'react'
import Traduction from '../components/Traduction'
import Image from 'next/image'

const Traductions = () => {

  return (
    <div className='w-9/12 m-auto py-12 my-8 text-white'>
        <div>
            <div className='w-full text-center'>
                <h2 className='uppercase text-3xl pb-2 text-semibold'>traduction des documents</h2>
                <p className='text-lg'>Protéger juridiquement vos produits</p>
            </div>
            <div className='w-8/12 m-auto my-8 grid grid-cols-2'>
                <div>
                    <Image 
                        src='https://res.cloudinary.com/dedakscgk/image/upload/v1719703622/Groupe_198_pzwjwp.png'
                        alt='documents'
                        width={500}
                        height={300}
                        className=''
                    ></Image>
                </div>
                <div className='w-full grid grid-cols-2 gap-2'>
                    <div className='bg-gray-50 rounded-md'>
                        <Traduction image='https://res.cloudinary.com/dedakscgk/image/upload/v1719703613/attestation_zbnud8.svg' description='Contrats d&apos;affaires' imagedescription='contrats' />
                    </div>
                    <div className='bg-gray-50 rounded-md'>
                        <Traduction image='https://res.cloudinary.com/dedakscgk/image/upload/v1719703613/attestation_zbnud8.svg' description='Contrats' imagedescription='contrats'  />
                    </div>
                    <div className='bg-gray-50 rounded-md'>
                        <Traduction image='https://res.cloudinary.com/dedakscgk/image/upload/v1719703617/document_3_bwe9g3.svg' description='Documents OHADA' imagedescription='OHADA' />
                    </div>
                    <div className='bg-gray-50 rounded-md'>
                        <Traduction image='https://res.cloudinary.com/dedakscgk/image/upload/v1719703630/paper_1_t8npck.svg' description='Autre documents' imagedescription='docs' />
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Traductions