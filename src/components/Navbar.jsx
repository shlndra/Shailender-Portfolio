import React, { useState, useEffect } from 'react';
import { 
  FileText, 
  Menu, 
  X, 
  Sun, 
  Moon, 
  Sparkles, 
  ExternalLink 
} from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export default function Navbar({ darkMode, setDarkMode }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  const navLinks = [
    { label: 'About', href: '#about' },
    { label: 'Skills', href: '#skills' },
    { label: 'Experience', href: '#experience' },
    { label: 'Projects', href: '#projects' },
    { label: 'Education', href: '#education' },
    { label: 'Blogs', href: '#blogs' },
    { label: 'Contact', href: '#contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      const sections = ['hero', 'about', 'skills', 'experience', 'projects', 'education', 'blogs', 'contact'];
      const scrollPosition = window.scrollY + 200;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? darkMode
            ? 'bg-slate-950/85 backdrop-blur-md border-b border-slate-800/80 shadow-lg shadow-black/20'
            : 'bg-white/85 backdrop-blur-md border-b border-slate-200/80 shadow-md shadow-slate-200/50'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <a 
            href="#hero" 
            className="flex items-center gap-2.5 group cursor-pointer focus:outline-none"
          >
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-cyan-500 via-blue-600 to-indigo-600 p-[2px] shadow-lg shadow-cyan-500/20 group-hover:shadow-cyan-500/40 transition-all duration-300">
              <div className={`w-full h-full rounded-[10px] flex items-center justify-center font-mono font-bold text-sm transition-colors ${
                darkMode ? 'bg-slate-950 text-cyan-400' : 'bg-white text-blue-600'
              }`}>
                SK
              </div>
            </div>
            <div className="flex flex-col">
              <span className={`font-bold tracking-tight text-lg group-hover:text-cyan-400 transition-colors ${
                darkMode ? 'text-white' : 'text-slate-900'
              }`}>
                Shailender<span className="text-cyan-400">.ai</span>
              </span>
              <span className={`text-[11px] font-mono tracking-wider -mt-1 ${
                darkMode ? 'text-slate-400' : 'text-slate-500'
              }`}>
                AI & ML Engineer
              </span>
            </div>
          </a>

          {/* Desktop Nav Items */}
          <nav className="hidden md:flex items-center gap-1 lg:gap-2">
            {navLinks.map((link) => {
              const isActive = activeSection === link.href.replace('#', '');
              return (
                <a
                  key={link.label}
                  href={link.href}
                  className={`px-3.5 py-1.5 rounded-lg text-sm font-medium transition-all duration-200 relative ${
                    isActive
                      ? darkMode
                        ? 'text-cyan-400 bg-cyan-950/40 border border-cyan-800/50'
                        : 'text-blue-600 bg-blue-50 border border-blue-200'
                      : darkMode
                        ? 'text-slate-300 hover:text-white hover:bg-slate-800/60'
                        : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
                  }`}
                >
                  {link.label}
                  {isActive && (
                    <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-4 h-0.5 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full" />
                  )}
                </a>
              );
            })}
          </nav>

          {/* Right Action Buttons */}
          <div className="hidden md:flex items-center gap-3">
            {/* Theme Toggle */}
            <button
              onClick={() => setDarkMode(!darkMode)}
              aria-label="Toggle Theme"
              className={`p-2.5 rounded-xl border transition-all duration-200 cursor-pointer ${
                darkMode 
                  ? 'border-slate-800 bg-slate-900/80 text-yellow-400 hover:bg-slate-800 hover:border-slate-700' 
                  : 'border-slate-200 bg-slate-100 text-slate-700 hover:bg-slate-200'
              }`}
            >
              {darkMode ? <Sun size={18} /> : <Moon size={18} />}
            </button>

            {/* Resume Button */}
            <a
              href={personalInfo.resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-semibold bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-lg shadow-cyan-500/20 hover:shadow-cyan-500/35 hover:scale-[1.02] active:scale-[0.98] transition-all duration-200"
            >
              <FileText size={16} />
              <span>Resume</span>
              <ExternalLink size={13} className="opacity-70" />
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden items-center gap-2">
            <button
              onClick={() => setDarkMode(!darkMode)}
              aria-label="Toggle Theme"
              className={`p-2 rounded-lg border ${
                darkMode 
                  ? 'border-slate-800 bg-slate-900 text-yellow-400' 
                  : 'border-slate-200 bg-slate-100 text-slate-700'
              }`}
            >
              {darkMode ? <Sun size={18} /> : <Moon size={18} />}
            </button>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Open Navigation Menu"
              className={`p-2 rounded-lg border ${
                darkMode 
                  ? 'border-slate-800 bg-slate-900 text-slate-300 hover:text-white' 
                  : 'border-slate-200 bg-slate-100 text-slate-700 hover:text-slate-900'
              }`}
            >
              {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {mobileMenuOpen && (
        <div className={`md:hidden px-4 pt-3 pb-6 border-b transition-all ${
          darkMode 
            ? 'bg-slate-950/95 border-slate-800 backdrop-blur-xl' 
            : 'bg-white/95 border-slate-200 backdrop-blur-xl'
        }`}>
          <div className="flex flex-col gap-1.5">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className={`px-4 py-2.5 rounded-lg text-sm font-medium transition-colors ${
                  darkMode
                    ? 'text-slate-200 hover:bg-slate-800/80 hover:text-cyan-400'
                    : 'text-slate-700 hover:bg-slate-100 hover:text-blue-600'
                }`}
              >
                {link.label}
              </a>
            ))}
            <div className="pt-3 border-t border-slate-800/50 mt-1">
              <a
                href={personalInfo.resumeUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center justify-center gap-2 w-full px-4 py-2.5 rounded-xl text-sm font-semibold bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-md shadow-cyan-500/20"
              >
                <FileText size={16} />
                <span>Download / View Resume</span>
                <ExternalLink size={14} />
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
