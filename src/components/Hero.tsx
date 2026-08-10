import { LINKS, stats } from '../data/portfolio';
import { ExternalLink } from './ExternalLink';

export function Hero() {
  return (
    <section id="top" className="hero">
      <div className="eyebrow">Senior full-stack engineer | Dallas, TX</div>
      <h1>
        Software that makes
        <br />
        <em>teams move.</em>
      </h1>
      <p className="intro">
        I&apos;m Trevor Van Doren - a full-stack and Python engineer who builds durable products,
        developer tooling, and delivery systems. I pair hands-on architecture with the leadership
        needed to help teams ship.
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
