import React from 'react';
import { useTheme } from '../App';
import { personalInfo } from '../data/portfolioData';
import { Heart, ArrowUp } from 'lucide-react';
import { Github, Linkedin } from './Icons';

export default function Footer() {
  const { darkMode } = useTheme();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className={`relative ${darkMode ? 'bg-[#020010]' : 'bg-white'}`}>
      {/* Top gradient line */}
      <div className="h-px bg-gradient-to-r from-transparent via-violet-500/50 to-transparent" />

      <div className="max-w-6xl mx-auto px-6 py-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Brand */}
          <div className="text-center md:text-left">
            <span className="text-xl font-black gradient-text">Shailender</span>
            <p className={`text-sm mt-2 ${darkMode ? 'text-slate-500' : 'text-slate-500'}`}>
              Designed & built with{' '}
              <Heart size={12} className="inline text-red-500 fill-red-500" />{' '}
              by {personalInfo.fullName}
            </p>
          </div>

          {/* Social */}
          <div className="flex items-center gap-3">
            {[
              { icon: Github, href: personalInfo.socials.github },
              { icon: Linkedin, href: personalInfo.socials.linkedin },
            ].map(({ icon: Icon, href }, i) => (
              <a
                key={i}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className={`p-2.5 rounded-full transition-all duration-300 ${
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
            className={`p-3 rounded-full transition-all duration-300 magnetic-btn ${
              darkMode 
                ? 'bg-white/5 hover:bg-violet-500/20 text-slate-400 hover:text-violet-400' 
                : 'bg-black/5 hover:bg-violet-500/10 text-slate-600 hover:text-violet-600'
            }`}
            aria-label="Back to top"
          >
            <ArrowUp size={18} />
          </button>
        </div>

        {/* Copyright */}
        <div className={`text-center mt-8 pt-6 border-t ${
          darkMode ? 'border-white/5' : 'border-black/5'
        }`}>
          <p className={`text-xs ${darkMode ? 'text-slate-600' : 'text-slate-400'}`}>
            © {new Date().getFullYear()} {personalInfo.fullName}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
