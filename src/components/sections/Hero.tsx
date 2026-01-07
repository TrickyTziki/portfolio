import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { personalInfo } from "@/lib/data";
import { Button } from "@/components/ui";
import styles from "@/styles/Hero.module.css";
import { useEffect, useState, useRef, useCallback } from "react";

// Particle component for the interactive background
function Particle({}: { index: number }) {
  const randomX = Math.random() * 100;
  const randomY = Math.random() * 100;
  const randomDelay = Math.random() * 5;
  const randomDuration = 15 + Math.random() * 20;
  const size = Math.random() * 4 + 1;

  return (
    <motion.div
      className={styles.particle}
      style={{
        left: `${randomX}%`,
        top: `${randomY}%`,
        width: size,
        height: size,
      }}
      animate={{
        y: [0, -30, 0],
        x: [0, Math.random() * 20 - 10, 0],
        opacity: [0, 1, 0],
        scale: [0, 1, 0],
      }}
      transition={{
        duration: randomDuration,
        repeat: Infinity,
        delay: randomDelay,
        ease: "easeInOut",
      }}
    />
  );
}

// Floating orb component
function FloatingOrb({
  className,
  delay = 0,
}: {
  className: string;
  delay?: number;
}) {
  return (
    <motion.div
      className={`${styles.orb} ${className}`}
      animate={{
        y: [0, -50, 0],
        x: [0, 30, 0],
        scale: [1, 1.2, 1],
        rotate: [0, 180, 360],
      }}
      transition={{
        duration: 20,
        repeat: Infinity,
        delay,
        ease: "easeInOut",
      }}
    />
  );
}

// Code rain effect
function CodeRain() {
  const characters =
    "01アイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨラリルレロワヲン";
  const columns = 20;

  return (
    <div className={styles.codeRain}>
      {Array.from({ length: columns }).map((_, i) => (
        <motion.div
          key={i}
          className={styles.codeColumn}
          style={{ left: `${(i / columns) * 100}%` }}
          initial={{ y: "-100%" }}
          animate={{ y: "100vh" }}
          transition={{
            duration: 8 + Math.random() * 10,
            repeat: Infinity,
            delay: Math.random() * 5,
            ease: "linear",
          }}
        >
          {Array.from({ length: 20 }).map((_, j) => (
            <span key={j} style={{ opacity: 1 - j * 0.05 }}>
              {characters[Math.floor(Math.random() * characters.length)]}
            </span>
          ))}
        </motion.div>
      ))}
    </div>
  );
}

// Glitch text component
function GlitchText({ children }: { children: string }) {
  return (
    <span className={styles.glitchWrapper}>
      <span className={styles.glitchText} data-text={children}>
        {children}
      </span>
    </span>
  );
}

// Typing effect hook
function useTypingEffect(
  texts: string[],
  typingSpeed = 100,
  deletingSpeed = 50,
  pauseDuration = 2000
) {
  const [displayText, setDisplayText] = useState("");
  const [textIndex, setTextIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentText = texts[textIndex];

    const timeout = setTimeout(
      () => {
        if (!isDeleting) {
          if (displayText.length < currentText.length) {
            setDisplayText(currentText.slice(0, displayText.length + 1));
          } else {
            setTimeout(() => setIsDeleting(true), pauseDuration);
          }
        } else {
          if (displayText.length > 0) {
            setDisplayText(displayText.slice(0, -1));
          } else {
            setIsDeleting(false);
            setTextIndex((prev) => (prev + 1) % texts.length);
          }
        }
      },
      isDeleting ? deletingSpeed : typingSpeed
    );

    return () => clearTimeout(timeout);
  }, [
    displayText,
    isDeleting,
    textIndex,
    texts,
    typingSpeed,
    deletingSpeed,
    pauseDuration,
  ]);

  return displayText;
}

// Mouse follower component
function MouseFollower() {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { damping: 25, stiffness: 150 };
  const x = useSpring(mouseX, springConfig);
  const y = useSpring(mouseY, springConfig);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX - 200);
      mouseY.set(e.clientY - 200);
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [mouseX, mouseY]);

  return <motion.div className={styles.mouseFollower} style={{ x, y }} />;
}

