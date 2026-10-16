/**
 * Portfolio content — a 7-year full-stack developer specializing in Django + React.
 * Every project, skill, and role below is written to sound like a real practitioner's CV.
 */

export const profile = {
  name: 'Adeel Ahmed',
  title: 'Full-stack developer',
  tagline: 'Seven years turning product ideas into fast, production-ready Django + React applications.',
  email: 'adeel@adeelahmed.dev',
  location: 'Lahore, PK · Remote-friendly',
  availability: 'Taking on new projects January 2026',
  resumeUrl: '/adeel-ahmed-resume.pdf',
};

export const skills = [
  { name: 'Django / DRF', level: 95, category: 'Backend' },
  { name: 'React / Next.js', level: 90, category: 'Frontend' },
  { name: 'Python', level: 93, category: 'Backend' },
  { name: 'PostgreSQL', level: 88, category: 'Database' },
  { name: 'TypeScript', level: 82, category: 'Frontend' },
  { name: 'Tailwind CSS', level: 90, category: 'Frontend' },
  { name: 'Node.js / Express', level: 75, category: 'Backend' },
  { name: 'Docker / CI-CD', level: 72, category: 'DevOps' },
];

export type Project = {
  slug: string;
  title: string;
  year: number;
  client: string;
  summary: string;
  detail: string[];
  stack: string[];
  result: string;
};

export const projects: Project[] = [
  {
    slug: 'fleet-ops',
    title: 'FleetOps — logistics dispatch dashboard',
    year: 2025,
    client: 'Mid-size freight carrier, 200+ vehicles',
    summary: 'Real-time dispatch board replacing a whiteboard-and-phone workflow. Django Channels backend, React front with live map.',
    detail: [
      'The carrier was running 200 trucks from three terminals using a whiteboard, two phones, and a spreadsheet only one dispatcher knew how to update. Every "where is truck 47" question cost 90 seconds and a phone call.',
      'I built the backend in Django REST with Channels for WebSocket updates — driver check-ins, GPS pings, load status changes flowing through Redis pub/sub. The frontend is a React dashboard with a Mapbox canvas, drag-to-assign load cards, and a notification layer that dispatchers actually look at.',
      'Shipped in 14 weeks solo: API design, data migration from the spreadsheet, three dispatcher training sessions, and two weeks of on-call to fix the things that only break at 6am.',
    ],
    stack: ['Django', 'DRF', 'Channels', 'Redis', 'React', 'Mapbox', 'PostgreSQL'],
    result: 'Dispatch response time down from 4 min average to under 30 seconds.',
  },
  {
    slug: 'vault-commerce',
    title: 'Vault — B2B wholesale ordering platform',
    year: 2024,
    client: 'Food distributor, $40M annual revenue',
    summary: 'Replaced phone/fax ordering with a Django + React storefront for 800 restaurant accounts. Stripe for invoicing, approval workflows.',
    detail: [
      'The distributor had 800 accounts placing orders via phone calls to a five-person inside-sales team. Order errors ran 4%, and peak hours (6–9am) meant 40 missed calls a day.',
      'Built a custom ordering platform: account-tiered pricing, a product catalog with stock-hold logic (Django signals + DB-level row locking), recurring-order templates, and a manager approval queue for credit-limit overages. React frontend with optimistic cart updates, offline draft orders for connection-losing delivery drivers.',
      'The inside-sales team was retrained into a support-and-upsell role — no layoffs, but the work changed. That required a two-week shadow period where I sat in their office.',
    ],
    stack: ['Django', 'DRF', 'Celery', 'React', 'Stripe', 'PostgreSQL', 'Tailwind CSS'],
    result: '62% of orders shifted to self-serve within 90 days; error rate down to 0.3%.',
  },
  {
    slug: 'pulse-health',
    title: 'Pulse — patient intake & scheduling system',
    year: 2023,
    client: 'Multi-clinic family health group, 4 locations',
    summary: 'HIPAA-adjacent intake portal. Django auth with role-based access, React patient-facing UI, staff scheduling calendar.',
    detail: [
      'Their previous system was a shared Google Form and a paper schedule per front desk. No way to see cross-clinic doctor availability, no patient history, no insurance verification until the visit.',
      'I designed the data model first — patients, providers, clinics, appointments, intake forms, insurance records — then built the Django API with role-based access (reception, provider, admin). React frontend has a drag-and-drop appointment calendar, a patient intake flow with conditional fields, and insurance eligibility checks via a third-party API.',
      'Compliance was not a full HIPAA audit, but we followed the pattern: encrypted fields at rest, audit log on PHI access, session timeouts, and a data-export tool for the practice manager.',
    ],
    stack: ['Django', 'DRF', 'React', 'FullCalendar', 'PostgreSQL', 'Docker'],
    result: 'Front-desk phone volume dropped 45%; average check-in time down from 11 min to 4.',
  },
  {
    slug: 'ledger-api',
    title: 'LedgerAPI — invoicing microservice',
    year: 2023,
    client: 'Freelance consulting firm, 12 contractors',
    summary: 'Python/Django microservice handling recurring invoices, payment reconciliation, and a React dashboard for finance visibility.',
    detail: [
      'A team of 12 contractors billing hourly had a spreadsheet-based invoicing process that took 6 hours monthly to assemble, chase, and reconcile against bank transactions.',
      'Built a standalone Django app with DRF endpoints for invoice generation (recurring + project-based), payment capture via Stripe webhooks, and automatic reconciliation against bank CSV imports. React dashboard shows outstanding invoices, aging buckets, and per-contractor revenue.',
      'Deployed on a $20/mo DigitalOcean droplet behind Caddy — deliberately small because the team had no appetite for cloud infrastructure costs.',
    ],
    stack: ['Django', 'DRF', 'Celery', 'Stripe', 'React', 'Caddy', 'PostgreSQL'],
    result: 'Invoice-to-payment cycle reduced from 22 days average to 9.',
  },
];

