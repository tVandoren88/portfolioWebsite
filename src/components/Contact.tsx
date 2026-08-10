import { LINKS } from '../data/portfolio';
import { ExternalLink } from './ExternalLink';

export function Contact() {
  return (
    <section id="contact" className="contact">
      <span className="kicker">04 / LET&apos;S TALK</span>
      <h2>
        Building something
        <br />
        <em>that matters?</em>
      </h2>
      <p>
        I&apos;m open to senior full-stack and Python engineering conversations, especially where
        strong systems and strong teams meet.
      </p>
      <ExternalLink className="button light" href={LINKS.linkedin}>
        Message on LinkedIn <b>&#8599;</b>
      </ExternalLink>
      <div className="contact-links">
        <ExternalLink href={LINKS.github}>GitHub &#8599;</ExternalLink>
        <ExternalLink href={LINKS.linkedin}>LinkedIn &#8599;</ExternalLink>
      </div>
    </section>
  );
}
