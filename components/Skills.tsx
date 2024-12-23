// src/components/Skills.js

import { CheckBadgeIcon, CpuChipIcon } from "@heroicons/react/24/solid";
// import { skills } from '../data';

const skills: string[] = [
  "React / NextJS",
  "Typescript",
  "C# / .Net",
  "Node",
  "MongoDB",
  "React Native",
  "SQL",
  "Svelte / SvelteKit",
];

export default function Skills() {
  return (
    <section id="skills">
      <div className="container px-5 py-10 mx-auto">
        <div className="text-center mb-20">
          <CpuChipIcon className="w-10 inline-block mb-4" />
          <h1 className="sm:text-4xl text-3xl font-medium title-font text-gray-900 dark:text-white mb-4">
            Skills &amp; Technologies
          </h1>
          <p className="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto">
            A life of working, playing, and reading has lead me to rub shoulders
            with these lovely frameworks, languages, and concepts
          </p>
        </div>
        <div className="flex flex-wrap lg:w-4/5 sm:mx-auto sm:mb-2 -mx-2">
          {skills.map((skill) => (
            <div key={skill} className="p-2 sm:w-1/2 w-full">
              <div className="bg-white dark:bg-gray-800 rounded flex p-4 h-full items-center shadow-md">
                <CheckBadgeIcon className="text-green-400 w-6 h-6 flex-shrink-0 mr-4" />
                <span className="title-font font-medium text-gray-900 dark:text-white">
                  {skill}
                </span>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center mt-4 text-gray-500">
          and many, many more...
        </div>
      </div>
    </section>
  );
}
