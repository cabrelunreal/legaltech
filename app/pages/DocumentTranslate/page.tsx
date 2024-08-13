'use client'
import WelcomeContainer from '@/app/components/creationDesDocuments/Welcome'
import DocCreation from '@/app/components/DocCreation'
import BeforeHeader from '@/app/components/proprieteIntellectuelle/General/BeforeHeader'
import Button from '@/app/components/proprieteIntellectuelle/General/Button'
import Header from '@/app/components/proprieteIntellectuelle/General/Header'
import DocCreate from '@/app/layouts/DocCreate'
import Footer from '@/app/layouts/footer'
import Contact from '@/app/layouts/proprieteIntellectuelle/Home/Contact'
import Why from '@/app/layouts/Why'
import React from 'react'
import { useRouter } from 'next/navigation'


const title1 = 'Préparez vos documents.'
const title2 = 'Commandez et payez en ligne.'
const title3 = 'Recevez la traduction.'

const image1 = 'https://res.cloudinary.com/dedakscgk/image/upload/v1719703612/choisir_model_qxnvsl.svg'
const image2 = 'https://res.cloudinary.com/dedakscgk/image/upload/v1719703632/remplir_le_document_xklo0a.svg'
const image3 = 'https://res.cloudinary.com/dedakscgk/image/upload/v1719703612/advocats_en_option_gkeapb.svg'

const description1 = 'Scannez ou prenez une photo de tous les documents que vous souhaitez que nous traduisions.'
const description2 = 'Téléchargez vos fichiers et remplissez notre formulaire en ligne facile. Payez en ligne avec n&apos;importe quelle carte de crédit ou de débit.'
const description3 = 'La traduction sera prête à être téléchargée dans 2-3 jours pour un maximum de 3 pages. Plus de 3 pages peuvent prendre 5 jours ou plus.'


const DocTranslates = () => {
  
    const router = useRouter();
  
    const onclickEnterprise = (path: string) => {
        router.push(path);
    };
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
        <div className='w-full sm:w-11/12 md:w-10/12 lg:w-9/12 mx-auto py-12 md:py-14'>
        <div className='py-3 px-8'>
            <div className='text-center text-black uppercase text-lg md:text-3xl font-semibold py-0 md:py-2'>
                <h2>COMMENT çA MARCHE</h2>
            </div>
        </div>
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-4 sm:px-6 lg:px-8'>
            <div className='flex justify-center items-center'>
                <DocCreation 
                    title={title1} 
                    description={description1} 
                    image={image1}
                />
            </div>
            <div className='flex justify-center items-center'>
                <DocCreation 
                    title={title2} 
                    description={description2} 
                    image={image2}
                />
            </div>
            <div className='flex justify-center items-center'>
                <DocCreation 
                    title={title3} 
                    description={description3} 
                    image={image3}
                />
            </div>
        </div>
    </div>
        </div>

        <div className='text-center w-full md:w-9/12 m-auto py-12'>
            <h2 className='text-xl md:text-3xl font-semibold'>COMMENCER LA TRADUCTION DE VOTRE DOCUMENT</h2>
            <Button title='traduction de document' 
                onClick={() => onclickEnterprise('../../pages/step1')}  structure='px-6 py-3 bg-green-700 rounded-md text-white my-4 uppercase' />
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