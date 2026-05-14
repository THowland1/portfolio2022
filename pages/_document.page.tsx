// pages/_document.js

import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
  render() {
    return (
      <Html lang="en" className="dark">
        <Head>
          {/*
           * Tells iOS / Safari (and other browsers that honour theme-color)
           * what colour to bleed under floating chrome like the iOS 26
           * Liquid Glass status bar / home indicator. Defaults to the
           * dark `bg-gray-900` because `<Html>` defaults to the `dark`
           * class; the inline script below keeps it in sync with the
           * theme actually applied (and ThemeToggle does the same when
           * the user flips the switch at runtime).
           */}
          <meta name="theme-color" content="#111827" />
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
                fetch('/api/pop-the-kettle-on').then(_ => localStorage.kettlePopped = true)
                
              }
          `,
            }}
          />
          <script
            id="darkTheme"
            dangerouslySetInnerHTML={{
              __html: `
          function checkDarkTheme() {

            var isLight = localStorage.theme === 'light';
            if (isLight) {
              document.documentElement.classList.remove('dark')
            } else {
              document.documentElement.classList.add('dark')
            }

            var themeColor = document.querySelector('meta[name="theme-color"]');
            if (themeColor) {
              themeColor.setAttribute('content', isLight ? '#f3f4f6' : '#111827');
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
