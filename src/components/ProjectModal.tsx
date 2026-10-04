"use client";

import { useEffect } from "react";
import Image from "next/image";
import { X, FileText, Layers, CheckCircle2, AlertCircle } from "lucide-react";
import { GithubIcon } from "./Icons";
import { Project } from "@/types";

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export function ProjectModal({ project, onClose }: ProjectModalProps) {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (project) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    }
    return () => {
      document.body.style.overflow = "unset";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/80 backdrop-blur-md flex items-center justify-center p-3 sm:p-4 md:p-6 animate-in fade-in duration-200">
      <div 
        className="relative w-full max-w-4xl bg-[#0c1222] border border-slate-700/80 rounded-2xl shadow-2xl overflow-hidden max-h-[90vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="px-6 py-5 border-b border-slate-800 flex items-start justify-between bg-slate-900/50">
          <div className="space-y-1 pr-6">
            <div className="flex items-center space-x-2">
              <span className="text-xs font-mono px-2.5 py-0.5 rounded-full bg-cyan-950/80 text-cyan-400 border border-cyan-800/60 font-semibold uppercase">
                {project.category}
              </span>
              {project.featured && (
                <span className="text-xs font-mono px-2.5 py-0.5 rounded-full bg-emerald-950/80 text-emerald-400 border border-emerald-800/60 font-semibold uppercase">
                  Featured
                </span>
              )}
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
              {project.title}
            </h2>
            <p className="text-slate-400 text-sm sm:text-base">
              {project.tagline}
            </p>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-xl text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
            aria-label="Close dialog"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body (Scrollable) */}
        <div className="p-6 overflow-y-auto space-y-8">
          
          {/* Key Metrics Banner */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            {project.metrics.map((metric) => (
              <div
                key={metric.label}
                className="bg-slate-900/80 border border-slate-800 rounded-xl p-3 text-center"
              >
                <div className="text-base sm:text-lg font-bold font-mono text-cyan-400">
                  {metric.value}
                </div>
                <div className="text-xs text-slate-400 font-medium mt-0.5">
                  {metric.label}
                </div>
              </div>
            ))}
          </div>

          {/* Architecture Diagram or Image if available */}
          {project.image && (
            <div className="space-y-2">
              <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400 flex items-center space-x-1.5">
                <Layers className="w-3.5 h-3.5 text-cyan-400" />
                <span>Architecture &amp; System Visualization</span>
              </h4>
              <div className="relative w-full h-56 sm:h-72 rounded-xl overflow-hidden border border-slate-800 bg-slate-950">
                <Image
                  src={project.image}
                  alt={`${project.title} diagram`}
                  fill
                  className="object-contain p-2"
                />
              </div>
            </div>
          )}

          {/* Problem vs. Solution Dual Box */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-rose-950/20 border border-rose-900/40 rounded-xl p-4 sm:p-5 space-y-2">
              <div className="flex items-center space-x-2 text-rose-400 text-xs font-mono uppercase font-semibold">
                <AlertCircle className="w-4 h-4" />
                <span>The Engineering Challenge</span>
              </div>
              <p className="text-slate-300 text-sm leading-relaxed">
                {project.problem}
              </p>
            </div>

            <div className="bg-emerald-950/20 border border-emerald-900/40 rounded-xl p-4 sm:p-5 space-y-2">
              <div className="flex items-center space-x-2 text-emerald-400 text-xs font-mono uppercase font-semibold">
                <CheckCircle2 className="w-4 h-4" />
                <span>Engineered Solution</span>
              </div>
              <p className="text-slate-300 text-sm leading-relaxed">
                {project.solution}
              </p>
            </div>
          </div>

          {/* Why It Matters */}
          <div className="bg-slate-900/60 border border-slate-800 rounded-xl p-4 sm:p-5">
            <h4 className="text-xs font-mono uppercase tracking-wider text-teal-400 mb-1.5 font-semibold">
              Practical Impact &amp; Why It Matters
            </h4>
            <p className="text-slate-200 text-sm leading-relaxed">
              {project.whyItMatters}
            </p>
          </div>

          {/* Pipeline / Architecture Steps */}
          {project.architectureSteps && project.architectureSteps.length > 0 && (
            <div className="space-y-3">
              <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400">
                Technical Pipeline &amp; Execution DAG
              </h4>
              <div className="space-y-2.5">
                {project.architectureSteps.map((step) => (
                  <div
                    key={step.step}
                    className="flex items-start space-x-3 bg-slate-900/50 border border-slate-800/80 rounded-xl p-3 hover:border-slate-700 transition-colors"
                  >
                    <span className="text-xs font-mono font-bold text-cyan-400 bg-slate-800 px-2 py-0.5 rounded">
                      {step.step}
                    </span>
                    <div className="space-y-0.5">
                      <div className="text-sm font-semibold text-slate-100">
                        {step.title}
                      </div>
                      <p className="text-xs text-slate-400 leading-relaxed">
                        {step.detail}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Results & Empirical Metrics */}
          <div className="space-y-3">
            <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400">
              Verified Results &amp; Deliverables
            </h4>
            <ul className="space-y-2">
              {project.results.map((res, i) => (
                <li key={i} className="flex items-start space-x-2 text-sm text-slate-300">
                  <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                  <span>{res}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Technologies Used */}
          <div className="space-y-2 pt-2 border-t border-slate-800">
            <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400">
              Technologies &amp; Libraries
            </h4>
            <div className="flex flex-wrap gap-1.5">
              {project.technologies.map((tech) => (
                <span
                  key={tech}
                  className="text-xs px-2.5 py-1 rounded bg-slate-800 text-slate-300 font-medium"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

        </div>

        {/* Modal Footer Links */}
        <div className="px-6 py-4 border-t border-slate-800 bg-slate-900/60 flex flex-wrap items-center justify-between gap-3">
          <div className="flex items-center space-x-3">
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-1.5 text-xs font-semibold px-3.5 py-2 rounded-lg bg-slate-800 text-slate-200 hover:text-white hover:bg-slate-700 transition-colors"
              >
                <GithubIcon className="w-4 h-4" />
                <span>GitHub Repository</span>
              </a>
            )}
            {project.paperUrl && (
              <a
                href={project.paperUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-1.5 text-xs font-semibold px-3.5 py-2 rounded-lg bg-cyan-950/80 border border-cyan-800/80 text-cyan-300 hover:bg-cyan-900/60 transition-colors"
              >
                <FileText className="w-4 h-4" />
                <span>Read Paper (arXiv)</span>
              </a>
            )}
          </div>

          <button
            onClick={onClose}
            className="text-xs font-semibold px-4 py-2 rounded-lg bg-slate-800 text-slate-300 hover:text-white hover:bg-slate-700 transition-colors"
          >
            Close Deep-Dive
          </button>
        </div>

      </div>
    </div>
  );
}
