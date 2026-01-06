import { useMemo } from "react";
import { motion } from "framer-motion";
import styles from "@/styles/FloatingParticles.module.css";

interface FloatingParticlesProps {
  particleCount?: number;
  minSize?: number;
  maxSize?: number;
  className?: string;
}

interface Particle {
  id: number;
  x: number;
  y: number;
  size: number;
  duration: number;
  delay: number;
  opacity: number;
}

export function FloatingParticles({
  particleCount = 30,
  minSize = 2,
  maxSize = 6,
  className = "",
}: FloatingParticlesProps) {
  const particles = useMemo<Particle[]>(() => {
    return Array.from({ length: particleCount }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: minSize + Math.random() * (maxSize - minSize),
      duration: 15 + Math.random() * 15,
      delay: Math.random() * 5,
      opacity: 0.1 + Math.random() * 0.3,
    }));
  }, [particleCount, minSize, maxSize]);

  return (
    <div
      className={`${styles.container} ${className}`.trim()}
      aria-hidden="true"
    >
      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          className={styles.particle}
          style={{
            left: `${particle.x}%`,
            top: `${particle.y}%`,
            width: particle.size,
            height: particle.size,
            opacity: particle.opacity,
          }}
          animate={{
            y: [0, -30, 0],
            x: [0, Math.random() > 0.5 ? 15 : -15, 0],
          }}
          transition={{
            duration: particle.duration,
            repeat: Infinity,
            delay: particle.delay,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
}
