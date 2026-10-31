import React from 'react';
import { 
  Briefcase, 
  Calendar, 
  MapPin, 
  Sparkles, 
  CheckCircle2, 
  TrendingUp,
  ExternalLink 
} from 'lucide-react';
import { experienceData } from '../data/portfolioData';

export default function Experience({ darkMode }) {
  return (
    <section id="experience" className="py-24 relative overflow-hidden">
      {/* Ambient background light */}
      <div className="absolute top-1/3 -right-40 w-96 h-96 bg-blue-500/10 rounded-full blur-[130px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono font-medium border border-cyan-500/30 bg-cyan-500/10 text-cyan-400 mb-3">
            <Sparkles size={12} />
            <span>PRACTICAL INDUSTRY TRACK RECORD</span>
          </div>
          <h2 className={`text-3xl sm:text-4xl font-extrabold tracking-tight ${
            darkMode ? 'text-white' : 'text-slate-900'
          }`}>
            Work <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">Experience</span>
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-cyan-400 to-blue-600 rounded-full mt-3" />
          <p className={`mt-4 text-base max-w-2xl ${darkMode ? 'text-slate-400' : 'text-slate-600'}`}>
            Professional data science and machine learning internships where I built predictive models, NLP analytics pipelines, and data dashboards.
          </p>
        </div>

        {/* Experience Timeline */}
        <div className="max-w-4xl mx-auto space-y-8">
          {experienceData.map((exp, index) => (
            <div 
              key={index}
              className={`p-6 sm:p-8 rounded-3xl border relative transition-all duration-300 hover:shadow-2xl ${
                darkMode 
                  ? 'bg-slate-900/60 border-slate-800 hover:border-cyan-500/40 hover:shadow-cyan-950/20' 
                  : 'bg-white border-slate-200 hover:border-blue-300 hover:shadow-slate-200/60'
              }`}
            >
              {/* Header: Company, Role, Dates */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
                <div className="flex items-center gap-4">
                  {/* Company Logo with fallback */}
                  <div className="w-16 h-16 rounded-2xl overflow-hidden border border-slate-700/60 bg-slate-950 shrink-0 flex items-center justify-center p-1 shadow-md">
                    <img 
                      src={exp.logo} 
                      alt={`${exp.company} Logo`}
                      className="w-full h-full object-contain rounded-xl"
                      onError={(e) => {
                        e.target.style.display = 'none';
                        e.target.parentElement.innerHTML = `<span class="font-bold text-cyan-400 font-mono text-xl">${exp.company.charAt(0)}</span>`;
                      }}
                    />
                  </div>

                  <div>
                    <div className="flex items-center gap-2">
                      <h3 className={`text-xl font-bold ${darkMode ? 'text-white' : 'text-slate-900'}`}>
                        {exp.role}
                      </h3>
                      <span className="text-xs px-2.5 py-0.5 rounded-full font-mono font-medium bg-cyan-500/10 text-cyan-400 border border-cyan-500/20">
                        {exp.type}
                      </span>
                    </div>

                    <div className={`text-sm font-semibold mt-0.5 ${
                      darkMode ? 'text-cyan-400' : 'text-blue-600'
                    }`}>
                      {exp.company}
                    </div>
                  </div>
                </div>

                {/* Date & Location */}
                <div className="flex flex-col sm:items-end gap-1 font-mono text-xs text-slate-400">
                  <div className="flex items-center gap-1.5 bg-slate-950/50 px-3 py-1 rounded-lg border border-slate-800">
                    <Calendar size={13} className="text-cyan-400" />
                    <span>{exp.period}</span>
                  </div>
                  <div className="flex items-center gap-1.5 px-2">
                    <MapPin size={12} className="text-slate-500" />
                    <span>{exp.location}</span>
                  </div>
                </div>
              </div>

              {/* Main summary paragraph */}
              <p className={`text-sm sm:text-base leading-relaxed mb-5 ${
                darkMode ? 'text-slate-300' : 'text-slate-600'
              }`}>
                {exp.description}
              </p>

              {/* Bullet points if present */}
              {exp.highlights && exp.highlights.length > 0 && (
                <div className="space-y-2.5 mb-6 pl-1">
                  {exp.highlights.map((bullet, bIdx) => (
                    <div key={bIdx} className="flex items-start gap-2.5 text-xs sm:text-sm">
                      <CheckCircle2 size={16} className="text-cyan-400 shrink-0 mt-0.5" />
                      <span className={darkMode ? 'text-slate-300' : 'text-slate-700'}>
                        {bullet}
                      </span>
                    </div>
                  ))}
                </div>
              )}

              {/* Technologies chip list */}
              <div className="pt-4 border-t border-slate-800/60 flex flex-wrap items-center gap-2">
                <span className={`text-[11px] font-mono mr-1 uppercase ${
                  darkMode ? 'text-slate-500' : 'text-slate-400'
                }`}>
                  Tech Stack:
                </span>
                {exp.technologies.map((tech, tIdx) => (
                  <span
                    key={tIdx}
                    className={`text-xs font-mono px-2.5 py-1 rounded-md border ${
                      darkMode
                        ? 'bg-slate-950/80 border-slate-800 text-slate-300'
                        : 'bg-slate-100 border-slate-200 text-slate-700'
                    }`}
                  >
                    {tech}
                  </span>
                ))}
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
