import BeforeHeader from '@/app/components/proprieteIntellectuelle/General/BeforeHeader'
import Header from '@/app/components/proprieteIntellectuelle/General/Header'
import Heads from '@/app/components/proprieteIntellectuelle/General/Heads'
import React from 'react'
import Image from 'next/image'
import Button from '@/app/components/proprieteIntellectuelle/General/Button'

const DownloadSuccess = () => {
  return (
    <div>
        <div>
            <div>
                <BeforeHeader />
                <Header />
            </div>
            <div className='py-12'>
                <Heads 
                    title='téléchargement reussi'
                    headcust='uppercase md:text-3xl'
                    cust='uppercase'
                    description='Votre document a été téléchargé avec succès'
                    structure='text-center'
                />
                <div className='flex justify-center py-2 w-auto m-auto'>
                    <Image
                        src='https://res.cloudinary.com/dedakscgk/image/upload/v1719703613/Achievement-pana_phkflr.png'
                        alt='success'
                        width={500}
                        height={100}
                        objectFit=''
                        className=''
                    ></Image>
                </div>
                <div className='flex justify-center'>
                    <Button title='Fichier Recu' structure='bg-green-700 text-white py-3 px-4 rounded-sm uppercase hover:bg-green-800' />
                </div>
            </div>
        </div>
    </div>
  )
}

export default DownloadSuccess