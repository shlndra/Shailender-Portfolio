import React, { useState } from 'react';
import { useTheme, Section } from '../App';
import { educationData, personalInfo } from '../data/portfolioData';
import { GraduationCap, Calendar, MapPin, Award, BookOpen, ChevronDown, ChevronUp, ExternalLink } from 'lucide-react';

export default function Education() {
  const { darkMode } = useTheme();
  const [showCoursework, setShowCoursework] = useState(false);

  return (
    <Section id="education" className="py-24 md:py-32 px-6">
      <div className="max-w-5xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="text-sm font-semibold tracking-widest uppercase mb-3 text-violet-500">
            Education
          </p>
          <h2 className={`text-3xl md:text-5xl font-black mb-4 ${darkMode ? 'text-white' : 'text-slate-900'}`}>
            My Academic <span className="gradient-text">Journey</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-violet-500 to-cyan-500 mx-auto rounded-full" />
        </div>

        {educationData.map((edu, i) => (
          <div key={i} className="relative rounded-2xl overflow-hidden bg-[#111827] border border-white/10">
            {/* Top gradient */}
            <div className="h-1.5 bg-gradient-to-r from-[#6366F1] via-[#38BDF8] to-[#818CF8]" />
            
            <div className="p-8 md:p-10">
              {/* Header */}
              <div className="flex flex-col md:flex-row md:items-start gap-6 mb-8">
                {/* Logo */}
                <div className={`w-20 h-20 rounded-2xl overflow-hidden flex-shrink-0 ring-2 ${
                  darkMode ? 'ring-white/10' : 'ring-black/10'
                }`}>
                  <img src={edu.logo} alt={edu.institution} className="w-full h-full object-cover" />
                </div>

                <div className="flex-1">
                  <div className="flex flex-wrap items-center gap-3 mb-2">
                    <h3 className={`text-xl md:text-2xl font-bold ${darkMode ? 'text-white' : 'text-slate-900'}`}>
                      {edu.institution}
                    </h3>
                    <span className={`text-xs px-3 py-1 rounded-full font-semibold ${
                      darkMode 
                        ? 'bg-emerald-500/15 text-emerald-400 border border-emerald-500/20' 
                        : 'bg-emerald-500/10 text-emerald-600 border border-emerald-500/20'
                    }`}>
                      {edu.currentStatus}
                    </span>
                  </div>

                  <p className={`text-base font-semibold mb-1 ${
                    darkMode ? 'text-violet-400' : 'text-violet-600'
                  }`}>
                    {edu.degree}
                  </p>
                  <p className={`text-sm font-medium mb-3 ${
                    darkMode ? 'text-cyan-400' : 'text-cyan-600'
                  }`}>
                    Specialization: {edu.specialization}
                  </p>

                  <div className={`flex flex-wrap items-center gap-4 text-sm ${
                    darkMode ? 'text-slate-400' : 'text-slate-600'
                  }`}>
                    <span className="flex items-center gap-1.5">
                      <Calendar size={14} />
                      {edu.period}
                    </span>
                    <span className="flex items-center gap-1.5">
                      <MapPin size={14} />
                      {edu.location}
                    </span>
                  </div>
                </div>
              </div>

              {/* Description */}
              <p className={`text-sm leading-relaxed mb-8 ${
                darkMode ? 'text-slate-300' : 'text-slate-700'
              }`}>
                {edu.description}
              </p>

              {/* Achievements */}
              <div className="mb-8">
                <h4 className={`flex items-center gap-2 text-base font-bold mb-4 ${
                  darkMode ? 'text-white' : 'text-slate-900'
                }`}>
                  <Award size={18} className="text-violet-500" />
                  Key Achievements
                </h4>
                <div className="space-y-3">
                  {edu.achievements.map((achievement, j) => (
                    <div key={j} className={`flex items-start gap-3 p-4 rounded-xl ${
                      darkMode ? 'bg-white/3 hover:bg-white/5' : 'bg-black/3 hover:bg-black/5'
                    } transition-colors duration-300`}>
                      <div className="mt-0.5 w-5 h-5 rounded-full bg-gradient-to-br from-violet-500 to-cyan-500 flex items-center justify-center flex-shrink-0">
                        <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <span className={`text-sm leading-relaxed ${
                        darkMode ? 'text-slate-300' : 'text-slate-700'
                      }`}>
                        {achievement}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Coursework Toggle */}
              <div>
                <button
                  onClick={() => setShowCoursework(!showCoursework)}
                  className={`flex items-center gap-2 text-sm font-semibold mb-4 transition-colors duration-300 ${
                    darkMode ? 'text-violet-400 hover:text-violet-300' : 'text-violet-600 hover:text-violet-700'
                  }`}
                >
                  <BookOpen size={16} />
                  {showCoursework ? 'Hide Coursework' : 'View Relevant Coursework'}
                  {showCoursework ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
                </button>

                <div className={`overflow-hidden transition-all duration-500 ${
                  showCoursework ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                }`}>
                  <div className="flex flex-wrap gap-2">
                    {edu.coursework.map((course, j) => (
                      <span
                        key={j}
                        className={`text-sm px-4 py-2 rounded-xl font-medium ${
                          darkMode 
                            ? 'bg-violet-500/10 text-violet-300 border border-violet-500/15' 
                            : 'bg-violet-500/10 text-violet-700 border border-violet-500/15'
                        }`}
                      >
                        {course}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Verified Certificates & Credentials Drive */}
              {personalInfo.certificatesUrl && (
                <div className={`mt-10 p-6 rounded-2xl border flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 ${
                  darkMode 
                    ? 'bg-gradient-to-r from-violet-950/40 via-slate-900/40 to-cyan-950/40 border-violet-500/20' 
                    : 'bg-gradient-to-r from-violet-50/80 via-white to-cyan-50/80 border-violet-500/20'
                }`}>
                  <div className="flex items-center gap-3.5">
                    <div className="p-3 rounded-xl bg-gradient-to-br from-violet-600 to-cyan-600 text-white shadow-md shadow-violet-500/20 flex-shrink-0">
                      <Award size={22} />
                    </div>
                    <div>
                      <h4 className={`text-base font-bold ${darkMode ? 'text-white' : 'text-slate-900'}`}>
                        Verified Certificates & Credentials
                      </h4>
                      <p className={`text-xs mt-0.5 ${darkMode ? 'text-slate-400' : 'text-slate-600'}`}>
                        Access verified certifications, course completions, and hackathon recognitions hosted on Google Drive.
                      </p>
                    </div>
                  </div>

                  <a
                    href={personalInfo.certificatesUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl font-bold text-xs md:text-sm text-white bg-gradient-to-r from-violet-600 to-cyan-600 hover:from-violet-500 hover:to-cyan-500 shadow-md shadow-violet-500/20 transition-all magnetic-btn flex-shrink-0"
                  >
                    <span>View All Certificates</span>
                    <ExternalLink size={14} />
                  </a>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}
