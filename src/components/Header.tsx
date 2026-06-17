import { useState, useEffect } from 'react';
import { Menu, X, Calendar, Sparkles, Languages, Shield, Lock, Unlock } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { translations } from '../translations';
import LogoIcon from './LogoIcon';

interface HeaderProps {
  onNavigate: (section: 'hero' | 'tasting' | 'menu' | 'reservation' | 'community') => void;
  activeSection: string;
  lang: 'en' | 'vn';
  setLang: (lang: 'en' | 'vn') => void;
  isAdmin: boolean;
  onAdminTrigger: () => void;
  onAdminLogout: () => void;
}

export default function Header({ 
  onNavigate, 
  activeSection, 
  lang, 
  setLang, 
  isAdmin, 
  onAdminTrigger, 
  onAdminLogout 
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
    { label: t.guestbookNav, value: 'community' },
  ];

  const handleItemClick = (sectionValue: 'hero' | 'tasting' | 'menu' | 'reservation' | 'community') => {
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

          {/* Action Buttons (Language, Admin, Reservation) */}
          <div className="hidden md:flex items-center gap-2.5">
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

            {/* Admin Key Button */}
            {isAdmin ? (
              <button
                id="header-admin-logout"
                onClick={onAdminLogout}
                className="px-3.5 py-1.5 rounded-full bg-primary text-white border border-primary font-display font-bold text-xs flex items-center gap-1.5 cursor-pointer hover:bg-red-600 hover:border-red-600 transition-all shadow-sm"
                title="Admin Active (Click to Logout)"
              >
                <Unlock className="w-3.5 h-3.5 animate-pulse" />
                <span>Admin Logout</span>
              </button>
            ) : (
              <button
                id="header-admin-login"
                onClick={onAdminTrigger}
                className="px-3.5 py-1.5 bg-sand/80 hover:bg-sand border border-sand-dark text-neutral-dark font-display font-bold flex items-center gap-1.5 cursor-pointer text-xs transition-all shadow-sm"
                title="Admin Authentication"
              >
                <Lock className="w-3.5 h-3.5 text-primary" />
                <span>Admin Login</span>
              </button>
            )}

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
              <Languages className="w-3 h-3 text-tropical" />
              <span>{lang === 'en' ? 'VN' : 'EN'}</span>
            </button>

            {/* Mobile Admin Key Button */}
            <button
              onClick={isAdmin ? onAdminLogout : onAdminTrigger}
              className={`p-1.5 rounded-full border ${isAdmin ? 'bg-tropical-light text-tropical border-tropical/20' : 'bg-sand/40 text-neutral-muted border-sand-dark/20'}`}
            >
              {isAdmin ? <Unlock className="w-3.5 h-3.5" /> : <Lock className="w-3.5 h-3.5" />}
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

                <button
                  id="mobile-drawer-admin-btn"
                  onClick={() => {
                    setIsOpen(false);
                    if (isAdmin) {
                      onAdminLogout();
                    } else {
                      onAdminTrigger();
                    }
                  }}
                  className={`w-full py-2.5 rounded-xl font-display font-semibold text-xs tracking-wider uppercase flex items-center justify-center gap-2 cursor-pointer border transition-all ${
                    isAdmin
                      ? 'bg-tropical text-white border-tropical shadow-sm font-bold'
                      : 'bg-sand text-neutral-dark border-sand-dark font-bold hover:bg-sand-dark'
                  }`}
                >
                  {isAdmin ? (
                    <>
                      <Unlock className="w-3.5 h-3.5" />
                      {lang === 'en' ? 'Exit Admin Mode' : 'Thoát Chế Độ Admin'}
                    </>
                  ) : (
                    <>
                      <Lock className="w-3.5 h-3.5 text-primary" />
                      {lang === 'en' ? 'Admin Login' : 'Đăng Nhập Admin'}
                    </>
                  )}
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
