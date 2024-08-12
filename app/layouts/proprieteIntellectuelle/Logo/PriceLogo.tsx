'use client'
import Button from '@/app/components/proprieteIntellectuelle/General/Button';
import Heads from '@/app/components/proprieteIntellectuelle/General/Heads';
import React from 'react';
import { useRouter } from 'next/navigation';

const PriceLogo = () => {
  
  const router = useRouter();

  const onclickEnterprise = (path: string) => {
      router.push(path);
  };

  return (
    <div className='py-6 bg-gray-50'>
      <div className='w-full md:w-8/12 mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='grid grid-cols-1 sm:grid-cols-2 gap-8'>
          <div className='relative text-center border-4 border-green-700 rounded-md h-[630px] md:h-[720px] px-6 md:px-12 py-6'>
            <Heads title='Enregistrement de marque' headcust='text-lg' cust='hidden' structure='' />
            <Heads title='A partir de' headcust='text-lg' cust='hidden' structure='py-2' />
            <Heads title='699 $ | 360.000 FCFA' headcust='text-xl text-green-700 font-bold' cust='hidden' structure='' />
            <p>+ frais professionnels</p>
            <Heads title='Vous obtenez:' headcust='text-lg' cust='hidden' structure='' />
            <Heads title='Consultation juridique' headcust='text-lg' cust='text-2lg'
              description='Un mandataire ou un conseil agréé fournira une consultation sur la viabilité de votre demande de marque auprès de l&apos;OAPI et les garanties de succès de son enregistrement.' structure='' />
            <Heads title='Préparation et dépôt' headcust='text-sm' cust='text-2lg'
              description='Préparation et dépôt de votre demande d&apos;enregistrement de marque.' structure='' />
            <Heads title='Suivi' headcust='text-sm' cust='text-2lg'
              description='Suivi du dossier et correction d&apos;erreurs matérielles qui incombent au mandataire' structure='' />
            <Heads title='Maintenance' headcust='text-2lg' cust='text-2lg'
              description='Maintenance des droits par la veille et les renouvellements successifs' structure='' />
            <Button title='commencer' onClick={() => onclickEnterprise('../../../pages/Formulaires')}  structure='capitalize px-6 py-3 bg-green-700 rounded-sm my-4 absolute bottom-0 mb-4 left-1/2 transform -translate-x-1/2 text-white font-bold md:text-xl text-sm' />
          </div>

          <div className='text-center border-4 border-green-700 rounded-md p-6'>
            <Heads title='Option' headcust='text-lg text-green-700' cust='' structure='' />
            <Heads title='Recherche d’antériorité' headcust='text-sm' cust='hidden' structure='' />
            <Heads title='Frais officiels à partir de' headcust='text-lg' cust='hidden' structure='' />
            <Heads title='XXX $ | 95.000 FCFA' headcust='text-lg text-green-700 font-bold' cust='text-2lg' structure='' />
            <p className='text-sm pb-24'>+ frais professionnels</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PriceLogo;
