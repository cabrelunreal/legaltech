'use client'
import React, { useEffect } from 'react' // Ajout de useEffect pour AOS
import Traduction from '../components/Traduction'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import AOS from 'aos'; // Importation de AOS
import 'aos/dist/aos.css'; // Importation des styles AOS

const Traductions = () => {
    const router = useRouter();
    
    const onclickEnterprise = (path: string) => {
      router.push(path);
    };

    useEffect(() => { // Initialisation de AOS
        AOS.init();
    }, []);

    return (
        <div className='w-9/12 m-auto py-12 text-white'>
            <div data-aos="fade-up"> {/* Ajout de l'animation AOS à la div principale */}
                <div className='w-full text-center'>
                    <h2 className='uppercase text-xl md:text-3xl font-semibold'>Traduction des documents</h2> {/* Correction de "text-semibold" à "font-semibold" */}
                </div>
                <div className='md:w-10/12 m-auto my-8 grid md:grid-cols-2 gap-2'>
                    <div data-aos="zoom-in"> {/* Ajout de l'animation AOS à la div de l'image */}
                        <Image 
                            src='https://res.cloudinary.com/dedakscgk/image/upload/v1719703622/Groupe_198_pzwjwp.png'
                            alt='documents'
                            width={470}
                            height={200}
                            className=''
                        />
                    </div>
                    <div className='w-full'>
                        <div className='bg-gray-50 rounded-md' data-aos="fade-right"> {/* Ajout de l'animation AOS au composant Traduction */}
                            <Traduction 
                                image='https://res.cloudinary.com/dedakscgk/image/upload/v1719703630/paper_1_t8npck.svg' 
                                description='Traduction de documents juridiques, administratifs et autres documents techniques' 
                                imagedescription='docs'
                                onclick={() => onclickEnterprise('../pages/DocumentTranslate')} 
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Traductions
