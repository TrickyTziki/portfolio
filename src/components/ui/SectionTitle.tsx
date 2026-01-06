import { motion } from 'framer-motion';
import styles from '@/styles/SectionTitle.module.css';

interface SectionTitleProps {
  title: string;
  subtitle?: string;
}

export function SectionTitle({ title, subtitle }: SectionTitleProps) {
  return (
    <motion.div
      className={styles.container}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <h2 className={styles.title}>
        <span className={styles.titleText}>{title}</span>
      </h2>
      {subtitle && (
        <p className={styles.subtitle}>{subtitle}</p>
      )}
      <motion.div
        className={styles.divider}
        initial={{ width: 0 }}
        whileInView={{ width: 96 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.2 }}
      />
    </motion.div>
  );
}
