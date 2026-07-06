import { useState } from 'react'
import TextType from '@/components/TextType/TextType'
import styles from './Contact.module.css'

export default function Contact(): JSX.Element {
  const [copied, setCopied] = useState(false)
  const EMAIL = 'contact@cruxstudios.dev'

  const copyEmail = async () => {
    await navigator.clipboard.writeText(EMAIL)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <section className={`${styles.contact} section`} id="contact">
      {/* Ambient glow */}
      <div className={styles.ambientGlow} aria-hidden="true" />

      <div className="container">
        <div className={styles.inner}>
          <div className={styles.left}>
            <p className={`${styles.label} mono`}>/ GET IN TOUCH</p>
            <h2 className={`${styles.heading} mono`}>
              Let&apos;s build<br />
              <span className={styles.headingAccent}>something.</span>
            </h2>

            <div className={styles.taglineWrap}>
              <TextType
                text={[
                  'Drop us a message.',
                  'Tell us your problem.',
                  "We'll figure it out together.",
                  'No sales calls. Just conversation.',
                ]}
                typingSpeed={50}
                deletingSpeed={25}
                pauseDuration={2200}
                showCursor={true}
                cursorCharacter="_"
                className={styles.tagline}
              />
            </div>

            <div className={styles.emailRow}>
              <a href={`mailto:${EMAIL}`} className={styles.emailLink} aria-label="Send email">
                {EMAIL}
              </a>
              <button
                onClick={copyEmail}
                className={`${styles.copyBtn} mono`}
                aria-label="Copy email address"
              >
                {copied ? '✓ COPIED' : 'COPY'}
              </button>
            </div>
          </div>

          <div className={styles.right}>
            <div className={styles.availCard}>
              <div className={styles.availHeader}>
                <span className={styles.availDot} />
                <span className={`${styles.availLabel} mono`}>CURRENTLY AVAILABLE</span>
              </div>
              <p className={styles.availText}>
                We&apos;re accepting new projects.<br />
                Typical response time: <strong className={styles.availHighlight}>within 24h.</strong>
              </p>

              <div className={styles.contactLinks}>
                <a
                  href="https://www.linkedin.com/in/suprateek-yawagal"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`${styles.contactLink} mono`}
                >
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                  Suprateek
                </a>
                <a
                  href="https://www.linkedin.com/in/ull0s-m/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`${styles.contactLink} mono`}
                >
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                  Ullas
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
