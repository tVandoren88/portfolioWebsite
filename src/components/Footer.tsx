import { LINKS } from '../data/portfolio';
import { ExternalLink } from './ExternalLink';

export function Footer() {
  return (
    <>
      <footer>
        <span>&copy; {new Date().getFullYear()} Trevor Van Doren</span>
        <span>Designed to make the work speak.</span>
      </footer>
      <ExternalLink className="sticky-resume" href={LINKS.resume}>
        Open resume <b>&#8599;</b>
      </ExternalLink>
    </>
  );
}
