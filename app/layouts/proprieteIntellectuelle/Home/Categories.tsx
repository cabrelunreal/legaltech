import Category from '@/app/components/proprieteIntellectuelle/General/Category';
import Heads from '@/app/components/proprieteIntellectuelle/General/Heads';
import React from 'react';
import Link from 'next/link';

const Categories: React.FC = () => {
  const Title = 'PROPRIÉTÉ INTELLECTUELLE';
  const Description = 'Vous avez créé quelque chose de formidable : protégez-la avec notre service de propriété intellectuelle en ligne.';

  const categories = [
    { title: 'Le Brevet', image: 'https://res.cloudinary.com/dedakscgk/image/upload/v1721945471/brevet_hmywpu.png', description: 'brevet', link: '../../../pages/Brevet' },
    { title: 'Marques et Logos', image: 'https://res.cloudinary.com/dedakscgk/image/upload/v1721945471/marqueLogo_fu2tcu.png', description: 'logos', link: '../../../pages/MarquesEtLogos' },
    { title: 'Dessins et Modèles Industriels', image: 'https://res.cloudinary.com/dedakscgk/image/upload/v1721945471/conception_kblfif.png', description: 'industriel', link: '../../../pages/DessinEtModele' },
    { title: 'La Recherche d’Antériorité', image: 'https://res.cloudinary.com/dedakscgk/image/upload/v1721945471/anteriority_innyaz.png', description: 'recherche', link: '../../../pages/Recherche' },
    { title: 'Proprieté Litteraire et Artistique', image: 'https://res.cloudinary.com/dedakscgk/image/upload/v1721945471/droits-dauteur_fyk0w9.png', description: 'artistiques', link: '../../../pages/Auteur' },
    { title: 'Nom Commercial', image: 'https://res.cloudinary.com/dedakscgk/image/upload/v1721945471/droits-voisin_eryxmi.png', description: 'commercial', link: '../../../pages/Commercial' },
  ];

  return (
    <div className='w-11/12 md:w-9/12 mx-auto py-14'>
      <div>
        <Heads title={Title} description={Description} structure='text-center py-4' />
      </div>
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4'>
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