// 3D Tilt card component
function TiltCard({ children }: { children: React.ReactNode }) {
  const ref = useRef<HTMLDivElement>(null);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const rotateX = useSpring(useTransform(mouseY, [-0.5, 0.5], [10, -10]), {
    stiffness: 150,
    damping: 20,
  });
  const rotateY = useSpring(useTransform(mouseX, [-0.5, 0.5], [-10, 10]), {
    stiffness: 150,
    damping: 20,
  });

  const handleMouseMove = useCallback(
    (e: React.MouseEvent<HTMLDivElement>) => {
      if (!ref.current) return;
      const rect = ref.current.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width - 0.5;
      const y = (e.clientY - rect.top) / rect.height - 0.5;
      mouseX.set(x);
      mouseY.set(y);
    },
    [mouseX, mouseY]
  );

  const handleMouseLeave = useCallback(() => {
    mouseX.set(0);
    mouseY.set(0);
  }, [mouseX, mouseY]);

  return (
    <motion.div
      ref={ref}
      className={styles.tiltCard}
      style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      {children}
    </motion.div>
  );
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
    "React Specialist",
    "Cloud Architect",
    "Problem Solver",
    "Code Craftsman",
  ];
  const typedTitle = useTypingEffect(titles);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <section id="home" className={styles.hero}>
      {/* Mouse follower */}
      {mounted && <MouseFollower />}

      {/* Code rain background */}
      <CodeRain />

      {/* Animated gradient background */}
      <div className={styles.gradientBg}>
        <div className={styles.gradientBlob1} />
        <div className={styles.gradientBlob2} />
        <div className={styles.gradientBlob3} />
      </div>

      {/* Floating orbs */}
      <FloatingOrb className={styles.orb1} delay={0} />
      <FloatingOrb className={styles.orb2} delay={2} />
      <FloatingOrb className={styles.orb3} delay={4} />

      {/* Particle field */}
      <div className={styles.particleField}>
        {Array.from({ length: 50 }).map((_, i) => (
          <Particle key={i} index={i} />
        ))}
      </div>

      {/* Grid overlay */}
      <div className={styles.gridOverlay} />

      {/* Scan line effect */}
      <div className={styles.scanLines} />

      {/* Main content */}
      <div className={styles.content}>
        <TiltCard>
          {/* Status badge */}
          <motion.div
            className={styles.statusBadge}
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, type: "spring" }}
          >
            <span className={styles.statusDot} />
            <span>Available for opportunities</span>
          </motion.div>

          {/* Greeting with wave */}
          <motion.p
            className={styles.greeting}
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <motion.span
              className={styles.wave}
              animate={{ rotate: [0, 20, -10, 20, 0] }}
              transition={{ duration: 1.5, repeat: Infinity, repeatDelay: 2 }}
            >
              👋
            </motion.span>{" "}
            Hello, I'm
          </motion.p>

          {/* Glitch name */}
          <motion.h1
            className={styles.name}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3, type: "spring" }}
          >
            <GlitchText>{personalInfo.name}</GlitchText>
          </motion.h1>

          {/* Animated title with typing effect */}
          <motion.div
            className={styles.titleWrapper}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            <span className={styles.titleBracket}>&lt;</span>
            <h2 className={styles.title}>
              {typedTitle}
              <span className={styles.cursor}>|</span>
            </h2>
            <span className={styles.titleBracket}>/&gt;</span>
          </motion.div>

          {/* Animated tagline */}
          <motion.p
            className={styles.tagline}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            Crafting <span className={styles.highlight}>exceptional</span>{" "}
            digital experiences with{" "}
            <span className={styles.highlight}>cutting-edge</span> technologies.
            Transforming complex problems into elegant solutions.
          </motion.p>

          {/* Stats row */}
          <motion.div
            className={styles.stats}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.7 }}
          >
            <div className={styles.statItem}>
              <span className={styles.statValue}>
                <AnimatedCounter value={4} suffix="+" />
              </span>
              <span className={styles.statLabel}>Years Exp.</span>
            </div>
            <div className={styles.statDivider} />
            <div className={styles.statItem}>
              <span className={styles.statValue}>
                <AnimatedCounter value={10} suffix="+" />
              </span>
              <span className={styles.statLabel}>Projects</span>
            </div>
            <div className={styles.statDivider} />
            <div className={styles.statItem}>
              <span className={styles.statValue}>
                <AnimatedCounter value={30} suffix="+" />
              </span>
              <span className={styles.statLabel}>Technologies</span>
            </div>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            className={styles.buttons}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
          >
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button href="#contact" size="lg" className={styles.primaryBtn}>
                <span className={styles.btnContent}>
                  <span>Let's Talk</span>
                  <svg
                    className={styles.btnIcon}
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </span>
              </Button>
            </motion.div>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button
                href="#experience"
                variant="outline"
                size="lg"
                className={styles.outlineBtn}
              >
                <span className={styles.btnContent}>
                  <span>Explore Work</span>
                  <svg
                    className={styles.btnIcon}
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                  </svg>
                </span>
              </Button>
            </motion.div>
          </motion.div>

          {/* Tech stack preview */}
          <motion.div
            className={styles.techStack}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 1 }}
          >
            <span className={styles.techLabel}>Tech Stack</span>
            <div className={styles.techIcons}>
              {["React", "Node.js", "TypeScript", "AWS", "UI/UX"].map(
                (tech, i) => (
                  <motion.div
                    key={tech}
                    className={styles.techBadge}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1.1 + i * 0.1 }}
                    whileHover={{ y: -5, scale: 1.1 }}
                  >
                    {tech}
                  </motion.div>
                )
              )}
            </div>
          </motion.div>
        </TiltCard>
      </div>

      {/* Corner decorations */}
      <div className={styles.cornerTL} />
      <div className={styles.cornerTR} />
      <div className={styles.cornerBL} />
      <div className={styles.cornerBR} />
    </section>
  );
}
