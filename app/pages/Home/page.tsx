import BeforeHeader from '@/app/components/BeforeHeader'
import DocTranslate from '@/app/components/DocTranslate'
import Header from '@/app/components/Header'
import Experts from '@/app/layouts/Experts'
import Intellectual from '@/app/layouts/Intellectual'
import Laugage from '@/app/layouts/Laugage'
import Services from '@/app/layouts/services'
import Traductions from '@/app/layouts/Traduction'
import Why from '@/app/layouts/Why'
import React from 'react'
import Welcomes from '@/app/layouts/Welcome'
import Footer from '@/app/layouts/footer'

const Welcome = () => {
  return (
    <div>
        <div className='bg-green-700'>
            <BeforeHeader />
        </div>
        <div className='shadow-md'>
            <Header />
        </div>
        <div className='bg-green-700'>
            <Welcomes />
        </div>
        <div>
            <Services />
        </div>
        <div>
            <Intellectual />
        </div>
        <div>
            <Experts />
        </div>
        <div  className='bg-green-700 my-24'>
            <Traductions />
        </div>
        <div>
            <Why title='POURQUOI NOUS?' description='Pourquoi choisir tribune justice pour vos opérations juridiques.' />
        </div>
        <div className='bg-green-700'>
            <Laugage />
        </div>
        <div className='bg-green-700 text-white py-4'>
            <Footer />
        </div>
    </div>
  )
}

export default Welcome