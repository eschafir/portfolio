"use client";

import { useState } from "react";
import { Mail, Phone, MapPin, BookOpen, Download, Copy, Check } from "lucide-react";
import { LinkedinIcon, GithubIcon } from "./Icons";
import { persona } from "@/data/persona";

export function Contact() {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);

  const copyToClipboard = (text: string, type: "email" | "phone") => {
    navigator.clipboard.writeText(text);
    if (type === "email") {
      setCopiedEmail(true);
      setTimeout(() => setCopiedEmail(false), 2000);
    } else {
      setCopiedPhone(true);
      setTimeout(() => setCopiedPhone(false), 2000);
    }
  };

  return (
    <section id="contact" className="py-20 md:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center space-x-1.5 text-xs font-mono uppercase tracking-widest text-cyan-400 bg-cyan-950/40 border border-cyan-800/40 px-3 py-1 rounded-full">
            <Mail className="w-3.5 h-3.5" />
            <span>Connect &bull; Recruit &bull; Collaborate</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
            Let&apos;s Build Together
          </h2>
          <p className="text-slate-400 text-base sm:text-lg">
            Open to AI Engineering and Data Engineering opportunities. Reach out directly via email or professional networks.
          </p>
        </div>

        {/* Contact Container */}
        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-8 items-stretch">
          
          {/* Direct Communication Channels */}
          <div className="md:col-span-7 bg-slate-900/60 border border-slate-800/90 rounded-2xl p-6 sm:p-8 space-y-6 backdrop-blur-sm">
            <h3 className="text-xl font-bold text-white flex items-center space-x-2">
              <span className="w-2.5 h-2.5 rounded-full bg-cyan-400" />
              <span>Direct Channels</span>
            </h3>

            {/* Email Card */}
            <div className="flex items-center justify-between p-4 rounded-xl bg-slate-950/60 border border-slate-800 hover:border-cyan-500/40 transition-colors">
              <div className="flex items-center space-x-3 truncate">
                <div className="w-10 h-10 rounded-lg bg-cyan-950/80 border border-cyan-800/60 flex items-center justify-center shrink-0">
                  <Mail className="w-5 h-5 text-cyan-400" />
                </div>
                <div className="truncate">
                  <div className="text-xs text-slate-400 font-mono">Email Address</div>
                  <a
                    href={`mailto:${persona.email}`}
                    className="text-sm sm:text-base font-semibold text-white hover:text-cyan-400 transition-colors truncate block"
                  >
                    {persona.email}
                  </a>
                </div>
              </div>
              <button
                onClick={() => copyToClipboard(persona.email, "email")}
                className="p-2 rounded-lg bg-slate-800 text-slate-300 hover:text-white hover:bg-slate-700 transition-colors shrink-0 ml-2"
                title="Copy email to clipboard"
                aria-label="Copy email"
              >
                {copiedEmail ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
              </button>
            </div>

            {/* Phone Card */}
            {/* <div className="flex items-center justify-between p-4 rounded-xl bg-slate-950/60 border border-slate-800 hover:border-cyan-500/40 transition-colors">
              <div className="flex items-center space-x-3 truncate">
                <div className="w-10 h-10 rounded-lg bg-teal-950/80 border border-teal-800/60 flex items-center justify-center shrink-0">
                  <Phone className="w-5 h-5 text-teal-400" />
                </div>
                <div className="truncate">
                  <div className="text-xs text-slate-400 font-mono">Phone (Direct)</div>
                  <a
                    href={`tel:${persona.phone}`}
                    className="text-sm sm:text-base font-semibold text-white hover:text-teal-400 transition-colors truncate block"
                  >
                    {persona.phone}
                  </a>
                </div>
              </div>
              <button
                onClick={() => copyToClipboard(persona.phone, "phone")}
                className="p-2 rounded-lg bg-slate-800 text-slate-300 hover:text-white hover:bg-slate-700 transition-colors shrink-0 ml-2"
                title="Copy phone to clipboard"
                aria-label="Copy phone"
              >
                {copiedPhone ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
              </button>
            </div> */}

            {/* Location Card */}
            <div className="flex items-center space-x-3 p-4 rounded-xl bg-slate-950/60 border border-slate-800">
              <div className="w-10 h-10 rounded-lg bg-slate-800 border border-slate-700 flex items-center justify-center shrink-0">
                <MapPin className="w-5 h-5 text-slate-300" />
              </div>
              <div>
                <div className="text-xs text-slate-400 font-mono">Location</div>
                <div className="text-sm sm:text-base font-semibold text-white">
                  {persona.location}
                </div>
              </div>
            </div>

          </div>

          {/* Social Profiles & Download Resume Action */}
          <div className="md:col-span-5 bg-slate-900/60 border border-slate-800/90 rounded-2xl p-6 sm:p-8 flex flex-col justify-between space-y-6 backdrop-blur-sm">
            <div className="space-y-4">
              <h3 className="text-xl font-bold text-white flex items-center space-x-2">
                <span className="w-2.5 h-2.5 rounded-full bg-teal-400" />
                <span>Profiles &amp; Dossier</span>
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                Connect on professional platforms or download my comprehensive AI &amp; Data Engineer resume for recruitment review.
              </p>

              {/* Profiles List */}
              <div className="space-y-2.5 pt-1">
                <a
                  href={persona.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-3 rounded-xl bg-slate-950/60 border border-slate-800 hover:border-cyan-500/40 text-slate-300 hover:text-white transition-colors group"
                >
                  <div className="flex items-center space-x-2.5">
                    <LinkedinIcon className="w-4 h-4 text-cyan-400" />
                    <span className="text-sm font-medium">LinkedIn Profile</span>
                  </div>
                  <span className="text-xs font-mono text-slate-500 group-hover:text-cyan-400">&rarr;</span>
                </a>

                <a
                  href={persona.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-3 rounded-xl bg-slate-950/60 border border-slate-800 hover:border-slate-700 text-slate-300 hover:text-white transition-colors group"
                >
                  <div className="flex items-center space-x-2.5">
                    <GithubIcon className="w-4 h-4 text-slate-300" />
                    <span className="text-sm font-medium">GitHub Repository</span>
                  </div>
                  <span className="text-xs font-mono text-slate-500 group-hover:text-white">&rarr;</span>
                </a>

                <a
                  href={persona.scholar}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-3 rounded-xl bg-slate-950/60 border border-slate-800 hover:border-teal-500/40 text-slate-300 hover:text-white transition-colors group"
                >
                  <div className="flex items-center space-x-2.5">
                    <BookOpen className="w-4 h-4 text-teal-400" />
                    <span className="text-sm font-medium">Google Scholar Citations</span>
                  </div>
                  <span className="text-xs font-mono text-slate-500 group-hover:text-teal-400">&rarr;</span>
                </a>
              </div>
            </div>

            {/* Resume Download Card */}
            <div className="pt-4 border-t border-slate-800">
              <a
                href={persona.resumePath}
                target="_blank"
                rel="noopener noreferrer"
                download="Esteban_Schafir_Resume.pdf"
                className="w-full inline-flex items-center justify-center space-x-2 px-5 py-3 rounded-xl bg-gradient-to-r from-cyan-500 to-teal-500 text-slate-950 font-bold text-sm tracking-wide shadow-lg shadow-cyan-500/20 hover:shadow-cyan-500/35 hover:scale-[1.02] active:scale-[0.98] transition-all duration-200"
              >
                <Download className="w-4 h-4" />
                <span>Download Resume (PDF)</span>
              </a>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
