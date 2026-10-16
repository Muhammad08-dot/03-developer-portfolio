import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';

export default function NotFound() {
  return (
    <main className="flex min-h-screen items-center justify-center px-5">
      <div className="text-center">
        <p className="label text-lime">404 — lost commit</p>
        <h1 className="mt-4 text-h1x font-heading font-bold text-ink-inv">
          This page never made it to main.
        </h1>
        <p className="mx-auto mt-4 max-w-md text-sm leading-relaxed text-ink-inv-light">
          The link is broken or the page moved. Everything else is still
          deployed and passing.
        </p>
        <div className="mt-8 flex items-center justify-center gap-3">
          <Link href="/" className="btn-accent">
            <ArrowLeft size={15} aria-hidden /> Back to home
          </Link>
          <a href="/#contact" className="btn-ghost">
            Hire me instead
          </a>
        </div>
      </div>
    </main>
  );
}
