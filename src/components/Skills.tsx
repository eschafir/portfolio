import { 
  BrainCircuit, 
  Bot, 
  Database, 
  Code2, 
  Terminal, 
  ShieldCheck, 
  Sparkles 
} from "lucide-react";
import React from "react";
import { skillCategories } from "@/data/skills";

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  BrainCircuit,
  Bot,
  Database,
  Code2,
  Terminal,
  ShieldCheck,
};

export function Skills() {
  return (
    <section id="skills" className="py-20 md:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center space-x-1.5 text-xs font-mono uppercase tracking-widest text-teal-400 bg-teal-950/40 border border-teal-800/40 px-3 py-1 rounded-full">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Technical Capabilities</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
            Categorized Technical Skills
          </h2>
          <p className="text-slate-400 text-base sm:text-lg">
            Structured competency matrix spanning frontier LLM agent orchestration, high-throughput data engineering, and enterprise cyberdefense.
          </p>
        </div>

        {/* 6 Category Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category) => {
            const Icon = iconMap[category.iconName] || BrainCircuit;
            return (
              <div
                key={category.title}
                className="bg-slate-900/60 border border-slate-800/90 hover:border-cyan-500/30 rounded-2xl p-6 flex flex-col justify-between transition-all duration-300 hover:shadow-xl hover:shadow-cyan-500/5 group backdrop-blur-sm"
              >
                <div>
                  {/* Category Header */}
                  <div className="flex items-center space-x-3 mb-3">
                    <div className="w-10 h-10 rounded-xl bg-slate-800/80 border border-slate-700/60 flex items-center justify-center group-hover:scale-110 transition-transform">
                      <Icon className="w-5 h-5 text-cyan-400" />
                    </div>
                    <h3 className="text-lg font-bold text-white group-hover:text-cyan-400 transition-colors">
                      {category.title}
                    </h3>
                  </div>

                  <p className="text-xs text-slate-400 mb-5 leading-relaxed">
                    {category.description}
                  </p>

                  {/* Skills Pills */}
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill) => (
                      <span
                        key={skill.name}
                        className={`text-xs font-mono px-2.5 py-1 rounded-lg transition-colors ${
                          skill.featured
                            ? "bg-cyan-950/80 text-cyan-300 border border-cyan-800/60 font-semibold"
                            : "bg-slate-800/70 text-slate-300 border border-slate-700/50 hover:border-slate-600"
                        }`}
                      >
                        {skill.name}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="mt-6 pt-3 border-t border-slate-800/60 flex items-center justify-between text-[11px] text-slate-500 font-mono">
                  <span>{category.skills.filter(s => s.featured).length} primary specializations</span>
                  <span>{category.skills.length} skills total</span>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
