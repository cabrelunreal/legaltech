import Button from '@/app/components/proprieteIntellectuelle/General/Button';
import Heads from '@/app/components/proprieteIntellectuelle/General/Heads';
import React from 'react';

const PriceLogo = () => {
  return (
    <div className='py-6 bg-gray-50'>
      <div className='w-full max-w-4xl mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='relative text-center border-4 border-green-700 rounded-md px-4 py-6 sm:px-6 lg:px-8'>
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
            structure='capitalize px-6 py-3 bg-green-700 rounded-sm my-4 text-white font-bold text-xl absolute bottom-0 left-1/2 transform -translate-x-1/2'
          />
        </div>
      </div>
    </div>
  );
};

export default PriceLogo;
