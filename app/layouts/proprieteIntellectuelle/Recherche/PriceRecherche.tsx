import Button from '@/app/components/proprieteIntellectuelle/General/Button'
import Heads from '@/app/components/proprieteIntellectuelle/General/Heads'
import React from 'react'

const PriceRecherche = () => {
  return (
    <div className='py-16 w-full bg-gray-50'>
        <div className='w-3/12 px-42 m-auto'>
            <div className='m-auto text-center border-4 w-11/12 px-6 border-green-700 pt-8 rounded-md'>
                <Heads title='Option' headcust='text-xl text-green-700' cust='' structure=''/>
                <Heads title='Recherche d’antériorité' headcust='text-lg' cust='hidden' structure='' />
                <Heads title='Frais officiels à partir de ' headcust='text-lg' cust='hidden' structure='' />
                <Heads title='XXX $ | 95.000 FCFA ' headcust='text-xl text-green-700 font-bold' cust='text-2lg' structure='' />
                <p className='text-lg pb-24'>+ frais professionnels</p>
            </div>
        </div>

    </div>
  )
}

export default PriceRecherche