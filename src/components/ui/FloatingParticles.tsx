import { useState, useEffect } from "react";
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
  xDirection: number;
}

function generateParticles(
  count: number,
  minSize: number,
  maxSize: number
): Particle[] {
  return Array.from({ length: count }, (_, i) => ({
    id: i,
    x: Math.random() * 100,
    y: Math.random() * 100,
    size: minSize + Math.random() * (maxSize - minSize),
    duration: 15 + Math.random() * 15,
    delay: Math.random() * 5,
    opacity: 0.1 + Math.random() * 0.3,
    xDirection: Math.random() > 0.5 ? 15 : -15,
  }));
}

export function FloatingParticles({
  particleCount = 30,
  minSize = 2,
  maxSize = 6,
  className = "",
}: FloatingParticlesProps) {
  const [particles, setParticles] = useState<Particle[]>([]);

  useEffect(() => {
    setParticles(generateParticles(particleCount, minSize, maxSize));
  }, [particleCount, minSize, maxSize]);

  if (particles.length === 0) {
    return null;
  }

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
            x: [0, particle.xDirection, 0],
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
