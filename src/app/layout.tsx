import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://esteban-schafir.dev"),
  title: "Esteban Schafir | AI Engineer & Data Engineer",
  description: "Portfolio of Esteban Schafir — Ph.D. Candidate in Computer Science @ Florida International University, Applied AI Researcher specializing in Large Language Models, Multi-Agent Systems, and Data Pipelines.",
  keywords: [
    "Esteban Schafir",
    "AI Engineer",
    "Data Engineer",
    "LLM",
    "Multi-Agent Systems",
    "LangGraph",
    "Text-to-SQL",
    "DecoSearch",
    "RAG",
    "Cybersecurity",
    "Florida International University"
  ],
  authors: [{ name: "Esteban Schafir", url: "https://github.com/eschafir" }],
  openGraph: {
    title: "Esteban Schafir | AI Engineer & Data Engineer",
    description: "Ph.D. Candidate at FIU specializing in LLMs, Multi-Agent Systems, Text-to-SQL, and Scalable Data Pipelines.",
    type: "website",
    locale: "en_US",
    images: [
      {
        url: "/profile_image.png",
        width: 800,
        height: 800,
        alt: "Esteban Schafir - AI Engineer & Data Engineer"
      }
    ]
  }
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <body className="min-h-screen bg-[#090d16] text-slate-100 antialiased relative">
        <div className="fixed inset-0 bg-grid-pattern pointer-events-none opacity-40 z-0" />
        <div className="fixed inset-0 gradient-radial-glow pointer-events-none z-0" />
        <div className="relative z-10 flex flex-col min-h-screen">
          {children}
        </div>
      </body>
    </html>
  );
}
