import BeforeHeader from '@/app/components/proprieteIntellectuelle/General/BeforeHeader'
import Header from '@/app/components/proprieteIntellectuelle/General/Header'
import Heads from '@/app/components/proprieteIntellectuelle/General/Heads'
import QuickCall from '@/app/components/proprieteIntellectuelle/General/QuickCall'
import WelcomeContainer from '@/app/components/proprieteIntellectuelle/General/Welcome'
import Footer from '@/app/layouts/footer'
import Welcome from '@/app/layouts/proprieteIntellectuelle/Home/Welcome'
import How from '@/app/layouts/proprieteIntellectuelle/Model/How'
import PriceLogo from '@/app/layouts/proprieteIntellectuelle/Model/PriceModel'
import What from '@/app/layouts/proprieteIntellectuelle/Model/What'
import React from 'react'

const page = () => {
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
                beforeT='Dessins et Modèle Industriel'
                custom='justify-start px-12 lg:pl-56 lg:pr-96'
                title='Protégez votre invention à l’OAPI'
                description='Un brevet d’invention confère à son inventeur le droit exclusif d’empêcher d’autres personnes de fabriquer, d’utiliser, de vendre ou d’importer son invention protégée.'
                buttonTitle='Commencer'
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