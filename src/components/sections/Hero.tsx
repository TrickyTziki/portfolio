import { motion } from "framer-motion";
import { personalInfo } from "@/lib/data";
import { Button } from "@/components/ui";
import styles from "@/styles/Hero.module.css";
import { useEffect, useState } from "react";

// Subtle text reveal animation
function useTextReveal(texts: string[], interval = 4000) {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % texts.length);
    }, interval);

    return () => clearInterval(timer);
  }, [texts.length, interval]);

  return texts[currentIndex];
}

// Animated counter component
function AnimatedCounter({
  value,
  suffix = "",
}: {
  value: number;
  suffix?: string;
}) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const duration = 2000;
    const steps = 60;
    const increment = value / steps;
    let current = 0;

    const timer = setInterval(() => {
      current += increment;
      if (current >= value) {
        setCount(value);
        clearInterval(timer);
      } else {
        setCount(Math.floor(current));
      }
    }, duration / steps);

    return () => clearInterval(timer);
  }, [value]);

  return (
    <span>
      {count}
      {suffix}
    </span>
  );
}

export function Hero() {
  const titles = [
    "Full Stack Developer",
    "API & Backend Integration",
    "Solution Designer",
    "UX-Driven Development",
    "Accessibility (WCAG 2.1)",
    "Performance Optimization",
  ];
  const currentTitle = useTextReveal(titles);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.25, 0.46, 0.45, 0.94],
      },
    },
  };

  return (
    <section id="home" className={styles.hero}>
      {/* Subtle background gradient */}
      <div className={styles.backgroundGradient} />

      {/* Elegant decorative line */}
      <div className={styles.decorativeLine} />

      {/* Main content */}
      <motion.div
        className={styles.content}
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Greeting - elegant */}
        <motion.p className={styles.greeting} variants={itemVariants}>
          Hello, I'm
        </motion.p>

        {/* Name - sophisticated typography */}
        <motion.h1 className={styles.name} variants={itemVariants}>
          {personalInfo.name}
        </motion.h1>

        {/* Title with elegant transition */}
        <motion.div className={styles.titleWrapper} variants={itemVariants}>
          <motion.h2
            key={currentTitle}
            className={styles.title}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.5 }}
          >
            {currentTitle}
          </motion.h2>
        </motion.div>

        {/* Tagline - refined */}
        <motion.p className={styles.tagline} variants={itemVariants}>
          Crafting <span className={styles.highlight}>exceptional</span> digital
          experiences with precision and elegance. Transforming complex
          challenges into refined solutions.
        </motion.p>

        {/* Stats row - minimal */}
        <motion.div className={styles.stats} variants={itemVariants}>
          <div className={styles.statItem}>
            <span className={styles.statValue}>
              <AnimatedCounter value={4} suffix="+" />
            </span>
            <span className={styles.statLabel}>Years Experience</span>
          </div>
          <div className={styles.statDivider} />
          <div className={styles.statItem}>
            <span className={styles.statValue}>
              <AnimatedCounter value={10} suffix="+" />
            </span>
            <span className={styles.statLabel}>Projects Delivered</span>
          </div>
          <div className={styles.statDivider} />
          <div className={styles.statItem}>
            <span className={styles.statValue}>
              <AnimatedCounter value={30} suffix="+" />
            </span>
            <span className={styles.statLabel}>Technologies</span>
          </div>
        </motion.div>

        {/* CTA Buttons - elegant */}
        <motion.div className={styles.buttons} variants={itemVariants}>
          <Button href="#contact" size="lg" className={styles.primaryBtn}>
            <span className={styles.btnContent}>
              <span>Get in Touch</span>
              <svg
                className={styles.btnIcon}
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
              >
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </span>
          </Button>
          <Button
            href="#experience"
            variant="outline"
            size="lg"
            className={styles.outlineBtn}
          >
            <span className={styles.btnContent}>
              <span>View Experience</span>
              <svg
                className={styles.btnIcon}
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
              >
                <path d="M19 14l-7 7m0 0l-7-7m7 7V3" />
              </svg>
            </span>
          </Button>
        </motion.div>

        {/* Tech expertise - subtle */}
        <motion.div className={styles.expertise} variants={itemVariants}>
          <span className={styles.expertiseLabel}>Core Expertise</span>
          <div className={styles.expertiseTags}>
            {["React", "Node.js", "TypeScript", "AWS", "UI/UX"].map((tech) => (
              <span key={tech} className={styles.expertiseTag}>
                {tech}
              </span>
            ))}
          </div>
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        className={styles.scrollIndicator}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
      >
        <span className={styles.scrollText}>Scroll</span>
        <motion.div
          className={styles.scrollLine}
          animate={{ scaleY: [0, 1, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        />
      </motion.div>
    </section>
  );
}
