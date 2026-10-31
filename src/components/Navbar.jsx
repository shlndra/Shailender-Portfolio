import React, { useState, useEffect } from 'react';
import { useTheme } from '../App';
import { personalInfo } from '../data/portfolioData';
import { Menu, X, Sun, Moon, ArrowUpRight } from 'lucide-react';

const navLinks = [
  { name: 'About', href: '#about' },
  { name: 'Skills', href: '#skills' },
  { name: 'Experience', href: '#experience' },
  { name: 'Projects', href: '#projects' },
  { name: 'Education', href: '#education' },
  { name: 'Certificates', href: '#certificates' },
  { name: 'Blog', href: '#blog' },
  { name: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const { darkMode, setDarkMode } = useTheme();
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);

      // Determine active section
      const sections = navLinks.map(link => link.href.substring(1));
      for (let i = sections.length - 1; i >= 0; i--) {
        const section = document.getElementById(sections[i]);
        if (section) {
          const rect = section.getBoundingClientRect();
          if (rect.top <= 150) {
            setActiveSection(sections[i]);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (e, href) => {
    e.preventDefault();
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled 
          ? darkMode 
            ? 'py-3 bg-[#030014]/80 backdrop-blur-xl border-b border-white/5 shadow-lg shadow-violet-500/5' 
            : 'py-3 bg-white/80 backdrop-blur-xl border-b border-black/5 shadow-lg shadow-violet-500/10'
          : 'py-5 bg-transparent'
      }`}>
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          {/* Logo */}
          <a href="#" onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
             className="relative group">
            <span className="text-xl md:text-2xl font-black tracking-tight gradient-text">Shailender</span>
            <span className={`absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-violet-500 to-cyan-500 transition-all duration-300 group-hover:w-full`} />
          </a>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => scrollToSection(e, link.href)}
                className={`relative px-4 py-2 text-sm font-medium rounded-full transition-all duration-300 ${
                  activeSection === link.href.substring(1)
                    ? darkMode 
                      ? 'text-violet-400 bg-violet-500/10' 
                      : 'text-violet-600 bg-violet-500/10'
                    : darkMode
                      ? 'text-slate-400 hover:text-white hover:bg-white/5'
                      : 'text-slate-600 hover:text-slate-900 hover:bg-black/5'
                }`}
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* Right side: Resume + Theme toggle + Mobile menu */}
          <div className="flex items-center gap-3">
            {/* Direct Resume Link */}
            <a
              href={personalInfo.resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:inline-flex items-center gap-1.5 px-4 py-2 rounded-full text-xs font-semibold bg-gradient-to-r from-violet-600 to-cyan-600 text-white shadow-md shadow-violet-500/20 hover:opacity-95 transition-all magnetic-btn"
            >
              <span>Resume</span>
              <ArrowUpRight size={13} />
            </a>

            {/* Theme Toggle */}
            <button
              onClick={() => setDarkMode(!darkMode)}
              className={`p-2.5 rounded-full transition-all duration-300 magnetic-btn ${
                darkMode 
                  ? 'bg-white/5 hover:bg-white/10 text-yellow-400' 
                  : 'bg-black/5 hover:bg-black/10 text-violet-600'
              }`}
              aria-label="Toggle theme"
            >
              {darkMode ? <Sun size={18} /> : <Moon size={18} />}
            </button>

            {/* Mobile Hamburger */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={`md:hidden p-2.5 rounded-full transition-all duration-300 ${
                darkMode ? 'bg-white/5 hover:bg-white/10' : 'bg-black/5 hover:bg-black/10'
              }`}
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div className={`fixed inset-0 z-40 md:hidden transition-all duration-500 ${
        isMobileMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
      }`}>
        {/* Backdrop */}
        <div 
          className="absolute inset-0 bg-black/60 backdrop-blur-sm"
          onClick={() => setIsMobileMenuOpen(false)} 
        />
        
        {/* Drawer */}
        <div className={`absolute right-0 top-0 h-full w-72 transition-transform duration-500 ease-out ${
          isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
        } ${darkMode ? 'bg-[#0a0520]/95 backdrop-blur-xl' : 'bg-white/95 backdrop-blur-xl'}`}>
          <div className="pt-24 px-6 flex flex-col gap-2">
            {navLinks.map((link, i) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => scrollToSection(e, link.href)}
                className={`px-4 py-3 rounded-xl text-base font-medium transition-all duration-300 ${
                  activeSection === link.href.substring(1)
                    ? 'text-violet-400 bg-violet-500/10'
                    : darkMode 
                      ? 'text-slate-300 hover:text-white hover:bg-white/5'
                      : 'text-slate-700 hover:text-slate-900 hover:bg-black/5'
                }`}
                style={{ transitionDelay: `${i * 50}ms` }}
              >
                {link.name}
              </a>
            ))}

            <div className="pt-4 border-t border-white/10 mt-2">
              <a
                href={personalInfo.resumeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-2 px-5 py-3 rounded-xl font-bold text-sm bg-gradient-to-r from-violet-600 to-cyan-600 text-white shadow-lg shadow-violet-500/20"
              >
                <span>Download Resume</span>
                <ArrowUpRight size={16} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
