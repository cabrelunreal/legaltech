import Button from '@/app/components/proprieteIntellectuelle/General/Button';
import Heads from '@/app/components/proprieteIntellectuelle/General/Heads';
import React from 'react';

const Price = () => {
  return (
    <div className='py-6 bg-gray-50'>
      <div className='w-full md:w-4/12 px-4 sm:px-6 md:px-8 lg:px-12 mx-auto'>
        <div className='relative text-center h-[370px] border-4 border-green-700 rounded-md p-4 md:p-6'>
          <Heads title='Frais officiels et professionnels à prévoir' headcust='text-base md:text-lg' structure='' />
          <Heads title='XXX $ | XXX FCFA' headcust='text-xl text-green-700 font-bold' cust='text-lg md:text-xl' structure='' />
          <Heads title='Vous obtenez:' headcust='text-base md:text-lg' cust='text-lg md:text-xl' structure='' />
          <Heads title='Consultation juridique ' headcust='text-base md:text-lg' cust='text-base md:text-lg'
            description='Un spécialiste fournira une consultation par téléphone ou par messagerie.' structure='' />
          <Heads title='Préparation' headcust='text-base md:text-lg' cust='text-base md:text-lg'
            description='Préparation de la demande de protection de votre oeuvre.' structure='' />
          <Button title='Commencer' structure='capitalize px-4 py-2 md:px-6 md:py-3 absolute bottom-0 left-1/2 transform my-4 -translate-x-1/2 bg-green-700 w-64 md:w-72 rounded-sm text-white font-bold text-base md:text-xl' />
        </div>
      </div>
    </div>
  );
}

export default Price;
