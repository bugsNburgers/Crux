import { useState } from 'react'
import TextType from '@/components/TextType/TextType'
import styles from './Contact.module.css'

export default function Contact() {
  const [copied, setCopied] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')
  const EMAIL = 'contact@cruxstudios.dev'

  const copyEmail = async () => {
    await navigator.clipboard.writeText(EMAIL)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus('idle')

    const form = event.currentTarget
    const formData = new FormData(form)
    const accessKey = process.env.NEXT_PUBLIC_WEB3FORMS_KEY || 'YOUR_ACCESS_KEY_HERE'
    formData.append('access_key', accessKey)

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: formData,
      })

      const data = await response.json()

      if (data.success) {
        setSubmitStatus('success')
        form.reset()
      } else {
        console.error('Web3Forms Error:', data)
        setSubmitStatus('error')
      }
    } catch (error) {
      console.error('Submission Error:', error)
      setSubmitStatus('error')
    } finally {
      setIsSubmitting(false)
    }
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

            <div className={styles.emailContainer}>
              <span className={`${styles.prompt} mono`}>→</span>
              <a href={`mailto:${EMAIL}`} className={styles.emailLink} aria-label="Send email">
                {EMAIL}
              </a>
              <button
                onClick={copyEmail}
                className={`${styles.copyBtn} mono`}
                aria-label="Copy email address"
              >
                {copied ? '[ copied ]' : '[ copy ]'}
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

              <form className={styles.form} onSubmit={handleSubmit}>
                <div className={styles.formRow}>
                  <div className={styles.formGroup}>
                    <label htmlFor="name" className={`${styles.formLabel} mono`}>NAME</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      className={styles.formInput}
                      placeholder="Your name"
                    />
                  </div>
                  <div className={styles.formGroup}>
                    <label htmlFor="email" className={`${styles.formLabel} mono`}>EMAIL</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      className={styles.formInput}
                      placeholder="you@example.com"
                    />
                  </div>
                </div>

                <div className={styles.formGroup}>
                  <label htmlFor="message" className={`${styles.formLabel} mono`}>PROJECT DETAILS</label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    className={styles.formTextarea}
                    placeholder="Briefly describe what you're building..."
                    rows={2}
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`${styles.submitBtn} mono`}
                >
                  {isSubmitting ? 'SENDING...' : 'SEND MESSAGE'}
                </button>

                {submitStatus === 'success' && (
                  <p className={`${styles.statusText} ${styles.successText} mono`}>
                    ✓ SENT! WE&apos;LL BE IN TOUCH SOON.
                  </p>
                )}
                {submitStatus === 'error' && (
                  <p className={`${styles.statusText} ${styles.errorText} mono`}>
                    ✗ ERROR. PLEASE TRY COPYING THE EMAIL DIRECTLY.
                  </p>
                )}
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
