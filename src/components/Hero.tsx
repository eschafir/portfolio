"use client";

import Image from "next/image";
import { Download, ArrowDown, Mail, BookOpen, CheckCircle2 } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "./Icons";
import { persona } from "@/data/persona";

export function Hero() {
  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Persona & Value Proposition */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            
            {/* Status Pill */}
            <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-slate-900/90 border border-cyan-500/30 text-cyan-400 text-xs font-mono tracking-wide shadow-sm">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span>AI &amp; Data Engineering</span>
            </div>

            {/* Main Name & Title */}
            <div className="space-y-2">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-tight">
                Esteban <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-teal-300 to-emerald-400">Schafir</span>
              </h1>
              <p className="text-xl sm:text-2xl font-semibold text-slate-200 tracking-tight">
                AI Engineer <span className="text-cyan-400">/</span> Data Engineer
              </p>
              <p className="text-sm sm:text-base font-medium text-slate-400">
                Applied AI Researcher &bull; Specializing in LLM Agents &amp; Data Systems
              </p>
            </div>

            {/* Value Proposition (No buzzwords, crisp and concrete) */}
            <p className="text-slate-300 text-base sm:text-lg leading-relaxed max-w-2xl mx-auto lg:mx-0">
              {persona.valueProposition} Combining <span className="text-slate-100 font-semibold">4+ years of academic AI research</span> at FIU with <span className="text-slate-100 font-semibold">10+ years of enterprise IT &amp; security engineering</span>.
            </p>

            {/* Primary Action Buttons */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3 sm:gap-4 pt-2">
              <a
                href="#projects"
                className="inline-flex items-center space-x-2 px-6 py-3 rounded-xl bg-gradient-to-r from-cyan-500 to-teal-500 text-slate-950 font-bold text-sm tracking-wide shadow-lg shadow-cyan-500/20 hover:shadow-cyan-500/35 hover:scale-[1.02] active:scale-[0.98] transition-all duration-200"
              >
                <span>Explore Projects</span>
                <ArrowDown className="w-4 h-4" />
              </a>

              <a
                href={persona.resumePath}
                target="_blank"
                rel="noopener noreferrer"
                download="Esteban_Schafir_Resume.pdf"
                className="inline-flex items-center space-x-2 px-5 py-3 rounded-xl bg-slate-900 border border-slate-700 text-slate-200 font-semibold text-sm hover:bg-slate-800 hover:border-slate-600 hover:text-white transition-all duration-200"
              >
                <Download className="w-4 h-4 text-cyan-400" />
                <span>Download Resume</span>
              </a>

              <a
                href="#research"
                className="inline-flex items-center space-x-2 px-5 py-3 rounded-xl bg-slate-900/60 border border-slate-800 text-slate-300 font-semibold text-sm hover:bg-slate-800/80 hover:text-white transition-all duration-200"
              >
                <BookOpen className="w-4 h-4 text-teal-400" />
                <span>Publications</span>
              </a>
            </div>

            {/* Quick Profile Links */}
            <div className="pt-2 flex items-center justify-center lg:justify-start space-x-5 text-sm text-slate-400">
              <a
                href={persona.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-1.5 hover:text-white transition-colors"
              >
                <GithubIcon className="w-4 h-4" />
                <span>github.com/eschafir</span>
              </a>
              <span className="text-slate-700">&bull;</span>
              <a
                href={persona.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-1.5 hover:text-cyan-400 transition-colors"
              >
                <LinkedinIcon className="w-4 h-4" />
                <span>LinkedIn</span>
              </a>
              <span className="text-slate-700">&bull;</span>
              <a
                href="mailto:esteban.schafir@gmail.com"
                className="flex items-center space-x-1.5 hover:text-white transition-colors"
              >
                <Mail className="w-4 h-4 text-teal-400" />
                <span>Email</span>
              </a>
            </div>

          </div>

          {/* Right Column: Headshot & Key Stats */}
          <div className="lg:col-span-5 flex flex-col items-center">
            
            {/* Framed Profile Picture */}
            <div className="relative group">
              <div className="absolute -inset-1.5 bg-gradient-to-r from-cyan-500 to-teal-500 rounded-3xl blur-md opacity-40 group-hover:opacity-70 transition duration-500" />
              <div className="relative w-64 h-64 sm:w-72 sm:h-72 rounded-2xl overflow-hidden border-2 border-slate-700/80 bg-slate-900 shadow-2xl">
                <Image
                  src={persona.profileImage}
                  alt="Esteban Schafir - AI Engineer & Data Engineer"
                  fill
                  priority
                  className="object-cover object-top hover:scale-105 transition-transform duration-500"
                  sizes="(max-width: 640px) 256px, 288px"
                />
              </div>

              {/* Verified Badge */}
              {/* <div className="absolute -bottom-3 -right-3 bg-slate-900/95 border border-slate-700 rounded-xl px-3 py-1.5 shadow-xl flex items-center space-x-2 text-xs font-mono text-cyan-400">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                <span>FIU CS Ph.D.</span>
              </div> */}
            </div>

            {/* Quick Metrics Bar below headshot */}
            <div className="grid grid-cols-2 gap-3 w-full max-w-sm mt-8">
              {persona.stats.map((stat) => (
                <div
                  key={stat.label}
                  className="bg-slate-900/80 border border-slate-800/80 rounded-xl p-3 text-center hover:border-cyan-500/30 transition-colors"
                >
                  <div className="text-xl sm:text-2xl font-bold font-mono text-white">
                    {stat.value}
                  </div>
                  <div className="text-xs text-slate-400 font-medium mt-0.5">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
