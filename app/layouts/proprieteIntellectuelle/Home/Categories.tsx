import Category from '@/app/components/proprieteIntellectuelle/General/Category';
import Heads from '@/app/components/proprieteIntellectuelle/General/Heads'
import React from 'react'
import Link from 'next/link';

const Categories = () => {
  const Title = 'PROPRIÉTÉ INTELLECTUELLE';
  const Description = 'Vous avez créé quelque chose de formidable : protégez-le avec notre service de propriété intellectuelle en ligne.';
  
  const catTitle1 = 'Le Brevet'
  const catImage1 = 'https://res.cloudinary.com/dedakscgk/image/upload/v1721945471/brevet_hmywpu.png'
  const catdescription1 = 'brevet'
  const catTitle2 = 'Marques et Logos'
  const catImage2 = 'https://res.cloudinary.com/dedakscgk/image/upload/v1721945471/marqueLogo_fu2tcu.png'
  const catdescription2 = 'logos'
  const catTitle3 = 'Dessins et Modèle Industriel'
  const catImage3 = 'https://res.cloudinary.com/dedakscgk/image/upload/v1721945471/conception_kblfif.png'
  const catdescription3 = 'industriel'
  const catTitle4 = 'La Recherche d’Antériorité'
  const catImage4 = 'https://res.cloudinary.com/dedakscgk/image/upload/v1721945471/anteriority_innyaz.png'
  const catdescription4 = 'recherche'
  const catTitle5 = 'Proprieté Litteraires et Artistiques'
  const catImage5 = 'https://res.cloudinary.com/dedakscgk/image/upload/v1721945471/droits-dauteur_fyk0w9.png'
  const catdescription5 = 'artistiques'
  const catTitle6 = 'Nom Commercial'
  const catImage6 = 'https://res.cloudinary.com/dedakscgk/image/upload/v1721945471/droits-voisin_eryxmi.png'
  const catdescription6 = 'commercial'

  return (
    <div className='w-9/12 m-auto py-14'>
        <div>
            <Heads title={Title} description={Description} structure='text-center py-4' />
        </div>
        <div className='grid grid-cols-3 gap-4'>
            <div>
                <Link href='../../../pages/Brevet'>
                    <Category title={catTitle1} description={catdescription1} image={catImage1} />
                </Link>
            </div>
            <div>
                <Link href='../../../pages/MarquesEtLogos'>
                    <Category title={catTitle2} description={catdescription2} image={catImage2} />
                </Link>
            </div>
            <div>
                <Link href='../../../pages/DessinEtModele'>
                    <Category title={catTitle3} description={catdescription3} image={catImage3} />
                </Link>
            </div>
            <div>
                <Link href='../../../pages/Recherche'>
                    <Category title={catTitle4} description={catdescription4} image={catImage4} />
                </Link>
            </div>
            <div>
                <Link href='../../../pages/Auteur'>
                    <Category title={catTitle5} description={catdescription5} image={catImage5} />
                </Link>
            </div>
            <div>
                <Link href='../../../pages/Commercial'>
                    <Category title={catTitle6} description={catdescription6} image={catImage6} />
                </Link>
            </div>
        </div>
    </div>
  )
}

export default Categories