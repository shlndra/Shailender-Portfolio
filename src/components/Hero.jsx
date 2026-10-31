import React, { useState } from 'react';
import { 
  Mail, 
  ArrowRight, 
  Download, 
  Sparkles, 
  BrainCircuit, 
  Terminal, 
  Code2, 
  CheckCircle2, 
  Cpu, 
  Bot,
  ExternalLink
} from 'lucide-react';
import { GithubIcon, LinkedinIcon, InstagramIcon } from './Icons';
import confetti from 'canvas-confetti';
import { personalInfo } from '../data/portfolioData';

export default function Hero({ darkMode }) {
  const [activeTab, setActiveTab] = useState('model');

  const triggerConfetti = () => {
    confetti({
      particleCount: 80,
      spread: 70,
      origin: { y: 0.6 }
    });
  };

  return (
    <section id="hero" className="relative min-h-screen pt-32 pb-20 flex items-center justify-center overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-gradient-to-tr from-cyan-500/20 via-blue-500/15 to-purple-500/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute top-1/3 -right-20 w-[400px] h-[400px] bg-indigo-500/15 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Bio, Headlines & CTAs */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            
            {/* Status Pill */}
            <div 
              onClick={triggerConfetti}
              className={`inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-mono font-medium border mb-6 cursor-pointer transition-all duration-300 hover:scale-105 select-none ${
                darkMode
                  ? 'bg-slate-900/80 border-cyan-500/30 text-cyan-300 hover:border-cyan-400'
                  : 'bg-cyan-50 border-cyan-200 text-cyan-800 hover:border-cyan-300'
              }`}
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              <span>Open for Internships & AI Opportunities</span>
              <Sparkles size={13} className="text-cyan-400" />
            </div>

            {/* Greeting */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-[1.15] mb-4">
              <span className={darkMode ? 'text-white' : 'text-slate-900'}>
                Hi all, I'm{' '}
              </span>
              <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-indigo-500 bg-clip-text text-transparent">
                Shailender
              </span>
              <span className="inline-block animate-wave origin-[70%_70%] ml-2 cursor-pointer" onClick={triggerConfetti}>
                👋
              </span>
            </h1>

            {/* Sub-headline */}
            <div className={`text-lg sm:text-xl font-semibold mb-5 font-mono flex items-center gap-2 ${
              darkMode ? 'text-cyan-300' : 'text-blue-700'
            }`}>
              <BrainCircuit size={20} className="text-cyan-400 animate-pulse" />
              <span>BUILDING THE FUTURE WITH INTELLIGENT SYSTEMS</span>
            </div>

            {/* Description */}
            <p className={`text-base sm:text-lg leading-relaxed mb-8 max-w-2xl ${
              darkMode ? 'text-slate-300' : 'text-slate-600'
            }`}>
              {personalInfo.bio}
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-4 mb-10 w-full sm:w-auto">
              <a
                href="#projects"
                className="flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-xl font-semibold text-sm bg-gradient-to-r from-cyan-500 via-blue-600 to-indigo-600 text-white shadow-lg shadow-cyan-500/25 hover:shadow-cyan-500/40 hover:scale-[1.02] active:scale-[0.98] transition-all duration-200"
              >
                <span>Explore Projects</span>
                <ArrowRight size={16} />
              </a>

              <a
                href={personalInfo.resumeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className={`flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-xl font-semibold text-sm border transition-all duration-200 hover:scale-[1.02] active:scale-[0.98] ${
                  darkMode
                    ? 'border-slate-700 bg-slate-900/60 text-slate-200 hover:bg-slate-800 hover:border-slate-600'
                    : 'border-slate-300 bg-white text-slate-800 hover:bg-slate-50'
                }`}
              >
                <Download size={16} className="text-cyan-400" />
                <span>Resume / CV</span>
              </a>

              <a
                href="#contact"
                className={`flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl font-semibold text-sm transition-all duration-200 ${
                  darkMode
                    ? 'text-slate-400 hover:text-white hover:bg-slate-900/50'
                    : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
                }`}
              >
                <span>Get In Touch</span>
              </a>
            </div>

            {/* Social Links Bar */}
            <div className="flex items-center gap-3">
              <span className={`text-xs font-mono tracking-wider mr-2 uppercase ${
                darkMode ? 'text-slate-400' : 'text-slate-600'
              }`}>
                Connect:
              </span>
              
              <a
                href={personalInfo.socials.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub Profile"
                className={`p-2.5 rounded-xl border transition-all duration-200 hover:-translate-y-1 ${
                  darkMode
                    ? 'bg-slate-900/80 border-slate-800 text-slate-300 hover:text-white hover:border-slate-600 hover:bg-slate-800'
                    : 'bg-white border-slate-200 text-slate-700 hover:text-black hover:border-slate-400'
                }`}
              >
                <GithubIcon size={18} />
              </a>

              <a
                href={personalInfo.socials.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn Profile"
                className={`p-2.5 rounded-xl border transition-all duration-200 hover:-translate-y-1 ${
                  darkMode
                    ? 'bg-slate-900/80 border-slate-800 text-slate-300 hover:text-blue-400 hover:border-blue-500/40 hover:bg-slate-800'
                    : 'bg-white border-slate-200 text-slate-700 hover:text-blue-600 hover:border-blue-300'
                }`}
              >
                <LinkedinIcon size={18} />
              </a>

              <a
                href={personalInfo.socials.instagram}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram Profile"
                className={`p-2.5 rounded-xl border transition-all duration-200 hover:-translate-y-1 ${
                  darkMode
                    ? 'bg-slate-900/80 border-slate-800 text-slate-300 hover:text-pink-400 hover:border-pink-500/40 hover:bg-slate-800'
                    : 'bg-white border-slate-200 text-slate-700 hover:text-pink-600 hover:border-pink-300'
                }`}
              >
                <InstagramIcon size={18} />
              </a>

              <a
                href={`mailto:${personalInfo.email}`}
                aria-label="Send Email"
                className={`p-2.5 rounded-xl border transition-all duration-200 hover:-translate-y-1 ${
                  darkMode
                    ? 'bg-slate-900/80 border-slate-800 text-slate-300 hover:text-cyan-400 hover:border-cyan-500/40 hover:bg-slate-800'
                    : 'bg-white border-slate-200 text-slate-700 hover:text-cyan-600 hover:border-cyan-300'
                }`}
              >
                <Mail size={18} />
              </a>
            </div>

          </div>

          {/* Right Column: High-Tech Code / AI Architecture Terminal Showcase */}
          <div className="lg:col-span-5 w-full">
            <div className={`relative rounded-2xl border shadow-2xl overflow-hidden transition-all duration-300 ${
              darkMode 
                ? 'bg-slate-900/90 border-slate-800 shadow-cyan-950/20' 
                : 'bg-white border-slate-200 shadow-slate-200'
            }`}>
              
              {/* Terminal Window Header */}
              <div className={`px-4 py-3 border-b flex items-center justify-between ${
                darkMode ? 'bg-slate-950/80 border-slate-800' : 'bg-slate-100 border-slate-200'
              }`}>
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-500/80" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                  <div className="w-3 h-3 rounded-full bg-green-500/80" />
                  <span className={`text-xs font-mono ml-2 font-medium ${
                    darkMode ? 'text-slate-400' : 'text-slate-500'
                  }`}>
                    shailender@workspace ~ v3.8
                  </span>
                </div>

                {/* Tab Switcher */}
                <div className="flex items-center gap-1">
                  <button
                    onClick={() => setActiveTab('model')}
                    className={`px-2.5 py-1 text-xs font-mono rounded-md transition-colors ${
                      activeTab === 'model'
                        ? darkMode ? 'bg-cyan-950/80 text-cyan-400 border border-cyan-800/40' : 'bg-blue-100 text-blue-700'
                        : darkMode ? 'text-slate-400 hover:text-slate-200' : 'text-slate-600 hover:text-slate-900'
                    }`}
                  >
                    ai_engine.py
                  </button>
                  <button
                    onClick={() => setActiveTab('stats')}
                    className={`px-2.5 py-1 text-xs font-mono rounded-md transition-colors ${
                      activeTab === 'stats'
                        ? darkMode ? 'bg-cyan-950/80 text-cyan-400 border border-cyan-800/40' : 'bg-blue-100 text-blue-700'
                        : darkMode ? 'text-slate-400 hover:text-slate-200' : 'text-slate-600 hover:text-slate-900'
                    }`}
                  >
                    metrics.json
                  </button>
                </div>
              </div>

              {/* Terminal Content Body */}
              <div className="p-5 font-mono text-xs leading-relaxed overflow-x-auto min-h-[340px]">
                {activeTab === 'model' ? (
                  <div className="space-y-2">
                    <div className="text-slate-500 italic"># Shailender's Intelligent Core Engine</div>
                    <div className="flex gap-2">
                      <span className="text-purple-400">class</span>
                      <span className="text-cyan-400 font-bold">AIArchitect</span>
                      <span className="text-slate-400">(Developer):</span>
                    </div>
                    <div className="pl-4 space-y-1.5">
                      <div>
                        <span className="text-purple-400">def</span>{' '}
                        <span className="text-blue-400">__init__</span>
                        <span className="text-slate-400">(self):</span>
                      </div>
                      <div className="pl-4 text-slate-300">
                        self.name = <span className="text-emerald-400">"Shailender"</span><br />
                        self.major = <span className="text-emerald-400">"B.Tech CSE (AI & ML)"</span><br />
                        self.university = <span className="text-emerald-400">"Sushant University"</span><br />
                        self.year = <span className="text-amber-400">3</span><br />
                        self.status = <span className="text-emerald-400">"Open for Roles"</span>
                      </div>
                      
                      <div className="pt-2">
                        <span className="text-purple-400">def</span>{' '}
                        <span className="text-blue-400">core_competencies</span>
                        <span className="text-slate-400">(self):</span>
                      </div>
                      <div className="pl-4 text-cyan-300">
                        return [
                        <br />&nbsp;&nbsp;<span className="text-emerald-400">"Transformer NLP & LLMs"</span>,
                        <br />&nbsp;&nbsp;<span className="text-emerald-400">"Machine Learning & Scikit-Learn"</span>,
                        <br />&nbsp;&nbsp;<span className="text-emerald-400">"Full-Stack React + Flask + Node"</span>,
                        <br />&nbsp;&nbsp;<span className="text-emerald-400">"Deep Audio & Vision Models"</span>
                        <br />]
                      </div>

                      <div className="pt-2">
                        <span className="text-purple-400">def</span>{' '}
                        <span className="text-blue-400">deploy_solution</span>
                        <span className="text-slate-400">(self, problem):</span>
                      </div>
                      <div className="pl-4 text-slate-300">
                        <span className="text-purple-400">return</span>{' '}
                        <span className="text-yellow-400">self.architect</span>(problem, quality=<span className="text-emerald-400">"Production"</span>)
                      </div>
                    </div>
                  </div>
                ) : (
                  <div className="space-y-3">
                    <div className="text-slate-500 italic">// Realtime developer profile telemetry</div>
                    <div className="grid grid-cols-2 gap-3 pt-2">
                      {personalInfo.stats.map((stat, i) => (
                        <div 
                          key={i} 
                          className={`p-3 rounded-xl border ${
                            darkMode 
                              ? 'bg-slate-950/60 border-slate-800' 
                              : 'bg-slate-50 border-slate-200'
                          }`}
                        >
                          <div className="text-[11px] text-slate-400">{stat.label}</div>
                          <div className="text-lg font-bold text-cyan-400 my-0.5">{stat.value}</div>
                          <div className="text-[10px] text-slate-500">{stat.subtext}</div>
                        </div>
                      ))}
                    </div>
                    
                    <div className={`p-3 rounded-xl border mt-3 flex items-center justify-between ${
                      darkMode ? 'bg-slate-950/60 border-slate-800' : 'bg-slate-50 border-slate-200'
                    }`}>
                      <div className="flex items-center gap-2">
                        <CheckCircle2 size={16} className="text-emerald-400" />
                        <span className={darkMode ? 'text-slate-300' : 'text-slate-700'}>Active GitHub Repos</span>
                      </div>
                      <span className="font-bold text-cyan-400">15+ Public</span>
                    </div>

                    <div className={`p-3 rounded-xl border flex items-center justify-between ${
                      darkMode ? 'bg-slate-950/60 border-slate-800' : 'bg-slate-50 border-slate-200'
                    }`}>
                      <div className="flex items-center gap-2">
                        <Cpu size={16} className="text-blue-400" />
                        <span className={darkMode ? 'text-slate-300' : 'text-slate-700'}>Primary Stack</span>
                      </div>
                      <span className="font-bold text-blue-400">Python • React • ML</span>
                    </div>
                  </div>
                )}
              </div>

              {/* Terminal Footer Bar */}
              <div className={`px-4 py-2.5 border-t flex items-center justify-between text-[11px] font-mono ${
                darkMode ? 'bg-slate-950/90 border-slate-800 text-slate-400' : 'bg-slate-100 border-slate-200 text-slate-500'
              }`}>
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
                  <span>git branch: main</span>
                </div>
                <div>UTF-8 • Python 3.12</div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
