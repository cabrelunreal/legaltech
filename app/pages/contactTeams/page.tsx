import WelcomeContainer from '@/app/components/creationDesDocuments/Welcome'
import BeforeHeader from '@/app/components/proprieteIntellectuelle/General/BeforeHeader'
import Header from '@/app/components/proprieteIntellectuelle/General/Header'
import Footer from '@/app/layouts/footer'
import Contact from '@/app/layouts/proprieteIntellectuelle/Home/Contact'
import React from 'react'

const ContactTeams = () => {
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
                title='CONTACTEZ NOS EXPERTS'
                image='https://res.cloudinary.com/dedakscgk/image/upload/v1719703613/contact_us_kyp8pp.jpg'
                description='Pour une collaboration plus grande et plus fluide avec vous nous offrons la possibilité d&apos;adresser un message à nos experts.'
                custom='justify-center text-center'
                custbutton=''
            />
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

export default ContactTeams