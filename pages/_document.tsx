import { Html, Head, Main, NextScript } from 'next/document'

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'ProfessionalService',
  name: 'Crux Studios',
  url: 'https://cruxstudios.dev',
  logo: 'https://cruxstudios.dev/favicon.svg',
  image: 'https://cruxstudios.dev/og-image.png',
  description:
    'Crux Studios is a full-stack software development studio based in Bangalore, India. We architect high-performance distributed systems, build zero-bloat web applications, and engineer software that scales.',
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Bangalore',
    addressRegion: 'Karnataka',
    addressCountry: 'IN',
  },
  areaServed: 'Worldwide',
  serviceType: [
    'Full-Stack Web Development',
    'Software Architecture',
    'UI/UX Engineering',
    'API Development',
    'Distributed Systems',
  ],
  priceRange: '$$',
  sameAs: [],
}

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        {/* Fonts */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&family=JetBrains+Mono:ital,wght@0,300;0,400;0,500;0,600;0,700;1,400&display=swap"
          rel="stylesheet"
        />

        {/* Core SEO */}
        <meta name="author" content="Crux Studios" />
        <meta name="theme-color" content="#08080e" />
        <meta
          name="description"
          content="Crux Studios is a full-stack software development studio based in Bangalore, India. We architect high-performance distributed systems, build zero-bloat web apps, and ship software that actually works."
        />
        <meta
          name="keywords"
          content="full-stack development studio, software engineering, web app development, React, Next.js, TypeScript, distributed systems, Bangalore, India, software studio"
        />
        <link rel="canonical" href="https://cruxstudios.dev" />

        {/* Google Search Console Verification */}
        <meta name="google-site-verification" content="Dn9ZQZVU270S1P9alfB1SrOWCp25VgjWhBZScT2NPtk" />

        {/* Open Graph */}
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Crux Studios" />
        <meta property="og:title" content="Crux Studios — Zero-bloat engineering" />
        <meta
          property="og:description"
          content="We understand the problem. We build the solution. Nothing more. Full-stack software studio based in Bangalore."
        />
        <meta property="og:url" content="https://cruxstudios.dev" />
        <meta property="og:image" content="https://cruxstudios.dev/og-image.png" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:image:alt" content="Crux Studios — Zero-bloat engineering" />
        <meta property="og:locale" content="en_US" />

        {/* Twitter / X Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Crux Studios — Zero-bloat engineering" />
        <meta
          name="twitter:description"
          content="We understand the problem. We build the solution. Nothing more. Full-stack software studio."
        />
        <meta name="twitter:image" content="https://cruxstudios.dev/og-image.png" />
        <meta name="twitter:image:alt" content="Crux Studios — Zero-bloat engineering" />

        {/* Icons */}
        <link rel="icon" href="/favicon.svg?v=3" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/favicon.svg?v=3" />

        {/* JSON-LD Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(jsonLd).replace(/</g, '\\u003c'),
          }}
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
