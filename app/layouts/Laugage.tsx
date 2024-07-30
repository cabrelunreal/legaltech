import React from 'react'
import Laugages from '../components/Laugages'

const image = 'https://res.cloudinary.com/dedakscgk/image/upload/v1719703634/user_eherio.svg'
const description = 'Visiteurs/jour'
const title = '+15 000'

const image1 = 'https://res.cloudinary.com/dedakscgk/image/upload/v1719703632/rating_ylbwat.svg'
const description1 = 'Experts Juridiques'
const title1 = '+250'

const image2 = 'https://res.cloudinary.com/dedakscgk/image/upload/v1719703633/suitcase_a52tzl.svg'
const description2 = 'Travaux réalisés'
const title2 = '+12M'

const image3 = 'https://res.cloudinary.com/dedakscgk/image/upload/v1719703622/handshake_zmnlxy.svg'
const description3 = 'Travaux réalisés'
const title3 = '+3150'
const Laugage = () => {
  return (
    <div className='w-8/12 m-auto flex justify-around text-white py-16 my-32'>
        <div>
            <Laugages image={image} description={description} title={title} />
        </div>
        <div>
            <Laugages image={image1} description={description1} title={title1} />
        </div>
        <div>
            <Laugages image={image2} description={description2} title={title2} />
        </div>
        <div>
            <Laugages image={image3} description={description3} title={title3} />
        </div>
    </div>
  )
}

export default Laugage