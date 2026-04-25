'use client';
import { useState, useEffect } from 'react';

const navItems = [
  { id: 'home', icon: '🏠', label: 'Inicio' },
  { id: 'about', icon: '👤', label: 'Sobre mí' },
  { id: 'skills', icon: '⚡', label: 'Habilidades' },
  { id: 'experience', icon: '💼', label: 'Experiencia' },
  { id: 'portfolio', icon: '📁', label: 'Portafolio' },
  { id: 'contact', icon: '✉️', label: 'Contacto' },
];

export default function SideNav() {
  const [active, setActive] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      const sections = navItems.map(item => document.getElementById(item.id));
      const scrollY = window.scrollY + window.innerHeight / 2;
      for (const section of sections) {
        if (section && scrollY >= section.offsetTop && scrollY < section.offsetTop + section.offsetHeight) {
          setActive(section.id);
          break;
        }
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    setActive(id);
  };

  return (
    <>
      {/* Side Nav */}
      <nav className="side-nav">
        {navItems.map((item) => (
          <button
            key={item.id}
            onClick={() => scrollTo(item.id)}
            className={`side-nav-item group ${active === item.id ? 'active' : ''}`}
            title={item.label}
          >
            <span className="text-lg">{item.icon}</span>
            {/* Tooltip */}
            <span className="absolute left-14 bg-gray-900 text-white text-xs px-2 py-1 rounded whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none border border-cyan-500/20">
              {item.label}
            </span>
          </button>
        ))}
      </nav>

      {/* Scroll dots */}
      <div className="scroll-indicator">
        {navItems.map((item) => (
          <div
            key={item.id}
            onClick={() => scrollTo(item.id)}
            className={`scroll-dot ${active === item.id ? 'active' : ''}`}
          />
        ))}
      </div>
    </>
  );
}
