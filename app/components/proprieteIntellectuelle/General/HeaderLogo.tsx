/* eslint-disable react/no-children-prop */
'use client';
import Image from 'next/image';
import Link from 'next/link';
import BeforeHeader from './BeforeHeader';

const Header: React.FC = () => {

  return (
    <div className='bg-white shadow-sm border-b border-gray-200 md:fixed top-0 w-full z-50'>
      <div className='md:w-9/12 px-8 md:px-8 m-auto flex justify-between py-3'>
        <div>
          <Link href='../../../pages/Home'>
            <Image
              src='https://res.cloudinary.com/dedakscgk/image/upload/v1721945934/logo_1_tvf3xq.png'
              alt='LOGO'
              width={140}
              height={40}
            />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Header;
