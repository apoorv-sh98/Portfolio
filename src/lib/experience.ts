export type Job = {
  role: string;
  org: string;
  orgNote?: string;
  location: string;
  period: string;
  points: string[];
};

export type Education = {
  degree: string;
  school: string;
  location: string;
  period: string;
};

export type SkillGroup = { category: string; items: string[] };

// Sourced from résumé. Keep in sync with public/resume/ApoorvSharma_Resume.pdf.
export const workExperience: Job[] = [
  {
    role: "Software Engineer",
    org: "Amazon",
    location: "Bellevue, WA, USA",
    period: "Dec 2024 – Present",
    points: [
      "Led end-to-end delivery of a policy-data pipeline across three services, replacing a complex legacy model with a simplified schema — owning design, implementation, and a phased, flag-gated rollout that anchored a larger platform migration.",
      "Root-caused a production thread-starvation outage in a Kotlin service to a nested run-blocking call deadlocking the coroutine dispatcher; confirmed via a load-tested revert and drove stuck threads to zero.",
      "Built an automated API-throttling monitor (CloudTrail → CloudWatch → scheduled Lambda) that detects traffic nearing AWS AppConfig limits, uncovering a misconfiguration concentrating 7,000+ TPS on the wrong endpoint.",
      "Designed a cross-service signal propagating intent metadata through a multi-system pipeline, fixing a gap where ~50% of intentionally delayed orders shipped early.",
    ],
  },
  {
    role: "Software Engineer",
    org: "Clairvoyant Intelligence",
    orgNote: "formerly D&G Analytics, Inc.",
    location: "Rochester, NY, USA (Remote)",
    period: "May 2023 – Nov 2024",
    points: [
      "Built virtualized infrastructure on KubeVirt and CDI over Kubernetes and AWS, with an Async-io backend pipeline to deploy and manage Windows VMs for archive-extraction jobs.",
      "Built a Python tool integrating 'Universal Extractor 2' and a custom Auto-It script for Windows GUI control, automating archive extractions for a 52% reduction in manual processing time.",
      "Optimized the extraction process by focusing on file headers, demonstrating an 83% increase in extraction efficiency.",
    ],
  },
  {
    role: "Software Developer",
    org: "Amdocs Development Center India LLP",
    location: "Gurgaon, HR, India",
    period: "Aug 2020 – Jul 2022",
    points: [
      "Engineered a message handler for Telstra's OSS platform using Spring Boot, bridging downstream Apache Kafka traffic with upstream REST APIs bi-directionally.",
      "Hardened API security by integrating Amdocs's core security layer, redirecting unauthorized requests before they reached Spring controllers at the Kubernetes cluster layer.",
      "Led development of an automation framework using Cucumber and TestNG, integrated with a Spring Boot app that simulated Kafka transactions, slashing average testing duration by 70%.",
    ],
  },
];

export const education: Education[] = [
  {
    degree: "Master of Science, Computer Science",
    school: "University of Rochester",
    location: "Rochester, NY, USA",
    period: "Aug 2022 – Dec 2023",
  },
  {
    degree: "Bachelor of Engineering, Computer Engineering",
    school: "Thapar Institute of Engineering and Technology",
    location: "Patiala, PB, India",
    period: "Jul 2016 – Jul 2020",
  },
];

export const skills: SkillGroup[] = [
  { category: "Languages", items: ["Kotlin", "Java", "Python", "Shell", "SQL", "JavaScript", "Auto-It"] },
  { category: "Frameworks", items: ["Spring Boot", "Async-io", "Tornado", "NATS", "Apache Kafka", "ReactJS", "PyTorch", "GraphQL", "Cucumber", "JUnit", "TestNG", "Unittest"] },
  { category: "Technologies", items: ["KubeVirt", "CDI", "Microservices", "REST", "OAuth", "SAML", "SOAP", "Postgres", "Design Patterns", "Web services"] },
  { category: "Tools", items: ["Docker", "Kubernetes", "Git", "Linux/Unix", "Jenkins", "CI/CD", "Maven", "Postman", "Swagger", "JIRA", "IntelliJ", "VS Code"] },
  { category: "Cloud", items: ["AWS", "OpenStack"] },
  { category: "Methodologies", items: ["OOP", "Agile", "Data Structures & Algorithms", "Distributed Systems", "Concurrency & Coroutines", "Deep Learning"] },
];
