import styles from './Team.module.css'

interface TeamMember {
  id: string
  name: string
  role: string
  focus: string
  linkedin: string
  initials: string
}

const TEAM: TeamMember[] = [
  {
    id: 'suprateek', name: 'Suprateek Yawagal', role: 'Full-Stack Developer',
    focus: 'Architecture · Frontend · Product',
    linkedin: 'https://www.linkedin.com/in/suprateek-yawagal', initials: 'SY',
  },
  {
    id: 'ullas', name: 'Ullas M', role: 'Full-Stack Developer',
    focus: 'Backend · Systems · Infrastructure',
    linkedin: 'https://www.linkedin.com/in/ull0s-m/', initials: 'UM',
  },
]

export default function Team(): JSX.Element {
  return (
    <section className={`${styles.team} section`} id="team">
      <div className="container">
        <div className={styles.header}>
          <p className={`${styles.label} mono`}>/ THE TEAM</p>
          <h2 className={`${styles.heading} mono`}>Two devs.<br />Zero middlemen.</h2>
        </div>

        <div className={styles.grid}>
          {TEAM.map(member => (
            <div key={member.id} className={styles.card}>
              <div className={styles.avatar}>
                <span className={`${styles.initials} mono`}>{member.initials}</span>
                <div className={styles.avatarRing} />
              </div>
              <div className={styles.info}>
                <h3 className={`${styles.name} mono`}>{member.name}</h3>
                <p className={styles.role}>{member.role}</p>
                <p className={`${styles.focus} mono`}>{member.focus}</p>
              </div>
              <a
                href={member.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.linkedinLink}
                aria-label={`${member.name} LinkedIn`}
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
                <span className={`${styles.linkedinText} mono`}>LinkedIn</span>
              </a>
              <div className={styles.cardGlow} />
            </div>
          ))}
        </div>

        <div className={styles.statement}>
          <p className={`${styles.statText} mono`}>
            &ldquo;When you work with Crux, you&apos;re talking directly to the people
            who will architect, build, and maintain your product.&rdquo;
          </p>
        </div>
      </div>
    </section>
  )
}
