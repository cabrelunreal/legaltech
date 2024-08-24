'use client'
import Card from '@/app/components/creationDesDocuments/Card'
import { useRouter } from 'next/navigation';
import React from 'react'

const Cards = () => {
    const router = useRouter();

    const onclickEnterprise = (path: string) => {
        router.push(path);
    };

  return (
    <div>
        <div className='w-11/12 md:w-8/12 px-24 m-auto py-12'>
            <div className='text-center py-8'>
                <h2 className='text-2xl sm:text-3xl font-semibold'>NOS DOCUMENTS</h2>
                <p className='text-base sm:text-lg pt-4 pb-6'>Le plus difficile pour vous est de choisir le document à Créer</p>
            </div>
            <div className='w-full m-auto grid grid-cols-1 md:grid-cols-2 gap-2'>
                <div className="flex justify-center items-center">
                    <Card
                        title="Création des Statuts de SARL"
                        content="Votre statut prérempli mis à votre disposition."
                        image="https://res.cloudinary.com/dedakscgk/image/upload/v1719703614/contract_2_r4qk1m.svg" 
                        onclick={() => onclickEnterprise('../../pages/createSarl')}
                    />
                </div>
                <div className="flex justify-center items-center">
                    <Card
                        title="Création de l&apos;entreprise Individuelle"
                        content="Remplissez notre formulaire pour la création de votre établissement."
                        image="https://res.cloudinary.com/dedakscgk/image/upload/v1719703630/office-building-red_s0l7wt.svg"
                        onclick={() => onclickEnterprise('../../pages/INdivEnterprise')}
                    />
                </div>
            </div>
        </div>
    </div>
  )
}

export default Cards
