import React, { useState, useEffect } from 'react';
import { Menu, X, Calendar, Sparkles, Languages, Clock, MapPin, Phone, Instagram, Facebook } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { translations } from '../translations';
import LogoIcon from './LogoIcon';

interface HeaderProps {
  onNavigate: (section: any) => void;
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
  const [isOpenNow, setIsOpenNow] = useState<boolean>(true);
  const [statusText, setStatusText] = useState<string>('');

  const t = translations[lang];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Measure header height dynamically to set CSS custom property
  useEffect(() => {
    const headerEl = document.getElementById('main-header');
    if (!headerEl) return;

    const resizeObserver = new ResizeObserver((entries) => {
      for (const entry of entries) {
        const height = entry.borderBoxSize?.[0]?.blockSize ?? entry.target.getBoundingClientRect().height;
        document.documentElement.style.setProperty('--header-height', `${height}px`);
      }
    });

    resizeObserver.observe(headerEl);
    
    // Initial measure
    const initialHeight = headerEl.getBoundingClientRect().height;
    document.documentElement.style.setProperty('--header-height', `${initialHeight}px`);

    return () => {
      resizeObserver.disconnect();
    };
  }, []);

  // Live status updater based on gathering hours: Daily 8 AM - 11 PM (Fri & Sat till 12 AM)
  useEffect(() => {
    const checkStatus = () => {
      const now = new Date();
      const day = now.getDay(); // 0 = Sunday, ..., 6 = Saturday
      const hours = now.getHours();
      
      const isWeekendSchedule = day === 5 || day === 6; // Friday & Saturday
      const closeHour = isWeekendSchedule ? 24 : 23;
      
      if (hours >= 8 && hours < closeHour) {
        setIsOpenNow(true);
        setStatusText(
          lang === 'en' 
            ? `Open Now • Daily 8 AM - 11 PM (Fri & Sat till 12 AM)` 
            : `Đang Mở Cửa • Hằng ngày 08:00 - 23:00 (T6 & T7 tới 00:00)`
        );
      } else {
        setIsOpenNow(false);
        setStatusText(
          lang === 'en' 
            ? `Closed Now • Opens daily at 8:00 AM` 
            : `Đã Đóng Cửa • Mở lại hằng ngày lúc 08:00`
        );
      }
    };

    checkStatus();
    const interval = setInterval(checkStatus, 30000);
    return () => clearInterval(interval);
  }, [lang]);

  const navItems = [
    { label: lang === 'en' ? 'Menu' : 'Thực Đơn', value: 'menu' },
    { label: lang === 'en' ? 'Tastings' : 'Trải Nghiệm', value: 'tasting' },
    { label: lang === 'en' ? 'Cinema' : 'Phim Ảnh', value: 'movie-night' },
    { label: lang === 'en' ? 'Games' : 'Trò Chơi', value: 'board-games' },
    { label: lang === 'en' ? 'Puzzles' : 'Trí Tuệ', value: 'day-puzzles' },
  ];

  const handleItemClick = (sectionValue: string) => {
    onNavigate(sectionValue);
    setIsOpen(false);
  };

  const toggleLanguage = () => {
    setLang(lang === 'en' ? 'vn' : 'en');
  };

