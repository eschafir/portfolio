import { GraduationCap, Calendar, MapPin, CheckCircle2 } from "lucide-react";
import { educationData } from "@/data/education";

export function Education() {
  return (
    <section id="education" className="py-20 md:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center space-x-1.5 text-xs font-mono uppercase tracking-widest text-cyan-400 bg-cyan-950/40 border border-cyan-800/40 px-3 py-1 rounded-full">
            <GraduationCap className="w-3.5 h-3.5" />
            <span>Academic Background</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
            Education &amp; Credentials
          </h2>
          <p className="text-slate-400 text-base sm:text-lg">
            Advanced academic training in Computer Science and Cybersecurity from Florida International University and Universidad Nacional de Quilmes.
          </p>
        </div>

        {/* Education 3-Card Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {educationData.map((edu, idx) => (
            <div
              key={edu.degree}
              className="bg-slate-900/60 border border-slate-800/90 hover:border-cyan-500/30 rounded-2xl p-6 sm:p-7 flex flex-col justify-between transition-all duration-300 hover:shadow-xl hover:shadow-cyan-500/5 group backdrop-blur-sm"
            >
              <div className="space-y-4">
                
                {/* Top Badges */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-1.5 text-xs text-slate-400 font-mono">
                    <Calendar className="w-3.5 h-3.5 text-cyan-400" />
                    <span>{edu.period}</span>
                  </div>
                  {edu.gpa && (
                    <span className="text-xs font-mono font-bold px-2 py-0.5 rounded-full bg-emerald-950/80 text-emerald-400 border border-emerald-800/60">
                      GPA: {edu.gpa}
                    </span>
                  )}
                </div>

                {/* Degree & Field */}
                <div>
                  <h3 className="text-xl font-bold text-white group-hover:text-cyan-400 transition-colors">
                    {edu.degree}
                  </h3>
                  <div className="text-base font-semibold text-cyan-300/90 mt-0.5">
                    {edu.field}
                  </div>
                  <div className="text-sm text-slate-300 mt-1">
                    {edu.institution}
                  </div>
                  <div className="flex items-center text-xs text-slate-400 mt-1">
                    <MapPin className="w-3 h-3 mr-1 text-slate-500" />
                    <span>{edu.location}</span>
                  </div>
                </div>

                {/* Details / Bullets */}
                <div className="space-y-2 pt-2 border-t border-slate-800/80">
                  {edu.details.map((detail, i) => (
                    <div key={i} className="flex items-start space-x-2 text-xs text-slate-300/90 leading-relaxed">
                      <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400/80 shrink-0 mt-0.5" />
                      <span>{detail}</span>
                    </div>
                  ))}
                </div>

              </div>

              {/* Card Footer */}
              <div className="mt-6 pt-3 border-t border-slate-800/60 text-[11px] font-mono text-slate-400 flex items-center justify-between">
                <span>Verified FIU Credential</span>
                <span className="text-cyan-400 font-bold">#0{idx + 1}</span>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
