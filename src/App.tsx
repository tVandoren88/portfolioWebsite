import { ThemeProvider } from "@mui/material";
import theme from "./theme";
import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import BackToTop from "./components/BackToTop";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
          <Header />
          <Hero/>
          <About />
          <Skills />
          <Experience />
          <Projects />
          <Contact />
          <BackToTop/>
          <Footer />
      </ThemeProvider>
    </>
  );
}
