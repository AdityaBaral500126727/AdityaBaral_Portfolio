export interface Project {
  id: string;
  number: string;
  title: string;
  subtitle: string;
  category: string;
  role: string;
  timeline: string;
  repositoryUrl?: string;
  liveUrl?: string;
  summary: string;
  problemStatement: string;
  keyContributions: string[];
  technicalDecisions: string[];
  technologies: string[];
  aspectRatio: string;
  screenshotPath: string; // Left empty for user to manually insert actual screenshots
  screenshotLabel?: string;
}

export interface ExperienceItem {
  id: string;
  period: string;
  role: string;
  organization: string;
  location: string;
  type: "internship" | "education" | "leadership" | "volunteering";
  summary: string;
  highlights: string[];
  technologies?: string[];
  imagePath?: string;
  imageCaption?: string;
}

export interface SkillCategory {
  id: string;
  index: string;
  title: string;
  description: string;
  skills: string[];
}

export const PORTFOLIO_DATA = {
  profile: {
    name: "Aditya Baral",
    title: "Software Developer | Full-Stack & Backend Engineering",
    tagline: "Building scalable web applications, robust APIs, and reliable backend systems.",
    positioning:
      "Computer Science Engineering student at UPES with software development internship experience at Xebia and ONGC GEOPIC. Focused on turning complex business workflows into maintainable, secure, and production-ready applications.",
    aboutShort:
      "I build practical software applications and understand the backend systems that power them. From real-time event pipelines to multi-tenant authorization and API architectures, I enjoy engineering software that is testable, secure, and built for maintainability.",
    location: "India",
    education: {
      institution: "University of Petroleum and Energy Studies (UPES)",
      degree: "Bachelor of Technology (B.Tech)",
      specialization: "Computer Science Engineering",
      score: "CGPA 8.1 / 10",
      graduationYear: "2027",
    },
    links: {
      github: "https://github.com/AdityaBaral500126727",
      linkedin: "https://linkedin.com/in/aditya-baral",
      email: "aditya.baral.work@gmail.com", // Verified professional email placeholder
      resumeUrl: "/Aditya_Baral_Resume.pdf",
    },
    status: {
      availableForWork: true,
      label: "Available for Software Engineering Roles",
    },
  },

  projects: [
    {
      id: "intern-resource-hub",
      number: "01",
      title: "Intern Resource Hub — ONGC",
      subtitle: "Enterprise Intern Management & Resource Delivery System",
      category: "Full-Stack Application Development",
      role: "Software Development Intern",
      timeline: "June 2025 – July 2025",
      repositoryUrl: "https://github.com/AdityaBaral500126727/Intern-Resource-Hub",
      summary:
        "A full-stack intern resource-management application built during internship at ONGC GEOPIC to streamline resource access, task tracking, and document delivery across intern cohorts.",
      problemStatement:
        "Intern coordination across multiple departments previously suffered from fragmented file sharing, unstructured milestone tracking, and manual access provisioning.",
      keyContributions: [
        "Implemented structured intern onboarding and task-tracking workflows connecting frontend actions to Firestore.",
        "Integrated Google Drive API for automated document delivery and centralized permissioned file distribution.",
        "Engineered role-based authentication and secure access-control rules to segregate intern and supervisor views.",
        "Designed responsive UI components in React ensuring seamless interaction across desktop and tablet devices.",
      ],
      technicalDecisions: [
        "Selected Firebase Firestore for low-latency document synchronization and flexible schema prototyping.",
        "Separated file storage via Google Drive API from metadata persistence to optimize bandwidth and operational costs.",
      ],
      technologies: ["React", "Firebase Firestore", "Google Drive API", "JavaScript", "CSS3", "RBAC"],
      aspectRatio: "16/10",
      screenshotPath: "/projects/intern-resource-hub.jpg",
    },
    {
      id: "secure-document-platform",
      number: "02",
      title: "Secure Document Intelligence Platform",
      subtitle: "Real-Time File Monitoring & Ingestion Pipeline",
      category: "Backend Systems & Real-Time Events",
      role: "Backend & Systems Developer",
      timeline: "Academic & Personal Engineering",
      repositoryUrl: "https://github.com/AdityaBaral500126727/Secure-Document-Management-and-Intellligence-Platform",
      summary:
        "A real-time document monitoring and threat intelligence platform that tracks operating system file-system events, calculates dynamic event risk scores, and pushes instant telemetry updates via WebSockets.",
      problemStatement:
        "Detecting unauthorized directory alterations and rapid file mutations requires continuous file-system monitoring without degrading host CPU or blocking request loops.",
      keyContributions: [
        "Built a non-blocking file-system observer using Chokidar to monitor granular file creation, modification, and deletion events.",
        "Developed a multi-factor event scoring engine in Express.js that evaluates anomaly risk and persists records to MongoDB.",
        "Implemented real-time bi-directional telemetry streaming via Socket.IO for sub-second UI alert visualization.",
        "Structured modular error boundaries and resilient reconnection mechanisms to handle socket interruptions.",
      ],
      technicalDecisions: [
        "Leveraged Node.js event-driven architecture with Chokidar rather than polling-based disk reads to maintain minimal memory overhead.",
        "Engineered a debounced event ingestion queue preventing socket flooding during batch file operations.",
      ],
      technologies: ["Node.js", "Express.js", "Socket.IO", "Chokidar", "MongoDB", "Mongoose", "React"],
      aspectRatio: "16/10",
      screenshotPath: "/projects/secure-document-platform.jpg",
    },
    {
      id: "multi-tenant-exam-platform",
      number: "03",
      title: "Multi-Tenant Examination Platform",
      subtitle: "Enterprise Examination Infrastructure & Code Sandbox",
      category: "Enterprise Backend Development",
      role: "Software Development Intern — Xebia",
      timeline: "June 2026 – July 2026",
      summary:
        "An enterprise examination platform engineered to support multi-tenant academic and corporate evaluations with strict tenant isolation, role-based authorization gates, and automated code execution.",
      problemStatement:
        "Large-scale evaluations demand rigorous student identity verification, isolated tenant data boundaries, and safe execution of arbitrary code submissions without host compromise.",
      keyContributions: [
        "Contributed to Spring Boot backend services managing tenant configuration, assessment schedules, and student allocations.",
        "Integrated JWT-based authentication with role-based access control (RBAC) protecting proctor and candidate endpoints.",
        "Assisted in integrating the Judge0 sandbox API for sandboxed execution and automated test-case scoring.",
        "Generated and maintained comprehensive OpenAPI (Swagger) API documentation and Dockerized local development environments.",
      ],
      technicalDecisions: [
        "Adopted microservices-oriented Spring Boot architecture to decouple authentication services from the assessment grading pipeline.",
        "Utilized externalized sandbox execution to guarantee untrusted candidate code remains quarantined from the primary database.",
      ],
      technologies: ["Java", "Spring Boot", "TypeScript", "JWT / MFA", "Docker", "OpenAPI / Swagger", "Judge0"],
      aspectRatio: "16/10",
      screenshotPath: "/projects/xebia-exam-platform.jpg",
    },
    {
      id: "spring-boot-escalation",
      number: "04",
      title: "Workload Escalation & Monitoring System",
      subtitle: "State-Driven Employee Overload Mitigation Engine",
      category: "Java Backend Engineering",
      role: "Java Backend Developer",
      timeline: "Enterprise Systems Work",
      summary:
        "A Java-based workload-monitoring service that audits employee task allocations, calculates overload thresholds, and triggers structured managerial escalation lifecycles.",
      problemStatement:
        "Unbalanced sprint workload allocation frequently leads to burnout and missed delivery targets when task spikes go undetected by management.",
      keyContributions: [
        "Implemented deterministic workload calculation rules assessing task weights and active time allocations.",
        "Built a state machine governing escalation states: Triggered, In-Review, Reassigned, and Resolved.",
        "Constructed Spring Data JPA repository layers with transactions ensuring immutable audit records for all status updates.",
        "Wrote unit and integration test suites validating state progression boundaries and unauthorized state change rejections.",
      ],
      technicalDecisions: [
        "Structured explicit domain entity states using Spring Data JPA enums and lifecycle listeners for auditable change logs.",
        "Implemented optimistic locking to prevent concurrent manager reassignment conflicts on disputed tickets.",
      ],
      technologies: ["Java", "Spring Boot", "Spring Data JPA", "PostgreSQL", "REST APIs", "JUnit"],
      aspectRatio: "16/10",
      screenshotPath: "/projects/workload-escalation-monitoring.png",
      screenshotLabel: "Interface Preview",
    },
  ] as Project[],

  skills: [
    {
      id: "languages",
      index: "01",
      title: "Programming Languages",
      description: "Core languages used across backend systems, algorithms, and frontend interfaces.",
      skills: ["Java", "TypeScript", "JavaScript", "Python", "SQL"],
    },
    {
      id: "backend",
      index: "02",
      title: "Backend Engineering",
      description: "Developing robust RESTful services, business logic, microservices, and request pipelines.",
      skills: ["Node.js", "Express.js", "Spring Boot", "RESTful APIs", "Zod Validation", "MVC Architecture"],
    },
    {
      id: "databases",
      index: "03",
      title: "Databases & Persistence",
      description: "Schema design, relational modeling, NoSQL document stores, and query optimization.",
      skills: ["MongoDB", "Mongoose ODM", "Firebase Firestore", "PostgreSQL", "Oracle SQL", "Relational Modeling"],
    },
    {
      id: "auth-security",
      index: "04",
      title: "Auth & Application Security",
      description: "Securing distributed APIs, identity verification, and multi-tenant authorization barriers.",
      skills: ["JWT Authentication", "Role-Based Access Control (RBAC)", "Multi-Factor Auth (MFA)", "Authorization Gates", "Tenant Isolation"],
    },
    {
      id: "frontend",
      index: "05",
      title: "Frontend Development",
      description: "Building responsive, accessible, and intuitive user interfaces with modern toolchains.",
      skills: ["React", "Next.js", "Tailwind CSS", "HTML5 & Semantic DOM", "CSS3 / Modern Layouts", "Client-Side State"],
    },
    {
      id: "realtime",
      index: "06",
      title: "Real-Time & Integrations",
      description: "Asynchronous event pipelines, socket streaming, and external third-party cloud APIs.",
      skills: ["Socket.IO", "Chokidar (File Events)", "Google Drive API", "Judge0 Execution API", "Webhooks"],
    },
    {
      id: "tools",
      index: "07",
      title: "Engineering Tools & DevOps",
      description: "Version control, containerization, API contracts, and development practices.",
      skills: ["Git & GitHub", "Docker", "Postman", "Swagger / OpenAPI", "Linux / Shell", "Modular Code Design"],
    },
  ] as SkillCategory[],

  experience: [
    {
      id: "xebia",
      period: "June 2026 – July 2026",
      role: "Software Development Intern",
      organization: "Xebia",
      location: "Gurugram, India",
      type: "internship",
      summary:
        "Contributed to enterprise software development initiatives across backend microservices, multi-tenant evaluation platforms, and AI-assisted sales workflows.",
      highlights: [
        "Engineered backend REST endpoints in Spring Boot and Node.js supporting multi-tenant examination workflows.",
        "Implemented JWT authentication and role-based authorization (RBAC) across administrative and student interfaces.",
        "Collaborated on request validation and schema modeling for enterprise lead and pipeline management systems.",
        "Assisted in testing API contracts using OpenAPI (Swagger) and containerized local services with Docker.",
      ],
      technologies: ["Java", "Spring Boot", "Node.js", "TypeScript", "MongoDB", "JWT", "Docker", "Swagger"],
    },
    {
      id: "ongc",
      period: "June 2025 – July 2025",
      role: "Software Development Intern",
      organization: "ONGC GEOPIC",
      location: "Dehradun, India",
      type: "internship",
      summary:
        "Engineered the Intern Resource Hub, a full-stack internal management portal designed to streamline resource distribution, intern tracking, and verified document delivery.",
      highlights: [
        "Developed frontend application modules in React with dynamic user workflows and role-differentiated dashboards.",
        "Integrated Firebase Firestore for real-time intern task progression and document metadata storage.",
        "Connected Google Drive API to deliver permissioned access to organizational training resources and project files.",
        "Implemented user authentication and access controls to maintain data confidentiality between cohorts.",
      ],
      technologies: ["React", "Firebase Firestore", "Google Drive API", "JavaScript", "RBAC", "Git"],
    },
    {
      id: "sih",
      period: "Academic Project",
      role: "Lead Project Engineer",
      organization: "Smart India Hackathon",
      location: "India",
      type: "leadership",
      summary:
        "Led engineering coordination and backend architecture decisions for high-pressure technical problem statements, ensuring prompt technical execution under strict deadlines.",
      highlights: [
        "Architected core application data models and system workflows for the submitted engineering solution.",
        "Coordinated team members across frontend integration, API contract verification, and demonstration setup.",
      ],
      technologies: ["System Design", "Backend Architecture", "Team Coordination", "Rapid Prototyping"],
    },
    {
      id: "upes",
      period: "2023 – 2027",
      role: "B.Tech in Computer Science Engineering",
      organization: "University of Petroleum and Energy Studies (UPES)",
      location: "Dehradun, India",
      type: "education",
      summary:
        "Pursuing Bachelor of Technology with a strong foundation in Data Structures, Algorithms, Database Management Systems, Operating Systems, Computer Networks, and Software Engineering.",
      highlights: [
        "Academic Performance: CGPA 8.1 / 10",
        "Key coursework: Object-Oriented Programming (Java), Database Systems, Distributed Computing, Web Technologies.",
      ],
      technologies: ["Java", "Data Structures & Algorithms", "SQL", "Operating Systems", "Networking"],
    },
    {
      id: "jagatbandhu",
      period: "Community Initiative",
      role: "Community Volunteer",
      organization: "JagatBandhu Sewa Trust",
      location: "Dehradun, India",
      type: "volunteering",
      summary:
        "Contributed to community health and social welfare outreach with Jagat Bandhu Sewa Trust in partnership with Shri Mahant Indiresh Hospital, organizing on-ground eye donation awareness camps and registration drives.",
      highlights: [
        "Coordinated on-ground registrations and awareness outreach for corneal eye donation drives across Dehradun.",
        "Facilitated donor pledge documentation and assisted hospital coordinators during community health outreach.",
      ],
      imagePath: "/experience/jagat-bandhu-volunteering.jpg",
      imageCaption: "Eye Donation Awareness Drive — Shri Mahant Indiresh Hospital & Jagat Bandhu Sewa Trust, Dehradun",
    },
  ] as ExperienceItem[],
};
