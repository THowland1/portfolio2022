import Image from "next/image";
import Link from "next/link";
import { isDecember } from "../util/is-december";
import TypeAnimation from "../util/TypeAnimation";

export default function About() {
  return (
    <section>
      <div className="container mx-auto flex px-10 py-20 md:flex-row flex-col items-center">
        <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          <h1 className="title-font whitespace-nowrap sm:text-4xl text-3xl mb-4 font-medium text-gray-900 dark:text-white">
            <span className="block mb-1"> Hi, I&apos;m Tom.</span>
            <span className="block leading-none">
              Full-stack <br className="block sm:hidden" />
              <TypeAnimation
                sequence={[
                  "engineer",
                  3000,
                  "bloke",
                  3000,
                  "guy",
                  3000,
                  "craftsman",
                  3000,
                  "chap",
                  3000,
                ]}
              />
              <span className="blink font-extralight text-4xl leading-[0]">
                |
              </span>
            </span>
          </h1>
          <br className="hidden lg:inline-block" />
          <p className="mb-8 leading-relaxed">
            After 7 years of full-time experience and countless evenings of
            hobby-code, I am a full-stack force to be reckoned with on projects
            of all sizes
          </p>
          <div className="flex justify-center gap-4 flex-wrap">
            <a
              href="#contact"
              className="flex-1 justify-center inline-flex whitespace-nowrap text-white bg-green-500 border-0 py-2 px-6 focus:outline-none hover:bg-green-600 rounded text-lg"
            >
              Get in Touch
            </a>
            <Link passHref href="/cv">
              <a className="flex-1 justify-center inline-flex whitespace-nowrap text-gray-500 dark:text-gray-400 bg-gray-200 dark:bg-gray-800 border-0 py-2 px-6 focus:outline-none hover:bg-gray-300 dark:hover:bg-gray-700 hover:text-gray-900 rounded text-lg">
                See My CV
              </a>
            </Link>
          </div>
        </div>
        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 relative h-72">
          {isDecember ? (
            <Image
              className="object-cover object-center rounded"
              alt="A picture of Tom Howland, with his lovely fiancée, Alex"
              layout="fill"
              src="/tom-howland-crimbo.jpg"
              priority
            />
          ) : (
            <Image
              className="object-cover object-center rounded"
              alt="A picture of Tom Howland, with his lovely fiancée, Alex"
              layout="fill"
              src="/tom-howland.jpg"
              priority
            />
          )}
        </div>
      </div>
    </section>
  );
}
