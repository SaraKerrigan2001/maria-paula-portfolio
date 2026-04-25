'use client';

const experiences = [
  {
    period: '2023 – 2024',
    role: 'Cocinera Profesional',
    company: 'Restaurante El Sabor',
    description: 'Experiencia sólida en cocina tradicional y moderna. Responsable de preparación, emplatado y trabajo en equipo bajo presión.',
    tags: ['Cocina', 'Emplatado', 'Trabajo en equipo'],
    icon: '🍳',
    color: '#ff6b35',
  },
  {
    period: '2025 – Actualidad',
    role: 'Desarrolladora de Software',
    company: 'Freelance / Proyectos personales',
    description: 'Desarrollo de aplicaciones web con HTML, CSS, JavaScript y frameworks como Bootstrap y Tailwind. Manejo de Git, GitHub y lógica de programación.',
    tags: ['HTML', 'CSS', 'JavaScript', 'Bootstrap', 'Git'],
    icon: '💻',
    color: '#00d4ff',
  },
];

const education = [
  {
    period: '2013 – 2019',
    title: 'Bachillerato',
    institution: 'Colegio Privado Seminario Menor San José de Cúcuta',
    icon: '🎓',
    color: '#a855f7',
  },
  {
    period: '1 año',
    title: 'Diseño Gráfico',
    institution: 'Universidad UDES',
    icon: '🎨',
    color: '#ec4899',
  },
  {
    period: '1 año',
    title: 'Música y Arte',
    institution: 'Escuela de Música y Arte',
    icon: '🎵',
    color: '#22c55e',
  },
  {
    period: '1.5 años',
    title: 'Gastronomía',
    institution: 'Instituto Bolivariano de Esdiseños IBES',
    icon: '👨‍🍳',
    color: '#f59e0b',
  },
];

export default function ExperienceSection() {
  return (
    <section id="experience" className="section-full overflow-hidden">
      <div className="bg-grid" />
      <div className="orb orb-blue w-80 h-80 top-10 right-10 opacity-10" />

      <div className="w-full max-w-5xl mx-auto relative z-10">
        <div className="text-center mb-12">
          <p className="glow-cyan text-sm font-semibold uppercase tracking-widest mb-3">Mi trayectoria</p>
          <h2 className="section-title">
            Experiencia & <span>Educación</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-10">

          {/* ── Experiencia Laboral ── */}
          <div className="space-y-8">
            <h3 className="text-white font-bold text-lg flex items-center gap-2">
              <span className="glow-cyan">💼</span> Experiencia Laboral
            </h3>

            {experiences.map((exp, i) => (
              <div
                key={i}
                className="dark-card rounded-xl flex items-start gap-4"
                style={{ padding: '20px', marginBottom: 20, border: `1px solid ${exp.color}33` }}
              >
                {/* Icon */}
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center text-2xl flex-shrink-0"
                  style={{ background: `${exp.color}18`, border: `1px solid ${exp.color}44` }}
                >
                  {exp.icon}
                </div>

                {/* Content */}
                <div className="flex-1 min-w-0">
                  <p className="text-gray-500 text-xs uppercase tracking-wider mb-1">{exp.period}</p>
                  <h4 className="text-white font-bold text-sm">{exp.role}</h4>
                  <p className="text-sm mt-0.5 mb-2" style={{ color: exp.color }}>{exp.company}</p>
                  <p className="text-gray-400 text-xs leading-relaxed mb-3">{exp.description}</p>
                  <div className="flex flex-wrap gap-1.5">
                    {exp.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-xs px-2.5 py-0.5 rounded-full"
                        style={{ background: `${exp.color}15`, color: exp.color, border: `1px solid ${exp.color}33` }}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* ── Formación Académica ── */}
          <div className="space-y-5">
            <h3 className="text-white font-bold text-lg flex items-center gap-2">
              <span className="glow-cyan">🎓</span> Formación Académica
            </h3>

            {education.map((edu, i) => (
              <div
                key={i}
                className="dark-card rounded-xl flex items-center gap-4"
                style={{ padding: '16px 20px', marginBottom: 16, border: `1px solid ${edu.color}33` }}
              >
                {/* Icon */}
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center text-2xl flex-shrink-0"
                  style={{ background: `${edu.color}18`, border: `1px solid ${edu.color}44` }}
                >
                  {edu.icon}
                </div>

                {/* Content */}
                <div className="flex-1 min-w-0">
                  <p className="text-gray-500 text-xs uppercase tracking-wider mb-1">{edu.period}</p>
                  <h4 className="text-white font-bold text-sm">{edu.title}</h4>
                  <p className="text-gray-400 text-xs mt-0.5 leading-snug">{edu.institution}</p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
