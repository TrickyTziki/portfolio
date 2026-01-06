export interface PersonalInfo {
  name: string;
  title: string;
  location: string;
  email: string;
  phone: string;
  profile: string;
}

export interface Experience {
  id: string;
  company: string;
  client?: string;
  role: string;
  location: string;
  startDate: string;
  endDate: string;
  description: string;
  highlights: string[];
  technologies: string[];
}

export interface SkillCategory {
  name: string;
  skills: string[];
}

export interface Project {
  id: string;
  title: string;
  description: string;
  technologies: string[];
  highlights: string[];
  company: string;
}

export interface Education {
  degree: string;
  institution: string;
  location: string;
  year: string;
}

export interface Language {
  name: string;
  level: string;
}

export interface Certification {
  name: string;
}

export interface NavItem {
  label: string;
  href: string;
}
