import { useEffect, useRef } from 'react'
import styles from './TechStack.module.css'

interface Tech {
  name: string
  category: string
}

const TECH: Tech[] = [
  { name: 'Next.js', category: 'frontend' },
  { name: 'TypeScript', category: 'language' },
  { name: 'React', category: 'frontend' },
  { name: 'Node.js', category: 'backend' },
  { name: 'PostgreSQL', category: 'database' },
  { name: 'MongoDB', category: 'database' },
  { name: 'Redis', category: 'infra' },
  { name: 'GitHub', category: 'devops' },
  { name: 'Vercel', category: 'infra' },
  { name: 'Stripe', category: 'payments' },
  { name: 'Razorpay', category: 'payments' },
  { name: 'Figma', category: 'design' },
  { name: 'Stitch', category: 'design' },
  { name: 'Express', category: 'backend' },
]

export default function TechStack() {
  const gridRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const items = gridRef.current?.querySelectorAll<HTMLDivElement>(`.${styles.techItem}`)
    if (!items) return

    const handleMove = (e: MouseEvent) => {
      items.forEach((item: HTMLDivElement) => {
        const rect = item.getBoundingClientRect()
        const cx = rect.left + rect.width / 2
        const cy = rect.top + rect.height / 2
        const dist = Math.hypot(e.clientX - cx, e.clientY - cy)
        const maxDist = 160
        const proximity = Math.max(0, 1 - dist / maxDist)

        item.style.setProperty('--proximity', String(proximity))
        item.style.color = proximity > 0.3
          ? `rgba(0, 229, 255, ${0.4 + proximity * 0.6})`
          : ''
        item.style.borderColor = proximity > 0.3
          ? `rgba(0, 229, 255, ${0.1 + proximity * 0.3})`
          : ''
      })
    }

    window.addEventListener('mousemove', handleMove)
    return () => window.removeEventListener('mousemove', handleMove)
  }, [])

  return (
    <section className={`${styles.techStack} section`} id="tech">
      <div className="container">
        <div className={styles.header}>
          <p className={`${styles.label} mono`}>/ TECH STACK</p>
          <h2 className={`${styles.heading} mono`}>What we build with.</h2>
          <p className={styles.sub}>Move your cursor over the grid.</p>
        </div>

        <div ref={gridRef} className={styles.grid}>
          {TECH.map(tech => (
            <div
              key={tech.name}
              className={`${styles.techItem} ${styles[`cat_${tech.category}`]} mono`}
              data-category={tech.category}
            >
              <span className={styles.techName}>{tech.name}</span>
              <span className={styles.techCat}>{tech.category}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
