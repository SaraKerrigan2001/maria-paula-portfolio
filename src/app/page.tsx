'use client';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import About from '../components/About';
import Portfolio from '../components/Portfolio';
import Chatbot from '../components/Chatbot';
import { useLanguage } from '../contexts/LanguageContext';

export default function Home() {
  const { t } = useLanguage();

  return (
    <main className="min-h-screen bg-gradient-hero">
      <Navbar />
      <Hero />
      <About />
      <Portfolio />
      
      {/* Contact Section */}
      <section id="contact" className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-black uppercase tracking-wider gradient-text mb-8">
            {t('contact.title')}
          </h2>
          <p className="text-gray-300 text-lg mb-8">
            {t('contact.description')}
          </p>
          <button className="neon-button">
            {t('contact.send')}
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 border-t border-cyan-400/20">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-gray-400">
            {t('footer.rights')}
          </p>
        </div>
      </footer>

      {/* Chatbot */}
      <Chatbot />
    </main>
  );
}