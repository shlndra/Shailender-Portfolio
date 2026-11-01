import React, { useState, useEffect, useMemo } from 'react';
import { useTheme } from '../App';
import { personalInfo } from '../data/portfolioData';
import { Mail, Download, ArrowDown, Sparkles, MapPin } from 'lucide-react';
import { Github, Linkedin, Instagram } from './Icons';

const roles = [
  "AI & ML Engineer",
  "Full-Stack Developer",
  "NLP Enthusiast",
  "Open Source Builder",
  "Data Science Practitioner"
];

// Floating particles component
function FloatingParticles({ darkMode }) {
  const particles = useMemo(() => 
    Array.from({ length: 50 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 3 + 1,
      duration: Math.random() * 20 + 15,
      delay: Math.random() * 10,
      opacity: Math.random() * 0.5 + 0.1,
    })),
  []);

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {particles.map((p) => (
        <div
          key={p.id}
          className={`absolute rounded-full ${darkMode ? 'bg-violet-400' : 'bg-violet-500'}`}
          style={{
            left: `${p.x}%`,
            top: `${p.y}%`,
            width: `${p.size}px`,
            height: `${p.size}px`,
            opacity: p.opacity,
            animation: `float ${p.duration}s ease-in-out ${p.delay}s infinite`,
          }}
        />
      ))}
    </div>
  );
}

