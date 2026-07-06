import { useEffect, useRef, useState } from 'react';
import DecryptedText from '@/components/DecryptedText/DecryptedText';
import TextType from '@/components/TextType/TextType';
import styles from './Hero.module.css';

export default function Hero() {
  const canvasRef = useRef(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => { setMounted(true); }, []);

  // Hyperspeed-inspired canvas background: flowing dark lines
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener('resize', resize);

    const NUM_LINES = 80;
    const lines = Array.from({ length: NUM_LINES }, () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      speed: 0.3 + Math.random() * 1.2,
      length: 40 + Math.random() * 120,
      opacity: 0.03 + Math.random() * 0.1,
      angle: (Math.PI / 2) + (Math.random() - 0.5) * 0.3,
    }));

    let animId;
    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      lines.forEach(line => {
        line.y += line.speed;
        if (line.y > canvas.height + line.length) {
          line.y = -line.length;
          line.x = Math.random() * canvas.width;
        }
        const grad = ctx.createLinearGradient(
          line.x, line.y,
          line.x + Math.cos(line.angle) * line.length,
          line.y + Math.sin(line.angle) * line.length
        );
        grad.addColorStop(0, `rgba(0,229,255,0)`);
        grad.addColorStop(0.5, `rgba(0,229,255,${line.opacity})`);
        grad.addColorStop(1, `rgba(0,229,255,0)`);
        ctx.beginPath();
        ctx.strokeStyle = grad;
        ctx.lineWidth = 1;
        ctx.moveTo(line.x, line.y);
        ctx.lineTo(
          line.x + Math.cos(line.angle) * line.length,
          line.y + Math.sin(line.angle) * line.length
        );
        ctx.stroke();
      });
      animId = requestAnimationFrame(draw);
    };
    draw();

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener('resize', resize);
    };
  }, []);

  return (
    <section className={styles.hero} id="hero">
      {/* Canvas BG */}
      <canvas ref={canvasRef} className={styles.canvas} aria-hidden="true" />

      {/* Radial gradient center glow */}
      <div className={styles.glow} aria-hidden="true" />

      {/* Corner scan line decoration */}
      <div className={styles.scanLine} aria-hidden="true" />

      {/* Top-left label */}
      <div className={styles.topLabel}>
        <span className={styles.dot} />
        <span className={`${styles.labelText} mono`}>EST. 2024</span>
      </div>

      {/* Top-right label */}
      <div className={styles.topRight}>
        <span className={`${styles.labelText} mono`}>v1.0.0</span>
      </div>

      {/* Main content */}
      <div className={styles.content}>
        {/* Logo X mark */}
        <div className={styles.logoMark} aria-hidden="true">
          <svg viewBox="0 0 100 120" fill="none" className={styles.logoSvg}>
            <line x1="8" y1="8" x2="92" y2="92" stroke="currentColor" strokeWidth="9" strokeLinecap="square"/>
            <line x1="92" y1="8" x2="8" y2="92" stroke="currentColor" strokeWidth="9" strokeLinecap="square"/>
            <line x1="65" y1="65" x2="100" y2="118" stroke="currentColor" strokeWidth="9" strokeLinecap="square"/>
          </svg>
        </div>

        {/* CRUX — DecryptedText, rapid scramble on view */}
        <h1 className={styles.title}>
          {mounted && (
            <>
              {/* CR with normal chars, UX gets special X treatment */}
              <span className={styles.titleLine}>
                <DecryptedText
                  text="CRUX"
                  speed={35}
                  maxIterations={18}
                  sequential={false}
                  characters="ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789@#$%&*"
                  animateOn="view"
                  className={styles.revealedChar}
                  encryptedClassName={styles.encryptedChar}
                />
              </span>
              <span className={styles.titleLine2}>
                <DecryptedText
                  text="STUDIOS"
                  speed={40}
                  maxIterations={14}
                  sequential={false}
                  characters="ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789@#$%&*"
                  animateOn="view"
                  className={styles.revealedChar2}
                  encryptedClassName={styles.encryptedChar}
                />
              </span>
            </>
          )}
        </h1>

        {/* Sub tagline — TextType cycling */}
        <div className={styles.tagline}>
          {mounted && (
            <TextType
              text={[
                "we understand the problem first.",
                "then we build the solution.",
                "right-sized. nothing more.",
                "software that actually works.",
              ]}
              typingSpeed={55}
              deletingSpeed={28}
              pauseDuration={2000}
              showCursor={true}
              cursorCharacter="_"
              className={styles.taglineText}
            />
          )}
        </div>

        {/* CTA row */}
        <div className={styles.ctaRow}>
          <a href="#projects" className={styles.ctaPrimary}>
            <span>See our work</span>
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="square"/></svg>
          </a>
          <a href="#contact" className={styles.ctaSecondary}>Get in touch</a>
        </div>
      </div>

      {/* Bottom metadata bar */}
      <div className={styles.bottomBar}>
        <span className={`${styles.labelText} mono`}>Bangalore, India</span>
        <span className={styles.sep}>·</span>
        <span className={`${styles.labelText} mono`}>2 developers</span>
        <span className={styles.sep}>·</span>
        <span className={`${styles.labelText} mono text-cyan`}>Available for projects</span>
      </div>

      {/* Scroll indicator */}
      <div className={styles.scrollIndicator} aria-hidden="true">
        <div className={styles.scrollLine}></div>
      </div>
    </section>
  );
}
