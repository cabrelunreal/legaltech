import Category from '@/app/components/proprieteIntellectuelle/General/Category';
import Heads from '@/app/components/proprieteIntellectuelle/General/Heads';
import React from 'react';
import Link from 'next/link';

const Categories: React.FC = () => {
  const Title = 'Autres Services Similaires';
  const Description = "Découvrez d'autres services auxquels vous pouvez souscrire."; // Correction de l'orthographe et de la grammaire

  const categories = [
    { title: 'Marques et Logos', image: 'https://res.cloudinary.com/dedakscgk/image/upload/v1721945471/marqueLogo_fu2tcu.png', description: 'logos', link: '../../../pages/MarquesEtLogos' },
    { title: 'Dessins et Modèles Industriels', image: 'https://res.cloudinary.com/dedakscgk/image/upload/v1721945471/conception_kblfif.png', description: 'industriels', link: '../../../pages/DessinEtModele' }, // Accord du mot "industriels"
    { title: 'Propriété Littéraire et Artistique', image: 'https://res.cloudinary.com/dedakscgk/image/upload/v1721945471/droits-dauteur_fyk0w9.png', description: 'artistiques', link: '../../../pages/Auteur' }, // Correction de l'orthographe
  ];

  return (
    <div className='w-11/12 md:w-9/12 mx-auto py-14'>
      <div>
        <Heads title={Title} description={Description} structure='text-center py-4' />
      </div>
      <div className='grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 gap-4'> {/* Correction de "sm:grid-cols1" en "sm:grid-cols-1" */}
        {categories.map((category, index) => (
          <div key={index}>
            <Link href={category.link}>
              <Category title={category.title} description={category.description} image={category.image} />
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Categories;
