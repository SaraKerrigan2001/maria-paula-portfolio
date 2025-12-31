'use client';
import Image from 'next/image';
import Link from 'next/link';

export default function Gallery() {
  const items = [
    { title: 'Datos Personales', img: '/img/DatosPersonales.jpg', link: '/datos-personales' },
    { title: 'Habilidades', img: '/img/Habilidades.webp', link: '/habilidades' },
    { title: 'Estudios', img: '/img/DiseñoGrafico.webp', link: '/estudios' },
    { title: 'Cocina', img: '/img/COCINA.jpg', link: '/experiencia' },
    { title: 'Software', img: '/img/Software.jpg', link: '/experiencia' },
    { title: 'Portafolio', img: '/img/Portafolio.jpg', link: '/portafolio' },
  ];

  return (
    <div className="flex flex-col items-center justify-center min-h-[500px]">
      <h2 className="text-3xl font-bold text-cyan-400 mb-8 uppercase tracking-widest">Galería Principal</h2>
      
      <div className="horizontal-gallery w-full">
        {items.map((item, index) => (
          <div key={index} className="gallery-item group">
            <div className="relative w-[150px] h-[150px]">
                <Image 
                src={item.img} 
                alt={item.title} 
                fill
                className="img-circle-button"
                />
            </div>
            <Link href={item.link} className="mt-4 inline-block bg-blue-600 text-white py-2 px-6 rounded hover:bg-blue-700 transition-colors">
              {item.title}
            </Link>
          </div>
        ))}
      </div>
      
       <div className="text-center mt-12">
        <Link href="/" className="bg-cyan-400 text-slate-900 py-3 px-8 rounded font-bold hover:bg-cyan-300 transition-colors">
          Volver al Inicio
        </Link>
      </div>
    </div>
  );
}
