import Heads from '@/app/components/proprieteIntellectuelle/General/Heads'
import React from 'react'
import Contacts from '@/app/components/proprieteIntellectuelle/Home/Contact'

const Contact = () => {
   const Title = 'CONTACTEZ NOS EQUIPES'
   const Description = 'Obtenez les bons conseils avec un avocat à vos côtés. Pour une collaboration plus grande et plus fluide avec vous'
  return (
    <div>
        <div className='pt-8'>
            <div>
                <Heads title={Title} description={Description} structure='text-center' />
            </div>
            <div className=' bg-gray-100'>
                <Contacts />
            </div>
        </div>
    </div>
  )
}

export default Contact