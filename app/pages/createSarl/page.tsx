'use client'
import Why from '@/app/components/createSarl/why'
import WelcomeContainer from '@/app/components/creationDesDocuments/Welcome'
import BeforeHeader from '@/app/components/proprieteIntellectuelle/General/BeforeHeader'
import Header from '@/app/components/proprieteIntellectuelle/General/Header'
import DocCreate from '@/app/layouts/creationEntreprise/how'
import Footer from '@/app/layouts/footer'
import Contact from '@/app/layouts/proprieteIntellectuelle/Home/Contact'
import React from 'react'
import { useRouter } from 'next/navigation';


const CreatingSarl = () => {
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
                title='CREATION DE LA SARL'
                image='https://res.cloudinary.com/dedakscgk/image/upload/v1719703625/enterprise-background_xiwedn.png'
                description='Services de création de la SARL simples, abordables...'
                buttonTitle1='commencer'
                onclick={() => onclickEnterprise('../../pages/step1Sarl')}
                custbutton='bg-green-700 px-8 py-3 text-lg uppercase hover:bg-green-800 rounded-md'
                custom='justify-center text-center'
            />
        </div>
        <div>
            <Why 
                title='POURQUOI CRÉER LA SARL ?'
                description='Contrairement aux entreprises individuelles ou Établissement, 
                les associés de la SARL ne sont responsables des dettes qu&apos;à hauteur de leurs apports.
                 Les biens personnels des associés ne peuvent être saisis. Créer une SARL ouvre la possibilité aux 
                 entrepreneurs de sortir du secteur informel, d&apos;agrandir leur entreprise, d&apos;ouvrir des comptes 
                 en banque, signer des contrats importants et avoir des autorisations administratives.'
                 custom='hidden'
            />
        </div>

        <div>
            <Why 
                title='LA GÉRANCE DE LA SARL EST-ELLE RÉMUNÉRÉE ?'
                description='Le régime fiscal ne dépend pas de la forme de la société, autrement dit, le droit 
                n’offrirait pas plus de faveur en terme d’imposition ou de taxation si la société constituée est 
                une Société Anonyme plutôt qu’une Société à responsabilité limitée et inversement. 
                Cependant, le système de taxation ou d’imposition dépend largement du Chiffre d’Affaires réalisé par les sociétés.'
                custom='hidden'
            />
        </div>

        
        <div>
            <Why 
                title='QUEL EST LE RÉGIME FISCAL DE LA SARL ?'
                description='Le régime fiscal ne dépend pas de la forme de la société, autrement dit, 
                le droit n’offrirait pas plus de faveur en terme d’imposition ou de taxation si la société constituée est une 
                Société Anonyme plutôt qu’une Société à responsabilité limitée et inversement. Cependant, 
                le système de taxation ou d’imposition dépend largement du Chiffre d’Affaires réalisé par les sociétés.'
                custom='hidden'
            />
        </div>

        <div className='w-full md:w-5/12 m-auto'>
            <h2 className='text-xl text-bold'>Liste d&apos;information nécessaires pour la rédaction des statuts</h2>
            <ul className='list-disc py-3 px-8'>
                <li>Dénomination de la société</li>
                <li>Situation géographique</li>
                <li>Objet social énumérer les activités</li>
                <li>Montant du capital social et valeur de la part (valeur nominale minimale est de 5000 F cfa)</li>
                <li>NB : Au cameroun le capital minimum exigible pour les SARL est de 100.000 F cfa</li>
                <li>Nom et adresse des associés</li>
                <li>Libération du capital auprès d&apos;une banque ou d&apos;un notaire</li>
                <li>Répartition du capital</li>
                <li>Nom du Gérant</li>
            </ul>
        </div>

        <div>
            <DocCreate />
        </div>

        <div>
            <Why 
                title='Nos tarifs'
                description='Ci-dessous un exemple de tarifs des entreprises dont nous allons nous occuper de 
                leur formalité de création. Pour le cas de l&apos;Entreprise Individuelle, 
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

export default CreatingSarl