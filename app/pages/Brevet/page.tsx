'use client'

import BeforeHeader from '@/app/components/proprieteIntellectuelle/General/BeforeHeader'
import Header from '@/app/components/proprieteIntellectuelle/General/Header'
import Heads from '@/app/components/proprieteIntellectuelle/General/Heads'
import QuickCall from '@/app/components/proprieteIntellectuelle/General/QuickCall'
import WelcomeContainer from '@/app/components/proprieteIntellectuelle/General/Welcome'
import Footer from '@/app/layouts/footer'
import How from '@/app/layouts/proprieteIntellectuelle/Brevet/How'
import Price from '@/app/layouts/proprieteIntellectuelle/Brevet/Price'
import What from '@/app/layouts/proprieteIntellectuelle/Brevet/What'
import React from 'react'
import { useRouter } from 'next/navigation';
import Categories from './Categories'

const Brevet = () => {
  const router = useRouter();
  
  const onclickEnterprise = (path: string) => {
    router.push(path);
   };

  return (
    <div>
        <div>
            <Header />
        </div>
        <div>
            <WelcomeContainer 
                beforeT='Le Brevet'
                custom='justify-start md:pl-56 md:pr-96'
                title='Protégez votre invention à l’OAPI'
                description='Un brevet d’invention confère à son inventeur le droit exclusif d’empêcher d’autres personnes de fabriquer, d’utiliser, de vendre ou d’importer son invention protégée.'
                buttonTitle='Commencer'
                onclick={() => onclickEnterprise('../../pages/Formulaires')}
                customButton='bg-green-700 text-sm font-semibold md:text-lg'
                image='https://res.cloudinary.com/dedakscgk/image/upload/v1721949479/woman-8499928_1280_1_qqyqii.png'
            />
        </div>

        <div>
            <How />
        </div>

        <div>
            <What />
        </div>

        <div>
            <Heads title='Déposez votre brevet avec notre processus simple en deux étapes' structure='font-bold text-center py-8' headcust='text-2xl' />
        </div>

        <div>
            <Price />
        </div>

        <div>
            <div>
                <Categories />
            </div>
        </div>

        <div>
            <QuickCall />
        </div>

        <div className='text-white'>
            <Footer />
        </div>
    </div>
  )
}

export default Brevet