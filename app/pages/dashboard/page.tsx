import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

const Dashboard = () => {
  return (
    <div className='w-full flex flex-row'>
        <div className='w-3/12 bg-green-700 h-screen shadow-md px-6 py-12 text-white'>
            <h1 className='text-center flex justify-center'>
                <Image
                    src="https://res.cloudinary.com/dedakscgk/image/upload/v1719703627/Logo-legaltech_kb5pm6.svg"
                    alt="LOGO"
                    width={100}
                    height={80}
                    className=""
                ></Image>
            </h1>
            <p className='px-3 py-4 text-lg font-semibold capitalize rounded-md my-4 cursor-pointer bg-gray-50 opacity-40 hover:opacity-80 text-black'><Link href="">Profile</Link></p>
            <p className='px-3 py-4 text-lg font-semibold capitalize rounded-md my-4 cursor-pointer bg-gray-50 opacity-40 hover:opacity-80 text-black'><Link href="">Activite</Link></p>
        </div>
        <div className='w-9/12 h-screen'>
            <div className='px-8 py-2 shadow-md flex justify-end items-center'>
                 <p className='px-3'>messages</p>
                 <p className='px-3'>notifications</p>
                 <Image
                    src="https://res.cloudinary.com/dedakscgk/image/upload/v1724924286/WhatsApp_Image_2024-08-27_at_19.48.25_6_vgoher.png"
                    alt="Hello"
                    width={60}
                    height={60}
                    className='rounded-full bg-green-700 text-center text-white mx-3'
                ></Image>
            </div>
            <div className='p-8'>
                <div className='justify-center flex w-full h-[650px] bg-gray-50 shadow-sm'>
                    <div className='justify-center flex items-center'>
                        <div className='flex justify-center items-center flex-col'>
                            <Image
                                src="https://res.cloudinary.com/dedakscgk/image/upload/v1724924286/WhatsApp_Image_2024-08-27_at_19.48.25_6_vgoher.png"
                                alt='Profile'
                                height={200}
                                width={200}
                                className='rounded-full border text-center'
                            ></Image>
                            <div className='py-4 text-center'><span className='font-semibold'>Leonce Kousse</span> </div>
                            <div className='text-center'>(+237 XXX XXX XXX) contact@exemple.com</div>
                            <div className='text-center'>
                                <ul className='text-sky-500 flex capitalize justify-center'>
                                    <li className='px-2'>facebook</li>
                                    <li className='px-2'>linkedin</li>
                                    <li className='px-2'>twitter</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Dashboard