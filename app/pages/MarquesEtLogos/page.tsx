'use client'

import BeforeHeader from '@/app/components/proprieteIntellectuelle/General/BeforeHeader'
import Header from '@/app/components/proprieteIntellectuelle/General/Header'
import Heads from '@/app/components/proprieteIntellectuelle/General/Heads'
import QuickCall from '@/app/components/proprieteIntellectuelle/General/QuickCall'
import WelcomeContainer from '@/app/components/proprieteIntellectuelle/General/Welcome'
import Footer from '@/app/layouts/footer'
import How from '@/app/layouts/proprieteIntellectuelle/Logo/How'
import PriceLogo from '@/app/layouts/proprieteIntellectuelle/Logo/PriceLogo'
import What from '@/app/layouts/proprieteIntellectuelle/Logo/What'
import React from 'react'
import { useRouter } from 'next/navigation'
import Categories from './Categories'

const MarquesLogo = () => {
  
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
                beforeT='Marques & Logos'
                custom='justify-start md:pl-56 md:pr-96'
                title='Protégez votre marque à l’OAPI'
                description='La marque est un signe visible utilisé par une personne physique ou morale pour distinguer ses produits ou services de ceux de ses concurrents.'
                buttonTitle='Commencer'
                onclick={() => onclickEnterprise('../../pages/Formulaires')}
                customButton='bg-green-700 text-sm font-semibold md:text-lg'
                image='https://res.cloudinary.com/dedakscgk/image/upload/v1721955860/woman-8499928_1280_1_1_bqbqjb.png'
            />
        </div>

        <div>
            <How />
        </div>

        <div>
            <What />
        </div>
        <div>
            <Heads title='Déposez votre marque ou logo avec notre processus simple ' structure='font-bold text-center py-8' headcust='text-2xl' />
        </div>
        <div>
            <PriceLogo />
        </div>

        <div>
            <Categories />
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

export default MarquesLogo