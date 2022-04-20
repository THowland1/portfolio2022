import {
  BriefcaseIcon,
  DesktopComputerIcon,
  BookOpenIcon,
  ChatIcon,
  PencilIcon,
  BeakerIcon,
  ShieldCheckIcon,
  SearchIcon,
  UserGroupIcon,
  StarIcon,
  UserIcon,
  AcademicCapIcon,
  CalculatorIcon,
  SparklesIcon,
  ShareIcon,
} from '@heroicons/react/solid';
import React from 'react';
import Image from 'next/image';
import {
  AngularjsPlainIcon,
  AzurePlainIcon,
  DotnetcorePlainIcon,
  MatlabPlainIcon,
  MicrosoftsqlserverPlainIcon,
  NextjsOriginalIcon,
  ReactOriginalIcon,
  TypescriptPlainIcon,
} from 'react-devicons';
// import { projects } from "../data";

const Li = ({
  Icon,
  text,
}: {
  Icon: (props: React.ComponentProps<'svg'>) => JSX.Element;
  text: React.ReactNode;
}) => (
  <li className='my-2 flex'>
    <Icon className='w-4 h-4 my-1 mr-2 inline text-green-600' />
    <span className='flex-1'>{text}</span>
  </li>
);

const tailwindGreen500 = 'rgb(34 197 94)';
// TODO - dont import all heroicons

const jobs2 = [
  {
    title: 'Boomin',
    Icon: BriefcaseIcon,
    role: 'Full Stack engineer',
    dates: 'Jul 2021 - Present',
    stack: [
      { Icon: TypescriptPlainIcon, name: 'TypeScript' },
      { Icon: ReactOriginalIcon, name: 'React' },
      { Icon: NextjsOriginalIcon, name: 'Next.js' },
      { Icon: DotnetcorePlainIcon, name: '.NET' },
      { Icon: AzurePlainIcon, name: 'Azure DevOps' },
    ],
    description: (
      <ul>
        <Li
          Icon={DesktopComputerIcon}
          text='Developing the agent-facing tools of a nationwide property portal'
        />
        <Li Icon={SearchIcon} text='Peer reviewing teammates’ code' />
        <Li
          Icon={BeakerIcon}
          text='Strictly adhering to the principles of test-driven development (TDD)'
        />

        <Li Icon={ShareIcon} text='Working with a microservice architecture' />
        <Li
          Icon={UserGroupIcon}
          text='Working with designers and analysts, turning user stories into code and paticipating in "three amigos" sessions'
        />
      </ul>
    ),
  },
  {
    title: 'Trilogy Education Services',
    Icon: AcademicCapIcon,
    role: 'Teaching Assistant',
    dates: 'Oct 2021 - Present',
    stack: [],
    description: (
      <>
        <p>Assisting in a Zoom-hosted full-stack bootcamp</p>
        <p>
          Guiding students from zero-to-hero over a part-time (but intense) 6
          month bootcamp
        </p>
      </>
    ),
  },
  {
    title: 'Depotnet',
    Icon: BriefcaseIcon,
    role: 'Software Engineer',
    dates: 'Feb 2020 - Jul 2021',
    stack: [
      { Icon: TypescriptPlainIcon, name: 'TypeScript' },
      { Icon: AngularjsPlainIcon, name: 'Angular' },
      { Icon: DotnetcorePlainIcon, name: '.NET' },
      { Icon: MicrosoftsqlserverPlainIcon, name: 'SQL' },
      { Icon: AzurePlainIcon, name: 'Azure DevOps' },
    ],
    description: (
      <ul>
        <Li
          Icon={DesktopComputerIcon}
          text='Developed civil engineering management systems for top UK companies'
        />
        <Li Icon={SearchIcon} text='Peer reviewed teammates’ code' />
        <Li
          Icon={UserIcon}
          text='Architected entire projects and sub-projects to work with existing
          solutions'
        />
        <Li
          Icon={AcademicCapIcon}
          text='Gave talks on potential tooling within weekly developer meetings'
        />
        <Li
          Icon={UserGroupIcon}
          text='Worked closely with business analysts to create exactly what the
          users need'
        />
        <Li
          Icon={StarIcon}
          text='Achievement: Implemented a data warehouse with an API to allow clients
          to integrate their data into their own BI platforms'
        />
      </ul>
    ),
  },
  {
    title: 'Enable',
    Icon: BriefcaseIcon,
    role: 'Software Developer',
    stack: [
      { Icon: TypescriptPlainIcon, name: 'TypeScript' },
      { Icon: AngularjsPlainIcon, name: 'Angular' },
      { Icon: DotnetcorePlainIcon, name: '.NET' },
      { Icon: MicrosoftsqlserverPlainIcon, name: 'SQL' },
      { Icon: AzurePlainIcon, name: 'Azure DevOps' },
    ],
    dates: 'Oct 2017 - Feb 2020',
    description: (
      <ul>
        <Li
          Icon={DesktopComputerIcon}
          text='Developed bespoke internal systems and SaaS products for leading UK companies'
        />
        <Li
          Icon={BookOpenIcon}
          text='Worked towards client specifications and in-house public API
          specifications'
        />
        <Li
          Icon={ChatIcon}
          text='Interacted with live clients/UAT users via a helpdesk ticketing
          system, resolving issues in a timely and professional manner'
        />
        <Li
          Icon={PencilIcon}
          text='Maintained and wrote living specifications and release notes'
        />
        <Li
          Icon={BeakerIcon}
          text='Performed cross-browser and cross-device manual testing'
        />
        <Li
          Icon={BeakerIcon}
          text='Adhered to the principles of test-driven development (TDD)'
        />
        <Li
          Icon={ShieldCheckIcon}
          text='Adhered to OWASP’s standards of security'
        />
        <Li
          Icon={SearchIcon}
          text='Peer
          reviewed teammates’ code'
        />
        <Li
          Icon={UserGroupIcon}
          text='Worked in an agile, team-based environment, meeting set deadlines'
        />
        <Li
          Icon={StarIcon}
          text='Achievement: Implemented a script for obtaining the hierarchy of items
          in a self-referencing SQL table while avoiding infinite loops'
        />
      </ul>
    ),
  },
  {
    title: 'University of Manchester',
    Icon: AcademicCapIcon,
    role: 'MPhys in Physics',
    dates: 'Sept 2014 - May 2017',
    stack: [{ Icon: MatlabPlainIcon, name: 'MATLAB' }],
    description: (
      <ul>
        <Li
          Icon={CalculatorIcon}
          text='Worked with complex mathematical concepts on a regular basis'
        />
        <Li Icon={BeakerIcon} text='Gathered and processed lab data' />
        <Li
          Icon={SparklesIcon}
          text='Created GUIs and descriptive display graphics for simulations'
        />

        <Li
          Icon={StarIcon}
          text='Achievement: Nominated for the Tessella Prize for Software following
         development of a 3D ray-tracing Monte Carlo simulation program'
        />
      </ul>
    ),
  },
];

