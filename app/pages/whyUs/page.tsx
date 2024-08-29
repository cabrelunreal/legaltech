
import Header from '@/app/components/proprieteIntellectuelle/General/Header'
import QuickCall from '@/app/components/proprieteIntellectuelle/General/QuickCall'
import WelcomeContainer from '@/app/components/proprieteIntellectuelle/General/Welcome'
import Footer from '@/app/layouts/footer'
import Laugage from '@/app/layouts/Laugage'
import Why from '@/app/layouts/Why'
import Cards from '@/app/layouts/WhyUs/Cards'
import Members from '@/app/layouts/WhyUs/Members'
import Mission from '@/app/layouts/WhyUs/Mission'
import React from 'react'

const WhyUS = () => {
  return (
    <div>
        <div>
            <Header />
        </div>
        <div>
            <WelcomeContainer
                custom='justify-start md:pl-64 md:pt-24'
                title='POURQUOI NOUS ?'
                description='Tribunejustice vous accompagne dans le choix des experts les plus compétents.'
                image='https://res.cloudinary.com/dedakscgk/image/upload/v1724943963/Screen_Shot_2024-06-29_at_14.51.43_1_zelxgc.png'
            />
        </div>

        <div className='py-8'>
            <Mission />
        </div>

        <div className='pb-4'>
            <Why title='NOTRE APPROCHE' />
        </div>

        <div className='py-8'>
            <Cards />
        </div>

        <div className='py-8'>
            <Members />
        </div>
        
        <div className='py-8'>
            <QuickCall />
        </div>

        <div>
            <Footer />
        </div>
    </div>
  )
}

export default WhyUS