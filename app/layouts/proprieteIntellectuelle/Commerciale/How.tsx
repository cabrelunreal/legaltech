import Calls from '@/app/components/proprieteIntellectuelle/General/Calls';
import Heads from '@/app/components/proprieteIntellectuelle/General/Heads';
import React from 'react';

const How = () => {
  return (
    <div className='py-8 bg-gray-50'>
      <div className='w-full max-w-6xl px-4 sm:px-6 md:px-8 lg:px-12 mx-auto'>
        <div>
          <Heads 
            title='COMMENT ÇA MARCHE'
            description='Avec notre service en deux étapes, vous obtenez : '
            structure='text-center'
          />
        </div>
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 sm:gap-12'>
          <div>
            <Calls
              image='https://res.cloudinary.com/dedakscgk/image/upload/v1721950778/operateur_x5ha9m.png'
              description='Une consultation juridique avec un mandataire OAPI ou un conseil en propriété industrielle'
            />   
          </div>
          <div>
            <Calls
              image='https://res.cloudinary.com/dedakscgk/image/upload/v1721961765/variante-de-recherche-de-liste_1_r7iki5.png'
              description='Recherche d’antériorité(option).'
            />  
          </div>
          <div>
            <Calls
              image='https://res.cloudinary.com/dedakscgk/image/upload/v1721950778/fichier-et-dossier_tonkmi.png'
              description='La préparation et dépôt de votre demande de protection complétée par un expert.'
            />  
          </div>
        </div>
      </div>
    </div>
  );
}

export default How;
