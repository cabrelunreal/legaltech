import Calls from '@/app/components/proprieteIntellectuelle/General/Calls'
import Heads from '@/app/components/proprieteIntellectuelle/General/Heads'
import React from 'react'

const How = () => {
  return (
    <div>
        <div className='w-9/12 m-auto py-8'>
            <div>
                <Heads 
                    title='COMMENT ÇA MARCHE'
                    description='Avec notre service en deux étapes, vous obtenez : '
                    structure='text-center'
                />
            </div>
            <div className='grid grid-cols-2 w-9/12 m-auto gap-12 px-32'>
                <div>
                    <Calls
                        image='https://res.cloudinary.com/dedakscgk/image/upload/v1721950778/operateur_x5ha9m.png'
                        description='Consultation juridique avec un spécialiste en droit d’auteur'
                    />   
                </div>
                <div>
                    <Calls
                        image='https://res.cloudinary.com/dedakscgk/image/upload/v1721950778/fichier-et-dossier_tonkmi.png'
                        description='Préparation et dépôt de votre demande de protection complétée par un expert.'
                    />  
                </div>
            </div>
        </div>
    </div>
  )
}

export default How