import BeforeHeader from '@/app/components/proprieteIntellectuelle/General/BeforeHeader'
import Header from '@/app/components/proprieteIntellectuelle/General/Header'
import WelcomeContainer from '@/app/components/proprieteIntellectuelle/General/Welcome'
import FormStep3 from '@/app/components/Translate/FormStep3'
import React from 'react'

const Step3 = () => {
  return (
    <div>
        <div>
            <Header />
        </div>

        <div>
            <WelcomeContainer 
                custom='text-center capitalize'
                title='demande de traduction'
                description='commencer la traduction de votre document en remplissant le formulaire suivant'
                image='https://res.cloudinary.com/dedakscgk/image/upload/v1721955860/woman-8499928_1280_1_1_bqbqjb.png'
            />
        </div>

        <div className='py-4 pt-12'>
            <p className='text-center text-lg'>Etape 1 - Etape 2 - Etape 3</p>
            <h2 className='text-center py-2 uppercase text-2xl'>completez ces informations</h2>
            <div>
                <FormStep3 />
            </div>
        </div>
    </div>
  )
}

export default Step3