export interface Service {
  id: string;
  slug: string;
  title: string;
  shortDescription: string;
  fullDescription: string;
  whoItsFor: string[];
  problems: string[];
  deliverables: string[];
  tooling: string[];
  timeline: {
    starter: string;
    growth: string;
    enterprise: string;
  };
}

export interface CaseStudy {
  id: string;
  title: string;
  clientType: string;
  industry: string;
  challenge: string;
  approach: string[];
  results: {
    metric: string;
    value: string;
    description: string;
  }[];
  technologies: string[];
}

export interface Testimonial {
  id: string;
  quote: string;
  author: string;
  role: string;
  company: string;
}

export interface FAQ {
  question: string;
  answer: string;
}

export interface ProcessStep {
  number: string;
  title: string;
  description: string;
}

export interface PricingPlan {
  name: string;
  description: string;
  price: string;
  period: string;
  features: string[];
  cta: string;
  recommended?: boolean;
}
