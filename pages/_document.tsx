import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=JetBrains+Mono:ital,wght@0,300;0,400;0,500;0,600;0,700;1,400&display=swap"
          rel="stylesheet"
        />
        <meta name="theme-color" content="#08080e" />
        <meta name="author" content="Crux Studios" />
        <meta
          name="description"
          content="Crux Studios — we understand the problem first, then we build the solution. Full-stack development studio building web apps and software that actually works."
        />
        <meta name="keywords" content="web development, software studio, full stack, React, Next.js, TypeScript, backend, UI/UX" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Crux Studios — Software that fits." />
        <meta property="og:description" content="We understand the problem. We build the solution. Nothing more." />
        <meta property="og:url" content="https://cruxstudios.dev" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Crux Studios" />
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
