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

const CreatePersonal = () => {
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
            title='ENTREPRISE INDIVIDUELLE'
            image='https://res.cloudinary.com/dedakscgk/image/upload/v1719703629/individual_enterprise_background_ngpuye.png'
            description='Services de création de la SARL simples, abordables...'
            buttonTitle1='Suivant'
            onclick={() => onclickEnterprise('../../pages/step1ent')}
            custbutton='bg-green-700 px-8 py-3 text-lg uppercase hover:bg-green-800 rounded-md'
            custom='justify-center text-center'
        />
    </div>

    <div>
            <Why 
                title='POURQUOI CRÉER L&apos;ENTREPRISE INDIVIDUEL ?'
                description='l&apos;Entreprise Individuelle ou l&apos;Établissement est la forme juridique de structure économique 
                la plus sollicitée. Elle constitue la majorité des TPE et PME du tissu économique local. Les conditions de création des 
                entreprises individuelles ou des établissements sont régies par les législations nationales.'
                 custom='hidden'
            />
    </div>

    <div>
            <Why 
                title='Questions sur l&apos;Entreprise Individuelle.'
                description='L&apos;Entreprise Individuelle est une forme juridique de structure au statut simplifié. Ainsi, l&apos;entreprise ne dispose pas de personnalité morale propre. 
                Sa personnalité juridique est confondue avec celle de l&apos;exploitant ou du dirigeant.'
                 custom='hidden'
            />
    </div>

    
    <div>
            <Why 
                title='Quels sont les Avantages ?'
                description='Le principal avantage de l’Entreprise Individuelle réside dans sa simplicité. L&apos;entreprise individuelle est très facile à créer. c&apos;est une forme d&apos;entreprise 
                qui se montre plus adaptée aux structures qui génèrent un chiffre d&apos;affaires peu élevé et permet aux commençants de sortir de l&apos;informel 
                et s&apos;attaquer aux marchés plus grands et plus attractifs.'
                 custom='hidden'
            />
    </div>

    <div>
            <Why 
                title='Quels sont Les Inconvénients ?'
                description='Mais en contrepartie, il est aussi seul responsable sur l&apos;ensemble de ses biens personnels. En cas de dettes son patrimoine peut être engagé.'
                 custom='hidden'
            />
    </div>

    <div>
            <Why 
                title='Quel est le régime fiscal appliqué ?'
                description='Les bénéfices de l&apos;entreprise sont soumis à l&apos;impôt sur le revenu de l&apos;entrepreneur ou de l&apos;exploitant.'
                 custom='hidden'
            />
            <div className='w-5/12 m-auto'>
                <ul className='list-disc text-lg py-4'>
                    <li>Nom et prénom de l&apos;entrepreneur</li>
                    <li>Date et lieu de naissance</li>
                    <li>Nationalité</li>
                    <li>Pour les étrangers, titre de séjour et date de validité</li>
                    <li>Situation Matrimoniale (célibataire, Marié, veuf, divorcé)</li>
                    <li>Nom et adresse des associés</li>
                    <li>Nom Commercial</li>
                    <li>Activité principale</li>
                    <li>Adresse physique et Boîte postale</li>
                </ul>
            </div>
    </div>

    <div>
        <DocCreate />
    </div>

    <div>
            <Why 
                title='Nos tarifs'
                description='Ci-dessous un exemple de tarifs des entreprises dont nous allons nous occuper de leur formalité de création. Pour le cas de l&apos;Entreprise Individuelle, 
                les lignes et les montants sont presque exacts. Nous allons juste éliminer la ligne Frais de publication Cameroon Tribune.'
                moreDescription='Je vous prie de trouver ci-après les coûts et les documents nécessaires pour la création des sociétés suivantes:'
            />
    </div>

    
    <div className='w-4/12 m-auto bg-gray-50 px-50 py-48'>
        <h2 className='text-center text-4xl uppercase'>Pricing <br /> 4 X 4</h2>
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

export default CreatePersonal