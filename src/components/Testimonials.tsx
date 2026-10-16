import { Quote } from 'lucide-react';
import Reveal from './Reveal';
import { testimonials } from '@/lib/data';

export default function Testimonials() {
  return (
    <section className="border-t border-line-dark py-section">
      <div className="shell">
        <Reveal>
          <h2 className="section-heading text-ink-inv">What clients say</h2>
        </Reveal>

        <div className="mt-10 space-y-8">
          {testimonials.map((t, i) => (
            <Reveal key={t.name} delay={i * 80}>
              <blockquote className="border-l-2 border-lime pl-6">
                <Quote size={18} className="mb-3 text-lime" aria-hidden />
                <p className="text-[0.9375rem] leading-relaxed text-ink-inv-light italic">
                  "{t.quote}"
                </p>
                <footer className="mt-3 text-sm">
                  <span className="font-semibold text-ink-inv">{t.name}</span>
                  <span className="mx-2 text-ink-inv-light">·</span>
                  <span className="text-ink-inv-light">{t.role}</span>
                </footer>
              </blockquote>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
