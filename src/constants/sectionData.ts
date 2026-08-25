export const aboutData = {
  description: "I’m a Full Stack Engineer with 5+ years of experience building scalable, production-grade web applications end-to-end. At Redica Systems, I architect and ship Python/FastAPI backend services and React (TypeScript) frontends that help pharmaceutical companies stay compliant with regulatory and quality standards (GCP, GMP), reducing audit prep time and improving data accuracy across their compliance workflows.",
  description1: "Throughout my career, I’ve worked on a variety of projects, from video streaming platforms to AI-powered applications. I’ve led large-scale database migrations, built high-throughput backend services and distributed systems, and optimized REST/microservice APIs to improve performance and scalability. My work has helped enhance product efficiency, reduce infrastructure costs, and deliver a seamless user experience.",
  description2: "I have expertise in Python, TypeScript, and JavaScript, along with frameworks and tools like React, FastAPI, Node.js, PostgreSQL, MongoDB, AWS, and Docker. I've also embraced AI-assisted, agent-directed development with Claude Code, building custom skills and MCP integrations into my daily workflow. Collaboration and problem-solving drive me, and I love turning ideas into impactful tech solutions.",
  image: "/path/to/profile-image.jpg",
  skills: [
    {
      category: "Languages & Frameworks",
      items: ["Python", "TypeScript", "JavaScript"]
    },
    {
      category: "Frontend",
      items: ["React", "Next.js", "HTML", "CSS3", "Redux", "Zustand"]
    },
    {
      category: "Backend",
      items: ["FastAPI", "Node.js", "Express.js", "REST APIs"]
    },
    {
      category: "Databases",
      items: ["MongoDB", "MySQL", "PostgreSQL"]
    },
    {
      category: "DevOps & Cloud",
      items: ["AWS (S3, EC2, SQS, Lambda, ECS, Fargate, EventBridge, RDS)", "Terraform", "Git", "Docker"]
    },
    {
      category: "AI-Assisted Development",
      items: ["Claude Code", "Agentic Workflows", "Context Engineering", "MCP Integrations"]
    }
  ]
};

export const experienceData = [
  {
    company: "Redica Systems",
    position: "Senior Software Engineer",
    period: "June 2025 - Present",
    responsibilities: [
      "Designed and drove an asynchronous bulk download architecture in Python/FastAPI to replace real-time processing for large exports (10k-50k records); stress-tested to 1k-2k concurrent users and shipped a fixed-batch drain-and-exit model with an EventBridge backstop, eliminating always-on Fargate costs (~$18/month/task) while sustaining burst load",
      "Designed and built a cross-database data access layer using postgres_fdw to enable cross-database sorting and searching for a tenant-based architecture, running in production for 3+ months with zero incidents, later extended into an auto-provisioning reconciler that eliminates manual per-tenant setup",
      "Root-caused and fixed a systemic async-processing defect that silently dropped up to 99.5% of a day's customer notifications, and built a daily automated verification system with 16,000+ production checks",
      "Adopted spec-first, agent-directed development with Claude Code, built custom Claude Code skills (Jira ticket standardization, PR review) integrated via MCPs, and authored a global CLAUDE.md codifying team stack standards and reusable task context for agent-executed work"
    ],
    technologies: ["Python", "FastAPI", "React", "TypeScript", "PostgreSQL", "AWS Fargate", "EventBridge", "Claude Code", "MCP"]
  },
  {
    company: "Mindwell Labs Inc",
    position: "Senior Software Engineer",
    period: "Oct 2024 - May 2025",
    responsibilities: [
      "Engineered and developed an end-to-end React and Node.js based analytics dashboard, optimizing AI model performance for internal teams",
      "Executed a zero-downtime migration of 350M+ records from MongoDB to PostgreSQL using Python, improving query performance by 40% and reducing costs by 50%"
    ],
    technologies: ["React", "Nodejs", "Python", "MongoDB", "Postgresql"]
  },
  {
    company: "Mindwell Labs Inc",
    position: "Software Engineer",
    period: "Jan 2023 - Sept 2024",
    responsibilities: [
      "Designed and implemented REST APIs (Node.js) for seamless communication between the chatbot, data storage, and front-end applications, reducing API latency by 30% and ensuring efficient data flow",
      "Developed a scalable React frontend for an AI-powered chatbot using ChatGPT APIs, delivering personalized insights on mental state, sleep patterns, and activity levels, increasing user engagement by 30%"
    ],
    technologies: ["Nodejs", "React", "OpenAI APIs", "RESTful APIs"]
  },
  {
    company: "Vidgyor Media Technologies",
    position: "Software Engineer",
    period: "June 2021 - Dec 2022",
    responsibilities: [
      "Launched two full-stack products using React, Node.js, and AWS that enabled scalable and efficient video processing, adopted by 10+ B2B clients across various countries",
      "Built a high-performance queue system (AWS SQS) to efficiently clip, process, and transcode videos from live streams, reducing latency by 60%"
    ],
    technologies: ["Nodejs", "Expressjs", "MongoDB", "React", "AWS SQS", "AWS"]
  }
];

export const projectsData = [
  {
    title: "Flapico",
    description: "Built a Prompt Versioning & Evaluation Dashboard using React with a clean, intuitive UI for managing AI prompts, versions, and test results, with real-time data synchronization via Supabase for seamless updates and collaborative editing",
    image: "/images/projects/flapico.png",
    technologies: ["React", "React Query", "Zustand", "Supabase", "Jest"],
    links: [
      { type: "LinkedIn", url: "https://linkedin.com/in/Parth910" },
      { type: "GitHub", url: "https://github.com/Parth910" },
      { type: "Blog", url: "https://medium.com/@patel.parth.dev" }
    ]
  }
];

export const contactData = {
  title: "Let's Collaborate",
  email: "patel.parth.dev@gmail.com",
  socialLinks: [
    { href: "https://github.com/Parth910", label: "GitHub" },
    { href: "https://linkedin.com/in/Parth910", label: "LinkedIn" },
    { href: "https://medium.com/@patel.parth.dev", label: "Medium" },
  ],
  copyright: "PARTH PATEL"
}; 