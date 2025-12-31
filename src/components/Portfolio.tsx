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
      category: t('portfolio.culinary')
    },
    { 
      id: 2, 
      title: t('portfolio.mikko'),
      subtitle: t('portfolio.mikko.subtitle'),
      img: '/img/Software.jpg',
      category: t('portfolio.tech')
    },
    { 
      id: 3, 
      title: t('portfolio.angelica'),
      subtitle: t('portfolio.angelica.subtitle'),
      img: '/img/DiseñoGrafico.webp',
      category: t('portfolio.design')
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
          <div className="flex items-center justify-center gap-4 mb-8">
            <div className="h-1 w-12 bg-cyan-400"></div>
            <h2 className="text-lg font-bold uppercase tracking-[3px] neon-text">
              {t('portfolio.title')}
            </h2>
            <div className="h-1 w-12 bg-cyan-400"></div>
          </div>
        </div>

        {/* Portfolio Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {projects.map((project) => (
            <div 
              key={project.id} 
              className="card-hover modern-container group cursor-pointer overflow-hidden"
            >
              {/* Image Container */}
              <div className="relative h-80 overflow-hidden rounded-t-2xl">
                <Image 
                  src={project.img} 
                  alt={project.title} 
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                
                {/* Overlay with geometric design */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
                
                {/* Geometric overlay design */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="relative">
                    <div className="w-32 h-32 border-2 border-cyan-400 rotate-45 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"></div>
                    <div className="w-24 h-24 border border-white/50 rotate-45 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"></div>
                    <div className="text-4xl font-black text-white absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 -rotate-45">
                      T
                    </div>
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="p-6 text-center space-y-3">
                <h3 className="text-xl font-black uppercase tracking-wider text-white group-hover:text-cyan-400 transition-colors">
                  {project.title}
                </h3>
                <p className="text-gray-400 text-sm">
                  {project.subtitle}
                </p>
                <div className="text-xs font-bold uppercase tracking-[2px] text-cyan-400 border-t border-cyan-400/30 pt-3">
                  {project.category}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Navigation arrows */}
        <div className="flex justify-center gap-4 mb-12">
          <button className="w-12 h-12 glass-effect rounded-full flex items-center justify-center hover:bg-cyan-400/20 transition-colors">
            <span className="text-cyan-400 text-xl">‹</span>
          </button>
          <button className="w-12 h-12 glass-effect rounded-full flex items-center justify-center hover:bg-cyan-400/20 transition-colors">
            <span className="text-cyan-400 text-xl">›</span>
          </button>
        </div>

        {/* Category Tags */}
        <div className="flex flex-wrap justify-center gap-6">
          {tags.map((tag, index) => (
            <button 
              key={index} 
              className="px-6 py-2 glass-effect rounded-full text-sm font-bold text-gray-400 tracking-widest hover:text-cyan-400 hover:bg-cyan-400/10 transition-all"
            >
              {tag}
            </button>
          ))}
        </div>

      </div>
    </section>
  );
}