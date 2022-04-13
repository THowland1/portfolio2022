import React from 'react';

import { CSSProperties } from 'react';
import { CodeIcon, MailIcon } from '@heroicons/react/solid';
import {
  GithubOriginalIcon,
  LinkedinPlainIcon,
  TwitterOriginalIcon,
} from 'react-devicons';

const GMAIL_RED = '#BB011C';
const LINKEDIN_BLUE = '#0A66C2';
const GITHUB_BLACK = '#242A2E';

// export const email: SocialLink = {
//   icon: MailIcon,
//   href: 'mailto:tomhowland9@gmail.com',
//   background: GMAIL_RED,
// };
// export const linkedin: SocialLink = {
//   icon: LinkedinPlainIcon,
//   href: 'https://www.linkedin.com/in/tomhowland9',
//   background: LINKEDIN_BLUE,
// };
// export const github: SocialLink = {
//   icon: GithubOriginalIcon,
//   href: 'https://github.com/THowland1',
//   background: GITHUB_BLACK,
// };

export default function Contact() {
  return (
    <section id='contact' className='relative'>
      <div className='container px-5 lg:px-40 py-10 mx-auto flex sm:flex-nowrap flex-wrap'>
        <form
          data-netlify='true'
          name='contact'
          className='flex flex-col md:m-auto w-full md:py-8 mt-8 md:mt-0'
        >
          <h2 className='text-white sm:text-4xl text-3xl mb-1 font-medium title-font'>
            Get in touch!
          </h2>
          <p className='leading-relaxed mb-5'>
            While I am not looking for any new opportunities at the moment, my
            inbox is always open. Whether you have a question or just want to
            say hi, I&apos;ll try my best to get back to you!
          </p>
          <div className='relative mb-4'>
            <label htmlFor='name' className='leading-7 text-sm text-gray-400'>
              Name
            </label>
            <input
              type='text'
              id='name'
              name='name'
              className='w-full bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out'
            />
          </div>
          <div className='relative mb-4'>
            <label htmlFor='email' className='leading-7 text-sm text-gray-400'>
              Email
            </label>
            <input
              type='email'
              id='email'
              name='email'
              className='w-full bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out'
            />
          </div>
          <div className='relative mb-4'>
            <label
              htmlFor='message'
              className='leading-7 text-sm text-gray-400'
            >
              Message
            </label>
            <textarea
              id='message'
              name='message'
              className='w-full bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 h-32 text-base outline-none text-gray-100 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out'
            />
          </div>
          <button
            type='submit'
            className='text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg'
          >
            Submit
          </button>
        </form>
        <div>
          <span className={`w-10 h-10 bg-${GMAIL_RED}`}>
            <MailIcon />
          </span>
        </div>
      </div>
    </section>
  );
}
