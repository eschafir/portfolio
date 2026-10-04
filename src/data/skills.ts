import { SkillCategory } from "../types";

export const skillCategories: SkillCategory[] = [
  {
    title: "AI & Machine Learning",
    description: "Deep learning models, neural graph architectures, and statistical evaluations.",
    iconName: "BrainCircuit",
    skills: [
      { name: "PyTorch", featured: true },
      { name: "Hugging Face (Transformers, PEFT)", featured: true },
      { name: "Graph Neural Networks (GNNs)", featured: true },
      { name: "Scikit-learn", featured: false },
      { name: "TensorFlow", featured: false },
      { name: "Explainable AI (XAI)", featured: false },
      { name: "Model Distillation", featured: true },
      { name: "Benchmark Evaluation (BIRD, Spider)", featured: true },
    ]
  },
  {
    title: "LLMs & Agentic Systems",
    description: "Multi-agent workflows, in-context reasoning, and deterministic verification harnesses.",
    iconName: "Bot",
    skills: [
      { name: "LangGraph", featured: true },
      { name: "LangChain", featured: true },
      { name: "Agentic Workflows & Multi-Agent DAGs", featured: true },
      { name: "Retrieval-Augmented Generation (RAG)", featured: true },
      { name: "Text-to-SQL (DecoSearch)", featured: true },
      { name: "Anti-Hallucination Guardrails", featured: true },
      { name: "In-Context Learning & Prompt Engineering", featured: false },
      { name: "Ollama / Local LLM Inference", featured: false },
    ]
  },
  {
    title: "Data Engineering & Databases",
    description: "Scalable data ingestion, relational schema modeling, and vector search systems.",
    iconName: "Database",
    skills: [
      { name: "SQL (Complex Queries, Optimization)", featured: true },
      { name: "PostgreSQL & Supabase", featured: true },
      { name: "Python Data Pipelines (Pandas, NumPy)", featured: true },
      { name: "ETL / ELT Pipeline Architecture", featured: true },
      { name: "SQLite & MySQL", featured: false },
      { name: "SQL Server & Oracle PL/SQL", featured: false },
      { name: "MongoDB (NoSQL)", featured: false },
      { name: "Vector Databases (Chroma, Pinecone)", featured: true },
    ]
  },
  {
    title: "Languages & Frameworks",
    description: "Production software engineering across web, desktop, and backend services.",
    iconName: "Code2",
    skills: [
      { name: "Python", featured: true },
      { name: "TypeScript / JavaScript", featured: true },
      { name: "Next.js (App Router)", featured: true },
      { name: "React", featured: true },
      { name: "FastAPI", featured: true },
      { name: "Java", featured: false },
      { name: "C#", featured: false },
      { name: "Tailwind CSS", featured: false },
    ]
  },
  {
    title: "Systems, Cloud & Tools",
    description: "Containerization, cross-platform packaging, and developer automation.",
    iconName: "Terminal",
    skills: [
      { name: "Docker & Containerization", featured: true },
      { name: "Electron (Desktop Apps)", featured: true },
      { name: "Git, GitHub & GitLab", featured: true },
      { name: "Linux / macOS Shell Scripting", featured: false },
      { name: "AWS (Cloud Fundamentals)", featured: false },
      { name: "Vitest & Playwright Testing", featured: true },
      { name: "RESTful API Design & OpenAPI", featured: false },
      { name: "Typst & LaTeX Document Compilation", featured: false },
    ]
  },
  {
    title: "Cybersecurity & Governance",
    description: "Defensive engineering, compliance frameworks, and system hardening.",
    iconName: "ShieldCheck",
    skills: [
      { name: "ISO 27001 & NIST Frameworks", featured: true },
      { name: "Vulnerability Management (Nessus, Nmap)", featured: true },
      { name: "Threat Modeling & Application Defense", featured: true },
      { name: "Identity & Access Management (IAM / PAM)", featured: false },
      { name: "SIEM (Splunk, Security Telemetry)", featured: false },
      { name: "Penetration Testing & Hardening", featured: false },
      { name: "Cryptographic Storage (AES-256-GCM)", featured: true },
      { name: "Security Auditing & KPI Reporting", featured: false },
    ]
  }
];
