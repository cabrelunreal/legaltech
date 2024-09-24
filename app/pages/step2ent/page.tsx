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
                title='Formulaire de création d&apos;entreprise individuelle' // Correction: "Creation" -> "création"
                custom='text-center capitalize'
                description='Services de création de l&apos;entreprise individuelle simples, abordables...' // Correction: "l'Entreprise" -> "l'entreprise"
                image=''
            />
        </div>
        
        <div className='py-4'>
            <div className='text-center pt-12 pb-4'>
                <p>Étape 1 - Étape 2</p> 
                <h2 className='capitalize text-2xl font-semibold'>Renseignements relatifs à l&apos;entrepreneur</h2> 
            </div>
            <Step2 />
        </div>
    </div>
  )
}

export default Step2IE
