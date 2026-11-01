import React, { useState } from 'react';
import { useTheme, Section } from '../App';
import { certificatesData, personalInfo } from '../data/portfolioData';
import { Award, ExternalLink, Calendar, CheckCircle, Sparkles, X, ZoomIn, ShieldCheck } from 'lucide-react';

export default function Certificates() {
  const { darkMode } = useTheme();
  const [selectedCert, setSelectedCert] = useState(null);

  return (
    <Section id="certificates" className="py-24 md:py-32 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="text-sm font-semibold tracking-widest uppercase mb-3 text-violet-500 flex items-center justify-center gap-1.5">
            <ShieldCheck size={16} />
            Verified Qualifications
          </p>
          <h2 className={`text-3xl md:text-5xl font-black mb-4 ${darkMode ? 'text-white' : 'text-slate-900'}`}>
            Certifications & <span className="gradient-text">Honors</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-violet-500 to-cyan-500 mx-auto rounded-full mb-6" />
          <p className={`max-w-2xl mx-auto text-base ${darkMode ? 'text-slate-400' : 'text-slate-600'}`}>
            Industry-certified credentials in Generative AI, space technology remote sensing, and university academic leadership.
          </p>

          {/* Drive CTA */}
          {personalInfo.certificatesUrl && (
            <div className="mt-6">
              <a
                href={personalInfo.certificatesUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full text-xs md:text-sm font-semibold border transition-all magnetic-btn border-violet-500/30 text-violet-400 hover:text-white hover:bg-violet-500/10"
              >
                <Award size={16} />
                <span>Open Certificates Google Drive Folder</span>
                <ExternalLink size={13} />
              </a>
            </div>
          )}
        </div>

        {/* Certificates Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {certificatesData.map((cert) => (
            <div
              key={cert.id}
              className="group rounded-3xl overflow-hidden card-hover border border-white/10 bg-[#111827] flex flex-col justify-between"
            >
              <div>
                {/* Certificate Preview Image */}
                <div 
                  onClick={() => setSelectedCert(cert)}
                  className="relative h-52 overflow-hidden bg-slate-900/40 cursor-pointer"
                >
                  <img
                    src={cert.image}
                    alt={cert.title}
                    className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
                  />
                  
                  {/* Subtle overlay */}
                  <div className={`absolute inset-0 bg-gradient-to-t ${
                    darkMode ? 'from-[#030014] via-transparent to-black/20' : 'from-white via-transparent to-black/10'
                  }`} />

                  {/* Zoom Badge on Hover */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-black/40 backdrop-blur-xs">
                    <span className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full text-xs font-bold text-white bg-violet-600/90 shadow-lg">
                      <ZoomIn size={14} />
                      Click to Enlarge
                    </span>
                  </div>

                  {/* Issuer Badge */}
                  <div className="absolute top-3 left-3 z-10">
                    <span className="text-xs font-bold px-3 py-1 rounded-full bg-violet-600/90 text-white backdrop-blur-md shadow-md">
                      {cert.issuer}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-xs font-semibold px-2.5 py-0.5 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                      {cert.grade}
                    </span>
                  </div>

                  <h3 className={`text-lg font-bold mb-2 group-hover:text-violet-400 transition-colors ${
                    darkMode ? 'text-white' : 'text-slate-900'
                  }`}>
                    {cert.title}
                  </h3>

                  <p className={`text-xs font-medium mb-3 ${
                    darkMode ? 'text-slate-400' : 'text-slate-500'
                  }`}>
                    Issued by: {cert.instructor}
                  </p>

                  <p className={`text-sm leading-relaxed mb-4 ${
                    darkMode ? 'text-slate-300' : 'text-slate-600'
                  }`}>
                    {cert.description}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-1.5 mb-2">
                    {cert.tags.map((tag, j) => (
                      <span key={j} className={`text-xs px-2.5 py-0.5 rounded-md ${
                        darkMode ? 'bg-white/5 text-slate-300' : 'bg-black/5 text-slate-700'
                      }`}>
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Bottom Actions */}
              <div className={`p-6 pt-0 flex items-center justify-between border-t border-white/5 mt-4`}>
                <span className={`text-xs flex items-center gap-1 ${
                  darkMode ? 'text-slate-500' : 'text-slate-400'
                }`}>
                  <Calendar size={13} />
                  {cert.issueDate}
                </span>

                <button
                  onClick={() => setSelectedCert(cert)}
                  className={`text-xs font-semibold inline-flex items-center gap-1 transition-colors ${
                    darkMode ? 'text-violet-400 hover:text-cyan-300' : 'text-violet-600 hover:text-cyan-600'
                  }`}
                >
                  <span>View Certificate</span>
                  <ExternalLink size={12} />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Modal Lightbox */}
        {selectedCert && (
          <div 
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fade-in"
            onClick={() => setSelectedCert(null)}
          >
            <div 
              className={`relative max-w-4xl w-full rounded-3xl overflow-hidden border p-6 md:p-8 max-h-[90vh] overflow-y-auto ${
                darkMode ? 'bg-[#0a0520] border-white/10 text-white' : 'bg-white border-black/10 text-slate-900'
              }`}
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedCert(null)}
                className="absolute top-6 right-6 p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors z-20"
                aria-label="Close modal"
              >
                <X size={20} />
              </button>

              <div className="space-y-6">
                <div>
                  <span className="text-xs font-bold px-3 py-1 rounded-full bg-violet-600 text-white">
                    {selectedCert.issuer}
                  </span>
                  <h3 className="text-2xl font-black mt-3">
                    {selectedCert.title}
                  </h3>
                  <p className="text-sm text-slate-400 mt-1">
                    {selectedCert.instructor} • {selectedCert.issueDate}
                  </p>
                </div>

                {/* Certificate Image Full */}
                <div className="rounded-2xl overflow-hidden border border-white/10 shadow-2xl bg-black/40">
                  <img
                    src={selectedCert.image}
                    alt={selectedCert.title}
                    className="w-full h-auto object-contain max-h-[60vh] mx-auto"
                  />
                </div>

                {/* Description & Verification */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pt-4 border-t border-white/10">
                  <div>
                    <p className="text-sm font-semibold text-emerald-400 flex items-center gap-1.5">
                      <CheckCircle size={16} />
                      {selectedCert.grade}
                    </p>
                    <p className="text-xs text-slate-400 mt-1">
                      {selectedCert.description}
                    </p>
                  </div>

                  <a
                    href={selectedCert.verificationUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl font-bold text-sm text-white bg-gradient-to-r from-violet-600 to-cyan-600 hover:from-violet-500 hover:to-cyan-500 shadow-lg shadow-violet-500/25 transition-all magnetic-btn flex-shrink-0"
                  >
                    <span>Verify Credential</span>
                    <ExternalLink size={16} />
                  </a>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </Section>
  );
}
