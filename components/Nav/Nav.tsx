import { useEffect, useState } from 'react'
import styles from './Nav.module.css'

const NAV_ITEMS = [
  { label: 'Work', href: '#projects' },
  { label: 'Services', href: '#services' },
  { label: 'Team', href: '#team' },
  { label: 'Process', href: '#process' },
  { label: 'Contact', href: '#contact' },
]

export default function Nav(): JSX.Element {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 80)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <nav className={`${styles.nav} ${scrolled ? styles.scrolled : ''}`} aria-label="Main navigation">
      <div className={`${styles.inner} container`}>
        {/* Logo */}
        <a href="#hero" className={styles.logoLink} aria-label="Crux Studios home">
          <svg viewBox="0 0 100 120" fill="none" className={styles.logo}>
            <line x1="8" y1="8" x2="92" y2="92" stroke="currentColor" strokeWidth="9" strokeLinecap="square"/>
            <line x1="92" y1="8" x2="8" y2="92" stroke="currentColor" strokeWidth="9" strokeLinecap="square"/>
            <line x1="65" y1="65" x2="100" y2="118" stroke="currentColor" strokeWidth="9" strokeLinecap="square"/>
          </svg>
          <span className={`${styles.logoText} mono`}>CRUX</span>
        </a>

        {/* Nav links */}
        <ul className={styles.links} role="list">
          {NAV_ITEMS.map(item => (
            <li key={item.href}>
              <a href={item.href} className={`${styles.link} mono`}>{item.label}</a>
            </li>
          ))}
        </ul>

        {/* CTA */}
        <a href="#contact" className={`${styles.cta} mono`}>
          Hire us
        </a>
      </div>
    </nav>
  )
}
