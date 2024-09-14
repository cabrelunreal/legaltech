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

const CreatePersonal = () => {
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

    <div className='w-full px-4'>
        <div className='border border-gray-300 shadow-sm rounded-md px-8'>
            <Why 
                title='Quel est le régime fiscal appliqué ?'
                description='Les bénéfices de l&apos;entreprise sont soumis à l&apos;impôt sur le revenu de l&apos;entrepreneur ou de l&apos;exploitant.'
                 custom='hidden'
            />
            <div className='md:w-5/12 w-full m-auto'>
                <ul className='list-disc text-sm md:text-lg py-4'>
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
                    <div className='grid md:grid-cols-2 md:w-5/12 gap-4 m-auto'>
                        <div className='border-4 border-green-700 text-center p-6 flex rounded-[60px] flex-col justify-between'>
                            <div>
                                <p className='p-1 font-semibold'>Phase 1 </p>
                                <p className='p-1 font-semibold'>Formalités auprès du CFCE</p>
                                <p className='p-1'>A partir de</p>
                                <p className='p-1 font-semibold text-xl'>93 $ | 55000 FCFA</p>
                                <p className='p-1 font-semibold'>+ frais professionnels</p>
                                <p className='p-1 font-semibold'>Vous obtenez: </p>
                                <p className='p-1 font-semibold'>RCCM + NUI</p>
                                <p className='p-1'>le registre du commerce et du crédit
                                mobilier</p>
                                <p className='p-1'>en plus du numero d&apos;identification
                                unique.</p>
                            </div>
                            <div>
                                <Button title='Commencer' structure='rounded-md bg-green-700 text-white py-3 px-4 mt-3' />
                            </div>
                        </div>
                        <div className='border-4 border-green-700 text-center p-6 flex rounded-[60px] flex-col justify-between'>
                            <div>
                                <p className='p-1 font-semibold'>Phase 2 </p>
                                <p className='p-1 font-semibold'>Formalités auprès du
                                centre d&apos;impôt</p>
                                <p className='p-1'>A partir de</p>
                                <p className='p-1 font-semibold'>169 $ | 100000 FCFA</p>
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
                            <div>
                                <Button title='Commencer' structure='rounded-md bg-green-700 text-white py-3 px-4 mt-3' />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
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