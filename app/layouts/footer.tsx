import React from 'react'
import FootComponent from '../components/FootComponent'
import Button from '../components/Button'
import Image from 'next/image'

const Footer = () => {
  return (
    <div  className="relative w-full h-[500px]">
        <Image
            src='https://res.cloudinary.com/dedakscgk/image/upload/v1719703633/high-angle-shot-of-gavel-and-scale-on-wooden-surface_busgu3.png'
            alt="Sample Image"
            layout="fill"
            objectFit="cover"
            className="w-full h-full"
        />
        <div className='w-full absolute inset-0 bg-green-700 bg-opacity-90'>
            <div className=' w-9/12 py-24 m-auto flex justify-between'>
                <div className='w-4/12 mx-8'>
                    <h2>
                        <Image
                            src='https://res.cloudinary.com/dedakscgk/image/upload/v1719703627/Logo-legaltech_kb5pm6.svg'
                            alt='LOGO'
                            height={200}
                            width={100}
                            className='mb-4'
                        ></Image>
                    </h2>
                    <p>Parce que vos angagements est la chose la plus importante ! Créez des documents juridiques rapidement et profiter de vos précieux moment en famille</p>
                </div>
                <div className=' mx-8'>
                    <FootComponent title='Contacts' link1='+237 672 442 800' link2='Contact@legaltech.com' link3='Yaoundé quartier' link4='bastos non loin des' link5='résidences Mossi'  />
                </div>
                <div className=' mx-8'>
                    <FootComponent title='Menu' link1='Accueil' link2='Documents' link3='Nos Experts' link4='Traduction' link5='Qui sommes nous'  />
                </div>
                <div className='w-4/12 mx-8'>
                    <h2 className='text-semibold text-xl underline'>Newsletter</h2>
                    <p className='py-2'>Souscrivez a notre newsletter pour profiter pleinement des infos et activites concernant la plateforme.</p>
                    <input type="email" placeholder='Entrer votre email...' className='w-full focus:outline-none rounded-sm text-black my-2 border py-3 px-2' />
                    <Button title='S&apos;abonner' className='bg-green-900 text-white text-black font-semibold py-3 rounded-md px-6' />
                </div>
            </div>
        </div>
    </div>
  )
}

export default Footer