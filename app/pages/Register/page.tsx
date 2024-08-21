'use client'
import Button from '@/app/components/proprieteIntellectuelle/General/Button'
import RegisterStep1 from '@/app/layouts/Register/RegisterStep1';
import RegisterStep2 from '@/app/layouts/Register/RegisterStep2';
import RegisterStep3 from '@/app/layouts/Register/RegisterStep3';
import Image from 'next/image'
import React, { useState } from 'react'

const Register = () => {
    const [selectedLayout, setSelectedLayout] = useState<string>('registerStep1'); // Change to string | null
  
    const handleButtonClick1 = () => setSelectedLayout('registerStep1');
    const handleButtonClick2 = () => setSelectedLayout('registerStep2');
    const handleButtonClick3 = () => setSelectedLayout('registerStep3');
  
  return (
    <div>
        <div className='w-9/12 m-auto py-4'>
            <div>
                <h2 className='text-center md:text-4xl text-green-700 font-semibold'>Enregistrer un compte</h2>
            </div>
            <div className='grid md:grid-cols-2 py-8 gap-8'>
                <div className='items-center'>
                    <div className='flex justify-center'>
                        <Image
                            src='https://res.cloudinary.com/dedakscgk/image/upload/v1719703633/Sign-up_ayz42w.png'
                            alt='form'
                            width={700}
                            height={100}
                            className=''
                        ></Image>
                    </div>
                    <div className='grid md:w-6/12 md:grid-cols-3 m-auto'>
                        <div>
                            <Button title='1' structure='py-2 px-4 rounded-full bg-green-700 text-white' onClick={handleButtonClick1} />
                        </div>
                        <div>
                            <Button title='2' structure='py-2 px-4 rounded-full bg-green-700 text-white' onClick={handleButtonClick2} />
                        </div>
                        <div>
                            <Button title='3' structure='py-2 px-4 rounded-full bg-green-700 text-white' onClick={handleButtonClick3} />
                        </div>
                    </div>
                </div>
                <div className='layout form'>
                    {selectedLayout === 'registerStep1' && <RegisterStep1 /> }
                    {selectedLayout === 'registerStep2' && <RegisterStep2 /> }
                    {selectedLayout === 'registerStep3' && <RegisterStep3 /> }
                </div>
            </div>
        </div>
    </div>
  )
}

export default Register