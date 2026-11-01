import React, { useState } from 'react';
import { useTheme, Section } from '../App';
import { personalInfo } from '../data/portfolioData';
import { Brain, Code2, Database, MapPin, Mail, GraduationCap, Briefcase, Zap, CheckCircle2, FileText, ArrowUpRight, Award, UserCheck, Sparkles } from 'lucide-react';

const whatIDo = [
  {
    icon: Brain,
    title: 'AI & Machine Learning',
    description: 'Developing intelligent models, NLP pipelines, transformer-based conversational systems, and computer vision classification using Python, PyTorch, Scikit-Learn, and Hugging Face.',
    gradient: 'from-violet-500 to-purple-600',
    tags: ['PyTorch', 'Transformers', 'NLP', 'Computer Vision']
  },
  {
    icon: Code2,
    title: 'Full-Stack Development',
    description: 'Architecting fast, responsive, and accessible web applications using React 19, Tailwind CSS, Node.js, and Python Flask with secure REST APIs.',
    gradient: 'from-cyan-500 to-blue-600',
    tags: ['React 19', 'Tailwind CSS', 'Flask', 'REST APIs']
  },
  {
    icon: Database,
    title: 'Data Science & EDA',
    description: 'Transforming raw unstructured data into actionable insights through exploratory analysis, feature engineering, statistical modeling, and dynamic visual dashboards.',
    gradient: 'from-emerald-500 to-teal-600',
    tags: ['Pandas', 'NumPy', 'Feature Engineering', 'Seaborn']
  },
];

const recruiterHighlights = [
  {
    title: 'Founder & Technical Lead (Velrix Core)',
    desc: 'Founded and scaled a GST-registered, MSME-certified brand with physical retail, generating ₹2,00,000+ peak monthly revenue (2.34× ROAS) and leading a 15-member team.'
  },
  {
    title: 'AI Agents & Production ML',
    desc: 'Engineered Memory Agent (AI invoice automation with confidence logic) and predictive pipelines (100K+ records processed, +25% efficiency, 85%+ accuracy).'
  },
  {
    title: 'Dual Data Science Internships',
    desc: 'Completed internships at Prodigy Infotech & Future Intern; reduced manual reporting effort by 40% and improved house price prediction accuracy by 15%.'
  },
  {
    title: 'Full-Stack & Systems Architecture',
    desc: 'Proficient in Node.js, Express, Flask, WebSockets, Supabase, Razorpay, BlueDart API, and strong CS foundations (DSA, DBMS, OS, Networks).'
  }
];

