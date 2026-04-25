'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import { useLanguage } from '../contexts/LanguageContext';

export default function Navbar() {
  const pathname = usePathname();
  const { currentLanguage, setLanguage, t } = useLanguage();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

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
    <nav className="fixed top-2 sm:top-6 left-2 sm:left-6 right-2 sm:right-6 z-50">
      <div className="banking-card rounded-xl max-w-7xl mx-auto">
        <div className="px-3 sm:px-4 py-2">
          <div className="flex justify-between items-center">
            {/* Logo */}
            <div className="flex items-center gap-2">
              <div className="w-6 h-6 sm:w-8 sm:h-8 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                <span className="font-bold text-white text-xs sm:text-sm">MP</span>
              </div>
              <div className="flex flex-col">
                <span className="text-xs sm:text-sm font-bold banking-title uppercase tracking-[1px]">
                  {t('nav.title')}
                </span>
                <span className="text-xs banking-subtitle uppercase tracking-[0.5px] font-medium hidden sm:block">
                  {t('nav.subtitle')}
                </span>
              </div>
            </div>
            
            {/* Desktop Navigation Menu */}
            <ul className="hidden md:flex gap-4 list-none m-0 p-0">
              {navItems.map((item) => (
                <li key={item.name}>
                  <Link 
                    href={item.path}
                    className={`relative px-3 py-1.5 text-xs font-semibold uppercase tracking-wider transition-all duration-300 rounded-lg ${
                      pathname === item.path 
                        ? 'bg-gradient-to-r from-blue-500 to-purple-600 text-white' 
                        : 'text-gray-700 hover:bg-blue-50 hover:text-blue-600'
                    }`}
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>

            {/* Language Selector & Mobile Menu */}
            <div className="flex items-center gap-2 sm:gap-4">
              {/* Language Selector */}
              <div className="relative group">
                <button className="flex items-center gap-1 sm:gap-1.5 banking-input px-1.5 sm:px-2 py-1 sm:py-1.5 rounded-lg hover:border-blue-400 transition-all">
                  <span className="text-sm">{languages.find(lang => lang.code === currentLanguage)?.flag}</span>
                  <span className="text-xs font-bold text-gray-700">{currentLanguage}</span>
                  <svg className="w-3 h-3 text-blue-600 transition-transform group-hover:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                
                {/* Dropdown */}
                <div className="absolute top-full right-0 mt-2 banking-card rounded-lg border border-blue-200 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 min-w-[120px] sm:min-w-[140px] z-50">
                  {languages.map((lang) => (
                    <button
                      key={lang.code}
                      onClick={() => handleLanguageChange(lang.code)}
                      className={`w-full flex items-center gap-2 sm:gap-3 px-3 sm:px-4 py-2 sm:py-3 text-xs sm:text-sm hover:bg-blue-50 transition-colors first:rounded-t-lg last:rounded-b-lg ${
                        currentLanguage === lang.code ? 'text-blue-600 bg-blue-50' : 'text-gray-700'
                      }`}
                    >
                      <span className="text-sm sm:text-lg">{lang.flag}</span>
                      <span className="font-medium">{lang.name}</span>
                      {currentLanguage === lang.code && (
                        <svg className="w-3 h-3 sm:w-4 sm:h-4 ml-auto text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      )}
                    </button>
                  ))}
                </div>
              </div>

              {/* Mobile Menu Button */}
              <button 
                className="md:hidden banking-input p-1.5 sm:p-2 rounded-lg"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              >
                <svg className="w-5 h-5 sm:w-6 sm:h-6 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>
            </div>
          </div>

          {/* Mobile Menu */}
          {isMobileMenuOpen && (
            <div className="md:hidden mt-4 pt-4 border-t border-gray-200">
              <ul className="flex flex-col gap-2">
                {navItems.map((item) => (
                  <li key={item.name}>
                    <Link 
                      href={item.path}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className={`block px-3 py-2 text-sm font-semibold uppercase tracking-wider transition-all duration-300 rounded-lg ${
                        pathname === item.path 
                          ? 'bg-gradient-to-r from-blue-500 to-purple-600 text-white' 
                          : 'text-gray-700 hover:bg-blue-50 hover:text-blue-600'
                      }`}
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
}
