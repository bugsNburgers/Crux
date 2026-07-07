import styles from './Footer.module.css'

export default function Footer(): JSX.Element {
  return (
    <footer className={styles.footer}>
      <div className={`${styles.inner} container`}>
        <div className={styles.left}>
          <img src="/favicon.svg" className={styles.logo} alt="Crux Studios logo" />
          <div>
            <p className={`${styles.studioName} mono`}>CRUX STUDIOS</p>
            <p className={`${styles.tagline} mono`}>Zero-bloat engineering.</p>
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
