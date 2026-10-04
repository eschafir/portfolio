import { Publication } from "../types";

export const publications: Publication[] = [
  {
    id: "decosearch-2026",
    title: "DecoSearch: Complexity-Aware Routing and Plan-Level Repair for Text-to-SQL",
    authors: "E. Schafir, X. Zheng, H. A. Salehi, Z. Chen, M. Sha, W. Cheng, D. Luo",
    venue: "arXiv Preprint",
    year: 2026,
    arxiv: "arXiv:2606.17821",
    url: "https://arxiv.org/abs/2606.17821",
    badge: "First Author · AI & Databases",
    summary: "Proposes an agentic Text-to-SQL framework using hierarchical question decomposition into dependency DAGs, complexity-aware query routing, and plan-level repair with MCTS to achieve high execution accuracy on BIRD and Spider benchmarks."
  },
  {
    id: "captchas-2024",
    title: "The Matter of Captchas: An Analysis of a Brittle Security Feature on the Modern Web",
    authors: "B. Ousat, E. Schafir, M. A. Tofighi, D. C. Hoang, C. V. Nguyen, S. Arshad, A. Kharraz",
    venue: "Proceedings of the ACM Web Conference 2024",
    year: 2024,
    citations: 12,
    doi: "10.1145/3589334.3645619",
    url: "https://doi.org/10.1145/3589334.3645619",
    badge: "Top Web Conference · 12 Citations",
    summary: "Presents an extensive empirical analysis of modern CAPTCHA implementations across top web domains, identifying architectural brittleness and training CNNs/vision models to demonstrate automated bypass vectors."
  },
  {
    id: "social-engineering-2024",
    title: "Constructs of Deceit: Exploring Nuances in Modern Social Engineering Attacks",
    authors: "M. A. Tofighi, B. Ousat, J. Zandi, E. Schafir, A. Kharraz",
    venue: "DIMVA 2024 (Detection of Intrusions and Malware, and Vulnerability Assessment)",
    year: 2024,
    citations: 8,
    doi: "10.1007/978-3-031-64171-8_6",
    url: "https://doi.org/10.1007/978-3-031-64171-8_6",
    badge: "Security & Intrusion Detection",
    summary: "Analyzes evasion strategies and multi-channel cognitive triggers in state-of-the-art credential harvesting campaigns and modern enterprise social engineering attacks."
  },
  {
    id: "gnn-explanations-2026",
    title: "Addressing Structural Distribution Shift in Explanations for Graph Neural Networks",
    authors: "Z. Chen, H. A. Salehi, E. Schafir, X. Zheng, J. Zhang, H. Wei, J. Ni, F. Shirani, D. Luo",
    venue: "IEEE Transactions on Pattern Analysis and Machine Intelligence (TPAMI)",
    year: 2026,
    doi: "10.1109/TPAMI.2026.3690304",
    url: "https://doi.org/10.1109/TPAMI.2026.3690304",
    badge: "IEEE TPAMI · Premier Journal",
    summary: "Develops theoretical frameworks and algorithms to mitigate distribution shifts when generating faithful, robust sub-graph explanations for Graph Neural Networks (GNNs)."
  },
  {
    id: "graph-representation-2026",
    title: "Explanation-Preserving Augmentation for Semi-Supervised Graph Representation Learning",
    authors: "Z. Chen, J. Ni, H. A. Salehi, X. Zheng, E. Schafir, F. Shirani, D. Luo",
    venue: "Proceedings of the AAAI Conference on Artificial Intelligence (AAAI)",
    year: 2026,
    citations: 3,
    doi: "10.1609/aaai.v40i25.39183",
    url: "https://doi.org/10.1609/aaai.v40i25.39183",
    badge: "AAAI 2026 · Premier AI Conference",
    summary: "Introduces explanation-preserving data augmentations for semi-supervised graph representation learning, demonstrating superior node and graph classification performance under label scarcity."
  },
  {
    id: "lm2otifs-2025",
    title: "LM2otifs: An Explainable Framework for Machine-Generated Texts Detection",
    authors: "X. Zheng, Z. Chen, E. Schafir, S. Chen, H. A. Salehi, H. Chen, F. Shirani, M. Sha, W. Cheng, D. Luo",
    venue: "arXiv Preprint",
    year: 2025,
    citations: 2,
    arxiv: "arXiv:2505.12507",
    url: "https://arxiv.org/abs/2505.12507",
    badge: "LLM Detection & Explainability",
    summary: "Proposes a graph-perspective explainable framework to detect machine-generated text by analyzing structural motifs and syntactical dependency patterns."
  },
  {
    id: "evasive-web-scans-2024",
    title: "In-Application Defense Against Evasive Web Scans Through Behavioral Analysis",
    authors: "B. Ousat, M. Shariatnasab, E. Schafir, F. S. Chaharsooghi, A. Kharraz",
    venue: "arXiv Preprint",
    year: 2024,
    citations: 4,
    arxiv: "arXiv:2412.07005",
    url: "https://arxiv.org/abs/2412.07005",
    badge: "Web Application Defense",
    summary: "Presents a behavioral analysis engine embedded inside web applications to dynamically detect, delay, and neutralize evasive automated vulnerability scanners and malicious crawlers."
  },
  {
    id: "ehealth-2014",
    title: "e-Health: An Introduction to the Challenges of Privacy and Security",
    authors: "H. R. Jara, E. Schafir",
    venue: "IEEE Central America and Panama Convention (CONCAPAN XXXIV)",
    year: 2014,
    citations: 6,
    doi: "10.1109/CONCAPAN.2014.7000407",
    url: "https://doi.org/10.1109/CONCAPAN.2014.7000407",
    badge: "IEEE CONCAPAN",
    summary: "Early foundational research surveying electronic healthcare record vulnerabilities, regulatory compliance challenges, and cryptographic privacy primitives for patient data."
  }
];
