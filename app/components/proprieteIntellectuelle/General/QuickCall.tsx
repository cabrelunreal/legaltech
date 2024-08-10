import React from 'react';
import Heads from './Heads';
import Button from './Button';
import Image from 'next/image';

const QuickCall = () => {
  return (
    <div className='bg-gray-50 py-8 px-4'>
      <div className='w-full md:w-9/12 mx-auto grid grid-cols-1 md:grid-cols-2 gap-8'>
        <div className='flex flex-col items-center md:items-start'>
          <Heads 
            title='Demandez à un professionnel du droit'
            headcust='text-lg md:text-xl'
            description='Obtenez les bons conseils avec un avocat à vos côtés'
            structure='text-center md:text-left'
            cust='py-1 text-sm md:text-lg'
          />
          <Button 
            title='Obtenir une assistance juridique'
            structure='w-full md:w-48 text-sm md:text-lg bg-green-700 text-white px-2 py-2 md:py-2 rounded-sm mt-1'
          />
        </div>
        <div className='flex flex-col items-center md:items-start'>
          <Heads 
            title='Contactez un assistant au (237) 679-1568'
            description='Du lundi au vendredi : de 6 h à 20 h (GMT) Les week-ends : de 7 h à 16 h (GMT)'
            structure='text-center md:text-left'
            headcust='text-lg md:text-xl'
            cust='py-1 text-sm md:text-lg'
          />
          <div className='text-lg flex justify-center md:justify-start mt-1'>
            <p className='mr-2'>Suivez-nous:</p>
            <div className='flex space-x-2'>
              <Image
                src='https://res.cloudinary.com/dedakscgk/image/upload/v1721955329/logos_whatsapp-icon_dncw6x.png'
                alt='whatsapp'
                width={30}
                height={30}
                className='mx-1'
              />
              <Image
                src='https://res.cloudinary.com/dedakscgk/image/upload/v1721955329/logos_telegram_lq4e8y.png'
                alt='telegram'
                width={30}
                height={30}
                className='mx-1'
              />
              <Image
                src='https://res.cloudinary.com/dedakscgk/image/upload/v1721955329/logos_facebook_isgni8.png'
                alt='facebook'
                width={30}
                height={30}
                className='mx-1'
              />
              <Image
                src='https://res.cloudinary.com/dedakscgk/image/upload/v1721955329/devicon_twitter_xmnvyt.png'
                alt='twitter'
                width={30}
                height={30}
                className='mx-1'
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default QuickCall;
