export type ProjectCategory = 
  | 'All'
  | 'AI & LLMs'
  | 'Multi-Agent Systems'
  | 'Data & Voice AI'
  | 'Systems & Geospatial';

export interface ProjectMetric {
  label: string;
  value: string;
}

export interface ArchitectureStep {
  step: string;
  title: string;
  detail: string;
}

export interface Project {
  id: string;
  title: string;
  tagline: string;
  category: ProjectCategory;
  tags: string[];
  metrics: ProjectMetric[];
  summary: string;
  problem: string;
  solution: string;
  whyItMatters: string;
  architectureDesc: string;
  architectureSteps: ArchitectureStep[];
  technologies: string[];
  results: string[];
  githubUrl?: string;
  demoUrl?: string;
  paperUrl?: string;
  image?: string;
  featured: boolean;
}

export interface Publication {
  id: string;
  title: string;
  authors: string;
  venue: string;
  year: number | string;
  citations?: number;
  doi?: string;
  arxiv?: string;
  url?: string;
  summary: string;
  badge?: string;
}

export interface Experience {
  id: string;
  role: string;
  company: string;
  location: string;
  period: string;
  type: 'Research' | 'Industry';
  summary: string;
  responsibilities: string[];
  technologies: string[];
  measurableOutcomes: string[];
}

export interface SkillItem {
  name: string;
  featured?: boolean;
}

export interface SkillCategory {
  title: string;
  description: string;
  iconName: string;
  skills: SkillItem[];
}

export interface EducationItem {
  degree: string;
  field: string;
  institution: string;
  location: string;
  period: string;
  gpa?: string;
  details: string[];
}
