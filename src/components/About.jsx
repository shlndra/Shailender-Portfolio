import React from 'react';
import { 
  Brain, 
  Code, 
  GraduationCap, 
  MapPin, 
  Briefcase, 
  Sparkles, 
  CheckCircle, 
  Rocket, 
  Award,
  BookOpen
} from 'lucide-react';
import { personalInfo, educationData } from '../data/portfolioData';

export default function About({ darkMode }) {
  return (
    <section id="about" className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono font-medium border border-cyan-500/30 bg-cyan-500/10 text-cyan-400 mb-3">
            <Sparkles size={12} />
            <span>DISCOVER MY JOURNEY</span>
          </div>
          <h2 className={`text-3xl sm:text-4xl font-extrabold tracking-tight ${
            darkMode ? 'text-white' : 'text-slate-900'
          }`}>
            About <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">Me</span>
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-cyan-400 to-blue-600 rounded-full mt-3" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Visual Card with Profile Overview */}
          <div className="lg:col-span-5">
            <div className={`p-8 rounded-3xl border relative transition-all duration-300 ${
              darkMode 
                ? 'bg-slate-900/60 border-slate-800 shadow-xl shadow-cyan-950/10' 
                : 'bg-white border-slate-200 shadow-xl shadow-slate-100'
            }`}>
              
              {/* Profile Avatar / Emblem */}
              <div className="relative mb-6">
                <div className="w-28 h-28 rounded-2xl bg-gradient-to-br from-cyan-500 via-blue-600 to-indigo-600 p-1 mx-auto shadow-xl shadow-cyan-500/25">
                  <div className={`w-full h-full rounded-[14px] flex items-center justify-center font-bold text-3xl font-mono ${
                    darkMode ? 'bg-slate-950 text-cyan-400' : 'bg-slate-50 text-blue-600'
                  }`}>
                    SK
                  </div>
                </div>
                
                <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 whitespace-nowrap bg-emerald-500/90 text-white text-[11px] font-mono px-3 py-0.5 rounded-full shadow-md flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
                  <span>3rd Year B.Tech</span>
                </div>
              </div>

              <div className="text-center mb-6">
                <h3 className={`text-2xl font-bold ${darkMode ? 'text-white' : 'text-slate-900'}`}>
                  {personalInfo.fullName}
                </h3>
                <p className="text-sm text-cyan-400 font-mono mt-1 font-medium">
                  @{personalInfo.username} • Sushant University
                </p>
                <div className={`flex items-center justify-center gap-1.5 text-xs mt-2 ${
                  darkMode ? 'text-slate-400' : 'text-slate-500'
                }`}>
                  <MapPin size={14} className="text-cyan-400" />
                  <span>{personalInfo.location}</span>
                </div>
              </div>

              {/* Quick Profile Meta Grid */}
              <div className="grid grid-cols-2 gap-3 pt-4 border-t border-slate-800/60">
                <div className={`p-3 rounded-xl border ${
                  darkMode ? 'bg-slate-950/50 border-slate-800/80' : 'bg-slate-50 border-slate-200'
                }`}>
                  <span className={`text-[11px] block ${darkMode ? 'text-slate-400' : 'text-slate-500'}`}>Specialization</span>
                  <span className={`text-xs font-semibold mt-0.5 block ${darkMode ? 'text-slate-200' : 'text-slate-800'}`}>
                    AI & Machine Learning
                  </span>
                </div>

                <div className={`p-3 rounded-xl border ${
                  darkMode ? 'bg-slate-950/50 border-slate-800/80' : 'bg-slate-50 border-slate-200'
                }`}>
                  <span className={`text-[11px] block ${darkMode ? 'text-slate-400' : 'text-slate-500'}`}>Graduation</span>
                  <span className={`text-xs font-semibold mt-0.5 block ${darkMode ? 'text-slate-200' : 'text-slate-800'}`}>
                    Class of 2027
                  </span>
                </div>

                <div className={`p-3 rounded-xl border ${
                  darkMode ? 'bg-slate-950/50 border-slate-800/80' : 'bg-slate-50 border-slate-200'
                }`}>
                  <span className={`text-[11px] block ${darkMode ? 'text-slate-400' : 'text-slate-500'}`}>Primary Languages</span>
                  <span className={`text-xs font-semibold mt-0.5 block text-cyan-400 font-mono`}>
                    Python • Java • JS
                  </span>
                </div>

                <div className={`p-3 rounded-xl border ${
                  darkMode ? 'bg-slate-950/50 border-slate-800/80' : 'bg-slate-50 border-slate-200'
                }`}>
                  <span className={`text-[11px] block ${darkMode ? 'text-slate-400' : 'text-slate-500'}`}>Availability</span>
                  <span className={`text-xs font-semibold mt-0.5 block text-emerald-400`}>
                    Open for Hire
                  </span>
                </div>
              </div>

            </div>
          </div>

          {/* Right Column: Detailed Bio & Philosophy */}
          <div className="lg:col-span-7 flex flex-col justify-center space-y-6">
            
            <h3 className={`text-2xl sm:text-3xl font-bold tracking-tight ${
              darkMode ? 'text-white' : 'text-slate-900'
            }`}>
              Bridging the gap between{' '}
              <span className="text-cyan-400">complex AI theory</span> and{' '}
              <span className="text-blue-500">practical software applications</span>.
            </h3>

            <p className={`text-base leading-relaxed ${
              darkMode ? 'text-slate-300' : 'text-slate-600'
            }`}>
              I am an AI & Machine Learning enthusiast and developer based in Delhi NCR, currently in my 3rd year of undergraduate studies in Computer Science Engineering at Sushant University. My work focuses on building end-to-end intelligent systems: from designing predictive machine learning and NLP pipelines to integrating them into clean, responsive web applications.
            </p>

            <p className={`text-base leading-relaxed ${
              darkMode ? 'text-slate-300' : 'text-slate-600'
            }`}>
              During my internships at <span className="font-semibold text-cyan-400">Future Intern</span> and <span className="font-semibold text-blue-400">Prodigy InfoTech</span>, I gained valuable practical experience developing regression models, performing NLP sentiment analysis on social media datasets, and architecting data cleaning pipelines. I have built real-world solutions including <span className="font-semibold text-indigo-400">The Verdict</span> (an AI courtroom advocacy simulator built for the Vibeathon hackathon), conversational transformers, and heuristic game engines.
            </p>

            {/* Core Values / What I Do */}
            <div className="space-y-3 pt-2">
              <div className={`p-4 rounded-2xl border flex items-start gap-3.5 transition-colors ${
                darkMode ? 'bg-slate-900/40 border-slate-800 hover:border-cyan-500/40' : 'bg-slate-50 border-slate-200 hover:border-blue-300'
              }`}>
                <div className="p-2 rounded-xl bg-cyan-500/10 text-cyan-400 shrink-0">
                  <Brain size={20} />
                </div>
                <div>
                  <h4 className={`text-sm font-bold ${darkMode ? 'text-white' : 'text-slate-900'}`}>
                    Architecting AI-Powered Systems
                  </h4>
                  <p className={`text-xs mt-1 leading-relaxed ${darkMode ? 'text-slate-400' : 'text-slate-600'}`}>
                    Leveraging machine learning models, transformer architectures, and custom heuristics to build solutions that automate decision making and process unstructured data.
                  </p>
                </div>
              </div>

              <div className={`p-4 rounded-2xl border flex items-start gap-3.5 transition-colors ${
                darkMode ? 'bg-slate-900/40 border-slate-800 hover:border-cyan-500/40' : 'bg-slate-50 border-slate-200 hover:border-blue-300'
              }`}>
                <div className="p-2 rounded-xl bg-blue-500/10 text-blue-400 shrink-0">
                  <Code size={20} />
                </div>
                <div>
                  <h4 className={`text-sm font-bold ${darkMode ? 'text-white' : 'text-slate-900'}`}>
                    Full-Stack Product Engineering
                  </h4>
                  <p className={`text-xs mt-1 leading-relaxed ${darkMode ? 'text-slate-400' : 'text-slate-600'}`}>
                    Building modern React & Vite applications, Flask microservices, RESTful APIs, and Firebase backends with smooth animations and accessibility in mind.
                  </p>
                </div>
              </div>

              <div className={`p-4 rounded-2xl border flex items-start gap-3.5 transition-colors ${
                darkMode ? 'bg-slate-900/40 border-slate-800 hover:border-cyan-500/40' : 'bg-slate-50 border-slate-200 hover:border-blue-300'
              }`}>
                <div className="p-2 rounded-xl bg-purple-500/10 text-purple-400 shrink-0">
                  <BookOpen size={20} />
                </div>
                <div>
                  <h4 className={`text-sm font-bold ${darkMode ? 'text-white' : 'text-slate-900'}`}>
                    Continuous Learning & Knowledge Sharing
                  </h4>
                  <p className={`text-xs mt-1 leading-relaxed ${darkMode ? 'text-slate-400' : 'text-slate-600'}`}>
                    Documenting my tech journeys through tech blogs on Medium covering Data Structures & Algorithms, AI implications, and engineering reflections.
                  </p>
                </div>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
