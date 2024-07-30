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

const MarquesLogo = () => {
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
                custom='justify-start px-12 lg:pl-56 lg:pr-96'
                title='Protégez votre nom commercial à l’OAPI'
                description='Le nom commercial est la dénomination sous laquelle une personne physique ou morale désigne l’entreprise ou le fonds de commerce qu’elle exploite pour l’identifier dans ses rapports avec la clientèle. Il peut consister en un nom patronymique..'
                buttonTitle='Commencer'
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

export default MarquesLogo