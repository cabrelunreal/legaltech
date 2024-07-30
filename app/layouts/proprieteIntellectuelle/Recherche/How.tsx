import Calls from '@/app/components/proprieteIntellectuelle/General/Calls';
import Heads from '@/app/components/proprieteIntellectuelle/General/Heads';
import React from 'react';

const How = () => {
  return (
    <div className='py-8'>
      <div className='max-w-screen-lg mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='mb-8'>
          <Heads 
            title='COMMENT ÇA MARCHE'
            description='Avec notre service en deux étapes, vous obtenez : '
            structure='text-center'
          />
        </div>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
          <div>
            <Calls
              image='https://res.cloudinary.com/dedakscgk/image/upload/v1721950778/operateur_x5ha9m.png'
              description='Consultation juridique avec un mandataire ou un conseil en propriété intellectuelle'
            />   
          </div>
          <div>
            <Calls
              image='https://res.cloudinary.com/dedakscgk/image/upload/v1721958545/concept_fi5v7r.png'
              description='Dessins techniques de votre invention par un expert.'
            />
          </div>
          <div>
            <Calls
              image='https://res.cloudinary.com/dedakscgk/image/upload/v1721950778/fichier-et-dossier_tonkmi.png'
              description='Préparation et dépôt de votre demande de brevet complétée par un mandataire ou un expert agréé.'
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default How;
