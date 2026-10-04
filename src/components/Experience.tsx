import { Briefcase, Calendar, MapPin, CheckCircle2, TrendingUp } from "lucide-react";
import { experienceData } from "@/data/experience";

export function Experience() {
  return (
    <section id="experience" className="py-20 md:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center space-x-1.5 text-xs font-mono uppercase tracking-widest text-cyan-400 bg-cyan-950/40 border border-cyan-800/40 px-3 py-1 rounded-full">
            <Briefcase className="w-3.5 h-3.5" />
            <span>Career History</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
            Professional &amp; Research Experience
          </h2>
          <p className="text-slate-400 text-base sm:text-lg">
            10+ years of combined experience across applied AI research, data engineering, and enterprise information security.
          </p>
        </div>

        {/* Timeline List */}
        <div className="space-y-8 relative before:absolute before:inset-0 before:left-4 md:before:left-1/2 before:w-0.5 before:bg-slate-800 before:-translate-x-1/2">
          {experienceData.map((exp, idx) => {
            const isEven = idx % 2 === 0;
            return (
              <div
                key={exp.id}
                className="relative flex flex-col md:flex-row items-center justify-between"
              >
                {/* Center Node Indicator */}
                <div className="absolute left-4 md:left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-slate-900 border-2 border-cyan-400 z-10 hidden md:block" />

                {/* Card Container */}
                <div
                  className={`w-full md:w-[46%] ml-8 md:ml-0 ${
                    isEven ? "md:mr-auto" : "md:ml-auto"
                  }`}
                >
                  <div className="bg-slate-900/60 border border-slate-800/90 hover:border-cyan-500/30 rounded-2xl p-6 sm:p-7 backdrop-blur-sm transition-all duration-300 hover:shadow-xl hover:shadow-cyan-500/5 group">
                    
                    {/* Header */}
                    <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                      <span className={`text-xs font-mono font-semibold px-2.5 py-0.5 rounded-full ${
                        exp.type === "Research" 
                          ? "bg-cyan-950/80 text-cyan-400 border border-cyan-800/60" 
                          : "bg-slate-800 text-slate-300 border border-slate-700/60"
                      }`}>
                        {exp.type}
                      </span>
                      <div className="flex items-center space-x-1.5 text-xs text-slate-400 font-mono">
                        <Calendar className="w-3.5 h-3.5" />
                        <span>{exp.period}</span>
                      </div>
                    </div>

                    {/* Role & Company */}
                    <h3 className="text-xl font-bold text-white group-hover:text-cyan-400 transition-colors">
                      {exp.role}
                    </h3>
                    <div className="flex items-center space-x-2 text-sm text-slate-300 font-medium mt-1 mb-3">
                      <span>{exp.company}</span>
                      <span className="text-slate-600">&bull;</span>
                      <span className="flex items-center text-slate-400 text-xs">
                        <MapPin className="w-3 h-3 mr-0.5" />
                        {exp.location}
                      </span>
                    </div>

                    {/* Summary */}
                    <p className="text-sm text-slate-300 leading-relaxed mb-4">
                      {exp.summary}
                    </p>

                    {/* Responsibilities */}
                    <div className="space-y-2 mb-4">
                      {exp.responsibilities.slice(0, 3).map((resp, i) => (
                        <div key={i} className="flex items-start space-x-2 text-xs text-slate-300">
                          <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400/80 shrink-0 mt-0.5" />
                          <span>{resp}</span>
                        </div>
                      ))}
                    </div>

                    {/* Measurable Outcomes */}
                    {exp.measurableOutcomes && exp.measurableOutcomes.length > 0 && (
                      <div className="bg-slate-950/60 border border-slate-800 rounded-xl p-3.5 mb-4 space-y-1.5">
                        <div className="text-xs font-mono uppercase text-emerald-400 font-semibold flex items-center space-x-1">
                          <TrendingUp className="w-3.5 h-3.5" />
                          <span>Key Impact &amp; Metrics</span>
                        </div>
                        {exp.measurableOutcomes.map((outcome, i) => (
                          <div key={i} className="text-xs text-slate-300 font-medium">
                            &bull; {outcome}
                          </div>
                        ))}
                      </div>
                    )}

                    {/* Tech Badges */}
                    <div className="flex flex-wrap gap-1.5 pt-2 border-t border-slate-800/80">
                      {exp.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="text-[11px] font-mono px-2 py-0.5 rounded bg-slate-800/70 text-slate-400"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                  </div>
                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
