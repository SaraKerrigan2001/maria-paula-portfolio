'use client';
import Image from 'next/image';

export default function AboutSection() {
  return (
    <section id="about" className="section-full overflow-hidden">
      <div className="bg-grid" />
      <div className="orb orb-purple w-80 h-80 top-20 left-40 opacity-10" />

      <div className="w-full max-w-5xl mx-auto relative z-10">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Image side */}
          <div className="relative animate-fadeInLeft">
            <div className="relative rounded-2xl overflow-hidden" style={{ border: '1px solid rgba(0,212,255,0.2)' }}>
              <Image
                src="/images/maria-paula.jpg"
                alt="María Paula"
                width={500}
                height={600}
                className="w-full object-cover object-top"
                style={{ maxHeight: 480 }}
              />
            </div>
            {/* Decorative border */}
            <div className="absolute -bottom-4 -right-4 w-full h-full rounded-2xl border border-cyan-500/20 -z-10" />
          </div>

          {/* Content side */}
          <div className="animate-fadeInUp">
            <p className="glow-cyan text-sm font-semibold uppercase tracking-widest mb-3">Sobre mí</p>
            <h2 className="section-title mb-6">
              Hola! Soy <span>María Paula</span>
            </h2>
            <p className="text-gray-400 leading-relaxed mb-4">
              Chef y Desarrolladora de Software con 23 años, nacida el 7 de diciembre de 2001 en Cúcuta, Norte de Santander.
              Me apasiona combinar la creatividad culinaria con la tecnología para crear experiencias únicas.
            </p>
            <p className="text-gray-400 leading-relaxed mb-8">
              Estudié Diseño Gráfico en la <strong className="text-white">Universidad UDES</strong>, música y arte en la
              <strong className="text-white"> Escuela de Música y Arte</strong>, y gastronomía en el
              <strong className="text-white"> Instituto Bolivariano IBES</strong>. Actualmente desarrollo proyectos
              de software con HTML, CSS, JavaScript y frameworks modernos.
            </p>

            {/* Info grid */}
            <div className="grid grid-cols-2 gap-4 mb-8">
              {[
                { label: 'Nombre', value: 'María Paula Capacho' },
                { label: 'Edad', value: '23 años' },
                { label: 'Ciudad', value: 'Cúcuta, Colombia' },
                { label: 'Email', value: 'paitocapacho5@gmail.com' },
                { label: 'Teléfono', value: '300 641 0764' },
                { label: 'Disponible', value: 'Sí, para proyectos' },
              ].map((info) => (
                <div key={info.label}>
                  <span className="text-gray-500 text-xs uppercase tracking-wider">{info.label}</span>
                  <p className="text-white text-sm font-medium mt-1">{info.value}</p>
                </div>
              ))}
            </div>

            <a href="#contact" className="btn-primary-custom">Contáctame</a>
          </div>
        </div>
      </div>
    </section>
  );
}
