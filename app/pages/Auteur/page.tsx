import BeforeHeader from '@/app/components/proprieteIntellectuelle/General/BeforeHeader'
import Header from '@/app/components/proprieteIntellectuelle/General/Header'
import Heads from '@/app/components/proprieteIntellectuelle/General/Heads'
import QuickCall from '@/app/components/proprieteIntellectuelle/General/QuickCall'
import WelcomeContainer from '@/app/components/proprieteIntellectuelle/General/Welcome'
import Footer from '@/app/layouts/footer'
import How from '@/app/layouts/proprieteIntellectuelle/Auteur/How'
import Price from '@/app/layouts/proprieteIntellectuelle/Auteur/PriceAuteur'
import What from '@/app/layouts/proprieteIntellectuelle/Auteur/What'
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
                beforeT='Propriété Litteraires et Artistiques'
                custom='justify-start md:pl-56 md:pr-96'
                title='Protégez votre création'
                description='Empêchez les autres d’utiliser et de tirer profit de votre livre, article, chanson, photo, œuvre d’art, etc.'
                buttonTitle='Commencer'
                customButton='bg-green-700 text-sm font-semibold md:text-2lg'
                image='https://res.cloudinary.com/dedakscgk/image/upload/v1721959968/woman-8499928_1280_1_4_hrhmm5.png'
            />
        </div>

        <div>
            <How />
        </div>

        <div>
            <What />
        </div>
        
        <div>
            <Heads title='Protégez vos oeuvres littéraires et artistiques facilement' structure='font-bold text-center py-8' headcust='text-2xl' />
        </div>

        <div>
            <Price />
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