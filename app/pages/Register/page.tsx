'use client'
import Button from '@/app/components/proprieteIntellectuelle/General/Button'
import Header from '@/app/components/proprieteIntellectuelle/General/Header';
import RegisterStep1 from '@/app/layouts/Register/RegisterStep1';
import RegisterStep2 from '@/app/layouts/Register/RegisterStep2';
import RegisterStep3 from '@/app/layouts/Register/RegisterStep3';
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
                                src='https://res.cloudinary.com/dedakscgk/image/upload/v1719703633/Sign-up_ayz42w.png'
                                alt='form'
                                width={700}
                                height={100}
                                className=''
                            />
                        </div>
                    </div>
                    <div className='layout form'>
                        <RegisterStep1 />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Register
