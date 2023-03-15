// pages/_document.js

import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          <link
            href="https://fonts.googleapis.com/css2?family=Inter&display=swap"
            rel="stylesheet"
          />
          <script
            async
            src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}`}
          />
          <script
            dangerouslySetInnerHTML={{
              __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}', {
              page_path: window.location.pathname,
            });
          `,
            }}
          />
          <script
            async
            dangerouslySetInnerHTML={{
              __html: `
              if(!localStorage.kettlePopped) {
                fetch('/pop-the-kettle-on').then(_ => localStorage.kettlePopped = true)
                
              }
          `,
            }}
          />
          <script
            id="darkTheme"
            dangerouslySetInnerHTML={{
              __html: `
          function checkDarkTheme() {

            if (localStorage.theme === 'light') {
              document.documentElement.classList.remove('dark')
            } else {
              document.documentElement.classList.add('dark')
            }
            
            
          }
          checkDarkTheme()
          `,
            }}
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
