/* eslint-disable react/no-children-prop */
'use client';
import Image from 'next/image';
import React, { useState, ReactNode } from 'react';
import Link from 'next/link';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import '@fortawesome/fontawesome-free/css/all.min.css';
import { FaChevronDown } from 'react-icons/fa';
import BeforeHeader from './BeforeHeader';

const Header: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [servicesModalOpen, setServicesModalOpen] = useState(false);

  return (
    <div className='bg-white shadow-sm md:fixed top-0 w-full z-50'>
      <BeforeHeader />
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
        <div className='text-center pt-6 relative hidden md:flex'>
          <ul className='flex justify-between text-sm font-semibold'>
            <li className='relative px-6'>
              <button
                className='flex items-center'
                onClick={() => setServicesModalOpen(!servicesModalOpen)}
              >
                Services
                <FaChevronDown className='h-5 w-5 ml-2 text-gray-700' />
              </button>
              {servicesModalOpen && (
                <Dropdown>
                  <DropdownItem href='../../../pages/createDocuments'>Creez vos documents d&apos;entreprise</DropdownItem>
                  <DropdownItem href='../../../pages/HomePropriete'>Propriete Intellectuelle</DropdownItem>
                  <DropdownItem href='../../../pages/contactTeams'>Consultez nos experts</DropdownItem>
                  <DropdownItem href='../../../pages/DocumentTranslate'>Traduction De Documents</DropdownItem>
                </Dropdown>
              )}
            </li>
            <NavItem title="Blog" href='' />
            <NavItem title="Pourquoi nous" href='../../../pages/whyUs' />
            <NavItem title="Se connecter" href='../../../pages/connect' />
          </ul>
        </div>
        <div className='md:hidden flex items-center'>
          <button onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? (
              <XMarkIcon className='h-8 w-8 text-gray-700' />
            ) : (
              <Bars3Icon className='h-8 w-8 text-gray-700' />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu Modal */}
      {menuOpen && (
        <div className='fixed inset-0 bg-white bg-opacity-95 z-50'>
          <div className='p-2 max-w-full h-full mx-auto mt-10'>
            <ul className='text-lg font-light'>
              <li className='relative px-6'>
                <button
                  className='flex items-center w-full hover:font-semibold'
                  onClick={() => setServicesModalOpen(!servicesModalOpen)}
                >
                  Services
                  <FaChevronDown className='h-5 w-5 ml-2 text-gray-700' />
                </button>
                {servicesModalOpen && (
                <Dropdown>
                  <DropdownItem href='../../../pages/createDocuments'>Creez vos documents d&apos;entreprise</DropdownItem>
                  <DropdownItem href='../../../pages/HomePropriete'>Propriete Intellectuelle</DropdownItem>
                  <DropdownItem href='../../../pages/contactTeams'>Consultez nos experts</DropdownItem>
                  <DropdownItem href='../../../pages/DocumentTranslate'>Traduction De Documents</DropdownItem>
                </Dropdown>
                )}
              </li>
                <NavItem title="Blog" href='' />
                <NavItem title="Pourquoi nous" href='../../../pages/whyUs' />
                <NavItem title="Se connecter" href='../../../pages/connect' />
            </ul>
            <div className='py-2 border-green-300 flex mx-4 rounded-full my-3 px-4 border'>
              <p className='text-green-600'><i className="fa-solid fa-search text-lg"></i></p>
              <input
                type='text'
                className='focus:outline-none bg-transparent w-80 px-3'
                placeholder='trouver quelque chose...'
              />
            </div>
            <button onClick={() => setMenuOpen(false)} className='absolute top-2 right-2'>
              <XMarkIcon className='h-8 w-8 text-gray-700' />
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

interface NavItemProps {
  title: string;
  href: string;
  children?: ReactNode;
}

const NavItem: React.FC<NavItemProps> = ({ title, href, children }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <li
      className='relative px-6 text-semibold'
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
    >
      <Link href={href} className="block">
        {title}
      </Link>
      {children && isOpen && children}
    </li>
  );
};

interface DropdownProps {
  children: ReactNode;
}

const Dropdown: React.FC<DropdownProps> = ({ children }) => {
  return (
    <div className='absolute left-24 w-72 flex text-start bg-white rounded-sm shadow-sm z-50'>
      <ul className='py-1 w-full'>{children}</ul>
    </div>
  );
};

interface DropdownItemProps {
  href: string;
  children: ReactNode;
}

const DropdownItem: React.FC<DropdownItemProps> = ({ href, children }) => {
  return (
    <li className='hover:font-semibold'>
      <Link href={href} className='block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100'>
        {children}
      </Link>
    </li>
  );
};

export default Header;
