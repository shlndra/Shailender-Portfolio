import React, { useState, useMemo } from 'react';
import { useTheme, Section } from '../App';
import { projectsData } from '../data/portfolioData';
import { ExternalLink, Scale, Gamepad2, MessageSquareCode, Navigation, Music, Recycle, ArrowUpRight, Sparkles, ShoppingBag, Brain } from 'lucide-react';
import { Github } from './Icons';

const iconMap = {
  Scale, Gamepad2, MessageSquareCode, Navigation, Music, Recycle, ShoppingBag, Brain,
};

export default function Projects() {
  const { darkMode } = useTheme();
  const [filter, setFilter] = useState('All');

  const categories = useMemo(() => {
    const cats = ['All', ...new Set(projectsData.map(p => p.category))];
    return cats;
  }, []);

  const filteredProjects = useMemo(() => {
    return filter === 'All' ? projectsData : projectsData.filter(p => p.category === filter);
  }, [filter]);

  const featured = filteredProjects.filter(p => p.featured);
  const others = filteredProjects.filter(p => !p.featured);

  return (
    <Section id="projects" className="py-24 md:py-32 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="text-sm font-semibold tracking-widest uppercase mb-3 text-violet-500 flex items-center justify-center gap-1.5">
            <Sparkles size={16} />
            Featured Work & Deployments
          </p>
          <h2 className={`text-3xl md:text-5xl font-black mb-4 ${darkMode ? 'text-white' : 'text-slate-900'}`}>
            Things I've <span className="gradient-text">Built</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-violet-500 to-cyan-500 mx-auto rounded-full mb-4" />
          <p className={`max-w-2xl mx-auto text-sm md:text-base ${darkMode ? 'text-slate-400' : 'text-slate-600'}`}>
            Explore production systems, AI pipelines, and interactive web applications designed for real-world impact.
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-4 py-2 rounded-full text-xs md:text-sm font-semibold transition-all duration-300 magnetic-btn ${
                filter === cat
                  ? 'bg-gradient-to-r from-violet-600 to-cyan-600 text-white shadow-lg shadow-violet-500/25'
                  : darkMode
                    ? 'bg-white/5 text-slate-400 hover:bg-white/10 hover:text-white'
                    : 'bg-black/5 text-slate-600 hover:bg-black/10 hover:text-slate-900'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Featured Projects Grid */}
        {featured.length > 0 && (
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {featured.map((project) => {
              const FallbackIcon = iconMap[project.fallbackIcon] || Scale;
              return (
                <div
                  key={project.id}
                  className={`group relative rounded-2xl overflow-hidden card-hover border flex flex-col justify-between ${
                    darkMode 
                      ? 'glass border-white/5 hover:border-violet-500/40' 
                      : 'glass-light border-black/5 hover:border-violet-500/40'
                  }`}
                >
                  <div>
                    {/* Project Image */}
                    <div className="relative h-56 md:h-64 overflow-hidden bg-slate-900/40">
                      {project.image ? (
                        <img
                          src={project.image}
                          alt={project.title}
                          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                        />
                      ) : (
                        <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-violet-600/20 to-cyan-600/20">
                          <FallbackIcon size={64} className="text-violet-400/40" />
                        </div>
                      )}
                      
                      {/* Gradient overlay */}
                      <div className={`absolute inset-0 bg-gradient-to-t ${
                        darkMode ? 'from-[#0a0520] via-transparent to-black/30' : 'from-white via-transparent to-black/20'
                      }`} />
                      
                      {/* Category badge */}
                      <div className="absolute top-4 left-4 z-10">
                        <span className="text-xs font-semibold px-3 py-1 rounded-full bg-violet-600/90 text-white backdrop-blur-md shadow-md">
                          {project.category}
                        </span>
                      </div>

                      {project.stats && (
                        <div className="absolute bottom-4 left-4 z-10">
                          <span className={`text-xs px-2.5 py-1 rounded-md backdrop-blur-md font-medium ${
                            darkMode ? 'bg-black/60 text-slate-200 border border-white/10' : 'bg-white/80 text-slate-800 border border-black/10'
                          }`}>
                            {project.stats}
                          </span>
                        </div>
                      )}
                    </div>

                    {/* Content */}
                    <div className="p-6 md:p-7">
                      <h3 className={`text-xl font-bold mb-1.5 group-hover:text-violet-400 transition-colors ${
                        darkMode ? 'text-white' : 'text-slate-900'
                      }`}>
                        {project.title}
                      </h3>
                      <p className={`text-xs font-semibold tracking-wide uppercase mb-3 ${
                        darkMode ? 'text-cyan-400' : 'text-violet-600'
                      }`}>
                        {project.tagline}
                      </p>
                      <p className={`text-sm leading-relaxed mb-5 ${
                        darkMode ? 'text-slate-300' : 'text-slate-600'
                      }`}>
                        {project.description}
                      </p>
                      
                      {/* Tech Stack */}
                      <div className="flex flex-wrap gap-2 mb-6">
                        {project.technologies.map((tech, j) => (
                          <span key={j} className={`text-xs px-2.5 py-1 rounded-lg font-medium ${
                            darkMode ? 'bg-white/5 text-slate-300 border border-white/5' : 'bg-black/5 text-slate-700 border border-black/5'
                          }`}>
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Actions Bar */}
                  <div className={`px-6 pb-6 pt-2 flex items-center gap-3 border-t ${
                    darkMode ? 'border-white/5' : 'border-black/5'
                  }`}>
                    {project.demoUrl ? (
                      <a
                        href={project.demoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl font-semibold text-xs md:text-sm text-white bg-gradient-to-r from-violet-600 to-cyan-600 hover:from-violet-500 hover:to-cyan-500 shadow-md shadow-violet-500/20 transition-all magnetic-btn"
                      >
                        <ExternalLink size={15} />
                        Live Demo
                      </a>
                    ) : null}
                    {project.githubUrl ? (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`flex-1 inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl font-semibold text-xs md:text-sm border transition-all magnetic-btn ${
                          darkMode 
                            ? 'border-white/15 bg-white/5 hover:bg-white/10 text-white' 
                            : 'border-black/15 bg-black/5 hover:bg-black/10 text-slate-800'
                        }`}
                      >
                        <Github size={15} />
                        Source Code
                      </a>
                    ) : null}
                  </div>
                </div>
              );
            })}
          </div>
        )}

        {/* Other Projects */}
        {others.length > 0 && (
          <div>
            <h3 className={`text-lg font-bold mb-6 ${darkMode ? 'text-slate-300' : 'text-slate-700'}`}>
              Additional Notable Projects
            </h3>
            <div className="grid md:grid-cols-2 gap-6">
              {others.map((project) => {
                const FallbackIcon = iconMap[project.fallbackIcon] || Scale;
                return (
                  <div
                    key={project.id}
                    className={`group p-6 rounded-2xl card-hover border flex flex-col justify-between ${
                      darkMode 
                        ? 'glass border-white/5 hover:border-violet-500/40' 
                        : 'glass-light border-black/5 hover:border-violet-500/40'
                    }`}
                  >
                    <div>
                      <div className="flex items-center justify-between mb-4">
                        <div className={`p-3 rounded-xl ${
                          darkMode ? 'bg-violet-500/10 text-violet-400' : 'bg-violet-500/10 text-violet-600'
                        }`}>
                          <FallbackIcon size={22} />
                        </div>
                        <span className={`text-xs font-semibold px-2.5 py-1 rounded-full ${
                          darkMode ? 'bg-white/5 text-slate-400' : 'bg-black/5 text-slate-600'
                        }`}>
                          {project.category}
                        </span>
                      </div>
                      
                      <h4 className={`text-lg font-bold mb-1.5 group-hover:text-violet-400 transition-colors ${
                        darkMode ? 'text-white' : 'text-slate-900'
                      }`}>
                        {project.title}
                      </h4>
                      <p className={`text-xs font-semibold mb-2.5 ${
                        darkMode ? 'text-violet-400' : 'text-violet-600'
                      }`}>
                        {project.tagline}
                      </p>
                      <p className={`text-sm leading-relaxed mb-4 ${
                        darkMode ? 'text-slate-400' : 'text-slate-600'
                      }`}>
                        {project.description}
                      </p>
                      
                      <div className="flex flex-wrap gap-1.5 mb-5">
                        {project.technologies.map((tech, j) => (
                          <span key={j} className={`text-xs px-2.5 py-0.5 rounded-md ${
                            darkMode ? 'bg-white/5 text-slate-400' : 'bg-black/5 text-slate-600'
                          }`}>
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="flex items-center gap-3 pt-3 border-t border-white/5">
                      {project.githubUrl && (
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className={`inline-flex items-center gap-1.5 text-xs font-semibold px-3 py-1.5 rounded-lg border transition-all ${
                            darkMode 
                              ? 'border-white/10 hover:border-violet-500/50 text-slate-300 hover:text-white bg-white/5' 
                              : 'border-black/10 hover:border-violet-500/50 text-slate-700 hover:text-slate-900 bg-black/5'
                          }`}
                        >
                          <Github size={13} />
                          GitHub Repository
                        </a>
                      )}
                      {project.demoUrl && (
                        <a
                          href={project.demoUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 text-xs font-semibold px-3 py-1.5 rounded-lg bg-gradient-to-r from-violet-600 to-cyan-600 text-white hover:opacity-90 transition-opacity"
                        >
                          <ExternalLink size={13} />
                          Live Demo
                        </a>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        )}
      </div>
    </Section>
  );
}
