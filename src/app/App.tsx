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
      <Navbar />
      <main>
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
