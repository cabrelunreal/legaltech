import Button from '@/app/components/proprieteIntellectuelle/General/Button';
import Heads from '@/app/components/proprieteIntellectuelle/General/Heads';
import Image from 'next/image';
import React from 'react';

const Help: React.FC = () => {
  const Title = 'Vous ne savez pas ce dont vous avez besoin ? Demander à un expert';
  const Description = 'Obtenez les bons conseils avec un avocat à vos côtés.';

  return (
    <div className='py-12 md:py-24 px-4 md:px-2'>
      <div className='w-full md:w-9/12 px-4 md:px-24 mx-auto py-12 flex flex-col md:flex-row border-4 border-green-600'>
        <div className='w-full md:w-8/12 px-4 mb-8 md:mb-0'>
          <Heads title={Title} description={Description} structure='' />
          <Button title='Obtenir une assistance juridique' structure='bg-green-700 w-full md:w-80 text-white font-bold text-lg md:text-xl px-6 py-3 md:py-1 hover:bg-green-800' />
        </div>
        <div className='w-full md:w-4/12 flex justify-center'>
          <Image
            src='https://res.cloudinary.com/dedakscgk/image/upload/v1721945472/Rectangle_32_z9wfe3.png'
            alt='help'
            width={150}
            height={150}
            className='m-auto'
          />
        </div>
      </div>
    </div>
  );
};

export default Help;
