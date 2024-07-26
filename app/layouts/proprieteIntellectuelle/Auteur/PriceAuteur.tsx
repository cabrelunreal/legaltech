import Button from '@/app/components/proprieteIntellectuelle/General/Button'
import Heads from '@/app/components/proprieteIntellectuelle/General/Heads'
import React from 'react'

const Price = () => {
  return (
    <div className='py-6 bg-gray-50'>
        <div className='w-3/12 px-42 m-auto'>
            <div className='relative text-center border-4 h-[420px] px-6 border-green-700 rounded-md'>
                <Heads title='Frais officiels et professionnels à prévoir' headcust='text-lg' structure='' />
                <Heads title='XXX $ | XXX FCFA ' headcust='text-xl text-green-700 font-bold' cust='text-2lg' structure='' />
                <Heads title='Vous obtenez:' headcust='text-lg' cust='text-2lg' structure='' />
                <Heads title='Consultation juridique '  headcust='text-lg' cust='text-2lg'
                description='Un spécialiste fournira une consultation par téléphone ou par messagerie.' structure='' />
                <Heads title='Préparation'  headcust='text-lg' cust='text-2lg'
                description=' ⁠Préparation de la demande de protection de votre oeuvre.' structure='' />
                <Button title='Commencer' structure='capitalize px-6 py-3 absolute bottom-0 mb-4 transform -translate-x-1/2 bg-green-700 w-64 rounded-sm text-white font-bold text-xl' />
            </div>
        </div>
    </div>
  )
}

export default Price