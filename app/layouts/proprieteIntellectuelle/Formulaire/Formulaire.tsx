import Contacts from '@/app/components/proprieteIntellectuelle/Formulaire/Contacts';
import Heads from '@/app/components/proprieteIntellectuelle/General/Heads';
import React from 'react';

const Formulaire = () => {
  const Title = 'COMMENCER VOTRE DEMANDE';
  const Description = 'Les champs avec astérix (*) sont obligatoires';
  
  return (
    <div className=''>
      <div className='pb-8 pt-14'>
        <Heads
          title={Title}
          description={Description}
          structure='text-center'
        />
      </div>
      <div className='bg-gray-100'>
        <div className='py-8'>
          <Contacts />
        </div>
      </div>
    </div>
  );
};

export default Formulaire;
