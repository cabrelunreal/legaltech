import WelcomeContainer from '@/app/components/creationEntreprise/Welcome'
import BeforeHeader from '@/app/components/proprieteIntellectuelle/General/BeforeHeader'
import Header from '@/app/components/proprieteIntellectuelle/General/Header'
import DocCreate from '@/app/layouts/creationEntreprise/how'
import Footer from '@/app/layouts/footer'
import Contact from '@/app/layouts/proprieteIntellectuelle/Home/Contact'
import React from 'react'

const CreateSarl = () => {
  return (
    <div>
        <div>
            <Header />
        </div>
        <div>
            <WelcomeContainer 
              title='CRÉATION DE LA SARL / SARLU'
              description='Nous aidons des personnes comme vous à créer des entreprises légalement reconnues.'
              image='https://res.cloudinary.com/dedakscgk/image/upload/v1719703625/enterprise-background_xiwedn.png'
              custom='justify-center text-center'
            />
        </div>
        <div>
            <DocCreate />
        </div>
        <div>
            <Contact />
        </div>
        <div className='text-white'>
            <Footer />
        </div>
    </div>
  )
}

export default CreateSarl
