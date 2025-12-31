import Link from 'next/link';
import Image from 'next/image';

const seminarios = [
  {
    title: 'Parrilla VS Barril',
    image: '/images/ParrillaVSBarril.png',
    description: 'Hice un seminario sobre Parrilla VS Barril. Puedo utilizarlas de ambas maneras, pero con diferentes formas de preparación.'
  },
  {
    title: 'Coctelería',
    image: '/images/Cocteleria.jpg',
    description: 'También hice un seminario de Coctelería sobre los diferentes tipos de cócteles.'
  }
];

export default function ExperienciaCocina() {
  return (
    <div className="min-h-screen bg-slate-900 text-white py-8 px-4">
      <div className="max-w-4xl mx-auto">
        
        {/* Experiencia Laboral */}
        <div className="card-custom mb-8">
          <div className="bg-slate-700 px-6 py-4 rounded-t-lg">
            <h1 className="text-2xl font-bold">Experiencia Laboral</h1>
          </div>
          <div className="p-6">
            <div className="border-l-4 border-blue-400 pl-4">
              <h2 className="text-xl font-bold text-blue-400 mb-1">Cocinero</h2>
              <p className="text-gray-400 text-sm mb-2">Restaurante El Sabor — 2023 - 2024</p>
              <p className="text-gray-300">
                Experiencia sólida en cocina tradicional y moderna. Responsable de preparación, 
                emplatado y trabajo en equipo bajo presión.
              </p>
            </div>
          </div>
        </div>

        {/* Seminarios */}
        <section className="mb-8">
          <h2 className="text-3xl font-bold text-blue-400 text-center mb-8">
            Seminarios
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {seminarios.map((seminario, index) => (
              <div key={index} className="card-custom h-full">
                <Image
                  src={seminario.image}
                  alt={seminario.title}
                  width={400}
                  height={220}
                  className="w-full h-56 object-cover rounded-lg mb-4"
                />
                <h3 className="text-xl font-bold text-blue-400 mb-3">
                  {seminario.title}
                </h3>
                <p className="text-gray-300 flex-grow">
                  {seminario.description}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Resumen Profesional */}
        <div className="card-custom border-green-500 mb-8">
          <div className="bg-green-600/20 border-green-500 px-6 py-4 rounded-t-lg border-b">
            <h2 className="text-xl font-bold text-green-400">Resumen Profesional</h2>
          </div>
          <div className="p-6">
            <p className="text-gray-300">
              Chef con experiencia en cocina tradicional y moderna, especializada en técnicas 
              de parrilla y coctelería. Capacidad de trabajo bajo presión y liderazgo en equipo.
            </p>
          </div>
        </div>

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