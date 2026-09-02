import { LINKS, stats } from '../data/portfolio';
import { ExternalLink } from './ExternalLink';

export function Hero() {
  return (
    <section id="top" className="hero">
      <div className="eyebrow">Automation &amp; Site Reliability Engineer | Dallas, TX</div>
      <h1>
        Systems that stay
        <br />
        <em>reliable.</em>
      </h1>
      <p className="intro">
        I&apos;m Trevor Van Doren, an automation and SRE-minded engineer who turns manual operational
        work into durable systems. I build the tooling, delivery practices, and feedback loops that
        help teams run production with confidence.
      </p>
      <div className="actions">
        <a className="button primary" href="#work">
          Explore my work <b>&#8595;</b>
        </a>
        <ExternalLink className="button" href={LINKS.linkedin}>
          LinkedIn &#8599;
        </ExternalLink>
      </div>
      <div className="stats">
        {stats.map((stat) => (
          <div key={stat.label}>
            <strong>{stat.value}</strong>
            <span>{stat.label}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
