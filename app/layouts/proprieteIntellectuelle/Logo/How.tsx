import Calls from '@/app/components/proprieteIntellectuelle/General/Calls';
import Heads from '@/app/components/proprieteIntellectuelle/General/Heads';
import React from 'react';

const How = () => {
  return (
    <div className='py-8'>
      <div className='w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <div>
          <Heads
            title='COMMENT ÇA MARCHE'
            description='Avec notre service en deux étapes, vous obtenez : '
            structure='text-center'
          />
        </div>
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-8'>
          <div>
            <Calls
              image='https://res.cloudinary.com/dedakscgk/image/upload/v1721950778/operateur_x5ha9m.png'
              description='Consultation juridique avec un mandataire en PI ou un conseil en propriété industrielle'
            />
          </div>
          <div>
            <Calls
              image='https://res.cloudinary.com/dedakscgk/image/upload/v1721956009/variante-de-recherche-de-liste_pwxxdd.png'
              description='Recherche de marque ou logo similaire par un expert (Option).'
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
};

export default How;
