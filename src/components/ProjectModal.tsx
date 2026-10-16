'use client';

import { useEffect } from 'react';
import { X, ExternalLink } from 'lucide-react';
import type { Project } from '@/lib/data';

/** Modal overlay for project detail view. */
export default function ProjectModal({ project, onClose }: { project: Project; onClose: () => void }) {
  useEffect(() => {
    const handler = (e: KeyboardEvent) => e.key === 'Escape' && onClose();
    document.addEventListener('keydown', handler);
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', handler);
      document.body.style.overflow = '';
    };
  }, [onClose]);

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label={project.title}
      className="fixed inset-0 z-[60] flex items-center justify-center bg-black/70 p-4 backdrop-blur-sm"
      onClick={(e) => e.target === e.currentTarget && onClose()}
    >
      <div className="relative max-h-[85vh] w-full max-w-2xl overflow-y-auto rounded-card border border-line-dark bg-surface-dark p-8 shadow-2xl">
        <button
          onClick={onClose}
          aria-label="Close"
          className="absolute right-4 top-4 p-1.5 text-ink-inv-light transition-colors hover:text-lime"
        >
          <X size={20} />
        </button>

        <p className="label text-lime">{project.year} · {project.client}</p>
        <h3 className="mt-3 text-h2x font-heading font-bold text-ink-inv">{project.title}</h3>

        <div className="mt-6 space-y-4">
          {project.detail.map((para, i) => (
            <p key={i} className="text-[0.9375rem] leading-relaxed text-ink-inv-light">
              {para}
            </p>
          ))}
        </div>

        <div className="mt-8 border-t border-line-dark pt-6">
          <h4 className="label text-ink-inv-light">Stack</h4>
          <div className="mt-3 flex flex-wrap gap-2">
            {project.stack.map((s) => (
              <span key={s} className="tag">{s}</span>
            ))}
          </div>
        </div>

        <p className="mt-6 flex items-start gap-2 text-sm leading-relaxed text-lime">
          <ExternalLink size={14} className="mt-0.5 shrink-0" aria-hidden />
          {project.result}
        </p>
      </div>
    </div>
  );
}
