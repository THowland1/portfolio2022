import {
  AcademicCapIcon,
  BeakerIcon,
  BoltIcon,
  BookOpenIcon,
  BriefcaseIcon,
  CalculatorIcon,
  ChatBubbleLeftIcon,
  ComputerDesktopIcon,
  FlagIcon,
  LinkIcon,
  MagnifyingGlassIcon,
  PencilIcon,
  PuzzlePieceIcon,
  ShareIcon,
  ShieldCheckIcon,
  SparklesIcon,
  StarIcon,
  TrophyIcon,
  UserGroupIcon,
  UserIcon,
} from "@heroicons/react/24/solid";
import Link from "next/link";
import React from "react";
import {
  AngularjsPlainIcon,
  AzurePlainIcon,
  DotnetcorePlainIcon,
  MatlabPlainIcon,
  MicrosoftsqlserverPlainIcon,
  NextjsOriginalIcon,
  NodejsPlainIcon,
  ReactOriginalIcon,
  TypescriptPlainIcon,
  VuejsPlainIcon,
} from "../util/dev-icons";
// import { projects } from "../data";

const Li = ({
  Icon,
  text,
}: {
  Icon: typeof AcademicCapIcon;
  text: React.ReactNode;
}) => (
  <li className="my-2 flex">
    <Icon className="w-4 h-4 my-1 mr-2 inline text-green-600" />
    <span className="flex-1">{text}</span>
  </li>
);

const tailwindGreen500 = "rgb(34 197 94)";
// TODO - dont import all heroicons

