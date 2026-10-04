import { Experience } from "../types";

export const experienceData: Experience[] = [
  {
    id: "fiu-researcher",
    role: "Graduate Research & Teaching Assistant",
    company: "Florida International University",
    location: "Miami, FL, United States",
    period: "Apr 2022 — Present",
    type: "Research",
    summary: "Leading applied AI research on agentic Text-to-SQL decomposition, sub-10ms visual document retrieval, and graph neural network robustness under Dr. Dongjin Luo and collaborators.",
    responsibilities: [
      "Engineered DecoSearch (arXiv:2606.17821), an agentic Text-to-SQL engine employing DAG question decomposition, complexity routing, and plan-level MCTS repair over relational databases.",
      "Achieved sub-10ms visual document search by developing a teacher-student distillation framework that compiles online multi-step LLM reasoning into offline visual sparse indexes.",
      "Designed and maintained end-to-end Python data pipelines (Pandas, NumPy) that clean, transform, and augment multi-source datasets for ML benchmarking.",
      "Developed and evaluated deep learning models using PyTorch, Hugging Face, and LangChain for Graph Neural Networks (GNNs) and agentic RAG.",
      "Authored and co-authored 8 peer-reviewed research papers and preprints published in premier venues including AAAI, IEEE TPAMI, and ACM Web Conference.",
      "Supported CS department courses as Teaching Assistant, managing student evaluations and performance tracking."
    ],
    technologies: ["Python", "PyTorch", "Hugging Face", "LangChain", "LangGraph", "FastAPI", "Pandas", "NumPy", "PostgreSQL", "SQLite", "Docker"],
    measurableOutcomes: [
      "> 70.5% Execution Accuracy on BIRD benchmark and > 88.3% on Spider for Text-to-SQL.",
      "Sub-10ms visual document retrieval via LLM distillation into sparse indexes.",
      "8 publications and 35+ citations in premier AI and security venues."
    ]
  },
  {
    id: "equifax-iso",
    role: "Information Security Officer",
    company: "Equifax Argentina SA",
    location: "Buenos Aires, Argentina",
    period: "Sep 2017 — Nov 2021",
    type: "Industry",
    summary: "Led enterprise-level information security, vulnerability remediation pipelines, compliance programs, and executive KPI reporting across corporate infrastructure.",
    responsibilities: [
      "Consolidated and cleaned data from vulnerability scanners, audits, and third-party vendor reviews into unified analysis datasets.",
      "Maintained centralized tracking databases of risks, findings, and remediation milestones, enabling audit-grade accountability over time.",
      "Built recurring executive KPI dashboards, metrics reports, and risk status models for senior leadership.",
      "Spearheaded company-wide security awareness initiatives and coordinated incident response exercises.",
      "Directed enterprise risk assessments, third-party vendor reviews, and ISO 27001 / NIST compliance alignment."
    ],
    technologies: ["Data Integration", "Vulnerability Management", "ISO 27001", "NIST", "Splunk", "Excel Dashboards", "IAM", "Risk Modeling"],
    measurableOutcomes: [
      "Slashed critical infrastructure vulnerabilities by over 50% through data-driven remediation programs.",
      "Established 100% compliance alignment across vendor risk assessments and corporate security reviews.",
      "Automated weekly risk and vulnerability posture reporting for executive leadership."
    ]
  },
  {
    id: "puente-sec-analyst",
    role: "Information Security Analyst",
    company: "Puente Hnos",
    location: "Buenos Aires, Argentina",
    period: "Mar 2016 — Sep 2017",
    type: "Industry",
    summary: "Managed security monitoring, access controls, audit finding remediation, and core security infrastructure tooling for a major financial institution.",
    responsibilities: [
      "Compiled and analyzed telemetry from SIEM, ITSM, and Identity & Access Management (IAM) systems into automated management reports.",
      "Tracked internal and external audit findings in a central tracking database to systematically eliminate vulnerabilities.",
      "Implemented and maintained SIEM monitoring, ITSM workflows, and Privileged Access Management (PAM) tools.",
      "Led a rapid enterprise-wide antivirus migration without service downtime, earning executive recognition."
    ],
    technologies: ["SIEM (Splunk)", "ITSM", "Privileged Access Management (PAM)", "Data Normalization", "Security Auditing"],
    measurableOutcomes: [
      "Drove a 70% reduction in internal audit findings through central tracking and workflow automation.",
      "Earned executive leadership recognition for leading a rapid, zero-disruption security migration."
    ]
  },
  {
    id: "cybsec-deloitte",
    role: "Information Security Analyst",
    company: "Cybsec by Deloitte",
    location: "Buenos Aires, Argentina",
    period: "Oct 2014 — Mar 2016",
    type: "Industry",
    summary: "Delivered technical vulnerability assessments, penetration testing, and security hardening audits across diverse enterprise client environments.",
    responsibilities: [
      "Merged and enriched technical assessment outputs (Nessus, Nmap, Wireshark, Metasploit) into structured datasets and client deliverables.",
      "Conducted compliance reviews and system hardening across varied client operating systems, databases, and network architectures.",
      "Collaborated closely with corporate clients to design and verify customized risk mitigation strategies."
    ],
    technologies: ["Nessus", "Nmap", "Wireshark", "Metasploit", "Vulnerability Lifecycles", "Compliance Hardening"],
    measurableOutcomes: [
      "Cut client audit findings by 60% through targeted hardening programs.",
      "Delivered dozens of enterprise vulnerability assessments on schedule."
    ]
  }
];
