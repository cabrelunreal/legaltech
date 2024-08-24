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
            description='Avec notre service, vous obtenez : '
            structure='text-center'
          />
        </div>
        <div className='flex w-4/12 m-auto'>
          <div>
            <Calls
              image='https://res.cloudinary.com/dedakscgk/image/upload/v1721950778/operateur_x5ha9m.png'
              description='Une Consultation juridique avec un mandataire ou un conseil en propriété intellectuelle'
            />   
          </div>
        </div>
      </div>
    </div>
  );
}

export default How;
