import React from 'react'
import Service from '../components/service'

const first_service = 'Creer vos documents juridiques'
const snd_service = 'Proteger vos marques et services'
const trd_service = 'Traductions des documents'
const fth_service = 'Creer Votre entreprise'
const fith_service = 'Gerer votre entreprise'
const sth_service = 'Priopriete litteraire et artistique'

const description1 = 'Tous vos documents juridiques rédigés & garantis par des professionnels du droit.'
const description2 = 'Nous vous assurons la robustesse, la progressivité et la sécurité juridique de vos marques et services.'
const description3 = 'Traduisez en un clic, vos contrats, actes notariés, et autres documents juridiques.'
const description4 = 'Nous gérons toutes les démarches pour vous. pas besoin d&apos;être un grand programmeur pour créer son entreprise.'
const description5 = 'Vous avez djà créé votre entreprise? Gérer son entreprise peut se faire aujourd&apos;hui 100% en ligne.'
const description6 = 'Notre portail vous offre la possibilité de la gestion de la propriété intellectuelle et artistique de vos œuvres.'

const image1 = 'https://res.cloudinary.com/dedakscgk/image/upload/v1719703617/document-juridique_cppmyz.svg'
const image2 = 'https://res.cloudinary.com/dedakscgk/image/upload/v1719703632/secure-shield_bdzppt.svg'
const image3 = 'https://res.cloudinary.com/dedakscgk/image/upload/v1719703634/translation_hpgjyq.svg'
const image4 = 'https://res.cloudinary.com/dedakscgk/image/upload/v1719703633/skyline_agut0e.svg'
const image5 = 'https://res.cloudinary.com/dedakscgk/image/upload/v1719703630/office-building-red_s0l7wt.svg'
const image6 = 'https://res.cloudinary.com/dedakscgk/image/upload/v1719703614/brainstorm_1_rijy1l.svg'

const Services = () => {
  return (
    <div className='w-7/12 m-auto bg-white py-24'>
        <div>
            <div className='text-center text-black uppercase text-4xl font-bold py-2'>
                <h2>Nos service juridiques</h2>
            </div>
            <div className='text-black text-center text-base py-4'>
                <p>Parce que vos angagements est la chose la plus importante ! Créez des documents juridiques rapidement et profiter de vos précieux moment en famille</p>
            </div>
        </div>
        <div className='w-full px-6'>
            <div className='grid grid-cols-3 gap-2'>
                <div>
                    <Service title={first_service}
                        image={image1} 
                        description={description1} 
                    />
                </div>
                <div>
                    <Service title={snd_service}
                        image={image2} 
                        description={description2} 
                    />
                </div>
                <div>
                    <Service title={trd_service} 
                        image={image3}
                        description={description3} 
                    />
                </div>
            </div>
            <div className='grid grid-cols-3 gap-2 pt-12'>
                <div>
                    <Service title={fth_service}
                        image={image4} 
                        description={description4} 
                    />
                </div>
                <div>
                    <Service title={fith_service}
                        image={image5} 
                        description={description5} 
                    />
                </div>
                <div>
                    <Service title={sth_service} 
                        image={image6}
                        description={description6} 
                    />
                </div>
            </div>
        </div>
    </div>
  )
}

export default Services