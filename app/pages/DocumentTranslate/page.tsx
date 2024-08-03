import WelcomeContainer from '@/app/components/creationDesDocuments/Welcome'
import BeforeHeader from '@/app/components/proprieteIntellectuelle/General/BeforeHeader'
import Button from '@/app/components/proprieteIntellectuelle/General/Button'
import Header from '@/app/components/proprieteIntellectuelle/General/Header'
import DocCreate from '@/app/layouts/DocCreate'
import Footer from '@/app/layouts/footer'
import Contact from '@/app/layouts/proprieteIntellectuelle/Home/Contact'
import Why from '@/app/layouts/Why'
import React from 'react'

const DocTranslates = () => {
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
                title='TRADUCTION DE DOCUMENTS'
                image='https://res.cloudinary.com/dedakscgk/image/upload/v1719703638/translate-documents_grl9qr.png'
                description='Traduction de documents juridiques, administratifs et autres documents techniques.'
                buttonTitle1='s&apos;inscrire'
                buttontitle2='se connecter'
                custom='justify-center text-center'
            />
        </div>

        <div>
            <DocCreate />
        </div>

        <div className='text-center w-full md:w-9/12 m-auto py-12'>
            <h2 className='text-xl md:text-3xl font-semibold'>COMMENCER LA TRADUCTION DE VOTRE DOCUMENT</h2>
            <Button title='traduction de document' structure='px-6 py-3 bg-green-700 rounded-md text-white my-4 uppercase' />
        </div>
        
        <div>
            <Why title='POURQUOI NOUS?' description='Pourquoi choisir tribune justice pour vos opérations juridiques.' />
        </div>

        <div className='text-xl md:text-3xl font-semibold px-12 md:px-48 py-16'>
            <h2 className='w-9/12 text-center m-auto'>COMPLÉTEZ CES INFORMATIONS POUR COMMENCER LA TRADUCTION DE VOTRE DOCUMENT</h2>
        </div>

        <div>
            <Contact />
        </div>

        <div>
            <Footer />
        </div>
    </div>
  )
}

export default DocTranslates