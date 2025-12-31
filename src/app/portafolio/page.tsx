'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';

const proyectos = [
  {
    id: 1,
    title: 'YASMIN BANDEJA',
    subtitle: 'Chef Profesional',
    description: 'Especialista en cocina internacional con más de 5 años de experiencia.',
    image: '/images/COCINA.jpg',
    categoria: 'team',
    tipo: 'CHEF'
  },
  {
    id: 2,
    title: 'MIKKO MAGADIA',
    subtitle: 'Sous Chef',
    description: 'Experto en técnicas culinarias modernas y presentación de platos.',
    image: '/images/Pizza.jpg',
    categoria: 'team',
    tipo: 'SOUS CHEF'
  },
  {
    id: 3,
    title: 'ANGELICA GALAVAN',
    subtitle: 'Pastry Chef',
    description: 'Especialista en repostería y diseño de postres creativos.',
    image: '/images/Cocteleria.jpg',
    categoria: 'team',
    tipo: 'PASTRY'
  }
];

const categorias = [
  { id: 'posters', nombre: 'POSTERS', activo: true },
  { id: 'invitations', nombre: 'INVITATIONS', activo: false },
  { id: 'banners', nombre: 'BANNERS', activo: false },
  { id: 'logo', nombre: 'LOGO', activo: false },
  { id: 'photography', nombre: 'PHOTOGRAPHY', activo: false }
];

const tabs = [
  { id: 'home', nombre: 'HOME', activo: false },
  { id: 'about', nombre: 'ABOUT', activo: false },
  { id: 'portfolio', nombre: 'PORTFOLIO', activo: true },
  { id: 'contact', nombre: 'CONTACT', activo: false },
  { id: 'socials', nombre: 'SOCIALS', activo: false }
];

