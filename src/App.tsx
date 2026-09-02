import { Capabilities } from './components/Capabilities';
import { Contact } from './components/Contact';
import { ExperienceSummary } from './components/ExperienceSummary';
import { Footer } from './components/Footer';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { ProjectDomains } from './components/ProjectDomains';

function App() {
  return (
    <main>
      <Header />
      <Hero />
      <section className="statement">
        <p>&ldquo;Reliable systems make the right work feel routine.&rdquo;</p>
        <div>Automation &middot; Observability &middot; CI/CD &middot; Incident response &middot; Python</div>
      </section>
      <ExperienceSummary />
      <Capabilities />
      <ProjectDomains />
      <Contact />
      <Footer />
    </main>
  );
}

export default App;
