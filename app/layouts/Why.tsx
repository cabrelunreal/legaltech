import React from 'react'
import Whys from '../components/Whys'


const title1 = 'Simple'
const title2 = 'Rapide'
const title3 = 'Chaleureux'
const title4 = 'Economique'

const image1 = 'https://res.cloudinary.com/dedakscgk/image/upload/v1719703612/click_qv6jxk.svg'
const image2 = 'https://res.cloudinary.com/dedakscgk/image/upload/v1719703619/fast-time_qirkgv.svg'
const image3 = 'https://res.cloudinary.com/dedakscgk/image/upload/v1719703634/sun_sqeydq.svg'
const image4 = 'https://res.cloudinary.com/dedakscgk/image/upload/v1719703630/piggy-bank_1_kk4ynp.svg'

const description1 = 'Espace numérique innovant et facile à utiliser'
const description2 = 'Gagnez du temps dans la rédaction des documents.'
const description3 = 'Des experts disponibles toujours prèts à vous aider et accompagner dans vos besoins'
const description4 = 'Des services à coûts réduits pour des utilisateurs résidents partout dans le monde.'

interface whysprops{
    title: string;
    description?: string;
}

const Why:React.FC<whysprops> = ({title, description}) => {
  return (
    <div className='w-9/12 m-auto pt-8'>
        <div className='pb-4'>
            <div className='text-center uppercase text-xl md:text-4xl font-semibold'>
                <h2>{title}</h2>
            </div>
            <div className='text-black text-center md:text-lg py-2'>
                <p>{description}</p>
            </div>
        </div>
        <div className='grid md:grid-cols-4 gap-2 px-9'>
            <div>
                <Whys  title={title1} description={description1} image={image1}/>
            </div>
            <div>
                <Whys  title={title2} description={description2} image={image2}/>
            </div>
            <div>
                <Whys  title={title3} description={description3} image={image3}/>
            </div>
            <div>
                <Whys  title={title4} description={description4} image={image4}/>
            </div>
        </div>
    </div>
  )
}

export default Why