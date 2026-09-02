import { LINKS } from '../data/portfolio';
import { ExternalLink } from './ExternalLink';

export function Contact() {
  return (
    <section id="contact" className="contact">
      <span className="kicker">04 / LET&apos;S TALK</span>
      <h2>
        Making production
        <br />
        <em>more reliable?</em>
      </h2>
      <p>
        I&apos;m open to automation and SRE conversations, especially where production reliability,
        delivery systems, and strong engineering habits need to move together.
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
