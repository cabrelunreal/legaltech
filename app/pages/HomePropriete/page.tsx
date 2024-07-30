import BeforeHeader from '@/app/components/proprieteIntellectuelle/General/BeforeHeader'
import Header from '@/app/components/proprieteIntellectuelle/General/Header'
import Footer from '@/app/layouts/footer'
import Categories from '@/app/layouts/proprieteIntellectuelle/Home/Categories'
import Contact from '@/app/layouts/proprieteIntellectuelle/Home/Contact'
import Help from '@/app/layouts/proprieteIntellectuelle/Home/Help'
import Welcome from '@/app/layouts/proprieteIntellectuelle/Home/Welcome'
import React from 'react'

const HomePropriete = () => {
  return (
    <div className=''>
        <div>
            <BeforeHeader />
        </div>
        <div>
            <Header />
        </div>
        <div>
            <Welcome />
        </div>
        <div>
            <Categories />
        </div>
        <div>
            <Help />
        </div>
        <div>
            <Contact />
        </div>
        <div className='bg-green-500 text-white'>
            <Footer />
        </div>
    </div>
  )
}

export default HomePropriete