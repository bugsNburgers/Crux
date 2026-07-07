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
        <div className="bottom-bg-text" aria-hidden="true">
          <span className="bg-text-main">CRU</span><span className="accent-x">X</span>
        </div>
      </div>
    </>
  )
}

export default Home
