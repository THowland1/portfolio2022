// pages/_document.js

import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
  render() {
    return (
      <Html lang="en" className="dark">
        <Head>
          {/* theme-color tells iOS 26 Liquid Glass what colour to blend against */}
          <meta id="theme-color-meta" name="theme-color" content="#111827" />
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
            var isDark = localStorage.theme !== 'light';
            if (isDark) {
              document.documentElement.classList.add('dark');
            } else {
              document.documentElement.classList.remove('dark');
            }
            var meta = document.getElementById('theme-color-meta');
            if (meta) meta.setAttribute('content', isDark ? '#111827' : '#f3f4f6');
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
