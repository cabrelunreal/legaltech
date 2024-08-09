import DocTranslate from '@/app/components/DocTranslate'
import Experts from '@/app/layouts/Experts'
import Laugage from '@/app/layouts/Laugage'
import Services from '@/app/layouts/services'
import Traductions from '@/app/layouts/Traduction'
import Why from '@/app/layouts/Why'
import React from 'react'
import BeforeHeader from '@/app/components/proprieteIntellectuelle/General/BeforeHeader'
import Header from '@/app/components/proprieteIntellectuelle/General/Header'
import WelcomeContainer from '@/app/components/proprieteIntellectuelle/General/Welcome'
import Footer from '@/app/layouts/footer'
import DocCreate from '@/app/layouts/DocCreate'
import ProprieteIntellect from '@/app/layouts/ProprieteIntellec'
import Partners from '@/app/layouts/Partners'
import Image from 'next/image'

const Welcome = () => {
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
                custom='justify-center text-center'
                title='LE JURIDIQUE ACCESSIBLE PAR TOUS'
                description='Services juridiques simple, abordables à portée de main'
                buttonTitle='Commencer'
                image='https://res.cloudinary.com/dedakscgk/image/upload/v1719703625/landing_background_2_l5ttky.jpg'
            />
        </div>

        <div>
            <Services />
        </div>

        <div className='bg-gray-50 my-24'>
            <DocCreate />
        </div>

        <div className='py-12'>
            <ProprieteIntellect />
        </div>

        <div className='relative w-full h-[850px] md:h-[750px]'>
            <Image
                src='https://res.cloudinary.com/dedakscgk/image/upload/v1719703633/high-angle-shot-of-gavel-and-scale-on-wooden-surface_busgu3.png'
                alt="Sample Image"
                layout="fill"
                objectFit="cover"
                className="w-full h-full"
            />
            <div className='w-full absolute inset-0 bg-green-700 bg-opacity-90'>
                <Traductions />
            </div>
        </div>
        
        <div className='py-24 pb-16 bg-gray-50'>
            <Experts />
        </div>

        <div className='pb-24'>
            <Why title='POURQUOI NOUS?' description='Pourquoi choisir tribune justice pour vos opérations juridiques.' />
        </div>

        <div className='relative w-full h-[900px] md:h-[450px]'>  
            <Image
                src='https://res.cloudinary.com/dedakscgk/image/upload/v1719703633/high-angle-shot-of-gavel-and-scale-on-wooden-surface_busgu3.png'
                alt="Sample Image"
                layout="fill"
                objectFit="cover"
                className="w-full h-full"
            />
            <div className='w-full absolute inset-0 bg-green-700 bg-opacity-90'>
                <Laugage />
            </div>
        </div>

        <div>
            <Partners />
        </div>

        <div className='text-white'>
            <Footer />
        </div>
    </div>
  )
}

export default Welcome