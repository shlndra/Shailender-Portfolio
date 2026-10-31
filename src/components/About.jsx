import React from 'react';
import { useTheme, Section } from '../App';
import { personalInfo } from '../data/portfolioData';
import { Brain, Code2, Database, MapPin, Mail, GraduationCap, Briefcase, Zap, CheckCircle2, FileText, ArrowUpRight, Award } from 'lucide-react';

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

        {/* Bio Card */}
        <div className={`relative rounded-3xl p-8 md:p-12 mb-16 overflow-hidden border ${
          darkMode ? 'glass border-white/5' : 'glass-light border-black/5'
        }`}>
          {/* Gradient accent top border */}
          <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-violet-500 via-cyan-500 to-violet-500" />

          <div className="grid md:grid-cols-5 gap-10 items-center">
            {/* Bio Text */}
            <div className="md:col-span-3">
              <h3 className={`text-2xl font-bold mb-4 ${darkMode ? 'text-white' : 'text-slate-900'}`}>
                Bridging Intelligent Models with High-Impact Applications
              </h3>
              <p className={`text-base md:text-lg leading-relaxed mb-6 ${
                darkMode ? 'text-slate-300' : 'text-slate-700'
              }`}>
                {personalInfo.bio}
              </p>
              <p className={`text-base leading-relaxed mb-6 ${
                darkMode ? 'text-slate-400' : 'text-slate-600'
              }`}>
                My approach to software and AI blends strong mathematical foundations with a relentless drive for building delightful, scalable user experiences. From training custom machine learning classifiers to orchestrating real-time telematics dashboards, I focus on measurable outcomes.
              </p>

              {/* Quick Resume & Certificates CTA */}
              <div className="flex flex-wrap items-center gap-4">
                <a
                  href={personalInfo.resumeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-semibold text-sm bg-gradient-to-r from-violet-600 to-cyan-600 text-white shadow-lg shadow-violet-500/20 hover:opacity-95 transition-all magnetic-btn"
                >
                  <FileText size={16} />
                  View Full Resume (PDF)
                  <ArrowUpRight size={14} />
                </a>

                {personalInfo.certificatesUrl && (
                  <a
                    href={personalInfo.certificatesUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`inline-flex items-center gap-2 px-6 py-3 rounded-xl font-semibold text-sm border transition-all magnetic-btn ${
                      darkMode 
                        ? 'border-violet-500/30 text-violet-300 hover:text-white hover:bg-violet-500/10' 
                        : 'border-violet-500/30 text-violet-700 hover:text-violet-900 hover:bg-violet-500/10'
                    }`}
                  >
                    <Award size={16} />
                    <span>Certificates Drive</span>
                    <ArrowUpRight size={14} />
                  </a>
                )}

                <a
                  href="#contact"
                  onClick={(e) => { e.preventDefault(); document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' }); }}
                  className={`inline-flex items-center gap-2 px-6 py-3 rounded-xl font-semibold text-sm border transition-all magnetic-btn ${
                    darkMode 
                      ? 'border-white/10 text-slate-300 hover:text-white hover:bg-white/5' 
                      : 'border-black/10 text-slate-700 hover:text-slate-900 hover:bg-black/5'
                  }`}
                >
                  Let's Talk
                </a>
              </div>
            </div>

            {/* Quick Info Grid */}
            <div className="md:col-span-2">
              <div className={`p-6 rounded-2xl border space-y-4 ${
                darkMode ? 'bg-white/2 border-white/5' : 'bg-black/2 border-black/5'
              }`}>
                {[
                  { icon: MapPin, label: 'Location', value: personalInfo.location },
                  { icon: Mail, label: 'Direct Email', value: personalInfo.email },
                  { icon: GraduationCap, label: 'Degree', value: 'B.Tech CSE (AI & ML)' },
                  { icon: Briefcase, label: 'Availability', value: 'Open for 2025/2026 roles' },
                ].map(({ icon: Icon, label, value }) => (
                  <div key={label} className={`flex items-start gap-3 p-3 rounded-xl transition-colors duration-300 ${
                    darkMode ? 'hover:bg-white/5' : 'hover:bg-black/5'
                  }`}>
                    <div className="p-2.5 rounded-lg bg-gradient-to-br from-violet-500/20 to-cyan-500/20 flex-shrink-0">
                      <Icon size={16} className="text-violet-400" />
                    </div>
                    <div>
                      <p className={`text-xs font-medium uppercase tracking-wider ${darkMode ? 'text-slate-500' : 'text-slate-500'}`}>
                        {label}
                      </p>
                      <p className={`text-sm font-semibold break-all ${darkMode ? 'text-slate-200' : 'text-slate-800'}`}>
                        {value}
                      </p>
                    </div>
                  </div>
                ))}
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
