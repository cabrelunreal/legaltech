import BeforeHeader from '@/app/components/proprieteIntellectuelle/General/BeforeHeader'
import Header from '@/app/components/proprieteIntellectuelle/General/Header'
import Heads from '@/app/components/proprieteIntellectuelle/General/Heads'
import QuickCall from '@/app/components/proprieteIntellectuelle/General/QuickCall'
import WelcomeContainer from '@/app/components/proprieteIntellectuelle/General/Welcome'
import Footer from '@/app/layouts/footer'
import How from '@/app/layouts/proprieteIntellectuelle/Recherche/How'
import PriceRecherche from '@/app/layouts/proprieteIntellectuelle/Recherche/PriceRecherche'
import What from '@/app/layouts/proprieteIntellectuelle/Recherche/What'
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
                beforeT='Recherche d’Antériorité'
                custom='justify-start pl-56 pr-96'
                title='Protégez votre marque à l’OAPI'
                description='Un brevet d’invention confère à son inventeur le droit exclusif d’empêcher d’autres personnes de fabriquer, d’utiliser, de vendre ou d’importer son invention protégée.'
                buttonTitle='Commencer'
                image='https://res.cloudinary.com/dedakscgk/image/upload/v1721958920/woman-8499928_1280_1_3_vpinqe.png'
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
            <PriceRecherche />
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