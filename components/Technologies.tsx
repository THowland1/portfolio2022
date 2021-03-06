// src/components/Projects.js

import React from 'react';
// import { projects } from "../data";
import Marquee from 'react-fast-marquee';

const tailwindGrey800 = [31, 41, 55] as [number, number, number];
export default function Projects() {
  return (
    <section
      id='technologies'
      className='text-gray-500 dark:text-gray-400 bg-white dark:bg-gray-800 body-font shadow'
    >
      <Marquee gradient={false}>
        {[
          'React',
          'Next',
          'Typescript',
          'Node.js',
          'Sass',
          'React Native',
          'Angular',
        ].map((tech, i) => (
          <div
            className='sm:text-3xl text-2xl font-light text-gray-600 whitespace-nowrap my-2 mx-8'
            key={i}
          >
            {tech}
          </div>
        ))}
      </Marquee>
    </section>
  );
}
