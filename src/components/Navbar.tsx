"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Download, Menu, X, FileText } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "./Icons";
import { persona } from "@/data/persona";

const navLinks = [
  { name: "About", href: "#about" },
  { name: "Projects", href: "#projects" },
  { name: "Research", href: "#research" },
  { name: "Experience", href: "#experience" },
  { name: "Skills", href: "#skills" },
  { name: "Education", href: "#education" },
  { name: "Contact", href: "#contact" },
];

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-[#090d16]/85 backdrop-blur-md border-b border-slate-800/80 shadow-lg shadow-black/20 py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo / Name */}
          <Link
            href="#"
            className="group flex items-center space-x-2 font-mono text-base font-semibold tracking-tight text-white hover:text-cyan-400 transition-colors"
          >
            <span className="w-2.5 h-2.5 rounded-full bg-cyan-400 animate-pulse group-hover:scale-125 transition-transform" />
            <span className="text-slate-100 font-sans font-bold text-lg">
              Esteban<span className="text-cyan-400 font-mono font-medium">.Schafir</span>
            </span>
            <span className="hidden sm:inline-block text-xs uppercase px-2 py-0.5 rounded-full bg-slate-800 text-slate-400 border border-slate-700/60 ml-2">
              AI / Data
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-1 lg:space-x-2 text-sm font-medium text-slate-300">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="px-3 py-1.5 rounded-md hover:text-white hover:bg-slate-800/60 transition-colors"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Right Action: Resume & Social */}
          <div className="hidden md:flex items-center space-x-3">
            <a
              href={persona.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="p-2 text-slate-400 hover:text-white hover:bg-slate-800/80 rounded-lg transition-colors"
            >
              <GithubIcon className="w-4 h-4" />
            </a>
            <a
              href={persona.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="p-2 text-slate-400 hover:text-cyan-400 hover:bg-slate-800/80 rounded-lg transition-colors"
            >
              <LinkedinIcon className="w-4 h-4" />
            </a>
            <a
              href={persona.resumePath}
              target="_blank"
              rel="noopener noreferrer"
              download="Esteban_Schafir_Resume.pdf"
              className="flex items-center space-x-2 px-3.5 py-1.5 rounded-lg bg-cyan-500/10 text-cyan-400 border border-cyan-500/30 hover:bg-cyan-500/20 hover:border-cyan-400 text-xs font-semibold uppercase tracking-wider transition-all duration-200"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Resume</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden items-center space-x-2">
            <a
              href={persona.resumePath}
              target="_blank"
              rel="noopener noreferrer"
              download="Esteban_Schafir_Resume.pdf"
              className="flex items-center space-x-1 px-2.5 py-1 rounded bg-cyan-500/10 text-cyan-400 border border-cyan-500/30 text-xs font-medium"
            >
              <FileText className="w-3.5 h-3.5" />
              <span>PDF</span>
            </a>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800"
              aria-label="Toggle Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#0c1222] border-b border-slate-800 px-4 pt-3 pb-6 space-y-2">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2 rounded-md text-base font-medium text-slate-300 hover:text-white hover:bg-slate-800"
            >
              {link.name}
            </a>
          ))}
          <div className="pt-4 border-t border-slate-800 flex items-center justify-between">
            <div className="flex space-x-4">
              <a
                href={persona.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-400 hover:text-white"
              >
                <GithubIcon className="w-5 h-5" />
              </a>
              <a
                href={persona.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-400 hover:text-cyan-400"
              >
                <LinkedinIcon className="w-5 h-5" />
              </a>
            </div>
            <a
              href={persona.resumePath}
              target="_blank"
              rel="noopener noreferrer"
              download="Esteban_Schafir_Resume.pdf"
              className="flex items-center space-x-1.5 px-3 py-1.5 rounded-lg bg-cyan-500 text-slate-950 font-semibold text-xs uppercase"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Download Resume</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
