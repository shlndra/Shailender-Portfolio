import React, { useState } from 'react';
import { useTheme, Section, useScrollReveal } from '../App';
import { skillsData } from '../data/portfolioData';
import { Cpu, Globe, Code, Cloud } from 'lucide-react';

const categoryIcons = [Cpu, Globe, Code, Cloud];

export default function Skills() {
  const { darkMode } = useTheme();
  const [activeTab, setActiveTab] = useState(0);
  const [ref, isVisible] = useScrollReveal({ threshold: 0.1 });

  return (
    <Section id="skills" className="py-24 md:py-32 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="text-sm font-semibold tracking-widest uppercase mb-3 text-violet-500">
            Technical Skills
          </p>
          <h2 className={`text-3xl md:text-5xl font-black mb-4 ${darkMode ? 'text-white' : 'text-slate-900'}`}>
            What I <span className="gradient-text">Build With</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-violet-500 to-cyan-500 mx-auto rounded-full mb-6" />
          <div className="max-w-2xl mx-auto space-y-2">
            {skillsData.overview.map((line, i) => (
              <p key={i} className={`text-sm md:text-base ${darkMode ? 'text-slate-400' : 'text-slate-600'}`}>
                {line}
              </p>
            ))}
          </div>
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {skillsData.categories.map((cat, i) => {
            const Icon = categoryIcons[i];
            return (
              <button
                key={i}
                onClick={() => setActiveTab(i)}
                className={`flex items-center gap-2 px-5 py-3 rounded-xl text-sm font-semibold transition-all duration-300 magnetic-btn ${
                  activeTab === i
                    ? 'bg-gradient-to-r from-[#6366F1] to-[#38BDF8] text-white shadow-lg shadow-[#6366F1]/25'
                    : 'bg-[#111827] text-[#94A3B8] border border-white/5 hover:border-white/20 hover:text-white'
                }`}
              >
                <Icon size={16} />
                {cat.name}
              </button>
            );
          })}
        </div>

        {/* Active Category Skills */}
        <div ref={ref} className="rounded-2xl p-8 mb-16 bg-[#111827] border border-white/10">
          <p className={`text-sm mb-8 ${darkMode ? 'text-slate-400' : 'text-slate-600'}`}>
            {skillsData.categories[activeTab].description}
          </p>
          
          <div className="space-y-6">
            {skillsData.categories[activeTab].skills.map((skill, i) => (
              <div key={skill.name + activeTab} className="group">
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center gap-3">
                    <span className={`text-sm font-semibold ${darkMode ? 'text-slate-200' : 'text-slate-800'}`}>
                      {skill.name}
                    </span>
                    <span className={`text-xs px-2.5 py-0.5 rounded-full font-medium ${
                      darkMode ? 'bg-white/5 text-slate-400' : 'bg-black/5 text-slate-600'
                    }`}>
                      {skill.tag}
                    </span>
                  </div>
                  <span className={`text-sm font-bold ${darkMode ? 'text-slate-300' : 'text-slate-700'}`}>
                    {skill.level}%
                  </span>
                </div>
                
                <div className={`h-2.5 rounded-full overflow-hidden ${
                  darkMode ? 'bg-white/5' : 'bg-black/5'
                }`}>
                  <div
                    className="h-full rounded-full transition-all duration-1000 ease-out"
                    style={{
                      width: isVisible ? `${skill.level}%` : '0%',
                      background: `linear-gradient(90deg, ${skill.color}, ${skill.color}88)`,
                      transitionDelay: `${i * 150}ms`,
                    }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Stack Highlights */}
        <div>
          <h3 className={`text-xl font-bold mb-8 text-center ${darkMode ? 'text-white' : 'text-slate-900'}`}>
            Core Stack Proficiency
          </h3>
          <div className="grid md:grid-cols-2 gap-5">
            {skillsData.stackHighlights.map((stack, i) => (
              <div
                key={i}
                className={`group p-6 rounded-xl card-hover ${darkMode ? 'glass' : 'glass-light'}`}
              >
                <div className="flex items-center justify-between mb-3">
                  <span className={`text-sm font-bold ${darkMode ? 'text-white' : 'text-slate-900'}`}>
                    {stack.stack}
                  </span>
                  <span className="text-sm font-bold" style={{ color: stack.color }}>
                    {stack.percentage}
                  </span>
                </div>
                
                <div className={`h-2 rounded-full overflow-hidden mb-4 ${
                  darkMode ? 'bg-white/5' : 'bg-black/5'
                }`}>
                  <div
                    className="h-full rounded-full transition-all duration-1000 ease-out"
                    style={{
                      width: isVisible ? stack.percentage : '0%',
                      background: stack.color,
                      transitionDelay: `${i * 100}ms`,
                    }}
                  />
                </div>
                
                <div className="flex flex-wrap gap-2">
                  {stack.topics.map((topic, j) => (
                    <span
                      key={j}
                      className={`text-xs px-2.5 py-1 rounded-full ${
                        darkMode 
                          ? 'bg-white/5 text-slate-400' 
                          : 'bg-black/5 text-slate-600'
                      }`}
                    >
                      {topic}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
}
