'use client';

import { useState } from 'react';
import { AlertCircle, CheckCircle2, Mail, MapPin } from 'lucide-react';
import Reveal from './Reveal';
import { profile } from '@/lib/data';

type Values = { name: string; email: string; company: string; message: string };

export default function Contact() {
  const [values, setValues] = useState<Values>({ name: '', email: '', company: '', message: '' });
  const [errors, setErrors] = useState<Partial<Values>>({});
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent'>('idle');

  function validate(): Partial<Values> {
    const e: Partial<Values> = {};
    if (!values.name.trim()) e.name = 'Your name, please.';
    if (!values.email.trim()) e.email = 'Email is required.';
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(values.email.trim()))
      e.email = 'That doesn\u2019t look like a valid email.';
    if (!values.message.trim()) e.message = 'Tell me briefly what you need.';
    else if (values.message.trim().length < 20) e.message = 'A few more words would help me respond usefully.';
    return e;
  }

  async function handleSubmit(ev: React.FormEvent) {
    ev.preventDefault();
    const errs = validate();
    setErrors(errs);
    if (Object.keys(errs).length > 0) return;
    setStatus('sending');
    await new Promise((r) => setTimeout(r, 1200));
    setStatus('sent');
  }

  if (status === 'sent') {
    return (
      <section id="contact" className="border-t border-line-dark py-section">
        <div className="shell">
          <div className="flex items-center gap-3 rounded-card border border-line-dark p-8">
            <CheckCircle2 className="text-lime" size={24} aria-hidden />
            <div>
              <p className="font-heading font-bold text-ink-inv">Message sent.</p>
              <p className="mt-1 text-sm text-ink-inv-light">
                I\u2019ll reply within one business day from {profile.email}.
              </p>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="contact" className="border-t border-line-dark py-section">
      <div className="shell">
        <Reveal>
          <h2 className="section-heading text-ink-inv">Let\u2019s talk</h2>
          <p className="mt-3 max-w-prose text-sm text-ink-inv-light">
            Describe what you need. I\u2019ll reply honestly within a day \u2014 even if the answer is
            &ldquo;this isn\u2019t what I do best, here\u2019s who does.&rdquo;
          </p>
        </Reveal>

        <div className="mt-10 grid gap-12 lg:grid-cols-[1.5fr_1fr]">
          <Reveal>
            <form onSubmit={handleSubmit} noValidate className="space-y-5">
              <div className="grid gap-5 sm:grid-cols-2">
                <div>
                  <label htmlFor="name" className="label mb-1.5 block text-ink-inv-light">Name</label>
                  <input
                    id="name"
                    type="text"
                    autoComplete="name"
                    value={values.name}
                    onChange={(e) => setValues((v) => ({ ...v, name: e.target.value }))}
                    className="w-full rounded-card border border-line-dark bg-transparent px-4 py-2.5 text-sm text-ink-inv placeholder:text-ink-inv-light/50 focus:border-lime focus:outline-none"
                    placeholder="Full name"
                    aria-invalid={!!errors.name}
                  />
                  {errors.name && <p className="mt-1.5 flex items-center gap-1.5 text-xs text-red-400"><AlertCircle size={12} />{errors.name}</p>}
                </div>
                <div>
                  <label htmlFor="email" className="label mb-1.5 block text-ink-inv-light">Email</label>
                  <input
                    id="email"
                    type="email"
                    autoComplete="email"
                    value={values.email}
                    onChange={(e) => setValues((v) => ({ ...v, email: e.target.value }))}
                    className="w-full rounded-card border border-line-dark bg-transparent px-4 py-2.5 text-sm text-ink-inv placeholder:text-ink-inv-light/50 focus:border-lime focus:outline-none"
                    placeholder="you@company.com"
                    aria-invalid={!!errors.email}
                  />
                  {errors.email && <p className="mt-1.5 flex items-center gap-1.5 text-xs text-red-400"><AlertCircle size={12} />{errors.email}</p>}
                </div>
              </div>

              <div>
                <label htmlFor="company" className="label mb-1.5 block text-ink-inv-light">Company <span className="normal-case opacity-60">(optional)</span></label>
                <input
                  id="company"
                  type="text"
                  autoComplete="organization"
                  value={values.company}
                  onChange={(e) => setValues((v) => ({ ...v, company: e.target.value }))}
                  className="w-full rounded-card border border-line-dark bg-transparent px-4 py-2.5 text-sm text-ink-inv placeholder:text-ink-inv-light/50 focus:border-lime focus:outline-none"
                  placeholder="Company or project name"
                />
              </div>

              <div>
                <label htmlFor="message" className="label mb-1.5 block text-ink-inv-light">Message</label>
                <textarea
                  id="message"
                  rows={5}
                  value={values.message}
                  onChange={(e) => setValues((v) => ({ ...v, message: e.target.value }))}
                  className="w-full resize-y rounded-card border border-line-dark bg-transparent px-4 py-2.5 text-sm text-ink-inv placeholder:text-ink-inv-light/50 focus:border-lime focus:outline-none"
                  placeholder="What are you building? Timeline? Budget range?"
                  aria-invalid={!!errors.message}
                />
                {errors.message && <p className="mt-1.5 flex items-center gap-1.5 text-xs text-red-400"><AlertCircle size={12} />{errors.message}</p>}
              </div>

              <button type="submit" disabled={status === 'sending'} className="btn-accent disabled:opacity-60">
                {status === 'sending' ? 'Sending\u2026' : 'Send message'}
              </button>
            </form>
          </Reveal>

          <Reveal delay={100}>
            <div className="space-y-6">
              <p className="flex items-center gap-2.5 text-sm text-ink-inv-light">
                <Mail size={15} className="text-lime" aria-hidden />
                <a href={`mailto:${profile.email}`} className="hover:text-lime">{profile.email}</a>
              </p>
              <p className="flex items-center gap-2.5 text-sm text-ink-inv-light">
                <MapPin size={15} className="text-lime" aria-hidden />
                {profile.location}
              </p>
              <p className="text-xs leading-relaxed text-ink-inv-light/70">
                Typical response: 4\u20138 business hours. If there\u2019s a deadline,
                say so at the top and I\u2019ll prioritise.
              </p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
