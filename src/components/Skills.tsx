'use client';

import { useEffect, useRef } from 'react';
import Reveal from './Reveal';
import { skills } from '@/lib/data';

export default function Skills() {
  const barsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = barsRef.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          el.querySelectorAll<HTMLElement>('.skill-bar-fill').forEach((bar) => {
            const w = bar.dataset.width;
            if (w) bar.style.width = w;
          });
          io.disconnect();
        }
      },
      { threshold: 0.3 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <section id="skills" className="border-t border-line-dark py-section">
      <div className="shell">
        <Reveal>
          <h2 className="section-heading text-ink-inv">Skills</h2>
          <p className="mt-3 max-w-prose text-sm text-ink-inv-light">
            Not a word cloud. These are the tools I ship production code with,
            ranked by how much of the last twelve months I spent in them.
          </p>
        </Reveal>

        <div ref={barsRef} className="mt-10 grid gap-x-12 gap-y-6 sm:grid-cols-2">
          {skills.map((s, i) => (
            <Reveal key={s.name} delay={i * 50}>
              <div>
                <div className="flex items-baseline justify-between">
                  <span className="text-sm font-semibold text-ink-inv">{s.name}</span>
                  <span className="font-mono text-xs text-ink-inv-light">{s.level}%</span>
                </div>
                <div className="skill-bar mt-2">
                  <div
                    className="skill-bar-fill"
                    style={{ width: 0 }}
                    data-width={`${s.level}%`}
                    role="progressbar"
                    aria-valuenow={s.level}
                    aria-valuemin={0}
                    aria-valuemax={100}
                    aria-label={`${s.name} proficiency: ${s.level}%`}
                  />
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
