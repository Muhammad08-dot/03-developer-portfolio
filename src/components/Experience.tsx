import Reveal from './Reveal';
import { experience } from '@/lib/data';

export default function Experience() {
  return (
    <section id="experience" className="border-t border-line-dark py-section">
      <div className="shell">
        <Reveal>
          <h2 className="section-heading text-ink-inv">Experience</h2>
        </Reveal>

        <ol className="mt-10 relative border-l border-line-dark pl-8 space-y-12">
          {experience.map((exp, i) => (
            <li key={exp.company} className="relative">
              {/* Timeline dot */}
              <span
                className="absolute -left-[37px] top-1 h-2.5 w-2.5 rounded-full bg-lime"
                aria-hidden
              />
              <Reveal delay={i * 80}>
                <p className="label text-ink-inv-light">{exp.period} · {exp.location}</p>
                <h3 className="mt-2 font-heading text-h3x font-bold text-ink-inv">
                  {exp.role}
                </h3>
                <p className="mt-1 text-sm font-medium text-lime">{exp.company}</p>
                <ul className="mt-4 space-y-2">
                  {exp.bullets.map((b) => (
                    <li key={b} className="text-sm leading-relaxed text-ink-inv-light">
                      {b}
                    </li>
                  ))}
                </ul>
              </Reveal>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
