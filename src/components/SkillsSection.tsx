'use client';
import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';

const skills = [
  { name: 'Cocina Profesional', percent: 85, icon: '🍳', color: '#ff6b35' },
  { name: 'HTML & CSS', percent: 80, icon: '🌐', color: '#00d4ff' },
  { name: 'JavaScript', percent: 65, icon: '⚡', color: '#f7df1e' },
  { name: 'Diseño Gráfico', percent: 75, icon: '🎨', color: '#a855f7' },
  { name: 'Dibujo & Pintura', percent: 90, icon: '✏️', color: '#22c55e' },
  { name: 'Bootstrap / Tailwind', percent: 70, icon: '💅', color: '#38bdf8' },
];

const softSkills = [
  { name: 'Creatividad', icon: '💡' },
  { name: 'Trabajo en equipo', icon: '🤝' },
  { name: 'Adaptabilidad', icon: '🔄' },
  { name: 'Comunicación', icon: '💬' },
  { name: 'Resolución de problemas', icon: '🧩' },
  { name: 'Liderazgo', icon: '🌟' },
];

export default function SkillsSection() {
  const [animated, setAnimated] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setAnimated(true); },
      { threshold: 0.3 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="skills" className="section-full overflow-hidden">
      <div className="bg-grid" />
      <div className="orb orb-cyan w-72 h-72 bottom-20 right-20 opacity-10" />

      <div className="w-full max-w-5xl mx-auto relative z-10" ref={ref}>
        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Left - illustration */}
          <div className="flex flex-col items-center justify-center">
            <div className="relative w-64 h-64 animate-float">
              <Image
                src="/images/cocina.jpg"
                alt="Habilidades"
                width={260}
                height={260}
                className="rounded-2xl object-cover w-full h-full"
                style={{ border: '1px solid rgba(0,212,255,0.2)' }}
              />
              {/* Floating badges */}
              <div className="absolute -top-4 -right-4 dark-card px-3 py-2 rounded-xl text-center">
                <div className="text-xl">🍳</div>
                <div className="text-xs text-gray-400 mt-1">Chef</div>
              </div>
              <div className="absolute -bottom-4 -left-4 dark-card px-3 py-2 rounded-xl text-center">
                <div className="text-xl">💻</div>
                <div className="text-xs text-gray-400 mt-1">Dev</div>
              </div>
            </div>

            {/* Soft skills */}
            <div className="mt-12 w-full flex flex-col items-center">
              <p className="text-gray-400 text-sm uppercase tracking-widest mb-4 text-center">Habilidades blandas</p>
              <div className="flex flex-wrap gap-2 justify-center">
                {softSkills.map((s) => (
                  <span key={s.name} className="tag flex items-center gap-1">
                    <span>{s.icon}</span> {s.name}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Right - skill bars */}
          <div>
            <p className="glow-cyan text-sm font-semibold uppercase tracking-widest mb-3">Mis habilidades</p>
            <h2 className="section-title mb-4">
              Lo que <span>sé hacer</span>
            </h2>
            <p className="text-gray-400 mb-8 leading-relaxed">
              Soy una persona apasionada con habilidades en cocina, arte y tecnología. Cada habilidad la he desarrollado
              con dedicación y amor, muchas heredadas de mi familia.
            </p>

            <div className="space-y-5">
              {skills.map((skill) => (
                <div key={skill.name}>
                  <div className="flex justify-between items-center mb-2">
                    <div className="flex items-center gap-2">
                      <span className="text-lg">{skill.icon}</span>
                      <span className="text-white text-sm font-medium">{skill.name}</span>
                    </div>
                    <span className="text-sm font-bold" style={{ color: skill.color }}>{skill.percent}%</span>
                  </div>
                  <div className="skill-bar-bg">
                    <div
                      className="skill-bar-fill"
                      style={{
                        width: animated ? `${skill.percent}%` : '0%',
                        background: `linear-gradient(90deg, ${skill.color}88, ${skill.color})`,
                        boxShadow: `0 0 10px ${skill.color}66`,
                      }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
