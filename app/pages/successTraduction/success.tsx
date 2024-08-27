import BeforeHeader from '@/app/components/proprieteIntellectuelle/General/BeforeHeader'
import Header from '@/app/components/proprieteIntellectuelle/General/Header'
import Heads from '@/app/components/proprieteIntellectuelle/General/Heads'
import React from 'react'
import Image from 'next/image'
import Button from '@/app/components/proprieteIntellectuelle/General/Button'

const TranslateSuccess = () => {
  return (
    <div>
        <div>
            <div>
                <Header />
            </div>
            <div className='py-12'>
                <Heads 
                    title='Félicitations'
                    headcust='uppercase md:text-3xl'
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
                <div className='text-center md:px-8 px-2 w-6/12 m-auto py-4'>
                    <h2 className='uppercase text-lg md:text-2xl font-semibold py-1'>votre document est en traduction</h2>
                    <p className='text-sm md:text-2lg'>Vous pouvez consulter les avancer de la traduction de votre document en cliquant sur le bouton &apos; ETAT DE VOTRE DOCUMENT&apos; cela vous permet d&apos;avoir les informations à temps réel de votre document .</p>
                </div>
                <div className='flex justify-center'>
                    <Button title='Etat de Votre Document' structure='bg-green-700 text-white py-3 px-4 rounded-sm uppercase hover:bg-green-800' />
                </div>
            </div>
        </div>
    </div>
  )
}

export default TranslateSuccess