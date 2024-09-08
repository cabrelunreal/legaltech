'use client'
import React, { useEffect } from 'react' // Added useEffect
import AOS from 'aos' // Import AOS
import 'aos/dist/aos.css' // Import AOS styles
import Heads from '../components/proprieteIntellectuelle/General/Heads'
import Service from '../components/service'
import Image from 'next/image'
import Link from 'next/link'

const first_service = 'Protéger vos marques et logos'
const snd_service = 'Enregistrer vos brevets'
const fth_service = 'Protéger vos créations'

const description1 = ''
const description2 = ''
const description3 = ''

const image1 = 'https://res.cloudinary.com/dedakscgk/image/upload/v1719703628/mental-illness_irmlp7.svg'
const image2 = 'https://res.cloudinary.com/dedakscgk/image/upload/v1719703614/badge_ec2xec.svg'
const image3 = 'https://res.cloudinary.com/dedakscgk/image/upload/v1719703632/secured_guod7a.svg'

const ProprieteIntellect = () => {
  useEffect(() => {
    AOS.init(); // Initialize AOS
  }, []);

  return (
    <div className='md:w-9/12 m-auto px-8 md:px-0'>
        <div className='text-center' data-aos="fade-up"> 
            <Heads title='PROPRIÉTÉ INTELLECTUELLE' description='Protéger juridiquement vos produits et services' structure='' />
        </div>

        <div className=' grid md:grid-cols-2 gap-4'>
            <div className='pt-12' data-aos="zoom-in"> 
                <Image
                    src='https://res.cloudinary.com/dedakscgk/image/upload/v1719703621/Groupe_156_eyxrb3.svg'
                    alt='propriete intellectuel'
                    width={1000}
                    height={1000}
                    className=''
                ></Image>
            </div>  

            <div className='grid md:grid-rows-3 gap-2 pt-2'>
                <div data-aos="fade-right"> 
                    <Link href="../pages/MarquesEtLogos">
                    <Service title={first_service}
                        image={image1} 
                        description={description1} 
                        custom='pt-8 text-2xl capitalize'
                        cardcustom='md:h-36'
                    />
                    </Link>
                </div>
                <div data-aos="fade-right"> 
                    <Link href="../pages/Brevet">
                    <Service title={snd_service}
                        image={image2} 
                        description={description2} 
                        custom='pt-8 text-2xl capitalize'
                        cardcustom='md:h-36'
                    />
                    </Link>
                </div>
                <div data-aos="fade-right">
                    <Link href="../pages/HomePropriete">
                    <Service title={fth_service}
                        image={image3} 
                        description={description3} 
                        custom='pt-8 text-2xl capitalize'
                        cardcustom='md:h-36'
                    />
                    </Link>
                </div>
            </div>
        </div>
    </div>
  )
}

export default ProprieteIntellect