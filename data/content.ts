import type { Service, CaseStudy, Testimonial, FAQ, ProcessStep, PricingPlan } from '@/types/index';

export const services: Service[] = [
  {
    id: 'cloud',
    slug: 'cloud-devops',
    title: 'Cloud DevOps',
    shortDescription: 'AWS, Azure, GCP. Built for scale, cost, and compliance.',
    fullDescription:
      'We design, build, and operate cloud infrastructure that scales with your business. From initial architecture to cost optimization, we ensure your cloud environment is secure, compliant, and performant.',
    whoItsFor: [
      'Companies migrating from on-premise to cloud',
      'Startups building cloud-native applications',
      'Enterprises optimizing multi-cloud environments',
      'Teams struggling with cloud cost management',
    ],
    problems: [
      'Unpredictable cloud costs spiraling out of control',
      'Security gaps and compliance concerns',
      'Slow deployment cycles blocking releases',
      'Lack of visibility into infrastructure performance',
      'Difficulty scaling during traffic spikes',
    ],
    deliverables: [
      'Cloud architecture design and documentation',
      'Infrastructure as Code (Terraform/Pulumi)',
      'Cost optimization analysis and implementation',
      'Security hardening and compliance setup',
      'Disaster recovery and backup strategies',
      'Performance monitoring and alerting',
    ],
    tooling: ['AWS', 'Azure', 'GCP', 'Terraform', 'Pulumi', 'Kubernetes', 'Docker', 'Ansible'],
    timeline: {
      starter: '2-4 weeks',
      growth: '1-3 months',
      enterprise: '3-6 months',
    },
  },
  {
    id: 'onprem',
    slug: 'on-prem-devops',
    title: 'On-Prem DevOps',
    shortDescription: 'Modern DevOps practices for your data center. Hybrid-ready.',
    fullDescription:
      'Bring modern DevOps automation to your on-premise infrastructure. We help you implement CI/CD, containerization, and infrastructure as code without sacrificing control or security.',
    whoItsFor: [
      'Organizations with data sovereignty requirements',
      'Companies with significant on-premise investments',
      'Industries with strict compliance needs (finance, healthcare)',
      'Teams planning gradual cloud migration',
    ],
    problems: [
      'Manual processes slowing down deployments',
      'Legacy infrastructure difficult to manage',
      'Lack of automation and standardization',
      'Skills gap in modern DevOps practices',
      'Integration challenges with cloud services',
    ],
    deliverables: [
      'On-premise Kubernetes or container platform setup',
      'CI/CD pipeline implementation',
      'Configuration management automation',
      'Monitoring and logging infrastructure',
      'Hybrid cloud connectivity solutions',
      'Documentation and knowledge transfer',
    ],
    tooling: ['Kubernetes', 'Docker', 'Jenkins', 'GitLab CI', 'Ansible', 'Puppet', 'Chef', 'VMware'],
    timeline: {
      starter: '3-4 weeks',
      growth: '2-4 months',
      enterprise: '4-8 months',
    },
  },
  {
    id: 'cicd',
    slug: 'ci-cd-automation',
    title: 'CI/CD Automation',
    shortDescription: 'Fast, reliable pipelines. Deploy with confidence.',
    fullDescription:
      'Automate your software delivery from commit to production. We build CI/CD pipelines that enable frequent, reliable releases with built-in quality gates and security checks.',
    whoItsFor: [
      'Teams releasing software multiple times per week',
      'Organizations struggling with deployment failures',
      'Companies needing audit trails for compliance',
      'Development teams wanting faster feedback loops',
    ],
    problems: [
      'Manual deployments causing errors and downtime',
      'Long build and test cycles delaying releases',
      'Inconsistent environments between dev and prod',
      'Lack of automated testing and quality checks',
      'Difficulty rolling back failed deployments',
    ],
    deliverables: [
      'End-to-end CI/CD pipeline design',
      'Automated build, test, and deployment workflows',
      'Environment promotion strategies',
      'Secret management and security scanning',
      'Deployment rollback procedures',
      'Pipeline monitoring and optimization',
    ],
    tooling: ['GitHub Actions', 'GitLab CI', 'Jenkins', 'ArgoCD', 'Flux', 'CircleCI', 'Travis CI', 'Spinnaker'],
    timeline: {
      starter: '1-2 weeks',
      growth: '2-6 weeks',
      enterprise: '1-3 months',
    },
  },
  {
    id: 'observability',
    slug: 'observability-sre',
    title: 'Observability & SRE',
    shortDescription: 'Monitoring, alerting, incident response—sleep better.',
    fullDescription:
      'Implement Site Reliability Engineering practices that keep your systems running. From comprehensive monitoring to incident response, we help you achieve reliability at scale.',
    whoItsFor: [
      'Teams experiencing frequent outages or incidents',
      'Companies needing better system visibility',
      'Organizations adopting SRE practices',
      'Teams struggling with alert fatigue',
    ],
    problems: [
      'Frequent outages with unknown root causes',
      'Alert fatigue from too many notifications',
      'Slow incident response and recovery times',
      'Lack of visibility into system behavior',
      'No clear SLOs or error budgets',
    ],
    deliverables: [
      'Monitoring and observability platform setup',
      'Custom dashboards and alerting rules',
      'SLO definition and error budget tracking',
      'Incident response runbooks and procedures',
      'On-call rotation and escalation policies',
      'Post-incident review process implementation',
    ],
    tooling: ['Prometheus', 'Grafana', 'Datadog', 'New Relic', 'PagerDuty', 'Opsgenie', 'ELK Stack', 'Jaeger'],
    timeline: {
      starter: '2-3 weeks',
      growth: '1-2 months',
      enterprise: '2-4 months',
    },
  },
];

