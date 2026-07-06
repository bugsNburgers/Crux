import TrueFocus from '@/components/TrueFocus/TrueFocus';
import BlurText from '@/components/BlurText/BlurText';
import CountUp from '@/components/CountUp/CountUp';
import styles from './Services.module.css';

const SERVICES = [
  {
    id: 'uiux',
    icon: '◈',
    title: 'UI / UX Design',
    desc: 'We design before we code. Wireframes, flows, and high-fidelity screens that solve real user problems — not design-for-design\'s-sake.',
    size: 'wide',
    accent: 'cyan',
  },
  {
    id: 'frontend',
    icon: '{ }',
    title: 'Frontend',
    desc: 'React, Next.js — fast, accessible, and pixel-perfect. We don\'t use templates.',
    size: 'normal',
    accent: 'default',
  },
  {
    id: 'backend',
    icon: '⬡',
    title: 'Backend & DB',
    desc: 'Node.js, PostgreSQL, MongoDB. APIs designed for the actual load you\'ll get.',
    size: 'normal',
    accent: 'default',
  },
  {
    id: 'versioncontrol',
    icon: '⎇',
    title: 'Version Control',
    desc: 'Git from day one. If anything breaks, we revert in minutes — not hours.',
    size: 'normal',
    accent: 'default',
  },
  {
    id: 'monitoring',
    icon: '◉',
    title: 'Uptime Monitoring',
    desc: 'A small API pings your site every 5 minutes. You get an email before your users notice anything\'s wrong.',
    size: 'wide',
    accent: 'lime',
    badge: 'ONLINE',
  },
  {
    id: 'diagnostics',
    icon: '▦',
    title: 'Diagnostics',
    desc: 'Unique users, bounce rates, page speed per route. Real analytics, not a dashboard you never open.',
    size: 'tall',
    accent: 'default',
  },
  {
    id: 'payments',
    icon: '⬡',
    title: 'Payments',
    desc: 'Stripe, Razorpay. Checkout flows that convert.',
    size: 'normal',
    accent: 'default',
  },
  {
    id: 'support',
    icon: '⌘',
    title: '1:1 Support',
    desc: 'You talk to the people who built it. No ticket system. No outsourced support.',
    size: 'normal',
    accent: 'magenta',
  },
  {
    id: 'redis',
    icon: '⚡',
    title: 'Redis & Caching',
    desc: 'Added only when you actually need speed. Not by default.',
    size: 'normal',
    accent: 'default',
  },
];

export default function Services() {
  return (
    <section className={`${styles.services} section`} id="services">
      <div className={`container`}>
        {/* Section header */}
        <div className={styles.header}>
          <p className={`${styles.label} mono`}>/ SERVICES</p>
          <TrueFocus
            sentence="WHAT WE BUILD"
            manualMode={false}
            blurAmount={6}
            borderColor="#00e5ff"
            glowColor="rgba(0,229,255,0.4)"
            animationDuration={0.6}
            pauseBetweenAnimations={1.2}
          />
        </div>

        {/* Stats row */}
        <div className={styles.statsRow}>
          <div className={styles.stat}>
            <span className={`${styles.statNum} mono`}>
              <CountUp from={0} to={3} duration={1.5} className={styles.statNum} />+
            </span>
            <span className={styles.statLabel}>shipped projects</span>
          </div>
          <div className={styles.statDivider} />
          <div className={styles.stat}>
            <span className={`${styles.statNum} mono`}>
              <CountUp from={0} to={2} duration={1.2} className={styles.statNum} />
            </span>
            <span className={styles.statLabel}>devs, zero overhead</span>
          </div>
          <div className={styles.statDivider} />
          <div className={styles.stat}>
            <span className={`${styles.statNum} mono`}>
              {'< '}
              <CountUp from={300} to={200} direction="down" duration={2} className={styles.statNum} />ms
            </span>
            <span className={styles.statLabel}>avg API response</span>
          </div>
        </div>

        {/* Bento grid */}
        <div className={styles.grid}>
          {SERVICES.map(svc => (
            <div
              key={svc.id}
              className={`${styles.card} ${styles[svc.size]} ${styles[`accent_${svc.accent}`]}`}
            >
              <div className={styles.cardInner}>
                <span className={styles.cardIcon}>{svc.icon}</span>
                <BlurText
                  text={svc.title}
                  delay={60}
                  animateBy="words"
                  direction="top"
                  stepDuration={0.3}
                  className={styles.cardTitle}
                />
                <p className={styles.cardDesc}>{svc.desc}</p>
                {svc.badge && (
                  <div className={styles.badge}>
                    <span className={styles.badgeDot} />
                    <span className={`${styles.badgeText} mono`}>{svc.badge}</span>
                  </div>
                )}
              </div>
              <div className={styles.cardBorder} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
