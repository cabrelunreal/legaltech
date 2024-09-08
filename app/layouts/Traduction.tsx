'use client'
import React, { useEffect } from 'react' // Added useEffect for AOS
import Traduction from '../components/Traduction'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import AOS from 'aos'; // Import AOS
import 'aos/dist/aos.css'; // Import AOS styles

const Traductions = () => {
    const router = useRouter();
    
    const onclickEnterprise = (path: string) => {
      router.push(path);
     };

    useEffect(() => { // Initialize AOS
        AOS.init();
    }, []);

  return (
    <div className='w-9/12 m-auto py-12 text-white'>
        <div data-aos="fade-up"> {/* Added AOS animation to the main div */}
            <div className='w-full text-center'>
                <h2 className='uppercase text-xl md:text-3xl text-semibold'>traduction des documents</h2>
            </div>
            <div className='md:w-10/12 m-auto my-8 grid md:grid-cols-2 gap-2'>
                <div data-aos="zoom-in"> {/* Added AOS animation to the image div */}
                    <Image 
                        src='https://res.cloudinary.com/dedakscgk/image/upload/v1719703622/Groupe_198_pzwjwp.png'
                        alt='documents'
                        width={470}
                        height={200}
                        className=''
                    ></Image>
                </div>
                <div className='w-full'>
                    <div className='bg-gray-50 rounded-md' data-aos="fade-right"> {/* Added AOS animation to the Traduction component */}
                        <Traduction image='https://res.cloudinary.com/dedakscgk/image/upload/v1719703630/paper_1_t8npck.svg' 
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