import Contacts from '@/app/components/proprieteIntellectuelle/Formulaire/Contacts'
import Heads from '@/app/components/proprieteIntellectuelle/General/Heads'
import React from 'react'

const Formulaire = () => {
   const Title = 'COMMENCER VOTRE DEMANDE'
   const Description = 'Les champs avec astérix (*) sont obligatoires'
  return (
    <div>
        <div className='pt-8'>
            <div className='pb-12'>
                <Heads title={Title} description={Description} structure='text-center' />
            </div>
            <div className=' bg-gray-100'>
                <Contacts />
            </div>
        </div>
    </div>
  )
}

export default Formulaire