export const caseStudies: CaseStudy[] = [
  {
    id: 'retail-migration',
    title: 'Retail Platform Migration',
    clientType: 'Mid-size E-commerce',
    industry: 'Retail',
    challenge:
      'Legacy on-premise infrastructure could not handle seasonal traffic spikes, causing frequent outages during peak sales periods. The company needed to migrate to cloud while maintaining PCI DSS compliance.',
    approach: [
      'Conducted comprehensive infrastructure assessment and cost modeling',
      'Designed multi-AZ cloud architecture with auto-scaling capabilities',
      'Implemented Infrastructure as Code for reproducible environments',
      'Built CI/CD pipelines with automated security scanning',
      'Created disaster recovery plan with RPO < 1 hour',
    ],
    results: [
      {
        metric: 'Cost Reduction',
        value: '40%',
        description: 'Monthly infrastructure costs reduced through right-sizing and reserved instances',
      },
      {
        metric: 'Uptime',
        value: '99.99%',
        description: 'Achieved during peak Black Friday traffic, zero downtime',
      },
      {
        metric: 'Deployment Time',
        value: '85%',
        description: 'Reduction in time to deploy new features',
      },
    ],
    technologies: ['AWS', 'Terraform', 'Kubernetes', 'GitHub Actions', 'Datadog'],
  },
  {
    id: 'fintech-cicd',
    title: 'Fintech CI/CD Transformation',
    clientType: 'B2B Fintech Startup',
    industry: 'Financial Services',
    challenge:
      'Manual deployment processes were error-prone and slow, releasing only once per month. The team needed to accelerate delivery while maintaining SOC 2 compliance and audit trails.',
    approach: [
      'Designed GitOps-based deployment workflow with ArgoCD',
      'Implemented automated testing pipeline with 90%+ code coverage',
      'Built secrets management with HashiCorp Vault integration',
      'Created environment promotion strategy with approval gates',
      'Established compliance documentation automation',
    ],
    results: [
      {
        metric: 'Deployment Frequency',
        value: '10x',
        description: 'Increased from monthly to multiple times per day',
      },
      {
        metric: 'Lead Time',
        value: '80%',
        description: 'Reduction in time from commit to production',
      },
      {
        metric: 'Change Failure Rate',
        value: '<2%',
        description: 'Down from 15% with automated rollback capability',
      },
    ],
    technologies: ['GitLab CI', 'ArgoCD', 'Kubernetes', 'Vault', 'SonarQube'],
  },
  {
    id: 'saas-observability',
    title: 'SaaS Observability Implementation',
    clientType: 'Enterprise SaaS',
    industry: 'Software',
    challenge:
      'The platform experienced frequent incidents with slow mean time to recovery (MTTR). The team lacked visibility into system behavior and was overwhelmed by alert noise.',
    approach: [
      'Implemented unified observability platform with distributed tracing',
      'Defined SLOs and error budgets for critical services',
      'Created intelligent alerting with reduced false positives',
      'Built incident response runbooks and on-call procedures',
      'Established post-incident review process',
    ],
    results: [
      {
        metric: 'MTTR',
        value: '70%',
        description: 'Reduction in mean time to recovery',
      },
      {
        metric: 'Alert Noise',
        value: '85%',
        description: 'Reduction in false positive alerts',
      },
      {
        metric: 'Incident Detection',
        value: '<3min',
        description: 'Average time to detect critical issues',
      },
    ],
    technologies: ['Datadog', 'PagerDuty', 'Prometheus', 'Grafana', 'Jaeger'],
  },
];

export const testimonials: Testimonial[] = [
  {
    id: '1',
    quote: 'KreateRevo cut our deployment time from hours to minutes. Their approach to documentation and knowledge transfer ensured our team could maintain everything independently.',
    author: 'Marcus Weber',
    role: 'Engineering Lead',
    company: 'Fintech Startup',
  },
  {
    id: '2',
    quote: 'Finally, a team that documents everything. The infrastructure they built is not only robust but also understandable. Our onboarding time for new engineers dropped significantly.',
    author: 'Sarah Müller',
    role: 'CTO',
    company: 'B2B SaaS Company',
  },
  {
    id: '3',
    quote: 'They turned our cloud bill into a predictable metric. The cost optimization alone paid for their services within the first quarter.',
    author: 'Thomas Schmidt',
    role: 'VP Platform',
    company: 'E-commerce Platform',
  },
];

