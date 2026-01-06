import { useState } from 'react';
import { motion } from 'framer-motion';
import { experiences } from '@/lib/data';
import { SectionTitle, SkillBadge } from '@/components/ui';
import styles from '@/styles/Experience.module.css';

export function Experience() {
  const [expandedIds, setExpandedIds] = useState<Set<string>>(new Set());

  const toggleExpanded = (id: string) => {
    setExpandedIds((prev) => {
      const newSet = new Set(prev);
      if (newSet.has(id)) {
        newSet.delete(id);
      } else {
        newSet.add(id);
      }
      return newSet;
    });
  };

  return (
    <section id="experience" className={styles.section}>
      <div className={styles.container}>
        <SectionTitle
          title="Experience"
          subtitle="My professional journey through the years"
        />

        <div className={styles.timeline}>
          {/* Timeline line */}
          <div className={styles.timelineLine} />

          {/* Experience items */}
          <div className={styles.timelineItems}>
            {experiences.map((exp, index) => (
              <motion.div
                key={exp.id}
                className={`${styles.timelineItem} ${index % 2 === 0 ? styles.timelineItemReverse : ''}`}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-100px' }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                {/* Timeline dot */}
                <div className={styles.timelineDot} />

                {/* Date badge - desktop */}
                <div
                  className={`${styles.dateColumn} ${
                    index % 2 === 0 ? styles.dateColumnLeft : styles.dateColumnRight
                  }`}
                >
                  <div className={styles.dateBadge}>
                    {exp.startDate} - {exp.endDate}
                  </div>
                </div>

                {/* Content card */}
                <div
                  className={`${styles.contentColumn} ${
                    index % 2 === 0 ? styles.contentColumnLeft : styles.contentColumnRight
                  }`}
                >
                  <motion.div
                    className={styles.card}
                    whileHover={{ scale: 1.02 }}
                    transition={{ duration: 0.2 }}
                  >
                    {/* Date badge - mobile */}
                    <div className={styles.mobileDateBadge}>
                      {exp.startDate} - {exp.endDate}
                    </div>

                    {/* Header - clickable on mobile */}
                    <div
                      className={styles.cardHeader}
                      onClick={() => toggleExpanded(exp.id)}
                    >
                      <div className={styles.headerTop}>
                        <div className={styles.headerContent}>
                          <h3 className={styles.role}>{exp.role}</h3>
                          <div className={styles.company}>
                            {exp.client ? `${exp.client} (${exp.company})` : exp.company}
                          </div>
                          <div className={styles.location}>
                            <svg className={styles.locationIcon} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                            </svg>
                            {exp.location}
                          </div>
                        </div>
                        {/* Expand/collapse icon - mobile only */}
                        <svg
                          className={`${styles.expandIcon} ${expandedIds.has(exp.id) ? styles.expandIconRotated : ''}`}
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                      </div>

                      {/* Summary text - shown when collapsed on mobile */}
                      <p className={`${styles.summaryText} ${expandedIds.has(exp.id) ? styles.summaryTextHidden : ''}`}>
                        {exp.description}
                      </p>
                    </div>

                    {/* Expandable content */}
                    <div className={`${styles.expandableContent} ${expandedIds.has(exp.id) ? styles.expandableContentOpen : ''}`}>
                      <div className={styles.expandableInner}>
                        {/* Description */}
                        <p className={styles.description}>{exp.description}</p>

                        {/* Highlights */}
                        <ul className={styles.highlightsList}>
                          {exp.highlights.slice(0, 3).map((highlight, i) => (
                            <li key={i} className={styles.highlightItem}>
                              <svg className={styles.highlightIcon} fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                              </svg>
                              {highlight}
                            </li>
                          ))}
                        </ul>

                        {/* Technologies */}
                        <div className={styles.techStackSection}>
                          <div className={styles.techStackHeader}>
                            <svg className={styles.techStackIcon} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                            </svg>
                            <span className={styles.techStackTitle}>Tech Stack</span>
                          </div>
                          <div className={styles.technologies}>
                            {exp.technologies.map((tech, i) => (
                              <SkillBadge key={tech} skill={tech} index={i} />
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
