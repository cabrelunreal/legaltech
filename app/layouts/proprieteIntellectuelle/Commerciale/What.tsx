import Heads from '@/app/components/proprieteIntellectuelle/General/Heads';
import React from 'react';

const What = () => {
  return (
    <div className='py-16 bg-gray-50'>
      <div className='w-full max-w-6xl px-4 sm:px-6 lg:px-8 mx-auto'>
        <div className='grid grid-cols-1 sm:grid-cols-2 gap-8'>
          <div>
            <Heads
              title='Qu&apos;est-ce qu&apos;un nom commercial ?'
              description='Le nom commercial est la dénomination sous laquelle une personne physique ou morale désigne l’entreprise ou le fonds de commerce qu’elle exploite pour l’identifier dans ses rapports avec la clientèle. Il peut consister en un nom patronymique. Le nom commercial a une durée de protection de dix ans à compter du dépôt. Toutefois, ce délai peut être prorogé tous les dix ans'
              structure='text-center px-4 sm:px-12'
              cust='text-justify'
              headcust='text-green-700'
            />
          </div>
          <div>
            <Heads
              title='Qu&apos;est-ce que l&apos;OAPI ?'
              description='L&apos;Organisation africaine de la propriété intellectuelle (OAPI) est un organisme intergouvernemental regroupant dix-sept États africains, chargé de protéger de manière uniforme les droits de propriété intellectuelle sur les territoires de ces États, notamment par la délivrance de titres de protection des droits de propriété industrielle en tant qu&apos;office des brevets.'
              structure='text-center px-4 sm:px-12'
              cust='text-justify'
              headcust='text-green-700'
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default What;
