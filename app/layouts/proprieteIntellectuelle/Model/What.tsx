import Heads from '@/app/components/proprieteIntellectuelle/General/Heads'
import React from 'react'

const What = () => {
  return (
    <div className='py-16 bg-gray-50'>
        <div className='w-9/12 m-auto grid grid-cols-2 px-12 gap-4'>
            <div>
                <Heads
                    title='Qu&apos;est-ce que le  dessin et modèle industriel ?'
                    description='Les créations à caractère ornemental diffèrent des créations à caractère technique en ce que leur objet et leur finalité sont esthétiques. Ici, c’est l’aspect extérieur d’un produit qui est pris en compte et non ses fonctionnalités. 
Du point de vue de la propriété intellectuelle
Recherche d&apos;Antériorité'
                    structure='text-center px-12'
                    cust='text-justify'
                    headcust='text-green-700'
                />
            </div>
            <div>
                <Heads
                    title='Qu&apos;est-ce que l&apos;OAPI ?'
                    description='L&apos;Organisation africaine de la propriété intellectuelle (OAPI) est un organisme intergouvernemental regroupant dix-sept États africains, chargé de protéger de manière uniforme les droits de propriété intellectuelle sur les territoires de ces États, notamment par la délivrance de titres de protection des droits de propriété industrielle en tant qu&apos;office des brevets.'
                    structure='text-center px-12'
                    cust='text-justify'
                    headcust='text-green-700'
                />
            </div>
        </div>
    </div>
  )
}

export default What