export default function Portafolio() {
  const [proyectoActual, setProyectoActual] = useState(0);
  const [categoriaActiva, setCategoriaActiva] = useState('posters');
  const [tabActiva, setTabActiva] = useState('portfolio');

  const siguienteProyecto = () => {
    setProyectoActual((prev) => (prev + 1) % proyectos.length);
  };

  const proyectoAnterior = () => {
    setProyectoActual((prev) => (prev - 1 + proyectos.length) % proyectos.length);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-teal-500 via-cyan-600 to-teal-700 p-8">
      <div className="max-w-4xl mx-auto space-y-8">
        
        {/* Header Card - Login Style */}
        <div className="bg-black/30 backdrop-blur-xl rounded-3xl p-8 border border-cyan-400/20 shadow-2xl relative overflow-hidden">
          {/* Search Icon */}
          <div className="absolute top-6 right-6">
            <div className="w-8 h-8 border-2 border-cyan-400 rounded-full flex items-center justify-center">
              <svg className="w-4 h-4 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div className="relative">
              <Image
                src="/images/MaríaP.jpg"
                alt="María Paula"
                width={300}
                height={400}
                className="w-full h-96 object-cover rounded-2xl"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-transparent rounded-2xl"></div>
            </div>
            
            <div className="text-white">
              <div className="mb-4">
                <div className="text-cyan-400 text-sm font-bold mb-2 tracking-wider">GRAPHIC DESIGNER</div>
                <h1 className="text-5xl font-bold mb-2">
                  JERIC<span className="text-cyan-400">PULLA</span>
                </h1>
                <div className="text-cyan-400 text-sm font-semibold tracking-wider">SOCIAL MEDIA INFLUENCER</div>
              </div>
              
              <p className="text-gray-300 mb-8 text-sm leading-relaxed">
                Design That Connects, Engages, and Elevates Your Brand with 
                Creative Templates to Boost Your Business Success.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-center space-x-4">
                  <button className="bg-cyan-500 hover:bg-cyan-400 text-black px-6 py-2 rounded-lg font-bold text-sm transition-all duration-300">
                    LOGIN
                  </button>
                  <div className="flex-1 h-px bg-cyan-400/30"></div>
                </div>
                <div className="text-right">
                  <button className="text-cyan-400 hover:text-cyan-300 text-xs transition-colors">
                    Forgot password?
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* About Section */}
        <div className="bg-black/30 backdrop-blur-xl rounded-3xl p-8 border border-cyan-400/20 shadow-2xl">
          {/* Navigation */}
          <div className="flex items-center justify-between mb-8">
            <div className="flex items-center space-x-4">
              <h2 className="text-2xl font-bold text-cyan-400">JERIC PULLA</h2>
            </div>
            
            <div className="flex space-x-1">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setTabActiva(tab.id)}
                  className={`px-4 py-2 rounded-lg font-semibold text-sm transition-all duration-300 ${
                    tab.id === 'about'
                      ? 'bg-cyan-500 text-black'
                      : 'text-gray-300 hover:text-white hover:bg-white/10'
                  }`}
                >
                  {tab.nombre}
                </button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div className="text-white">
              <h3 className="text-cyan-400 text-lg font-semibold mb-2">Hi there!</h3>
              <h2 className="text-3xl font-bold mb-4">
                I'm <span className="text-cyan-400">JERIC</span>
              </h2>
              <p className="text-cyan-300 text-lg mb-4">A Social Media Influencer & Graphic Designer</p>
              
              <p className="text-gray-300 leading-relaxed mb-6 text-sm">
                With over 5 years of experience in visual design, branding, and content 
                creation, I specialize in creating innovative design solutions that engage 
                audiences and enhance marketing strategies. My unique approach combines 
                creative storytelling with modern design principles. I help brands stand 
                out and create visually compelling content that resonates with their target 
                audiences and drives meaningful engagement across all platforms.
              </p>
              
              <button className="bg-cyan-500 hover:bg-cyan-400 text-black px-6 py-3 rounded-lg font-bold text-sm transition-all duration-300 mb-6">
                READ MORE
              </button>
              
              <div className="flex items-center space-x-4">
                <span className="text-gray-400 text-xs">FOLLOW ME</span>
                <div className="flex space-x-2">
                  <div className="w-6 h-6 bg-cyan-500 rounded-full flex items-center justify-center">
                    <span className="text-black text-xs font-bold">f</span>
                  </div>
                  <div className="w-6 h-6 bg-cyan-500 rounded-full flex items-center justify-center">
                    <span className="text-black text-xs font-bold">ig</span>
                  </div>
                  <div className="w-6 h-6 bg-cyan-500 rounded-full flex items-center justify-center">
                    <span className="text-black text-xs font-bold">tw</span>
                  </div>
                </div>
                <span className="text-gray-400 text-xs">@JERICPULLAFH</span>
              </div>
            </div>
            
            <div className="flex justify-center">
              <div className="relative">
                <Image
                  src="/images/MaríaP.jpg"
                  alt="Jeric Pulla"
                  width={280}
                  height={350}
                  className="rounded-2xl object-cover"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Portfolio Section */}
        <div className="bg-black/30 backdrop-blur-xl rounded-3xl p-8 border border-cyan-400/20 shadow-2xl">
          {/* Navigation */}
          <div className="flex items-center justify-between mb-8">
            <div className="flex items-center space-x-4">
              <h2 className="text-2xl font-bold text-cyan-400">JERIC PULLA</h2>
            </div>
            
            <div className="flex space-x-1">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setTabActiva(tab.id)}
                  className={`px-4 py-2 rounded-lg font-semibold text-sm transition-all duration-300 ${
                    tab.id === 'portfolio'
                      ? 'bg-cyan-500 text-black'
                      : 'text-gray-300 hover:text-white hover:bg-white/10'
                  }`}
                >
                  {tab.nombre}
                </button>
              ))}
            </div>
          </div>

          <div className="mb-8">
            <div className="flex items-center space-x-2 mb-6">
              <div className="w-2 h-2 bg-cyan-400 rounded-full"></div>
              <span className="text-cyan-400 font-semibold text-sm">CONNEXION | TOP ICON</span>
            </div>
            
            {/* Team Carousel */}
            <div className="relative">
              <div className="flex items-center justify-center space-x-6">
                <button 
                  onClick={proyectoAnterior}
                  className="w-10 h-10 bg-cyan-500/20 hover:bg-cyan-500/40 rounded-full flex items-center justify-center text-cyan-400 transition-all duration-300"
                >
                  ←
                </button>
                
                <div className="flex space-x-4">
                  {proyectos.map((proyecto, index) => (
                    <div
                      key={proyecto.id}
                      className={`relative transition-all duration-500 ${
                        index === proyectoActual 
                          ? 'scale-105 z-10' 
                          : 'scale-95 opacity-70'
                      }`}
                    >
                      <div className="w-48 h-64 bg-gradient-to-br from-gray-900 to-black rounded-xl overflow-hidden border border-cyan-400/30 shadow-xl">
                        <div className="relative h-full">
                          <Image
                            src={proyecto.image}
                            alt={proyecto.title}
                            width={192}
                            height={256}
                            className="object-cover h-full w-full"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent"></div>
                          
                          {/* Team Badge */}
                          <div className="absolute top-4 left-4 bg-cyan-500 text-black px-2 py-1 rounded text-xs font-bold">
                            TEAM
                          </div>
                          
                          <div className="absolute bottom-0 left-0 right-0 p-4">
                            <h3 className="text-white font-bold text-lg mb-1">{proyecto.title}</h3>
                            <p className="text-cyan-400 text-sm font-semibold mb-1">{proyecto.tipo}</p>
                            <p className="text-gray-300 text-xs">{proyecto.description}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
                
                <button 
                  onClick={siguienteProyecto}
                  className="w-10 h-10 bg-cyan-500/20 hover:bg-cyan-500/40 rounded-full flex items-center justify-center text-cyan-400 transition-all duration-300"
                >
                  →
                </button>
              </div>
            </div>
          </div>

          {/* Category Buttons */}
          <div className="flex justify-center space-x-3 mt-8">
            {categorias.map((categoria) => (
              <button
                key={categoria.id}
                onClick={() => setCategoriaActiva(categoria.id)}
                className={`px-4 py-2 rounded-lg font-semibold text-xs transition-all duration-300 ${
                  categoriaActiva === categoria.id
                    ? 'bg-cyan-500 text-black'
                    : 'bg-white/10 text-gray-300 hover:text-white hover:bg-white/20'
                }`}
              >
                {categoria.nombre}
              </button>
            ))}
          </div>
        </div>

        {/* Back to Home */}
        <div className="text-center">
          <Link 
            href="/inicio"
            className="inline-flex items-center space-x-2 bg-black/30 backdrop-blur-xl border border-cyan-400/20 text-cyan-400 px-6 py-3 rounded-xl font-bold hover:bg-cyan-400 hover:text-black transition-all duration-300"
          >
            <span>←</span>
            <span>Volver al Inicio</span>
          </Link>
        </div>
      </div>
    </div>
  );
}