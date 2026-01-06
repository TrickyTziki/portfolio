import type {
  PersonalInfo,
  Experience,
  SkillCategory,
  Education,
  Language,
  Certification,
  NavItem,
} from "@/types";

export const personalInfo: PersonalInfo = {
  name: "Stefanos Stoikos",
  title: "Full Stack Developer",
  location: "Lennik, Belgium",
  email: "stefanos.stoikos@outlook.com",
  phone: "+32 479 22 85 95",
  profile: `Dynamic Full Stack Developer with 4+ years of experience delivering scalable, user-focused web applications across industries including automotive (Toyota), fast food (McDonald's), and consulting (Devoteam, Inetum). Skilled in Angular, React, Node.js, and AWS, with strong attention to analysis, UX, accessibility, and performance.

Proven track record in driving digital transformation, improving operational efficiency, and leading end-to-end feature development in agile, cross-functional teams. Known for translating complex needs into robust solutions, mentoring peers, and ensuring high code quality through testing and documentation.`,
};

export const navItems: NavItem[] = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Skills", href: "#skills" },
  { label: "Contact", href: "#contact" },
];

export const experiences: Experience[] = [
  {
    id: "rimses-raw",
    company: "Inetum",
    client: "RIMSES/RAW",
    role: "Software Development Consultant",
    location: "Braine, Belgium",
    startDate: "July 2025",
    endDate: "December 2025",
    description:
      "End-to-end delivery of two modern websites by combining React front-end engineering with Sanity CMS configuration and integration.",
    highlights: [
      "Co-created wireframes and interactive prototypes with UI/UX designer, ensuring WCAG 2.1 accessibility standards",
      "Configured Sanity as a scalable, modular content platform with custom schemas and editorial workflows",
      "Developed performant, SEO-optimized React applications with reusable components and state management",
      "Mentored peers on CMS best practices and acted as technical counterpart to design teams",
    ],
    technologies: [
      "React",
      "TypeScript",
      "Sanity CMS",
      "Tailwindcss",
      "Vite.JS",
      "Figma",
    ],
  },
  {
    id: "toyota",
    company: "Inetum",
    client: "Toyota",
    role: "Software Development and Support Consultant",
    location: "Zaventem, Belgium",
    startDate: "December 2024",
    endDate: "May 2025",
    description:
      "Developed and maintained multiple microservices and frontend components to support the full user journey: ordering a car, managing owned vehicles, and accessing the customer space.",
    highlights: [
      "Led end-to-end development of a new OTP authentication application, improving account security",
      "Fixed production issues in a turn-based support role, reducing resolution time",
      "Took responsibility for WCAG 2.1 accessibility compliance across Toyota web pages using Crownpeak",
      "Ensured 100% test coverage through unit and integration testing",
    ],
    technologies: [
      "React",
      "Redux",
      "Node.js",
      "AWS",
      "TypeScript",
      "AEM",
      "MongoDB",
    ],
  },
  {
    id: "devoteam-cv",
    company: "Devoteam",
    client: "MyDevoteam & CV Generator",
    role: "Software Development Consultant",
    location: "Zaventem, Belgium",
    startDate: "April 2023",
    endDate: "November 2023",
    description:
      "Built a web platform to standardize CV creation across all consultants, offering branded templates and best practices.",
    highlights: [
      "Designed and developed the frontend of MyDevoteam website with templates and structured CV creation steps",
      "Built the full frontend of CV Generator tool for automatic styled CV generation",
      "Collaborated on chatbot development to assist consultants with CV-related questions",
      "Contributed to cohesive UX aligned with Devoteam brand identity",
    ],
    technologies: [
      "React",
      "Node.js",
      "TypeScript",
      "Tailwindcss",
      "NLP",
      "Chatbot",
      "MySQL",
    ],
  },
  {
    id: "mcdonalds",
    company: "Devoteam",
    client: "McDonald's",
    role: "Software Development Consultant",
    location: "Zaventem, Belgium",
    startDate: "December 2022",
    endDate: "April 2023",
    description:
      "Developed a support tool for managing all Point of Sale devices used across McDonald's restaurants in Belgium.",
    highlights: [
      "Built backend services and frontend components for automated device tracking and monitoring",
      "Accessed and processed SMB2 file shares to retrieve critical POS data in real-time",
      "Contributed to foundational work for AWS migration with cloud-ready architecture",
      "Ensured responsive and intuitive UX for non-technical support users",
    ],
    technologies: [
      "React",
      "Node.js",
      "TypeScript",
      "AWS",
      "TypeScript",
      "Redux",
      "DynamoDB",
    ],
  },
  {
    id: "das-repair",
    company: "Devoteam",
    client: "DAS - Corpoclaim",
    role: "Software Development Consultant",
    location: "Brussels, Belgium",
    startDate: "June 2022",
    endDate: "December 2022",
    description:
      "Web application to replace a legacy insurance tool, handling around 50 complex form-based workflows for claim calculations.",
    highlights: [
      "Developed and maintained frontend features integrating with REST APIs",
      "Built reusable UI components and PDF export functionality for claim reports",
      "Contributed to the shared DAS UI package used across multiple projects",
      "Collaborated with cross-functional teams for accurate data processing",
    ],
    technologies: [
      "React",
      "Node.js",
      "NestJS",
      "TypeScript",
      "wkhtmltopdf",
      "MySQL",
    ],
  },
  {
    id: "das-smartpay",
    company: "Devoteam",
    client: "DAS - Smart Pay Process",
    role: "Software Development Consultant",
    location: "Brussels, Belgium",
    startDate: "January 2022",
    endDate: "June 2022",
    description:
      "Streamlined invoice validation process using automation and AI-powered pre-filling to reduce manual workload.",
    highlights: [
      "Developed frontend application for reviewing AI pre-filled invoice data",
      "Built multiple screens including forms, navigation, and validation steps",
      "Defined GraphQL data models and queries for backend integration",
      "Helped reduce processing time by enabling faster invoice approvals",
    ],
    technologies: [
      "React",
      "Node.js",
      "NestJS",
      "GraphQL",
      "TypeScript",
      "MySQL",
    ],
  },
  {
    id: "xkwadraat",
    company: "Devoteam",
    client: "Xkwadraat",
    role: "Software Development Consultant",
    location: "Zaventem, Belgium",
    startDate: "October 2021",
    endDate: "January 2022",
    description:
      "Platform enabling companies to conduct anonymous gender equality surveys among employees.",
    highlights: [
      "Developed multiple frontend pages for user interactions and survey data display",
      "Consumed REST APIs for CRUD operations on user, company, and survey data",
      "Designed key UI components for survey creation, submission, and results visualization",
      "Ensured data integrity and responsiveness across different organizations",
    ],
    technologies: [
      "React",
      "Node.js",
      "Express",
      "TypeScript",
      "Tailwindcss",
      "MySQL",
    ],
  },
  {
    id: "mobco",
    company: "Mobco",
    role: "Software Development and Support (Summer Job)",
    location: "Zaventem, Belgium",
    startDate: "June 2019",
    endDate: "September 2019",
    description:
      "Enhanced the Mobile Management System to help helpdesk employees identify and resolve IT-related issues.",
    highlights: [
      "Developed frontend interface mapping employee-reported issues with potential root causes",
      "Created bidirectional view for helpdesk agents to visualize problem-cause relationships",
      "Implemented suggestion engine recommending most common cause based on reported problems",
      "Provided support services for existing applications",
    ],
    technologies: [
      "JavaScript",
      "Python",
      "HTML5",
      "CSS3",
      "Bootstrap",
      "SQL",
      "PHP",
    ],
  },
  {
    id: "avelon",
    company: "Avelon",
    role: "Software Developer",
    location: "Gent, Belgium",
    startDate: "February 2019",
    endDate: "May 2019",
    description:
      "Developed notification system to automate payment reminders and avoid overdue payment costs.",
    highlights: [
      "Developed frontend interface for scheduling bill payment reminder notifications",
      "Designed forms triggering backend batch jobs for streamlined notification creation",
      "Improved payment compliance with simple scheduling tools for enterprise users",
    ],
    technologies: [
      "ABAP",
      "SAPUI5",
      "JavaScript",
      "jQuery",
      "SQL",
      "Bootstrap",
    ],
  },
];

