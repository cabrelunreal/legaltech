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
import QuickCall from '@/app/components/proprieteIntellectuelle/General/QuickCall'
import FAQ from '@/app/components/Faq'


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

    
    const faqData = [
        {
          question: "Qu'est-ce que la Propriete Intellectuelle, et à quoi sert-elle ?",
          answer: "La LegalTech, contraction de 'legal technology', désigne l'ensemble des technologies utilisées pour rendre les services juridiques plus accessibles, plus efficaces et plus abordables. Ces outils peuvent automatiser des tâches, faciliter la recherche juridique, améliorer la collaboration entre les avocats et leurs clients, etc.",
        },
        {
          question: "Quels sont les avantages de la Propriete Intellectuelle pour les startupeurs ?",
          answer: "La LegalTech permet aux particuliers de : \n* Bénéficier de conseils juridiques en ligne à moindre coût. \n* Gérer eux-mêmes certaines démarches juridiques simples (rédaction de contrats, rédaction de testament, etc.). \n* Avoir accès à des informations juridiques claires et précises.",
        },
        {
          question: "Quel sont les differents aspets de la Propriete Intellectuelle?",
          answer: "Pour choisir un outil LegalTech adapté à vos besoins, il est important de : \n* Identifier précisément les problèmes juridiques que vous souhaitez résoudre. \n* Comparer les fonctionnalités des différents outils disponibles. \n* Vérifier la fiabilité et la sécurité des données. \n* Tenir compte de votre budget.",
        },
        {
          question: "Comment la PI peut-elle améliorer mon activité ?",
          answer: "La LegalTech peut vous aider à : \n* Gagner du temps sur les tâches administratives répétitives. \n* Améliorer la qualité de vos prestations. \n* Renforcer votre relation avec vos clients. \n* Vous différencier de la concurrence.",
        },
        {
          question: "Qu'est-ce que la Propriete Intellectuelle, et à quoi sert-elle ?",
          answer: "La LegalTech peut vous aider à : \n* Gagner du temps sur les tâches administratives répétitives. \n* Améliorer la qualité de vos prestations. \n* Renforcer votre relation avec vos clients. \n* Vous différencier de la concurrence.",
        }
      ];
  
    const router = useRouter();
  
    const onclickEnterprise = (path: string) => {
        router.push(path);
    };
  return (
    <div>
        <div>
            <Header />
        </div>
        <div>
            <WelcomeContainer 
                title='TRADUCTION DE DOCUMENTS'
                image='https://res.cloudinary.com/dedakscgk/image/upload/v1719703638/translate-documents_grl9qr.png'
                description='Traduction de documents juridiques, administratifs et autres documents techniques.'
                custbutton='bg-green-700 text-white px-3 py-2 rounded-md uppercase hover:bg-green-800'
                buttonTitle1='commencer'
                custom='text-center'
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

        <div className="flex bg-gray-100">
            <FAQ questionsAnswers={faqData} />
        </div>

        <div>
            <QuickCall />
        </div>

        <div>
            <Footer />
        </div>
    </div>
  )
}

export default DocTranslates