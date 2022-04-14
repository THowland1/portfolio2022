import { ArrowRightIcon } from '@heroicons/react/solid';
import Link from 'next/link';
import React from 'react';

export default function Navbar() {
  return (
    <header className='bg-gray-800 md:sticky top-0 z-10'>
      <div className='container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center'>
        <Link href='#about' passHref>
          <span className='title-font font-medium text-white mb-4 md:mb-0'>
            <span className='ml-3 text-xl'>Tom Howland</span>
          </span>
        </Link>
        <nav className='md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-700	flex flex-wrap items-center text-base justify-center'>
          <Link href='#skills' passHref>
            <span className='mr-5 hover:text-white'>Skills</span>
          </Link>
          <Link href='#jobs' passHref>
            <span className='mr-5 hover:text-white'>Timeline</span>
          </Link>
          <Link href='#projects' passHref>
            <span className='mr-5 hover:text-white'>Projects</span>
          </Link>
        </nav>
        <Link href='#contact' passHref>
          <span className='inline-flex items-center bg-gray-800 border-0 py-1 px-3 focus:outline-none hover:bg-gray-700 rounded text-base mt-4 md:mt-0'>
            Get in touch
            <ArrowRightIcon className='w-4 h-4 ml-1' />
          </span>
        </Link>
      </div>
    </header>
  );
}
