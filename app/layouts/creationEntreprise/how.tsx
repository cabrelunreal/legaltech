import React from 'react'
import DocCreation from '../../components/DocCreation'

const DocCreate = () => {
  return (
    <div className='w-full sm:w-10/12 md:w-9/12 mx-auto bg-white py-12 md:py-24'>
        <div className='text-center text-black uppercase text-2xl md:text-4xl font-bold py-4 md:py-6'>
            <h2>COMMENT ÇA MARCHE</h2>
        </div>
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-4 sm:px-6 lg:px-8'>
            <div className='flex justify-center items-center'>
                <DocCreation  
                    title='Télécharger les statuts' 
                    description='Télécharger les statuts de la SARL dans tribunejustice' 
                    image='https://res.cloudinary.com/dedakscgk/image/upload/v1719703617/download-icon_q9qo6e.svg'
                />
            </div>
            <div className='flex justify-center items-center'>
                <DocCreation  
                    title='Fournir les informations nécessaires' 
                    description='Fournir les informations nécessaires aux démarches auprès du Centre de Formalités et de Création d&apos;entreprises (CFCE) et à l&apos;administration fiscale' 
                    image='https://res.cloudinary.com/dedakscgk/image/upload/v1719703620/fournir-info_kg9qlu.svg'
                />
            </div>
            <div className='flex justify-center items-center'>
                <DocCreation  
                    title='Nous contacter' 
                    description='Nous contacter pour un rendez-vous avec Fréghis, un de nos experts en création d&apos;entreprises.' 
                    image='https://res.cloudinary.com/dedakscgk/image/upload/v1719703615/calling-icon_rg1jxe.svg' 
                />
            </div>
        </div>
    </div>
  )
}

export default DocCreate
