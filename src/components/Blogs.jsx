import React from 'react';
import { useTheme, Section } from '../App';
import { blogsData } from '../data/portfolioData';
import { ArrowUpRight, Clock, Calendar, BookOpen } from 'lucide-react';

export default function Blogs() {
  const { darkMode } = useTheme();

  return (
    <Section id="blog" className="py-24 md:py-32 px-6">
      <div className="max-w-5xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="text-sm font-semibold tracking-widest uppercase mb-3 text-violet-500">
            Blog & Writing
          </p>
          <h2 className={`text-3xl md:text-5xl font-black mb-4 ${darkMode ? 'text-white' : 'text-slate-900'}`}>
            My <span className="gradient-text">Articles</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-violet-500 to-cyan-500 mx-auto rounded-full" />
        </div>

        {/* Blog Cards */}
        <div className="grid md:grid-cols-2 gap-6">
          {blogsData.map((blog) => (
            <a
              key={blog.id}
              href={blog.url}
              target="_blank"
              rel="noopener noreferrer"
              className={`group relative rounded-2xl overflow-hidden card-hover ${
                darkMode ? 'glass' : 'glass-light'
              }`}
            >
              {/* Top gradient accent */}
              <div className="h-1 bg-gradient-to-r from-violet-500 to-cyan-500 opacity-60 group-hover:opacity-100 transition-opacity" />
              
              <div className="p-8">
                {/* Tag & Arrow */}
                <div className="flex items-center justify-between mb-4">
                  <span className={`text-xs font-semibold px-3 py-1 rounded-full ${
                    darkMode 
                      ? 'bg-violet-500/15 text-violet-400' 
                      : 'bg-violet-500/10 text-violet-600'
                  }`}>
                    {blog.tag}
                  </span>
                  <ArrowUpRight 
                    size={20} 
                    className={`transition-all duration-300 group-hover:translate-x-1 group-hover:-translate-y-1 ${
                      darkMode ? 'text-slate-500 group-hover:text-violet-400' : 'text-slate-400 group-hover:text-violet-600'
                    }`} 
                  />
                </div>

                {/* Title */}
                <h3 className={`text-lg font-bold mb-3 group-hover:text-violet-400 transition-colors line-clamp-2 ${
                  darkMode ? 'text-white' : 'text-slate-900'
                }`}>
                  {blog.title}
                </h3>

                {/* Description */}
                <p className={`text-sm leading-relaxed mb-5 line-clamp-3 ${
                  darkMode ? 'text-slate-400' : 'text-slate-600'
                }`}>
                  {blog.description}
                </p>

                {/* Meta */}
                <div className={`flex items-center gap-4 text-xs mb-5 ${
                  darkMode ? 'text-slate-500' : 'text-slate-500'
                }`}>
                  <span className="flex items-center gap-1.5">
                    <Calendar size={12} />
                    {blog.publishDate}
                  </span>
                  <span className="flex items-center gap-1.5">
                    <Clock size={12} />
                    {blog.readTime}
                  </span>
                </div>

                {/* Topics */}
                <div className="flex flex-wrap gap-2">
                  {blog.topics.map((topic, j) => (
                    <span
                      key={j}
                      className={`text-xs px-2.5 py-1 rounded-full ${
                        darkMode ? 'bg-white/5 text-slate-400' : 'bg-black/5 text-slate-600'
                      }`}
                    >
                      {topic}
                    </span>
                  ))}
                </div>
              </div>
            </a>
          ))}
        </div>

        {/* Medium CTA */}
        <div className="text-center mt-10">
          <a
            href="https://medium.com/@shlndra"
            target="_blank"
            rel="noopener noreferrer"
            className={`inline-flex items-center gap-2 text-sm font-semibold transition-colors duration-300 magnetic-btn ${
              darkMode ? 'text-violet-400 hover:text-violet-300' : 'text-violet-600 hover:text-violet-700'
            }`}
          >
            <BookOpen size={16} />
            Read more on Medium
            <ArrowUpRight size={14} />
          </a>
        </div>
      </div>
    </Section>
  );
}
