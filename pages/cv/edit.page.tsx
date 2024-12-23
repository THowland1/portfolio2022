import {
  EnvelopeIcon,
  GlobeAltIcon,
  PhoneIcon,
} from "@heroicons/react/24/outline";
import Head from "next/head";
import { FC, PropsWithChildren } from "react";
import Jobs from "./Jobs";

const width = "17rem";
const topheight = "2.3cm";

type Skill = { name: string; duration: string | null };
const skills: Skill[] = [
  { name: "React", duration: "4 years" },
  { name: "NextJS", duration: "4 years" },
  { name: "Typescript", duration: "7 years" },
  { name: "C# / .Net", duration: "6 years" },
  { name: "Node", duration: "4 years" },
  { name: "SQL", duration: "5 years" },
  { name: "MongoDB", duration: "Hobby projects" },
  { name: "React Native", duration: "Hobby projects" },
];

const H2: FC<PropsWithChildren<{}>> = ({ children }) => {
  return (
    <>
      <h2 className="uppercase tracking-2">{children}</h2>
      <hr className="border-t-1 w-[15mm] mb-2 border-inherit" />
    </>
  );
};

const CvPage = () => {
  return (
    <div
      style={{
        display: "flex",
        height: "29.7cm",
        width: "21cm",
      }}
    >
      <Head>
        <style
          dangerouslySetInnerHTML={{
            __html: `:root {
    font-size: 10pt;
}`,
          }}
        ></style>
      </Head>
      <div className="bg-slate-700 text-white flex flex-col" style={{ width }}>
        <div
          style={{
            height: topheight,
            width,
            position: "relative",
          }}
        >
          <div className="relative w-full h-full"></div>
        </div>
        <div className="py-4 px-6  ">
          <H2>Skills</H2>

          {skills.map((skill, i) => (
            <div className="py-1" key={i}>
              {skill.name}{" "}
              {skill.duration ? (
                <span className="opacity-50">{skill.duration}</span>
              ) : null}
            </div>
          ))}
        </div>
        <div className="py-4 px-6  ">
          <H2>Education</H2>
          <div>MPhys in Physics</div>
          <div className="opacity-50">University of Manchester</div>
          <div className="opacity-50">2013-2017</div>
        </div>

        <div className="flex-1"></div>

        <div className="py-4 pl-6 pb-9 ">
          <H2>Contact</H2>

          <div className="flex">
            <EnvelopeIcon className="w-4 h-4 my-1 mr-2 inline " />
            <div className="flex-1">tomhowland9@gmail.com</div>
          </div>
          <div className="flex">
            <PhoneIcon className="w-4 h-4 my-1 mr-2 inline " />
            <div className="flex-1">07722 681180</div>
          </div>
          <div className="flex">
            <GlobeAltIcon className="w-4 h-4 my-1 mr-2 inline " />
            <div className="flex-1">tomhowland.com</div>
          </div>
        </div>
      </div>
      <div className="flex-1">
        <div style={{ display: "flex", flexDirection: "column" }}>
          {/* <div className='p-4 flex-1'>
            <H2>Profile</H2>
            <p>
              {' '}
              After 7 years of full-time experience and countless evenings of
              hobby-code, I am a full-stack force to be reckoned with on
              projects of all sizes
            </p>
          </div> */}
          <div className="bg-slate-700 text-white p-4">
            <div className="text-4xl"> Tom Howland</div>
            <div className="text-2xl">Senior Full-Stack Software Engineer</div>
          </div>
        </div>
        <div className="p-4">
          <H2>Work Experience</H2>
          <Jobs />
        </div>
      </div>
    </div>
  );
};

export default CvPage;