export default function Jobs() {
  return (
    <section
      id='jobs'
      className='text-gray-500 dark:text-gray-400 bg-gray-100 dark:bg-gray-900 body-font'
    >
      <div className='max-w-5xl px-5 py-10 mx-auto lg:px-40'>
        <div className='flex flex-col text-center  w-full mb-20'>
          <BriefcaseIcon className='mx-auto inline-block w-10 mb-4' />
          <h1 className='sm:text-4xl text-3xl font-medium title-font mb-4 text-gray-900 dark:text-white'>
            A Brief History of Tom
          </h1>
          <p className='lg:w-2/3 mx-auto leading-relaxed text-base'>
            What have I been up to in all of these years in the world of coding?
          </p>
        </div>
        <div className='relative border-l border-gray-300 dark:border-gray-700'>
          <ol>
            {jobs2.map((job, index) => (
              <li className='mb-10 ml-6 last:mb-0' key={index}>
                <span className='flex absolute -left-3 justify-center items-center w-6 h-6 bg-green-100 dark:bg-green-900 rounded-full ring-8 ring-white dark:ring-gray-800'>
                  <job.Icon className='w-4 h-4 text-green-500' />
                </span>
                <h3 className='flex items-center mb-1 text-lg font-semibold text-gray-900 dark:text-white'>
                  {job.title}
                </h3>
                <div className='block mb-2 text-sm font-normal leading-none text-gray-500 dark:text-gray-400'>
                  {job.role}&nbsp;&bull;&nbsp;{job.dates}
                </div>
                <div>
                  <ul className='flex flex-wrap gap-1'>
                    {job.stack.map((tool, index) => (
                      <li
                        key={index}
                        className='inline-flex items-center bg-green-500/10 text-gray-900 dark:text-white/60 px-2 py-[4px] rounded-md text-sm gap-1'
                      >
                        <span>
                          <tool.Icon color='rgb(34 197 94)' />
                        </span>
                        <span>{tool.name}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className='mb-4 text-base font-normal text-gray-500'>
                  {job.description}
                </div>
              </li>
            ))}
          </ol>
          <span className='relative h-2.5 w-2.5 rounded-md block bg-gray-300 dark:bg-gray-700 -left-[.325rem]' />
        </div>
      </div>
    </section>
  );
}
