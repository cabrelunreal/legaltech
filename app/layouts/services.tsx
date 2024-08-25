import React from 'react'
import Service from '../components/service'
import Link from 'next/link'

const first_service = "Créer vos documents d'entreprise";
const snd_service = 'Protection de la propriété intellectuelle'
const fth_service = 'Traduction des documents'
const fith_service = 'Contactez nos experts'

const description1 = 'Tous vos documents juridiques rédigés & garantis par des professionnels du droit.'
const description2 = 'Nous vous assurons la robustesse, la progressivité et la sécurité juridique de vos brevets, marques et autres services.'
const description4 = 'Traduisez en un clic, vos contrats, actes notariés, et autres documents juridiques.'
const description5 = 'Nos spécialistes sont à votre disposition pour répondre à toutes vos questions et vous guider vers les solutions adaptées à vos besoins.'

const image1 = 'https://res.cloudinary.com/dedakscgk/image/upload/v1719703617/document-juridique_cppmyz.svg'
const image2 = 'https://res.cloudinary.com/dedakscgk/image/upload/v1719703632/secure-shield_bdzppt.svg'
const image4 = 'https://res.cloudinary.com/dedakscgk/image/upload/v1719703634/translation_hpgjyq.svg'
const image5 = 'https://res.cloudinary.com/dedakscgk/image/upload/v1723207870/operateur_dkeoxc.svg'

const Services = () => {
  return (
    <div className='w-full md:w-9/12 m-auto pt-8 pb-2'>
        <div className='px-8 md:px-32'>
            <div className='text-center text-black uppercase text-lg md:text-4xl font-semibold py-2'>
                <h2>Nos services juridiques</h2>
            </div>
        </div>
        <div className='w-full pt-6 px-6 grid md:grid-rows-2 md:gap-8'>
            <div className='grid md:grid-cols-2 gap-2'>
                <div>
                    <Link href="../pages/createDocuments">
                    <Service title={first_service}
                        image={image1} 
                        description={description1} 
                    />
                    </Link>
                </div>
                <div>
                    <Link href="../pages/HomePropriete">
                    <Service title={snd_service}
                        image={image2} 
                        description={description2} 
                    />
                    </Link>
                </div>
            </div>
            <div className='grid md:grid-cols-2 gap-2 pt-2'>
                <div>
                    <Link href="../pages/DocumentTranslate">
                    <Service title={fth_service}
                        image={image4} 
                        description={description4} 
                    />
                    </Link>
                </div>
                <div>
                    <Link href="../pages/contactTeams">
                    <Service title={fith_service}
                        image={image5} 
                        description={description5} 
                    />
                    </Link>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Services