export const skillCategories: SkillCategory[] = [
  {
    name: "Frontend",
    skills: [
      "React",
      "Redux",
      "NextJS",
      "Angular",
      "RxJS",
      "TypeScript",
      "JavaScript",
      "HTML5",
      "CSS3/Scss/Sass",
      "Tailwindcss",
      "Bootstrap",
    ],
  },
  {
    name: "Backend",
    skills: [
      "Node.js",
      "Express",
      "NestJS",
      "Java",
      "Spring Boot & MVC",
      "PHP",
      "GraphQL",
      "REST API",
    ],
  },
  {
    name: "Database",
    skills: ["SQL", "MongoDB", "Firebase", "PostgreSQL", "DynamoDB", "MySQL"],
  },
  {
    name: "Cloud & DevOps",
    skills: ["AWS", "Docker", "Kubernetes", "CI/CD"],
  },
  {
    name: "Tools & Platforms",
    skills: [
      "Git",
      "Vite",
      "Webpack",
      "Figma",
      "AEM CMS",
      "Sanity CMS",
      "NPM",
      "Postman",
      "Agile (Scrum)",
    ],
  },
  {
    name: "Testing",
    skills: ["Jest", "JUnit", "Karma", "Jasmine", "Cypress"],
  },
];

export const education: Education[] = [
  {
    degree: "Bachelor in Multimedia and Creative Technologies",
    institution: "EhB (Erasmushogeschool Brussel)",
    location: "Brussels, Belgium",
    year: "2021",
  },
  {
    degree: "Bachelor in Applied Computer Science",
    institution: "EhB (Erasmushogeschool Brussel)",
    location: "Brussels, Belgium",
    year: "2019",
  },
];

export const languages: Language[] = [
  { name: "French", level: "Native" },
  { name: "English", level: "Fluent" },
  { name: "Dutch", level: "Fluent" },
  { name: "Greek", level: "Fluent" },
  { name: "German", level: "Basic" },
];

export const certifications: Certification[] = [
  { name: "AWS Certified Developer – Associate" },
];
