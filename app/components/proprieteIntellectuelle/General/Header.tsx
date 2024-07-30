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
          <Image
            src='https://res.cloudinary.com/dedakscgk/image/upload/v1721945934/logo_1_tvf3xq.png'
            alt='LOGO'
            width={120}
            height={40}
          />
        </div>
        <div className='text-center pt-3 relative hidden md:flex'>
          <ul className='flex justify-between text-lg font-bold'>
            <NavItem title="Services">
              <Dropdown>
                <DropdownItem href="/service1">Service 1</DropdownItem>
                <DropdownItem href="/service2">Service 2</DropdownItem>
                <DropdownItem href="/service3">Service 3</DropdownItem>
              </Dropdown>
            </NavItem>
            <NavItem title="Pourquoi nous">
              <Dropdown>
                <DropdownItem href="/why-us1">Reason 1</DropdownItem>
                <DropdownItem href="/why-us2">Reason 2</DropdownItem>
                <DropdownItem href="/why-us3">Reason 3</DropdownItem>
              </Dropdown>
            </NavItem>
            <NavItem title="Blog">
              <Dropdown>
                <DropdownItem href="/blog1">Blog 1</DropdownItem>
                <DropdownItem href="/blog2">Blog 2</DropdownItem>
                <DropdownItem href="/blog3">Blog 3</DropdownItem>
              </Dropdown>
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
                <DropdownItem href="/service1">Service 1</DropdownItem>
                <DropdownItem href="/service2">Service 2</DropdownItem>
                <DropdownItem href="/service3">Service 3</DropdownItem>
              </Dropdown>
            </NavItem>
            <NavItem title="Pourquoi nous">
              <Dropdown>
                <DropdownItem href="/why-us1">Reason 1</DropdownItem>
                <DropdownItem href="/why-us2">Reason 2</DropdownItem>
                <DropdownItem href="/why-us3">Reason 3</DropdownItem>
              </Dropdown>
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
    <div className='absolute left-0 mt-2 w-48 bg-white border border-gray-200 rounded-md shadow-lg z-50'>
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
