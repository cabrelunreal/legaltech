'use client'
import Step1 from '@/app/components/personalEnterprise/step1'
import BeforeHeader from '@/app/components/proprieteIntellectuelle/General/BeforeHeader'
import Header from '@/app/components/proprieteIntellectuelle/General/Header'
import WelcomeContainer from '@/app/components/proprieteIntellectuelle/General/Welcome'
import React from 'react'
import { useRouter } from 'next/navigation'

const Step1Sarl = () => {
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
                title='Formulaire de creation des statuts de la SARL'
                custom='text-center uppercase'
                description='Services de création de l&apos;Entreprise individuelle simples, abordables...'
                image=''
            />
        </div>
        
        <div className='py-4'>
            <div className='text-center pt-12 pb-4'>
                <p>Etape 1 - Etape2</p>
                <h2 className='capitalize text-2xl font-semibold'>renseignements relatifs à l&apos;entrepreneur</h2>
            </div>
            <Step1 onclick1={() => onclickEnterprise('../../pages/INdivEnterprise')} onclick2={() => onclickEnterprise('../../pages/step2ent')} />
        </div>
    </div>
  )
}

export default Step1Sarl