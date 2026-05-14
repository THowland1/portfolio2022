// pages/_document.js

import Document, { Html, Head, Main, NextScript } from "next/document";
import { DARK_THEME_COLOR, LIGHT_THEME_COLOR } from "../util/theme-colors";

class MyDocument extends Document {
  render() {
    return (
      <Html lang="en" className="dark">
        <Head>
          <meta name="theme-color" content={DARK_THEME_COLOR} />
          <meta name="color-scheme" content="dark light" />
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
          const darkThemeColor = '${DARK_THEME_COLOR}';
          const lightThemeColor = '${LIGHT_THEME_COLOR}';

          function updateThemeColor(isDark) {
            const themeColor = document.querySelector('meta[name="theme-color"]');
            if (themeColor) {
              themeColor.setAttribute('content', isDark ? darkThemeColor : lightThemeColor);
            }
          }

          function checkDarkTheme() {

            const isDark = localStorage.theme !== 'light';
            if (isDark) {
              document.documentElement.classList.add('dark')
            } else {
              document.documentElement.classList.remove('dark')
            }
            updateThemeColor(isDark);
            
            
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
