import React from 'react';
import { 
  ArrowUp, 
  Heart, 
  Mail, 
  FileText 
} from 'lucide-react';
import { GithubIcon, LinkedinIcon, InstagramIcon } from './Icons';
import { personalInfo } from '../data/portfolioData';

export default function Footer({ darkMode }) {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className={`border-t relative z-10 transition-colors ${
      darkMode ? 'bg-slate-950 border-slate-800/80' : 'bg-slate-100 border-slate-200'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 mb-12">
          
          {/* Brand Info */}
          <div className="md:col-span-6 flex flex-col items-start">
            <div className="flex items-center gap-2.5 mb-3">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-cyan-500 to-blue-600 flex items-center justify-center font-mono font-bold text-white text-xs">
                SK
              </div>
              <span className={`font-bold text-lg ${darkMode ? 'text-white' : 'text-slate-900'}`}>
                Shailender<span className="text-cyan-400">.ai</span>
              </span>
            </div>

            <p className={`text-xs sm:text-sm max-w-sm mb-4 leading-relaxed ${
              darkMode ? 'text-slate-400' : 'text-slate-600'
            }`}>
              {personalInfo.shortBio}
            </p>

            <div className="flex items-center gap-3">
              <a
                href={personalInfo.socials.github}
                target="_blank"
                rel="noopener noreferrer"
                className={`p-2 rounded-lg border text-slate-400 hover:text-white transition-colors ${
                  darkMode ? 'border-slate-800 bg-slate-900/60 hover:bg-slate-800' : 'border-slate-200 bg-white hover:bg-slate-100'
                }`}
                aria-label="GitHub"
              >
                <GithubIcon size={16} />
              </a>

              <a
                href={personalInfo.socials.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className={`p-2 rounded-lg border text-slate-400 hover:text-blue-400 transition-colors ${
                  darkMode ? 'border-slate-800 bg-slate-900/60 hover:bg-slate-800' : 'border-slate-200 bg-white hover:bg-slate-100'
                }`}
                aria-label="LinkedIn"
              >
                <LinkedinIcon size={16} />
              </a>

              <a
                href={personalInfo.socials.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className={`p-2 rounded-lg border text-slate-400 hover:text-pink-400 transition-colors ${
                  darkMode ? 'border-slate-800 bg-slate-900/60 hover:bg-slate-800' : 'border-slate-200 bg-white hover:bg-slate-100'
                }`}
                aria-label="Instagram"
              >
                <InstagramIcon size={16} />
              </a>

              <a
                href={personalInfo.resumeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className={`p-2 rounded-lg border text-slate-400 hover:text-cyan-400 transition-colors ${
                  darkMode ? 'border-slate-800 bg-slate-900/60 hover:bg-slate-800' : 'border-slate-200 bg-white hover:bg-slate-100'
                }`}
                aria-label="Resume"
              >
                <FileText size={16} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-3">
            <h4 className={`text-xs font-mono font-bold tracking-wider uppercase mb-3 ${
              darkMode ? 'text-slate-300' : 'text-slate-700'
            }`}>
              Navigation
            </h4>
            <ul className="space-y-2 text-xs font-mono">
              <li>
                <a href="#about" className="text-slate-400 hover:text-cyan-400 transition-colors">
                  // About Me
                </a>
              </li>
              <li>
                <a href="#skills" className="text-slate-400 hover:text-cyan-400 transition-colors">
                  // Tech Stack
                </a>
              </li>
              <li>
                <a href="#experience" className="text-slate-400 hover:text-cyan-400 transition-colors">
                  // Work Experience
                </a>
              </li>
              <li>
                <a href="#projects" className="text-slate-400 hover:text-cyan-400 transition-colors">
                  // Featured Projects
                </a>
              </li>
              <li>
                <a href="#education" className="text-slate-400 hover:text-cyan-400 transition-colors">
                  // Education
                </a>
              </li>
              <li>
                <a href="#blogs" className="text-slate-400 hover:text-cyan-400 transition-colors">
                  // Medium Blogs
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Details */}
          <div className="md:col-span-3">
            <h4 className={`text-xs font-mono font-bold tracking-wider uppercase mb-3 ${
              darkMode ? 'text-slate-300' : 'text-slate-700'
            }`}>
              Direct Contact
            </h4>
            <div className="space-y-2 text-xs font-mono text-slate-400">
              <div>Email: {personalInfo.email}</div>
              <div>Phone: {personalInfo.phone}</div>
              <div>Location: {personalInfo.location}</div>
              <div className="text-emerald-400 pt-1 font-semibold">
                Status: Available for Internships
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-slate-800/60 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className={`text-xs flex items-center gap-1.5 ${
            darkMode ? 'text-slate-400' : 'text-slate-600'
          }`}>
            <span>Designed & Built with</span>
            <Heart size={13} className="text-red-500 fill-red-500 inline" />
            <span>by Shailender • {new Date().getFullYear()}</span>
          </p>

          <button
            onClick={scrollToTop}
            className={`flex items-center gap-2 px-3 py-1.5 rounded-lg border text-xs font-mono transition-all hover:scale-105 cursor-pointer ${
              darkMode 
                ? 'border-slate-800 bg-slate-900 text-slate-300 hover:text-white hover:border-cyan-500/40' 
                : 'border-slate-200 bg-white text-slate-700 hover:text-black hover:border-blue-300'
            }`}
          >
            <span>Back to top</span>
            <ArrowUp size={13} />
          </button>
        </div>

      </div>
    </footer>
  );
}
