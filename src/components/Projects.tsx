'use client';

import { useState } from 'react';
import { ArrowUpRight } from 'lucide-react';
import Reveal from './Reveal';
import ProjectModal from './ProjectModal';
import { projects, type Project } from '@/lib/data';

export default function Projects() {
  const [active, setActive] = useState<Project | null>(null);

  return (
    <section id="projects" className="border-t border-line-dark py-section">
      <div className="shell">
        <Reveal>
          <h2 className="section-heading text-ink-inv">Selected Projects</h2>
          <p className="mt-3 max-w-prose text-sm text-ink-inv-light">
            Four applications I designed and built end-to-end between 2023 and 2025.
            Click any for the full story.
          </p>
        </Reveal>

        <ul className="mt-10 border-t border-line-dark">
          {projects.map((p, i) => (
            <li key={p.slug} className="border-b border-line-dark">
              <Reveal delay={i * 60}>
                <button
                  onClick={() => setActive(p)}
                  className="group flex w-full items-start justify-between gap-4 py-7 text-left"
                >
                  <div>
                    <p className="label text-ink-inv-light">{p.year} · {p.client}</p>
                    <h3 className="mt-2 font-heading text-lg font-bold text-ink-inv group-hover:text-lime">
                      {p.title}
                    </h3>
                    <p className="mt-2 max-w-prose text-sm leading-relaxed text-ink-inv-light">
                      {p.summary}
                    </p>
                    <div className="mt-3 flex flex-wrap gap-2">
                      {p.stack.slice(0, 5).map((s) => (
                        <span key={s} className="tag">{s}</span>
                      ))}
                    </div>
                  </div>
                  <ArrowUpRight
                    size={20}
                    className="mt-2 shrink-0 text-ink-inv-light transition-colors group-hover:text-lime"
                    aria-hidden
                  />
                </button>
              </Reveal>
            </li>
          ))}
        </ul>
      </div>

      {active && <ProjectModal project={active} onClose={() => setActive(null)} />}
    </section>
  );
}
