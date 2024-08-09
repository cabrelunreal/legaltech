'use client'
import React, { useState } from 'react'
import FootComponent from '../components/FootComponent'
import Button from '../components/Button'
import Image from 'next/image'
import ChevronDownIcon from '@heroicons/react/24/outline/ChevronDownIcon'
import ChevronUpIcon from '@heroicons/react/24/outline/ChevronUpIcon'
import Link from 'next/link'
import '@fortawesome/fontawesome-free/css/all.min.css';


const Footer = () => {
  // State for each dropdown
  const [isContactsOpen, setIsContactsOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isNewsletterOpen, setIsNewsletterOpen] = useState(false);
  const [isInfoOpen, setIsInfoOpen] = useState(false);

  return (
    <div className="relative w-full h-[640px] text-white">
        <Image
            src='https://res.cloudinary.com/dedakscgk/image/upload/v1719703633/high-angle-shot-of-gavel-and-scale-on-wooden-surface_busgu3.png'
            alt="Sample Image"
            layout="fill"
            objectFit="cover"
            className="w-full h-full"
        />
        <div className='w-full absolute inset-0 bg-green-700 bg-opacity-90'>
            <div className='py-6 pt-24 px-14 md:px-1 md:w-5/12 m-auto'>
                <h2 className='text-center text-2lg md:text-xl capitalize py-4'>Souscrivez a notre newsletter pour ne rien manquer.</h2>
                <div className='border-b rounded flex'>
                    <input type="email" placeholder='exemple@gmail.com' className='w-full bg-transparent text-lg px-3 focus:outline-none py-2' />
                    <button className='px-3'><i className="fa-solid fa-paper-plane"></i></button>
                </div>
            </div>

            <div className='md:w-9/12 py-8 px-12 m-auto grid md:grid-cols-4 gap-4'>
                {/* Mobile Dropdowns */}
                <div className='md:hidden w-full'>
                    <button 
                        onClick={() => setIsInfoOpen(prev => !prev)} 
                        className='w-full text-white border-b bg-none px-4 py-2 rounded flex items-center justify-between mb-2'
                    >
                        <span>Legaltech</span>
                        {isInfoOpen ? <ChevronUpIcon className='w-6 h-6' /> : <ChevronDownIcon className='w-6 h-6' />}
                    </button>
                    {isInfoOpen && (
                        <div className='p-3 md:p-4 rounded md:mb-4'>
                            <div className='flex flex-col items-start'>
                                <Image
                                    src='https://res.cloudinary.com/dedakscgk/image/upload/v1719703627/Logo-legaltech_kb5pm6.svg'
                                    alt='LOGO'
                                    height={100}
                                    width={50}
                                    className='mb-4'
                                />
                                <p className='text-start text-sm md:text-lg'>Parce que vos angagements est la chose la plus importante ! Créez des documents juridiques rapidement et profiter de vos précieux moment en famille</p>
                            </div>
                        </div>
                    )}

                    <button 
                        onClick={() => setIsContactsOpen(prev => !prev)} 
                        className='w-full text-white border-b px-4 py-2 rounded flex items-center justify-between md:mb-2'
                    >
                        <span>Contacts</span>
                        {isContactsOpen ? <ChevronUpIcon className='w-6 h-6' /> : <ChevronDownIcon className='w-6 h-6' />}
                    </button>
                    {isContactsOpen && (
                        <div className='md:p-4 rounded md:mb-4'>
                            <FootComponent 
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
                        className='w-full text-white border-b px-4 py-2 rounded flex items-center justify-between md:mb-2'
                    >
                        <span>Menu</span>
                        {isMenuOpen ? <ChevronUpIcon className='w-6 h-6' /> : <ChevronDownIcon className='w-6 h-6' />}
                    </button>
                    {isMenuOpen && (
                        <div className='md:p-4 rounded md:mb-4'>
                            <FootComponent 
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
                        className='w-full text-white border-b px-4 py-2 rounded flex items-center justify-between mb-2'
                    >
                        <span>Nos Reseaux</span>
                        {isNewsletterOpen ? <ChevronUpIcon className='w-6 h-6' /> : <ChevronDownIcon className='w-6 h-6' />}
                    </button>
                    {isNewsletterOpen && (
                        <div className='md:p-4 rounded px-4'>
                            <ul className='flex'>
                                <li className='px-2'>
                                    <Link href=''><i className="fab fa-facebook"></i></Link>
                                </li>
                                <li className='px-2'>
                                    <Link href=''><i className="fab fa-twitter"></i></Link>
                                </li>
                                <li className='px-2'>
                                    <Link href=''><i className="fab fa-instagram"></i></Link>
                                </li>
                                <li className='px-2'>
                                    <Link href=''><i className="fab fa-linkedin"></i></Link>
                                </li>
                            </ul>
                        </div>
                    )}
                </div>

                {/* Desktop View */}
                <div className='hidden lg:flex md:mx-2 md:py-6'>
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
                <div className='hidden lg:flex lg:mx-2'>
                    <FootComponent 
                        title='Contacts' 
                        link1='+237 672 442 800' 
                        link2='Contact@legaltech.com' 
                        link3='Yaoundé quartier' 
                        link4='bastos non loin des' 
                        link5='résidences Mossi' 
                    />
                </div>
                <div className='hidden md:flex lg:mx-2'>
                    <FootComponent 
                        title='Navigation' 
                        link1='Accueil' 
                        link2='Documents' 
                        link3='Nos Experts' 
                        link4='Traduction' 
                        link5='Qui sommes nous' 
                    />
                </div>
                <div className='hidden md:flex md:flex-col py-4'>
                    <h2 className='text-lg md:text-xl font-semibold md:mb-1'>Nos Reseaux</h2>
                    <div className='md:p-4 rounded px-4'>
                            <ul className='flex'>
                                <li className='px-2'>
                                    <Link href=''><i className="fab fa-facebook text-2xl"></i></Link>
                                </li>
                                <li className='px-2'>
                                    <Link href=''><i className="fab fa-twitter text-2xl"></i></Link>
                                </li>
                                <li className='px-2'>
                                    <Link href=''><i className="fab fa-instagram text-2xl"></i></Link>
                                </li>
                                <li className='px-2'>
                                    <Link href=''><i className="fab fa-linkedin text-2xl"></i></Link>
                                </li>
                            </ul>
                        </div>
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
