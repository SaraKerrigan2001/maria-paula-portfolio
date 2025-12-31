import Link from 'next/link';
import Image from 'next/image';

const habilidades = [
  {
    title: 'DIBUJO',
    image: '/images/Dibujos.jpeg',
    description: 'El dibujo lo heredé de ambas partes.'
  },
  {
    title: 'COCINA',
    image: '/images/Pizza.jpg',
    description: 'La cocina la he heredado de mi madre.'
  },
  {
    title: 'PINTURA',
    image: '/images/Lost Canvas.jpeg',
    description: 'La pintura también la heredé de ambas partes.'
  },
  {
    title: 'SOFTWARE',
    image: '/images/Software.jpg',
    description: 'Estoy empezando a estudiarlo, me gusta. Desde niña me gustan los juegos y quise crear uno.'
  }
];

export default function Habilidades() {
  return (
    <div className="min-h-screen bg-slate-900 text-white py-8 px-4">
      <div className="max-w-6xl mx-auto">
        <header className="text-center mb-8">
          <h1 className="text-4xl font-bold text-blue-400 mb-2">
            María Paula Capacho González
          </h1>
          <p className="text-lg">Edad: 23</p>
        </header>

        <div className="card-custom mb-8 max-w-2xl mx-auto">
          <div className="bg-blue-600 text-white text-center font-bold py-3 rounded-t-lg">
            HABILIDADES
          </div>
          <div className="p-6">
            <p className="text-center">
              Mis habilidades son el dibujo y la cocina, la pintura, software, hacer manillas de ligas.
            </p>
          </div>
          <div className="bg-slate-600 text-white text-center py-2 rounded-b-lg">
            Última actualización: 2025
          </div>
        </div>

        <section className="mb-8">
          <h2 className="text-3xl font-bold text-blue-400 text-center mb-8">
            MIS HABILIDADES
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {habilidades.map((habilidad, index) => (
              <div key={index} className="card-custom">
                <Image
                  src={habilidad.image}
                  alt={habilidad.title}
                  width={400}
                  height={200}
                  className="w-full h-48 object-cover rounded-lg mb-4"
                />
                <h3 className="text-xl font-bold text-blue-400 mb-2">
                  {habilidad.title}
                </h3>
                <p className="text-gray-300">
                  {habilidad.description}
                </p>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold text-blue-400 text-center mb-4">
            Contacto
          </h2>
          <div className="text-center space-y-2">
            <p>
              Correo: <a href="mailto:paitocapacho5@gmail.com" className="text-blue-400 hover:underline">paitocapacho5@gmail.com</a>
            </p>
            <p>
              Teléfono: <a href="tel:+573006410764" className="text-blue-400 hover:underline">3006410764</a>
            </p>
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

        <footer className="text-center py-6 mt-8 border-t border-slate-700">
          <p>&copy; 2025 María Paula Capacho González</p>
        </footer>
      </div>
    </div>
  );
}