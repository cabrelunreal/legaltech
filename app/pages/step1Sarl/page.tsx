'use client'
import Header from '@/app/components/proprieteIntellectuelle/General/Header'
import WelcomeContainer from '@/app/components/proprieteIntellectuelle/General/Welcome'
import React from 'react'
import { useRouter } from 'next/navigation'
import MultiStepForm from '@/app/components/createSarl/sarlForm'

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
        
        <div className='py-4'>
            
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
    </div>
  )
}

export default Step1Sarl