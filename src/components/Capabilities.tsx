import { capabilities } from '../data/portfolio';

export function Capabilities() {
  return (
    <section className="capabilities">
      <span className="kicker">02 / WHAT I BRING</span>
      <div className="cap-grid">
        {capabilities.map((capability) => (
          <article key={capability.number}>
            <b>{capability.number}</b>
            <h3>{capability.title}</h3>
            <p>{capability.description}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
