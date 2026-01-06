import { motion } from 'framer-motion';
import type { ReactNode } from 'react';
import styles from '@/styles/Card.module.css';

interface CardProps {
  children: ReactNode;
  className?: string;
  hover?: boolean;
}

export function Card({ children, className = '', hover = true }: CardProps) {
  return (
    <motion.div
      className={`${styles.card} ${className}`.trim()}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.5 }}
      whileHover={hover ? { y: -5, boxShadow: '0 20px 40px rgba(139, 92, 246, 0.1)' } : undefined}
    >
      {children}
    </motion.div>
  );
}
