import Image from 'next/image'
import React from 'react'
import Link from 'next/link'

const Header = () => {
  return (
    <div>
        <div>
            <Image
               src=''
               alt='LOGO'
               width={200}
               height={200}
            >
            </Image>
        </div>
        <div>
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
        <div>
            <input type="search" name="search" id="search" />
        </div>
    </div>
  )
}

export default Header