import Image from 'next/image'
import React from 'react'
import Link from 'next/link'

const Header = () => {
  return (
    <div className='w-8/12 m-auto text-xl flex py-3'>
        <div>
            <Image
               src=''
               alt='LOGO'
               width={10}
               height={10}
            >
            </Image>
        </div>
        <div className='w-full flex justify-evenly'>
            <div>
                <Link href=''>Services</Link>
            </div>
            <div>
                <Link href=''>Pourquoi nous</Link>
            </div>
            <div>
                <Link href=''>Blog</Link>
            </div>
        </div>
        <div className='w-4/12'>
            <input type="search" className='border rounded-sm w-full focus:outline-none px-2 text-lg  text-black' placeholder='Recherchez quelque chose' name="search" id="search" />
        </div>
    </div>
  )
}

export default Header