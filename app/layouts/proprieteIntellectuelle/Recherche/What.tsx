import Heads from '@/app/components/proprieteIntellectuelle/General/Heads';
import React from 'react';

const What = () => {
  return (
    <div className='py-16 bg-gray-50'>
      <div className='max-w-screen-lg mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
          <div>
            <Heads
              title='Qu&apos;est-ce que la recherche d&apos;antériorité ?'
              description='La «recherche d&apos;antériorité» est le travail réalisé par un mandataire ou un conseil spécialisé en propriété intellectuelle, qui consiste précisément à s&apos;assurer que le nom que vous entendez donner à votre marque est disponible et ne porte pas atteinte aux droits de tiers. L&apos;OAPI conseille de solliciter, avant toute demande d&apos;enregistrement de marque, une recherche d&apos;antériorité auprès de ses services pour s&apos;assurer que la marque en question n’est pas déjà protégée par un tiers.'
              structure='text-center px-4 sm:px-6'
              cust='text-justify'
              headcust='text-green-700'
            />
          </div>
          <div>
            <Heads
              title='Qu&apos;est-ce que l&apos;OAPI ?'
              description='L&apos;Organisation africaine de la propriété intellectuelle (OAPI) est un organisme intergouvernemental regroupant dix-sept États africains, chargé de protéger de manière uniforme les droits de propriété intellectuelle sur les territoires de ces États, notamment par la délivrance de titres de protection des droits de propriété industrielle en tant qu&apos;office des brevets.'
              structure='text-center px-4 sm:px-6'
              cust='text-justify'
              headcust='text-green-700'
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default What;