export const faqs: FAQ[] = [
  {
    question: 'Do you work with on-premise and cloud environments?',
    answer:
      'Yes, we specialize in both. Many of our clients have hybrid setups or are in various stages of cloud migration. We design solutions that work with your current infrastructure while preparing you for future growth.',
  },
  {
    question: 'How long does a typical migration take?',
    answer:
      'Timeline depends on scope and complexity. A pilot migration might take 2-4 weeks, while a full enterprise migration can span 3-6 months. We always start with a thorough assessment to provide accurate estimates.',
  },
  {
    question: 'Do you provide 24/7 support?',
    answer:
      'Our Growth and Enterprise plans include on-call support with defined SLAs. We can also establish 24/7 coverage for critical systems with escalation procedures tailored to your needs.',
  },
  {
    question: 'What does "done" look like?',
    answer:
      'We define success metrics upfront—whether that is deployment frequency, cost reduction, uptime targets, or mean time to recovery. You receive full documentation, runbooks, and knowledge transfer to ensure your team can operate independently.',
  },
  {
    question: 'Can you work within our compliance requirements?',
    answer:
      'Absolutely. We have experience with SOC 2, ISO 27001, GDPR, HIPAA, and PCI DSS. We build compliance into the infrastructure from day one, not as an afterthought.',
  },
  {
    question: 'How do we get started?',
    answer:
      'Book a free consultation through our website. We will discuss your current challenges, goals, and constraints. Within a week, you will receive a detailed proposal with scope, timeline, and pricing.',
  },
];

export const processSteps: ProcessStep[] = [
  {
    number: '01',
    title: 'Discover',
    description:
      'We map your systems, identify risks, and understand your constraints. This includes infrastructure audit, stakeholder interviews, and goal alignment.',
  },
  {
    number: '02',
    title: 'Design',
    description:
      'We create architecture and runbooks tailored to your stack. Every design decision is documented and reviewed with your team before implementation.',
  },
  {
    number: '03',
    title: 'Build',
    description:
      'We implement infrastructure as code, pipelines, and guardrails. All work is version-controlled, tested, and deployed through automated processes.',
  },
  {
    number: '04',
    title: 'Operate',
    description:
      'We monitor, optimize, and hand off cleanly. Knowledge transfer ensures your team can maintain and extend what we have built together.',
  },
];

export const pricingPlans: PricingPlan[] = [
  {
    name: 'Starter',
    description: 'Advisory and roadmap for teams getting started',
    price: '€3,500',
    period: 'per month',
    features: [
      'Infrastructure assessment',
      'Architecture recommendations',
      'Monthly advisory calls',
      'Documentation templates',
      'Email support',
    ],
    cta: 'Get Started',
  },
  {
    name: 'Growth',
    description: 'Hands-on build and operate for growing teams',
    price: '€7,500',
    period: 'per month',
    features: [
      'Everything in Starter',
      'Hands-on implementation',
      'CI/CD pipeline setup',
      'Monitoring and alerting',
      'Weekly sync calls',
      'On-call support (business hours)',
      'Knowledge transfer sessions',
    ],
    cta: 'Most Popular',
    recommended: true,
  },
  {
    name: 'Enterprise',
    description: 'Embedded team with SLA for large organizations',
    price: 'Custom',
    period: 'tailored engagement',
    features: [
      'Everything in Growth',
      'Dedicated team allocation',
      '24/7 on-call support',
      'Custom SLA guarantees',
      'Quarterly business reviews',
      'Training and workshops',
      'Priority response times',
    ],
    cta: 'Contact Us',
  },
];

export const whyChooseUs = [
  {
    title: 'Speed',
    description:
      'We deliver working infrastructure in weeks, not months. Our iterative approach means you see value from day one.',
  },
  {
    title: 'Reliability',
    description:
      'We build systems that stay up. Our designs prioritize fault tolerance, automated recovery, and clear escalation paths.',
  },
  {
    title: 'Transparency',
    description:
      'No black boxes. Every decision is documented, every change is tracked, and you maintain full ownership of your infrastructure.',
  },
  {
    title: 'Security',
    description:
      'Security is built in, not bolted on. From least-privilege access to encryption at rest and in transit, we follow industry best practices.',
  },
  {
    title: 'Documentation',
    description:
      'We write everything down. Runbooks, architecture decisions, and operational procedures are part of every deliverable.',
  },
];

export const securityFeatures = [
  {
    title: 'Identity & Access',
    description:
      'Least privilege, MFA, SSO, and audit-ready access logs. Every access request is logged and reviewable.',
  },
  {
    title: 'Encryption',
    description: 'Data encrypted at rest and in transit. Key rotation policies and secure secret management.',
  },
  {
    title: 'Network Security',
    description: 'VPC isolation, security groups, WAF, and DDoS protection. Defense in depth at every layer.',
  },
  {
    title: 'Compliance',
    description:
      'SOC 2, ISO 27001, GDPR-ready controls. Regular audits and continuous compliance monitoring.',
  },
];
