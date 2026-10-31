import React, { useState } from 'react';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Send, 
  Copy, 
  Check, 
  Sparkles, 
  MessageSquare, 
  ArrowRight
} from 'lucide-react';
import { GithubIcon, LinkedinIcon, InstagramIcon } from './Icons';
import confetti from 'canvas-confetti';
import { personalInfo } from '../data/portfolioData';

export default function Contact({ darkMode }) {
  const [copied, setCopied] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [sentSuccess, setSentSuccess] = useState(false);

  const copyEmailToClipboard = () => {
    navigator.clipboard.writeText(personalInfo.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    confetti({
      particleCount: 100,
      spread: 80,
      origin: { y: 0.6 }
    });
    setSentSuccess(true);
    
    // Open default mail client with prefilled values
    const mailtoUrl = `mailto:${personalInfo.email}?subject=${encodeURIComponent(formData.subject || 'Portfolio Inquiry from ' + formData.name)}&body=${encodeURIComponent(`Hi Shailender,\n\n${formData.message}\n\nFrom: ${formData.name} (${formData.email})`)}`;
    window.location.href = mailtoUrl;

    setTimeout(() => {
      setSentSuccess(false);
      setFormData({ name: '', email: '', subject: '', message: '' });
    }, 4000);
  };

  return (
    <section id="contact" className="py-24 relative overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-gradient-to-r from-cyan-500/10 via-blue-500/10 to-purple-500/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono font-medium border border-cyan-500/30 bg-cyan-500/10 text-cyan-400 mb-3">
            <Sparkles size={12} />
            <span>LET'S CONNECT & COLLABORATE</span>
          </div>
          <h2 className={`text-3xl sm:text-4xl font-extrabold tracking-tight ${
            darkMode ? 'text-white' : 'text-slate-900'
          }`}>
            Get in <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">Touch</span>
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-cyan-400 to-blue-600 rounded-full mt-3" />
          <p className={`mt-4 text-base max-w-2xl ${darkMode ? 'text-slate-400' : 'text-slate-600'}`}>
            Discuss a project, talk AI and machine learning, or just say hi? My inbox is always open.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 max-w-6xl mx-auto items-start">
          
          {/* Left Column: Direct Info Cards & Quick Connect */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Status card */}
            <div className={`p-6 rounded-3xl border ${
              darkMode ? 'bg-slate-900/60 border-slate-800' : 'bg-white border-slate-200'
            }`}>
              <div className="flex items-center gap-3 mb-4">
                <span className="relative flex h-3 w-3">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500"></span>
                </span>
                <span className="text-xs font-mono font-bold tracking-wide uppercase text-emerald-400">
                  Open for opportunities
                </span>
              </div>
              <h3 className={`text-xl font-bold mb-2 ${darkMode ? 'text-white' : 'text-slate-900'}`}>
                Have an AI challenge or development role?
              </h3>
              <p className={`text-xs sm:text-sm leading-relaxed mb-6 ${
                darkMode ? 'text-slate-300' : 'text-slate-600'
              }`}>
                I'm actively looking for internships, research roles, and collaborative projects in AI, NLP, and Full-Stack systems.
              </p>

              {/* Copy Email Button */}
              <button
                onClick={copyEmailToClipboard}
                className={`w-full flex items-center justify-between p-3.5 rounded-xl border text-xs font-mono transition-all cursor-pointer ${
                  copied
                    ? 'bg-emerald-950/60 border-emerald-500/40 text-emerald-300'
                    : darkMode
                      ? 'bg-slate-950/80 border-slate-800 text-slate-300 hover:border-cyan-500/50 hover:bg-slate-900'
                      : 'bg-slate-50 border-slate-200 text-slate-700 hover:border-blue-400 hover:bg-slate-100'
                }`}
              >
                <div className="flex items-center gap-2.5 truncate">
                  <Mail size={16} className="text-cyan-400 shrink-0" />
                  <span className="truncate">{personalInfo.email}</span>
                </div>
                <div className="flex items-center gap-1 shrink-0 ml-2">
                  {copied ? (
                    <>
                      <Check size={14} className="text-emerald-400" />
                      <span className="text-emerald-400 font-semibold">Copied!</span>
                    </>
                  ) : (
                    <>
                      <Copy size={14} />
                      <span>Copy</span>
                    </>
                  )}
                </div>
              </button>
            </div>

            {/* Direct contact channels */}
            <div className={`p-6 rounded-3xl border space-y-4 ${
              darkMode ? 'bg-slate-900/60 border-slate-800' : 'bg-white border-slate-200'
            }`}>
              {/* Phone */}
              <a
                href={`tel:${personalInfo.phone.replace(/[^0-9+]/g, '')}`}
                className={`flex items-center gap-4 p-3 rounded-2xl border transition-all ${
                  darkMode 
                    ? 'border-slate-800/80 bg-slate-950/50 hover:border-slate-700 hover:bg-slate-900/80 text-slate-200' 
                    : 'border-slate-200 bg-slate-50 hover:border-slate-300 text-slate-800'
                }`}
              >
                <div className="p-3 rounded-xl bg-cyan-500/10 text-cyan-400 shrink-0">
                  <Phone size={18} />
                </div>
                <div>
                  <div className="text-[11px] font-mono text-slate-400">Direct Phone / WhatsApp</div>
                  <div className="text-sm font-semibold">{personalInfo.phone}</div>
                </div>
              </a>

              {/* Location */}
              <div
                className={`flex items-center gap-4 p-3 rounded-2xl border ${
                  darkMode ? 'border-slate-800/80 bg-slate-950/50 text-slate-200' : 'border-slate-200 bg-slate-50 text-slate-800'
                }`}
              >
                <div className="p-3 rounded-xl bg-blue-500/10 text-blue-400 shrink-0">
                  <MapPin size={18} />
                </div>
                <div>
                  <div className="text-[11px] font-mono text-slate-400">Location</div>
                  <div className="text-sm font-semibold">{personalInfo.location}</div>
                </div>
              </div>

              {/* Social Channels */}
              <div className="pt-2">
                <span className={`text-[11px] font-mono tracking-wider uppercase block mb-3 ${
                  darkMode ? 'text-slate-400' : 'text-slate-500'
                }`}>
                  Social Profiles:
                </span>
                <div className="grid grid-cols-3 gap-2">
                  <a
                    href={personalInfo.socials.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`flex items-center justify-center gap-2 p-2.5 rounded-xl border text-xs font-semibold transition-colors ${
                      darkMode 
                        ? 'bg-slate-950/80 border-slate-800 text-slate-300 hover:text-white hover:bg-slate-800' 
                        : 'bg-slate-50 border-slate-200 text-slate-700 hover:text-black hover:bg-slate-100'
                    }`}
                  >
                    <GithubIcon size={14} />
                    <span>GitHub</span>
                  </a>

                  <a
                    href={personalInfo.socials.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`flex items-center justify-center gap-2 p-2.5 rounded-xl border text-xs font-semibold transition-colors ${
                      darkMode 
                        ? 'bg-slate-950/80 border-slate-800 text-slate-300 hover:text-blue-400 hover:bg-slate-800' 
                        : 'bg-slate-50 border-slate-200 text-slate-700 hover:text-blue-600 hover:bg-slate-100'
                    }`}
                  >
                    <LinkedinIcon size={14} />
                    <span>LinkedIn</span>
                  </a>

                  <a
                    href={personalInfo.socials.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`flex items-center justify-center gap-2 p-2.5 rounded-xl border text-xs font-semibold transition-colors ${
                      darkMode 
                        ? 'bg-slate-950/80 border-slate-800 text-slate-300 hover:text-pink-400 hover:bg-slate-800' 
                        : 'bg-slate-50 border-slate-200 text-slate-700 hover:text-pink-600 hover:bg-slate-100'
                    }`}
                  >
                    <InstagramIcon size={14} />
                    <span>Instagram</span>
                  </a>
                </div>
              </div>

            </div>

          </div>

          {/* Right Column: Interactive Send Message Form */}
          <div className="lg:col-span-7">
            <div className={`p-8 rounded-3xl border ${
              darkMode ? 'bg-slate-900/60 border-slate-800' : 'bg-white border-slate-200'
            }`}>
              <div className="mb-6">
                <h3 className={`text-2xl font-bold ${darkMode ? 'text-white' : 'text-slate-900'}`}>
                  Send a Direct Message
                </h3>
                <p className={`text-xs sm:text-sm mt-1 ${darkMode ? 'text-slate-400' : 'text-slate-600'}`}>
                  Fill in your details below to dispatch an email inquiry directly to my inbox.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className={`block text-xs font-mono font-medium mb-1.5 ${
                      darkMode ? 'text-slate-300' : 'text-slate-700'
                    }`}>
                      Your Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Jane Doe"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className={`w-full px-4 py-3 rounded-xl border text-sm transition-all focus:outline-none focus:ring-2 focus:ring-cyan-500/50 ${
                        darkMode 
                          ? 'bg-slate-950/80 border-slate-800 text-white placeholder-slate-500 focus:border-cyan-500' 
                          : 'bg-slate-50 border-slate-200 text-slate-900 placeholder-slate-400 focus:border-blue-500'
                      }`}
                    />
                  </div>

                  <div>
                    <label className={`block text-xs font-mono font-medium mb-1.5 ${
                      darkMode ? 'text-slate-300' : 'text-slate-700'
                    }`}>
                      Your Email *
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="jane@example.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className={`w-full px-4 py-3 rounded-xl border text-sm transition-all focus:outline-none focus:ring-2 focus:ring-cyan-500/50 ${
                        darkMode 
                          ? 'bg-slate-950/80 border-slate-800 text-white placeholder-slate-500 focus:border-cyan-500' 
                          : 'bg-slate-50 border-slate-200 text-slate-900 placeholder-slate-400 focus:border-blue-500'
                      }`}
                    />
                  </div>
                </div>

                <div>
                  <label className={`block text-xs font-mono font-medium mb-1.5 ${
                    darkMode ? 'text-slate-300' : 'text-slate-700'
                  }`}>
                    Subject
                  </label>
                  <input
                    type="text"
                    placeholder="Project Inquiry / Job Opportunity / Greeting"
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    className={`w-full px-4 py-3 rounded-xl border text-sm transition-all focus:outline-none focus:ring-2 focus:ring-cyan-500/50 ${
                      darkMode 
                        ? 'bg-slate-950/80 border-slate-800 text-white placeholder-slate-500 focus:border-cyan-500' 
                        : 'bg-slate-50 border-slate-200 text-slate-900 placeholder-slate-400 focus:border-blue-500'
                    }`}
                  />
                </div>

                <div>
                  <label className={`block text-xs font-mono font-medium mb-1.5 ${
                    darkMode ? 'text-slate-300' : 'text-slate-700'
                  }`}>
                    Your Message *
                  </label>
                  <textarea
                    rows={4}
                    required
                    placeholder="Tell me about your project, idea, or role..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className={`w-full px-4 py-3 rounded-xl border text-sm transition-all focus:outline-none focus:ring-2 focus:ring-cyan-500/50 resize-none ${
                      darkMode 
                        ? 'bg-slate-950/80 border-slate-800 text-white placeholder-slate-500 focus:border-cyan-500' 
                        : 'bg-slate-50 border-slate-200 text-slate-900 placeholder-slate-400 focus:border-blue-500'
                    }`}
                  />
                </div>

                <button
                  type="submit"
                  className="w-full flex items-center justify-center gap-2.5 px-6 py-4 rounded-xl font-semibold text-sm bg-gradient-to-r from-cyan-500 via-blue-600 to-indigo-600 text-white shadow-lg shadow-cyan-500/25 hover:shadow-cyan-500/40 hover:scale-[1.01] active:scale-[0.99] transition-all cursor-pointer"
                >
                  <Send size={16} />
                  <span>Send Message via Email Client</span>
                  <ArrowRight size={14} />
                </button>

                {sentSuccess && (
                  <div className="p-3 rounded-xl bg-emerald-950/60 border border-emerald-500/40 text-emerald-300 text-xs font-mono text-center flex items-center justify-center gap-2">
                    <Check size={16} />
                    <span>Opening mail client... Thanks for getting in touch!</span>
                  </div>
                )}
              </form>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
