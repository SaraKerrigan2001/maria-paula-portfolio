import Navbar from '../../components/Navbar';
import Gallery from '../../components/Gallery';

export default function InicioPage() {
  return (
    <main className="min-h-screen bg-slate-900 flex flex-col">
      <Navbar />
      <div className="flex-1 flex items-center justify-center">
        <Gallery />
      </div>
    </main>
  );
}