import Heads from '@/app/components/proprieteIntellectuelle/General/Heads'
import React from 'react'

const What = () => {
  return (
    <div className='py-16 bg-gray-50'>
        <div className='w-9/12 m-auto grid grid-cols-2 px-12 gap-4'>
            <div>
                <Heads
                    title='Qu&apos;est-ce que le droit d&apos;auteur ?'
                    description='Le droit d’auteur protège les œuvres littéraires et artistiques telles que les écrits, les œuvres musicales, les œuvres d’art (peinture, sculpture), etc.  
Toutes les législations nationales sur le droit d’auteur donnent une liste non exhaustive des œuvres protégées aussi bien dans leur forme première que dans leur forme dérivée, reprenant ainsi l’énumération de l’article 2 de la Convention de Berne sur la protection des œuvres littéraires et artistiques.'
                    structure='text-center px-12'
                    cust='text-justify'
                    headcust='text-green-700'
                />
            </div>
            <div>
                <Heads
                    title='Qu&apos;est-ce que le droit voisin ?'
                    description='Les droits voisins tirent leur origine d’une œuvre protégée par le droit d’auteur et s’apparentent à celui-ci à certains égards. Ils ont pour objet de protéger les intérêts juridiques de certaines personnes physiques ou morales qui contribuent à rendre les œuvres accessibles au public'
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