import React, { useState } from 'react';
import { 
  Sparkles, 
  Layers, 
  Code, 
  Database, 
  Cpu, 
  Cloud, 
  Check, 
  ExternalLink,
  ChevronRight
} from 'lucide-react';
import { skillsData } from '../data/portfolioData';

export default function Skills({ darkMode }) {
  const [selectedCategoryIndex, setSelectedCategoryIndex] = useState(0);

  return (
    <section id="skills" className="py-24 relative overflow-hidden">
      {/* Background ambient glow */}
      <div className="absolute top-1/2 -left-40 w-96 h-96 bg-cyan-500/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono font-medium border border-cyan-500/30 bg-cyan-500/10 text-cyan-400 mb-3">
            <Sparkles size={12} />
            <span>TECHNICAL PROFICIENCY</span>
          </div>
          <h2 className={`text-3xl sm:text-4xl font-extrabold tracking-tight ${
            darkMode ? 'text-white' : 'text-slate-900'
          }`}>
            Skills & <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">Tech Stack</span>
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-cyan-400 to-blue-600 rounded-full mt-3" />
          <p className={`mt-4 text-base max-w-2xl ${darkMode ? 'text-slate-400' : 'text-slate-600'}`}>
            A comprehensive overview of my technical capabilities spanning Artificial Intelligence, Machine Learning models, and modern full-stack engineering.
          </p>
        </div>

        {/* Top 6 Proficient Tech Stacks (from developerFolio) */}
        <div className="mb-20">
          <div className="flex items-center justify-between mb-8">
            <h3 className={`text-xl font-bold flex items-center gap-2.5 ${
              darkMode ? 'text-white' : 'text-slate-900'
            }`}>
              <Layers size={20} className="text-cyan-400" />
              <span>Core Technology Proficiency</span>
            </h3>
            <span className={`text-xs font-mono ${darkMode ? 'text-slate-400' : 'text-slate-500'}`}>
              Benchmark & Specialization
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {skillsData.stackHighlights.map((item, idx) => (
              <div
                key={idx}
                className={`p-6 rounded-2xl border transition-all duration-300 hover:-translate-y-1 ${
                  darkMode 
                    ? 'bg-slate-900/60 border-slate-800 hover:border-cyan-500/40 hover:shadow-lg hover:shadow-cyan-950/20' 
                    : 'bg-white border-slate-200 hover:border-blue-400 hover:shadow-lg hover:shadow-blue-50'
                }`}
              >
                {/* Header */}
                <div className="flex items-center justify-between mb-3">
                  <span className={`font-bold text-base ${darkMode ? 'text-white' : 'text-slate-900'}`}>
                    {item.stack}
                  </span>
                  <span 
                    className="font-mono font-bold text-sm px-2.5 py-0.5 rounded-full"
                    style={{ 
                      color: item.color, 
                      backgroundColor: `${item.color}15`,
                      border: `1px solid ${item.color}30`
                    }}
                  >
                    {item.percentage}
                  </span>
                </div>

                {/* Progress Bar */}
                <div className="w-full h-2 rounded-full bg-slate-800/80 overflow-hidden mb-4">
                  <div
                    className="h-full rounded-full transition-all duration-1000 ease-out"
                    style={{ 
                      width: item.percentage, 
                      backgroundColor: item.color,
                      boxShadow: `0 0 12px ${item.color}80` 
                    }}
                  />
                </div>

                {/* Sub-topics */}
                <div className="flex flex-wrap gap-1.5 pt-1">
                  {item.topics.map((topic, tIdx) => (
                    <span
                      key={tIdx}
                      className={`text-[11px] font-mono px-2 py-0.5 rounded-md border ${
                        darkMode 
                          ? 'bg-slate-950/70 border-slate-800 text-slate-300' 
                          : 'bg-slate-100 border-slate-200 text-slate-700'
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

        {/* Categorized Skills Deep Dive */}
        <div className={`p-8 rounded-3xl border ${
          darkMode ? 'bg-slate-900/40 border-slate-800' : 'bg-slate-50/80 border-slate-200'
        }`}>
          {/* Category Tabs */}
          <div className="flex flex-wrap gap-2 mb-8 border-b pb-4 border-slate-800/60">
            {skillsData.categories.map((cat, idx) => (
              <button
                key={idx}
                onClick={() => setSelectedCategoryIndex(idx)}
                className={`px-4 py-2 rounded-xl text-sm font-semibold transition-all duration-200 cursor-pointer ${
                  selectedCategoryIndex === idx
                    ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-md shadow-cyan-500/20'
                    : darkMode
                      ? 'bg-slate-900/80 text-slate-400 hover:text-white hover:bg-slate-800'
                      : 'bg-white text-slate-600 hover:text-slate-900 hover:bg-slate-100'
                }`}
              >
                {cat.name}
              </button>
            ))}
          </div>

          {/* Active Category Description */}
          <div className="mb-6 flex items-center justify-between">
            <p className={`text-sm ${darkMode ? 'text-slate-300' : 'text-slate-600'}`}>
              {skillsData.categories[selectedCategoryIndex].description}
            </p>
            <span className="text-xs font-mono text-cyan-400">
              {skillsData.categories[selectedCategoryIndex].skills.length} competencies
            </span>
          </div>

          {/* Skills Grid for active category */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {skillsData.categories[selectedCategoryIndex].skills.map((skill, sIdx) => (
              <div
                key={sIdx}
                className={`p-4 rounded-xl border flex items-center justify-between transition-colors ${
                  darkMode 
                    ? 'bg-slate-950/60 border-slate-800/80 hover:border-slate-700' 
                    : 'bg-white border-slate-200 hover:border-slate-300'
                }`}
              >
                <div className="flex items-center gap-3">
                  <div 
                    className="w-3 h-3 rounded-full shrink-0" 
                    style={{ backgroundColor: skill.color }} 
                  />
                  <div>
                    <span className={`text-sm font-semibold block ${darkMode ? 'text-slate-200' : 'text-slate-800'}`}>
                      {skill.name}
                    </span>
                    <span className={`text-[11px] font-mono ${darkMode ? 'text-slate-400' : 'text-slate-500'}`}>
                      {skill.tag}
                    </span>
                  </div>
                </div>

                <span className="font-mono text-xs font-bold text-cyan-400">
                  {skill.level}%
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Software skills badge cloud */}
        <div className="mt-14 text-center">
          <span className={`text-xs font-mono tracking-wider uppercase block mb-4 ${
            darkMode ? 'text-slate-400' : 'text-slate-600'
          }`}>
            Core Ecosystem & Tools
          </span>
          <div className="flex flex-wrap items-center justify-center gap-3 max-w-4xl mx-auto">
            {[
              { name: "Python", bg: "from-blue-600 to-yellow-600" },
              { name: "Java", bg: "from-orange-500 to-red-600" },
              { name: "React.js", bg: "from-cyan-400 to-blue-500" },
              { name: "Node.js", bg: "from-green-500 to-emerald-600" },
              { name: "Flask", bg: "from-slate-600 to-zinc-800" },
              { name: "Hugging Face", bg: "from-amber-400 to-orange-500" },
              { name: "Scikit-Learn", bg: "from-orange-400 to-blue-500" },
              { name: "Firebase", bg: "from-amber-500 to-orange-600" },
              { name: "AWS Cloud", bg: "from-amber-500 to-yellow-600" },
              { name: "SQL Databases", bg: "from-blue-500 to-indigo-600" },
              { name: "Tailwind CSS", bg: "from-sky-400 to-cyan-500" },
              { name: "Git / GitHub", bg: "from-orange-500 to-red-500" }
            ].map((tool, i) => (
              <span
                key={i}
                className={`px-4 py-2 rounded-xl text-xs font-mono font-medium border shadow-sm transition-all duration-200 hover:scale-105 ${
                  darkMode
                    ? 'bg-slate-900/80 border-slate-800 text-slate-200 hover:border-cyan-500/40'
                    : 'bg-white border-slate-200 text-slate-800 hover:border-blue-400'
                }`}
              >
                {tool.name}
              </span>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
