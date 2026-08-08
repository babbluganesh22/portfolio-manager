export const projects = [
  {
    name: 'Pathfinder',
    tag: 'Distributed Systems',
    desc: 'A workflow orchestration engine handling 2M+ jobs/day with automatic retries, backpressure, and per-tenant rate limiting. Built to replace a fragile cron-job setup.',
    stack: [
      { label: 'Go', color: 'var(--gold)' },
      { label: 'PostgreSQL', color: 'var(--blue)' },
      { label: 'Kafka', color: 'var(--purple)' },
    ],
    links: { primary: { label: 'Case study →', href: '#' }, github: '#' },
  },
  {
    name: 'Ledgerline',
    tag: 'Fintech / API',
    desc: 'Double-entry accounting API used by three early-stage fintechs. Handles multi-currency ledgers, idempotent writes, and full audit trails.',
    stack: [
      { label: 'TypeScript', color: 'var(--green)' },
      { label: 'Postgres', color: 'var(--blue)' },
      { label: 'Redis', color: 'var(--red)' },
    ],
    links: { primary: { label: 'Case study →', href: '#' }, github: '#' },
  },
  {
    name: 'shiplog',
    tag: 'Open Source CLI',
    desc: 'A small CLI that turns your git history into readable changelogs and release notes. 1,400+ stars, used in a handful of open source pipelines.',
    stack: [{ label: 'Rust', color: '#DEA584' }],
    links: { primary: { label: 'npm →', href: '#' }, github: '#' },
  },
  {
    name: 'Northwind Dashboard',
    tag: 'Full-Stack',
    desc: 'Real-time ops dashboard for a logistics team — live map, delivery ETAs, and anomaly alerts, built on a WebSocket event stream.',
    stack: [
      { label: 'React', color: 'var(--green)' },
      { label: 'Node.js', color: 'var(--gold)' },
    ],
    links: { primary: { label: 'Live demo →', href: '#' }, github: '#' },
  },
]