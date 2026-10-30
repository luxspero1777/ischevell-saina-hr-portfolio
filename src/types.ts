export interface ExperienceItem {
  id: string;
  role: string;
  company: string;
  location: string;
  period: string;
  startYear: number;
  endYear: number;
  category: 'Hospitality' | 'Retail' | 'Manufacture' | 'Business' | 'Data';
  tagline: string;
  description: string;
  keyAchievements: string[];
  skillsApplied: string[];
}

export interface SkillCategory {
  title: string;
  subtitle: string;
  items: {
    name: string;
    level: string;
    description: string;
  }[];
}

export interface JobPosting {
  id: string;
  title: string;
  department: string;
  category: 'HR' | 'Retail' | 'Hospitality' | 'Operations' | 'General';
  companyType: string;
  location: string;
  workType: 'Full-Time' | 'Hybrid' | 'Kontrak';
  experienceRequired: string;
  salaryRange: string;
  postedDate: string;
  deadline: string;
  isFeatured?: boolean;
  overview: string;
  responsibilities: string[];
  requirements: string[];
  benefits: string[];
}

export interface ApplicationFormData {
  fullName: string;
  email: string;
  phone: string;
  positionId: string;
  positionTitle: string;
  cvLink: string;
  recentExperience: string;
  coverNote: string;
  portfolioLink?: string;
}
