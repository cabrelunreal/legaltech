import Category from '@/app/components/proprieteIntellectuelle/General/Category';
import Heads from '@/app/components/proprieteIntellectuelle/General/Heads';
import React from 'react';
import Link from 'next/link';

const Categories: React.FC = () => {
  const Title = 'Autres Services Similaires';
  const Description = "Découvrez d'autres services auxquels vous pouvez souscrire."; // Correction de l'orthographe et de la grammaire

  const categories = [
    { title: 'Entreprise Individuelle', image: 'https://res.cloudinary.com/dedakscgk/image/upload/v1719703614/contract_2_r4qk1m.svg', description: 'logos', link: '../../pages/INdivEnterprise' },
    { title: 'Création des statuts', image: 'https://res.cloudinary.com/dedakscgk/image/upload/v1719703613/attestation_zbnud8.svg', description: 'industriels', link: '../../pages/step1Sarl' }, // Accord du mot "industriels"
  ];

  return (
    <div className='w-11/12 md:w-7/12 mx-auto py-14'>
      <div>
        <Heads title={Title} description={Description} structure='text-center py-4' />
      </div>
      <div className='grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 gap-4'> {/* Correction de "sm:grid-cols1" en "sm:grid-cols-1" */}
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
