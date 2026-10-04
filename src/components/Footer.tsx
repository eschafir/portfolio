import { Mail, ArrowUp } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "./Icons";
import { persona } from "@/data/persona";

export function Footer() {
  return (
    <footer className="mt-auto border-t border-slate-800/80 bg-[#070b14] py-12 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          
          {/* Left: Branding */}
          <div className="text-center md:text-left space-y-1">
            <div className="font-bold text-base text-white tracking-tight">
              Esteban Schafir
            </div>
            <div className="text-xs text-slate-400">
              AI Engineer &bull; Data Engineer &bull; Ph.D. Candidate @ Florida International University
            </div>
          </div>

          {/* Center: Social Icons */}
          <div className="flex items-center space-x-4">
            <a
              href={persona.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 text-slate-400 hover:text-white rounded-lg transition-colors"
              aria-label="GitHub"
            >
              <GithubIcon className="w-4 h-4" />
            </a>
            <a
              href={persona.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 text-slate-400 hover:text-cyan-400 rounded-lg transition-colors"
              aria-label="LinkedIn"
            >
              <LinkedinIcon className="w-4 h-4" />
            </a>
            <a
              href={`mailto:${persona.email}`}
              className="p-2 text-slate-400 hover:text-white rounded-lg transition-colors"
              aria-label="Email"
            >
              <Mail className="w-4 h-4" />
            </a>
          </div>

          {/* Right: Technical Notes & Top Scroll */}
          <div className="flex items-center space-x-4 text-xs text-slate-500 font-mono">
            <span>Built with Next.js 16, TypeScript &amp; Tailwind CSS</span>
            <a
              href="#"
              aria-label="Back to top"
              className="p-1.5 rounded-lg bg-slate-800/80 text-slate-400 hover:text-white hover:bg-slate-700 transition-colors"
            >
              <ArrowUp className="w-3.5 h-3.5" />
            </a>
          </div>

        </div>

        <div className="mt-8 pt-6 border-t border-slate-900 text-center text-xs text-slate-600">
          &copy; {new Date().getFullYear()} Esteban Schafir. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
