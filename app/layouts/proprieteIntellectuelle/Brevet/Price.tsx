'use client'
import Button from '@/app/components/proprieteIntellectuelle/General/Button';
import Heads from '@/app/components/proprieteIntellectuelle/General/Heads';
import React from 'react';
import { useRouter } from 'next/navigation';

const Price = () => {
  
  const router = useRouter();

  const onclickEnterprise = (path: string) => {
      router.push(path);
  };

  return (
    <div className='py-6 bg-gray-50 px-2'>
      <div className='w-full md:w-7/12 px-4 lg:px-42 grid grid-cols-1 lg:grid-cols-2 gap-4 md:m-auto'>
        <div className='relative text-center border-4 h-[560px] md:h-[650px] px-6 border-green-700 rounded-md'>
          <Heads title='La première étape' headcust='text-lg' cust='hidden' structure='' />
          <Heads title='Évaluation préliminaire et dessins' headcust='text-lg' cust='hidden' structure=' py-2' />
          <Heads title='699 $ | 699FCFA' headcust='text-lg text-green-700 font-bold' cust='hidden' structure='' />
          <Heads title='Vous obtenez:' headcust='text-lg' cust='hidden' structure='' />
          <Heads title='Consultation juridique' headcust='text-lg' cust='text-2lg'
            description='Un mandataire ou un conseil agréé fournira une consultation par téléphone.' structure='' />
          <Heads title='Rédaction' headcust='text-lg' cust='text-2lg'
            description='Rédaction du mémoire de brevet en fonction du nombre de pages du mémoire descriptif et des revendications.' structure='' />
          <Heads title='Illustrations techniques' headcust='text-lg' cust='text-2lg'
            description='Dessins illustratifs fournis par le déposant en fonction de la technicité du domaine.' structure='' />
          <Heads title='Recherche de brevets (facultative)' headcust='text-lg' cust='text-2lg'
            description='Recherche sur l&apos;état antérieur de la technique.' structure='' />
          <Button title='commencer' onClick={() => onclickEnterprise('../../../pages/Formulaires')}  structure='capitalize px-6 py-3 bg-green-700 rounded-sm my-4 absolute bottom-0 mb-4 left-1/2 transform -translate-x-1/2 text-white font-bold text-sm md:text-lg' />
        </div>
        <div className='relative text-center border-4 h-[520px] md:h-[650px] px-6 border-green-700 rounded-md'>
          <Heads title='Deuxième étape' headcust='text-lg' cust='hidden' structure='' />
          <Heads title='Dépôt de la demande de brevet' headcust='text-lg' structure='' />
          <Heads title='XXX $ | XXX FCFA*' headcust='text-xl text-green-700 font-bold' cust='text-2lg' structure='' />
          <p>+ frais professionnels</p>
          <Heads title='Vous obtenez:' headcust='text-lg' cust='text-2lg' structure='' />
          <Heads title='Préparation ' headcust='text-lg' cust='text-2lg'
            description='Préparation de l&apos;enregistrement de Brevet.' structure='' />
          <Heads title='⁠Dépôt ' headcust='text-lg' cust='text-2lg'
            description='Dépot de la demande de brevet auprès de l&apos;OAPI.' structure='' />
          <Heads title='Consultation et suivi ' headcust='text-lg' cust='text-2lg'
            description='Suivi jusqu&apos;à l&apos;obtention de la Décision de délivrance du brevet d&apos;invention.' structure='' />
          <Heads title='Maintenance ' headcust='text-lg' cust='text-2lg'
            description='Maintenance du Brevet d&apos;invention.' structure='' />
          <Button title='Après avoir terminé la première étape' onClick={() => onclickEnterprise('../../../pages/Formulaires')} structure='px-6 py-1 absolute bottom-0 mb-4 left-1/2 transform -translate-x-1/2 bg-green-700 w-64 rounded-sm text-white font-bold text-sm md:text-lg' />
        </div>
      </div>

      <div className='relative w-full lg:w-3/12 mt-14 mb-6 m-auto text-center border-4 h-[330px] md:h-[320px] px-6 border-green-700 rounded-md'>
        <Heads title='Les demandes PCT' headcust='text-lg' cust='' structure='' />
        <p>A partir de </p>
        <Heads title='1500€ | 993 000 FCFA' headcust='text-xl text-green-700 font-bold' cust='text-2lg' structure='' />
        <p className='text-lg'>+ frais professionnels</p>
        <p className='py-3 text-lg'>pour 10 revendications maximum</p>
        <p className='text-lg'>pour 10 pages de mémoires descriptif y compris les dessins</p>
        <Button title='commencer' onClick={() => onclickEnterprise('../../../pages/Formulaires')}  structure='capitalize px-6 py-3 absolute bottom-0 mb-4 left-1/2 transform -translate-x-1/2 bg-green-700 w-64 rounded-sm text-white font-bold text-sm md:text-lg' />
      </div>
    </div>
  );
};

export default Price;
