import { LINKS } from '../data/portfolio';
import { ExternalLink } from './ExternalLink';

export function ExperienceSummary() {
  return (
    <section id="work" className="section">
      <div className="section-head">
        <div>
          <span className="kicker">01 / EXPERIENCE</span>
          <h2>
            Operational clarity.
            <br />
            Measurable impact.
          </h2>
        </div>
        <p>
          I look across delivery, runtime behavior, and team workflows to find the operational work
          worth eliminating or making more reliable.
        </p>
      </div>

      <div className="value-summary">
        <div>
          <span className="kicker">WHAT FUTURE TEAMS GET</span>
          <h3>
            An engineer who makes production systems easier to operate, improve, and trust.
          </h3>
        </div>
        <div className="value-points">
          <p>
            <b>Automate the repeatable.</b> Delivery workflows, environment tasks, and operational
            handoffs made faster and less error-prone with Python and CI/CD.
          </p>
          <p>
            <b>Build for recovery.</b> Observability, clear runbooks, and failure-aware integrations
            that make incidents easier to understand and resolve.
          </p>
          <p>
            <b>Raise the operating standard.</b> Hands-on leadership that improves documentation,
            incident habits, and the engineering practices around production.
          </p>
          <ExternalLink className="resume-text-link" href={LINKS.resume}>
            View the complete experience timeline &#8599;
          </ExternalLink>
        </div>
      </div>
    </section>
  );
}
