'use client';
import { useEffect, useState } from 'react';
import Image from 'next/image';

const roles = ['Chef Profesional', 'Desarrolladora de Software', 'Diseñadora Gráfica', 'Artista & Creativa'];

export default function HeroSection() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayed, setDisplayed] = useState('');
  const [typing, setTyping] = useState(true);

  useEffect(() => {
    const current = roles[roleIndex];
    let timeout: ReturnType<typeof setTimeout>;

    if (typing) {
      if (displayed.length < current.length) {
        timeout = setTimeout(() => setDisplayed(current.slice(0, displayed.length + 1)), 80);
      } else {
        timeout = setTimeout(() => setTyping(false), 2000);
      }
    } else {
      if (displayed.length > 0) {
        timeout = setTimeout(() => setDisplayed(displayed.slice(0, -1)), 40);
      } else {
        setRoleIndex((i) => (i + 1) % roles.length);
        setTyping(true);
      }
    }
    return () => clearTimeout(timeout);
  }, [displayed, typing, roleIndex]);

  return (
    <section id="home" className="section-full justify-center overflow-hidden">
      {/* Background effects */}
      <div className="bg-grid" />
      <div className="orb orb-cyan w-96 h-96 top-10 right-20" />
      <div className="orb orb-blue w-64 h-64 bottom-20 right-40" />

      <div className="w-full max-w-4xl mx-auto text-center relative z-10 animate-fadeInUp">
        {/* Profile image */}
        <div className="profile-ring animate-float mx-auto" style={{ width: 140, height: 140 }}>
          <Image
            src="/images/maria-paula.jpg"
            alt="María Paula Capacho González"
            width={140}
            height={140}
            className="rounded-full object-cover object-top border-4"
            style={{ borderColor: '#0a0e1a' }}
            priority
          />
        </div>

        {/* Greeting */}
        <p className="text-gray-400 text-lg mb-2 tracking-widest uppercase">Bienvenido a mi portafolio</p>

        {/* Name */}
        <h1 className="text-5xl md:text-6xl font-black mb-4 leading-tight">
          Hola, soy <span className="glow-cyan">María Paula</span>
        </h1>

        {/* Typing role */}
        <div className="text-xl md:text-2xl text-gray-300 mb-6 h-8 flex items-center justify-center gap-1">
          <span>Soy </span>
          <span className="glow-cyan font-semibold">{displayed}</span>
          <span className="cursor" />
        </div>

        {/* Description */}
        <p style={{ textAlign: 'center', color: '#94a3b8', maxWidth: 560, margin: '0 auto 2.5rem', lineHeight: 1.7, fontSize: '1rem' }}>
          Con experiencia en cocina profesional y desarrollo de software. Me especializo en crear soluciones
          innovadoras que combinan creatividad culinaria con tecnología para lograr resultados excepcionales.
        </p>

        {/* Buttons */}
        <div className="flex gap-4 justify-center flex-wrap">
          <a href="#portfolio" className="btn-primary-custom">Ver mi trabajo</a>
          <a href="#contact" className="btn-outline-custom">Descargar CV</a>
        </div>

        {/* Stats */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: '1.5rem', marginTop: '4rem', maxWidth: 420, marginLeft: 'auto', marginRight: 'auto' }}>
          {[
            { value: '2+', label: 'Años exp.' },
            { value: '10+', label: 'Proyectos' },
            { value: '3', label: 'Idiomas' },
          ].map((stat) => (
            <div key={stat.label} style={{ textAlign: 'center' }}>
              <div style={{ fontSize: '2rem', fontWeight: 900, color: '#00d4ff' }}>{stat.value}</div>
              <div style={{ fontSize: '0.85rem', color: '#64748b', marginTop: 4 }}>{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
