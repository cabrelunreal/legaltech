import Contacts from '@/app/components/proprieteIntellectuelle/Formulaire/Contacts';
import Heads from '@/app/components/proprieteIntellectuelle/General/Heads';
import React from 'react';

const Formulaire = () => {
  const Title = 'COMMENCER VOTRE DEMANDE';
  const Description = 'Les champs avec astérix (*) sont obligatoires';
  
  return (
    <div className='py-8 px-4 sm:px-6 lg:px-8'>
      <div className='pb-12'>
        <Heads
          title={Title}
          description={Description}
          structure='text-center'
        />
      </div>
      <div className='bg-gray-100'>
        <div className='max-w-4xl mx-auto px-4 sm:px-6 lg:px-8'>
          <Contacts />
        </div>
      </div>
    </div>
  );
};

export default Formulaire;
