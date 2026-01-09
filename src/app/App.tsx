import { Navbar, Footer } from "@/components/layout";
import {
  Hero,
  About,
  Experience,
  Skills,
  Contact,
} from "@/components/sections";
import styles from "../styles/App.module.css";

export function App() {
  return (
    <div className={styles.app}>
      {/* Skip to main content link for accessibility */}
      <a href="#main-content" className={styles.skipLink}>
        Skip to main content
      </a>
      <header>
        <Navbar />
      </header>
      <main id="main-content">
        <Hero />
        <About />
        <Experience />
        <Skills />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
