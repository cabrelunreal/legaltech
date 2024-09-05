'use client'
import Header from '@/app/components/proprieteIntellectuelle/General/Header';
import RegisterStep2 from '@/app/layouts/Register/RegisterStep2';
import Image from 'next/image'
import React, { useState } from 'react'

const Register = () => {
    const [selectedLayout, setSelectedLayout] = useState<string>('registerStep1'); // Change to string | null
  
  return (
    <div>
        <div className='m-auto py-4'>
        <Header />
            <div className='grid md:pt-24 md:w-9/12 m-auto md:grid-cols-2 py-8 gap-8'>
                <div className='items-center'>
                    <div className='flex justify-center'>
                        <Image
                            src='https://res.cloudinary.com/dedakscgk/image/upload/v1719703627/login_icon_v6ilwi.png'
                            alt='form'
                            width={700}
                            height={100}
                            className=''
                        ></Image>
                    </div>
                </div>
                <div className='layout form'>
                    <RegisterStep2 />
                </div>
            </div>
        </div>
    </div>
  )
}

export default Register