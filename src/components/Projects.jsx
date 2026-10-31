import React, { useState } from 'react';
import { 
  Sparkles, 
  ExternalLink, 
  Layers, 
  Code2, 
  Scale, 
  Gamepad2, 
  MessageSquareCode, 
  Navigation, 
  Music, 
  Recycle,
  Star
} from 'lucide-react';
import { GithubIcon } from './Icons';
import { projectsData } from '../data/portfolioData';

export default function Projects({ darkMode }) {
  const [activeFilter, setActiveFilter] = useState('All');

  const categories = ['All', 'AI & LawTech', 'NLP & AI', 'AI & Games', 'Full Stack & Cloud', 'Machine Learning'];

  const filteredProjects = activeFilter === 'All' 
    ? projectsData 
    : projectsData.filter(p => p.category.toLowerCase().includes(activeFilter.toLowerCase()) || activeFilter.toLowerCase().includes(p.category.toLowerCase()));

  const getIcon = (iconName) => {
    switch (iconName) {
      case 'Scale': return <Scale size={24} className="text-cyan-400" />;
      case 'Gamepad2': return <Gamepad2 size={24} className="text-blue-400" />;
      case 'MessageSquareCode': return <MessageSquareCode size={24} className="text-purple-400" />;
      case 'Navigation': return <Navigation size={24} className="text-emerald-400" />;
      case 'Music': return <Music size={24} className="text-amber-400" />;
      case 'Recycle': return <Recycle size={24} className="text-green-400" />;
      default: return <Code2 size={24} className="text-cyan-400" />;
    }
  };

  return (
    <section id="projects" className="py-24 relative overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 w-[600px] h-[350px] bg-gradient-to-tr from-cyan-500/10 via-blue-500/10 to-indigo-500/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono font-medium border border-cyan-500/30 bg-cyan-500/10 text-cyan-400 mb-3">
            <Sparkles size={12} />
            <span>ENGINEERED TO SOLVE REAL PROBLEMS</span>
          </div>
          <h2 className={`text-3xl sm:text-4xl font-extrabold tracking-tight ${
            darkMode ? 'text-white' : 'text-slate-900'
          }`}>
            Featured <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">Projects</span>
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-cyan-400 to-blue-600 rounded-full mt-3" />
          <p className={`mt-4 text-base max-w-2xl ${darkMode ? 'text-slate-400' : 'text-slate-600'}`}>
            Explore selected production systems, AI simulations, game engines, and full-stack platforms I've engineered.
          </p>
        </div>

        {/* Filter Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveFilter(cat)}
              className={`px-4 py-2 rounded-xl text-xs font-mono font-semibold transition-all duration-200 cursor-pointer ${
                activeFilter === cat
                  ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-md shadow-cyan-500/20'
                  : darkMode
                    ? 'bg-slate-900/80 text-slate-400 hover:text-white hover:bg-slate-800 border border-slate-800'
                    : 'bg-slate-100 text-slate-600 hover:text-slate-900 hover:bg-slate-200 border border-slate-200'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className={`group rounded-3xl border flex flex-col justify-between overflow-hidden transition-all duration-300 hover:-translate-y-1.5 ${
                darkMode 
                  ? 'bg-slate-900/60 border-slate-800 hover:border-cyan-500/50 hover:shadow-2xl hover:shadow-cyan-950/30' 
                  : 'bg-white border-slate-200 hover:border-blue-300 hover:shadow-2xl hover:shadow-slate-200/80'
              }`}
            >
              <div>
                {/* Project Image Preview / Banner Header */}
                <div className="relative h-48 w-full overflow-hidden bg-slate-950 flex items-center justify-center border-b border-slate-800">
                  {project.image ? (
                    <img 
                      src={project.image} 
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      onError={(e) => {
                        e.target.style.display = 'none';
                        e.target.nextElementSibling.style.display = 'flex';
                      }}
                    />
                  ) : null}
                  
                  {/* Fallback Graphic */}
                  <div 
                    className="absolute inset-0 flex flex-col items-center justify-center bg-gradient-to-tr from-slate-950 via-slate-900 to-slate-950 p-6 text-center"
                    style={{ display: project.image ? 'none' : 'flex' }}
                  >
                    <div className="p-4 rounded-2xl bg-cyan-500/10 border border-cyan-500/20 mb-2">
                      {getIcon(project.fallbackIcon)}
                    </div>
                    <span className="font-mono text-xs text-slate-400 font-semibold">{project.title}</span>
                  </div>

                  {/* Category Pill Tag */}
                  <div className="absolute top-3 left-3 px-3 py-1 rounded-full text-[11px] font-mono font-semibold bg-slate-950/80 backdrop-blur-md border border-slate-700/80 text-cyan-400 shadow-md">
                    {project.category}
                  </div>

                  {/* Featured Star */}
                  {project.featured && (
                    <div className="absolute top-3 right-3 p-1.5 rounded-full bg-cyan-500/20 backdrop-blur-md border border-cyan-500/40 text-cyan-300" title="Featured Project">
                      <Star size={14} className="fill-cyan-400 text-cyan-400" />
                    </div>
                  )}
                </div>

                {/* Project Body */}
                <div className="p-6">
                  <div className="mb-2">
                    <h3 className={`text-xl font-bold group-hover:text-cyan-400 transition-colors ${
                      darkMode ? 'text-white' : 'text-slate-900'
                    }`}>
                      {project.title}
                    </h3>
                    <p className="text-xs text-cyan-500 font-mono mt-0.5">
                      {project.tagline}
                    </p>
                  </div>

                  <p className={`text-xs sm:text-sm leading-relaxed mb-6 line-clamp-4 ${
                    darkMode ? 'text-slate-300' : 'text-slate-600'
                  }`}>
                    {project.description}
                  </p>

                  {/* Tech stack pills */}
                  <div className="flex flex-wrap gap-1.5 mb-6">
                    {project.technologies.map((t, idx) => (
                      <span
                        key={idx}
                        className={`text-[11px] font-mono px-2.5 py-1 rounded-lg border ${
                          darkMode 
                            ? 'bg-slate-950/80 border-slate-800 text-slate-300' 
                            : 'bg-slate-100 border-slate-200 text-slate-700'
                        }`}
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Action Buttons in Card Footer */}
              <div className={`p-6 pt-0 border-t border-slate-800/40 flex items-center justify-between mt-auto`}>
                <div className="flex items-center gap-3 w-full pt-4">
                  {project.demoUrl ? (
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl text-xs font-semibold bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-md shadow-cyan-500/20 hover:shadow-cyan-500/35 hover:scale-[1.02] active:scale-[0.98] transition-all"
                    >
                      <span>Live Demo</span>
                      <ExternalLink size={13} />
                    </a>
                  ) : null}

                  {project.githubUrl ? (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl text-xs font-semibold border transition-all hover:scale-[1.02] active:scale-[0.98] ${
                        project.demoUrl ? 'w-auto' : 'w-full'
                      } ${
                        darkMode 
                          ? 'border-slate-800 bg-slate-950/80 text-slate-300 hover:text-white hover:border-slate-700' 
                          : 'border-slate-200 bg-slate-50 text-slate-700 hover:text-slate-900'
                      }`}
                    >
                      <GithubIcon size={14} />
                      <span>{project.demoUrl ? 'Code' : 'View Repository'}</span>
                    </a>
                  ) : null}
                </div>
              </div>

            </div>
          ))}
        </div>

        {/* GitHub profile link promo banner */}
        <div className={`mt-16 p-8 rounded-3xl border flex flex-col sm:flex-row items-center justify-between gap-6 ${
          darkMode ? 'bg-slate-900/40 border-slate-800' : 'bg-slate-50 border-slate-200'
        }`}>
          <div className="flex items-center gap-4 text-center sm:text-left">
            <div className="p-3.5 rounded-2xl bg-cyan-500/10 text-cyan-400 border border-cyan-500/20 shrink-0 hidden sm:flex">
              <GithubIcon size={28} />
            </div>
            <div>
              <h4 className={`text-lg font-bold ${darkMode ? 'text-white' : 'text-slate-900'}`}>
                See all public repositories on GitHub
              </h4>
              <p className={`text-xs sm:text-sm mt-0.5 ${darkMode ? 'text-slate-400' : 'text-slate-600'}`}>
                Check out active experiments, ML notebooks, and source code on @shlndra
              </p>
            </div>
          </div>

          <a
            href="https://github.com/shlndra"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-semibold bg-slate-950 border border-slate-800 text-white hover:border-cyan-500/40 transition-all duration-200 hover:scale-105 shrink-0"
          >
            <GithubIcon size={16} />
            <span>github.com/shlndra</span>
            <ExternalLink size={13} className="text-cyan-400" />
          </a>
        </div>

      </div>
    </section>
  );
}
