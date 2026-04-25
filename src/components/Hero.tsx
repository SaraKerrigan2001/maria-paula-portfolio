'use client';
import { useLanguage } from '../contexts/LanguageContext';

export default function Hero() {
  const { t } = useLanguage();

  return (
    <section className="min-h-screen flex items-center justify-center relative pt-24 sm:pt-40 px-2 sm:px-2">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-16 w-full">
        
        {/* Left Card - Features */}
        <div className="banking-card p-4 sm:p-5 h-full flex flex-col max-h-[60vh] sm:max-h-[70vh]">
          {/* Logo/Brand */}
          <div className="text-center mb-2 sm:mb-3">
            <div className="w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl flex items-center justify-center mx-auto mb-1 sm:mb-2">
              <span className="text-white font-bold text-sm sm:text-base">MP</span>
            </div>
            <h1 className="banking-title text-lg sm:text-xl">{t('hero.name')}</h1>
            <p className="banking-subtitle text-xs">{t('hero.system.title')}</p>
          </div>

          {/* Features */}
          <div className="space-y-1.5 sm:space-y-2 mb-2 sm:mb-3 flex-1">
            <div className="flex items-center gap-2 sm:gap-3">
              <div className="w-6 h-6 sm:w-8 sm:h-8 bg-green-500 rounded-full flex items-center justify-center">
                <svg className="w-3 h-3 sm:w-4 sm:h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
              </div>
              <div>
                <h3 className="font-semibold text-gray-800 text-xs sm:text-sm">{t('hero.experience.title')}</h3>
                <p className="text-xs banking-text">{t('hero.experience.desc')}</p>
              </div>
            </div>

            <div className="flex items-center gap-2 sm:gap-3">
              <div className="w-6 h-6 sm:w-8 sm:h-8 bg-blue-500 rounded-full flex items-center justify-center">
                <svg className="w-3 h-3 sm:w-4 sm:h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div>
                <h3 className="font-semibold text-gray-800 text-xs sm:text-sm">{t('hero.management.title')}</h3>
                <p className="text-xs banking-text">{t('hero.management.desc')}</p>
              </div>
            </div>

            <div className="flex items-center gap-2 sm:gap-3">
              <div className="w-6 h-6 sm:w-8 sm:h-8 bg-orange-500 rounded-full flex items-center justify-center">
                <svg className="w-3 h-3 sm:w-4 sm:h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                </svg>
              </div>
              <div>
                <h3 className="font-semibold text-gray-800 text-xs sm:text-sm">{t('hero.realtime.title')}</h3>
                <p className="text-xs banking-text">{t('hero.realtime.desc')}</p>
              </div>
            </div>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-2 gap-1.5 sm:gap-2 mb-2 sm:mb-3">
            <div className="banking-card-dark p-1.5 sm:p-2 rounded-lg text-center">
              <div className="text-sm sm:text-base font-bold text-blue-400 mb-1">5+</div>
              <div className="text-xs text-gray-300">{t('hero.years')}</div>
            </div>
            <div className="banking-card-dark p-1.5 sm:p-2 rounded-lg text-center">
              <div className="text-sm sm:text-base font-bold text-green-400 mb-1">50+</div>
              <div className="text-xs text-gray-300">{t('hero.projects')}</div>
            </div>
          </div>

          {/* Access Button */}
          <button className="banking-button w-full text-xs py-1.5 sm:py-2">
            {t('hero.access.portfolio')}
          </button>
        </div>

        {/* Right Card - Profile Info */}
        <div className="banking-card p-4 sm:p-5 h-full flex flex-col max-h-[60vh] sm:max-h-[70vh]">
          <div className="text-center mb-2 sm:mb-3">
            <div className="w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl flex items-center justify-center mx-auto mb-1 sm:mb-2">
              <svg className="w-5 h-5 sm:w-6 sm:h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
              </svg>
            </div>
            <h2 className="banking-title text-lg sm:text-xl">{t('hero.name')}</h2>
            <p className="banking-subtitle text-xs">{t('hero.profile.title')}</p>
          </div>

          {/* Contact Info */}
          <div className="space-y-1.5 sm:space-y-2 mb-2 sm:mb-3 flex-1">
            <div className="flex items-center gap-2 sm:gap-3">
              <div className="w-6 h-6 sm:w-8 sm:h-8 bg-blue-600 rounded-full flex items-center justify-center">
                <svg className="w-3 h-3 sm:w-4 sm:h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"/>
                  <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"/>
                </svg>
              </div>
              <div>
                <h3 className="font-semibold text-gray-800 text-xs sm:text-sm">{t('hero.email.title')}</h3>
                <p className="text-xs banking-text">{t('hero.email.value')}</p>
              </div>
            </div>

            <div className="flex items-center gap-2 sm:gap-3">
              <div className="w-6 h-6 sm:w-8 sm:h-8 bg-green-600 rounded-full flex items-center justify-center">
                <svg className="w-3 h-3 sm:w-4 sm:h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"/>
                </svg>
              </div>
              <div>
                <h3 className="font-semibold text-gray-800 text-xs sm:text-sm">{t('hero.phone.title')}</h3>
                <p className="text-xs banking-text">{t('hero.phone.value')}</p>
              </div>
            </div>

            <div className="flex items-center gap-2 sm:gap-3">
              <div className="w-6 h-6 sm:w-8 sm:h-8 bg-purple-600 rounded-full flex items-center justify-center">
                <svg className="w-3 h-3 sm:w-4 sm:h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd"/>
                </svg>
              </div>
              <div>
                <h3 className="font-semibold text-gray-800 text-xs sm:text-sm">{t('hero.location.title')}</h3>
                <p className="text-xs banking-text">{t('hero.location.value')}</p>
              </div>
            </div>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-2 gap-1.5 sm:gap-2 mb-2 sm:mb-3">
            <div className="banking-card-dark p-1.5 sm:p-2 rounded-lg text-center">
              <div className="text-sm sm:text-base font-bold text-purple-400 mb-1">3</div>
              <div className="text-xs text-gray-300">{t('hero.languages')}</div>
            </div>
            <div className="banking-card-dark p-1.5 sm:p-2 rounded-lg text-center">
              <div className="text-sm sm:text-base font-bold text-orange-400 mb-1">100%</div>
              <div className="text-xs text-gray-300">{t('hero.satisfaction')}</div>
            </div>
          </div>

          <button className="banking-button w-full text-xs py-1.5 sm:py-2">
            {t('hero.view.complete')}
          </button>
        </div>

      </div>
    </section>
  );
}