'use client';
import Image from 'next/image';
import { useState } from 'react';

const projects = [
  {
    title: 'Parrilla VS Barril',
    category: 'Culinario',
    description: 'Seminario sobre técnicas de parrilla y barril. Dominio de ambas técnicas con diferentes formas de preparación.',
    image: '/images/parrilla.png',
    tags: ['Cocina', 'Seminario', 'Técnicas'],
    color: '#ff6b35',
    link: null,
  },
  {
    title: 'Coctelería Profesional',
    category: 'Culinario',
    description: 'Seminario sobre los diferentes tipos de cócteles y técnicas de mixología profesional.',
    image: '/images/cocteleria.jpg',
    tags: ['Coctelería', 'Mixología', 'Seminario'],
    color: '#a855f7',
    link: null,
  },
  {
    title: 'Arte & Dibujo',
    category: 'Arte',
    description: 'Habilidad heredada de ambas partes de mi familia. Dibujo artístico y técnico con diferentes medios.',
    image: '/images/dibujos.jpg',
    tags: ['Arte', 'Dibujo', 'Creatividad'],
    color: '#22c55e',
    link: null,
  },
  {
    title: 'Pintura',
    category: 'Arte',
    description: 'Pintura artística heredada de mi familia. Trabajo con diferentes técnicas y estilos pictóricos.',
    image: '/images/pintura.jpg',
    tags: ['Pintura', 'Arte', 'Creatividad'],
    color: '#f59e0b',
    link: null,
  },
  {
    title: 'Sistema ProgSena',
    category: 'Software',
    description: 'Sistema de Gestión Académica para el SENA. Gestión de instructores, coordinadores, asignaciones, fichas y programas de formación. Arquitectura MVC con PHP y MySQL.',
    image: '/images/software.jpg',
    tags: ['PHP', 'MySQL', 'MVC', 'Bootstrap', 'JavaScript'],
    color: '#00d4ff',
    link: 'http://localhost/Mini-Proyecto',
    badge: '🏆 Mini-Proyecto SENA',
  },
  {
    title: 'DigiTurno APE - SENA',
    category: 'Software',
    description: 'Sistema Digital de Turnos para la Agencia Pública de Empleo del SENA. Gestión de citas en tiempo real con enfoque diferencial, pantalla pública y panel de asesor.',
    image: '/images/software.jpg',
    tags: ['Laravel', 'Tailwind', 'MySQL', 'PHP', 'Web Audio API'],
    color: '#f59e0b',
    link: 'http://localhost/Digiturno-main',
    badge: '🚦 DigiTurno SENA',
  },
  {
    title: 'Hoja de Vida Web',
    category: 'Software',
    description: 'Portafolio personal desarrollado con Next.js 16, Tailwind CSS y TypeScript. Diseño oscuro moderno con soporte multiidioma (ES/EN/FR) y chatbot inteligente.',
    image: '/images/diseno.webp',
    tags: ['Next.js', 'TypeScript', 'Tailwind', 'React'],
    color: '#a855f7',
    link: 'http://localhost:3000',
    badge: '⭐ Este sitio',
  },
  {
    title: 'Diseño Gráfico',
    category: 'Diseño',
    description: 'Diseño visual y experiencia de usuario. Creación de identidades visuales y contenido digital.',
    image: '/images/diseno.webp',
    tags: ['Diseño', 'UI/UX', 'Creatividad'],
    color: '#ec4899',
    link: null,
  },
];

const categories = ['Todos', 'Culinario', 'Arte', 'Software', 'Diseño'];

export default function PortfolioSection() {
  const [activeCategory, setActiveCategory] = useState('Todos');

  const filtered = activeCategory === 'Todos'
    ? projects
    : projects.filter(p => p.category === activeCategory);

  return (
    <section id="portfolio" className="section-full overflow-hidden" style={{ paddingTop: 80, paddingBottom: 80 }}>
      <div className="bg-grid" />
      <div className="orb orb-purple w-96 h-96 bottom-0 left-20 opacity-10" />

      <div className="w-full max-w-5xl mx-auto relative z-10 w-full">
        <div className="text-center mb-10">
          <p className="glow-cyan text-sm font-semibold uppercase tracking-widest mb-3">Mis trabajos</p>
          <h2 className="section-title">
            Mi <span>Portafolio</span>
          </h2>
          <p className="text-gray-400 mt-2">Una colección de mis proyectos y trabajos recientes</p>
        </div>

        {/* Filter tabs */}
        <div className="flex gap-2 justify-center flex-wrap mb-8">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 rounded-full text-sm font-semibold transition-all ${
                activeCategory === cat
                  ? 'bg-cyan-500 text-black'
                  : 'dark-card text-gray-400 hover:text-white'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {filtered.map((project) => (
            <div key={project.title} className="portfolio-card group">
              <div className="relative overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.title}
                  width={400}
                  height={200}
                  className="w-full h-40 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                <span
                  className="absolute top-3 left-3 text-xs font-bold px-2 py-1 rounded-full"
                  style={{ background: `${project.color}33`, color: project.color, border: `1px solid ${project.color}44` }}
                >
                  {project.category}
                </span>
                {'badge' in project && project.badge && (
                  <span className="absolute top-3 right-3 text-xs font-bold px-2 py-1 rounded-full bg-black/60 text-white border border-white/20">
                    {project.badge}
                  </span>
                )}
              </div>
              <div className="p-4">
                <h3 className="text-white font-bold text-base mb-1">{project.title}</h3>
                <p className="text-gray-400 text-xs leading-relaxed mb-3">{project.description}</p>
                <div className="flex flex-wrap gap-1 mb-3">
                  {project.tags.map((tag) => (
                    <span key={tag} className="tag">{tag}</span>
                  ))}
                </div>
                {'link' in project && project.link && (
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-primary-custom text-xs py-2 px-4 inline-block"
                  >
                    Ver proyecto →
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
