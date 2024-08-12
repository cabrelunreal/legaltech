"use client"

import BeforeHeader from '@/app/components/proprieteIntellectuelle/General/BeforeHeader'
import Header from '@/app/components/proprieteIntellectuelle/General/Header'
import Heads from '@/app/components/proprieteIntellectuelle/General/Heads'
import QuickCall from '@/app/components/proprieteIntellectuelle/General/QuickCall'
import WelcomeContainer from '@/app/components/proprieteIntellectuelle/General/Welcome'
import Footer from '@/app/layouts/footer'
import How from '@/app/layouts/proprieteIntellectuelle/Model/How'
import PriceLogo from '@/app/layouts/proprieteIntellectuelle/Model/PriceModel'
import What from '@/app/layouts/proprieteIntellectuelle/Model/What'
import React from 'react'
import { useRouter } from 'next/navigation'


const page = () => {
  const router = useRouter();
  
   const onclickEnterprise = (path: string) => {
        router.push(path);
    };

  return (
    <div>
        <div>
            <BeforeHeader />
        </div>

        <div>
            <Header />
        </div>

        <div>
            <WelcomeContainer 
                beforeT='Dessins et Modèle Industriels'
                custom='justify-start md:pl-56 md:pr-96'
                title='Protégez votre invention à l’OAPI'
                description='Les dessins et modèles industriels confèrent à son auteur également le droit exclusif de priver d’autres personnes de fabriquer, d’utiliser, de vendre ou d’importer la création protégée...'
                buttonTitle='Commencer'
                onclick={() => onclickEnterprise('../../pages/Formulaires')}
                customButton='bg-green-700'
                image='https://res.cloudinary.com/dedakscgk/image/upload/v1721958001/woman-8499928_1280_1_2_q8fge8.png'
            />
        </div>

        <div>
            <How />
        </div>

        <div>
            <What />
        </div>

        <div>
            <Heads title='Protéger votre dessin et modèle industriel facilement' structure='font-bold text-center py-8' headcust='text-2xl' />
        </div>

        <div>
            <PriceLogo />
        </div>

        <div>
            <Heads title='Des questions?' structure='font-bold text-center py-8' headcust='text-2xl' />
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

export default page