  return (
    <header
      id="main-header"
      className="fixed top-0 left-0 right-0 z-50 flex flex-col transition-all duration-300 select-none"
    >
      {/* Dynamic Announcement & Location Bar (Airbnb Style) */}
      <div className="w-full text-white py-2 px-4 sm:px-6 lg:px-8 bg-[#121212] border-b border-neutral-800 select-none">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-2 text-[11px] font-sans font-medium tracking-wide">
          
          {/* Left: Dynamic Open / Close Badge */}
          <div className="flex items-center gap-2">
            <span className="relative flex h-2 w-2">
              <span className={`animate-ping absolute inline-flex h-full w-full rounded-full opacity-75 ${isOpenNow ? 'bg-emerald-400' : 'bg-rose-400'}`}></span>
              <span className={`relative inline-flex rounded-full h-2 w-2 ${isOpenNow ? 'bg-emerald-500' : 'bg-rose-500'}`}></span>
            </span>
            <span className="text-white/90 font-semibold">{statusText}</span>
          </div>

          {/* Center: Address Link */}
          <a 
            href="https://www.google.com/maps/search/?api=1&query=Saime+Kitchen+%26+Bar+144+Ly+Thai+To+Hoi+An"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 text-white/70 hover:text-white transition-colors underline decoration-dotted"
          >
            <MapPin className="w-3.5 h-3.5 text-rose-500 shrink-0" />
            <span>144 Ly Thai To, Hoi An</span>
          </a>

          {/* Right: Social & Phone Links */}
          <div className="flex items-center gap-4 text-white/70">
            <a href="tel:+84389446975" className="hover:text-white transition-colors flex items-center gap-1">
              <Phone className="w-3.5 h-3.5 text-emerald-500" />
              <span>+84 389 446 975</span>
            </a>
            <div className="hidden sm:flex items-center gap-2 border-l border-white/10 pl-4">
              <a href="https://www.instagram.com/saime_kitchen.bar/" target="_blank" rel="noreferrer" className="hover:text-white transition-colors">
                <Instagram className="w-3.5 h-3.5" />
              </a>
              <a href="https://www.facebook.com/profile.php?id=61589897489896" target="_blank" rel="noreferrer" className="hover:text-white transition-colors">
                <Facebook className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <div
        className={`w-full bg-white/95 backdrop-blur-md transition-all duration-300 border-b ${
          isScrolled
            ? 'py-3.5 shadow-sm border-neutral-100'
            : 'py-4.5 border-neutral-150'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            
            {/* Logo Brand Accent (Airbnb elegant styling) */}
              <div
                id="brand-logo"
                onClick={() => handleItemClick('hero')}
                className="flex items-center gap-2 cursor-pointer group shrink-0"
              >
                <LogoIcon className="w-8 h-8 sm:w-9 sm:h-9 text-rose-600 shrink-0 transition-transform group-hover:scale-105" />
                <div className="flex flex-col">
                  <span className="font-logo text-lg sm:text-2xl text-neutral-dark font-black tracking-tight leading-none group-hover:text-rose-600 transition-colors">
                    Saime <span className="text-rose-600">Kitchen & Bar</span>
                  </span>
                  <span className="text-[9px] font-sans text-neutral-500 font-bold uppercase tracking-widest mt-0.5 leading-none">
                    Hoi An Gathering
                  </span>
                </div>
              </div>

            {/* Desktop Navigation - Clean Airbnb Category Tabs */}
            <nav id="desktop-nav" className="hidden lg:flex items-center gap-1">
              {navItems.map((item) => {
                const isActive = activeSection === item.value || (activeSection === 'hero' && item.value === 'menu');
                return (
                  <button
                    key={item.value}
                    id={`nav-item-${item.value}`}
                    onClick={() => handleItemClick(item.value)}
                    className={`relative font-sans font-semibold text-xs uppercase tracking-wider px-4 py-2 rounded-full transition-all cursor-pointer ${
                      isActive
                        ? 'bg-neutral-900 text-white shadow-xs'
                        : 'text-neutral-600 hover:text-neutral-900 hover:bg-neutral-50'
                    }`}
                  >
                    {item.label}
                  </button>
                );
              })}
            </nav>

            {/* Action Buttons (Language, Reservation) */}
            <div className="hidden md:flex items-center gap-3">
              {/* Language Switcher */}
              <button
                id="lang-switcher-btn"
                onClick={toggleLanguage}
                className="px-3.5 py-2 rounded-full bg-white hover:bg-neutral-50 border border-neutral-200 text-neutral-700 font-sans text-xs font-semibold flex items-center gap-1.5 cursor-pointer transition-all shadow-xs"
                title="Switch Language / Đổi Ngôn Ngữ"
              >
                <Languages className="w-3.5 h-3.5 text-neutral-500" />
                <span className="font-bold">{lang === 'en' ? 'VN' : 'EN'}</span>
              </button>

              {/* Host Event Button */}
              <button
                id="header-booking-btn"
                onClick={() => handleItemClick('reservation')}
                className="px-5 py-2 rounded-full bg-rose-600 hover:bg-rose-700 text-white font-sans font-bold text-xs tracking-wide shadow-sm hover:shadow-md transition-all flex items-center gap-1.5 cursor-pointer"
              >
                <Sparkles className="w-3.5 h-3.5 text-white" />
                {lang === 'en' ? 'Host Event' : 'Hợp Tác Sự Kiện'}
              </button>
            </div>

            {/* Mobile Menu Action Icon */}
            <div className="flex lg:hidden items-center gap-2">
              {/* Mobile Language Switcher */}
              <button
                onClick={toggleLanguage}
                className="px-3 py-1.5 rounded-full bg-white text-neutral-700 font-sans font-bold text-[11px] border border-neutral-200 flex items-center gap-1 cursor-pointer"
              >
                <Languages className="w-3.5 h-3.5 text-neutral-500" />
                <span>{lang === 'en' ? 'VN' : 'EN'}</span>
              </button>

              <button
                id="mobile-menu-hamburger"
                onClick={() => setIsOpen(!isOpen)}
                className="p-2 rounded-full bg-white border border-neutral-200 text-neutral-700 focus:outline-none transition-colors cursor-pointer flex items-center justify-center"
                aria-label="Toggle Menu"
              >
                {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>
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
            transition={{ duration: 0.25, ease: 'easeInOut' }}
            className="lg:hidden bg-white border-b border-neutral-200 overflow-hidden shadow-md"
          >
            <div className="px-4 pt-2 pb-6 space-y-1">
              {navItems.map((item) => (
                <button
                  key={item.value}
                  id={`mobile-nav-item-${item.value}`}
                  onClick={() => handleItemClick(item.value)}
                  className={`block w-full text-left px-4 py-3 rounded-xl font-sans font-bold text-xs uppercase tracking-wider transition-colors ${
                    activeSection === item.value || (activeSection === 'hero' && item.value === 'menu')
                      ? 'bg-neutral-900 text-white'
                      : 'text-neutral-700 hover:bg-neutral-50'
                  }`}
                >
                  {item.label}
                </button>
              ))}
              
              <div className="pt-3 flex flex-col gap-2">
                <button
                  id="mobile-drawer-reserve-btn"
                  onClick={() => handleItemClick('reservation')}
                  className="w-full py-3.5 rounded-xl bg-rose-600 text-white font-sans font-bold text-xs uppercase tracking-wider shadow-sm flex items-center justify-center gap-2 cursor-pointer"
                >
                  <Calendar className="w-4 h-4 text-white" />
                  {lang === 'en' ? 'Book / Host Now' : 'Liên Hệ Đặt Bàn'}
                </button>
              </div>

              {/* Mobile Info & Dynamic Hours block directly inside the mobile drawer */}
              <div className="mt-5 pt-4 border-t border-neutral-100 flex flex-col gap-3 text-xs text-neutral-500">
                <div className="flex items-center gap-2 font-medium">
                  <Clock className="w-4 h-4 text-rose-500" />
                  <span>{lang === 'en' ? 'Daily 8 AM - 11 PM (Fri & Sat till 12 AM)' : 'Mỗi ngày 08:00 - 23:00 (T6 & T7 tới 00:00)'}</span>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-rose-500" />
                  <span>144 Ly Thai To, Hoi An</span>
                </div>
                <div className="flex items-center gap-2">
                  <Phone className="w-4 h-4 text-emerald-500" />
                  <span>+84 389 446 975</span>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