export default function About() {
  const { darkMode } = useTheme();
  const [activePhoto, setActivePhoto] = useState('executive'); // 'executive' | 'tech'

  return (
    <Section id="about" className="py-24 md:py-32 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="text-sm font-semibold tracking-widest uppercase mb-3 text-violet-500 flex items-center justify-center gap-1.5">
            <Zap size={16} />
            Background & Mindset
          </p>
          <h2 className={`text-3xl md:text-5xl font-black mb-4 ${
            darkMode ? 'text-white' : 'text-slate-900'
          }`}>
            Who I <span className="gradient-text">Am</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-violet-500 to-cyan-500 mx-auto rounded-full" />
        </div>

        {/* Bio & Portrait Card */}
        <div className={`relative rounded-3xl p-6 sm:p-8 md:p-12 mb-16 overflow-hidden border ${
          darkMode ? 'glass border-white/5' : 'glass-light border-black/5'
        }`}>
          {/* Gradient accent top border */}
          <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-violet-500 via-cyan-500 to-violet-500" />

          <div className="grid lg:grid-cols-12 gap-10 items-center">
            {/* Portrait Spotlight Card (5 cols on lg) */}
            <div className="lg:col-span-5 flex flex-col items-center">
              <div className={`relative w-full max-w-sm rounded-3xl p-3 border shadow-2xl overflow-hidden ${
                darkMode ? 'bg-white/2 border-white/10 shadow-violet-500/10' : 'bg-black/2 border-black/10 shadow-violet-500/5'
              }`}>
                {/* Photo Switcher Toggle */}
                <div className="flex items-center justify-center p-1 rounded-2xl bg-black/30 dark:bg-black/50 backdrop-blur-md mb-3 border border-white/10">
                  <button
                    onClick={() => setActivePhoto('executive')}
                    className={`flex-1 py-2 px-3 rounded-xl text-xs font-semibold transition-all duration-300 flex items-center justify-center gap-1.5 ${
                      activePhoto === 'executive'
                        ? 'bg-gradient-to-r from-violet-600 to-cyan-600 text-white shadow-lg shadow-violet-500/25'
                        : darkMode ? 'text-slate-400 hover:text-white' : 'text-slate-600 hover:text-black'
                    }`}
                  >
                    <span>👔 Founder & Exec</span>
                  </button>
                  <button
                    onClick={() => setActivePhoto('tech')}
                    className={`flex-1 py-2 px-3 rounded-xl text-xs font-semibold transition-all duration-300 flex items-center justify-center gap-1.5 ${
                      activePhoto === 'tech'
                        ? 'bg-gradient-to-r from-violet-600 to-cyan-600 text-white shadow-lg shadow-violet-500/25'
                        : darkMode ? 'text-slate-400 hover:text-white' : 'text-slate-600 hover:text-black'
                    }`}
                  >
                    <span>⚡ AI Engineer</span>
                  </button>
                </div>

                {/* Photo Frame */}
                <div className="relative aspect-[4/5] w-full rounded-2xl overflow-hidden group">
                  <img
                    src={activePhoto === 'executive' ? personalInfo.avatarFormal : personalInfo.avatarHero}
                    alt={personalInfo.fullName}
                    className="w-full h-full object-cover object-top transition-all duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent pointer-events-none" />
                  
                  {/* Overlay Info */}
                  <div className="absolute bottom-3 left-3 right-3 text-white">
                    <span className="inline-block px-2.5 py-0.5 rounded-full text-[11px] font-bold uppercase tracking-wider bg-cyan-500/20 text-cyan-300 border border-cyan-500/30 mb-1">
                      {activePhoto === 'executive' ? 'Velrix Core' : 'Sushant University'}
                    </span>
                    <p className="text-base font-black">
                      {activePhoto === 'executive' ? 'Founder & Technical Lead' : 'B.Tech CSE (AI & ML)'}
                    </p>
                    <p className="text-xs text-slate-300 mt-0.5">
                      {activePhoto === 'executive' ? 'MSME Certified • ₹2L+ Monthly Revenue' : 'Final Year (2023–2027) • Gurgaon'}
                    </p>
                  </div>
                </div>

                {/* Card Footer Status */}
                <div className="mt-3 px-2 flex items-center justify-between text-xs">
                  <span className="flex items-center gap-1 text-slate-400 font-medium">
                    <MapPin size={13} className="text-violet-400" />
                    {personalInfo.location}
                  </span>
                  <span className="flex items-center gap-1.5 text-emerald-400 font-semibold">
                    <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse inline-block" />
                    Available to Hire
                  </span>
                </div>
              </div>
            </div>

            {/* Bio Text & Actions (7 cols on lg) */}
            <div className="lg:col-span-7">
              <h3 className={`text-2xl sm:text-3xl font-black mb-4 ${darkMode ? 'text-white' : 'text-slate-900'}`}>
                Bridging Intelligent Models with High-Impact Applications
              </h3>
              <p className={`text-base md:text-lg leading-relaxed mb-5 ${
                darkMode ? 'text-slate-300' : 'text-slate-700'
              }`}>
                {personalInfo.bio}
              </p>
              <p className={`text-sm md:text-base leading-relaxed mb-6 ${
                darkMode ? 'text-slate-400' : 'text-slate-600'
              }`}>
                My approach to software and AI blends strong mathematical foundations with a relentless drive for building delightful, scalable user experiences. From training custom machine learning classifiers to orchestrating real-time telematics dashboards, I focus on measurable outcomes.
              </p>

              {/* Quick Info Grid */}
              <div className="grid grid-cols-2 gap-3 mb-8">
                {[
                  { icon: MapPin, label: 'Location', value: personalInfo.location },
                  { icon: Mail, label: 'Direct Email', value: personalInfo.email },
                  { icon: GraduationCap, label: 'Degree', value: 'B.Tech CSE (AI & ML)' },
                  { icon: Briefcase, label: 'Availability', value: 'Open for Full-Time Roles' },
                ].map(({ icon: Icon, label, value }) => (
                  <div key={label} className={`p-3 rounded-xl border transition-colors ${
                    darkMode ? 'bg-white/2 border-white/5 hover:bg-white/5' : 'bg-black/2 border-black/5 hover:bg-black/5'
                  }`}>
                    <div className="flex items-center gap-2 mb-1">
                      <Icon size={14} className="text-violet-400" />
                      <span className={`text-[11px] font-medium uppercase tracking-wider ${darkMode ? 'text-slate-500' : 'text-slate-500'}`}>
                        {label}
                      </span>
                    </div>
                    <p className={`text-xs sm:text-sm font-semibold truncate ${darkMode ? 'text-slate-200' : 'text-slate-800'}`}>
                      {value}
                    </p>
                  </div>
                ))}
              </div>

              {/* Quick Resume & Certificates CTA */}
              <div className="flex flex-wrap items-center gap-3">
                <a
                  href={personalInfo.resumeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl font-semibold text-sm bg-gradient-to-r from-violet-600 to-cyan-600 text-white shadow-lg shadow-violet-500/20 hover:opacity-95 transition-all magnetic-btn"
                >
                  <FileText size={16} />
                  <span>Resume (PDF)</span>
                  <ArrowUpRight size={14} />
                </a>

                {personalInfo.certificatesUrl && (
                  <a
                    href={personalInfo.certificatesUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`inline-flex items-center gap-2 px-5 py-2.5 rounded-xl font-semibold text-sm border transition-all magnetic-btn ${
                      darkMode 
                        ? 'border-violet-500/30 text-violet-300 hover:text-white hover:bg-violet-500/10' 
                        : 'border-violet-500/30 text-violet-700 hover:text-violet-900 hover:bg-violet-500/10'
                    }`}
                  >
                    <Award size={16} />
                    <span>Certificates</span>
                    <ArrowUpRight size={14} />
                  </a>
                )}

                <a
                  href="#contact"
                  onClick={(e) => { e.preventDefault(); document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' }); }}
                  className={`inline-flex items-center gap-2 px-5 py-2.5 rounded-xl font-semibold text-sm border transition-all magnetic-btn ${
                    darkMode 
                      ? 'border-white/10 text-slate-300 hover:text-white hover:bg-white/5' 
                      : 'border-black/10 text-slate-700 hover:text-slate-900 hover:bg-black/5'
                  }`}
                >
                  Let's Talk
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* What I Do Cards */}
        <div className="mb-16">
          <h3 className={`text-xl font-bold mb-8 text-center ${darkMode ? 'text-white' : 'text-slate-900'}`}>
            Areas of Specialization
          </h3>
          <div className="grid md:grid-cols-3 gap-6">
            {whatIDo.map((item, i) => (
              <div
                key={i}
                className={`group relative p-8 rounded-2xl card-hover overflow-hidden border flex flex-col justify-between ${
                  darkMode ? 'glass border-white/5 hover:border-violet-500/40' : 'glass-light border-black/5 hover:border-violet-500/40'
                }`}
              >
                <div>
                  <div className={`inline-flex p-3.5 rounded-2xl bg-gradient-to-br ${item.gradient} mb-6 shadow-lg shadow-violet-500/20`}>
                    <item.icon size={26} className="text-white" />
                  </div>
                  
                  <h4 className={`text-xl font-bold mb-3 ${
                    darkMode ? 'text-white' : 'text-slate-900'
                  }`}>
                    {item.title}
                  </h4>
                  
                  <p className={`text-sm leading-relaxed mb-6 ${
                    darkMode ? 'text-slate-400' : 'text-slate-600'
                  }`}>
                    {item.description}
                  </p>
                </div>

                <div className="flex flex-wrap gap-1.5 pt-4 border-t border-white/5">
                  {item.tags.map((tag, j) => (
                    <span key={j} className={`text-xs px-2.5 py-1 rounded-md font-medium ${
                      darkMode ? 'bg-white/5 text-slate-300' : 'bg-black/5 text-slate-700'
                    }`}>
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Why Recruiters Hire Me */}
        <div className={`rounded-3xl p-8 md:p-10 border ${
          darkMode ? 'glass border-white/5' : 'glass-light border-black/5'
        }`}>
          <div className="text-center max-w-2xl mx-auto mb-8">
            <span className="text-xs font-semibold px-3 py-1 rounded-full bg-violet-500/10 text-violet-400 border border-violet-500/20 uppercase tracking-widest">
              Recruiter Snapshot
            </span>
            <h3 className={`text-2xl font-black mt-3 ${darkMode ? 'text-white' : 'text-slate-900'}`}>
              Why I Bring Immediate Value to Your Team
            </h3>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {recruiterHighlights.map((point, i) => (
              <div key={i} className={`p-5 rounded-2xl flex items-start gap-4 ${
                darkMode ? 'bg-white/2 hover:bg-white/5' : 'bg-black/2 hover:bg-black/5'
              } transition-colors border border-white/5`}>
                <div className="p-2 rounded-xl bg-emerald-500/10 text-emerald-400 flex-shrink-0 mt-0.5">
                  <CheckCircle2 size={18} />
                </div>
                <div>
                  <h4 className={`text-base font-bold mb-1 ${darkMode ? 'text-white' : 'text-slate-900'}`}>
                    {point.title}
                  </h4>
                  <p className={`text-sm leading-relaxed ${darkMode ? 'text-slate-400' : 'text-slate-600'}`}>
                    {point.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
}
