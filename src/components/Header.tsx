import { useState, useEffect } from 'react';
import { Menu, X, Calendar, Sparkles, Languages, Instagram, Facebook } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { translations } from '../translations';
import LogoIcon from './LogoIcon';

interface HeaderProps {
  onNavigate: (section: 'hero' | 'tasting' | 'menu' | 'reservation') => void;
  activeSection: string;
  lang: 'en' | 'vn';
  setLang: (lang: 'en' | 'vn') => void;
}

export default function Header({ 
  onNavigate, 
  activeSection, 
  lang, 
  setLang
}: HeaderProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const t = translations[lang];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: t.tastingNav, value: 'tasting' },
    { label: t.menuNav, value: 'menu' },
    { label: t.bookingNav, value: 'reservation' },
  ];

  const handleItemClick = (sectionValue: 'hero' | 'tasting' | 'menu' | 'reservation') => {
    onNavigate(sectionValue);
    setIsOpen(false);
  };

  const toggleLanguage = () => {
    setLang(lang === 'en' ? 'vn' : 'en');
  };

  return (
    <header
      id="main-header"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#fefcf9]/70 backdrop-blur-xl border-b border-white/50 py-2.5 shadow-[0_8px_32px_rgba(31,38,135,0.04),inset_0_1px_1.5px_rgba(255,255,255,0.85)]'
          : 'bg-[#fefcf9]/60 backdrop-blur-lg lg:bg-transparent py-3.5 lg:py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo Brand Accent */}
          <div
            id="brand-logo"
            onClick={() => handleItemClick('hero')}
            className="flex items-center gap-1.5 sm:gap-2.5 cursor-pointer group shrink-0"
          >
            <LogoIcon className="w-8 h-8 sm:w-[42px] sm:h-[42px] text-primary shrink-0" />
            <div className="flex flex-col">
              <span className="font-logo text-base sm:text-2xl text-neutral-dark group-hover:text-primary transition-colors flex items-center gap-1 leading-none">
                Saime <span className="text-primary hidden min-[380px]:inline">Kitchen & Bar</span><span className="text-primary min-[380px]:hidden">K&B</span>
              </span>
              <div className="hidden min-[380px]:flex items-center gap-1 text-[8px] sm:text-[9px] font-mono text-tropical font-bold uppercase tracking-wider">
                <Sparkles className="w-2.5 h-2.5 text-primary fill-primary animate-pulse" />
                {lang === 'en' ? 'Bespoke gatherings' : 'Ẩm thực tinh tế'}
              </div>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav id="desktop-nav" className="hidden lg:flex items-center gap-7">
            {navItems.map((item) => (
              <button
                key={item.value}
                id={`nav-item-${item.value}`}
                onClick={() => handleItemClick(item.value as any)}
                className={`relative font-display font-semibold text-[14px] tracking-wide py-1 text-neutral-dark hover:text-primary transition-colors duration-200 cursor-pointer ${
                  activeSection === item.value ? 'text-primary' : 'text-neutral-dark'
                }`}
              >
                {item.label}
                {activeSection === item.value && (
                  <motion.div
                    layoutId="activeNavIndicator"
                    className="absolute -bottom-1.5 left-0 right-0 h-0.5 bg-primary rounded-full"
                    transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                  />
                )}
              </button>
            ))}
          </nav>

          {/* Action Buttons (Language, Reservation) */}
          <div className="hidden md:flex items-center gap-3">
            {/* Highly viewable social icons */}
            <div className="flex items-center gap-1 bg-sand/40 border border-sand-dark/10 px-2 py-0.5 rounded-full shadow-xs">
              <a
                href="https://www.instagram.com/saime_kitchen.bar/"
                target="_blank"
                rel="noreferrer"
                className="p-1.5 hover:bg-primary/10 text-neutral-dark hover:text-primary rounded-full transition-colors cursor-pointer flex items-center justify-center"
                aria-label="Instagram Page"
                title="Follow us on Instagram"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href="https://www.facebook.com/profile.php?id=61589897489896"
                target="_blank"
                rel="noreferrer"
                className="p-1.5 hover:bg-primary/10 text-neutral-dark hover:text-primary rounded-full transition-colors cursor-pointer flex items-center justify-center"
                aria-label="Facebook Page"
                title="Follow us on Facebook"
              >
                <Facebook className="w-4 h-4" />
              </a>
              <a
                href="https://www.tiktok.com/@saime.kitchen.bar?lang=en"
                target="_blank"
                rel="noreferrer"
                className="p-1.5 hover:bg-primary/10 text-neutral-dark hover:text-primary rounded-full transition-colors cursor-pointer flex items-center justify-center"
                aria-label="TikTok Page"
                title="Follow us on TikTok"
              >
                <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                  <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.17-2.86-.74-3.94-1.74-.22-.22-.44-.45-.63-.7-.01 2.05-.01 4.11-.01 6.16 0 1.54-.31 3.14-1.12 4.46-1.15 1.98-3.32 3.32-5.61 3.49-1.99.18-4.14-.35-5.63-1.75-1.92-1.72-2.58-4.66-1.56-7.07.82-1.99 2.76-3.48 4.9-3.76.21-.03.43-.04.64-.05v4.06c-1.1.26-2.11 1.09-2.38 2.24-.39 1.56.49 3.33 2.01 3.79 1.15.35 2.5-.04 3.17-1.02.44-.64.55-1.44.53-2.22.02-3.83.01-7.66.01-11.49z"/>
                </svg>
              </a>
            </div>

            {/* Language Switcher */}
            <button
              id="lang-switcher-btn"
              onClick={toggleLanguage}
              className="px-3 py-1.5 rounded-full bg-sand/50 hover:bg-sand border border-sand-dark/20 text-neutral-dark font-sans text-xs font-bold flex items-center gap-1.5 cursor-pointer transition-all"
              title="Switch Language / Đổi Ngôn Ngữ"
            >
              <Languages className="w-3.5 h-3.5 text-tropical" />
              <span>{lang === 'en' ? 'VN' : 'EN'}</span>
            </button>

            <button
              id="header-booking-btn"
              onClick={() => handleItemClick('reservation')}
              className="px-4 py-2 rounded-full bg-primary hover:bg-primary-dark text-white font-display font-bold text-xs tracking-wide shadow-md transition-all hover:translate-y-[-1px] active:translate-y-[0px] flex items-center gap-1.5 cursor-pointer"
            >
              <Sparkles className="w-3.5 h-3.5" />
              {lang === 'en' ? 'Host Event' : 'Hợp Tác Sự Kiện'}
            </button>
          </div>

          {/* Mobile Menu Action Icon */}
          <div className="flex lg:hidden items-center gap-1.5">
            {/* Mobile Language Switcher */}
            <button
              onClick={toggleLanguage}
              className="px-2.5 py-1 rounded-full bg-sand/50 text-neutral-dark font-display font-extrabold text-[10px] border border-sand-dark/30 flex items-center gap-1"
            >
              <Languages className="w-3.5 h-3.5 text-tropical" />
              <span>{lang === 'en' ? 'VN' : 'EN'}</span>
            </button>

            <button
              id="mobile-menu-hamburger"
              onClick={() => setIsOpen(!isOpen)}
              className="p-1.5 rounded-full hover:bg-sand text-neutral-dark focus:outline-none transition-colors cursor-pointer"
              aria-label="Toggle Menu"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer (AnimatePresence slide down) */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            id="mobile-drawer"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="lg:hidden bg-neutral-light border-b border-sand overflow-hidden"
          >
            <div className="px-4 pt-2 pb-6 space-y-2.5">
              {navItems.map((item) => (
                <button
                  key={item.value}
                  id={`mobile-nav-item-${item.value}`}
                  onClick={() => handleItemClick(item.value as any)}
                  className={`block w-full text-left px-4 py-2.5 rounded-xl font-display font-semibold text-base border transition-colors ${
                    activeSection === item.value
                      ? 'bg-primary/5 text-primary border-primary/20'
                      : 'border-transparent text-neutral-dark hover:bg-sand/40'
                  }`}
                >
                  {item.label}
                </button>
              ))}
              <div className="pt-2 flex flex-col gap-2">
                <button
                  id="mobile-drawer-reserve-btn"
                  onClick={() => handleItemClick('reservation')}
                  className="w-full py-3 rounded-xl bg-primary text-white font-display font-bold text-sm tracking-wide shadow-md flex items-center justify-center gap-2 cursor-pointer"
                >
                  <Calendar className="w-4.5 h-4.5" />
                  {lang === 'en' ? 'Book a Table Now' : 'Đặt Bàn Ngay'}
                </button>
              </div>

              {/* Mobile Social Links for high visibility */}
              <div className="pt-4 border-t border-sand-dark/20 flex flex-col items-center gap-2">
                <span className="text-[10px] font-display font-black text-neutral-dark/80 uppercase tracking-wider">
                  {lang === 'en' ? 'Follow our socials to stay connected:' : 'Theo dõi Saime để cập nhật mới nhất:'}
                </span>
                <div className="flex items-center gap-4">
                  <a
                    href="https://www.instagram.com/saime_kitchen.bar/"
                    target="_blank"
                    rel="noreferrer"
                    className="p-2.5 bg-sand/60 hover:bg-primary/10 text-neutral-dark hover:text-primary rounded-full transition-colors flex items-center justify-center"
                    aria-label="Instagram Page"
                  >
                    <Instagram className="w-4.5 h-4.5" />
                  </a>
                  <a
                    href="https://www.facebook.com/profile.php?id=61589897489896"
                    target="_blank"
                    rel="noreferrer"
                    className="p-2.5 bg-sand/60 hover:bg-primary/10 text-neutral-dark hover:text-primary rounded-full transition-colors flex items-center justify-center"
                    aria-label="Facebook Page"
                  >
                    <Facebook className="w-4.5 h-4.5" />
                  </a>
                  <a
                    href="https://www.tiktok.com/@saime.kitchen.bar?lang=en"
                    target="_blank"
                    rel="noreferrer"
                    className="p-2.5 bg-sand/60 hover:bg-primary/10 text-neutral-dark hover:text-primary rounded-full transition-colors flex items-center justify-center"
                    aria-label="TikTok Page"
                  >
                    <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                      <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.17-2.86-.74-3.94-1.74-.22-.22-.44-.45-.63-.7-.01 2.05-.01 4.11-.01 6.16 0 1.54-.31 3.14-1.12 4.46-1.15 1.98-3.32 3.32-5.61 3.49-1.99.18-4.14-.35-5.63-1.75-1.92-1.72-2.58-4.66-1.56-7.07.82-1.99 2.76-3.48 4.9-3.76.21-.03.43-.04.64-.05v4.06c-1.1.26-2.11 1.09-2.38 2.24-.39 1.56.49 3.33 2.01 3.79 1.15.35 2.5-.04 3.17-1.02.44-.64.55-1.44.53-2.22.02-3.83.01-7.66.01-11.49z"/>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
