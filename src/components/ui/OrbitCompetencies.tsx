import { motion } from "framer-motion";
import styles from "@/styles/OrbitCompetencies.module.css";

interface OrbitCompetenciesProps {
  competencies: string[];
  className?: string;
}

export function OrbitCompetencies({
  competencies,
  className = "",
}: OrbitCompetenciesProps) {
  return (
    <div
      className={`${styles.container} ${className}`.trim()}
      aria-label="Core competencies"
    >
      {competencies.map((competency, index) => (
        <motion.div
          key={competency}
          className={styles.competencyItem}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{
            duration: 0.4,
            delay: index * 0.05,
          }}
          whileHover={{ scale: 1.05, y: -2 }}
        >
          <span className={styles.dot} />
          {competency}
        </motion.div>
      ))}
    </div>
  );
}
