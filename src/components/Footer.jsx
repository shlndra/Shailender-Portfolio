import React from 'react';
import { useTheme } from '../App';
import { personalInfo } from '../data/portfolioData';
import { ArrowUp } from 'lucide-react';
import { Github, Linkedin } from './Icons';

export default function Footer() {
  const { darkMode } = useTheme();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className={`relative ${darkMode ? 'bg-[#080B12]' : 'bg-white'}`}>
      {/* Top gradient line */}
      <div className="h-px bg-gradient-to-r from-transparent via-[#6366F1]/50 to-transparent" />

      <div className="max-w-6xl mx-auto px-6 py-8">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          {/* Copyright */}
          <p className={`text-xs ${darkMode ? 'text-slate-500' : 'text-slate-500'}`}>
            © {new Date().getFullYear()} {personalInfo.fullName}. All rights reserved.
          </p>

          <div className="flex items-center gap-4">
            {/* Social */}
            <div className="flex items-center gap-2">
              {[
                { icon: Github, href: personalInfo.socials.github, label: 'GitHub' },
                { icon: Linkedin, href: personalInfo.socials.linkedin, label: 'LinkedIn' },
              ].map(({ icon: Icon, href, label }, i) => (
                <a
                  key={i}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className={`p-2 rounded-full transition-all duration-300 ${
                    darkMode 
                      ? 'text-slate-500 hover:text-violet-400 hover:bg-white/5' 
                      : 'text-slate-400 hover:text-violet-600 hover:bg-black/5'
                  }`}
                >
                  <Icon size={18} />
                </a>
              ))}
            </div>

            {/* Back to top */}
            <button
              onClick={scrollToTop}
              className={`p-2.5 rounded-full transition-all duration-300 magnetic-btn ${
                darkMode 
                  ? 'bg-white/5 hover:bg-violet-500/20 text-slate-400 hover:text-violet-400' 
                  : 'bg-black/5 hover:bg-violet-500/10 text-slate-600 hover:text-violet-600'
              }`}
              aria-label="Back to top"
            >
              <ArrowUp size={16} />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
