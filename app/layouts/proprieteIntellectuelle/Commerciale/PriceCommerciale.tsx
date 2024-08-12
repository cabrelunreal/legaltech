import Button from '@/app/components/proprieteIntellectuelle/General/Button';
import Heads from '@/app/components/proprieteIntellectuelle/General/Heads';
import React from 'react';
import { useRouter } from 'next/navigation'

const PriceLogo = () => {
  
  const router = useRouter();

  const onclickEnterprise = (path: string) => {
      router.push(path);
  };

  return (
    <div className='py-6 bg-gray-50'>
      <div className='w-full md:w-8/12 px-4 sm:px-6 lg:px-8 mx-auto'>
        <div className='grid grid-cols-1 h-[1110px] md:h-[760px] sm:grid-cols-2 gap-8'>
          <div className='relative text-center border-4 border-green-700 rounded-md px-4 sm:px-6 py-6 sm:py-8'>
            <Heads title='Enregistrement de marque' headcust='text-lg' cust='hidden' structure='' />
            <Heads title='A partir de' headcust='text-lg' cust='hidden' structure='py-2' />
            <p className='text-lg'>Personnes Physiques</p>
            <Heads title='699 $ | 10000 FCFA' headcust='text-xl text-green-700 font-bold' cust='hidden' structure='' />
            <p className='text-lg'>Personnes Morales</p>
            <Heads title='699 $ | 20000 FCFA' headcust='text-xl text-green-700 font-bold' cust='hidden' structure='' />
            <Heads title='Vous obtenez:' headcust='text-lg' cust='hidden' structure='' />
            <Heads 
              title='Consultation juridique' 
              headcust='text-lg' 
              cust='text-2lg'
              description='Un mandataire ou un conseil agréé fournira une consultation par téléphone.' 
              structure='' 
            />
            <Heads 
              title='Préparation et dépôt' 
              headcust='text-lg' 
              cust='text-2lg'
              description='Préparation et dépôt de votre demande de protection de nom commercial.' 
              structure='' 
            />
            <Heads 
              title='Suivi' 
              headcust='text-lg' 
              cust='text-2lg'
              description='Suivi du dossier et correction d&apos;erreurs matérielles qui incombent au mandataire' 
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
              structure='capitalize px-6 py-3 bg-green-700 rounded-sm my-4 absolute bottom-4 left-1/2 transform -translate-x-1/2 text-white font-bold md:text-lg text-sm' 
            />
          </div>

          <div className='text-center border-4 border-green-700 rounded-md px-4 sm:px-6 py-6 sm:py-8'>
            <Heads title='Option' headcust='text-xl text-green-700' cust='' structure='' />
            <Heads title='Recherche d’antériorité' headcust='text-lg' cust='hidden' structure='' />
            <Heads title='Frais officiels à partir de ' headcust='text-lg' cust='hidden' structure='' />
            <Heads title='XXX $ | 95.000 FCFA ' headcust='text-xl text-green-700 font-bold' cust='text-2lg' structure='' />
            <p className='text-lg pb-24'>+ frais professionnels</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PriceLogo;
