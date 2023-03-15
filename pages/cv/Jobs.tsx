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
  ClockIcon,
  ShieldExclamationIcon,
} from "@heroicons/react/solid";
import React from "react";
import {
  AngularjsPlainIcon,
  AzurePlainIcon,
  DotnetcorePlainIcon,
  MicrosoftsqlserverPlainIcon,
  NextjsOriginalIcon,
  ReactOriginalIcon,
  TypescriptPlainIcon,
  NodejsPlainIcon,
} from "../../util/dev-icons";
// import { projects } from "../data";

const Li = ({
  Icon,
  text,
}: {
  Icon: (props: React.ComponentProps<"svg">) => JSX.Element;
  text: React.ReactNode;
}) => (
  <li className="my-1 flex">
    {/* <Icon className="w-4 h-4 my-1 mr-2 inline text-green-600" /> */}
    &#8211;&nbsp;
    <span className="flex-1">{text}</span>
  </li>
);

const tailwindGreen500 = "rgb(34 197 94)";
// TODO - dont import all heroicons

const jobs2 = [
  {
    title: "Komi",
    Icon: BriefcaseIcon,
    role: "Full Stack engineer",
    dates: "Oct 2022 - Present",
    stack: [
      { Icon: TypescriptPlainIcon, name: "TypeScript" },
      { Icon: ReactOriginalIcon, name: "React" },
      { Icon: NextjsOriginalIcon, name: "Next.js" },
      { Icon: NodejsPlainIcon, name: "Node.js" },
    ],
    description: (
      <ul>
        <Li
          Icon={DesktopComputerIcon}
          text="Developing a premium landing page builder for the world's top talent"
        />
        <Li
          Icon={UserGroupIcon}
          text="Running meetings and organising sprints as a scrum master"
        />
        <Li
          Icon={ShieldExclamationIcon}
          text="Diagnosing and fixing production issues"
        />
      </ul>
    ),
  },
  {
    title: "Boomin",
    Icon: BriefcaseIcon,
    role: "Full-Stack Software Engineer",
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
          Icon={DesktopComputerIcon}
          text="Developed the agent-facing tools of a nationwide property portal"
        />
        <Li Icon={SearchIcon} text="Peer reviewed teammates’ code" />
        <Li
          Icon={BeakerIcon}
          text="Strictly adhered to the principles of test-driven development (TDD)"
        />

        <Li Icon={ShareIcon} text="Worked with a microservice architecture" />
        <Li
          Icon={UserGroupIcon}
          text='Worked with designers and analysts, turning user stories into code and participating in "three amigos" sessions'
        />
      </ul>
    ),
  },
  {
    title: "Trilogy Education Services",
    Icon: AcademicCapIcon,
    role: "Teaching Assistant",
    dates: "Oct 2021 - Present",
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
    title: "Depotnet",
    Icon: BriefcaseIcon,
    role: "Full-Stack Software Engineer",
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
          Icon={DesktopComputerIcon}
          text="Developed civil engineering management systems for top UK companies"
        />
        <Li Icon={SearchIcon} text="Peer reviewed teammates’ code" />
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
    role: "Full-Stack Software Engineer",
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
          Icon={DesktopComputerIcon}
          text="Developed bespoke internal systems and SaaS products for leading UK companies"
        />
        <Li
          Icon={BookOpenIcon}
          text="Worked towards client specifications and in-house public API
          specifications"
        />
        <Li
          Icon={ChatIcon}
          text="Interacted with live clients/UAT users via a helpdesk ticketing
          system, resolving issues in a timely and professional manner"
        />
        <Li
          Icon={ShieldCheckIcon}
          text="Adhered to OWASP’s standards of security"
        />
      </ul>
    ),
  },
];

export default function Jobs() {
  return (
    <div className="max-w-5xl mx-auto">
      <div className="relative">
        <ol>
          {jobs2.map((job, index) => (
            <li className="mb-10  last:mb-0" key={index}>
              {/* <span className='flex absolute -left-3 justify-center items-center w-6 h-6 bg-green-100  rounded-full'>
                <job.Icon className='w-4 h-4 text-green-500' />
              </span> */}
              <h2 className="flex items-center mb-1  font-semibold text-gray-900">
                {job.title}
              </h2>
              <div className="block mb-2 font-normal leading-none text-gray-500">
                {job.role}&nbsp;&bull;&nbsp;{job.dates}
              </div>
              <div>
                {!!job.stack.length && (
                  <ul className="flex flex-wrap gap-1">
                    {job.stack.map((tool, index) => (
                      <li
                        key={index}
                        className="first:pl-0 inline-flex items-center  text-gray-900  px-2 py-[4px] rounded-md gap-1"
                      >
                        <span>
                          <tool.Icon color="#334155" />
                        </span>
                        <span>{tool.name}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
              <div className="mb-4 font-normal text-gray-900">
                {job.description}
              </div>
            </li>
          ))}
        </ol>
      </div>
    </div>
  );
}
