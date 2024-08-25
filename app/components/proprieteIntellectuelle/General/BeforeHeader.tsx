import React from 'react'
import '@fortawesome/fontawesome-free/css/all.min.css';
import Link from 'next/link';


const BeforeHeader = () => {
  return (
    <div className='bg-green-700'>
      <div className='md:w-9/12 w-full px-8 md:py-1 m-auto flex justify-between'>
          <div>
            <ul className='text-white md:text-lg text-sm grid md:flex md:font-semibold'>
              <li>(+237) 672 442 800</li>
              <li className='px-0 md:px-4'>contact@tribunejustice.com</li>
            </ul>
          </div>

          <div className='text-center px-3 justify-end text-white'>    
            <ul className='text-white flex'>
                <li className='px-2'>
                  <Link href=''><i className="fab fa-facebook"></i></Link>
                </li>
                <li className='px-2'>
                    <Link href=''><i className="fab fa-twitter"></i></Link>
                </li>
                <li className='px-2'>
                    <Link href=''><i className="fab fa-instagram"></i></Link>
                </li>
                <li className='px-2'>
                    <Link href=''><i className="fab fa-linkedin"></i></Link>
                </li>
                <li className='px-2'>
                  <i className="fa-solid fa-flag"></i>
                </li>
            </ul>
          </div>
        </div>
    </div>
  )
}

export default BeforeHeader