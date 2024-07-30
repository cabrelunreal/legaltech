import Heads from '@/app/components/proprieteIntellectuelle/General/Heads';
import React from 'react';

const What = () => {
  return (
    <div className='py-16 bg-gray-50'>
      <div className='w-full max-w-4xl px-4 sm:px-6 md:px-8 lg:px-12 mx-auto'>
        <div className='grid grid-cols-1 sm:grid-cols-2 gap-8'>
          <div>
            <Heads
              title='Qu&apos;est-ce que le droit d&apos;auteur ?'
              description='Le droit d’auteur protège les œuvres littéraires et artistiques telles que les écrits, les œuvres musicales, les œuvres d’art (peinture, sculpture), etc.  
Toutes les législations nationales sur le droit d’auteur donnent une liste non exhaustive des œuvres protégées aussi bien dans leur forme première que dans leur forme dérivée, reprenant ainsi l’énumération de l’article 2 de la Convention de Berne sur la protection des œuvres littéraires et artistiques.'
              structure='text-center px-4 sm:px-8'
              cust='text-justify'
              headcust='text-green-700 text-lg sm:text-xl'
            />
          </div>
          <div>
            <Heads
              title='Qu&apos;est-ce que le droit voisin ?'
              description='Les droits voisins tirent leur origine d’une œuvre protégée par le droit d’auteur et s’apparentent à celui-ci à certains égards. Ils ont pour objet de protéger les intérêts juridiques de certaines personnes physiques ou morales qui contribuent à rendre les œuvres accessibles au public'
              structure='text-center px-4 sm:px-8'
              cust='text-justify'
              headcust='text-green-700 text-lg sm:text-xl'
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default What;
