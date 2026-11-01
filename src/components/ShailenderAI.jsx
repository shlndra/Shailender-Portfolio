import React, { useState, useRef, useEffect } from 'react';
import { Bot, X, Send, Sparkles, RotateCcw, User, Check, CornerDownLeft, ShieldCheck } from 'lucide-react';
import { personalInfo, projectsData, experienceData, educationData, certificatesData } from '../data/portfolioData';

const SUGGESTED_QUESTIONS = [
  'Tell me about Shailender.',
  'What are his strongest technical skills?',
  'Show me his best projects.',
  'Tell me about his AI/ML experience.',
  'What is his experience at Velrix Core?',
  'Is he available for opportunities?'
];

// Offline verified knowledge engine
function generateLocalResponse(query) {
  const q = query.toLowerCase().trim();

  if (q.includes('about') || q.includes('who is') || q.includes('background') || q.includes('profile')) {
    return `Shailender is a final-year B.Tech Computer Science Engineering student specializing in Artificial Intelligence and Machine Learning at Sushant University (graduating in 2027). He is also the Founder & Technical Lead of Velrix Core, where he led a 15-member team and drove ₹2,00,000+ peak monthly revenue. He is actively seeking Software Engineering and AI/ML opportunities.`;
  }

  if (q.includes('skill') || q.includes('stack') || q.includes('tech') || q.includes('strongest')) {
    return `Shailender's core competencies span:
• Languages: Python (Expert), Java (OOP/Concurrency), SQL, JavaScript, HTML5/CSS3.
• AI & Machine Learning: Scikit-Learn, PyTorch, Hugging Face Transformers, NLP pipelines, Computer Vision (OpenCV), Pandas, NumPy.
• Full-Stack & APIs: React 19, Next.js, Node.js, Express, Flask, Tailwind CSS, WebSockets.
• Cloud & Tools: Supabase, SQLite, Firebase, Git, GitHub, Razorpay, BlueDart Logistics API.`;
  }

  if (q.includes('project') || q.includes('best project') || q.includes('built') || q.includes('work')) {
    return `Shailender has engineered several flagship systems:
1. SmartLane (Accident Prevention): Real-time telematics and dynamic driver dispatch via WebSockets and Firebase.
2. Velrix Core E-Commerce: Full-stack platform fulfilling 200+ orders with Razorpay & BlueDart automation (₹2L+ peak monthly revenue).
3. House Price Prediction Engine: Multivariate hedonic regression model on 10K+ records with 15% accuracy gain.
4. Employee Turnover Risk Model: Decision Tree classifier identifying workforce attrition drivers with 85%+ accuracy.
5. Social Media Sentiment Analysis: NLP token classification pipeline for automated polarity triage.
6. 3D Chess AI: Minimax engine with alpha-beta pruning running client-side.`;
  }

  if (q.includes('ai') || q.includes('ml') || q.includes('machine learning') || q.includes('model') || q.includes('nlp')) {
    return `Shailender specializes in AI/ML pipelines and agent architectures:
• Data Science Internships at Prodigy InfoTech & Future Intern: Improved house price regression accuracy by 15% on 10K+ records and analyzed 1K+ social media posts with NLP.
• Memory Agent: Deployed an automated invoice extraction microservice using Flask, SQLite, and confidence-calibrated decision logic.
• NVIDIA Certified: Completed 'AI for All: From Basics to GenAI Practice' with NVIDIA Academy.
• ISRO/IIRS Grade A+ Merit: Space technology applications for disaster risk reduction and telemetry.`;
  }

  if (q.includes('velrix') || q.includes('commerce') || q.includes('business') || q.includes('revenue') || q.includes('founder')) {
    return `At Velrix Core, Shailender served as Founder & Technical Lead:
• Built a GST-registered, MSME-certified e-commerce brand with a physical retail presence.
• Led a 15-member team (including 5 seniors and 3 interns) managing engineering and growth.
• Architected the full-stack storefront on Node.js and Supabase with automated Razorpay payments and BlueDart logistics.
• Scaled the business to fulfill 200+ orders, achieving ₹2,00,000+ peak monthly revenue with a 2.34× ROAS.`;
  }

  if (q.includes('available') || q.includes('hire') || q.includes('opportunity') || q.includes('job') || q.includes('internship') || q.includes('contact')) {
    return `Yes! Shailender is actively interviewing and open for full-time opportunities across:
• Software Engineer
• Python Developer
• AI/ML Engineer
• Generative AI Engineer
• Full Stack Developer
• Forward Deployed Engineer

You can reach out directly via:
• Email: reachoutshailender@gmail.com
• Phone: +91 76786 64379
• LinkedIn: linkedin.com/in/shailender-18a18528a
• Location: Gurgaon, Delhi NCR (Open to relocation)`;
  }

  if (q.includes('education') || q.includes('degree') || q.includes('university') || q.includes('college')) {
    return `Shailender is pursuing his Bachelor of Technology (B.Tech) in Computer Science & Engineering with specialization in Artificial Intelligence & Machine Learning at Sushant University (Gurgaon, Haryana), graduating in 2027. His coursework includes DSA, DBMS, Operating Systems, Computer Networks, and Machine Learning.`;
  }

  if (q.includes('resume') || q.includes('cv')) {
    return `You can download Shailender's verified official resume at: ${personalInfo.resumeUrl}`;
  }

  return `I have verified knowledge on Shailender's software engineering background, B.Tech CSE (AI & ML) studies at Sushant University, Velrix Core founder experience (₹2L+ revenue), Prodigy InfoTech data science internship, and projects like SmartLane, Chess AI, and ML predictive models. Feel free to ask about his technical skills or project architectures!`;
}

