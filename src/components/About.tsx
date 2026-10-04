import { BrainCircuit, Database, ShieldCheck, Cpu } from "lucide-react";
import { persona } from "@/data/persona";

const pillars = [
  {
    icon: BrainCircuit,
    title: "Agentic AI & LLMs",
    description: "Architecting multi-agent systems (LangGraph), DAG-based problem decomposition, and constrained generation with deterministic verification loops to prevent hallucinations.",
    color: "text-cyan-400",
    border: "border-cyan-500/20"
  },
  {
    icon: Database,
    title: "Data Pipelines & SQL",
    description: "Designing end-to-end ETL/ELT pipelines in Python and SQL. Integrating relational databases, vector embeddings, and building natural-language Text-to-SQL query compilers.",
    color: "text-teal-400",
    border: "border-teal-500/20"
  },
  {
    icon: Cpu,
    title: "Empirical AI Research",
    description: "Conducting Ph.D. research at FIU on sub-10ms visual document retrieval via teacher-student distillation, graph representation learning, and complexity-aware query routing.",
    color: "text-emerald-400",
    border: "border-emerald-500/20"
  },
  {
    icon: ShieldCheck,
    title: "Cybersecurity Foundation",
    description: "10 years of enterprise risk modeling, vulnerability remediation, and ISO 27001 / NIST compliance at Equifax and Deloitte partners—ensuring data systems are secure by design.",
    color: "text-blue-400",
    border: "border-blue-500/20"
  }
];

export function About() {
  return (
    <section id="about" className="py-20 md:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center space-x-1.5 text-xs font-mono uppercase tracking-widest text-cyan-400 bg-cyan-950/40 border border-cyan-800/40 px-3 py-1 rounded-full">
            <span>Engineering Philosophy</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
            Bridging Applied AI, Data Reliability &amp; Systems Security
          </h2>
          <p className="text-slate-400 text-base sm:text-lg">
            A high-rigor engineering mindset honed through 4+ years of academic research and 7 years in enterprise infrastructure.
          </p>
        </div>

        {/* Narrative & Pillars Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Narrative Column */}
          <div className="lg:col-span-5 space-y-5 bg-slate-900/60 border border-slate-800/80 rounded-2xl p-6 sm:p-8 backdrop-blur-sm">
            <h3 className="text-xl font-bold text-white flex items-center space-x-2">
              <span className="w-2 h-2 rounded-full bg-cyan-400" />
              <span>Background &amp; Expertise</span>
            </h3>
            
            {persona.aboutNarrative.map((paragraph, idx) => (
              <p key={idx} className="text-slate-300 text-sm sm:text-base leading-relaxed">
                {paragraph}
              </p>
            ))}

            <div className="pt-4 border-t border-slate-800">
              <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400 mb-3">
                Core Specialization Domains
              </h4>
              <div className="flex flex-wrap gap-2">
                {persona.focusAreas.map((area) => (
                  <span
                    key={area}
                    className="text-xs px-2.5 py-1 rounded-md bg-slate-800/80 border border-slate-700/60 text-slate-300 font-medium"
                  >
                    {area}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Pillars 4-Card Grid */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {pillars.map((pillar) => {
              const Icon = pillar.icon;
              return (
                <div
                  key={pillar.title}
                  className={`bg-slate-900/60 border ${pillar.border} rounded-2xl p-6 hover:bg-slate-900/90 transition-all duration-300 group`}
                >
                  <div className="w-10 h-10 rounded-xl bg-slate-800/80 border border-slate-700/60 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <Icon className={`w-5 h-5 ${pillar.color}`} />
                  </div>
                  <h4 className="text-base font-bold text-white mb-2">
                    {pillar.title}
                  </h4>
                  <p className="text-slate-400 text-sm leading-relaxed">
                    {pillar.description}
                  </p>
                </div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
}
