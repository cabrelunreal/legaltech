'use client'

import BeforeHeader from '@/app/components/proprieteIntellectuelle/General/BeforeHeader'
import Header from '@/app/components/proprieteIntellectuelle/General/Header'
import Heads from '@/app/components/proprieteIntellectuelle/General/Heads'
import QuickCall from '@/app/components/proprieteIntellectuelle/General/QuickCall'
import WelcomeContainer from '@/app/components/proprieteIntellectuelle/General/Welcome'
import Footer from '@/app/layouts/footer'
import How from '@/app/layouts/proprieteIntellectuelle/Recherche/How'
import PriceRecherche from '@/app/layouts/proprieteIntellectuelle/Recherche/PriceRecherche'
import What from '@/app/layouts/proprieteIntellectuelle/Recherche/What'
import React from 'react'
import { useRouter } from 'next/navigation'

const Page = () => {
  
 const router = useRouter();
  
    const onclickEnterprise = (path: string) => {
        router.push(path);
    };

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
                beforeT='La Recherche d’Antériorité'
                custom='justify-start md:pl-56 md:pr-96'
                title='Assure à son utilisateur la disponibilité de l&apos;actif qu&apos;il tend à protéger'
                description=''
                buttonTitle='Commencer'
                onclick={() => onclickEnterprise('../../pages/Formulaires')}
                customButton='bg-green-700'
                image='https://res.cloudinary.com/dedakscgk/image/upload/v1721958920/woman-8499928_1280_1_3_vpinqe.png'
            />
        </div>

        <div>
            <How />
        </div>

        <div>
            <What />
        </div>

        <div>
            <Heads title='En 48h vous obtenez un résultat avec notre processus simple' structure='font-bold text-center py-8' headcust='text-2xl' />
        </div>

        <div>
            <PriceRecherche />
        </div>

        <div>
            <Heads title='Des questions?' structure='font-bold text-center py-8' headcust='text-2xl' />
        </div>

        <div>
            <QuickCall />
        </div>

        <div className='text-white'>
            <Footer />
        </div>
    </div>
  )
}

export default Page