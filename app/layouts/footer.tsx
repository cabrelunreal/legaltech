'use client'
import React, { useState } from 'react'
import FootComponent from '../components/FootComponent'
import Button from '../components/Button'
import Image from 'next/image'
import { ChevronDownIcon, ChevronUpIcon } from '@heroicons/react/24/outline'

const Footer = () => {
  // State for each dropdown
  const [isContactsOpen, setIsContactsOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isNewsletterOpen, setIsNewsletterOpen] = useState(false);
  const [isInfoOpen, setIsInfoOpen] = useState(false);

  return (
    <div className="relative w-full h-[550px] text-white">
        <Image
            src='https://res.cloudinary.com/dedakscgk/image/upload/v1719703633/high-angle-shot-of-gavel-and-scale-on-wooden-surface_busgu3.png'
            alt="Sample Image"
            layout="fill"
            objectFit="cover"
            className="w-full h-full"
        />
        <div className='w-full absolute inset-0 bg-green-700 bg-opacity-90'>
            <div className='w-9/12 py-14 m-auto grid grid-cols-1 lg:grid-cols-2 lg:flex-row lg:flex lg:justify-between'>
                
                {/* Mobile Dropdowns */}
                <div className='lg:hidden w-full'>
                    <button 
                        onClick={() => setIsInfoOpen(prev => !prev)} 
                        className='w-full text-white bg-green-800 px-4 py-2 rounded flex items-center justify-between mb-2'
                    >
                        <span>Info</span>
                        {isInfoOpen ? <ChevronUpIcon className='w-6 h-6' /> : <ChevronDownIcon className='w-6 h-6' />}
                    </button>
                    {isInfoOpen && (
                        <div className='bg-green-900 p-4 rounded mb-4'>
                            <div className='flex flex-col items-center'>
                                <Image
                                    src='https://res.cloudinary.com/dedakscgk/image/upload/v1719703627/Logo-legaltech_kb5pm6.svg'
                                    alt='LOGO'
                                    height={100}
                                    width={50}
                                    className='mb-4'
                                />
                                <p className='text-center'>Parce que vos angagements est la chose la plus importante ! Créez des documents juridiques rapidement et profiter de vos précieux moment en famille</p>
                            </div>
                        </div>
                    )}

                    <button 
                        onClick={() => setIsContactsOpen(prev => !prev)} 
                        className='w-full text-white bg-green-800 px-4 py-2 rounded flex items-center justify-between mb-2'
                    >
                        <span>Contacts</span>
                        {isContactsOpen ? <ChevronUpIcon className='w-6 h-6' /> : <ChevronDownIcon className='w-6 h-6' />}
                    </button>
                    {isContactsOpen && (
                        <div className='bg-green-900 p-4 rounded mb-4'>
                            <FootComponent 
                                title='Contacts' 
                                link1='+237 672 442 800' 
                                link2='Contact@legaltech.com' 
                                link3='Yaoundé quartier' 
                                link4='bastos non loin des' 
                                link5='résidences Mossi' 
                            />
                        </div>
                    )}

                    <button 
                        onClick={() => setIsMenuOpen(prev => !prev)} 
                        className='w-full text-white bg-green-800 px-4 py-2 rounded flex items-center justify-between mb-2'
                    >
                        <span>Menu</span>
                        {isMenuOpen ? <ChevronUpIcon className='w-6 h-6' /> : <ChevronDownIcon className='w-6 h-6' />}
                    </button>
                    {isMenuOpen && (
                        <div className='bg-green-900 p-4 rounded mb-4'>
                            <FootComponent 
                                title='Menu' 
                                link1='Accueil' 
                                link2='Documents' 
                                link3='Nos Experts' 
                                link4='Traduction' 
                                link5='Qui sommes nous' 
                            />
                        </div>
                    )}
                    
                    <button 
                        onClick={() => setIsNewsletterOpen(prev => !prev)} 
                        className='w-full text-white bg-green-800 px-4 py-2 rounded flex items-center justify-between mb-2'
                    >
                        <span>Newsletter</span>
                        {isNewsletterOpen ? <ChevronUpIcon className='w-6 h-6' /> : <ChevronDownIcon className='w-6 h-6' />}
                    </button>
                    {isNewsletterOpen && (
                        <div className='bg-green-900 p-4 rounded'>
                            <h2 className='text-semibold text-xl underline mb-2'>Newsletter</h2>
                            <p className='py-2'>Souscrivez a notre newsletter pour profiter pleinement des infos et activites concernant la plateforme.</p>
                            <input 
                                type="email" 
                                placeholder='Entrer votre email...' 
                                className='w-full focus:outline-none rounded-sm text-black my-2 border py-3 px-2' 
                            />
                            <Button 
                                title='S&apos;abonner' 
                                className='bg-green-900 text-white text-black font-semibold py-3 rounded-md px-6' 
                            />
                        </div>
                    )}
                </div>

                {/* Desktop View */}
                <div className='hidden lg:flex lg:mx-8'>
                    <div className='w-full'>
                        <Image
                            src='https://res.cloudinary.com/dedakscgk/image/upload/v1719703627/Logo-legaltech_kb5pm6.svg'
                            alt='LOGO'
                            height={100}
                            width={50}
                            className='mb-4'
                        />
                        <p>Parce que vos angagements est la chose la plus importante ! Créez des documents juridiques rapidement et profiter de vos précieux moment en famille</p>
                    </div>
                </div>
                <div className='hidden lg:flex lg:mx-8'>
                    <FootComponent 
                        title='Contacts' 
                        link1='+237 672 442 800' 
                        link2='Contact@legaltech.com' 
                        link3='Yaoundé quartier' 
                        link4='bastos non loin des' 
                        link5='résidences Mossi' 
                    />
                </div>
                <div className='hidden lg:flex lg:mx-2'>
                    <FootComponent 
                        title='Menu' 
                        link1='Accueil' 
                        link2='Documents' 
                        link3='Nos Experts' 
                        link4='Traduction' 
                        link5='Qui sommes nous' 
                    />
                </div>
                <div className='hidden lg:flex lg:w-4/12 lg:mx-8'>
                    <h2 className='text-semibold text-xl underline'>Newsletter</h2>
                    <p className='py-2'>Souscrivez a notre newsletter pour profiter pleinement des infos et activites concernant la plateforme.</p>
                    <input 
                        type="email" 
                        placeholder='Entrer votre email...' 
                        className='w-full focus:outline-none rounded-sm text-black my-2 border py-3 px-2' 
                    />
                    <Button 
                        title='S&apos;abonner' 
                        className='bg-green-900 text-white text-black font-semibold py-3 rounded-md px-6' 
                    />
                </div>
            </div>

            <div className='border-t-2 text-sm py-8 text-center md:text-start md:w-9/12 m-auto'>
                <p>&copy;LegalTech, All rights reserved.</p>
            </div>
        </div>
    </div>
  )
}

export default Footer
