'use client'
import Header from '@/app/components/proprieteIntellectuelle/General/Header'
import WelcomeContainer from '@/app/components/proprieteIntellectuelle/General/Welcome'
import React from 'react'
import { useRouter } from 'next/navigation'
import MultiStepForm from '@/app/components/createSarl/sarlForm'
import DocCreation from '@/app/components/DocCreation'

const Step1Sarl = () => {
    const router = useRouter();
    
    const onclickEnterprise = (path: string) => {
      router.push(path);
     };

  return (
    <div>
        <div>
            <Header />
        </div>
        <div>
            <WelcomeContainer 
                title='Formulaire de creation des statuts de la SARL'
                custom='text-center uppercase'
                description='Services de création de l&apos;Entreprise individuelle simples, abordables...'
                image=''
            />
        </div>
        
        <div>
            <div className='w-full sm:w-10/12 md:w-9/12 mx-auto bg-white py-12 md:py-24'>
            <div className='text-center text-black uppercase text-2xl md:text-4xl font-bold py-4 md:py-6'>
                <h2>COMMENT ÇA MARCHE</h2>
            </div>
            <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-4 sm:px-6 lg:px-8'>
                <div className='flex justify-center items-center'>
                    <DocCreation  
                        title='Choisir le model' 
                        description='Choissisez le model fourni par tribunejustice' 
                        image='https://res.cloudinary.com/dedakscgk/image/upload/v1719703615/calling-icon_rg1jxe.svg' 
                    />
                </div>
                <div className='flex justify-center items-center'>
                    <DocCreation  
                        title='Remplir le document' 
                        description='Remplissez les informations necessaires' 
                        image='https://res.cloudinary.com/dedakscgk/image/upload/v1719703620/fournir-info_kg9qlu.svg'
                    />
                </div>
                <div className='flex justify-center items-center'>
                    <DocCreation  
                        title='Avocat en Option' 
                        description='Choississez un avocat pour vous assister' 
                        image='https://res.cloudinary.com/dedakscgk/image/upload/v1719703617/download-icon_q9qo6e.svg'
                    />
                </div>
            </div>
            </div>
        </div>
            
        <div className='px-4'>
                <div className='w-full md:w-5/12 m-auto border p-4 rounded-md shadow-sm border-gray-300'>
                    <h2 className='text-xl font-bold'>Liste d&apos;informations nécessaires pour la rédaction des statuts</h2>
                    <ul className='list-disc py-3 px-8'>
                        <li>Dénomination de la société</li>
                        <li>Situation géographique</li>
                        <li>Objet social : énumérer les activités</li>
                        <li>Montant du capital social et valeur de la part (valeur nominale minimale de 5000 F CFA)</li>
                        <li>NB : Au Cameroun, le capital minimum exigible pour les SARL est de 100.000 F CFA</li>
                        <li>Nom et adresse des associés</li>
                        <li>Libération du capital auprès d&apos;une banque ou d&apos;un notaire</li>
                        <li>Répartition du capital</li>
                        <li>Nom du gérant</li>
                    </ul>
                </div>
        </div>

            <div className='text-center pt-12 pb-4'>
                <p>Etape 1 - Etape2</p>
                <h2 className='capitalize text-2xl font-semibold'>renseignements relatifs à l&apos;entrepreneur</h2>
            </div>
            <div>
                <MultiStepForm />
            </div>
    </div>
  )
}

export default Step1Sarl