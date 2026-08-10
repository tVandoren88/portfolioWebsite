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
      'The high-level view: technical breadth, leadership, selected work, and ways to connect.',
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
    name: 'Tracking App',
    label: 'Open Tracking App',
    description:
      'A full-stack application that demonstrates practical product workflows, API design, and role-based access.',
    status: 'Live project',
    href: LINKS.trackingApp,
    stack: ['React', 'Python', 'Django', 'PostgreSQL'],
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
    title: 'Full-stack craft',
    description:
      'Polished React interfaces backed by thoughtful Django, Flask, and PostgreSQL systems.',
  },
  {
    number: '02',
    title: 'Systems & APIs',
    description: 'Python libraries, REST integrations, SDKs, and automation that connect the work.',
  },
  {
    number: '03',
    title: 'Technical leadership',
    description:
      'Leading engineers, mentoring teammates, and interviewing candidates with high standards and empathy.',
  },
];

export const stats = [
  { value: '10+', label: 'years building software' },
  { value: '1,000+', label: 'customers supported' },
  { value: '10+', label: 'production apps delivered' },
  { value: '500+', label: 'automation scripts: Jenkins, Python, GitHub' },
] as const;