const jobs2 = [
  {
    title: (
      <Link href="https://jigsawcreate.com" passHref>
        <a className="flex items-center hover:underline group">
          Jigsaw
          <LinkIcon className="w-4 h-4 text-gray-500 ml-1 group-hover:text-green-500 dark:group-hover:text-green-700 scale-100 group-hover:scale-110 transition-none" />
        </a>
      </Link>
    ),
    Icon: BriefcaseIcon,
    role: "Full-stack developer",
    dates: "Jul 2024 - Present",
    stack: [
      { Icon: TypescriptPlainIcon, name: "TypeScript" },
      { Icon: VuejsPlainIcon, name: "Vue.js" },
      { Icon: DotnetcorePlainIcon, name: ".NET" },
    ],
    description: (
      <ul>
        <Li
          Icon={ComputerDesktopIcon}
          text="Developing a diagramming tool for the UKs top law and accountancy firms"
        />
        <Li
          Icon={TrophyIcon}
          text="Championing unit tests in both the frontend and backend"
        />
        <Li Icon={FlagIcon} text="Developed the feature flagging system" />
        <Li
          Icon={ShareIcon}
          text="Created a tool for parsing and processing Microsoft Office files"
        />
      </ul>
    ),
  },
  {
    title: (
      <Link href="https://movegenius.com" passHref>
        <a className="flex items-center hover:underline group">
          MoveGenius
          <LinkIcon className="w-4 h-4 text-gray-500 ml-1 group-hover:text-green-500 dark:group-hover:text-green-700 scale-100 group-hover:scale-110 transition-none" />
        </a>
      </Link>
    ),
    Icon: BriefcaseIcon,
    role: "Senior developer",
    dates: "Jul 2023 - Jun 2024",
    stack: [
      { Icon: TypescriptPlainIcon, name: "TypeScript" },
      { Icon: ReactOriginalIcon, name: "React" },
      { Icon: NextjsOriginalIcon, name: "Next.js" },
      { Icon: NodejsPlainIcon, name: "Node.js" },
      { Icon: DotnetcorePlainIcon, name: ".NET" },
    ],
    description: (
      <ul>
        <Li
          Icon={ComputerDesktopIcon}
          text="Developed a platform to expedite property sales for estate agents and sellers"
        />
        <Li
          Icon={UserGroupIcon}
          text="Worked closely with management on planning and estimating engineering projects"
        />
        <Li
          Icon={ShareIcon}
          text="Integrated with government and commercial APIs"
        />
        <Li
          Icon={PuzzlePieceIcon}
          text="Managed the design system/component library"
        />
        <Li
          Icon={BoltIcon}
          text="Resolved live bugs and addressed customer requests in real-time"
        />
      </ul>
    ),
  },
  {
    title: (
      <Link href="https://komi.io" passHref>
        <a className="flex items-center hover:underline group">
          Komi
          <LinkIcon className="w-4 h-4 text-gray-500 ml-1 group-hover:text-green-500 dark:group-hover:text-green-700 scale-100 group-hover:scale-110 transition-none" />
        </a>
      </Link>
    ),
    Icon: BriefcaseIcon,
    role: "Full Stack engineer",
    dates: "Oct 2022 - Jul 2023",
    stack: [
      { Icon: TypescriptPlainIcon, name: "TypeScript" },
      { Icon: ReactOriginalIcon, name: "React" },
      { Icon: NextjsOriginalIcon, name: "Next.js" },
      { Icon: NodejsPlainIcon, name: "Node.js" },
    ],
    description: (
      <ul>
        <Li
          Icon={ComputerDesktopIcon}
          text="Developed a premium landing page builder for the world's top talent"
        />
        <Li Icon={UserGroupIcon} text="Ran meetings and organised sprints" />
        <Li
          Icon={PuzzlePieceIcon}
          text="Integrated with 3rd-parties such as Stripe and Segment"
        />
      </ul>
    ),
  },
  {
    title: "Trilogy Education Services",
    Icon: AcademicCapIcon,
    role: "Teaching Assistant",
    dates: "Oct 2021 - May 2022",
    stack: [],
    description: (
      <>
        <p>Assisted in a Zoom-hosted full-stack bootcamp</p>
        <p>
          Guided students from zero-to-hero over a part-time (but intense) 6
          month bootcamp
        </p>
      </>
    ),
  },
  {
    title: "Boomin",
    Icon: BriefcaseIcon,
    role: "Full Stack engineer",
    dates: "Jul 2021 - Oct 2022",
    stack: [
      { Icon: TypescriptPlainIcon, name: "TypeScript" },
      { Icon: ReactOriginalIcon, name: "React" },
      { Icon: NextjsOriginalIcon, name: "Next.js" },
      { Icon: DotnetcorePlainIcon, name: ".NET" },
      { Icon: AzurePlainIcon, name: "Azure DevOps" },
    ],
    description: (
      <ul>
        <Li
          Icon={ComputerDesktopIcon}
          text="Developed the agent-facing tools of a nationwide property portal"
        />
        <Li Icon={MagnifyingGlassIcon} text="Peer reviewed teammates’ code" />
        <Li
          Icon={BeakerIcon}
          text="Strictly adhered to the principles of test-driven development (TDD)"
        />

        <Li Icon={ShareIcon} text="Worked with a microservice architecture" />
        <Li
          Icon={UserGroupIcon}
          text='Worked with designers and analysts, turning user stories into code and paticipating in "three amigos" sessions'
        />
      </ul>
    ),
  },
  {
    title: "Depotnet",
    Icon: BriefcaseIcon,
    role: "Software Engineer",
    dates: "Feb 2020 - Jul 2021",
    stack: [
      { Icon: TypescriptPlainIcon, name: "TypeScript" },
      { Icon: AngularjsPlainIcon, name: "Angular" },
      { Icon: DotnetcorePlainIcon, name: ".NET" },
      { Icon: MicrosoftsqlserverPlainIcon, name: "SQL" },
      { Icon: AzurePlainIcon, name: "Azure DevOps" },
    ],
    description: (
      <ul>
        <Li
          Icon={ComputerDesktopIcon}
          text="Developed civil engineering management systems for top UK companies"
        />
        <Li Icon={MagnifyingGlassIcon} text="Peer reviewed teammates’ code" />
        <Li
          Icon={UserIcon}
          text="Architected entire projects and sub-projects to work with existing
          solutions"
        />
        <Li
          Icon={AcademicCapIcon}
          text="Gave talks on potential tooling within weekly developer meetings"
        />
        <Li
          Icon={UserGroupIcon}
          text="Worked closely with business analysts to create exactly what the
          users need"
        />
        <Li
          Icon={StarIcon}
          text="Achievement: Implemented a data warehouse with an API to allow clients
          to integrate their data into their own BI platforms"
        />
      </ul>
    ),
  },
  {
    title: "Enable",
    Icon: BriefcaseIcon,
    role: "Software Developer",
    stack: [
      { Icon: TypescriptPlainIcon, name: "TypeScript" },
      { Icon: AngularjsPlainIcon, name: "Angular" },
      { Icon: DotnetcorePlainIcon, name: ".NET" },
      { Icon: MicrosoftsqlserverPlainIcon, name: "SQL" },
      { Icon: AzurePlainIcon, name: "Azure DevOps" },
    ],
    dates: "Oct 2017 - Feb 2020",
    description: (
      <ul>
        <Li
          Icon={ComputerDesktopIcon}
          text="Developed bespoke internal systems and SaaS products for leading UK companies"
        />
        <Li
          Icon={BookOpenIcon}
          text="Worked towards client specifications and in-house public API
          specifications"
        />
        <Li
          Icon={ChatBubbleLeftIcon}
          text="Interacted with live clients/UAT users via a helpdesk ticketing
          system, resolving issues in a timely and professional manner"
        />
        <Li
          Icon={PencilIcon}
          text="Maintained and wrote living specifications and release notes"
        />
        <Li
          Icon={BeakerIcon}
          text="Performed cross-browser and cross-device manual testing"
        />
        <Li
          Icon={BeakerIcon}
          text="Adhered to the principles of test-driven development (TDD)"
        />
        <Li
          Icon={ShieldCheckIcon}
          text="Adhered to OWASP’s standards of security"
        />
        <Li
          Icon={MagnifyingGlassIcon}
          text="Peer
          reviewed teammates’ code"
        />
        <Li
          Icon={UserGroupIcon}
          text="Worked in an agile, team-based environment, meeting set deadlines"
        />
        <Li
          Icon={StarIcon}
          text="Achievement: Implemented a script for obtaining the hierarchy of items
          in a self-referencing SQL table while avoiding infinite loops"
        />
      </ul>
    ),
  },
  {
    title: "University of Manchester",
    Icon: AcademicCapIcon,
    role: "MPhys in Physics",
    dates: "Sept 2014 - May 2017",
    stack: [{ Icon: MatlabPlainIcon, name: "MATLAB" }],
    description: (
      <ul>
        <Li
          Icon={CalculatorIcon}
          text="Worked with complex mathematical concepts on a regular basis"
        />
        <Li Icon={BeakerIcon} text="Gathered and processed lab data" />
        <Li
          Icon={SparklesIcon}
          text="Created GUIs and descriptive display graphics for simulations"
        />

        <Li
          Icon={StarIcon}
          text="Achievement: Nominated for the Tessella Prize for Software following
         development of a 3D ray-tracing Monte Carlo simulation program"
        />
      </ul>
    ),
  },
];

