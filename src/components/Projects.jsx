import React, { useState, useMemo } from 'react';
import { useTheme, Section } from '../App';
import { projectsData } from '../data/portfolioData';
import { ExternalLink, Scale, Gamepad2, MessageSquareCode, Navigation, ShoppingBag, Brain, Sparkles, Info } from 'lucide-react';
import { Github } from './Icons';
import ProjectDetailModal from './ProjectDetailModal';

const iconMap = {
  Scale, Gamepad2, MessageSquareCode, Navigation, ShoppingBag, Brain,
};

export default function Projects() {
  const { darkMode } = useTheme();
  const [filter, setFilter] = useState('All');
  const [selectedProject, setSelectedProject] = useState(null);

  const categories = useMemo(() => {
    return ['All', 'Systems & Full Stack', 'Machine Learning', 'NLP & AI', 'AI & Games'];
  }, []);

  const filteredProjects = useMemo(() => {
    return filter === 'All'
      ? projectsData
      : projectsData.filter((p) => p.category === filter);
  }, [filter]);

  return (
    <Section id="projects" className="py-24 md:py-32 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="text-sm font-semibold tracking-widest uppercase mb-3 text-[#38BDF8] flex items-center justify-center gap-1.5">
            <Sparkles size={16} />
            Verified Engineering Portfolio
          </p>
          <h2 className="text-3xl md:text-5xl font-black mb-4 text-[#F8FAFC]">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-[#6366F1] to-[#38BDF8] mx-auto rounded-full mb-4" />
          <p className="max-w-2xl mx-auto text-sm md:text-base text-[#94A3B8]">
            Explore production systems, machine learning pipelines, and verified software applications built for real-world impact.
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
                  ? 'bg-gradient-to-r from-[#6366F1] to-[#38BDF8] text-white shadow-lg shadow-[#6366F1]/25'
                  : 'bg-[#111827] text-[#94A3B8] border border-white/5 hover:border-white/20 hover:text-white'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-12">
          {filteredProjects.map((project) => {
            const FallbackIcon = iconMap[project.fallbackIcon] || Brain;
            return (
              <div
                key={project.id}
                className="group relative rounded-2xl overflow-hidden card-hover border border-white/10 bg-[#111827] flex flex-col justify-between"
              >
                <div>
                  {/* Card Header & Badge */}
                  <div className="p-5 pb-0 flex items-center justify-between">
                    <span className="text-[11px] font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-[#6366F1]/15 text-[#818CF8] border border-[#6366F1]/25">
                      {project.category}
                    </span>
                    {project.stats && (
                      <span className="text-[11px] text-emerald-400 font-medium">
                        {project.stats.split('•')[0]}
                      </span>
                    )}
                  </div>

                  {/* Body Content */}
                  <div className="p-5 sm:p-6">
                    <div className="flex items-start gap-3 mb-3">
                      <div className="p-2.5 rounded-xl bg-gradient-to-br from-[#6366F1]/20 to-[#38BDF8]/20 text-[#38BDF8] flex-shrink-0">
                        <FallbackIcon size={20} />
                      </div>
                      <div>
                        <h3
                          onClick={() => setSelectedProject(project)}
                          className="text-lg font-bold text-[#F8FAFC] group-hover:text-[#38BDF8] transition-colors cursor-pointer"
                        >
                          {project.title}
                        </h3>
                        <p className="text-xs text-[#38BDF8] font-medium mt-0.5">
                          {project.tagline}
                        </p>
                      </div>
                    </div>

                    <p className="text-sm leading-relaxed text-[#94A3B8] mb-4 line-clamp-3">
                      {project.description}
                    </p>

                    {/* Tech Badges */}
                    <div className="flex flex-wrap gap-1.5 mb-2">
                      {project.technologies.slice(0, 4).map((tech, j) => (
                        <span
                          key={j}
                          className="text-[11px] px-2 py-0.5 rounded-md font-medium bg-white/5 text-[#94A3B8] border border-white/5"
                        >
                          {tech}
                        </span>
                      ))}
                      {project.technologies.length > 4 && (
                        <span className="text-[11px] px-1.5 py-0.5 rounded-md text-[#94A3B8]">
                          +{project.technologies.length - 4}
                        </span>
                      )}
                    </div>
                  </div>
                </div>

                {/* Card Action Footer */}
                <div className="px-5 pb-5 pt-2 flex items-center gap-2 border-t border-white/5">
                  <button
                    onClick={() => setSelectedProject(project)}
                    className="flex-1 inline-flex items-center justify-center gap-1.5 px-3 py-2 rounded-xl text-xs font-semibold bg-white/5 hover:bg-white/10 text-[#F8FAFC] border border-white/10 transition-all"
                  >
                    <Info size={13} className="text-[#38BDF8]" />
                    <span>Deep Dive</span>
                  </button>

                  {project.demoUrl ? (
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-1.5 px-3 py-2 rounded-xl text-xs font-semibold text-white bg-gradient-to-r from-[#6366F1] to-[#38BDF8] hover:opacity-95 shadow-md shadow-[#6366F1]/20 transition-all"
                    >
                      <ExternalLink size={13} />
                      <span>Live</span>
                    </a>
                  ) : null}

                  {project.githubUrl ? (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 rounded-xl bg-white/5 hover:bg-white/10 text-[#94A3B8] hover:text-white border border-white/10 transition-all"
                      title="Inspect GitHub Source"
                    >
                      <Github size={15} />
                    </a>
                  ) : null}
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Project Deep-Dive Modal */}
      {selectedProject && (
        <ProjectDetailModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
          darkMode={darkMode}
        />
      )}
    </Section>
  );
}
