import React, { useEffect } from 'react';
import { X, ExternalLink, Code2, Server, CheckCircle2, AlertCircle, Sparkles, Layers } from 'lucide-react';
import { Github } from './Icons';

export default function ProjectDetailModal({ project, onClose, darkMode = true }) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    document.body.style.overflow = 'hidden';
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset';
    };
  }, [onClose]);

  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-md transition-all">
      <div
        className="relative w-full max-w-3xl max-h-[90vh] overflow-y-auto rounded-3xl bg-[#111827] border border-white/10 p-6 sm:p-8 shadow-2xl text-[#F8FAFC]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-start justify-between gap-4 border-b border-white/10 pb-5 mb-6">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="text-xs font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-[#6366F1]/20 text-[#818CF8] border border-[#6366F1]/30">
                {project.category}
              </span>
              <span className="text-xs text-emerald-400 font-semibold flex items-center gap-1">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 inline-block" />
                {project.stats}
              </span>
            </div>
            <h3 className="text-2xl sm:text-3xl font-black text-[#F8FAFC]">
              {project.title}
            </h3>
            <p className="text-sm font-medium text-[#38BDF8] mt-1">
              {project.tagline}
            </p>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-full bg-white/5 hover:bg-white/10 text-[#94A3B8] hover:text-white transition-colors"
            aria-label="Close modal"
          >
            <X size={20} />
          </button>
        </div>

        {/* Action buttons (Demo & GitHub) */}
        <div className="flex flex-wrap gap-3 mb-8">
          {project.demoUrl && (
            <a
              href={project.demoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl font-semibold text-sm bg-gradient-to-r from-[#6366F1] to-[#38BDF8] text-white shadow-lg shadow-[#6366F1]/20 hover:opacity-95 transition-all"
            >
              <ExternalLink size={15} />
              <span>Launch Live Deployment</span>
            </a>
          )}
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl font-semibold text-sm border border-white/10 bg-white/5 text-[#F8FAFC] hover:bg-white/10 hover:border-white/20 transition-all"
            >
              <Github size={16} />
              <span>Inspect Source Code</span>
            </a>
          )}
        </div>

        {/* Content Sections */}
        <div className="space-y-6 text-sm sm:text-base">
          {/* Problem Statement */}
          <div className="p-4 sm:p-5 rounded-2xl bg-white/2 border border-white/5">
            <h4 className="text-xs font-bold uppercase tracking-wider text-amber-400 flex items-center gap-1.5 mb-2">
              <AlertCircle size={15} />
              Problem Statement
            </h4>
            <p className="text-[#94A3B8] leading-relaxed">
              {project.problem || project.description}
            </p>
          </div>

          {/* Solution */}
          <div className="p-4 sm:p-5 rounded-2xl bg-white/2 border border-white/5">
            <h4 className="text-xs font-bold uppercase tracking-wider text-emerald-400 flex items-center gap-1.5 mb-2">
              <CheckCircle2 size={15} />
              Proposed Solution
            </h4>
            <p className="text-[#94A3B8] leading-relaxed">
              {project.solution || project.description}
            </p>
          </div>

          {/* Architecture */}
          {project.architecture && (
            <div className="p-4 sm:p-5 rounded-2xl bg-white/2 border border-white/5">
              <h4 className="text-xs font-bold uppercase tracking-wider text-[#38BDF8] flex items-center gap-1.5 mb-2">
                <Server size={15} />
                Technical Architecture
              </h4>
              <p className="text-[#94A3B8] leading-relaxed">
                {project.architecture}
              </p>
            </div>
          )}

          {/* Contribution */}
          {project.contribution && (
            <div className="p-4 sm:p-5 rounded-2xl bg-white/2 border border-white/5">
              <h4 className="text-xs font-bold uppercase tracking-wider text-[#818CF8] flex items-center gap-1.5 mb-2">
                <Code2 size={15} />
                My Contribution & Engineering Execution
              </h4>
              <p className="text-[#94A3B8] leading-relaxed">
                {project.contribution}
              </p>
            </div>
          )}

          {/* Technologies Used */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#94A3B8] flex items-center gap-1.5 mb-3">
              <Layers size={14} />
              Technologies & Frameworks
            </h4>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1.5 rounded-lg text-xs font-medium bg-white/5 text-[#F8FAFC] border border-white/10"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
