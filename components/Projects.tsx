import { ArrowRightIcon, CodeBracketIcon } from "@heroicons/react/24/solid";
import Image from "next/image";

export const projects = [
  {
    title: (
      <span className="flex justify-center items-center">
        Mic Check{" "}
        {/* <span className="ml-2 bg-green-600 px-[6px] py-[0px] text-xs rounded-full relative ring-2 ring-green-500 text-white">
          New for 2023
        </span> */}
      </span>
    ),
    subtitle: "Svelte, Sveltekit & web-native audio APIs",
    description:
      "A tool to see and record from all of your devices microphones. Straight from the browser - no login or download needed!",
    image: "/mic-check.png",
    link: "https://mic.tomhowland.com",
  },
  {
    title: "Heardlify",
    subtitle: "Svelte, SvelteKit, and Serverless Functions",
    description: `A guessing game for any Spotify playlist! You like The Smiths? Try "This is The Smiths"! You like 80s? Try "All Out 80s"? If you have your own playlist, you can try that too!`,
    image: "/heardlify.png",
    link: "https://heardlify.app",
  },
  {
    title: "You Have To Burn The Rope",
    subtitle: "HTML Canvas & TS & Parcel",
    description:
      "You Have To Burn The Rope, a childhood-favourite Flash game remade from the ground up to run natively in the browser",
    image: "/youhavetoburntherope.png",
    link: "https://youhavetoburntherope.tomhowland.com",
  },
  {
    title: "GUID Generator",
    subtitle: "Raw HTML & JS",
    description: "A quick copy-to-clipboard GUID tool",
    image: "/guid-generator.png",
    link: "https://guid.tomhowland.com",
  },
];

export default function Projects() {
  return (
    <section
      id="projects"
      className="text-gray-500 dark:text-gray-400 bg-gray-100 dark:bg-gray-900 body-font"
    >
      <div className="container px-5 py-10 mx-auto text-center lg:px-40">
        <div className="flex flex-col w-full mb-20">
          <CodeBracketIcon className="mx-auto inline-block w-10 mb-4" />
          <h1 className="sm:text-4xl text-3xl font-medium title-font mb-4 text-gray-900 dark:text-white">
            Apps I&apos;ve Built
          </h1>
          <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
            Between working days, its always nice to itch that scratch of using
            new technologies and making something I can call my&nbsp;own.
          </p>
        </div>
        <div className="flex flex-wrap -m-4">
          {projects.map((project, i) => (
            <div
              key={project.image}
              className={`flex flex-wrap w-full mb-16 mt-16 justify-center items-center ${
                i % 2 === 0 ? "flex-row-reverse" : ""
              }`}
            >
              <div className="relative flex-[4] min-w-[240px]">
                <a
                  href={project.link}
                  className="relative block h-full w-full  transition-transform hover:scale-105"
                >
                  <Image
                    alt="gallery"
                    className="aspect-video"
                    src={project.image}
                    layout="fixed"
                    width={1200 / 4}
                    height={630 / 4}
                  />
                </a>
              </div>
              <div className="flex relative h-full  flex-[5] min-w-[300px]">
                <div className="px-8 py-10 relative z-9 w-full ">
                  <h2 className="tracking-widest text-sm title-font font-medium text-green-500 dark:text-green-400 mb-1">
                    {project.subtitle}
                  </h2>
                  <h1 className="title-font text-lg font-medium text-gray-900 dark:text-white mb-3">
                    {project.title}
                  </h1>
                  <p className="leading-relaxed">{project.description}</p>

                  <a
                    href={project.link}
                    className="group flex mt-3 justify-center items-center text-gray-500 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white underline"
                  >
                    Check it out!{" "}
                    <ArrowRightIcon className="ml-[3px] h-4 w-4 group-hover:translate-x-[2px] transition-transform" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
