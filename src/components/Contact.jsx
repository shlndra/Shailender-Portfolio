import React, { useState } from 'react';
import { useTheme, Section } from '../App';
import { personalInfo } from '../data/portfolioData';
import { Mail, Phone, MapPin, Send, Sparkles, Copy, Check } from 'lucide-react';
import { Github, Linkedin } from './Icons';
import confetti from 'canvas-confetti';

export default function Contact() {
  const { darkMode } = useTheme();
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personalInfo.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleEmailClick = () => {
    confetti({
      particleCount: 80,
      spread: 60,
      origin: { y: 0.7 },
      colors: ['#7c3aed', '#06b6d4', '#a855f7', '#22d3ee'],
    });
  };

  const contactCards = [
    {
      icon: Mail,
      label: 'Direct Email',
      value: personalInfo.email,
      action: 'Email me',
      href: `mailto:${personalInfo.email}`,
      highlight: true
    },
    {
      icon: Phone,
      label: 'Phone / WhatsApp',
      value: personalInfo.phone,
      action: 'Call or Text',
      href: `tel:${personalInfo.phone}`,
      highlight: false
    },
    {
      icon: MapPin,
      label: 'Location',
      value: personalInfo.location,
      action: 'Open to relocation',
      href: null,
      highlight: false
    },
  ];

  const socialLinks = [
    { icon: Github, href: personalInfo.socials.github, label: 'GitHub', username: '@shlndra' },
    { icon: Linkedin, href: personalInfo.socials.linkedin, label: 'LinkedIn', username: 'in/shailender' },
  ];

  return (
    <Section id="contact" className="py-24 md:py-32 px-6">
      <div className="max-w-4xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          {/* Personal Avatar */}
          <div className="relative inline-block mx-auto mb-6 group">
            <div className="absolute -inset-1 bg-gradient-to-r from-violet-600 to-cyan-500 rounded-full blur opacity-75 group-hover:opacity-100 transition duration-500 animate-pulse" />
            <img
              src={personalInfo.avatarHero}
              alt={personalInfo.fullName}
              className="relative w-20 h-20 sm:w-24 sm:h-24 rounded-full object-cover object-top ring-4 ring-violet-500/40 shadow-xl transition-transform duration-500 group-hover:scale-105"
            />
          </div>
          <p className="text-sm font-semibold tracking-widest uppercase mb-3 text-violet-500 flex items-center justify-center gap-1.5">
            <Sparkles size={16} />
            Let's Start a Conversation
          </p>
          <h2 className={`text-3xl md:text-5xl font-black mb-4 ${darkMode ? 'text-white' : 'text-slate-900'}`}>
            Get In <span className="gradient-text">Touch</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-violet-500 to-cyan-500 mx-auto rounded-full mb-6" />
          <p className={`max-w-xl mx-auto text-base ${darkMode ? 'text-slate-400' : 'text-slate-600'}`}>
            Whether you are a recruiter looking for an AI & Full-Stack engineer, an engineering leader hiring for technical roles, or a fellow builder wanting to collaborate, my inbox is always open.
          </p>
        </div>

        {/* Contact Cards */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {contactCards.map(({ icon: Icon, label, value, action, href }) => {
            const Component = href ? 'a' : 'div';
            return (
              <Component
                key={label}
                {...(href ? { href, target: href.startsWith('mailto') || href.startsWith('tel') ? undefined : '_blank', rel: 'noopener noreferrer' } : {})}
                className="group p-6 rounded-2xl text-center card-hover border border-white/10 bg-[#111827] flex flex-col justify-between"
              >
                <div>
                  <div className={`inline-flex p-4 rounded-2xl mb-4 bg-gradient-to-br from-violet-500/20 to-cyan-500/20 group-hover:scale-110 transition-transform duration-300`}>
                    <Icon size={24} className="text-violet-400" />
                  </div>
                  <p className={`text-xs font-semibold uppercase tracking-wider mb-1 ${darkMode ? 'text-slate-400' : 'text-slate-500'}`}>
                    {label}
                  </p>
                  <p className={`text-sm md:text-base font-bold mb-2 break-all ${darkMode ? 'text-white' : 'text-slate-900'}`}>
                    {value}
                  </p>
                </div>
                
                <span className={`text-xs font-medium inline-block mt-3 ${darkMode ? 'text-violet-400' : 'text-violet-600'}`}>
                  {action} →
                </span>
              </Component>
            );
          })}
        </div>

        {/* Action Buttons: Email & Copy */}
        <div className="flex flex-wrap items-center justify-center gap-4 mb-14">
          <a
            href={`mailto:${personalInfo.email}`}
            onClick={handleEmailClick}
            className="group relative inline-flex items-center gap-3 px-8 py-4 rounded-full bg-gradient-to-r from-violet-600 to-cyan-600 text-white font-bold text-base magnetic-btn shadow-lg shadow-violet-500/25 overflow-hidden"
          >
            <span className="relative z-10 flex items-center gap-2">
              <Send size={18} />
              Compose Email
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-violet-500 to-cyan-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </a>

          <button
            onClick={handleCopyEmail}
            className={`inline-flex items-center gap-2 px-6 py-4 rounded-full font-semibold text-base border transition-all magnetic-btn ${
              copied
                ? 'border-emerald-500 bg-emerald-500/10 text-emerald-400'
                : darkMode
                  ? 'border-white/10 bg-white/5 hover:bg-white/10 text-slate-200'
                  : 'border-black/10 bg-black/5 hover:bg-black/10 text-slate-800'
            }`}
          >
            {copied ? (
              <>
                <Check size={18} className="text-emerald-400" />
                <span>Email Copied!</span>
              </>
            ) : (
              <>
                <Copy size={18} />
                <span>Copy {personalInfo.email}</span>
              </>
            )}
          </button>
        </div>

        {/* Social Profiles */}
        <div className="flex flex-wrap items-center justify-center gap-4 mb-12">
          {socialLinks.map(({ icon: Icon, href, label, username }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
              className={`flex items-center gap-3 px-5 py-3 rounded-xl border transition-all duration-300 magnetic-btn ${
                darkMode 
                  ? 'glass border-white/5 hover:border-violet-500/40 text-slate-300 hover:text-white' 
                  : 'glass-light border-black/5 hover:border-violet-500/40 text-slate-700 hover:text-slate-900'
              }`}
            >
              <Icon size={20} className="text-violet-400" />
              <div className="text-left">
                <p className="text-xs font-bold leading-tight">{label}</p>
                <p className={`text-xs ${darkMode ? 'text-slate-500' : 'text-slate-400'}`}>{username}</p>
              </div>
            </a>
          ))}
        </div>

        {/* Availability Badge */}
        {personalInfo.isHireable && (
          <div className="text-center">
            <div className={`inline-flex items-center gap-3 px-6 py-3 rounded-full text-sm font-medium border ${
              darkMode 
                ? 'bg-emerald-500/10 text-emerald-400 border-emerald-500/25' 
                : 'bg-emerald-500/10 text-emerald-700 border-emerald-500/25'
            }`}>
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
              </span>
              <span>
                <strong>Actively Interviewing</strong> for Full-Time AI & Software Engineering Positions
              </span>
            </div>
          </div>
        )}
      </div>
    </Section>
  );
}
