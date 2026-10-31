import React from 'react';
import { 
  Sparkles, 
  BookOpen, 
  Clock, 
  ExternalLink, 
  ArrowRight, 
  Feather 
} from 'lucide-react';
import { blogsData } from '../data/portfolioData';

export default function Blogs({ darkMode }) {
  return (
    <section id="blogs" className="py-24 relative overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 -right-40 w-96 h-96 bg-purple-500/10 rounded-full blur-[130px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono font-medium border border-cyan-500/30 bg-cyan-500/10 text-cyan-400 mb-3">
            <Sparkles size={12} />
            <span>ARTICLES & THOUGHT LEADERSHIP</span>
          </div>
          <h2 className={`text-3xl sm:text-4xl font-extrabold tracking-tight ${
            darkMode ? 'text-white' : 'text-slate-900'
          }`}>
            Featured <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">Articles & Blogs</span>
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-cyan-400 to-blue-600 rounded-full mt-3" />
          <p className={`mt-4 text-base max-w-2xl ${darkMode ? 'text-slate-400' : 'text-slate-600'}`}>
            With love for developing cool stuff, I enjoy writing and sharing insights about algorithms, artificial intelligence, and the developer journey.
          </p>
        </div>

        {/* Blogs Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {blogsData.map((blog) => (
            <article
              key={blog.id}
              className={`p-8 rounded-3xl border flex flex-col justify-between transition-all duration-300 hover:-translate-y-1.5 ${
                darkMode 
                  ? 'bg-slate-900/60 border-slate-800 hover:border-cyan-500/40 hover:shadow-2xl hover:shadow-cyan-950/20' 
                  : 'bg-white border-slate-200 hover:border-blue-300 hover:shadow-2xl hover:shadow-slate-200/70'
              }`}
            >
              <div>
                {/* Meta Header */}
                <div className="flex items-center justify-between gap-3 mb-4">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono font-semibold bg-cyan-500/10 text-cyan-400 border border-cyan-500/20">
                    <Feather size={12} />
                    <span>{blog.tag}</span>
                  </span>

                  <div className="flex items-center gap-2 text-xs font-mono text-slate-400">
                    <Clock size={13} className="text-cyan-400" />
                    <span>{blog.readTime}</span>
                  </div>
                </div>

                {/* Title */}
                <h3 className={`text-xl font-bold tracking-tight mb-3 line-clamp-2 hover:text-cyan-400 transition-colors ${
                  darkMode ? 'text-white' : 'text-slate-900'
                }`}>
                  <a href={blog.url} target="_blank" rel="noopener noreferrer">
                    {blog.title}
                  </a>
                </h3>

                {/* Excerpt */}
                <p className={`text-sm leading-relaxed mb-6 line-clamp-4 ${
                  darkMode ? 'text-slate-300' : 'text-slate-600'
                }`}>
                  {blog.description}
                </p>

                {/* Topic tags */}
                <div className="flex flex-wrap gap-1.5 mb-6">
                  {blog.topics.map((t, i) => (
                    <span
                      key={i}
                      className={`text-[11px] font-mono px-2 py-0.5 rounded-md border ${
                        darkMode
                          ? 'bg-slate-950/70 border-slate-800 text-slate-400'
                          : 'bg-slate-100 border-slate-200 text-slate-600'
                      }`}
                    >
                      #{t}
                    </span>
                  ))}
                </div>
              </div>

              {/* Read button */}
              <div className="pt-4 border-t border-slate-800/60 flex items-center justify-between">
                <span className="text-xs font-mono text-slate-500">Published on Medium</span>
                <a
                  href={blog.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm font-semibold text-cyan-400 hover:text-cyan-300 group"
                >
                  <span>Read Article</span>
                  <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                </a>
              </div>
            </article>
          ))}
        </div>

        {/* Medium Profile Link */}
        <div className="text-center mt-12">
          <a
            href="https://medium.com/@shlndra"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm font-mono text-slate-400 hover:text-cyan-400 transition-colors"
          >
            <span>Follow @shlndra on Medium for new articles</span>
            <ExternalLink size={13} />
          </a>
        </div>

      </div>
    </section>
  );
}
