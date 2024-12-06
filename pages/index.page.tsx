import type { NextPage } from "next";
import Head from "next/head";
import About from "../components/About";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import Jobs from "../components/Jobs";
import Navbar from "../components/Navbar";
import Projects from "../components/Projects";
import Skills from "../components/Skills";
import Snow from "../components/Snow";
import Technologies from "../components/Technologies";
import { isDecember } from "../util/is-december";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Tom Howland | Full-stack developer in Warwickshire</title>
        <meta charSet="utf-8" />
        <meta property="og:title" content="Tom Howland" />
        <meta name="author" content="Tom Howland" />
        <meta property="og:locale" content="en_GB" />
        <meta
          name="description"
          content="Full-stack developer in Warwickshire"
        />
        <meta
          property="og:description"
          content="Full-stack developer in Warwickshire"
        />
        <meta property="og:url" content="https://tomhowland.com" />
        <meta property="og:site_name" content="Tom Howland" />
        <meta
          property="og:image"
          content="https://tomhowland.com/og-image.png"
        />
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:site" content="@tomdoestweet" />
        <meta name="twitter:creator" content="@tomdoestweet" />
        <meta name="twitter:title" content="Tom Howland" />

        <meta
          name="twitter:description"
          content="After 7 years of full-time experience and countless evenings of hobby-code, I am a full-stack force to be reckoned with on projects of all sizes."
        />
        <meta name="twitter:image" content="/og-image.png" />
        <meta name="twitter:image:alt" content="Tom Howland" />

        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="absolute inset-0 z-10 pointer-events-none">
        {isDecember && <Snow />}
      </div>
      <main className="text-gray-500 dark:text-gray-400 bg-gray-100 dark:bg-gray-900  body-font">
        <Navbar />
        <About />
        <Technologies />
        <Skills />
        <Jobs />
        <Projects />
        <Contact />
      </main>
      <footer className="text-gray-400 bg-gray-800 body-font ">
        <Footer />
      </footer>
    </>
  );
};

export default Home;
