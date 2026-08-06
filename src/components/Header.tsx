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
  const [showHeader, setShowHeader] = useState(true);
  const lastScrollY = React.useRef(0);

  const t = translations[lang];

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setIsScrolled(currentScrollY > 30);
      setShowHeader(true);
      lastScrollY.current = currentScrollY;
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
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

  // Live status updater based on gathering hours: Tue-Thu 3 PM - 11 PM | Fri-Sun 3 PM - 11:30 PM | Mon Closed
  useEffect(() => {
    const checkStatus = () => {
      const now = new Date();
      const day = now.getDay(); // 0 = Sun, 1 = Mon, 2 = Tue, 3 = Wed, 4 = Thu, 5 = Fri, 6 = Sat
      const hours = now.getHours();
      const minutes = now.getMinutes();
      const currentMin = hours * 60 + minutes;
      
      let isOpen = false;
      
      if (day !== 1) { // Closed on Monday
        const openMin = 15 * 60; // 3:00 PM (15:00)
        const isLateSchedule = day === 5 || day === 6 || day === 0; // Fri, Sat, Sun
        const closeMin = isLateSchedule ? 23 * 60 + 30 : 23 * 60; // 11:30 PM (23:30) or 11:00 PM (23:00)
        
        if (currentMin >= openMin && currentMin < closeMin) {
          isOpen = true;
        }
      }
      
      setIsOpenNow(isOpen);

      if (isOpen) {
        setStatusText(
          lang === 'en' 
            ? `Open Now • Tue-Thu 3 PM - 11 PM | Fri-Sun till 11:30 PM (Mon Closed)` 
            : `Đang Mở Cửa • T3-T5 15:00 - 23:00 | T6-CN tới 23:30 (Thứ 2 Đóng Cửa)`
        );
      } else {
        setStatusText(
          lang === 'en' 
            ? `Closed Now • Opens Tue-Sun at 3:00 PM (Mon Closed)` 
            : `Đã Đóng Cửa • Mở cửa T3-CN lúc 15:00 (Thứ 2 Đóng Cửa)`
        );
      }
    };

    checkStatus();
    const interval = setInterval(checkStatus, 30000);
    return () => clearInterval(interval);
  }, [lang]);

  const navItems = [
    { label: lang === 'en' ? 'Menu' : 'Thực Đơn', value: 'menu' },
    { label: 'Healthy Menu', value: 'healthy-menu' },
    { label: lang === 'en' ? 'Chess Club' : 'Câu Lạc Bộ Cờ', value: 'chess' },
    { label: lang === 'en' ? 'Reservation' : 'Đặt Bàn', value: 'reservation' },
  ];

  const getIsActive = (itemValue: string) => {
    const params = new URLSearchParams(window.location.search);
    const view = params.get('view');
    if (itemValue === 'healthy-menu') {
      return view === 'healthy-menu' && activeSection === 'hero';
    }
    if (itemValue === 'menu') {
      return activeSection === 'hero' && view !== 'healthy-menu';
    }
    return activeSection === itemValue;
  };

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
      className="fixed top-0 left-0 right-0 z-50 flex flex-col transition-all duration-300 select-none translate-y-0"
    >
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
                title={statusText}
              >
                <LogoIcon className="w-8 h-8 sm:w-9 sm:h-9 text-rose-600 shrink-0 transition-transform group-hover:scale-105" />
                <div className="flex flex-col">
                  <span className="font-logo text-lg sm:text-2xl text-neutral-dark font-black tracking-tight leading-none group-hover:text-rose-600 transition-colors">
                    Saime <span className="text-rose-600">Kitchen & Bar</span>
                  </span>
                  <div className="flex items-center gap-2 mt-0.5 leading-none">
                    <span className="text-[9px] font-sans text-neutral-500 font-bold uppercase tracking-widest shrink-0">
                      Hoi An Gathering
                    </span>
                    <span className="text-[9px] text-neutral-300 shrink-0">•</span>
                    <div className="flex items-center gap-1 shrink-0">
                      <span className="relative flex h-1.5 w-1.5">
                        <span className={`animate-ping absolute inline-flex h-full w-full rounded-full opacity-75 ${isOpenNow ? 'bg-emerald-400' : 'bg-rose-400'}`}></span>
                        <span className={`relative inline-flex rounded-full h-1.5 w-1.5 ${isOpenNow ? 'bg-emerald-500' : 'bg-rose-500'}`}></span>
                      </span>
                      <span className={`text-[9px] font-sans font-extrabold uppercase tracking-wider ${isOpenNow ? 'text-emerald-600' : 'text-rose-600'}`}>
                        {isOpenNow ? (lang === 'en' ? 'Open' : 'Mở cửa') : (lang === 'en' ? 'Closed' : 'Đóng cửa')}
                      </span>
                    </div>
                  </div>
                </div>
              </div>

            {/* Desktop Navigation - Clean Airbnb Category Tabs */}
            <nav id="desktop-nav" className="hidden lg:flex items-center gap-1">
              {navItems.map((item) => {
                const isActive = getIsActive(item.value);
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

            {/* Action Buttons (Language, Reservation, and dynamic open status) */}
            <div className="hidden md:flex items-center gap-3">
              {/* Dynamic live indicator badge */}
              {isOpenNow ? (
                <div className="flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-50 border border-emerald-200/60 text-emerald-800 animate-pulse duration-[3500ms] shadow-xs">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                  </span>
                  <span className="text-[10px] font-black uppercase tracking-wider">
                    {lang === 'en' ? '🟢 Open Now • Cozy vibes are waiting!' : '🟢 Đang Mở Cửa • Ghé chơi ngay bạn ơi!'}
                  </span>
                </div>
              ) : (
                <div className="flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-rose-50 border border-rose-100 text-rose-700 shadow-xs">
                  <span className="relative flex h-2 w-2">
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-rose-500"></span>
                  </span>
                  <span className="text-[10px] font-black uppercase tracking-wider">
                    {lang === 'en' ? '🔴 Closed • Opens at 3 PM (Mon Closed)' : '🔴 Đã Đóng Cửa • 15:00 mở cửa (T2 Nghỉ)'}
                  </span>
                </div>
              )}

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

              {/* Reservation Button */}
              <button
                id="header-booking-btn"
                onClick={() => handleItemClick('reservation')}
                className="px-5 py-2 rounded-full bg-rose-600 hover:bg-rose-700 text-white font-sans font-bold text-xs tracking-wide shadow-sm hover:shadow-md transition-all flex items-center gap-1.5 cursor-pointer"
              >
                <Calendar className="w-3.5 h-3.5 text-white" />
                {lang === 'en' ? 'Reservation' : 'Đặt Bàn'}
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
                    getIsActive(item.value)
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
                  {lang === 'en' ? 'Reservation' : 'Đặt Bàn'}
                </button>
              </div>

              {/* Mobile Info & Dynamic Hours block directly inside the mobile drawer */}
              <div className="mt-5 pt-4 border-t border-neutral-100 flex flex-col gap-3 text-xs text-neutral-500">
                <div className="flex items-center gap-2 font-medium">
                  <Clock className="w-4 h-4 text-rose-500" />
                  <span>{lang === 'en' ? 'Tue-Thu 3 PM-11 PM | Fri-Sun till 11:30 PM (Mon Closed)' : 'T3-T5 15:00-23:00 | T6-CN tới 23:30 (Thứ 2 Nghỉ)'}</span>
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
