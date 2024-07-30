import Heads from '@/app/components/proprieteIntellectuelle/General/Heads';
import React from 'react';

const What = () => {
  return (
    <div className='py-16 bg-gray-50'>
      <div className='w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='grid grid-cols-1 sm:grid-cols-2 gap-8'>
          <div>
            <Heads
              title='Qu&apos;est-ce qu&apos;une marque ?'
              description='La marque est un signe visible utilisé par une personne physique ou morale pour distinguer ses produits ou services de ceux de ses concurrents.'
              structure='text-center px-4 sm:px-12'
              cust='text-justify'
              headcust='text-green-700 text-lg sm:text-xl'
            />
          </div>
          <div>
            <Heads
              title='Qu&apos;est-ce que l&apos;OAPI ?'
              description='L&apos;Organisation africaine de la propriété intellectuelle (OAPI) est un organisme intergouvernemental regroupant dix-sept États africains, chargé de protéger de manière uniforme les droits de propriété intellectuelle sur les territoires de ces États, notamment par la délivrance de titres de protection des droits de propriété industrielle en tant qu&apos;office des brevets.'
              structure='text-center px-4 sm:px-12'
              cust='text-justify'
              headcust='text-green-700 text-lg sm:text-xl'
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default What;
