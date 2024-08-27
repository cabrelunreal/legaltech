import WelcomeContainer from '@/app/components/creationDesDocuments/Welcome'
import BeforeHeader from '@/app/components/proprieteIntellectuelle/General/BeforeHeader'
import Header from '@/app/components/proprieteIntellectuelle/General/Header'
import QuickCall from '@/app/components/proprieteIntellectuelle/General/QuickCall'
import Contacts from '@/app/components/proprieteIntellectuelle/Home/Contact'
import Cards from '@/app/layouts/creationDesDocuments/Cards'
import DocCreate from '@/app/layouts/DocCreate'
import Footer from '@/app/layouts/footer'
import Contact from '@/app/layouts/proprieteIntellectuelle/Home/Contact'
import React from 'react'

const CreateDocs = () => {
  return (
    <div>
        <div>
            <Header />
        </div>
        <div>
            <WelcomeContainer 
                title='CREATION DE DOCUMENTS'
                image='https://res.cloudinary.com/dedakscgk/image/upload/v1719703618/create-document_uuqlos.png'
                description='Services de création de documents simples, abordables à portée de main'
                custbutton=''
                custom='justify-center text-center'
            />
        </div>
        <div>
            <DocCreate />
        </div>
        <div>
            <Cards />
        </div>
        <div>
            <Contact />
        </div>
        <div className='text-white'>
            <Footer />
        </div>
    </div>
  )
}

export default CreateDocs