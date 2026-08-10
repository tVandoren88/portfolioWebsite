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
        <p>&ldquo;The most useful systems make complex work feel inevitable.&rdquo;</p>
        <div>React &middot; Django &middot; Python &middot; REST APIs &middot; CI/CD</div>
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
