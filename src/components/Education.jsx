import React from 'react';
import { 
  GraduationCap, 
  Calendar, 
  MapPin, 
  Sparkles, 
  BookOpen, 
  Award, 
  CheckCircle2 
} from 'lucide-react';
import { educationData } from '../data/portfolioData';

export default function Education({ darkMode }) {
  const edu = educationData[0];

  return (
    <section id="education" className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono font-medium border border-cyan-500/30 bg-cyan-500/10 text-cyan-400 mb-3">
            <Sparkles size={12} />
            <span>ACADEMIC FOUNDATION</span>
          </div>
          <h2 className={`text-3xl sm:text-4xl font-extrabold tracking-tight ${
            darkMode ? 'text-white' : 'text-slate-900'
          }`}>
            Education & <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">Background</span>
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-cyan-400 to-blue-600 rounded-full mt-3" />
        </div>

        {/* Education Highlight Card */}
        <div className="max-w-4xl mx-auto">
          <div className={`p-8 sm:p-10 rounded-3xl border relative transition-all duration-300 ${
            darkMode 
              ? 'bg-slate-900/60 border-slate-800 shadow-xl shadow-cyan-950/20' 
              : 'bg-white border-slate-200 shadow-xl shadow-slate-100'
          }`}>
            
            {/* Top row: Logo, University, Degree, Timeline */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6 mb-8">
              <div className="flex items-center gap-5">
                {/* Sushant University Logo */}
                <div className="w-20 h-20 rounded-2xl overflow-hidden border border-slate-700/60 bg-white shrink-0 flex items-center justify-center p-2 shadow-md">
                  <img 
                    src={edu.logo} 
                    alt="Sushant University Logo"
                    className="w-full h-full object-contain rounded-xl"
                    onError={(e) => {
                      e.target.style.display = 'none';
                      e.target.parentElement.innerHTML = `<span class="font-bold text-cyan-600 font-mono text-2xl">SU</span>`;
                    }}
                  />
                </div>

                <div>
                  <div className="flex items-center gap-2.5">
                    <h3 className={`text-2xl font-bold ${darkMode ? 'text-white' : 'text-slate-900'}`}>
                      {edu.institution}
                    </h3>
                    <span className="px-2.5 py-0.5 rounded-full text-xs font-mono font-semibold bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                      {edu.currentStatus}
                    </span>
                  </div>

                  <p className={`text-base font-semibold mt-1 ${
                    darkMode ? 'text-cyan-400' : 'text-blue-600'
                  }`}>
                    {edu.degree}
                  </p>

                  <p className="text-xs font-mono text-purple-400 mt-0.5">
                    Specialization: {edu.specialization}
                  </p>
                </div>
              </div>

              {/* Date & Location */}
              <div className="flex flex-col sm:items-end gap-1.5 font-mono text-xs text-slate-400 shrink-0">
                <div className="flex items-center gap-1.5 bg-slate-950/60 px-3 py-1.5 rounded-xl border border-slate-800">
                  <Calendar size={13} className="text-cyan-400" />
                  <span>{edu.period}</span>
                </div>
                <div className="flex items-center gap-1.5 px-1">
                  <MapPin size={13} className="text-slate-500" />
                  <span>{edu.location}</span>
                </div>
              </div>
            </div>

            {/* Main description paragraph */}
            <p className={`text-sm sm:text-base leading-relaxed mb-6 ${
              darkMode ? 'text-slate-300' : 'text-slate-600'
            }`}>
              {edu.description}
            </p>

            {/* Achievements & Project Focus */}
            <div className="space-y-3 mb-8">
              {edu.achievements.map((item, i) => (
                <div key={i} className="flex items-start gap-3 text-xs sm:text-sm">
                  <CheckCircle2 size={18} className="text-cyan-400 shrink-0 mt-0.5" />
                  <span className={darkMode ? 'text-slate-300' : 'text-slate-700'}>
                    {item}
                  </span>
                </div>
              ))}
            </div>

            {/* Key Coursework Modules */}
            <div className="pt-6 border-t border-slate-800/60">
              <span className={`text-xs font-mono tracking-wider uppercase block mb-3 ${
                darkMode ? 'text-slate-400' : 'text-slate-500'
              }`}>
                Key Coursework & Academic Focus:
              </span>
              <div className="flex flex-wrap gap-2">
                {edu.coursework.map((course, idx) => (
                  <span
                    key={idx}
                    className={`text-xs font-mono px-3 py-1 rounded-lg border ${
                      darkMode
                        ? 'bg-slate-950/80 border-slate-800 text-slate-300'
                        : 'bg-slate-100 border-slate-200 text-slate-700'
                    }`}
                  >
                    {course}
                  </span>
                ))}
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
