"use client";

import { ArrowUpRight, FileText, ChevronRight } from "lucide-react";
import { GithubIcon } from "./Icons";
import { Project } from "@/types";

interface ProjectCardProps {
  project: Project;
  onOpenModal: (project: Project) => void;
}

export function ProjectCard({ project, onOpenModal }: ProjectCardProps) {
  return (
    <div
      onClick={() => onOpenModal(project)}
      className="group relative bg-slate-900/60 border border-slate-800/90 hover:border-cyan-500/40 rounded-2xl p-6 sm:p-7 flex flex-col justify-between transition-all duration-300 hover:shadow-xl hover:shadow-cyan-500/5 hover:-translate-y-1 cursor-pointer backdrop-blur-sm"
    >
      <div className="space-y-4">
        
        {/* Top Badges */}
        <div className="flex items-center justify-between">
          <span className="text-xs font-mono uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-slate-800/80 text-cyan-400 border border-slate-700/60 font-semibold">
            {project.category}
          </span>
          {project.featured && (
            <span className="text-[11px] font-mono uppercase tracking-wider px-2 py-0.5 rounded-full bg-emerald-950/80 text-emerald-400 border border-emerald-800/60 font-medium">
              Featured
            </span>
          )}
        </div>

        {/* Title & Tagline */}
        <div className="space-y-1.5">
          <h3 className="text-xl sm:text-2xl font-bold text-white group-hover:text-cyan-400 transition-colors flex items-center justify-between">
            <span>{project.title}</span>
            <ArrowUpRight className="w-5 h-5 text-slate-500 group-hover:text-cyan-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
          </h3>
          <p className="text-sm font-medium text-slate-300 leading-snug">
            {project.tagline}
          </p>
        </div>

        {/* Summary */}
        <p className="text-slate-400 text-sm leading-relaxed line-clamp-3">
          {project.summary}
        </p>

        {/* Key Metrics Pill Grid */}
        <div className="grid grid-cols-2 gap-2 pt-1">
          {project.metrics.slice(0, 2).map((m) => (
            <div
              key={m.label}
              className="bg-slate-950/60 border border-slate-800/80 rounded-lg px-2.5 py-1.5"
            >
              <div className="text-xs font-bold font-mono text-cyan-400">
                {m.value}
              </div>
              <div className="text-[11px] text-slate-400 truncate">
                {m.label}
              </div>
            </div>
          ))}
        </div>

        {/* Tech Tags */}
        <div className="flex flex-wrap gap-1.5 pt-2">
          {project.tags.slice(0, 4).map((tag) => (
            <span
              key={tag}
              className="text-[11px] font-mono px-2 py-0.5 rounded bg-slate-800/60 text-slate-300 border border-slate-700/40"
            >
              {tag}
            </span>
          ))}
          {project.tags.length > 4 && (
            <span className="text-[11px] font-mono px-1.5 py-0.5 text-slate-400">
              +{project.tags.length - 4}
            </span>
          )}
        </div>

      </div>

      {/* Card Bottom: Deep-Dive Prompt & Direct Links */}
      <div className="mt-6 pt-4 border-t border-slate-800/80 flex items-center justify-between">
        <span className="text-xs font-semibold text-cyan-400 flex items-center space-x-1 group-hover:underline">
          <span>Technical Deep-Dive</span>
          <ChevronRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
        </span>

        <div className="flex items-center space-x-3 text-slate-400" onClick={(e) => e.stopPropagation()}>
          {project.paperUrl && (
            <a
              href={project.paperUrl}
              target="_blank"
              rel="noopener noreferrer"
              title="Read arXiv Paper"
              className="hover:text-cyan-400 transition-colors"
            >
              <FileText className="w-4 h-4" />
            </a>
          )}
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              title="View GitHub"
              className="hover:text-white transition-colors"
            >
              <GithubIcon className="w-4 h-4" />
            </a>
          )}
        </div>
      </div>
    </div>
  );
}