export default function Hero() {
  const { darkMode } = useTheme();
  const [displayText, setDisplayText] = useState('');
  const [roleIndex, setRoleIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [showContent, setShowContent] = useState(false);

  // Typewriter effect
  useEffect(() => {
    const currentRole = roles[roleIndex];
    const speed = isDeleting ? 40 : 80;

    const timer = setTimeout(() => {
      if (!isDeleting) {
        setDisplayText(currentRole.substring(0, displayText.length + 1));
        if (displayText === currentRole) {
          setTimeout(() => setIsDeleting(true), 2000);
        }
      } else {
        setDisplayText(currentRole.substring(0, displayText.length - 1));
        if (displayText === '') {
          setIsDeleting(false);
          setRoleIndex((prev) => (prev + 1) % roles.length);
        }
      }
    }, speed);

    return () => clearTimeout(timer);
  }, [displayText, isDeleting, roleIndex]);

  // Entrance animation
  useEffect(() => {
    setTimeout(() => setShowContent(true), 300);
  }, []);

  const socialLinks = [
    { icon: Github, href: personalInfo.socials.github, label: 'GitHub' },
    { icon: Linkedin, href: personalInfo.socials.linkedin, label: 'LinkedIn' },
    { icon: Instagram, href: personalInfo.socials.instagram, label: 'Instagram' },
    { icon: Mail, href: personalInfo.socials.email, label: 'Email' },
  ];

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center px-6 pt-32 pb-20 md:pt-40 md:pb-24 overflow-hidden">
      <FloatingParticles darkMode={darkMode} />

      {/* Hero gradient orb */}
      <div className={`absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[600px] rounded-full blur-[150px] pointer-events-none ${
        darkMode ? 'bg-violet-600/15' : 'bg-violet-400/15'
      }`} />

      <div className={`relative z-10 max-w-5xl mx-auto text-center transition-all duration-1000 ${
        showContent ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}>
        {/* Available badge */}
        {personalInfo.isHireable && (
          <div className={`inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium mb-8 ${
            darkMode 
              ? 'bg-emerald-500/10 text-emerald-400 border border-emerald-500/20' 
              : 'bg-emerald-500/10 text-emerald-600 border border-emerald-500/20'
          }`}>
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
            </span>
            Available for opportunities
          </div>
        )}

        {/* Greeting */}
        <p className={`text-lg md:text-xl font-medium mb-4 ${
          darkMode ? 'text-slate-400' : 'text-slate-600'
        }`}>
          Hello, I'm
        </p>

        {/* Name */}
        <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black tracking-tight mb-6">
          <span className="gradient-text">{personalInfo.fullName}</span>
        </h1>

        {/* Typewriter role */}
        <div className="h-12 md:h-14 flex items-center justify-center mb-8">
          <span className={`text-xl md:text-3xl font-semibold ${
            darkMode ? 'text-slate-300' : 'text-slate-700'
          }`}>
            {'< '}
          </span>
          <span className={`text-xl md:text-3xl font-semibold mx-2 ${
            darkMode ? 'text-violet-400' : 'text-violet-600'
          }`}>
            {displayText}
          </span>
          <span className="typewriter-cursor text-xl md:text-3xl">&nbsp;</span>
          <span className={`text-xl md:text-3xl font-semibold ${
            darkMode ? 'text-slate-300' : 'text-slate-700'
          }`}>
            {' />'}
          </span>
        </div>

        {/* Bio */}
        <p className={`max-w-2xl mx-auto text-base md:text-lg leading-relaxed mb-10 ${
          darkMode ? 'text-slate-400' : 'text-slate-600'
        }`}>
          {personalInfo.shortBio}
        </p>

        {/* Location */}
        <div className={`flex items-center justify-center gap-2 mb-10 text-sm ${
          darkMode ? 'text-slate-500' : 'text-slate-500'
        }`}>
          <MapPin size={14} />
          <span>{personalInfo.location}</span>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-4 mb-12">
          <a
            href="#projects"
            onClick={(e) => { e.preventDefault(); document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' }); }}
            className="group relative px-8 py-4 rounded-full bg-gradient-to-r from-violet-600 to-cyan-600 text-white font-semibold text-base magnetic-btn overflow-hidden"
          >
            <span className="relative z-10 flex items-center gap-2">
              <Sparkles size={18} />
              View My Work
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-violet-500 to-cyan-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </a>

          <a
            href={personalInfo.resumeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className={`group px-8 py-4 rounded-full font-semibold text-base magnetic-btn border transition-all duration-300 flex items-center gap-2 ${
              darkMode 
                ? 'border-white/10 text-slate-300 hover:border-violet-500/50 hover:text-white hover:bg-violet-500/5' 
                : 'border-black/10 text-slate-700 hover:border-violet-500/50 hover:text-violet-700 hover:bg-violet-500/5'
            }`}
          >
            <Download size={18} />
            Resume
          </a>
        </div>

        {/* Social Links */}
        <div className="flex items-center justify-center gap-4 mb-16">
          {socialLinks.map(({ icon: Icon, href, label }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
              className={`p-3 rounded-full transition-all duration-300 magnetic-btn ${
                darkMode 
                  ? 'bg-white/5 hover:bg-violet-500/20 text-slate-400 hover:text-violet-400' 
                  : 'bg-black/5 hover:bg-violet-500/10 text-slate-600 hover:text-violet-600'
              }`}
            >
              <Icon size={20} />
            </a>
          ))}
        </div>

        {/* Stats */}
        <div className={`grid grid-cols-2 md:grid-cols-4 gap-6 max-w-3xl mx-auto p-6 rounded-2xl ${
          darkMode ? 'glass' : 'glass-light'
        }`}>
          {personalInfo.stats.map((stat, i) => (
            <div key={i} className="text-center">
              <div className={`text-2xl md:text-3xl font-black ${
                darkMode ? 'text-white' : 'text-slate-900'
              }`}>
                {stat.value}
              </div>
              <div className={`text-sm font-medium mt-1 ${
                darkMode ? 'text-violet-400' : 'text-violet-600'
              }`}>
                {stat.label}
              </div>
              <div className={`text-xs mt-0.5 ${
                darkMode ? 'text-slate-500' : 'text-slate-500'
              }`}>
                {stat.subtext}
              </div>
            </div>
          ))}
        </div>

        {/* Scroll indicator */}
        <div className="mt-16 flex justify-center">
          <a href="#about" onClick={(e) => { e.preventDefault(); document.querySelector('#about')?.scrollIntoView({ behavior: 'smooth' }); }}
             className={`animate-bounce ${darkMode ? 'text-slate-500' : 'text-slate-400'}`}>
            <ArrowDown size={24} />
          </a>
        </div>
      </div>
    </section>
  );
}
