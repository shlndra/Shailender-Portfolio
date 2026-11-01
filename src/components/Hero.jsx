import React, { useState, useEffect } from 'react';
import { useTheme } from '../App';
import { personalInfo } from '../data/portfolioData';
import { Mail, Download, ArrowDown, Sparkles, Terminal as TerminalIcon, Code2, Cpu } from 'lucide-react';
import { Github, Linkedin } from './Icons';
import HeroCanvas3D from './HeroCanvas3D';

export default function Hero() {
  const { darkMode } = useTheme();
  const [showContent, setShowContent] = useState(false);
  const [activeRoleIndex, setActiveRoleIndex] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => setShowContent(true), 150);
    return () => clearTimeout(timer);
  }, []);

  // Cycle target roles every 2.5s
  useEffect(() => {
    const roleInterval = setInterval(() => {
      setActiveRoleIndex((prev) => (prev + 1) % personalInfo.targetRoles.length);
    }, 2500);
    return () => clearInterval(roleInterval);
  }, []);

  const socialLinks = [
    { icon: Github, href: personalInfo.socials.github, label: 'GitHub' },
    { icon: Linkedin, href: personalInfo.socials.linkedin, label: 'LinkedIn' },
    { icon: Mail, href: personalInfo.socials.email, label: 'Email' },
  ];

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center px-6 pt-32 pb-20 md:pt-36 md:pb-24 overflow-hidden">
      {/* Background ambient gradient orbs */}
      <div
        className={`absolute top-1/4 left-1/2 -translate-x-1/2 w-[700px] h-[550px] rounded-full blur-[140px] pointer-events-none ${
          darkMode ? 'bg-[#6366F1]/10' : 'bg-[#6366F1]/10'
        }`}
      />
      <div
        className={`absolute top-1/3 -right-20 w-[450px] h-[450px] rounded-full blur-[130px] pointer-events-none ${
          darkMode ? 'bg-[#38BDF8]/10' : 'bg-[#38BDF8]/10'
        }`}
      />

      <div
        className={`relative z-10 max-w-6xl mx-auto grid lg:grid-cols-12 gap-8 lg:gap-12 items-center transition-all duration-1000 ${
          showContent ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}
      >
        {/* Left Column: Heading, Subheading, Intro & CTAs */}
        <div className="lg:col-span-7 text-center lg:text-left">
          {/* Available for opportunities badge */}
          {personalInfo.isHireable && (
            <div
              className={`inline-flex items-center gap-2.5 px-4 py-2 rounded-full text-xs sm:text-sm font-semibold mb-6 border ${
                darkMode
                  ? 'bg-emerald-500/10 text-emerald-400 border-emerald-500/25'
                  : 'bg-emerald-500/10 text-emerald-700 border-emerald-500/25'
              }`}
            >
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
              </span>
              <span>Available for opportunities</span>
            </div>
          )}

          {/* Main Heading */}
          <h1 className="text-3xl sm:text-5xl md:text-6xl font-black tracking-tight leading-[1.12] mb-5 text-[#F8FAFC]">
            Building <span className="gradient-text">Intelligent Systems.</span>
            <br />
            Creating Real-World Impact.
          </h1>

          {/* Subheading */}
          <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-[#38BDF8] mb-5">
            Software Engineer | AI/ML Developer | Full Stack Builder
          </h2>

          {/* Target Role Pills */}
          <div className="flex flex-wrap items-center justify-center lg:justify-start gap-2 mb-6">
            <span className="text-xs font-semibold uppercase tracking-wider text-[#94A3B8] mr-1 flex items-center gap-1">
              <Cpu size={14} className="text-[#6366F1]" />
              Target Roles:
            </span>
            {personalInfo.targetRoles.map((role, idx) => (
              <span
                key={role}
                className={`text-xs px-2.5 py-1 rounded-md font-medium transition-all duration-300 ${
                  activeRoleIndex === idx
                    ? 'bg-[#6366F1] text-white shadow-md shadow-[#6366F1]/30 scale-105'
                    : 'bg-white/5 text-[#94A3B8] border border-white/5'
                }`}
              >
                {role}
              </span>
            ))}
          </div>

          {/* Introduction */}
          <p className="max-w-2xl text-base sm:text-lg leading-relaxed text-[#94A3B8] mb-8 mx-auto lg:mx-0">
            {personalInfo.intro}
          </p>

          {/* CTAs */}
          <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3.5 mb-8">
            <a
              href="#projects"
              onClick={(e) => {
                e.preventDefault();
                document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="group relative px-6 sm:px-7 py-3.5 rounded-full bg-gradient-to-r from-[#6366F1] to-[#38BDF8] text-white font-semibold text-sm sm:text-base magnetic-btn shadow-lg shadow-[#6366F1]/25 overflow-hidden flex items-center gap-2"
            >
              <Sparkles size={17} />
              <span>View Projects</span>
            </a>

            <a
              href={personalInfo.resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 sm:px-7 py-3.5 rounded-full font-semibold text-sm sm:text-base magnetic-btn border border-white/10 text-[#F8FAFC] hover:border-[#6366F1]/60 hover:bg-[#6366F1]/10 transition-all flex items-center gap-2"
            >
              <Download size={17} />
              <span>Resume</span>
            </a>

            <a
              href="#terminal"
              onClick={(e) => {
                e.preventDefault();
                document.querySelector('#terminal')?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="px-5 py-3.5 rounded-full font-semibold text-sm magnetic-btn border border-white/10 text-[#94A3B8] hover:text-white hover:border-[#38BDF8]/50 hover:bg-[#38BDF8]/10 transition-all flex items-center gap-2"
              title="Launch Developer Terminal"
            >
              <TerminalIcon size={16} className="text-[#38BDF8]" />
              <span>Interactive CLI</span>
            </a>
          </div>

          {/* Social Links & Location */}
          <div className="flex items-center justify-center lg:justify-start gap-4">
            <span className="text-xs font-medium text-[#94A3B8] mr-1">Connect:</span>
            {socialLinks.map(({ icon: Icon, href, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="p-2.5 rounded-full bg-white/5 hover:bg-[#6366F1]/20 text-[#94A3B8] hover:text-[#F8FAFC] border border-white/5 transition-all magnetic-btn"
              >
                <Icon size={18} />
              </a>
            ))}
            <span className="text-xs text-[#94A3B8] border-l border-white/10 pl-3">
              {personalInfo.location}
            </span>
          </div>
        </div>

        {/* Right Column: 3D Canvas Visual with Portrait Badge */}
        <div className="lg:col-span-5 flex flex-col items-center justify-center relative">
          {/* Portrait avatar card overlay */}
          <div className="relative w-full max-w-sm flex flex-col items-center">
            {/* 3D Canvas Container */}
            <div className="w-full h-[320px] sm:h-[380px] relative flex items-center justify-center">
              <HeroCanvas3D darkMode={darkMode} />

              {/* Floating Center Avatar with ambient glow */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-auto">
                <div className="relative w-28 h-28 sm:w-36 sm:h-36 group">
                  <div className="absolute -inset-1 bg-gradient-to-r from-[#6366F1] to-[#38BDF8] rounded-full blur-md opacity-75 group-hover:opacity-100 transition duration-500 animate-pulse" />
                  <div className="relative w-full h-full rounded-full overflow-hidden p-1 bg-gradient-to-tr from-[#6366F1] via-[#38BDF8] to-[#818CF8] shadow-2xl">
                    <img
                      src={personalInfo.avatarHero}
                      alt={personalInfo.fullName}
                      className="w-full h-full object-cover object-top rounded-full transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Stats Pill Bar */}
            <div className="w-full grid grid-cols-2 gap-3 mt-2">
              <div className="p-3 rounded-2xl bg-[#111827]/80 border border-white/10 backdrop-blur-md text-center">
                <p className="text-xl sm:text-2xl font-black text-[#F8FAFC]">₹2,00,000+</p>
                <p className="text-[11px] font-medium text-[#38BDF8]">Peak Monthly Revenue</p>
                <p className="text-[10px] text-[#94A3B8]">Velrix Core Venture</p>
              </div>
              <div className="p-3 rounded-2xl bg-[#111827]/80 border border-white/10 backdrop-blur-md text-center">
                <p className="text-xl sm:text-2xl font-black text-[#F8FAFC]">Grade A+</p>
                <p className="text-[11px] font-medium text-emerald-400">ISRO / IIRS Merit</p>
                <p className="text-[10px] text-[#94A3B8]">Space Tech & Risk</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex justify-center pointer-events-auto">
        <a
          href="#about"
          onClick={(e) => {
            e.preventDefault();
            document.querySelector('#about')?.scrollIntoView({ behavior: 'smooth' });
          }}
          className="animate-bounce text-[#94A3B8] hover:text-white transition-colors p-2"
          aria-label="Scroll to about"
        >
          <ArrowDown size={20} />
        </a>
      </div>
    </section>
  );
}
