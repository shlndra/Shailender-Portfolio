import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Education from './components/Education';
import Blogs from './components/Blogs';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  const [darkMode, setDarkMode] = useState(() => {
    // Check localStorage or default to dark
    const saved = localStorage.getItem('shailender_theme');
    return saved !== null ? saved === 'dark' : true;
  });

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

  return (
    <div className={`min-h-screen transition-colors duration-300 relative selection:bg-cyan-500/30 selection:text-cyan-300 ${
      darkMode 
        ? 'bg-slate-950 text-slate-100 bg-grid-pattern' 
        : 'bg-slate-50 text-slate-900 bg-grid-pattern-light'
    }`}>
      {/* Navbar */}
      <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />

      {/* Main Content Sections */}
      <main className="relative z-10">
        <Hero darkMode={darkMode} />
        <About darkMode={darkMode} />
        <Skills darkMode={darkMode} />
        <Experience darkMode={darkMode} />
        <Projects darkMode={darkMode} />
        <Education darkMode={darkMode} />
        <Blogs darkMode={darkMode} />
        <Contact darkMode={darkMode} />
      </main>

      {/* Footer */}
      <Footer darkMode={darkMode} />
    </div>
  );
}
