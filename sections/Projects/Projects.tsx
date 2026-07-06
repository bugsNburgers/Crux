import BlurText from '@/components/BlurText/BlurText'
import styles from './Projects.module.css'

interface Project {
  id: string
  name: string
  url: string
  tagline: string
  desc: string
  tags: string[]
  num: string
  status: string
}

const PROJECTS: Project[] = [
  {
    id: 'honorlog', name: 'HonorLog', url: 'https://honorlog.shorinkai.in', num: '01', status: 'LIVE',
    tagline: 'Achievement tracking for martial arts academies.',
    desc: 'A custom-built platform that tracks student milestones, belt gradings, and attendance — replacing messy spreadsheets for a dojo with 200+ active students.',
    tags: ['Next.js', 'Node.js', 'PostgreSQL', 'Auth'],
  },
  {
    id: 'entrydesk', name: 'EntryDesk', url: 'https://entrydesk.shorinkai.in', num: '02', status: 'LIVE',
    tagline: 'Visitor management, built lean.',
    desc: 'Digital check-in for physical premises. Handles visitor logs, time tracking, and admin dashboards without the bloated SaaS pricing.',
    tags: ['React', 'Express', 'MongoDB', 'Real-time'],
  },
  {
    id: 'ringflow', name: 'RingFlow', url: 'https://ringflow-two.vercel.app', num: '03', status: 'LIVE',
    tagline: 'Communication workflow, simplified.',
    desc: 'A streamlined app for managing call flows and team communication pipelines — designed for small ops teams who need clarity over complexity.',
    tags: ['React', 'WebSockets', 'REST API'],
  },
]

export default function Projects() {
  return (
    <section className={`${styles.projects} section`} id="projects">
      <div className="container">
        <div className={styles.header}>
          <p className={`${styles.label} mono`}>/ WORK</p>
          <BlurText
            text="SHIPPED."
            delay={80}
            animateBy="letters"
            direction="top"
            stepDuration={0.4}
            className={styles.heading}
          />
          <p className={styles.subHeading}>Three products live. Two more in the build queue.</p>
        </div>

        <div className={styles.list}>
          {PROJECTS.map(project => (
            <a
              key={project.id}
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.projectRow}
            >
              <span className={`${styles.num} mono`}>{project.num}</span>
              <div className={styles.projectInfo}>
                <div className={styles.projectTop}>
                  <h3 className={`${styles.projectName} mono`}>{project.name}</h3>
                  <span className={`${styles.statusBadge} mono`}>{project.status}</span>
                </div>
                <p className={styles.tagline}>{project.tagline}</p>
                <p className={styles.desc}>{project.desc}</p>
                <div className={styles.tags}>
                  {project.tags.map(tag => (
                    <span key={tag} className={`${styles.tag} mono`}>{tag}</span>
                  ))}
                </div>
              </div>
              <div className={styles.arrow}>
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                  <path d="M4 10h12M12 5l5 5-5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="square"/>
                </svg>
              </div>
            </a>
          ))}
        </div>

        <div className={styles.comingSoon}>
          <div className={styles.csInner}>
            <span className={`${styles.csLabel} mono`}>NEXT UP</span>
            <p className={styles.csText}>2+ more products in active development. Details coming soon.</p>
          </div>
          <div className={styles.csLock}>
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
              <rect x="3" y="8" width="12" height="9" rx="1" stroke="currentColor" strokeWidth="1.5"/>
              <path d="M6 8V5a3 3 0 116 0v3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="square"/>
            </svg>
          </div>
        </div>
      </div>
    </section>
  )
}
