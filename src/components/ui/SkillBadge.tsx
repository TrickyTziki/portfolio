import { motion } from 'framer-motion';
import styles from '@/styles/SkillBadge.module.css';

interface SkillBadgeProps {
  skill: string;
  index?: number;
}

export function SkillBadge({ skill, index = 0 }: SkillBadgeProps) {
  return (
    <motion.span
      className={styles.badge}
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.3, delay: index * 0.05 }}
      whileHover={{ scale: 1.05 }}
    >
      {skill}
    </motion.span>
  );
}
