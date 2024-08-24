'use client'
import React from 'react'
import Traduction from '../components/Traduction'
import Image from 'next/image'
import { useRouter } from 'next/navigation'

const Traductions = () => {
    const router = useRouter();
    
    const onclickEnterprise = (path: string) => {
      router.push(path);
     };

  return (
    <div className='w-9/12 m-auto py-12 text-white'>
        <div>
            <div className='w-full text-center'>
                <h2 className='uppercase text-xl md:text-3xl text-semibold'>traduction des documents</h2>
            </div>
            <div className='md:w-10/12 m-auto my-8 grid md:grid-cols-2 gap-2'>
                <div className=''>
                    <Image 
                        src='https://res.cloudinary.com/dedakscgk/image/upload/v1719703622/Groupe_198_pzwjwp.png'
                        alt='documents'
                        width={470}
                        height={200}
                        className=''
                    ></Image>
                </div>
                <div className='w-full'>
                    <div className='bg-gray-50 rounded-md'>
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