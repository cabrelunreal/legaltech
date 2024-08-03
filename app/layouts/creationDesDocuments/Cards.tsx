import Card from '@/app/components/creationDesDocuments/Card'
import React from 'react'

const Cards = () => {
  return (
    <div>
        <div className='w-11/12 sm:w-10/12 lg:w-9/12 m-auto py-12 lg:py-24'>
            <div className='text-center py-8'>
                <h2 className='text-2xl sm:text-3xl font-semibold'>NOS DOCUMENTS LES PLUS POPULAIRES</h2>
                <p className='text-base sm:text-lg pt-4 pb-6'>Le plus difficile pour vous est de choisir le document à Créer</p>
            </div>
            <div className='w-full m-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8'>
                <div className="flex justify-center items-center">
                    <Card
                        title="Les contrats"
                        content="Vos contrats mise à votre disposition facilement"
                        image="https://res.cloudinary.com/dedakscgk/image/upload/v1719703614/contract_2_r4qk1m.svg" 
                    />
                </div>
                <div className="flex justify-center items-center">
                    <Card
                        title="Création d'entreprise"
                        content="Vos contrats mise à votre disposition facilement"
                        image="https://res.cloudinary.com/dedakscgk/image/upload/v1719703630/office-building-red_s0l7wt.svg" 
                    />
                </div>
                <div className="flex justify-center items-center">
                    <Card
                        title="Gestion d'entreprise"
                        content="Gérer vos entreprise depuis votre domicile."
                        image="https://res.cloudinary.com/dedakscgk/image/upload/v1719703633/skyline_agut0e.svg" 
                    />
                </div>
            </div>
        </div>
    </div>
  )
}

export default Cards
