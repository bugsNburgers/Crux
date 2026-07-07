import ScrollReveal from '@/components/ScrollReveal/ScrollReveal'
import styles from './Philosophy.module.css'

export default function Philosophy() {
  return (
    <section className={`${styles.philosophy} section`} id="philosophy">
      <div className={`${styles.inner} container`}>
        <div className={styles.accentLine}>
          <div className={styles.accentDot} />
        </div>
        <div className={styles.content}>
          <p className={`${styles.label} mono`}>/ OUR APPROACH</p>
          <ScrollReveal
            baseOpacity={0.05}
            enableBlur={true}
            baseRotation={2}
            blurStrength={6}
            containerClassName={styles.manifestoContainer}
            textClassName={styles.manifestoText}
          >
            {`You don't need microservices for 100 visitors a day. You don't need a Kubernetes cluster for a contact form. We identify the real problem, architect the right solution, and ship software that actually works - without the bloat, without the BS.`}
          </ScrollReveal>
          <p className={styles.subLine}>Right tool. Right scale. Right outcome.</p>
        </div>
      </div>
    </section>
  )
}
