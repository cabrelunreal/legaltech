import Button from '@/app/components/proprieteIntellectuelle/General/Button';
import Heads from '@/app/components/proprieteIntellectuelle/General/Heads';
import React from 'react';

const PriceRecherche = () => {
  return (
    <div className='py-16 bg-gray-50'>
      <div className='md:w-3/12 mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='text-center border-4 border-green-700 rounded-md p-6'>
          <Heads title='Option' headcust='hidden' cust='' structure='' />
          <Heads title='Recherche d’antériorité' headcust='text-lg' cust='hidden' structure='' />
          <Heads title='Frais officiels à partir de' headcust='text-lg' cust='hidden' structure='' />
          <Heads title='XXX $ | 95.000 FCFA' headcust='text-xl text-green-700 font-bold' cust='text-2lg' structure='' />
          <p className='text-lg pb-24'>+ frais professionnels</p>
        </div>
      </div>
    </div>
  );
}

export default PriceRecherche;
