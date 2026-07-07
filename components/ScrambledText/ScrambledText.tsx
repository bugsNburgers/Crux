import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

interface ScrambledTextProps {
  radius?: number;
  duration?: number;
  speed?: number;
  scrambleChars?: string;
  className?: string;
  style?: React.CSSProperties;
  children: string;
}

export default function ScrambledText({
  radius = 100,
  duration = 0.4, // Reduced from 1.2s for snappier retreat
  speed = 0.15, // Reduced from 0.5s for faster scramble frequency
  scrambleChars = '.:',
  className = '',
  style = {},
  children
}: ScrambledTextProps) {
  const rootRef = useRef<HTMLDivElement>(null);
  const charElementsRef = useRef<{ [key: number]: HTMLSpanElement | null }>({});

  useEffect(() => {
    if (!rootRef.current) return;

    const chars = Object.values(charElementsRef.current).filter(Boolean) as HTMLSpanElement[];
    if (chars.length === 0) return;

    const tweens = new Map<HTMLSpanElement, gsap.core.Tween>();
    const intervals = new Map<HTMLSpanElement, NodeJS.Timeout>();

    // Cache character coordinates to avoid layout thrashing in pointermove
    let cachedCoords: Array<{
      el: HTMLSpanElement;
      x: number;
      y: number;
    }> = [];

    const cachePositions = () => {
      cachedCoords = chars.map((c) => {
        const rect = c.getBoundingClientRect();
        return {
          el: c,
          x: rect.left + rect.width / 2 + window.scrollX,
          y: rect.top + rect.height / 2 + window.scrollY
        };
      });
    };

    // Cache initially and update on window resize
    cachePositions();
    window.addEventListener('resize', cachePositions);

    const startScramble = (charEl: HTMLSpanElement, dist: number) => {
      // Overwrite check
      if (tweens.has(charEl)) {
        tweens.get(charEl)?.kill();
      }
      if (intervals.has(charEl)) {
        clearInterval(intervals.get(charEl)!);
      }

      const originalText = charEl.getAttribute('data-content') || '';
      const animDuration = duration * (1 - dist / radius);
      
      const stateObj = { progress: 0 };
      
      const scrambleInterval = setInterval(() => {
        if (Math.random() < 0.5) {
          const randomIndex = Math.floor(Math.random() * scrambleChars.length);
          charEl.textContent = scrambleChars[randomIndex];
        }
      }, speed * 100);

      intervals.set(charEl, scrambleInterval);

      const tween = gsap.to(stateObj, {
        progress: 1,
        duration: animDuration,
        ease: 'none',
        onComplete: () => {
          clearInterval(scrambleInterval);
          charEl.textContent = originalText;
          tweens.delete(charEl);
          intervals.delete(charEl);
        }
      });

      tweens.set(charEl, tween);
    };

    const handleMove = (e: PointerEvent) => {
      const pageX = e.pageX;
      const pageY = e.pageY;

      for (let i = 0; i < cachedCoords.length; i++) {
        const c = cachedCoords[i];
        const dx = pageX - c.x;
        const dy = pageY - c.y;
        const dist = Math.hypot(dx, dy);

        if (dist < radius) {
          startScramble(c.el, dist);
        }
      }
    };

    const el = rootRef.current;
    el.addEventListener('pointermove', handleMove);
    // Recalculate on pointer enter to handle dynamic scroll or layout shift
    el.addEventListener('pointerenter', cachePositions);

    return () => {
      el.removeEventListener('pointermove', handleMove);
      el.removeEventListener('pointerenter', cachePositions);
      window.removeEventListener('resize', cachePositions);
      tweens.forEach((t) => t.kill());
      intervals.forEach((i) => clearInterval(i));
    };
  }, [radius, duration, speed, scrambleChars]);

  const textString = typeof children === 'string' ? children : '';
  const words = textString.split(' ');

  return (
    <div ref={rootRef} className={className} style={{ ...style, position: 'relative' }}>
      <p style={{ margin: 0 }}>
        {words.map((word, wordIndex) => (
          <span key={wordIndex} style={{ display: 'inline-block', whiteSpace: 'nowrap' }}>
            {word.split('').map((char, charIndex) => {
              const globalIndex = wordIndex * 100 + charIndex;
              return (
                <span
                  key={charIndex}
                  ref={(el) => {
                    charElementsRef.current[globalIndex] = el;
                  }}
                  className="char"
                  data-content={char}
                  style={{ display: 'inline-block', willChange: 'transform' }}
                >
                  {char}
                </span>
              );
            })}
            {wordIndex < words.length - 1 && (
              <span className="char-space" style={{ display: 'inline-block' }}>
                &nbsp;
              </span>
            )}
          </span>
        ))}
      </p>
    </div>
  );
}
