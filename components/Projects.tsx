import { CodeIcon } from '@heroicons/react/solid';
import React from 'react';
import Image from 'next/image';

export const projects = [
  {
    title: 'You Have To Burn The Rope',
    subtitle: 'HTML Canvas & TS & Parcel',
    description:
      'You Have To Burn The Rope, a childhood-favourite Flash game remade from the ground up to run natively in the browser',
    image: '/youhavetoburntherope.png',
    link: 'https://youhavetoburntherope.tomhowland.com',
  },
  {
    title: 'GUID Generator',
    subtitle: 'Raw HTML & JS',
    description: 'A quick copy-to-clipboard GUID tool',
    image: '/guid-generator.png',
    link: 'https://guid.tomhowland.com',
  },
  {
    title: 'Gist API',
    subtitle: 'Serverless functions',
    description:
      'A tool to access JSON-shaped GitHub gists via a REST endpoint, for a free, featherweight "database" for featherweight projects ',
    image: '/gist-api.png',
    link: 'https://gist-api.tomhowland.com',
  },
];

export default function Projects() {
  return (
    <section
      id='projects'
      className='text-gray-500 dark:text-gray-400 bg-gray-100 dark:bg-gray-900 body-font'
    >
      <div className='container px-5 py-10 mx-auto text-center lg:px-40'>
        <div className='flex flex-col w-full mb-20'>
          <CodeIcon className='mx-auto inline-block w-10 mb-4' />
          <h1 className='sm:text-4xl text-3xl font-medium title-font mb-4 text-gray-900 dark:text-white'>
            Apps I&apos;ve Built
          </h1>
          <p className='lg:w-2/3 mx-auto leading-relaxed text-base'>
            Between working days, its always nice to itch that scratch of using
            new technologies and making something I can call my&nbsp;own.
          </p>
        </div>
        <div className='flex flex-wrap -m-4'>
          {projects.map((project) => (
            <a
              href={project.link}
              key={project.image}
              className='sm:w-1/2 flex-grow p-4'
            >
              <div className='flex relative h-full'>
                <Image
                  alt='gallery'
                  className='absolute inset-0 w-full h-full object-cover object-center'
                  src={project.image}
                  layout='fill'
                />
                <div className='px-8 py-10 relative z-9 w-full border-4 border-gray-800 bg-gray-100 dark:bg-gray-900 opacity-0 hover:opacity-100'>
                  <h2 className='tracking-widest text-sm title-font font-medium text-green-500 dark:text-green-400 mb-1'>
                    {project.subtitle}
                  </h2>
                  <h1 className='title-font text-lg font-medium text-gray-900 dark:text-white mb-3'>
                    {project.title}
                  </h1>
                  <p className='leading-relaxed'>{project.description}</p>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
