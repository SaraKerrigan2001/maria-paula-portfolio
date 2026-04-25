'use client';
import Image from 'next/image';
import { useLanguage } from '../contexts/LanguageContext';

export default function Portfolio() {
  const { t } = useLanguage();

  const projects = [
    { 
      id: 1, 
      title: t('portfolio.yasmin'),
      subtitle: t('portfolio.yasmin.subtitle'),
      img: '/img/COCINA.jpg',
      category: t('portfolio.culinary'),
      description: 'Experiencia en cocina profesional y gestión de restaurantes',
      technologies: ['Cocina', 'Gestión', 'Creatividad']
    },
    { 
      id: 2, 
      title: t('portfolio.mikko'),
      subtitle: t('portfolio.mikko.subtitle'),
      img: '/img/Software.jpg',
      category: t('portfolio.tech'),
      description: 'Desarrollo de aplicaciones web modernas y sistemas',
      technologies: ['React', 'Next.js', 'TypeScript']
    },
    { 
      id: 3, 
      title: t('portfolio.angelica'),
      subtitle: t('portfolio.angelica.subtitle'),
      img: '/img/DiseñoGrafico.webp',
      category: t('portfolio.design'),
      description: 'Diseño visual y experiencia de usuario',
      technologies: ['UI/UX', 'Figma', 'Adobe']
    },
  ];

  const tags = [
    t('portfolio.posters'),
    t('portfolio.invitations'),
    t('portfolio.banners'),
    t('portfolio.logo'),
    t('portfolio.photography')
  ];

  return (
    <section id="portfolio" className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        
        {/* Header */}
        <div className="text-center mb-16">
          <div className="banking-card p-8 max-w-2xl mx-auto">
            <div className="feature-icon mx-auto mb-4">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z"/>
                <path fillRule="evenodd" d="M4 5a2 2 0 012-2v1a1 1 0 001 1h6a1 1 0 001-1V3a2 2 0 012 2v6a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm3 4a1 1 0 000 2h.01a1 1 0 100-2H7zm3 0a1 1 0 000 2h3a1 1 0 100-2h-3z" clipRule="evenodd"/>
              </svg>
            </div>
            <h2 className="banking-title text-3xl mb-4">
              {t('portfolio.title')}
            </h2>
            <p className="banking-text">
              Explora mis proyectos y experiencias profesionales
            </p>
          </div>
        </div>

        {/* Portfolio Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {projects.map((project) => (
            <div 
              key={project.id} 
              className="banking-card overflow-hidden hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
            >
              {/* Image Container */}
              <div className="relative h-48 overflow-hidden">
                <Image 
                  src={project.img} 
                  alt={project.title} 
                  fill
                  className="object-cover transition-transform duration-500 hover:scale-110"
                />
                
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                
                {/* Category Badge */}
                <div className="absolute top-4 left-4">
                  <span className="bg-white/90 text-gray-800 px-3 py-1 rounded-full text-xs font-semibold">
                    {project.category}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6 space-y-4">
                <div>
                  <h3 className="banking-title text-xl mb-2">
                    {project.title}
                  </h3>
                  <p className="banking-subtitle text-sm mb-3">
                    {project.subtitle}
                  </p>
                  <p className="banking-text text-sm">
                    {project.description}
                  </p>
                </div>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, index) => (
                    <span 
                      key={index}
                      className="bg-blue-50 text-blue-700 px-2 py-1 rounded text-xs font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Action Button */}
                <button className="banking-button w-full text-sm py-2">
                  Ver Detalles
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Statistics Card */}
        <div className="banking-card p-8 mb-12">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold text-blue-600 mb-2">50+</div>
              <div className="banking-text">Proyectos Completados</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-green-600 mb-2">5+</div>
              <div className="banking-text">Años de Experiencia</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-purple-600 mb-2">100%</div>
              <div className="banking-text">Satisfacción del Cliente</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-orange-600 mb-2">24/7</div>
              <div className="banking-text">Soporte Disponible</div>
            </div>
          </div>
        </div>

        {/* Category Tags */}
        <div className="banking-card p-6">
          <h3 className="banking-title text-center mb-6">Especialidades</h3>
          <div className="flex flex-wrap justify-center gap-4">
            {tags.map((tag, index) => (
              <button 
                key={index} 
                className="banking-input px-6 py-2 rounded-full text-sm font-semibold text-gray-700 hover:border-blue-400 hover:text-blue-600 transition-all"
              >
                {tag}
              </button>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}