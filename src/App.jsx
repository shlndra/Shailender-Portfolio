import React, { useState, useEffect, useRef, createContext, useContext } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Education from './components/Education';
import Certificates from './components/Certificates';
import DeveloperTerminal from './components/DeveloperTerminal';
import CurrentlyBuilding from './components/CurrentlyBuilding';
import ProjectDemos from './components/ProjectDemos';
import ShailenderAI from './components/ShailenderAI';
import Blogs from './components/Blogs';
import Contact from './components/Contact';
import Footer from './components/Footer';

// Theme context
export const ThemeContext = createContext();
export const useTheme = () => useContext(ThemeContext);

// Scroll reveal hook
export function useScrollReveal(options = {}) {
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: options.threshold || 0.1, rootMargin: options.rootMargin || '0px' }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return [ref, isVisible];
}

// Section wrapper with scroll reveal
export function Section({ children, id, className = '' }) {
  const [ref, isVisible] = useScrollReveal({ threshold: 0.05 });

  return (
    <section
      id={id}
      ref={ref}
      className={`transition-all duration-1000 ease-out ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
      } ${className}`}
    >
      {children}
    </section>
  );
}

export default function App() {
  const [darkMode, setDarkMode] = useState(() => {
    const saved = localStorage.getItem('shailender_theme');
    return saved !== null ? saved === 'dark' : true;
  });

  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const root = document.documentElement;
    if (darkMode) {
      root.classList.add('dark');
      root.classList.remove('light');
      localStorage.setItem('shailender_theme', 'dark');
    } else {
      root.classList.remove('dark');
      root.classList.add('light');
      localStorage.setItem('shailender_theme', 'light');
    }
  }, [darkMode]);

  // Track mouse for gradient spotlight
  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <ThemeContext.Provider value={{ darkMode, setDarkMode }}>
      <div className={`min-h-screen relative transition-colors duration-500 noise-overlay ${
        darkMode 
          ? 'bg-[#080B12] text-[#F8FAFC]' 
          : 'bg-[#fafafa] text-slate-900'
      }`}>
        {/* Mouse-following gradient spotlight */}
        {darkMode && (
          <div
            className="fixed inset-0 z-0 pointer-events-none transition-opacity duration-300"
            style={{
              background: `radial-gradient(600px circle at ${mousePos.x}px ${mousePos.y}px, rgba(124, 58, 237, 0.06), transparent 40%)`
            }}
          />
        )}

        {/* Ambient gradient orbs */}
        <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
          <div className={`absolute top-0 -left-40 w-[500px] h-[500px] rounded-full blur-[120px] ${
            darkMode ? 'bg-violet-600/10' : 'bg-violet-400/10'
          }`} />
          <div className={`absolute top-1/3 -right-40 w-[400px] h-[400px] rounded-full blur-[120px] ${
            darkMode ? 'bg-cyan-600/8' : 'bg-cyan-400/8'
          }`} />
          <div className={`absolute bottom-0 left-1/3 w-[600px] h-[400px] rounded-full blur-[120px] ${
            darkMode ? 'bg-indigo-600/8' : 'bg-indigo-400/5'
          }`} />
        </div>

        {/* Dot grid overlay */}
        <div className={`fixed inset-0 z-0 pointer-events-none ${darkMode ? 'dot-grid' : 'dot-grid-light'}`} />

        {/* Navbar */}
        <Navbar />

        {/* Main Content */}
        <main className="relative z-10">
          <Hero />
          <About />
          <Projects />
          <Skills />
          <Experience />
          <Education />
          <Certificates />
          <DeveloperTerminal />
          <CurrentlyBuilding />
          <ProjectDemos />
          <Blogs />
          <Contact />
        </main>

        {/* Floating AI Portfolio Assistant */}
        <ShailenderAI />

        {/* Footer */}
        <Footer />
      </div>
    </ThemeContext.Provider>
  );
}
