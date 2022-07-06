import { ArrowRightIcon } from '@heroicons/react/solid';
import Link from 'next/link';
import React from 'react';
import ThemeToggle from './ThemeToggle';

export default function Navbar() {
  return (
    <header className='bg-gray-800 md:sticky top-0 z-10 shadow'>
      <div className='container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center gap-5'>
        <Link href='#about' passHref>
          <span className='title-font font-medium text-white'>
            <span className='text-xl'>Tom Howland</span>
          </span>
        </Link>
        <nav className='md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l border-gray-600	flex flex-wrap items-center text-base justify-center gap-5'>
          <Link href='#skills' passHref>
            <span className='hover:hover:text-white hover:transition-none cursor-pointer'>
              Skills
            </span>
          </Link>
          <Link href='#jobs' passHref>
            <span className='hover:hover:text-white hover:transition-none cursor-pointer'>
              Timeline
            </span>
          </Link>
          <Link href='#projects' passHref>
            <span className='hover:hover:text-white hover:transition-none cursor-pointer'>
              Projects
            </span>
          </Link>
          <Link href='#projects' passHref>
            <span className='hover:hover:text-white hover:transition-none cursor-pointer'>
              CV
            </span>
          </Link>
          <Link href='#contact' passHref>
            <span className='hover:hover:text-white hover:transition-none cursor-pointer whitespace-nowrap'>
              Get in touch&nbsp;
              <span className='overflow-visible inline-flex justify-center align-middle'>
                <ArrowRightIcon className='w-4 h-4 inline' />
              </span>
            </span>
          </Link>
        </nav>
        <ThemeToggle />
      </div>
    </header>
  );
}
