import React from 'react'
import Link from 'next/link'

interface footProps{
    link1: string, link2: string, link3: string; link4: string, link5: string;
    title: string;
}
const FootComponent:React.FC<footProps> = ({title, link1, link2, link3, link4, link5}) => {
  return (
    <div>
        <div className='text-xl font-semibold'>
            <h2>{title}</h2>
        </div>
        <div className='text-lg py-3'>
            <ul>
                <li className=' hover:underline'><Link href=''>{link1}</Link></li>
                <li className=' hover:underline'><Link href=''>{link2}</Link></li>
                <li className=' hover:underline'><Link href=''>{link3}</Link></li>
                <li className=' hover:underline'><Link href=''>{link4}</Link></li>
                <li className=' hover:underline'><Link href=''>{link5}</Link></li>
            </ul>
        </div>
    </div>
  )
}

export default FootComponent