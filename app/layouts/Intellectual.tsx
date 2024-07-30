import Image from 'next/image'
import React from 'react'
import Service from '../components/service'

const image1 = 'https://res.cloudinary.com/dedakscgk/image/upload/v1719703628/mental-illness_irmlp7.svg'
const image2 = 'https://res.cloudinary.com/dedakscgk/image/upload/v1719703632/secure-shield_bdzppt.svg'
const image3 = 'https://res.cloudinary.com/dedakscgk/image/upload/v1719703632/secured_guod7a.svg'

const title1 = 'Protéger vos marques et logos'
const title2 = 'Enregistrer vos brevets'
const title3 = 'Protéger vos noms commerciaux'

const description1 = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odit, ducimus.'
const description2 = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odit, ducimus.'
const description3 = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odit, ducimus.'

const Intellectual = () => {
  return (
    <div className='w-7/12 m-auto bg-white py-24'>
        <div>
            <div className='text-center text-black uppercase text-4xl font-bold py-2'>
                <h2>PROPRIÉTÉ INTELLECTUELLE</h2>
            </div>
            <div className='text-black text-center text-lg py-2'>
                <p>Protéger juridiquement vos produits</p>
            </div>
        </div>
        <div className='grid grid-cols-2 gap-4 w-full py-6'>
            <div>
                <Image
                  src='https://res.cloudinary.com/dedakscgk/image/upload/v1719703621/Groupe_156_eyxrb3.svg'
                  alt='intellectual property'
                  width={850}
                  height={850}
                  className=''
                >
                </Image>
            </div>
            <div className='grid grid-rows-3 gap-3 w-full px-6'>
                <div>
                    <Service image={image1} title={title1} description={description1}/>
                </div>
                <div>
                    <Service image={image2} title={title2} description={description2}/>
                </div>
                <div>
                    <Service image={image3} title={title3} description={description3}/>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Intellectual