import Link from 'next/link';
import Image from 'next/image';

const estudios = [
  {
    titulo: 'Técnico en Cocina',
    institucion: 'Instituto Gastronómico',
    periodo: '2022 - 2023',
    descripcion: 'Formación integral en técnicas culinarias, manejo de alimentos y administración de cocina.',
    imagen: '/images/COCINA.jpg'
  },
  {
    titulo: 'Desarrollo de Software',
    institucion: 'Autodidacta / Cursos Online',
    periodo: '2023 - Presente',
    descripcion: 'Aprendizaje continuo en tecnologías web: HTML, CSS, JavaScript, React y Next.js.',
    imagen: '/images/Software.jpg'
  },
  {
    titulo: 'Diseño Gráfico',
    institucion: 'Cursos Especializados',
    periodo: '2021 - 2022',
    descripcion: 'Fundamentos de diseño, composición visual y herramientas digitales.',
    imagen: '/images/DiseñoGrafico.webp'
  }
];

const certificaciones = [
  'Seminario de Parrilla VS Barril',
  'Curso de Coctelería Profesional',
  'Manipulación de Alimentos',
  'Fundamentos de Programación Web'
];

export default function Estudios() {
  return (
    <div className="min-h-screen bg-slate-900 text-white py-8 px-4">
      <div className="max-w-6xl mx-auto">
        <header className="text-center mb-12">
          <h1 className="text-4xl font-bold text-blue-400 mb-4">
            Formación Académica
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Mi trayectoria educativa combinando pasión por la cocina y tecnología
          </p>
        </header>

        {/* Estudios Principales */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-blue-400 mb-8 text-center">
            Educación
          </h2>
          
          <div className="space-y-8">
            {estudios.map((estudio, index) => (
              <div key={index} className="card-custom flex flex-col md:flex-row gap-6">
                <div className="md:w-1/3">
                  <Image
                    src={estudio.imagen}
                    alt={estudio.titulo}
                    width={300}
                    height={200}
                    className="w-full h-48 object-cover rounded-lg"
                  />
                </div>
                
                <div className="md:w-2/3">
                  <h3 className="text-2xl font-bold text-blue-400 mb-2">
                    {estudio.titulo}
                  </h3>
                  <p className="text-lg text-gray-400 mb-2">
                    {estudio.institucion}
                  </p>
                  <p className="text-sm text-blue-300 mb-4">
                    {estudio.periodo}
                  </p>
                  <p className="text-gray-300">
                    {estudio.descripcion}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Certificaciones */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-blue-400 mb-8 text-center">
            Certificaciones y Seminarios
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {certificaciones.map((cert, index) => (
              <div key={index} className="card-custom">
                <div className="flex items-center">
                  <div className="w-3 h-3 bg-blue-400 rounded-full mr-3"></div>
                  <span className="text-gray-300">{cert}</span>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Objetivos de Aprendizaje */}
        <section className="mb-12">
          <div className="card-custom bg-gradient-to-r from-blue-600/20 to-purple-600/20 border-blue-500">
            <h2 className="text-2xl font-bold text-blue-400 mb-4">
              Objetivos de Aprendizaje 2025
            </h2>
            <ul className="space-y-2 text-gray-300">
              <li>• Profundizar en frameworks de JavaScript (React, Next.js)</li>
              <li>• Aprender desarrollo backend con Node.js</li>
              <li>• Obtener certificación en técnicas culinarias avanzadas</li>
              <li>• Desarrollar habilidades en bases de datos</li>
              <li>• Crear mi primer videojuego independiente</li>
            </ul>
          </div>
        </section>

        <div className="text-center">
          <Link 
            href="/inicio"
            className="bg-blue-600 text-white px-6 py-3 rounded hover:bg-blue-700 transition-colors"
          >
            Volver al Inicio
          </Link>
        </div>
      </div>
    </div>
  );
}