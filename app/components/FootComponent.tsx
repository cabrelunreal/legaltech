import React from 'react'
import Link from 'next/link'

interface FootProps {
    link1: string, link2: string, link3: string, link4: string, link5: string;
    title?: string;
}

const FootComponent: React.FC<FootProps> = ({ title, link1, link2, link3, link4, link5 }) => {
    return (
        <div className='w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl mx-auto p-4'>
            <div className='text-lg md:text-xl font-semibold md:mb-4'>
                <h2>{title}</h2>
            </div>
            <div className='text-sm md:text-lg'>
                <ul className='list-disc pl-4'>
                    <li className='mb-2 hover:underline'><Link href=''>{link1}</Link></li>
                    <li className='mb-2 hover:underline'><Link href=''>{link2}</Link></li>
                    <li className='mb-2 hover:underline'><Link href=''>{link3}</Link></li>
                    <li className='mb-2 hover:underline'><Link href=''>{link4}</Link></li>
                    <li className='mb-2 hover:underline'><Link href=''>{link5}</Link></li>
                </ul>
            </div>
        </div>
    )
}

export default FootComponent
