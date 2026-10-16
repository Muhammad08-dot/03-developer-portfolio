'use client';

import { useEffect, useRef, useState } from 'react';
import { ChevronDown, Download } from 'lucide-react';
import Reveal from './Reveal';
import { profile, services } from '@/lib/data';

export default function Hero() {
  const [showServices, setShowServices] = useState(false);
  const servicesRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!showServices) return;
    const handler = (e: MouseEvent) => {
      if (servicesRef.current && !servicesRef.current.contains(e.target as Node)) {
        setShowServices(false);
      }
    };
    document.addEventListener('mousedown', handler);
    return () => document.removeEventListener('mousedown', handler);
  }, [showServices]);

  return (
    <section className="flex min-h-[90vh] items-center pt-16">
      <div className="shell py-section">
        <Reveal>
          <p className="label text-lime">{profile.location}</p>
          <h1 className="mt-4 max-w-[18ch] text-hero font-heading font-bold text-ink-inv">
            {profile.tagline}
          </h1>
          <p className="mt-6 max-w-prose text-lead text-ink-inv-light">
            I design, build, and ship full-stack applications solo or in small
            teams. Django APIs, React front-ends, PostgreSQL — production-grade
            with a human touch on timelines.
          </p>
        </Reveal>

        <Reveal delay={100}>
          <div className="mt-10 flex flex-wrap items-center gap-4">
            {/* What I do dropdown */}
            <div className="relative" ref={servicesRef}>
              <button
                onClick={() => setShowServices((s) => !s)}
                aria-expanded={showServices}
                className="btn-ghost"
              >
                What I do <ChevronDown size={14} aria-hidden />
              </button>
              {showServices && (
                <ul className="absolute left-0 top-full z-30 mt-2 w-72 rounded-card border border-line-dark bg-surface-dark p-4 shadow-xl">
                  {services.map((s) => (
                    <li key={s} className="py-1.5 text-sm text-ink-inv-light">
                      {s}
                    </li>
                  ))}
                </ul>
              )}
            </div>

            <a href="#projects" className="btn-accent">
              See projects
            </a>

            <a href={profile.resumeUrl} className="btn-ghost" download>
              Resume <Download size={14} aria-hidden />
            </a>
          </div>
        </Reveal>

        <Reveal delay={200}>
          <p className="mt-16 text-xs text-ink-inv-light">
            {profile.availability} —{' '}
            <a href={`mailto:${profile.email}`} className="text-lime hover:underline">
              {profile.email}
            </a>
          </p>
        </Reveal>
      </div>
    </section>
  );
}
