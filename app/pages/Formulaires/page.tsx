import BeforeHeader from '@/app/components/proprieteIntellectuelle/General/BeforeHeader'
import Header from '@/app/components/proprieteIntellectuelle/General/Header'
import WelcomeContainer from '@/app/components/proprieteIntellectuelle/General/Welcome'
import Footer from '@/app/layouts/footer'
import Formulaire from '@/app/layouts/proprieteIntellectuelle/Formulaire/Formulaire'
import React from 'react'

const Formulaires = () => {
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
                custom='justify-start px-12 lg:pl-56 lg:pr-96'
                title='PROPRIÉTÉ INTELLECTUELLE'
                description='FORMULAIRE DE DEMANDE DE BREVET'
                image='https://res.cloudinary.com/dedakscgk/image/upload/v1721963620/Screen_Shot_2024-06-29_at_14.51.43_1_1_lqqrla.png'
            />
        </div>

        <div>
            <Formulaire />
        </div>

        <div className='text-white'>
            <Footer />
        </div>
    </div>
  )
}

export default Formulaires