'use client'
import React, { useEffect } from 'react'
import DocCreation from '../components/DocCreation'
import AOS from 'aos' // Import AOS
import 'aos/dist/aos.css' // Import AOS styles

const title1 = 'Choisir un modèle'
const title2 = 'Remplir le document'
const title3 = 'Avocats en option'

const image1 = 'https://res.cloudinary.com/dedakscgk/image/upload/v1719703612/choisir_model_qxnvsl.svg'
const image2 = 'https://res.cloudinary.com/dedakscgk/image/upload/v1719703632/remplir_le_document_xklo0a.svg'
const image3 = 'https://res.cloudinary.com/dedakscgk/image/upload/v1719703612/advocats_en_option_gkeapb.svg'

const description1 = 'Dans le grand souci de vous faciliter la conception de vos documents, nous vous proposons des modèles. Choisissez votre modèle.'
const description2 = 'Vous devez uniquement remplir les informations. Des questions simples et claires vous seront posées pour que vous sachez quelles informations sont demandées dans chaque champ.'
const description3 = "Vous pouvez vous faire assister d'un expert pour la relecture de vos documents."

const DocCreate = () => {
  useEffect(() => {
    AOS.init(); // Initialize AOS
  }, []);

  return (
    <div className='w-full sm:w-11/12 md:w-10/12 lg:w-9/12 mx-auto py-12 md:py-14'>
        <div className='py-3 px-8'>
            <div className='text-center text-black uppercase text-lg md:text-3xl font-semibold py-0 md:py-2'>
                <h2>COMMENT CREER VOTRE ENTREPRISE</h2>
            </div>
            <div className='text-black text-center text-sm md:text-xl py-2 md:py-2'>
                <p>Nous vous présentons comment créer votre entreprise ici.</p>
            </div>
        </div>
        
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-4 sm:px-6 lg:px-8'>
            <div className='flex justify-center items-center'>
                <DocCreation  
                    title='Nous contacter' 
                    description='Contactez-nous pour un rendez-vous avec Fréghis, un de nos experts en création d&apos;entreprises.' 
                    image='https://res.cloudinary.com/dedakscgk/image/upload/v1719703615/calling-icon_rg1jxe.svg' 
                />
            </div>
            <div className='flex justify-center items-center'>
                <DocCreation  
                    title='Fournir les documents nécessaires' 
                    description='Fournissez les documents nécessaires auprès du notaire ou du CFCE et à l&apos;Administration fiscale.' 
                    image='https://res.cloudinary.com/dedakscgk/image/upload/v1719703620/fournir-info_kg9qlu.svg'
                />
            </div>
            <div className='flex justify-center items-center'>
                <DocCreation  
                    title='Télécharger les statuts' 
                    description='Téléchargez les statuts de la SARL sur Tribunejustice' 
                    image='https://res.cloudinary.com/dedakscgk/image/upload/v1719703617/download-icon_q9qo6e.svg'
                />
            </div>
        </div>
    </div>
  )
}

export default DocCreate
