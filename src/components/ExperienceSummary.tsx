import { LINKS } from '../data/portfolio';
import { ExternalLink } from './ExternalLink';

export function ExperienceSummary() {
  return (
    <section id="work" className="section">
      <div className="section-head">
        <div>
          <span className="kicker">01 / EXPERIENCE</span>
          <h2>
            Broad experience.
            <br />
            Useful from day one.
          </h2>
        </div>
        <p>
          I bring the range to see the whole system and the practical judgment to improve the part
          that matters most.
        </p>
      </div>

      <div className="value-summary">
        <div>
          <span className="kicker">WHAT FUTURE TEAMS GET</span>
          <h3>
            A builder who can move from the customer experience to the delivery pipeline - without
            losing the business goal.
          </h3>
        </div>
        <div className="value-points">
          <p>
            <b>Ship with confidence.</b> React and API product work backed by Python, Django,
            testing, and reliable data systems.
          </p>
          <p>
            <b>Untangle complexity.</b> Integrations, SDKs, automation, and regulated workflows made
            clearer, faster, and easier to maintain.
          </p>
          <p>
            <b>Raise the team.</b> Hands-on technical leadership, mentoring, thoughtful
            interviewing, and a bias toward better engineering habits.
          </p>
          <ExternalLink className="resume-text-link" href={LINKS.resume}>
            View the complete experience timeline &#8599;
          </ExternalLink>
        </div>
      </div>
    </section>
  );
}
