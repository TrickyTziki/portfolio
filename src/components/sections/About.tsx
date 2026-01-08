import { motion } from "framer-motion";
import { personalInfo } from "@/lib/data";
import { SectionTitle, OrbitCompetencies } from "@/components/ui";
import styles from "@/styles/About.module.css";
import profileImage from "@/assets/Amazing guy.jpg";

const competencies = [
  "Performance Optimization",
  "UI/UX Design",
  "Web Services Integration",
  "CI/CD Automation",
  "Component Architecture",
  "Agile Collaboration",
  "Accessibility (WCAG)",
  "Technical Documentation",
  "Multilingual Communication",
];

export function About() {
  const highlights = [
    { label: "Years Experience", value: "4+" },
    { label: "Projects Delivered", value: "10+" },
    { label: "Technologies", value: "30+" },
    { label: "Languages Spoken", value: "5" },
  ];

  return (
    <section id="about" className={styles.section}>
      <div className={styles.container}>
        <SectionTitle
          title="About Me"
          subtitle="Get to know my background and what drives me"
        />

        <div className={styles.grid}>
          {/* Profile Text */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
            <div className={styles.profileText}>
              {personalInfo.profile.split("\n\n").map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
            </div>

            {/* Highlights Grid */}
            <div className={styles.highlights}>
              {highlights.map((item, index) => (
                <motion.div
                  key={item.label}
                  className={styles.highlightItem}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                >
                  <div className={styles.highlightValue}>{item.value}</div>
                  <div className={styles.highlightLabel}>{item.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Profile Image */}
          <motion.div
            className={styles.profileImageWrapper}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
            <div className={styles.imageContainer}>
              <img
                src={profileImage}
                alt="Stefanos Stoikos"
                className={styles.profileImage}
              />
              <div className={styles.imageGlow} />
            </div>
          </motion.div>
        </div>

        {/* Core Competencies */}
        <motion.div
          className={styles.competenciesSection}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h3 className={styles.competenciesHeading}>Core Competencies</h3>
          <OrbitCompetencies competencies={competencies} />
        </motion.div>
      </div>
    </section>
  );
}
