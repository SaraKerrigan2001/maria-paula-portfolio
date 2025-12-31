'use client';
import Image from 'next/image';
import { useLanguage } from '../contexts/LanguageContext';

export default function About() {
  const { t } = useLanguage();

  return (
    <section id="about" className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          
          {/* Text Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h4 className="text-xl text-gray-300">{t('about.greeting')}</h4>
              <h1 className="text-5xl md:text-6xl font-black leading-tight">
                {t('about.intro')} <span className="gradient-text">{t('hero.name')}</span>
              </h1>
              <p className="text-xl neon-text uppercase tracking-wider font-bold">
                {t('about.role')}
              </p>
            </div>
            
            <p className="text-gray-300 text-lg leading-relaxed">
              {t('about.description')}
            </p>

            <button className="neon-button">
              {t('about.readmore')}
            </button>

            {/* Social Media Follow Section */}
            <div className="flex items-center gap-4 pt-8">
              <span className="text-white font-bold uppercase tracking-wider">{t('about.follow')}</span>
              <div className="flex gap-3">
                <div className="w-8 h-8 bg-cyan-400 rounded-full flex items-center justify-center">
                  <span className="text-black font-bold">f</span>
                </div>
                <div className="w-8 h-8 bg-cyan-400 rounded-full flex items-center justify-center">
                  <span className="text-black font-bold">t</span>
                </div>
                <div className="w-8 h-8 bg-cyan-400 rounded-full flex items-center justify-center">
                  <span className="text-black font-bold">ig</span>
                </div>
              </div>
              <span className="text-cyan-400 font-bold">{t('about.handle')}</span>
            </div>
          </div>

          {/* Image Content */}
          <div className="flex justify-center">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-400/20 to-blue-500/20 rounded-3xl blur-xl"></div>
              <Image 
                src="/img/MaríaP.jpg" 
                alt="About María Paula" 
                width={400}
                height={500}
                className="relative rounded-3xl shadow-2xl object-cover border-2 border-cyan-400/30"
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}