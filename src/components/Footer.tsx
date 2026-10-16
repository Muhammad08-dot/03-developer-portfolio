import { profile } from '@/lib/data';

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t border-line-dark py-10">
      <div className="shell flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-center">
        <p className="text-sm text-ink-inv-light">
          &copy; {year} {profile.name}. Built with Next.js and Tailwind.
        </p>
        <a href={`mailto:${profile.email}`} className="text-sm text-lime hover:underline">
          {profile.email}
        </a>
      </div>
    </footer>
  );
}
