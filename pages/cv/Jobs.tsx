import {
  AcademicCapIcon,
  BeakerIcon,
  BriefcaseIcon,
  ComputerDesktopIcon,
  FlagIcon,
  MagnifyingGlassIcon,
  ShareIcon,
  ShieldExclamationIcon,
  TrophyIcon,
  UserGroupIcon,
} from "@heroicons/react/24/solid";
import React from "react";
import {
  AzurePlainIcon,
  DotnetcorePlainIcon,
  NextjsOriginalIcon,
  NodejsPlainIcon,
  ReactOriginalIcon,
  TypescriptPlainIcon,
  VuejsPlainIcon,
} from "../../util/dev-icons";
// import { projects } from "../data";

const Li = ({
  Icon,
  text,
}: {
  Icon: typeof BriefcaseIcon;
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
    title: "Jigsaw",
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
    title: "MoveGenius",
    Icon: BriefcaseIcon,
    role: "Senior developer",
    dates: "Jul 2023 - Present",
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
          Icon={ShieldExclamationIcon}
          text="Integrated with government and commercial APIs"
        />
        <Li
          Icon={ShieldExclamationIcon}
          text="Managed the design system/component library"
        />
        <Li
          Icon={ShieldExclamationIcon}
          text="Resolved live bugs and addressed customer requests in real-time"
        />
      </ul>
    ),
  },
  {
    title: "Komi",
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
          Icon={ShieldExclamationIcon}
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
          text='Worked with designers and analysts, turning user stories into code and participating in "three amigos" sessions'
        />
      </ul>
    ),
  },

  {
    title: "Previous roles",
    Icon: BriefcaseIcon,
    role: "Full-stack Software Engineer",
    dates: "Oct 2017 - Jul 2021",
    stack: [],
    description: null,
  },
];

export default function Jobs() {
  return (
    <div className="max-w-5xl mx-auto">
      <div className="relative">
        <ol>
          {jobs2.map((job, index) => (
            <li className="mb-9  last:mb-0" key={index}>
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
