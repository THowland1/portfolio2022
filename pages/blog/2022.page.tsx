import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import { PropsWithChildren } from 'react';

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>2022 in Review | Tom Howland</title>
      </Head>
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
            <h1 className='text-3xl'>2022 in Review</h1>
            <p className='text-xl opacity-70 mt-2'>Pet projects and new job</p>
          </div>
        </header>

        <main className='relative -top-16 text-gray-300'>
          <Paper>
            <div className='flex justify-evenly items-center'>
              <div>
                <h3>October 17th</h3>
              </div>
              <div className='h-[30px] border border-l-0 border-gray-700'></div>
              <div className='flex gap-2'>
                {['heardlify', 'komi'].map((badge) => (
                  <div
                    key={badge}
                    className='bg-gray-800 text-gray-400 rounded-full px-[10px] py-[3px] text-sm'
                  >
                    {badge}
                  </div>
                ))}
              </div>
            </div>
          </Paper>
          <Paper>
            <H3>Burner API</H3>

            <P>
              <span className='opacity-50'> 2021 - January 2022 </span>&bull;
              &nbsp;
              <span className='opacity-50'>
                <A href='https://api.tomhowland.com/'>api.tomhowland.com</A>
              </span>
            </P>
            <P>I added some still-hidden touches to the OData query builder</P>
            <P>
              <A href='https://youfound.netlify.app/'>YouFound</A>: Allow users
              to build a sticker sheet based on their configured items
            </P>
          </Paper>
          <Paper>
            <H3>YouFound</H3>
            <P>
              <span className='opacity-50'> 2021 - March 2022 </span>&bull;
              &nbsp;
              <span className='opacity-50'>
                <A href='https://youfound.netlify.app/'>youfound.netlify.app</A>
              </span>
            </P>
            <P>I added some still-hidden touches to the OData query builder</P>
          </Paper>
          <Paper>
            <H3>formik-path-builder</H3>
            <P>
              <span className='opacity-50'> Feb 2022 </span>&bull; &nbsp;
              <span className='opacity-50'>
                <A href='https://www.npmjs.com/package/formik-path-builder'>
                  formik-path-builder
                </A>
                &nbsp;(npm)
              </span>
            </P>
            <P>
              I was growing sick of how Formik validation was all based on
              static strings, which would break if the shape of a form object
              were to change.
            </P>
            <P>
              To fight this, I build something that, given a TS type (should be
              the type of <Code>initialValues</Code> in a Formik context), would
              enable you to build a string that would throw a compile-time
              warning if it didn&apos;t match (Note to self, could you just make
              a{' '}
              <Code>{`<Field name={'friends.1.name' as PathOf<FriendsFormShape>}>`}</Code>
              instead )
            </P>
          </Paper>
          <Paper>
            <H3>FlashNote</H3>
            <P>
              <span className='opacity-50'> March 2022 </span>&bull;&nbsp;
              <span className='opacity-50'>iOS (no preview)</span>&bull;&nbsp;
              <span className='opacity-50'>Abandoned</span>
            </P>
            <P>
              An app to give users flashcards in the form of scheduled native
              notifications{' '}
            </P>
          </Paper>
          THowland1/you-have-to-burn-the-rope TypeScript Apr 27
          THowland1/portfolio2022 TypeScript Apr 13 THowland1/wordle-maker HTML
          Apr 9 THowland1/gist-api
          <Paper>
            <H3>October</H3>
            <P>Made the blog</P>
            <P>Made this post</P>
          </Paper>
          <Paper>
            <H3>TODO</H3>
            <P>
              Create a condemned project page, so I can still see abandoned
              projects
            </P>
            <P>Give reason for each abandonment</P>
            <P>Do README for you-found</P>
            <P>
              Create a checklist that all projects should have (README, favicon,
              og tags)
            </P>
            <P>Make youfound domain agnostic</P>
            <P></P>
            <P></P>
            <P></P>
          </Paper>
        </main>
      </div>
    </>
  );
};

export default Home;

const Paper = ({ children }: PropsWithChildren<{}>) => (
  <div className='container mx-auto p-8 bg-gray-900  shadow-lg relative mb-4'>
    {children}
  </div>
);

const H3 = ({ children }: PropsWithChildren<{}>) => (
  <h3 className='text-lg font-semibold '>{children}</h3>
);

const P = ({ children }: PropsWithChildren<{}>) => (
  <p className=' font-light leading-8  text-base  '>{children}</p>
);
const Code = ({ children }: PropsWithChildren<{}>) => (
  <code className='font-light leading-8  text-sm bg-gray-800 p-1 '>
    {children}
  </code>
);
const A = ({ children, href }: PropsWithChildren<{ href: string }>) => (
  <a
    href={href}
    className=' font-light leading-8  text-base underline underline-offset-1 hover:decoration-2 decoration-1'
  >
    {children}
  </a>
);
