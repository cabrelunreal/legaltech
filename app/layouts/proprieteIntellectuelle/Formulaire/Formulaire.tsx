import Contacts from '@/app/components/proprieteIntellectuelle/Formulaire/Contacts';
import Heads from '@/app/components/proprieteIntellectuelle/General/Heads';
import React from 'react';

interface props{
  type1: string;
  type2: string;
}

const Formulaire:React.FC<props> = ({type1, type2}) => {
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
          <Contacts type1={type1} type2={type2} />
        </div>
      </div>
    </div>
  );
};

export default Formulaire;
