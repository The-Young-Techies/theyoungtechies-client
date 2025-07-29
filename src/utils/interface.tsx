export interface NavLink {
  anker: string;
  href: string;
}

export interface SocialLink {
  icon: string;
  path: string;
  label: string;
}

export interface IEventStats {
  icon: string;
  label: string;
  value: number;
  suffix: string;
  description: string;
}

// ourApproach 
export interface ApproachStep {
  icon: string;
  title: string;
  description: string;
  bgColor?: string;
}

// ProjectsData 
export interface Project {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  liveUrl?: string;
  githubUrl?: string;
  techStack: string[];
}

// service 
export interface Service {
  title: string;
  description: string;
  bgColor: string;
  icon: string;
}

// faq 
export interface FAQItem {
  question: string;
  answer: string;
}

// team member 
export interface TeamMember {
  name: string;
  role: string;
  image: string;
  socials: {
    linkedin?: string;
    twitter?: string;
    instagram?: string;
  };
}

// Contact Interfaces 
export interface ContactMethod {
  icon: string;
  title: string;
  detail: string;
}

export interface FormField {
  placeholder: string;
  type: string;
  width: string;
}

// footer 
export interface FooterLink {
  label: string;
  href: string;
}

export interface FooterLinkSection {
  title: string;
  links: FooterLink[];
}

export interface FooterContactInfo {
  icon: React.ReactNode;
  value: string;
  href: string;
}

// CTA interface 
export interface CTAData {
  heading: string;
  subText: string;
  buttonText: string;
  backgroundImage: string;
}

// header interface 
export interface HeaderContent {
  title: string;
  highlight: string;
  description: string;
  primaryButton: string;
  showContact: boolean;
  imageUrl: string;
  imageAlt: string;
  ratings: {
    label: string;
    score: string;
    stars: number;
  };
}



