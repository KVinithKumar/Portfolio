export interface Project {
  id: string;
  title: string;
  description: string;
  technologies: string[];
  image?: string;
  link?: string;
  github?: string;
}

export interface Experience {
  id: string;
  company: string;
  position: string;
  duration: string;
  description: string;
  link?: string;
}

export interface Education {
  id: string;
  institution: string;
  degree: string;
  duration: string;
  grade?: string;
}

export interface Skill {
  category: string;
  items: string[];
}