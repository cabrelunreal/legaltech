import WelcomeContainer from '@/app/components/creationDesDocuments/Welcome'
import Header from '@/app/components/proprieteIntellectuelle/General/Header'
import QuickCall from '@/app/components/proprieteIntellectuelle/General/QuickCall'
import Cards from '@/app/layouts/creationDesDocuments/Cards'
import DocCreate from '@/app/layouts/DocCreate'
import Footer from '@/app/layouts/footer'
import React from 'react'

const CreateDocs = () => {
  return (
    <div>
        <div>
            <Header />
        </div>
        <div>
            <WelcomeContainer 
                title='CRÉATION DE DOCUMENTS'
                image='https://res.cloudinary.com/dedakscgk/image/upload/v1719703618/create-document_uuqlos.png'
                description='Services de création de documents simples et abordables à portée de main'
                custButton=''
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
            <QuickCall />
        </div>
        <div className='text-white'>
            <Footer />
        </div>
    </div>
  )
}

export default CreateDocs
