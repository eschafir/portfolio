import { EducationItem } from "../types";

export const educationData: EducationItem[] = [
  {
    degree: "Doctor of Philosophy (Ph.D.)",
    field: "Computer Science",
    institution: "Florida International University",
    location: "Miami, FL, United States",
    period: "2024 — Present",
    gpa: "3.97 / 4.0",
    details: [
      "Dissertation focus on Agentic Large Language Models, Hierarchical Text-to-SQL Decomposition, and Graph Neural Network Explanation Robustness.",
      "First author of DecoSearch (arXiv:2606.17821) and co-author of publications in AAAI, IEEE TPAMI, and ACM Web Conference.",
      "Graduate Research Assistant & Teaching Assistant."
    ]
  },
  {
    degree: "Master of Science (M.S.)",
    field: "Cybersecurity",
    institution: "Florida International University",
    location: "Miami, FL, United States",
    period: "2021 — 2023",
    gpa: "4.0 / 4.0",
    details: [
      "Graduated with a perfect 4.0 GPA.",
      "Specialized in web security vulnerabilities, automated CAPTCHA analysis, threat intelligence, and enterprise network defense.",
      "Conducted empirical research published at the ACM Web Conference 2024 and DIMVA 2024."
    ]
  },
  {
    degree: "Bachelor of Science (B.S.)",
    field: "Computer Programming",
    institution: "Universidad Nacional de Quilmes",
    location: "Buenos Aires, Argentina",
    period: "Graduated 2017",
    details: [
      "Rigorous foundations in algorithms, data structures, relational database management, and object-oriented software engineering.",
      "Dual focus on systems programming and network fundamentals."
    ]
  }
];
