import { BookOpen, ExternalLink } from "lucide-react";
import { publications } from "@/data/publications";
import { persona } from "@/data/persona";

export function Research() {
  return (
    <section id="research" className="py-20 md:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="space-y-3">
            <div className="inline-flex items-center space-x-1.5 text-xs font-mono uppercase tracking-widest text-teal-400 bg-teal-950/40 border border-teal-800/40 px-3 py-1 rounded-full">
              <BookOpen className="w-3.5 h-3.5" />
              <span>Academic Publications</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
              AI &amp; Computer Science Research
            </h2>
            <p className="text-slate-400 text-base sm:text-lg max-w-2xl">
              Peer-reviewed research conducted at Florida International University on LLM reasoning, Text-to-SQL, visual retrieval distillation, and graph neural networks.
            </p>
          </div>

          {/* Scholar Badge & Profile CTA */}
          <a
            href={persona.scholar}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center space-x-3 px-5 py-3 rounded-xl bg-slate-900 border border-slate-700/80 hover:border-cyan-400/60 hover:bg-slate-850 transition-all group shrink-0"
          >
            <div className="w-9 h-9 rounded-lg bg-cyan-950 border border-cyan-800/60 flex items-center justify-center text-cyan-400 font-bold font-mono text-sm">
              35+
            </div>
            <div>
              <div className="text-xs text-slate-400 font-medium">Google Scholar</div>
              <div className="text-sm font-bold text-white group-hover:text-cyan-400 flex items-center space-x-1 transition-colors">
                <span>View Citation Profile</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </div>
            </div>
          </a>
        </div>

        {/* Publications Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {publications.map((pub) => (
            <div
              key={pub.id}
              className="bg-slate-900/60 border border-slate-800/90 hover:border-teal-500/30 rounded-2xl p-6 flex flex-col justify-between transition-all duration-200 backdrop-blur-sm group"
            >
              <div className="space-y-3">
                
                {/* Badges / Venue */}
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <span className="text-xs font-mono font-semibold text-teal-400 bg-teal-950/60 border border-teal-800/50 px-2.5 py-0.5 rounded-full">
                    {pub.venue} ({pub.year})
                  </span>
                  {pub.citations !== undefined && pub.citations > 0 && (
                    <span className="text-xs font-mono font-semibold text-cyan-300 bg-cyan-950/60 border border-cyan-800/50 px-2.5 py-0.5 rounded-full">
                      {pub.citations} Citations
                    </span>
                  )}
                  {pub.badge && !pub.citations && (
                    <span className="text-xs font-mono text-slate-400 bg-slate-800/80 px-2 py-0.5 rounded">
                      {pub.badge}
                    </span>
                  )}
                </div>

                {/* Title */}
                <h3 className="text-lg font-bold text-white group-hover:text-teal-300 transition-colors leading-snug">
                  {pub.title}
                </h3>

                {/* Authors */}
                <p className="text-xs font-mono text-slate-400">
                  {pub.authors}
                </p>

                {/* Summary */}
                <p className="text-sm text-slate-300/90 leading-relaxed">
                  {pub.summary}
                </p>

              </div>

              {/* Action Links */}
              <div className="mt-5 pt-3 border-t border-slate-800/80 flex items-center justify-between text-xs">
                <span className="text-slate-500 font-mono">
                  {pub.arxiv ? pub.arxiv : pub.doi ? `DOI: ${pub.doi.substring(0, 18)}...` : ""}
                </span>
                {pub.url && (
                  <a
                    href={pub.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center space-x-1 text-teal-400 hover:text-white font-medium transition-colors"
                  >
                    <span>Read Publication</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                )}
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
