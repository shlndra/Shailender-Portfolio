import React from 'react';
import { Section, useTheme } from '../App';
import { currentlyBuildingData } from '../data/portfolioData';
import { Activity, Radio, Cpu, ArrowUpRight, ShieldCheck, Sparkles } from 'lucide-react';

export default function CurrentlyBuilding() {
  const { darkMode } = useTheme();

  return (
    <Section id="building" className="py-24 md:py-32 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="text-sm font-semibold tracking-widest uppercase mb-3 text-[#38BDF8] flex items-center justify-center gap-1.5">
            <Radio size={16} className="text-emerald-500 animate-pulse" />
            Active Engineering Sprints
          </p>
          <h2 className={`text-3xl md:text-5xl font-black mb-4 ${darkMode ? 'text-[#F8FAFC]' : 'text-slate-900'}`}>
            Currently <span className="gradient-text">Building</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-[#6366F1] to-[#38BDF8] mx-auto rounded-full mb-4" />
          <p className={`max-w-xl mx-auto text-sm md:text-base ${darkMode ? 'text-[#94A3B8]' : 'text-slate-600'}`}>
            A transparent window into the scalable backend architectures, AI pipelines, and distributed systems I am currently engineering.
          </p>
        </div>

        {/* Sprint Cards Grid */}
        <div className="grid md:grid-cols-3 gap-6">
          {currentlyBuildingData.map((item) => (
            <div
              key={item.id}
              className={`p-6 sm:p-7 rounded-2xl border card-hover flex flex-col justify-between transition-colors ${
                darkMode ? 'bg-[#111827] border-white/10' : 'bg-white border-slate-200 shadow-lg'
              }`}
            >
              <div>
                {/* Status Indicator */}
                <div className="flex items-center justify-between mb-4">
                  <span className="text-[11px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full bg-emerald-500/10 text-emerald-500 border border-emerald-500/25 flex items-center gap-1.5">
                    <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-ping" />
                    {item.status}
                  </span>
                  <span className={`text-xs font-mono font-bold ${darkMode ? 'text-[#38BDF8]' : 'text-indigo-600'}`}>
                    {item.progress}% Complete
                  </span>
                </div>

                {/* Progress Bar */}
                <div className={`w-full h-1.5 rounded-full mb-4 overflow-hidden ${
                  darkMode ? 'bg-white/10' : 'bg-slate-100'
                }`}>
                  <div
                    style={{ width: `${item.progress}%` }}
                    className="h-full bg-gradient-to-r from-[#6366F1] to-[#38BDF8] rounded-full"
                  />
                </div>

                <h3 className={`text-lg font-bold mb-1 ${darkMode ? 'text-[#F8FAFC]' : 'text-slate-900'}`}>
                  {item.title}
                </h3>
                <p className={`text-xs font-medium mb-3 ${darkMode ? 'text-[#38BDF8]' : 'text-indigo-600'}`}>
                  {item.tagline}
                </p>
                <p className={`text-xs sm:text-sm leading-relaxed mb-6 ${darkMode ? 'text-[#94A3B8]' : 'text-slate-600'}`}>
                  {item.description}
                </p>
              </div>

              {/* Tech Stack */}
              <div className={`pt-4 border-t ${darkMode ? 'border-white/5' : 'border-slate-100'}`}>
                <div className="flex flex-wrap gap-1.5">
                  {item.techStack.map((tech) => (
                    <span
                      key={tech}
                      className={`text-[11px] px-2 py-0.5 rounded-md font-mono border ${
                        darkMode ? 'bg-[#080B12] text-[#94A3B8] border-white/5' : 'bg-slate-100 text-slate-700 border-slate-200'
                      }`}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}