export default function ShailenderAI() {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [messages, setMessages] = useState([
    {
      id: 1,
      sender: 'bot',
      text: "Hi, I'm Shailender AI. Ask me anything about Shailender's technical background, projects, engineering internships, or availability for full-time roles!"
    }
  ]);

  const messagesEndRef = useRef(null);
  const inputRef = useRef(null);

  useEffect(() => {
    if (isOpen) {
      messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
      inputRef.current?.focus();
    }
  }, [isOpen, messages, isTyping]);

  const handleSend = async (textToSend) => {
    const query = (textToSend || input).trim();
    if (!query || isTyping) return;

    const userMsgId = Date.now();
    setMessages((prev) => [...prev, { id: userMsgId, sender: 'user', text: query }]);
    setInput('');
    setIsTyping(true);

    // Simulate natural AI thinking time
    setTimeout(() => {
      const responseText = generateLocalResponse(query);
      const botMsgId = Date.now() + 1;
      setMessages((prev) => [...prev, { id: botMsgId, sender: 'bot', text: responseText }]);
      setIsTyping(false);
    }, 450);
  };

  const handleReset = () => {
    setMessages([
      {
        id: Date.now(),
        sender: 'bot',
        text: "Conversation reset. What would you like to know about Shailender's projects, experience, or engineering skills?"
      }
    ]);
  };

  return (
    <>
      {/* Floating Trigger Button */}
      <div className="fixed bottom-6 right-6 z-40">
        {!isOpen && (
          <button
            onClick={() => setIsOpen(true)}
            className="group relative flex items-center gap-2.5 px-4 py-3 rounded-full bg-gradient-to-r from-[#6366F1] to-[#38BDF8] text-white font-semibold text-sm shadow-2xl shadow-[#6366F1]/40 hover:scale-105 transition-all duration-300"
            aria-label="Open Shailender AI Assistant"
          >
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-300 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-400"></span>
            </span>
            <Bot size={18} />
            <span className="hidden sm:inline">Ask Shailender AI</span>
          </button>
        )}
      </div>

      {/* Floating Chat Modal */}
      {isOpen && (
        <div className="fixed bottom-6 right-6 z-50 w-[92vw] sm:w-[410px] h-[580px] max-h-[85vh] rounded-3xl bg-[#111827] border border-white/10 shadow-2xl shadow-black/80 flex flex-col overflow-hidden text-[#F8FAFC]">
          {/* Header */}
          <div className="p-4 bg-[#080B12] border-b border-white/10 flex items-center justify-between">
            <div className="flex items-center gap-2.5">
              <div className="p-2 rounded-xl bg-gradient-to-tr from-[#6366F1] to-[#38BDF8] text-white shadow-md">
                <Bot size={18} />
              </div>
              <div>
                <div className="flex items-center gap-1.5">
                  <h3 className="text-sm font-bold text-[#F8FAFC]">Shailender AI</h3>
                  <span className="px-1.5 py-0.2 rounded text-[10px] font-bold bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                    Live
                  </span>
                </div>
                <p className="text-[11px] text-[#94A3B8]">Grounded in verified portfolio data</p>
              </div>
            </div>

            <div className="flex items-center gap-1">
              <button
                onClick={handleReset}
                className="p-1.5 rounded-lg text-[#94A3B8] hover:text-white hover:bg-white/5 transition-colors"
                title="Reset conversation"
              >
                <RotateCcw size={15} />
              </button>
              <button
                onClick={() => setIsOpen(false)}
                className="p-1.5 rounded-lg text-[#94A3B8] hover:text-white hover:bg-white/5 transition-colors"
                title="Close chat"
              >
                <X size={18} />
              </button>
            </div>
          </div>

          {/* Messages Area */}
          <div className="flex-1 overflow-y-auto p-4 space-y-3 text-xs sm:text-sm">
            {messages.map((msg) => (
              <div
                key={msg.id}
                className={`flex gap-2.5 ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                {msg.sender === 'bot' && (
                  <div className="w-6 h-6 rounded-full bg-[#6366F1]/20 text-[#818CF8] flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Bot size={13} />
                  </div>
                )}
                <div
                  className={`p-3.5 rounded-2xl max-w-[85%] leading-relaxed whitespace-pre-wrap ${
                    msg.sender === 'user'
                      ? 'bg-gradient-to-r from-[#6366F1] to-[#38BDF8] text-white rounded-br-none'
                      : 'bg-[#080B12] text-[#F8FAFC] border border-white/5 rounded-bl-none'
                  }`}
                >
                  {msg.text}
                </div>
              </div>
            ))}

            {isTyping && (
              <div className="flex items-center gap-2 text-xs text-[#94A3B8] pl-2">
                <Bot size={14} className="text-[#38BDF8] animate-pulse" />
                <span>Shailender AI is generating response...</span>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Suggested Quick Questions */}
          <div className="px-3 py-2 bg-[#080B12]/80 border-t border-white/5 flex gap-1.5 overflow-x-auto no-scrollbar">
            {SUGGESTED_QUESTIONS.map((q) => (
              <button
                key={q}
                onClick={() => handleSend(q)}
                className="px-2.5 py-1 rounded-full text-[11px] font-medium bg-white/5 hover:bg-white/10 text-[#94A3B8] hover:text-white border border-white/5 whitespace-nowrap transition-all"
              >
                {q}
              </button>
            ))}
          </div>

          {/* Input Bar */}
          <div className="p-3 bg-[#080B12] border-t border-white/10 flex items-center gap-2">
            <input
              ref={inputRef}
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && handleSend()}
              placeholder="Ask anything about Shailender..."
              className="flex-1 px-3.5 py-2.5 rounded-xl bg-[#111827] border border-white/10 text-xs text-[#F8FAFC] outline-none focus:border-[#38BDF8] placeholder:text-[#94A3B8]/50"
            />
            <button
              onClick={() => handleSend()}
              disabled={!input.trim() || isTyping}
              className="p-2.5 rounded-xl bg-gradient-to-r from-[#6366F1] to-[#38BDF8] text-white hover:opacity-90 disabled:opacity-40 transition-all"
              aria-label="Send message"
            >
              <Send size={15} />
            </button>
          </div>
        </div>
      )}
    </>
  );
}
