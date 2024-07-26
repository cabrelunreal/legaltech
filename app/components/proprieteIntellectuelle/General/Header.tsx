import Image from 'next/image'
import React from 'react'
import Link from 'next/link'

const Header = () => {
  return (
    <div className='bg-white shadow-sm'>
        <div className='w-9/12 m-auto flex justify-between py-3'>
            <div>
                <Image
                    src='https://res.cloudinary.com/dedakscgk/image/upload/v1721945934/logo_1_tvf3xq.png'
                    alt='LOGO'
                    width={120}
                    height={40}
                    className=''
                ></Image>  
            </div>
            <div className='text-center pt-3'>
                <ul className='flex justify-between text-lg font-bold'>
                    <li className='px-12'><Link href=''>Services</Link></li>
                    <li className='pl-6 pr-12'><Link href=''>Pourquoi nous</Link></li>
                    <li className='px-3'><Link href=''>Blog</Link></li>
                </ul>
            </div>
            <div className='pt-3'>
                <input type="text" className='border rounded-full focus:outline-none py-1 w-80 px-3' placeholder='Recherche...' />
            </div>
        </div>
    </div>
  )
}

export default Header