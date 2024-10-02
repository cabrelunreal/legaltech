'use client'
import Why from '@/app/components/createSarl/why'
import WelcomeContainer from '@/app/components/creationDesDocuments/Welcome'
import BeforeHeader from '@/app/components/proprieteIntellectuelle/General/BeforeHeader'
import Header from '@/app/components/proprieteIntellectuelle/General/Header'
import DocCreate from '@/app/layouts/DocCreate'
import Footer from '@/app/layouts/footer'
import Contact from '@/app/layouts/proprieteIntellectuelle/Home/Contact'
import React from 'react'
import { useRouter } from 'next/navigation';
import Button from '@/app/components/proprieteIntellectuelle/General/Button'
import QuickCall from '@/app/components/proprieteIntellectuelle/General/QuickCall'
import FAQ from '@/app/components/Faq'

const CreatePersonal = () => {
    const faqData = [
        {
            question: "POURQUOI CRÉER L'ENTREPRISE INDIVIDUEL ?",
            answer: "l'Entreprise Individuelle ou l'Établissement est la forme juridique de structure économique la plus sollicitée. Elle constitue la majorité des TPE et PME du tissu économique local. Les conditions de création des entreprises individuelles ou des établissements sont régies par les législations nationales.",
        },
        {
            question: "Questions sur l'Entreprise Individuelle ?",
            answer: "L'Entreprise Individuelle est une forme juridique de structure au statut simplifié. Ainsi, l'entreprise ne dispose pas de personnalité morale propre. Sa personnalité juridique est confondue avec celle de l'exploitant ou du dirigeant.",
        },
        {
            question: "Quels sont les Avantages ?",
            answer: "Le principal avantage de l’Entreprise Individuelle réside dans sa simplicité. L'entreprise individuelle est très facile à créer. c'est une forme d'entreprise qui se montre plus adaptée aux structures qui génèrent un chiffre d'affaires peu élevé et permet aux commençants de sortir de l'informel et s'attaquer aux marchés plus grands et plus attractifs.",
        },
        {
            question: "Quels sont Les Inconvénients ?",
            answer: "Mais en contrepartie, il est aussi seul responsable sur l'ensemble de ses biens personnels. En cas de dettes son patrimoine peut être engagé.",
        },
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
            title='ENTREPRISE INDIVIDUELLE'
            image='https://res.cloudinary.com/dedakscgk/image/upload/v1719703629/individual_enterprise_background_ngpuye.png'
            description='Services de création d&apos;entreprise individuelle, abordables...'
            buttonTitle1='commencer'
            onClick={() => onclickEnterprise('../../pages/step1ent')}
            custButton='bg-green-700 px-8 py-3 text-lg uppercase hover:bg-green-800 rounded-md'
            custom='justify-center text-center'
        />
    </div>

    <div>
        <DocCreate />
    </div>
    <div className='pb-8'>
            <div className='text-center'>
                <div>
                    <h2 className='font-semibold text-xl'>Nos Tarifs </h2>
                    <p className='py-1 text-2lg'>Les tarifs varient en fonction du capital social</p>
                </div>

                <div>
                    <p className='text-2lg py-1'>Suivez notre processus simple en deux phases</p>
                </div>
            </div>
            <div className='py-4 my-2 md:px-0 px-6'>
                <div>
                    <div className='grid md:grid-cols-2 md:w-7/12 gap-4 m-auto'>
                        <div className='border-4 w-10/12 border-green-700 text-center p-6 flex rounded-[60px] flex-col justify-between'>
                            <div>
                                <p className='p-1 font-semibold'>Phase 1 </p>
                                <p className='p-1 font-semibold'>Formalités auprès du CFCE</p>
                                <p className='p-1'>A partir de</p>
                                <p className='p-1 font-semibold text-xl'> 85000 FCFA</p>
                                <p className='p-1 font-semibold'>+ frais professionnels</p>
                                <p className='p-1 font-semibold'>Vous obtenez: </p>
                                <p className='p-1 font-semibold'>RCCM + NUI</p>
                                <p className='p-1'>le registre du commerce et du crédit
                                mobilier</p>
                                <p className='p-1'>en plus du numero d&apos;identification
                                unique.</p>
                            </div>
                        </div>
                        <div className='border-4 w-10/12 border-green-700 text-center p-6 flex rounded-[60px] flex-col justify-between'>
                            <div>
                                <p className='p-1 font-semibold'>Phase 2 </p>
                                <p className='p-1 font-semibold'>Formalités auprès du
                                centre d&apos;impôt</p>
                                <p className='p-1'>A partir de</p>
                                <p className='p-1 font-semibold'>100000 FCFA</p>
                                <p className='p-1'>+ frais professionnels</p>
                                <p className='p-1 font-semibold'>Vous obtenez: </p>
                                <p className='p-1 font-semibold'>ANR</p>
                                <p className='p-1'>l&apos;attestation de Non-Redevance. </p>
                                <p className='p-1 font-semibold'>CNPS / ANUPS</p>
                                <p className='p-1'>
                                    l&apos;immatriculation CNPS ou 
                                    l&apos;Attestation de Non Utilisation
                                    du Personnel Salarié.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
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

export default CreatePersonal