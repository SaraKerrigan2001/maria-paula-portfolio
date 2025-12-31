'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useLanguage } from '../contexts/LanguageContext';

export default function Navbar() {
  const pathname = usePathname();
  const { currentLanguage, setLanguage, t } = useLanguage();

  const navItems = [
    { name: t('nav.home'), path: '/' },
    { name: t('nav.about'), path: '#about' },
    { name: t('nav.portfolio'), path: '#portfolio' },
    { name: t('nav.contact'), path: '#contact' },
    { name: t('nav.socials'), path: '#socials' },
  ];

  const languages = [
    { code: 'ES' as const, flag: '🇪🇸', name: 'Español' },
    { code: 'EN' as const, flag: '🇺🇸', name: 'English' },
    { code: 'FR' as const, flag: '🇫🇷', name: 'Français' },
  ];

  const handleLanguageChange = (langCode: 'ES' | 'EN' | 'FR') => {
    setLanguage(langCode);
  };

  return (
    <nav className="fixed top-0 w-full z-50 modern-container mx-4 mt-4 rounded-2xl">
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div className="flex flex-col">
            <span className="text-2xl font-black gradient-text uppercase tracking-[3px]">
              {t('nav.title')}
            </span>
            <span className="text-xs neon-text uppercase tracking-[2px] font-medium">
              {t('nav.subtitle')}
            </span>
          </div>
          
          {/* Navigation Menu */}
          <ul className="hidden md:flex gap-8 list-none m-0 p-0">
            {navItems.map((item) => (
              <li key={item.name}>
                <Link 
                  href={item.path}
                  className={`relative px-4 py-2 text-sm font-bold uppercase tracking-wider transition-all duration-300 ${
                    pathname === item.path 
                      ? 'neon-text' 
                      : 'text-white hover:text-cyan-400'
                  }`}
                >
                  {item.name}
                  {pathname === item.path && (
                    <span className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-cyan-400 to-blue-500"></span>
                  )}
                </Link>
              </li>
            ))}
          </ul>

          {/* Language Selector & Mobile Menu */}
          <div className="flex items-center gap-4">
            {/* Language Selector */}
            <div className="relative group">
              <button className="flex items-center gap-2 glass-effect px-3 py-2 rounded-lg hover:bg-cyan-400/10 transition-all">
                <span className="text-lg">{languages.find(lang => lang.code === currentLanguage)?.flag}</span>
                <span className="text-sm font-bold text-white">{currentLanguage}</span>
                <svg className="w-4 h-4 text-cyan-400 transition-transform group-hover:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              
              {/* Dropdown */}
              <div className="absolute top-full right-0 mt-2 language-dropdown rounded-lg border border-cyan-400/20 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 min-w-[140px] z-50">
                {languages.map((lang) => (
                  <button
                    key={lang.code}
                    onClick={() => handleLanguageChange(lang.code)}
                    className={`w-full flex items-center gap-3 px-4 py-3 text-sm hover:bg-cyan-400/10 transition-colors first:rounded-t-lg last:rounded-b-lg ${
                      currentLanguage === lang.code ? 'text-cyan-400 bg-cyan-400/5' : 'text-white'
                    }`}
                  >
                    <span className="text-lg">{lang.flag}</span>
                    <span className="font-medium">{lang.name}</span>
                    {currentLanguage === lang.code && (
                      <svg className="w-4 h-4 ml-auto text-cyan-400" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    )}
                  </button>
                ))}
              </div>
            </div>

            {/* Mobile Menu Button */}
            <button className="md:hidden text-white glass-effect p-2 rounded-lg">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}
