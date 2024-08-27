import Step2 from '@/app/components/personalEnterprise/step2'
import BeforeHeader from '@/app/components/proprieteIntellectuelle/General/BeforeHeader'
import Header from '@/app/components/proprieteIntellectuelle/General/Header'
import WelcomeContainer from '@/app/components/proprieteIntellectuelle/General/Welcome'
import React from 'react'

const Step2IE = () => {
  return (
    <div>
        <div>
            <Header />
        </div>
        <div>
            <WelcomeContainer 
                title='formulaire de Creation d&apos;entreprise individuelle'
                custom='text-center capitalize'
                description='Services de création de l&apos;Entreprise individuelle simples, abordables...'
                image=''
            />
        </div>
        
        <div className='py-4'>
            <div className='text-center pt-12 pb-4'>
                <p>Etape 1 - Etape2</p>
                <h2 className='capitalize text-2xl font-semibold'>renseignements relatifs à l&apos;entrepreneur</h2>
            </div>
            <Step2 />
        </div>
    </div>
  )
}

export default Step2IE