export type DemoAccount = {
  role: string;
  email: string;
  password: string;
};

export type Project = {
  subdomain: string;
  name: string;
  label: string;
  description: string;
  status: string;
  href: string;
  stack?: readonly string[];
  demoAccounts?: readonly DemoAccount[];
};

export type Capability = {
  number: string;
  title: string;
  description: string;
};

export const LINKS = {
  github: 'https://github.com/tvandoren88',
  linkedin: 'https://www.linkedin.com/in/trevor-van-doren-3685b5ba/',
  resume: 'https://resume.tvandoren.dev',
  trackingApp: 'https://trackingapp.tvandoren.dev',
} as const;

export const projects: readonly Project[] = [
  {
    subdomain: 'www',
    name: 'Portfolio HQ',
    label: 'You are here',
    description:
      'A high-level view of automation, reliability engineering, operational leadership, and selected work.',
    status: 'Live',
    href: '#top',
  },
  {
    subdomain: 'resume',
    name: 'Open my full resume',
    label: 'resume.tvandoren.dev',
    description:
      'The detailed career narrative: every role, outcome, skill, and technical accomplishment.',
    status: 'Resume',
    href: LINKS.resume,
  },
  {
    subdomain: 'trackingapp',
    name: 'Automation Lab',
    label: 'Open Operations Demo',
    description:
      'An operations workflow demo showing how automation, service integrations, and clear handoffs reduce manual work.',
    status: 'Live project',
    href: LINKS.trackingApp,
    stack: ['Python', 'CI/CD', 'Service APIs', 'PostgreSQL'],
    demoAccounts: [
      { role: 'Admin', email: 'admin@parcelscout.local', password: 'demo123' },
      {
        role: 'Parts manager',
        email: 'parts@parcelscout.local',
        password: 'demo123',
      },
      { role: 'Sales', email: 'sales@parcelscout.local', password: 'demo123' },
    ],
  },
];

export const capabilities: readonly Capability[] = [
  {
    number: '01',
    title: 'Operational automation',
    description:
      'Automating repetitive delivery and support work with Python, CI/CD, and pragmatic integrations.',
  },
  {
    number: '02',
    title: 'Reliable systems',
    description:
      'Designing observable, maintainable services with clear failure modes and dependable operating practices.',
  },
  {
    number: '03',
    title: 'SRE leadership',
    description:
      'Strengthening incident response, documentation, delivery habits, and the teams responsible for production.',
  },
];

export const stats = [
  { value: '10+', label: 'years improving production systems' },
  { value: '1,000+', label: 'customers supported' },
  { value: '500+', label: 'automation workflows across Jenkins, Python, and GitHub' },
] as const;
