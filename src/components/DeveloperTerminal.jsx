import React, { useState, useRef, useEffect } from 'react';
import { Section } from '../App';
import { personalInfo, projectsData, experienceData, skillsData } from '../data/portfolioData';
import { Terminal as TerminalIcon, CornerDownLeft, Maximize2, Minimize2, Sparkles, Copy, Check } from 'lucide-react';

const COMMANDS = ['help', 'about', 'skills', 'projects', 'experience', 'education', 'resume', 'contact', 'clear'];

export default function DeveloperTerminal() {
  const [input, setInput] = useState('');
  const [history, setHistory] = useState([
    {
      type: 'system',
      text: "Shailender CLI [Version 2.4.0]\nType 'help' to inspect available system commands or click the shortcut chips below.\n"
    }
  ]);
  const [cmdHistory, setCmdHistory] = useState([]);
  const [historyIndex, setHistoryIndex] = useState(-1);
  const [isCopied, setIsCopied] = useState(false);

  const bottomRef = useRef(null);
  const inputRef = useRef(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [history]);

  const executeCommand = (cmdStr) => {
    const trimmed = cmdStr.trim().toLowerCase();
    if (!trimmed) return;

    // Add to command history
    setCmdHistory((prev) => [...prev, trimmed]);
    setHistoryIndex(-1);

    if (trimmed === 'clear') {
      setHistory([]);
      setInput('');
      return;
    }

    let output = '';

    switch (trimmed) {
      case 'help':
        output = [
          'AVAILABLE SYSTEM COMMANDS:',
          '  help        - List all supported commands',
          '  about       - Display professional background, graduation & role targets',
          '  skills      - Inspect core technical stacks & engineering tools',
          '  projects    - List verified engineering deployments & repositories',
          '  experience  - View industry experience (Prodigy InfoTech & Velrix Core)',
          '  education   - View degree, university details and verified coursework',
          '  resume      - Retrieve verified Google Drive resume download link',
          '  contact     - Display direct reach-out options (email, phone, LinkedIn)',
          '  clear       - Clear the terminal screen'
        ].join('\n');
        break;

      case 'about':
        output = [
          `NAME: ${personalInfo.fullName}`,
          `EDUCATION: B.Tech Computer Science & Engineering (AI & ML) - Sushant University (Expected 2027)`,
          `LOCATION: ${personalInfo.location}`,
          `STATUS: Available for Software Engineering & AI/ML opportunities`,
          `PROFILE: ${personalInfo.bio}`
        ].join('\n');
        break;

      case 'skills':
        output = [
          'PRIMARY TECHNICAL STACK:',
          '  • Languages: Python, Java, SQL, JavaScript, HTML5/CSS3',
          '  • Machine Learning & AI: Scikit-Learn, PyTorch, Hugging Face, NLP, Computer Vision, Pandas, NumPy',
          '  • Web & Full-Stack: React 19, Next.js, Node.js, Express, Flask, Tailwind CSS, WebSockets',
          '  • Cloud & Databases: Supabase, SQLite, Firebase, REST APIs, Razorpay, BlueDart API',
          '  • Engineering Tooling: Git, GitHub, VS Code, Vercel, Docker'
        ].join('\n');
        break;

      case 'projects':
        output = [
          'VERIFIED FEATURED PROJECTS:',
          ...projectsData.map(
            (p, idx) =>
              `  [${idx + 1}] ${p.title} (${p.category})\n      → Tech: ${p.technologies.slice(0, 4).join(', ')}${
                p.demoUrl ? `\n      → Demo: ${p.demoUrl}` : ''
              }${p.githubUrl ? `\n      → GitHub: ${p.githubUrl}` : ''}`
          )
        ].join('\n\n');
        break;

      case 'experience':
        output = [
          'PROFESSIONAL EXPERIENCE:',
          ...experienceData.map(
            (exp) =>
              `  • ${exp.role} @ ${exp.company} (${exp.period})\n    ${exp.description}\n    Key Deliverables:\n${exp.highlights
                .map((h) => `      - ${h}`)
                .join('\n')}`
          )
        ].join('\n\n');
        break;

      case 'education':
        output = [
          'ACADEMIC PROFILE:',
          '  • Institution: Sushant University (Sector 55, Gurgaon, Haryana)',
          '  • Degree: Bachelor of Technology (B.Tech)',
          '  • Major: Computer Science & Engineering (Specialization in AI & ML)',
          '  • Expected Graduation: 2027 (Final Year)',
          '  • Verified Coursework: Data Structures & Algorithms, DBMS, Operating Systems, Computer Networks, Machine Learning'
        ].join('\n');
        break;

      case 'resume':
        output = `Opening verified resume document...\nLink: ${personalInfo.resumeUrl}`;
        window.open(personalInfo.resumeUrl, '_blank');
        break;

      case 'contact':
        output = [
          'GET IN TOUCH DIRECTLY:',
          `  • Email:    ${personalInfo.email}`,
          `  • Phone:    ${personalInfo.phone}`,
          `  • LinkedIn: ${personalInfo.socials.linkedin}`,
          `  • GitHub:   ${personalInfo.socials.github}`,
          `  • Location: ${personalInfo.location}`
        ].join('\n');
        break;

      default:
        output = `zsh: command not found: ${trimmed}. Type 'help' to see valid commands.`;
    }

    setHistory((prev) => [
      ...prev,
      { type: 'input', text: cmdStr },
      { type: 'output', text: output }
    ]);
    setInput('');
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      executeCommand(input);
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      if (cmdHistory.length > 0) {
        const nextIdx = historyIndex === -1 ? cmdHistory.length - 1 : Math.max(0, historyIndex - 1);
        setHistoryIndex(nextIdx);
        setInput(cmdHistory[nextIdx]);
      }
    } else if (e.key === 'ArrowDown') {
      e.preventDefault();
      if (historyIndex !== -1) {
        const nextIdx = historyIndex + 1;
        if (nextIdx < cmdHistory.length) {
          setHistoryIndex(nextIdx);
          setInput(cmdHistory[nextIdx]);
        } else {
          setHistoryIndex(-1);
          setInput('');
        }
      }
    } else if (e.key === 'Tab') {
      e.preventDefault();
      const current = input.trim().toLowerCase();
      const match = COMMANDS.find((c) => c.startsWith(current));
      if (match) setInput(match);
    }
  };

  const handleCopyTerminal = () => {
    const textToCopy = history.map((h) => h.text).join('\n');
    navigator.clipboard.writeText(textToCopy);
    setIsCopied(true);
    setTimeout(() => setIsCopied(false), 2000);
  };

  return (
    <Section id="terminal" className="py-24 md:py-32 px-6">
      <div className="max-w-4xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12">
          <p className="text-sm font-semibold tracking-widest uppercase mb-3 text-[#38BDF8] flex items-center justify-center gap-1.5">
            <TerminalIcon size={16} />
            Command Line Interface
          </p>
          <h2 className="text-3xl md:text-5xl font-black mb-4 text-[#F8FAFC]">
            Interactive <span className="gradient-text">Developer Terminal</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-[#6366F1] to-[#38BDF8] mx-auto rounded-full mb-4" />
          <p className="max-w-xl mx-auto text-sm md:text-base text-[#94A3B8]">
            Inspect my engineering skills, career experience, and academic record through an interactive terminal session.
          </p>
        </div>

        {/* Quick Command Chips */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-6">
          <span className="text-xs font-semibold text-[#94A3B8] mr-2">Quick Run:</span>
          {COMMANDS.filter((c) => c !== 'clear').map((cmd) => (
            <button
              key={cmd}
              onClick={() => executeCommand(cmd)}
              className="px-3 py-1 rounded-lg text-xs font-mono font-medium bg-[#111827] text-[#38BDF8] border border-white/10 hover:border-[#38BDF8]/50 hover:bg-[#38BDF8]/10 transition-all"
            >
              {cmd}
            </button>
          ))}
          <button
            onClick={() => executeCommand('clear')}
            className="px-3 py-1 rounded-lg text-xs font-mono font-medium bg-red-500/10 text-red-400 border border-red-500/20 hover:bg-red-500/20 transition-all"
          >
            clear
          </button>
        </div>

        {/* Terminal Window */}
        <div className="rounded-2xl overflow-hidden border border-white/10 bg-[#080B12] shadow-2xl shadow-black/80 font-mono text-xs sm:text-sm">
          {/* macOS Title Bar */}
          <div className="px-4 py-3 bg-[#111827] border-b border-white/10 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-rose-500 inline-block opacity-80" />
              <span className="w-3 h-3 rounded-full bg-amber-500 inline-block opacity-80" />
              <span className="w-3 h-3 rounded-full bg-emerald-500 inline-block opacity-80" />
              <span className="ml-3 text-xs text-[#94A3B8] font-medium hidden sm:inline">
                shailender@portfolio: ~ (zsh)
              </span>
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={handleCopyTerminal}
                className="p-1 rounded text-[#94A3B8] hover:text-white transition-colors"
                title="Copy terminal log"
              >
                {isCopied ? <Check size={14} className="text-emerald-400" /> : <Copy size={14} />}
              </button>
            </div>
          </div>

          {/* Terminal Screen Body */}
          <div
            className="p-5 sm:p-6 min-h-[320px] max-h-[460px] overflow-y-auto space-y-3 cursor-text text-[#F8FAFC]"
            onClick={() => inputRef.current?.focus()}
          >
            {history.map((item, idx) => (
              <div key={idx}>
                {item.type === 'system' && (
                  <pre className="text-[#38BDF8] whitespace-pre-wrap leading-relaxed">
                    {item.text}
                  </pre>
                )}
                {item.type === 'input' && (
                  <div className="flex items-center gap-2 text-[#F8FAFC]">
                    <span className="text-emerald-400 font-bold">➜</span>
                    <span className="text-[#818CF8] font-semibold">~</span>
                    <span className="font-bold">{item.text}</span>
                  </div>
                )}
                {item.type === 'output' && (
                  <pre className="text-[#94A3B8] whitespace-pre-wrap leading-relaxed pl-4 border-l border-white/10 my-1">
                    {item.text}
                  </pre>
                )}
              </div>
            ))}

            {/* Prompt Input Line */}
            <div className="flex items-center gap-2 pt-2 text-[#F8FAFC]">
              <span className="text-emerald-400 font-bold">➜</span>
              <span className="text-[#818CF8] font-semibold">~</span>
              <input
                ref={inputRef}
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={handleKeyDown}
                placeholder="type a command (e.g. help, skills)..."
                className="flex-1 bg-transparent outline-none text-[#F8FAFC] font-mono text-xs sm:text-sm placeholder:text-[#94A3B8]/50"
                autoComplete="off"
                spellCheck="false"
              />
              <button
                onClick={() => executeCommand(input)}
                className="p-1 rounded bg-white/5 hover:bg-white/10 text-[#94A3B8] hover:text-white sm:hidden"
                aria-label="Send command"
              >
                <CornerDownLeft size={14} />
              </button>
            </div>

            <div ref={bottomRef} />
          </div>

          {/* Footer Bar */}
          <div className="px-4 py-2 bg-[#111827]/60 border-t border-white/5 text-[11px] text-[#94A3B8] flex items-center justify-between">
            <span>Press Tab for auto-completion • ↑/↓ for command history</span>
            <span className="hidden sm:inline">UTF-8</span>
          </div>
        </div>
      </div>
    </Section>
  );
}
