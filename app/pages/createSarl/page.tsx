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
import Button from '@/app/components/proprieteIntellectuelle/General/Button'
import QuickCall from '@/app/components/proprieteIntellectuelle/General/QuickCall'


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
                    title='CRÉATION DE LA SARL'
                    image='https://res.cloudinary.com/dedakscgk/image/upload/v1719703625/enterprise-background_xiwedn.png'
                    description='Services de création de la SARL, simples et abordables...'
                    buttonTitle1='Commencer'
                    onClick={() => onclickEnterprise('../../pages/step1Sarl')}
                    custButton='bg-green-700 px-8 py-3 text-lg uppercase hover:bg-green-800 rounded-md'
                    custom='justify-center text-center'
                />
            </div>
            <div>
                <Why 
                    title='POURQUOI CRÉER LA SARL ?'
                    description='Contrairement aux entreprises individuelles ou aux Établissements, 
                    les associés de la SARL ne sont responsables des dettes qu&apos;à hauteur de leurs apports.
                    Les biens personnels des associés ne peuvent être saisis. Créer une SARL ouvre la possibilité aux 
                    entrepreneurs de sortir du secteur informel, d&apos;agrandir leur entreprise, d&apos;ouvrir des comptes 
                    en banque, de signer des contrats importants et d&apos;avoir des autorisations administratives.'
                    custom='hidden md:-9/12 m-auto'
                />
            </div>

            <div>
                <Why 
                    title='LA GÉRANCE DE LA SARL EST-ELLE RÉMUNÉRÉE ?'
                    description='Le régime fiscal ne dépend pas de la forme de la société, autrement dit, le droit 
                    n&apos;offrirait pas plus de faveurs en termes d&apos;imposition ou de taxation si la société constituée est 
                    une Société Anonyme plutôt qu&apos;une Société à responsabilité limitée et inversement. 
                    Cependant, le système de taxation ou d&apos;imposition dépend largement du chiffre d&apos;affaires réalisé par les sociétés.'
                    custom='hidden md:-9/12 m-auto'
                />
            </div>

            <div>
                <Why 
                    title='QUEL EST LE RÉGIME FISCAL DE LA SARL ?'
                    description='Le régime fiscal ne dépend pas de la forme de la société, autrement dit, 
                    le droit n&apos;offrirait pas plus de faveurs en termes d&apos;imposition ou de taxation si la société constituée est une 
                    Société Anonyme plutôt qu&apos;une Société à responsabilité limitée et inversement. Cependant, 
                    le système de taxation ou d&apos;imposition dépend largement du chiffre d&apos;affaires réalisé par les sociétés.'
                    custom='hidden md:-9/12 m-auto'
                />
            </div>

            <div className='px-4'>
                <div className='w-full md:w-5/12 m-auto border p-4 rounded-md shadow-sm border-gray-300'>
                    <h2 className='text-xl font-bold'>Liste d&apos;informations nécessaires pour la rédaction des statuts</h2>
                    <ul className='list-disc py-3 px-8'>
                        <li>Dénomination de la société</li>
                        <li>Situation géographique</li>
                        <li>Objet social : énumérer les activités</li>
                        <li>Montant du capital social et valeur de la part (valeur nominale minimale de 5000 F CFA)</li>
                        <li>NB : Au Cameroun, le capital minimum exigible pour les SARL est de 100.000 F CFA</li>
                        <li>Nom et adresse des associés</li>
                        <li>Libération du capital auprès d&apos;une banque ou d&apos;un notaire</li>
                        <li>Répartition du capital</li>
                        <li>Nom du gérant</li>
                    </ul>
                </div>
            </div>

            <div>
                <DocCreate />
            </div>

            <div className='pb-8'>
                <div className='text-center'>
                    <div>
                        <h2 className='font-semibold text-xl'>Nos Tarifs</h2>
                        <p className='py-1 text-2lg'>Les tarifs varient en fonction du capital social</p>
                    </div>

                    <div>
                        <p className='text-2lg py-1'>Suivez notre processus simple en deux phases</p>
                    </div>
                </div>
                <div className='py-4 my-2 md:px-0 px-6'>
                    <div>
                        <div className='text-center text-2xl font-semibold py-4'>
                            <p>Avec un capital {'>'}100 000 et {'≤'}1 000 000</p>
                        </div>
                        <div className='grid md:grid-cols-2 md:w-5/12 gap-4 m-auto'>
                            <div className='border-4 border-green-700 text-center p-6 flex rounded-[60px] flex-col justify-between'>
                                <div>
                                    <p className='p-1 font-semibold'>Phase 1</p>
                                    <p className='p-1 font-semibold'>Formalités sans le notaire</p>
                                    <p className='p-1'>À partir de</p>
                                    <p className='p-1 font-semibold text-xl'>93 $ | 55000 FCFA</p>
                                    <p className='p-1 font-semibold'>+ frais professionnels</p>
                                    <p className='p-1 font-semibold'>Vous obtenez :</p>
                                    <p className='p-1 font-semibold'>RCCM + NUI</p>
                                    <p className='p-1'>Le registre du commerce et du crédit
                                    mobilier</p>
                                    <p className='p-1'>En plus du numéro d&apos;identification
                                    unique.</p>
                                </div>
                                <div>
                                    <Button title='Commencer' structure='rounded-md bg-green-700 text-white py-3 px-4 mt-3' />
                                </div>
                            </div>
                            <div className='border-4 border-green-700 text-center p-6 flex rounded-[60px] flex-col justify-between'>
                                <div>
                                    <p className='p-1 font-semibold'>Phase 2</p>
                                    <p className='p-1 font-semibold'>Formalités auprès du
                                    centre d&apos;impôt</p>
                                    <p className='p-1'>À partir de</p>
                                    <p className='p-1 font-semibold'>169 $ | 100000 FCFA</p>
                                    <p className='p-1'>+ frais professionnels</p>
                                    <p className='p-1 font-semibold'>Vous obtenez :</p>
                                    <p className='p-1 font-semibold'>ANR</p>
                                    <p className='p-1'>L&apos;attestation de non-redevance.</p>
                                    <p className='p-1 font-semibold'>CNPS / ANUPS</p>
                                    <p className='p-1'>
                                        L&apos;immatriculation CNPS ou 
                                        L&apos;attestation de non-utilisation
                                        du personnel salarié.</p>
                                </div>
                                <div>
                                    <Button title='Commencer' structure='rounded-md bg-green-700 text-white py-3 px-4 mt-3' />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className='text-center text-2xl font-semibold py-8'>
                            <p>Avec un capital {'>'}1 000 000</p>
                        </div>
                        <div className='grid md:grid-cols-2 md:w-5/12 gap-4 m-auto'>
                            <div className='border-4 border-green-700 text-center p-6 flex rounded-[60px] flex-col justify-between'>
                                <div>
                                    <p className='p-1 font-semibold'>Phase 1</p>
                                    <p className='p-1 font-semibold'>Formalités auprès du notaire</p>
                                    <p>À partir de</p>
                                    <p className='p-1 font-semibold text-xl'>93 $ | 55000 FCFA</p>
                                    <p className='p-1'>+ frais professionnels</p>
                                    <p className='p-1 font-semibold'>Vous obtenez :</p>
                                    <p className='p-1 font-semibold'>Authentification</p>
                                    <p className='p-1'>Délivrance du document de la société</p>
                                </div>
                                <div>
                                    <Button title='Commencer' structure='rounded-md bg-green-700 text-white py-3 px-4 mt-3' />
                                </div>
                            </div>
                            <div className='border-4 border-green-700 text-center p-6 flex rounded-[60px] flex-col justify-between'>
                                <div>
                                    <p className='p-1 font-semibold'>Phase 2</p>
                                    <p className='p-1 font-semibold'>Formalités auprès du centre d&apos;impôt</p>
                                    <p className='p-1'>À partir de</p>
                                    <p className='p-1 font-semibold'>169 $ | 100000 FCFA</p>
                                    <p className='p-1'>+ frais professionnels</p>
                                    <p className='p-1 font-semibold'>Vous obtenez :</p>
                                    <p className='p-1 font-semibold'>ANR</p>
                                    <p className='p-1'>L&apos;attestation de non-redevance.</p>
                                    <p className='p-1 font-semibold'>CNPS / ANUPS</p>
                                    <p className='p-1'>L&apos;immatriculation CNPS ou 
                                    L&apos;attestation de non-utilisation
                                    du personnel salarié.</p>
                                </div>
                                <div>
                                    <Button title='Commencer' structure='rounded-md bg-green-700 text-white py-3 px-4 mt-3' />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div>
                <QuickCall />
            </div>
            <div>
                <Contact />
            </div>
            <Footer />
        </div>
    )
}

export default CreatingSarl
