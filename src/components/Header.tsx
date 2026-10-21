import React from 'react';
import { ActivePage, Language } from '../types';
import { translations } from '../utils/i18n';
import { Logo } from './Logo';

interface HeaderProps {
  activePage: ActivePage;
  onPageChange: (page: ActivePage) => void;
  onOpenReservation: () => void;
  currentLang: Language;
  onLanguageChange: (lang: Language) => void;
}

export const Header: React.FC<HeaderProps> = ({
  activePage,
  onPageChange,
  onOpenReservation,
  currentLang,
  onLanguageChange,
}) => {
  const t = translations[currentLang];

  return (
    <header className="sticky top-0 z-40 w-full max-w-full border-b border-white/10 bg-[#111215]/95 subtle-blur transition-all duration-300 font-sans">
      <div className="max-w-7xl mx-auto px-3.5 sm:px-6 lg:px-8">
        {/* Top / Main Navigation Bar */}
        <div className="h-16 sm:h-20 flex items-center justify-between gap-2 sm:gap-4">
          {/* Brand */}
          <div className="flex items-center min-w-0">
            <a
              href="/food"
              onClick={(e) => {
                e.preventDefault();
                onPageChange('food');
              }}
              className="text-left group focus:outline-none flex items-center min-w-0"
              id="brand-logo-btn"
              aria-label="Saime Introverts Homepage"
            >
              <Logo 
                brandName={t.brandName}
                brandTagline={t.brandTagline}
                showText={true}
              />
            </a>
          </div>

          {/* Desktop-only Center 2-Page Primary Navigation Switcher */}
          <nav
            className="hidden md:flex items-center p-1 rounded-full bg-white/[0.05] border border-white/10 shadow-inner"
            id="main-two-page-nav"
          >
            <a
              id="nav-food-btn"
              href="/food"
              onClick={(e) => {
                e.preventDefault();
                onPageChange('food');
              }}
              className={`relative px-5 lg:px-7 py-2 rounded-full text-xs lg:text-sm font-bold tracking-wide transition-all duration-200 ${
                activePage === 'food'
                  ? 'text-white bg-[#e63946] shadow-md shadow-[#e63946]/25'
                  : 'text-white/70 hover:text-white hover:bg-white/5'
              }`}
            >
              <span className="flex items-center gap-2">
                <span className="text-[10px] opacity-75">01</span>
                <span>{t.pageFood}</span>
              </span>
            </a>

            <a
              id="nav-cocktail-btn"
              href="/cocktails"
              onClick={(e) => {
                e.preventDefault();
                onPageChange('cocktail');
              }}
              className={`relative px-5 lg:px-7 py-2 rounded-full text-xs lg:text-sm font-bold tracking-wide transition-all duration-200 ${
                activePage === 'cocktail'
                  ? 'text-white bg-[#e63946] shadow-md shadow-[#e63946]/25'
                  : 'text-white/70 hover:text-white hover:bg-white/5'
              }`}
            >
              <span className="flex items-center gap-2">
                <span className="text-[10px] opacity-75">02</span>
                <span>{t.pageCocktail}</span>
              </span>
            </a>

            <a
              id="nav-articles-btn"
              href="/articles"
              onClick={(e) => {
                e.preventDefault();
                onPageChange('articles');
              }}
              className={`relative px-5 lg:px-7 py-2 rounded-full text-xs lg:text-sm font-bold tracking-wide transition-all duration-200 ${
                activePage === 'articles'
                  ? 'text-white bg-[#e63946] shadow-md shadow-[#e63946]/25'
                  : 'text-white/70 hover:text-white hover:bg-white/5'
              }`}
            >
              <span className="flex items-center gap-2">
                <span className="text-[10px] opacity-75">03</span>
                <span>{t.pageArticles}</span>
              </span>
            </a>
          </nav>

          {/* Right Actions */}
          <div className="flex items-center gap-1.5 sm:gap-3 shrink-0">
            {/* Language Switcher with Flag Emojis */}
            <div
              className="flex items-center p-0.5 rounded-full bg-white/[0.05] border border-white/15 text-[11px] sm:text-xs font-semibold shadow-sm"
              id="language-switcher-container"
            >
              <button
                onClick={() => onLanguageChange('en')}
                className={`px-2 sm:px-3 py-1 sm:py-1.5 rounded-full transition-all flex items-center gap-1 ${
                  currentLang === 'en'
                    ? 'bg-white/20 text-white font-bold shadow-inner'
                    : 'text-white/50 hover:text-white/80'
                }`}
                title="Switch to English"
                id="lang-en-btn"
              >
                <span className="text-xs sm:text-sm">🇬🇧</span>
                <span>EN</span>
              </button>
              <button
                onClick={() => onLanguageChange('vi')}
                className={`px-2 sm:px-3 py-1 sm:py-1.5 rounded-full transition-all flex items-center gap-1 ${
                  currentLang === 'vi'
                    ? 'bg-[#e63946] text-white font-bold shadow-sm shadow-[#e63946]/30'
                    : 'text-white/50 hover:text-white/80'
                }`}
                title="Chuyển sang Tiếng Việt"
                id="lang-vi-btn"
              >
                <span className="text-xs sm:text-sm">🇻🇳</span>
                <span>VI</span>
              </button>
            </div>

            {/* Reserve Table CTA */}
            <button
              onClick={onOpenReservation}
              className="px-3 sm:px-5 py-1.5 sm:py-2.5 rounded-full text-[11px] sm:text-xs font-bold uppercase tracking-wider bg-white hover:bg-[#e63946] text-black hover:text-white transition-all duration-200 shadow-sm active:scale-95 whitespace-nowrap min-h-[34px] sm:min-h-[38px] flex items-center justify-center"
              id="header-reserve-btn"
            >
              <span className="hidden sm:inline">{t.bookTable}</span>
              <span className="sm:hidden">{t.bookTableMobile}</span>
            </button>
          </div>
        </div>

        {/* Mobile Sub-Navigation Bar: Segmented Switcher for 01 Food, 02 Cocktails & 03 Articles */}
        <div className="md:hidden pb-3 pt-0">
          <nav
            className="grid grid-cols-3 p-1 rounded-xl bg-white/[0.05] border border-white/10 shadow-inner w-full gap-1"
            id="mobile-two-page-nav"
          >
            <a
              id="mobile-nav-food-btn"
              href="/food"
              onClick={(e) => {
                e.preventDefault();
                onPageChange('food');
              }}
              className={`py-2 px-1.5 rounded-lg text-xs font-bold tracking-wide transition-all duration-200 flex items-center justify-center gap-1.5 ${
                activePage === 'food'
                  ? 'text-white bg-[#e63946] shadow-sm shadow-[#e63946]/40'
                  : 'text-white/70 hover:text-white hover:bg-white/5'
              }`}
            >
              <span className="text-[10px] opacity-75">01</span>
              <span className="truncate">{t.pageFood}</span>
            </a>

            <a
              id="mobile-nav-cocktail-btn"
              href="/cocktails"
              onClick={(e) => {
                e.preventDefault();
                onPageChange('cocktail');
              }}
              className={`py-2 px-1.5 rounded-lg text-xs font-bold tracking-wide transition-all duration-200 flex items-center justify-center gap-1.5 ${
                activePage === 'cocktail'
                  ? 'text-white bg-[#e63946] shadow-sm shadow-[#e63946]/40'
                  : 'text-white/70 hover:text-white hover:bg-white/5'
              }`}
            >
              <span className="text-[10px] opacity-75">02</span>
              <span className="truncate">{t.pageCocktail}</span>
            </a>

            <a
              id="mobile-nav-articles-btn"
              href="/articles"
              onClick={(e) => {
                e.preventDefault();
                onPageChange('articles');
              }}
              className={`py-2 px-1.5 rounded-lg text-xs font-bold tracking-wide transition-all duration-200 flex items-center justify-center gap-1.5 ${
                activePage === 'articles'
                  ? 'text-white bg-[#e63946] shadow-sm shadow-[#e63946]/40'
                  : 'text-white/70 hover:text-white hover:bg-white/5'
              }`}
            >
              <span className="text-[10px] opacity-75">03</span>
              <span className="truncate">{t.pageArticles}</span>
            </a>
          </nav>
        </div>
      </div>
    </header>
  );
};
