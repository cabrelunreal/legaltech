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
      <div className='w-full md:w-4/12 mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='relative text-center h-[660px] md:h-[750px] border-4 border-green-700 rounded-md px-4 py-6 sm:px-6 lg:px-8'>
          <Heads title='Enregistrement' headcust='text-lg' cust='hidden' structure='' />
          <Heads title='Frais officiels à partir de' headcust='text-lg' cust='hidden' structure='py-2' />
          <Heads title='XXX $ | 95.000 FCFA' headcust='text-xl text-green-700 font-bold' cust='hidden' structure='' />
          <p className='mt-2 mb-4'>+ frais professionnels</p>
          <Heads title='Vous obtenez:' headcust='text-lg' cust='hidden' structure='' />
          <Heads 
            title='Consultation juridique'  
            headcust='text-lg' 
            cust='text-2lg'
            description='Conseils juridiques personnalisés sur la viabilité de votre demande d’enregistrement de dessin et modèle auprès de l’OAPI et les garanties de succès de son enregistrement.' 
            structure='' 
          />
          <Heads 
            title='Dépôt'  
            headcust='text-lg' 
            cust='text-2lg'
            description='Préparation et dépôt de votre demande d’enregistrement de dessin et modèle industriel.' 
            structure='' 
          />
          <Heads 
            title='Suivi'  
            headcust='text-lg' 
            cust='text-2lg'
            description='Suivi du dossier et correction d’erreurs matérielles qui incombent au mandataire' 
            structure='' 
          />
          <Heads 
            title='Maintenance'  
            headcust='text-lg' 
            cust='text-2lg'
            description='Maintenance des droits par la veille et les renouvellements successifs' 
            structure='' 
          />
          <Button 
            title='commencer' 
            onClick={() => onclickEnterprise('../../../pages/Formulaires')} 
            structure='capitalize px-6 py-3 bg-green-700 rounded-sm my-4 text-white font-bold text-sm md:text-lg absolute bottom-0 left-1/2 transform -translate-x-1/2'
          />
        </div>
      </div>
    </div>
  );
};

export default PriceLogo;
