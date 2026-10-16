'use client';

import Link from 'next/link';
import ThemeToggle from './ThemeToggle';
import { useTheme } from './ThemeProvider';
import { profile } from '@/lib/data';

const nav = [
  { href: '#projects', label: 'Projects' },
  { href: '#experience', label: 'Experience' },
  { href: '#contact', label: 'Contact' },
];

export default function Navbar() {
  const { theme } = useTheme();
  const bg = theme === 'dark'
    ? 'bg-surface-dark/90 border-line-dark'
    : 'bg-white/90 border-line-light';

  return (
    <header className={`fixed inset-x-0 top-0 z-50 border-b backdrop-blur-sm ${bg}`}>
      <div className="shell flex h-16 items-center justify-between">
        <Link href="/" className="font-heading text-base font-bold text-ink-inv hover:text-lime">
          {profile.name}
        </Link>
        <nav className="hidden items-center gap-6 sm:flex" aria-label="Primary">
          {nav.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm text-ink-inv-light transition-colors hover:text-lime"
            >
              {l.label}
            </a>
          ))}
          <ThemeToggle />
        </nav>
        <div className="sm:hidden">
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
}
