/* eslint-disable react/no-children-prop */
'use client'
import Image from 'next/image';
import React, { useState, ReactNode } from 'react';
import Link from 'next/link';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';

const Header: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className='bg-white shadow-sm'>
      <div className='w-9/12 m-auto flex justify-between py-3'>
        <div>
          <Link href='../../../pages/Home'>
            <Image
              src='https://res.cloudinary.com/dedakscgk/image/upload/v1721945934/logo_1_tvf3xq.png'
              alt='LOGO'
              width={120}
              height={40}
            />
          </Link>
        </div>
        <div className='text-center pt-3 relative hidden md:flex'>
          <ul className='flex justify-between text-lg font-bold'>
            <NavItem title="Services">
              <Dropdown>
                <DropdownItem href="../../../pages/createDocuments">Creez vos documents</DropdownItem>
                <DropdownItem href="../../../pages/HomePropriete">Propriete Intellectuelle</DropdownItem>
                <DropdownItem href="../../../pages/contactTeams">Consultez nos experts</DropdownItem>
                <DropdownItem href="../../../pages/createSarl">Creez votre entreprise</DropdownItem>
                <DropdownItem href="../../../pages/DocumentTranslate">Traduction De Documents</DropdownItem>
              </Dropdown>
            </NavItem>
            <NavItem title="Pourquoi nous" children={undefined}>
            </NavItem>
            <NavItem title="Blog" children={undefined}>
            </NavItem>
          </ul>
        </div>
        <div className='pt-3 hidden md:block'>
          <input
            type='text'
            className='border rounded-full focus:outline-none py-1 w-80 px-3'
            placeholder='Recherche...'
          />
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
      {menuOpen && (
        <div className='md:hidden'>
          <ul className='text-lg font-bold'>
            <NavItem title="Services">
              <Dropdown>
                <DropdownItem href="../../../pages/createDocuments">Creez vos documents</DropdownItem>
                <DropdownItem href="../../../pages/HomePropriete">Propriete Intellectuelle</DropdownItem>
                <DropdownItem href="../../../pages/contactTeams">Consultez nos experts</DropdownItem>
                <DropdownItem href="../../../pages/createSarl">Creez votre entreprise</DropdownItem>
                <DropdownItem href="../../../pages/DocumentTranslate">Traduction De Documents</DropdownItem>
              </Dropdown>
            </NavItem>
            <NavItem title="Pourquoi nous" children={undefined}>
            </NavItem>
            <NavItem title="Blog" children={undefined}>
            </NavItem>
          </ul>
          <div className='pt-3'>
            <input
              type='text'
              className='border rounded-full focus:outline-none py-1 w-full px-3'
              placeholder='Recherche...'
            />
          </div>
        </div>
      )}
    </div>
  );
};

interface NavItemProps {
  title: string;
  children: ReactNode;
}

const NavItem: React.FC<NavItemProps> = ({ title, children }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <li
      className='relative px-6'
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
    >
      <Link href=''>{title}</Link>
      {isOpen && children}
    </li>
  );
};

interface DropdownProps {
  children: ReactNode;
}

const Dropdown: React.FC<DropdownProps> = ({ children }) => {
  return (
    <div className='absolute left-0 mt-2 w-96 grid bg-white border border-gray-200 rounded-md shadow-lg z-50'>
      <ul className='py-1'>{children}</ul>
    </div>
  );
};

interface DropdownItemProps {
  href: string;
  children: ReactNode;
}

const DropdownItem: React.FC<DropdownItemProps> = ({ href, children }) => {
  return (
    <li>
      <Link href={href} className='block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100'>
        {children}
      </Link>
    </li>
  );
};

export default Header;
