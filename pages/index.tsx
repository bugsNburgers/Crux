import type { NextPage } from 'next'
import Head from 'next/head'
import Hero from '@/sections/Hero/Hero'
import Philosophy from '@/sections/Philosophy/Philosophy'
import Services from '@/sections/Services/Services'
import Projects from '@/sections/Projects/Projects'
import Team from '@/sections/Team/Team'
import Process from '@/sections/Process/Process'
import TechStack from '@/sections/TechStack/TechStack'
import Contact from '@/sections/Contact/Contact'
import Footer from '@/sections/Footer/Footer'
import Nav from '@/components/Nav/Nav'
import FuzzyText from '@/components/FuzzyText/FuzzyText'

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Crux Studios | Full-Stack Software Development Studio — Bangalore, India</title>
        <meta
          name="description"
          content="Crux Studios is a full-stack software development studio. We architect distributed systems, build high-performance web apps, and ship zero-bloat software. Based in Bangalore, available worldwide."
        />
        <link rel="canonical" href="https://cruxstudios.dev" />
      </Head>

      <Nav />
      <main>
        <Hero />
        <Philosophy />
        <Services />
        <Projects />
        <Team />
        <Process />
        <TechStack />
      </main>

      <div className="contact-footer-wrap">
        <Contact />
        <Footer />
        <FuzzyText
          fontWeight={900}
          fontFamily="Inter, system-ui, -apple-system, sans-serif"
          baseIntensity={0.45}
          hoverIntensity={0.4}
          enableHover={false}
          fuzzRange={50}
          fps={60}
          direction="horizontal"
          className="bottom-bg-text"
          gradient={[
            { offset: 0, color: 'rgba(255, 255, 255, 0.05)' },
            { offset: 0.74, color: 'rgba(255, 255, 255, 0.05)' },
            { offset: 0.75, color: 'rgba(0, 229, 255, 0.16)' },
            { offset: 1.0, color: 'rgba(0, 229, 255, 0.16)' }
          ]}
        >
          CRUX
        </FuzzyText>
      </div>
    </>
  )
}

export default Home