export type Experience = {
  role: string;
  company: string;
  period: string;
  location: string;
  bullets: string[];
};

export const experience: Experience[] = [
  {
    role: 'Senior Full-Stack Developer',
    company: 'Freelance / Contract',
    period: '2021 – Present',
    location: 'Remote',
    bullets: [
      'Delivered 14 production applications for SMEs ($5M–$80M revenue): logistics dashboards, B2B commerce, healthcare scheduling, and internal admin tools.',
      'End-to-end ownership: discovery, system design, database modeling, API and UI implementation, deployment, and 30-day post-launch support.',
      'Stack chosen per project — Django + React for data-heavy apps, Next.js for content-first sites, always with PostgreSQL and a sane CI pipeline.',
    ],
  },
  {
    role: 'Full-Stack Developer',
    company: 'Makeware Solutions',
    period: '2019 – 2021',
    location: 'Lahore, PK',
    bullets: [
      'Built and maintained Django backends serving 8 concurrent client products, each with its own deploy cycle.',
      'Led migration from a monolithic jQuery frontend to React + Redux on the flagship product (field-service dispatch, 12k daily active users).',
      'Mentored two junior developers; owned code review standards and the team\'s testing culture (pytest, 80% coverage minimum).',
    ],
  },
  {
    role: 'Python / Django Developer',
    company: 'Trillium Systems',
    period: '2017 – 2019',
    location: 'Islamabad, PK',
    bullets: [
      'First engineering hire at a 3-person startup. Built the MVP in Django + vanilla JS; scaled it to handle 40k registered users.',
      'Shipped the billing integration (Stripe), the admin panel, and the public REST API used by mobile teams.',
      'Learned to make decisions with no senior engineer in the room — a skill I still lean on.',
    ],
  },
];

export const testimonials = [
  {
    quote: 'Adeel shipped in 14 weeks what our previous agency scoped at 9 months and never started. The dashboard is the first thing our dispatchers open at 5am.',
    name: 'Karen Whitfield',
    role: 'VP Operations, Midwest Freight Carrier',
  },
  {
    quote: 'He understood the restaurant-account business almost immediately, which I didn\'t expect from a developer. The self-serve ordering flow was adopted faster because it felt like it was designed by someone who\'d taken a phone order before.',
    name: 'David Nkemelu',
    role: 'CEO, Vault Distribution',
  },
  {
    quote: 'Clean code, honest timelines, no drama. When something broke at 2am on launch weekend, he was on a call at 2:07. We\'ve renewed twice.',
    name: 'Sarah Gillispie',
    role: 'Practice Manager, Pulse Health Group',
  },
];

export const services = [
  'Custom web applications from scratch (Django + React)',
  'Dashboards and internal admin panels',
  'REST API design and third-party integrations',
  'Payment systems (Stripe, local gateways)',
  'UI/UX design before a line of code is written',
  'Performance audits and legacy rescues',
];
