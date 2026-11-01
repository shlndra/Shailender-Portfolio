import React, { useState } from 'react';
import { useTheme, Section } from '../App';
import { experienceData } from '../data/portfolioData';
import { Calendar, MapPin, ChevronDown, ChevronUp, ExternalLink } from 'lucide-react';

export default function Experience() {
  const { darkMode } = useTheme();
  const [expandedIndex, setExpandedIndex] = useState(0);

  return (
    <Section id="experience" className="py-24 md:py-32 px-6">
      <div className="max-w-5xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="text-sm font-semibold tracking-widest uppercase mb-3 text-violet-500">
            Professional Experience
          </p>
          <h2 className={`text-3xl md:text-5xl font-black mb-4 ${darkMode ? 'text-white' : 'text-slate-900'}`}>
            Where I've <span className="gradient-text">Worked</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-violet-500 to-cyan-500 mx-auto rounded-full" />
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Timeline line */}
          <div className={`absolute left-6 md:left-8 top-0 bottom-0 w-0.5 ${
            darkMode ? 'bg-gradient-to-b from-violet-500 via-cyan-500 to-transparent' : 'bg-gradient-to-b from-violet-400 via-cyan-400 to-transparent'
          }`} />

          <div className="space-y-8">
            {experienceData.map((exp, i) => {
              const isExpanded = expandedIndex === i;
              return (
                <div key={i} className="relative pl-16 md:pl-20">
                  {/* Timeline dot */}
                  <div className={`absolute left-4 md:left-6 top-8 w-4 h-4 rounded-full border-2 z-10 ${
                    darkMode 
                      ? 'bg-[#030014] border-violet-500' 
                      : 'bg-white border-violet-500'
                  }`}>
                    <div className="absolute inset-0.5 rounded-full bg-violet-500 animate-pulse-ring" />
                  </div>

                  {/* Card */}
                  <div className="rounded-2xl overflow-hidden card-hover bg-[#111827] border border-white/10">
                    {/* Header gradient */}
                    <div className="h-1 bg-gradient-to-r from-[#6366F1] to-[#38BDF8]" />
                    
                    <div className="p-6 md:p-8">
                      <div className="flex items-start gap-4 mb-4">
                        {/* Company Logo */}
                        <div className="w-14 h-14 rounded-xl overflow-hidden flex-shrink-0 bg-white/5 border border-white/10">
                          <img src={exp.logo} alt={exp.company} className="w-full h-full object-cover" />
                        </div>
                        
                        <div className="flex-1">
                          <div className="flex items-center gap-2 flex-wrap">
                            <h3 className="text-lg md:text-xl font-bold text-[#F8FAFC]">
                              {exp.role}
                            </h3>
                            <span className="text-xs px-2.5 py-0.5 rounded-full font-semibold bg-[#6366F1]/15 text-[#818CF8] border border-[#6366F1]/25">
                              {exp.type}
                            </span>
                          </div>
                          <div className="flex items-center gap-2 mt-1">
                            {exp.website ? (
                              <a
                                href={exp.website}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-base font-semibold inline-flex items-center gap-1.5 transition-colors text-[#38BDF8] hover:text-[#818CF8]"
                              >
                                <span>{exp.company}</span>
                                <ExternalLink size={14} />
                              </a>
                            ) : (
                              <p className="text-base font-semibold text-[#38BDF8]">
                                {exp.company}
                              </p>
                            )}
                          </div>
                          <div className="flex flex-wrap items-center gap-4 mt-2 text-xs text-[#94A3B8]">
                            <span className="flex items-center gap-1.5">
                              <Calendar size={13} className="text-[#6366F1]" />
                              {exp.period}
                            </span>
                            <span className="flex items-center gap-1.5">
                              <MapPin size={13} className="text-[#6366F1]" />
                              {exp.location}
                            </span>
                          </div>
                        </div>
                      </div>

                      <p className="text-sm leading-relaxed mb-4 text-[#94A3B8]">
                        {exp.description}
                      </p>

                      {/* Expand/Collapse */}
                      <button
                        onClick={() => setExpandedIndex(isExpanded ? -1 : i)}
                        className="flex items-center gap-1.5 text-xs font-semibold mb-4 text-[#38BDF8] hover:text-white transition-colors"
                      >
                        {isExpanded ? 'Hide Key Achievements' : 'View Key Deliverables & Outcomes'}
                        {isExpanded ? <ChevronUp size={14} /> : <ChevronDown size={14} />}
                      </button>

                      {/* Highlights */}
                      <div className={`overflow-hidden transition-all duration-500 ${
                        isExpanded ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                      }`}>
                        <ul className="space-y-2.5 mb-6">
                          {exp.highlights.map((h, j) => (
                            <li key={j} className="flex items-start gap-2.5">
                              <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-[#38BDF8] flex-shrink-0" />
                              <span className="text-xs sm:text-sm leading-relaxed text-[#F8FAFC]/90">
                                {h}
                              </span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Technologies */}
                      <div className="flex flex-wrap gap-1.5">
                        {exp.technologies.map((tech, j) => (
                          <span
                            key={j}
                            className="text-xs px-2.5 py-1 rounded-lg font-medium bg-white/5 text-[#94A3B8] border border-white/5"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </Section>
  );
}
