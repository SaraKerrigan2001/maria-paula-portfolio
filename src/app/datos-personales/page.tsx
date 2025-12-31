import Link from 'next/link';
import Image from 'next/image';

export default function DatosPersonales() {
  return (
    <div className="min-h-screen bg-slate-900 text-white flex items-center justify-center px-4">
      <div className="card-custom text-center max-w-2xl w-full">
        <Image
          src="/images/MaríaP.jpg"
          alt="María Paula Capacho González"
          width={150}
          height={150}
          className="rounded-full border-4 border-blue-400 mx-auto mb-4"
        />
        
        <h1 className="text-3xl font-bold text-blue-400 mb-6">
          María Paula Capacho González
        </h1>
        
        <div className="space-y-3 text-left max-w-md mx-auto">
          <div className="flex justify-between">
            <span className="font-semibold">Edad:</span>
            <span>23 años</span>
          </div>
          <div className="flex justify-between">
            <span className="font-semibold">Perfil Profesional:</span>
            <span>Chef y Desarrolladora de Software</span>
          </div>
          <div className="flex justify-between">
            <span className="font-semibold">Fecha de Nacimiento:</span>
            <span>2001-12-07</span>
          </div>
          <div className="flex justify-between">
            <span className="font-semibold">Correo:</span>
            <span>paitocapacho5@gmail.com</span>
          </div>
          <div className="flex justify-between">
            <span className="font-semibold">Ubicación:</span>
            <span>Cúcuta, Norte de Santander</span>
          </div>
        </div>
        
        <div className="mt-8">
          <Link 
            href="/inicio"
            className="bg-blue-600 text-white px-6 py-3 rounded hover:bg-blue-700 transition-colors"
          >
            Volver
          </Link>
        </div>
      </div>
    </div>
  );
}