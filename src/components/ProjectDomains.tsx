import { projects } from '../data/portfolio';
import { ExternalLink } from './ExternalLink';

export function ProjectDomains() {
  return (
    <section id="domains" className="section domains">
      <div className="section-head">
        <div>
          <span className="kicker">03 / THE DOMAIN MAP</span>
          <h2>
            One name.
            <br />A suite of proof.
          </h2>
        </div>
      </div>
      <div className="domain-grid">
        {projects.map((project) => (
          <ProjectCard key={project.subdomain} project={project} />
        ))}
      </div>
    </section>
  );
}

type ProjectCardProps = {
  project: (typeof projects)[number];
};

function ProjectCard({ project }: ProjectCardProps) {
  const className = [
    'domain-card',
    project.subdomain === 'resume' && 'resume-card',
    project.demoAccounts && 'has-demo-logins',
  ]
    .filter(Boolean)
    .join(' ');

  const cardContent = (
    <>
      <div className="browser" aria-hidden="true">
        <span />
        <span />
        <span />
      </div>
      <span className="status">{project.status}</span>
      <code>{project.subdomain}.tvandoren.dev</code>
      <h3>{project.name}</h3>
      <p>{project.description}</p>
      {project.stack && (
        <div className="project-stack" aria-label="Technology stack">
          {project.stack.map((technology) => (
            <span key={technology}>{technology}</span>
          ))}
        </div>
      )}
      {project.demoAccounts && (
        <div className="demo-logins">
          <span className="demo-logins-title">Demo logins</span>
          {project.demoAccounts.map((account) => (
            <p key={account.role}>
              <b>{account.role}:</b> {account.email} / {account.password}
            </p>
          ))}
        </div>
      )}
      <span className="domain-label">
        {project.label} {'↗'}
      </span>
    </>
  );

  if (project.href.startsWith('http')) {
    return (
      <ExternalLink className={className} href={project.href}>
        {cardContent}
      </ExternalLink>
    );
  }

  return (
    <a className={className} href={project.href}>
      {cardContent}
    </a>
  );
}
