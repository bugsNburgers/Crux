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
        <title>Crux Studios | Zero-bloat engineering</title>
        <meta name="description" content="Crux Studios - we understand the problem first, then we build the solution. Full-stack dev studio." />
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
          fontSize="clamp(8rem, 26vw, 30rem)"
          fontWeight={900}
          fontFamily="Inter, system-ui, -apple-system, sans-serif"
          baseIntensity={0.15}
          hoverIntensity={0.4}
          enableHover={true}
          fuzzRange={24}
          fps={60}
          direction="horizontal"
          className="bottom-bg-text"
          gradient={[
            { offset: 0, color: 'rgba(255, 255, 255, 0.025)' },
            { offset: 0.74, color: 'rgba(255, 255, 255, 0.025)' },
            { offset: 0.75, color: 'rgba(0, 229, 255, 0.08)' },
            { offset: 1.0, color: 'rgba(0, 229, 255, 0.08)' }
          ]}
          letterSpacing={-16}
        >
          CRUX
        </FuzzyText>
      </div>
    </>
  )
}

export default Home
