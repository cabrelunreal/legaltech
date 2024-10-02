'use client'
import React, { useState } from 'react'
import { motion } from 'framer-motion'; // Import motion from framer-motion
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
    <div className="relative w-full text-white"> 
        <div className="absolute inset-0">
            <Image
                src='https://res.cloudinary.com/dedakscgk/image/upload/v1719703633/high-angle-shot-of-gavel-and-scale-on-wooden-surface_busgu3.png'
                alt="Sample Image"
                layout="fill"
                objectFit="cover"
                className="w-full h-full opacity-20" // Adjusted opacity for visibility
            />
            <div className='w-full h-full bg-green-700 bg-opacity-90' /> {/* Green background with opacity */}
        </div>
        <div className='relative z-10'> {/* Ensure content is above the background */}
            <div className='py-4 pt-24 px-4 md:px-1 md:w-5/12 m-auto'>
                <h2 className='text-center text-2lg md:text-xl capitalize py-4'>Souscrivez à notre newsletter pour ne rien manquer.</h2>
                <div className='border-b rounded flex'>
                    <input type="email" placeholder='exemple@gmail.com' className='w-full bg-transparent text-lg px-3 focus:outline-none py-2' />
                    <button className='px-3'><i className="fa-solid fa-paper-plane"></i></button>
                </div>
            </div>

            <div className='md:w-9/12 py-4 px-4 md:px-12 m-auto grid md:grid-cols-4 gap-4'>
                {/* Mobile Dropdowns */}
                <div className='md:hidden w-full'>
                    <motion.button // Wrap button with motion.button
                        onClick={() => setIsInfoOpen(prev => !prev)} 
                        className='w-full text-white border-b bg-none px-4 py-2 rounded flex items-center justify-between mb-2'
                        initial={{ opacity: 0 }} // Initial state
                        animate={{ opacity: 1 }} // Animate to this state
                        transition={{ duration: 0.5 }} // Transition duration
                    >
                        <span>Legaltech</span>
                        {isInfoOpen ? <ChevronUpIcon className='w-6 h-6' /> : <ChevronDownIcon className='w-6 h-6' />}
                    </motion.button>
                    {isInfoOpen && (
                        <motion.div // Wrap div with motion.div
                            className='p-3 md:p-4 rounded md:mb-4'
                            initial={{ height: 0 }} // Initial height
                            animate={{ height: 'auto' }} // Animate to auto height
                            transition={{ duration: 0.5 }} // Transition duration
                        >
                            <div className='flex flex-col items-start'>
                                <Image
                                    src='https://res.cloudinary.com/dedakscgk/image/upload/v1719703627/Logo-legaltech_kb5pm6.svg'
                                    alt='LOGO'
                                    height={100}
                                    width={50}
                                    className='mb-4'
                                />
                                <p className='text-start text-sm md:text-lg'>Parce que votre engagement est la chose la plus <span className='text-yellow-500'><Link href="https://dashboardtj.vercel.app/">importante!</Link></span></p>
                            </div>
                        </motion.div>
                    )}

                    <motion.button // Wrap button with motion.button
                        onClick={() => setIsContactsOpen(prev => !prev)} 
                        className='w-full text-white border-b px-4 py-2 rounded flex items-center justify-between md:mb-2'
                        initial={{ opacity: 0 }} // Initial state
                        animate={{ opacity: 1 }} // Animate to this state
                        transition={{ duration: 0.5 }} // Transition duration
                    >
                        <span>Contacts</span>
                        {isContactsOpen ? <ChevronUpIcon className='w-6 h-6' /> : <ChevronDownIcon className='w-6 h-6' />}
                    </motion.button>
                    {isContactsOpen && (
                        <motion.div // Wrap div with motion.div
                            className='md:p-4 rounded md:mb-4'
                            initial={{ height: 0 }} // Initial height
                            animate={{ height: 'auto' }} // Animate to auto height
                            transition={{ duration: 0.5 }} // Transition duration
                        >
                            <FootComponent 
                                link1='+237 672 442 800' 
                                link2='contact@tribunejustice.com' 
                                link3='Cameroun'
                            />
                        </motion.div>
                    )}

                    <motion.button // Wrap button with motion.button
                        onClick={() => setIsMenuOpen(prev => !prev)} 
                        className='w-full text-white border-b px-4 py-2 rounded flex items-center justify-between md:mb-2'
                        initial={{ opacity: 0 }} // Initial state
                        animate={{ opacity: 1 }} // Animate to this state
                        transition={{ duration: 0.5 }} // Transition duration
                    >
                        <span>Liens Utiles</span>
                        {isMenuOpen ? <ChevronUpIcon className='w-6 h-6' /> : <ChevronDownIcon className='w-6 h-6' />}
                    </motion.button>
                    {isMenuOpen && (
                        <motion.div // Wrap div with motion.div
                            className='md:p-4 rounded md:mb-4'
                            initial={{ height: 0 }} // Initial height
                            animate={{ height: 'auto' }} // Animate to auto height
                            transition={{ duration: 0.5 }} // Transition duration
                        >
                            <FootComponent 
                                link1='Accueil'
                                link2='Services' 
                                link3='Pourquoi-nous' 
                                link4='Blog' 
                                link5='Se Connecter' 
                            />
                        </motion.div>
                    )}
                    
                    <motion.button // Wrap button with motion.button
                        onClick={() => setIsNewsletterOpen(prev => !prev)} 
                        className='w-full text-white border-b px-4 py-2 rounded flex items-center justify-between mb-2'
                        initial={{ opacity: 0 }} // Initial state
                        animate={{ opacity: 1 }} // Animate to this state
                        transition={{ duration: 0.5 }} // Transition duration
                    >
                        <span>Nos Réseaux</span>
                        {isNewsletterOpen ? <ChevronUpIcon className='w-6 h-6' /> : <ChevronDownIcon className='w-6 h-6' />}
                    </motion.button>
                    {isNewsletterOpen && (
                        <motion.div // Wrap div with motion.div
                            className='md:p-4 rounded px-4'
                            initial={{ height: 0 }} // Initial height
                            animate={{ height: 'auto' }} // Animate to auto height
                            transition={{ duration: 0.5 }} // Transition duration
                        >
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
                        </motion.div>
                    )}
                </div>

                {/* Desktop View */}
                <div className='hidden lg:flex md:mx-2 md:py-3'>
                    <div className='w-full'>
                        <Image
                            src='https://res.cloudinary.com/dedakscgk/image/upload/v1719703627/Logo-legaltech_kb5pm6.svg'
                            alt='LOGO'
                            height={100}
                            width={50}
                            className='mb-4'
                        />
                        <p className='text-start text-sm md:text-lg'>Parce que votre engagement est la chose la plus <span className='text-yellow-500'><Link href="https://dashboardtj.vercel.app/">importante!</Link></span></p>
                    </div>
                </div>
                <div className='hidden lg:flex md:mx-2 md:py-3'>
                    <FootComponent 
                        link1='Accueil' 
                        link2='Services' 
                        link3='Pourquoi-nous' 
                        link4='Blog' 
                        link5='Se Connecter' 
                    />
                </div>
                <div className='hidden lg:flex md:mx-2 md:py-3'>
                    <FootComponent 
                        link1='+237 672 442 800' 
                        link2='contact@tribunejustice.com' 
                        link3='Cameroun'
                    />
                </div>
                <div className='hidden lg:flex md:mx-2 md:py-3'>
                    <div className='flex'>
                        <Link href=''><i className="fab fa-facebook text-2xl mx-1"></i></Link>
                        <Link href=''><i className="fab fa-twitter text-2xl mx-1"></i></Link>
                        <Link href=''><i className="fab fa-instagram text-2xl mx-1"></i></Link>
                        <Link href=''><i className="fab fa-linkedin text-2xl mx-1"></i></Link>
                    </div>
                </div>
            </div>
            <div className='bg-black bg-opacity-50 p-4'>
                <p className='text-center text-sm md:text-base'>© 2024 Tribune Justice. Tous droits réservés.</p>
            </div>
        </div>
    </div>
  )
}

export default Footer
