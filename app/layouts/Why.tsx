'use client'
import React, { useEffect } from 'react' // Ajout de useEffect pour AOS
import Whys from '../components/Whys'
import AOS from 'aos'; // Importer AOS
import 'aos/dist/aos.css'; // Importer les styles AOS

const title1 = 'Simple'
const title2 = 'Rapide'
const title3 = 'Chaleureux'
const title4 = 'Économique' // Corrigé

const image1 = 'https://res.cloudinary.com/dedakscgk/image/upload/v1719703612/click_qv6jxk.svg'
const image2 = 'https://res.cloudinary.com/dedakscgk/image/upload/v1719703619/fast-time_qirkgv.svg'
const image3 = 'https://res.cloudinary.com/dedakscgk/image/upload/v1719703634/sun_sqeydq.svg'
const image4 = 'https://res.cloudinary.com/dedakscgk/image/upload/v1719703630/piggy-bank_1_kk4ynp.svg'

const description1 = 'Espace numérique innovant et facile à utiliser'
const description2 = 'Gagnez du temps dans la rédaction des documents.'
const description3 = 'Des experts disponibles, toujours prêts à vous aider et à vous accompagner dans vos besoins.' // Corrigé
const description4 = 'Des services à coûts réduits pour des utilisateurs résidant partout dans le monde.' // Corrigé

interface WhysProps { // Corrigé la casse pour la convention TypeScript
    title: string;
    description?: string;
}

const Why: React.FC<WhysProps> = ({ title, description }) => {
    useEffect(() => {
        AOS.init(); // Initialiser AOS
    }, []);

    return (
        <div className='w-full md:w-9/12 m-auto pt-8'>
            <div className='pb-4' data-aos="fade-up"> {/* Ajout de l'animation AOS */}
                <div className='text-center uppercase text-xl md:text-4xl font-semibold'>
                    <h2>{title}</h2>
                </div>
                <div className='text-black text-center md:text-lg py-2'>
                    <p>{description}</p>
                </div>
            </div>
            <div className='grid md:grid-cols-4 grid-cols-2 gap-2 px-4 md:px-9'>
                <div data-aos="fade-up"> {/* Ajout de l'animation AOS */}
                    <Whys title={title1} description={description1} image={image1} />
                </div>
                <div data-aos="fade-up"> {/* Ajout de l'animation AOS */}
                    <Whys title={title2} description={description2} image={image2} />
                </div>
                <div data-aos="fade-up"> {/* Ajout de l'animation AOS */}
                    <Whys title={title3} description={description3} image={image3} />
                </div>
                <div data-aos="fade-up"> {/* Ajout de l'animation AOS */}
                    <Whys title={title4} description={description4} image={image4} />
                </div>
            </div>
        </div>
    )
}

export default Why
