import Heads from '@/app/components/proprieteIntellectuelle/General/Heads';
import React from 'react';

const What = () => {
  return (
    <div className='py-16 bg-gray-50'>
      <div className='w-full lg:w-9/12 m-auto grid grid-cols-1 lg:grid-cols-2 px-4 lg:px-12 gap-4'>
        <div className='px-4 lg:px-0'>
          <Heads
            title='Qu&apos;est-ce qu&apos;un brevet ?'
            description='Le brevet est un titre délivré pour protéger une invention. Il confère à son titulaire un droit exclusif d&apos;exploitation de l&apos;invention qui en est l&apos;objet pour une durée déterminée. 
            Dans l&apos;espace OAPI, le brevet protège l&apos;innovation durant une durée maximale de 20 ans à condition de payer les annuités. 
            Pour obtenir un brevet, le demandeur doit fournir une explication détaillée de l&apos;utilité et du fonctionnement de son invention.'
            structure='text-center px-4 lg:px-12'
            cust='text-justify'
            headcust='text-green-700'
          />
        </div>
        <div className='px-4 lg:px-0'>
          <Heads
            title='Qu&apos;est-ce que l&apos;OAPI ?'
            description='L&apos;Organisation africaine de la propriété intellectuelle (OAPI) est un organisme intergouvernemental regroupant dix-sept États africains, chargé de protéger de manière uniforme les droits de propriété intellectuelle sur les territoires de ces États, notamment par la délivrance de titres de protection des droits de propriété industrielle en tant qu&apos;office des brevets.'
            structure='text-center px-4 lg:px-12'
            cust='text-justify'
            headcust='text-green-700'
          />
        </div>
      </div>
    </div>
  );
};

export default What;
