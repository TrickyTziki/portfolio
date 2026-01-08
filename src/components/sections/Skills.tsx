import { motion } from "framer-motion";
import {
  skillCategories,
  education,
  languages,
  certifications,
} from "@/lib/data";
import { SectionTitle, Card } from "@/components/ui";
import { skillIconsByCategory, flagIcons } from "@/components/icons/SkillIcons";
import styles from "@/styles/Skills.module.css";

const categoryIcons: Record<string, JSX.Element> = {
  Frontend: (
    <svg
      className={styles.icon}
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
      />
    </svg>
  ),
  Backend: (
    <svg
      className={styles.icon}
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01"
      />
    </svg>
  ),
  Database: (
    <svg
      className={styles.icon}
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4"
      />
    </svg>
  ),
  "Cloud & DevOps": (
    <svg
      className={styles.icon}
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z"
      />
    </svg>
  ),
  "Tools & Platforms": (
    <svg
      className={styles.icon}
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
      />
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
      />
    </svg>
  ),
  Testing: (
    <svg
      className={styles.icon}
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
      />
    </svg>
  ),
};

export function Skills() {
  return (
    <section id="skills" className={styles.section}>
      <div className={styles.container}>
        <SectionTitle
          title="Skills & Technologies"
          subtitle="The tools and technologies I work with"
        />

        <div className={styles.grid}>
          {skillCategories.map((category, categoryIndex) => (
            <Card key={category.name}>
              <div className={styles.cardHeader}>
                <div className={styles.iconWrapper}>
                  {categoryIcons[category.name] || (
                    <svg
                      className={styles.icon}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M4 6h16M4 12h16M4 18h16"
                      />
                    </svg>
                  )}
                </div>
                <h3 className={styles.categoryName}>{category.name}</h3>
              </div>

              <div className={styles.skillsList}>
                {category.skills.map((skill, skillIndex) => {
                  const skillIcons = skillIconsByCategory[category.name];
                  const SkillIcon = skillIcons?.[skill] ?? null;

                  return (
                    <motion.div
                      key={skill}
                      className={styles.skillItem}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{
                        duration: 0.3,
                        delay: categoryIndex * 0.1 + skillIndex * 0.05,
                      }}
                    >
                      {SkillIcon ? (
                        <SkillIcon className={styles.skillIcon} />
                      ) : (
                        <div className={styles.skillDot} />
                      )}
                      <span className={styles.skillName}>{skill}</span>
                    </motion.div>
                  );
                })}
              </div>
            </Card>
          ))}
        </div>

        {/* Education & Credentials Section */}
        <motion.div
          className={styles.credentialsSection}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h3 className={styles.credentialsSectionTitle}>
            Education & Credentials
          </h3>

          <div className={styles.credentialsGrid}>
            {/* Education Card */}
            <Card>
              <h4 className={styles.credentialTitle}>
                <svg
                  className={styles.credentialIcon}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 14l9-5-9-5-9 5 9 5z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"
                  />
                </svg>
                Education
              </h4>
              <div className={styles.educationList}>
                {education.map((edu) => (
                  <div key={edu.degree} className={styles.educationItem}>
                    <div className={styles.educationDegree}>{edu.degree}</div>
                    <div className={styles.educationInstitution}>
                      {edu.institution}
                    </div>
                    <div className={styles.educationYear}>{edu.year}</div>
                  </div>
                ))}
              </div>
            </Card>

            {/* Languages Card */}
            <Card>
              <h4 className={styles.credentialTitle}>
                <svg
                  className={styles.credentialIcon}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129"
                  />
                </svg>
                Languages
              </h4>
              <div className={styles.languagesList}>
                {languages.map((lang) => {
                  const FlagIcon = flagIcons[lang.name];
                  return (
                    <div key={lang.name} className={styles.languageItem}>
                      {FlagIcon && <FlagIcon className={styles.languageFlag} />}
                      <span className={styles.languageName}>{lang.name}</span>
                      <span className={styles.languageLevel}>({lang.level})</span>
                    </div>
                  );
                })}
              </div>
            </Card>

            {/* Certifications Card */}
            <Card>
              <h4 className={styles.credentialTitle}>
                <svg
                  className={styles.credentialIcon}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"
                  />
                </svg>
                Certifications
              </h4>
              <div className={styles.certificationsList}>
                {certifications.map((cert) => (
                  <div key={cert.name} className={styles.certificationItem}>
                    <svg
                      className={styles.certCheckIcon}
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      />
                    </svg>
                    {cert.name}
                  </div>
                ))}
              </div>
            </Card>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
