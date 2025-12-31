'use client';
import Image from 'next/image';
import Link from 'next/link';
import { useLanguage } from '../contexts/LanguageContext';

export default function Hero() {
  const { t } = useLanguage();

  return (
    <section className="min-h-screen flex items-center justify-center relative pt-24 px-4">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        
        {/* Content Section */}
        <div className="text-center md:text-left space-y-8">
          <div className="space-y-4">
            <h3 className="text-lg font-bold uppercase tracking-[3px] neon-text">
              {t('hero.designer')}
            </h3>
            
            <h1 className="text-6xl md:text-8xl font-black uppercase tracking-[5px] gradient-text leading-none">
              {t('hero.name')}
            </h1>
            
            <h3 className="text-lg font-bold uppercase tracking-[3px] neon-text">
              {t('hero.subtitle')}
            </h3>
          </div>

          <p className="text-gray-300 text-lg leading-relaxed max-w-lg mx-auto md:mx-0">
            {t('hero.description')}
          </p>

          {/* Login Section */}
          <div className="space-y-6">
            <div className="flex flex-col sm:flex-row gap-4 items-center justify-center md:justify-start">
              <input 
                type="text" 
                placeholder={t('hero.placeholder')}
                className="glass-effect px-6 py-3 rounded-lg text-white placeholder-gray-400 outline-none focus:border-cyan-400 transition-all w-full sm:w-64"
              />
              <button className="neon-button w-full sm:w-auto">
                {t('hero.login')}
              </button>
            </div>
            
            <div className="text-center md:text-left">
              <Link href="#" className="text-cyan-400 hover:text-cyan-300 transition-colors text-sm">
                {t('hero.forgot')}
              </Link>
            </div>
          </div>
        </div>

        {/* Image Section */}
        <div className="flex justify-center">
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-400/20 to-blue-500/20 rounded-3xl blur-xl"></div>
            <Image 
              src="/img/MaríaP.jpg" 
              alt="María Paula Capacho González" 
              width={400}
              height={500}
              className="relative rounded-3xl shadow-2xl object-cover border-2 border-cyan-400/30"
              priority
            />
          </div>
        </div>

      </div>
    </section>
  );
}