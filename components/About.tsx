import React, { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import TypeAnimation from '../util/TypeAnimation';

async function wait(ms: number) {
  return new Promise<void>((resolve, reject) =>
    setTimeout(() => resolve(), ms)
  );
}

async function doTheTypeAnimation(el: HTMLElement) {
  await removeInnerText(el);
  el.innerText = 'fieukrdhgoilehr';
  await wait(1000);
  await removeInnerText(el);
}

async function removeInnerText(el: HTMLElement) {
  while (el.innerText.length) {
    el.innerText = el.innerText.slice(0, -1);
    await wait(500);
  }
}

export default function About() {
  return (
    <section>
      <div className='container mx-auto flex px-10 py-20 md:flex-row flex-col items-center'>
        <div className='lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center'>
          <h1 className='title-font sm:text-4xl text-3xl mb-4 font-medium text-white'>
            Hi, I&apos;m Tom. <br />
            Full-stack{' '}
            <TypeAnimation
              sequence={[
                'engineer',
                3000,
                'bloke',
                3000,
                'guy',
                3000,
                'craftsman',
                3000,
                'chap',
                3000,
              ]}
            />
            <span className='blink w-[2px] bg-white inline-block'>&nbsp;</span>
          </h1>
          <br className='hidden lg:inline-block' />
          <p className='mb-8 leading-relaxed'>
            After 4 years of full-time experience and countless evenings of
            hobby-code, I am a full-stack force to be reckoned with on projects
            of all sizes
          </p>
          <div className='flex justify-center'>
            <a
              href='#contact'
              className='inline-flex text-white bg-green-500 border-0 py-2 px-6 focus:outline-none hover:bg-green-600 rounded text-lg'
            >
              Get in Touch
            </a>
            <a
              href='#projects'
              className='ml-4 inline-flex text-gray-400 bg-gray-800 border-0 py-2 px-6 focus:outline-none hover:bg-gray-700 hover:text-white rounded text-lg'
            >
              See My Work
            </a>
          </div>
        </div>
        <div className='lg:max-w-lg lg:w-full md:w-1/2 w-5/6 relative h-72'>
          <Image
            className='object-cover object-center rounded'
            alt='A picture of Tom Howland, with his lovely fiancée, Alex'
            layout='fill'
            src='/tom-howland.jpg'
          />
        </div>
      </div>
    </section>
  );
}