export default function Jobs() {
  return (
    <section
      id="jobs"
      className="text-gray-500 dark:text-gray-400 bg-gray-100 dark:bg-gray-900 body-font"
    >
      <div className="max-w-5xl px-5 py-10 mx-auto lg:px-40">
        <div className="flex flex-col text-center  w-full mb-20">
          <BriefcaseIcon className="mx-auto inline-block w-10 mb-4" />
          <h1 className="sm:text-4xl text-3xl font-medium title-font mb-4 text-gray-900 dark:text-white">
            A Brief History of Tom
          </h1>
          <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
            What have I been up to in all of these years in the world of coding?
          </p>
        </div>
        <div className="relative border-l border-gray-300 dark:border-gray-700">
          <ol>
            {jobs2.map((job, index) => (
              <li className="mb-10 ml-6 last:mb-0" key={index}>
                <span className="flex absolute -left-3 justify-center items-center w-6 h-6 bg-green-100 dark:bg-green-900 rounded-full ring-8 ring-green-500/10 dark:ring-gray-800">
                  <job.Icon className="w-4 h-4 text-green-500" />
                </span>
                <h3 className="flex items-center mb-1 text-lg font-semibold text-gray-900 dark:text-white">
                  {job.title}
                </h3>
                <div className="block mb-2 text-sm font-normal leading-none text-gray-500 dark:text-gray-400">
                  {job.role}&nbsp;&bull;&nbsp;{job.dates}
                </div>
                <div>
                  <ul className="flex flex-wrap gap-1">
                    {job.stack.map((tool, index) => (
                      <li
                        key={index}
                        className="inline-flex items-center bg-green-500/10 text-gray-900 dark:text-white/60 px-2 py-[4px] rounded-md text-sm gap-1"
                      >
                        <span>
                          <tool.Icon color="rgb(34 197 94)" />
                        </span>
                        <span>{tool.name}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="mb-4 text-base font-normal text-gray-500">
                  {job.description}
                </div>
              </li>
            ))}
          </ol>
          <span className="relative h-2.5 w-2.5 rounded-md block bg-gray-300 dark:bg-gray-700 -left-[.325rem]" />
        </div>
      </div>
    </section>
  );
}
