import styles from './Footer.module.css'

export default function Footer(): JSX.Element {
  return (
    <footer className={styles.footer}>
      <div className={`${styles.inner} container`}>
        <div className={styles.left}>
          {/* X logo */}
          <svg viewBox="0 0 100 120" fill="none" className={styles.logo}>
            <line x1="8" y1="8" x2="92" y2="92" stroke="currentColor" strokeWidth="9" strokeLinecap="square"/>
            <line x1="92" y1="8" x2="8" y2="92" stroke="currentColor" strokeWidth="9" strokeLinecap="square"/>
            <line x1="65" y1="65" x2="100" y2="118" stroke="currentColor" strokeWidth="9" strokeLinecap="square"/>
          </svg>
          <div>
            <p className={`${styles.studioName} mono`}>CRUX STUDIOS</p>
            <p className={`${styles.tagline} mono`}>Software that fits.</p>
          </div>
        </div>

        <div className={styles.right}>
          <p className={`${styles.cheeky} mono`}>
            This site? Yeah, we built this too.
          </p>
          <p className={`${styles.copy} mono`}>
            © {new Date().getFullYear()} Crux Studios. Bangalore, India.
          </p>
        </div>
      </div>

      {/* Top border gradient */}
      <div className={styles.topBorder} aria-hidden="true" />
    </footer>
  )
}
