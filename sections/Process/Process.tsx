import styles from './Process.module.css'

interface Step {
  num: string
  title: string
  desc: string
  icon: string
}

const STEPS: Step[] = [
  { num: '01', icon: '◎', title: 'Understand', desc: 'We sit down, listen, and map the real problem — not the surface-level request. Half the work happens before a line of code is written.' },
  { num: '02', icon: '◫', title: 'Architect', desc: 'Right-sized solution. No over-engineering. If you need a simple app, you get a simple app — built correctly, not impressively.' },
  { num: '03', icon: '▣', title: 'Build', desc: 'TypeScript, clean code, version controlled from commit one. Every feature tested before it ships. GitHub is the source of truth.' },
  { num: '04', icon: '◈', title: 'Support', desc: '1:1 support post-launch. You have our number. We monitor uptime, fix bugs fast, and stay on the product long after delivery.' },
]

export default function Process(): JSX.Element {
  return (
    <section className={`${styles.process} section`} id="process">
      <div className="container">
        <div className={styles.header}>
          <p className={`${styles.label} mono`}>/ HOW WE WORK</p>
          <h2 className={`${styles.heading} mono`}>The process.</h2>
        </div>

        <div className={styles.steps}>
          {STEPS.map((step, i) => (
            <div key={step.num} className={styles.step}>
              {/* Connector line */}
              {i < STEPS.length - 1 && <div className={styles.connector} />}

              <div className={styles.stepHeader}>
                <span className={`${styles.stepNum} mono`}>{step.num}</span>
                <span className={styles.stepIcon}>{step.icon}</span>
              </div>
              <h3 className={`${styles.stepTitle} mono`}>{step.title}</h3>
              <p className={styles.stepDesc}>{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
