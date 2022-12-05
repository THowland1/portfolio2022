import type { NextPage } from 'next';
import Image from 'next/image';

const Home: NextPage = () => {
  return (
    <div className='bg-gray-800 inset-0 absolute overflow-auto'>
      <header className='text-gray-100 bg-gray-800 body-font h-[300px] relative'>
        <Image
          className='object-cover object-center opacity-20'
          alt='Sorted fruit, like how I sorted my API'
          layout='fill'
          src='/blog-header--sorting.jpeg'
          priority
        />
        <div className='absolute inset-0 flex justify-center items-center p-6 pb-16 flex-col  text-center'>
          <h1 className='text-3xl'>Separating Concerns</h1>
          <p className='text-xl opacity-70 mt-2'>
            Splitting my Sveltekit &amp; serverless function into
            multiple&nbsp;projects
          </p>
        </div>
      </header>

      <main className='container leading-6 mx-auto p-8 text-gray-300 bg-gray-900  body-font shadow-lg relative -top-16'>
        <div className='flex justify-evenly items-center'>
          <div>
            <h3>27th September</h3>
          </div>
          <div className='h-[30px] border border-l-0 border-gray-700'></div>
          <div className='bg-gray-800 text-gray-400 rounded-full px-[10px] py-[3px] text-sm'>
            heardlify
          </div>
        </div>
        <h3 className='text-lg font-semibold'>Intro</h3>
        <p>
          I migrated a svelte &amp; Netlify function project into multiple
          projects
        </p>
        <br />
        <p>
          I was approaching the limit of Heardlify project free tier - 125,000
          function calls per project per month
        </p>
        <br />
        <p>
          I ran out of ways to trim the fat (I recently eliminated the use of
          SSR in my SvelteKit app, so the Netlify SvelteKit adapter
          wouldn&apos;t run Netlify&apos;s internal render serverless function
          on each page load)
        </p>
        <br />
        <p>
          Caching wouldn&apos;t help me all too much, since the app is very
          variable, and of the 1000 plays a day, the most visited playlist pages
          were only getting visited around 30 times (a lot of the plays appear
          to be people challenging themselves), so a lot of the caching would be
          for single-use only, which elimintates the point.
        </p>
        <br />
        <p>
          My only hope was to separate the concerns, so the 10+ serverless
          functions I used weren&apos;t all piling into one quota
        </p>
        <br />
        <p>
          This also helps me as a growing engineer, as horizontal scaling is
          very much a skill I need for my professional career going forward
        </p>
        <br />
        <h3 className='text-lg font-semibold'>How?</h3>

        <p>I first tries to figure out what might cause the biggest dents</p>
        <br />
        <p>
          I had a few separate functions to sort through: one for generating OG
          images, some for getting stats, one for loading games, one for
          recordin games, and a few for authenticating with spotify
        </p>
        <br />
        <p>
          I couldn&apos;t separate too far, as staying thrifty on Netlify also
          means I can only have 1 concurrent build, so if I change the front and
          back end, one end will be deployed and expecting the other to be
          changed before the otherhas had the chance, now we&apos;re in{' '}
          <em>distributed systems land</em> where everything is backwards
          compatible between adjecent deploys (or I just accept the site will
          break for a few seconds every time I redeploy). The more projects I
          have, the longer this chain of one-at-a-time deploys is and the longer
          the broken-time is for code in the latest version of first deployed
          project wanting to communicate with the latest version of the last
          deployed one
        </p>
        <br />
        <p>
          I thought I&apos;d separate the worst offendors into small projects
          and the rest into a generic API
        </p>
        <br />
        <p>
          The worst offendors I imagined were search and og image generation
        </p>
        <br />
      </main>
    </div>
  );
};

export default Home;
