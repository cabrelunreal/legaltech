'use client'
import BeforeHeader from '@/app/components/proprieteIntellectuelle/General/BeforeHeader'
import Header from '@/app/components/proprieteIntellectuelle/General/Header'
import Heads from '@/app/components/proprieteIntellectuelle/General/Heads'
import QuickCall from '@/app/components/proprieteIntellectuelle/General/QuickCall'
import WelcomeContainer from '@/app/components/proprieteIntellectuelle/General/Welcome'
import Footer from '@/app/layouts/footer'
import How from '@/app/layouts/proprieteIntellectuelle/Commerciale/How'
import PriceLogo from '@/app/layouts/proprieteIntellectuelle/Commerciale/PriceCommerciale'
import What from '@/app/layouts/proprieteIntellectuelle/Commerciale/What'
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
            <BeforeHeader />
        </div>
        <div>
            <Header />
        </div>
        <div>
            <WelcomeContainer 
                beforeT='Nom Commercial'
                custom='justify-start md:pl-56 md:pr-96'
                title='Protégez votre nom commercial à l’OAPI'
                description='Le nom commercial est la dénomination sous laquelle une personne physique ou morale désigne l’entreprise ou le fonds de commerce qu’elle exploite pour l’identifier dans ses rapports avec la clientèle. Il peut consister en un nom patronymique..'
                buttonTitle='Commencer'
                onclick={() => onclickEnterprise('../../pages/Formulaires')}
                customButton='bg-green-700 text-sm md:text-2lg font-semibold'
                image='https://res.cloudinary.com/dedakscgk/image/upload/v1721961801/woman-8499928_1280_1_5_m8ufqv.png'
            />
        </div>

        <div>
            <How />
        </div>

        <div>
            <What />
        </div>

        <div>
            <Heads title='Protéger votre nom commercial facilement' structure='font-bold text-center py-8' headcust='text-2xl' />
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