import DocTranslate from '@/app/components/DocTranslate'
import Experts from '@/app/layouts/Experts'
import Intellectual from '@/app/layouts/Intellectual'
import Laugage from '@/app/layouts/Laugage'
import Services from '@/app/layouts/services'
import Traductions from '@/app/layouts/Traduction'
import Why from '@/app/layouts/Why'
import React from 'react'
import Welcomes from '@/app/layouts/Welcome'
import BeforeHeader from '@/app/components/proprieteIntellectuelle/General/BeforeHeader'
import Header from '@/app/components/proprieteIntellectuelle/General/Header'
import WelcomeContainer from '@/app/components/proprieteIntellectuelle/General/Welcome'
import Footer from '@/app/layouts/footer'
import DocCreate from '@/app/layouts/DocCreate'

const Welcome = () => {
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
                custom='justify-center text-center'
                title='LE JURIDIQUE ACCESSIBLE PAR TOUS'
                description='Services juridiques simple, abordables à portée de main'
                buttonTitle='Commencer'
                image='https://res.cloudinary.com/dedakscgk/image/upload/v1719703625/landing_background_2_l5ttky.jpg'
            />
        </div>

        <div>
            <Services />
        </div>

        <div>
            <DocCreate />
        </div>
        <div>
            <Intellectual />
        </div>
        <div>
            <Experts />
        </div>
        <div  className='bg-green-700 my-16'>
            <Traductions />
        </div>

        <div>
            <Why title='POURQUOI NOUS?' description='Pourquoi choisir tribune justice pour vos opérations juridiques.' />
        </div>

        <div className='bg-green-700'>
            <Laugage />
        </div>

        <div className='text-white'>
            <Footer />
        </div>
    </div>
  )
}

export default Welcome