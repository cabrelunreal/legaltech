import BeforeHeader from '@/app/components/proprieteIntellectuelle/General/BeforeHeader'
import Header from '@/app/components/proprieteIntellectuelle/General/Header'
import WelcomeContainer from '@/app/components/proprieteIntellectuelle/General/Welcome'
import Footer from '@/app/layouts/footer'
import Formulaire from '@/app/layouts/proprieteIntellectuelle/Formulaire/Formulaire'
import React from 'react'

const FormDessin = () => {
  return (
    <div>
        <div>
            <Header />
        </div>

        <div>
            <WelcomeContainer 
                custom='justify-center text-center'
                title='PROPRIÉTÉ INTELLECTUELLE'
                description='FORMULAIRE DE DEMANDE DE DESSIN ET MODELE INDUSTRIEL'
                image='https://res.cloudinary.com/dedakscgk/image/upload/v1721963620/Screen_Shot_2024-06-29_at_14.51.43_1_1_lqqrla.png'
            />
        </div>

        <div>
            <Formulaire type1='Dessin' type2='Modéle Industriel' />
        </div>

        <div className='text-white'>
            <Footer />
        </div>
    </div>
  )
}

export default FormDessin