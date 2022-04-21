import type { NextPage } from 'next';
import Head from 'next/head';
import Script from 'next/script';
import About from '../components/About';
import Contact from '../components/Contact';
import Footer from '../components/Footer';
import Jobs from '../components/Jobs';
import Navbar from '../components/Navbar';
import Projects from '../components/Projects';
import Skills from '../components/Skills';
import Technologies from '../components/Technologies';

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Tom Howland | Full-stack developer in Warwickshire</title>
        <meta charSet='utf-8' />
        <meta property='og:title' content='Tom Howland' />
        <meta name='author' content='Tom Howland' />
        <meta property='og:locale' content='en_GB' />
        <meta
          name='description'
          content='Full-stack developer in Warwickshire'
        />
        <meta
          property='og:description'
          content='Full-stack developer in Warwickshire'
        />
        <meta property='og:url' content='https://tomhowland.com' />
        <meta property='og:site_name' content='Tom Howland' />
        <meta property='og:image' content='/og-image.png' />
        <meta name='twitter:card' content='summary' />
        <meta name='twitter:site' content='@tomdoestweet' />
        <meta name='twitter:creator' content='@tomdoestweet' />
        <meta name='twitter:title' content='Tom Howland' />

        <meta
          name='twitter:description'
          content='After 4 years of full-time experience and countless evenings of hobby-code, I am a full-stack force to be reckoned with on projects of all sizes.'
        />
        <meta name='twitter:image' content='/og-image.png' />
        <meta name='twitter:image:alt' content='Tom Howland' />

        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Script
        id='darkTheme'
        dangerouslySetInnerHTML={{
          __html: `
          function checkDarkTheme() {

            if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
              document.documentElement.classList.add('dark')
            } else {
              document.documentElement.classList.remove('dark')
            }
            
            // Whenever the user explicitly chooses light mode
            localStorage.theme = 'light'
            
            // Whenever the user explicitly chooses dark mode
            localStorage.theme = 'dark'
            
            // Whenever the user explicitly chooses to respect the OS preference
            localStorage.removeItem('theme')
          }
          checkDarkTheme()
          `,
        }}
      />

      <main className='text-gray-500 dark:text-gray-400 bg-gray-100 dark:bg-gray-900  body-font'>
        <Navbar />
        <About />
        <Technologies />
        <Skills />
        <Jobs />
        <Projects />
        <Contact />
      </main>
      <footer className='text-gray-400 bg-gray-800 body-font '>
        <Footer />
      </footer>
    </>
  );
};

export default Home;
