import { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import ExploreExperiences from './components/ExploreExperiences';
import ExperienceHub from './components/ExperienceHub';
import CinemaBackyard from './components/CinemaBackyard';
import MenuSection from './components/MenuSection';
import ReservationSection from './components/ReservationSection';
import { MenuItem } from './types';
import { MENU_ITEMS } from './data';
import { translations } from './translations';
import { motion, AnimatePresence } from 'motion/react';
import { Volume2, Instagram, Facebook, MapPin, Utensils, Film, Dices, Puzzle, Sparkles } from 'lucide-react';

export default function App() {
  const [activeSection, setActiveSection] = useState<string>('hero');
  const [activeLoungeTab, setActiveLoungeTab] = useState<'tastings' | 'puzzles' | 'games'>('tastings');
  const [showWelcomeBroadcast, setShowWelcomeBroadcast] = useState<boolean>(false);
  const [currentBroadcastIndex, setCurrentBroadcastIndex] = useState<number>(0);
  const [showMobileSocial, setShowMobileSocial] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);
  
  // Dual Language State initialized by system default language or cached preference
  const [lang, setLang] = useState<'en' | 'vn'>(() => {
    try {
      const cached = localStorage.getItem('saime_language');
      if (cached === 'en' || cached === 'vn') {
        return cached;
      }
      const sysLang = navigator.language || (navigator as any).userLanguage;
      if (sysLang && sysLang.toLowerCase().startsWith('vi')) {
        return 'vn';
      }
    } catch (e) {
      console.warn('Language detection error:', e);
    }
    return 'en';
  });

  // Persist language selection when changed
  useEffect(() => {
    try {
      localStorage.setItem('saime_language', lang);
    } catch (e) {
      console.warn('Failed to save language setting:', e);
    }
  }, [lang]);

  // Dynamic Menu Items State with persistence to allow adding new staff and adjusting images
  const [items, setItems] = useState<MenuItem[]>(() => {
    // Force reset/clear old localStorage caches if version mismatch to apply new hardcoded assets
    const CURRENT_VERSION = 'saime_v3.4_categorized_and_perfected';
    try {
      const savedVersion = localStorage.getItem('saime_version');
      if (savedVersion !== CURRENT_VERSION) {
        localStorage.removeItem('saime_menu_items');
        localStorage.removeItem('saime_custom_categories');
        localStorage.removeItem('saime_category_mapping');
        localStorage.setItem('saime_version', CURRENT_VERSION);
      }
    } catch (e) {
      console.warn('LocalStorage error during version check:', e);
    }

    const defaultStaff: MenuItem[] = [
      {
        id: 'staff-1',
        name: 'Head Chef Quynh',
        price: 0,
        description: 'With 12 years cooking in high-energy bistros, Chef Quynh blends her grandma’s slow-stewed meatball secret with modern techniques. She is the soul behind CHAR SIU MANTOU & SAIME PAN.',
        ingredients: ['Sauce Crafting', 'Flame Control', 'Local Flavor Pairing'],
        category: 'Staff',
        isSignature: true,
        image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=400&q=80'
      },
      {
        id: 'staff-2',
        name: 'Bar Master Dung',
        price: 0,
        description: 'Dung is the wizard at the drink workstation, passionate about pairing botanical spices and local herbs with slow cold brew coffee and refreshing tropical spirits.',
        ingredients: ['Slow Coffee Brew', 'Spiced Cocktails', 'Aromatics'],
        category: 'Staff',
        isSignature: true,
        image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&q=80'
      }
    ];
    const defaultList = [...MENU_ITEMS, ...defaultStaff];

    try {
      const saved = localStorage.getItem('saime_menu_items');
      if (saved) {
        let parsed = JSON.parse(saved) as MenuItem[];
        // Only trust cache if it has a reasonable size and elements, otherwise reload default
        if (Array.isArray(parsed) && parsed.length >= 5) {
          // Force-update isSignature, isBestSeller, and isChefRecommend for saime-comfort, saime-wonton, and char-siu-mantou
          let modified = false;
          parsed = parsed.map(item => {
            if (['saime-comfort', 'saime-wonton', 'char-siu-mantou'].includes(item.id)) {
              if (!item.isSignature || !item.isBestSeller) {
                item.isSignature = true;
                item.isBestSeller = true;
                modified = true;
              }
            }
            if (item.id === 'saime-pan' && item.isBestSeller) {
              item.isBestSeller = false;
              modified = true;
            }
            const defaultItem = defaultList.find(d => d.id === item.id);
            if (defaultItem) {
              if (defaultItem.image !== item.image) {
                item.image = defaultItem.image;
                modified = true;
              }
              if (defaultItem.name !== item.name) {
                item.name = defaultItem.name;
                modified = true;
              }
              if (defaultItem.price !== item.price) {
                item.price = defaultItem.price;
                modified = true;
              }
              if (defaultItem.description !== item.description) {
                item.description = defaultItem.description;
                modified = true;
              }
              if (defaultItem.category !== item.category) {
                item.category = defaultItem.category;
                modified = true;
              }
              if (defaultItem.menuType !== item.menuType) {
                item.menuType = defaultItem.menuType;
                modified = true;
              }
              if (JSON.stringify(defaultItem.ingredients) !== JSON.stringify(item.ingredients)) {
                item.ingredients = defaultItem.ingredients;
                modified = true;
              }
            }
            return item;
          });

          const parsedIds = new Set(parsed.map(x => x.id));
          const missingDefaults = MENU_ITEMS.filter(item => !parsedIds.has(item.id));
          if (missingDefaults.length > 0) {
            const merged = [...parsed, ...missingDefaults];
            try {
              localStorage.setItem('saime_menu_items', JSON.stringify(merged));
            } catch (err) {
              console.warn('Quota exceeded during merged save, using memory state:', err);
            }
            return merged;
          }

          if (modified) {
            try {
              localStorage.setItem('saime_menu_items', JSON.stringify(parsed));
            } catch (err) {
              console.warn('Quota exceeded during cached state update:', err);
            }
          }
          return parsed;
        }
      }
    } catch (e) {
      console.error('Error loading custom menu items in fast initializer', e);
    }
    
    // Save defaults to localStorage for future use
    try {
      localStorage.setItem('saime_menu_items', JSON.stringify(defaultList));
    } catch (e) {
      console.error('Failed to pre-cache defaultList:', e);
    }
    return defaultList;
  });

  const t = translations[lang];

  // Broadcast tickers
  const broadcastsEn = [
    "🔥 Standard Table 04 just reserved 'SAIME PAN' & 'COCO TOAST'!",
    "🌿 Local regular Minh Anh left a heartwarming note on the Guestbook Board.",
    "🥑 Kitchen tip: You can request extra sweet Vietnamese pickles with any burger!",
    "☕ Gathers note: Try pairing your 'Char Siu Mantou' with slow-drip master coffee!",
  ];

  const broadcastsVn = [
    "🔥 Bàn số 04 vừa đặt 'BÁNH MÌ CHẢO SÀI MẼ' & 'COCO TOAST'!",
    "🌿 Bạn Minh Anh vừa gửi gắm lời lưu bút vô cùng ấm áp lên chiếc bảng bàn dài.",
    "🥑 Gợi ý bếp: Bạn có thể yêu cầu thêm dưa muối chua ngọt ăn kèm burger nhé!",
    "☕ Mẹo nhỏ: Dùng thử bánh bao lạp xưởng kẹp thịt xá xíu cùng ly cà phê nhỏ giọt!",
  ];

  const broadcasts = lang === 'en' ? broadcastsEn : broadcastsVn;

  // State persist functions for admin modifications
  const handleAddItem = (newItem: MenuItem) => {
    const updated = [...items, newItem];
    setItems(updated);
    try {
      localStorage.setItem('saime_menu_items', JSON.stringify(updated));
    } catch (error) {
      console.error('Storage error:', error);
      if (error instanceof Error && error.name === 'QuotaExceededError') {
        alert(lang === 'en' 
          ? 'Notice: Local browser storage limit reached because of large custom images. Your changes are saved in memory for this session.' 
          : 'Thông báo: Dung lượng dự trữ trình duyệt đã đầy do file ảnh lớn. Thay đổi vẫn được lưu tạm trong phiên làm việc này.');
      }
    }
  };

  const handleEditItem = (editedItem: MenuItem) => {
    const updated = items.map(item => item.id === editedItem.id ? editedItem : item);
    setItems(updated);
    try {
      localStorage.setItem('saime_menu_items', JSON.stringify(updated));
    } catch (error) {
      console.error('Storage error:', error);
      if (error instanceof Error && error.name === 'QuotaExceededError') {
        alert(lang === 'en' 
          ? 'Notice: Local browser storage limit reached because of large custom images. Your changes are saved in memory for this session.' 
          : 'Thông báo: Dung lượng dự trữ trình duyệt đã đầy do file ảnh lớn. Thay đổi vẫn được lưu tạm trong phiên làm việc này.');
      }
    }
  };

  const handleDeleteItem = (id: string) => {
    const updated = items.filter(item => item.id !== id);
    setItems(updated);
    try {
      localStorage.setItem('saime_menu_items', JSON.stringify(updated));
    } catch (error) {
      console.error('Storage error:', error);
    }
  };

  // Preload all menu item images instantly for lightning-fast catalog access
  useEffect(() => {
    if (items && items.length > 0) {
      items.forEach(item => {
        if (item.image) {
          const img = new Image();
          img.src = item.image;
        }
      });
    }
  }, [items]);

  useEffect(() => {
    const handleScrollMobile = () => {
      const currentScrollY = window.scrollY;
      
      if (Math.abs(currentScrollY - lastScrollY) < 15) return;

      if (currentScrollY > lastScrollY && currentScrollY > 150) {
        setShowMobileSocial(true);
      } else {
        setShowMobileSocial(false);
      }
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScrollMobile, { passive: true });
    return () => window.removeEventListener('scroll', handleScrollMobile);
  }, [lastScrollY]);

  useEffect(() => {
    // Shift broadcast ticker
    const interval = setInterval(() => {
      setCurrentBroadcastIndex((prev) => (prev + 1) % broadcasts.length);
    }, 8500);
    return () => clearInterval(interval);
  }, [broadcasts.length]);

  // Deep linking and URL query synchronization
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const view = params.get('view')?.toLowerCase();
    
    if (view) {
      if (view === 'cinema' || view === 'movie-night') {
        handleNav('movie-night');
      } else if (view === 'tasting' || view === 'tastings') {
        setActiveLoungeTab('tastings');
        setActiveSection('tasting');
      } else if (view === 'games' || view === 'board-games') {
        setActiveLoungeTab('games');
        setActiveSection('board-games');
      } else if (view === 'puzzles' || view === 'day-puzzles') {
        setActiveLoungeTab('puzzles');
        setActiveSection('day-puzzles');
      } else if (view === 'menu') {
        setActiveSection('hero');
        setTimeout(() => {
          const el = document.getElementById('menu');
          if (el) {
            el.scrollIntoView({ behavior: 'smooth' });
          }
        }, 300);
      } else if (view === 'reservation' || view === 'booking') {
        handleNav('reservation');
      } else if (view === 'hero' || view === 'home') {
        handleNav('hero');
      }
    }
  }, []);

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    let viewValue = '';
    
    if (activeSection === 'movie-night') {
      viewValue = 'cinema';
    } else if (activeSection === 'tasting') {
      viewValue = 'tasting';
    } else if (activeSection === 'board-games') {
      viewValue = 'games';
    } else if (activeSection === 'day-puzzles') {
      viewValue = 'puzzles';
    } else if (activeSection === 'reservation') {
      viewValue = 'reservation';
    } else if (activeSection === 'hero') {
      // Check if we are scrolled to the menu section
      const el = document.getElementById('menu');
      const isMenuScrolled = el && Math.abs(el.getBoundingClientRect().top) < window.innerHeight;
      viewValue = isMenuScrolled ? 'menu' : 'home';
    }

    if (viewValue) {
      const currentView = params.get('view');
      if (currentView !== viewValue) {
        params.set('view', viewValue);
        const newUrl = `${window.location.pathname}?${params.toString()}`;
        window.history.replaceState({ path: newUrl }, '', newUrl);
      }
    }
  }, [activeSection, activeLoungeTab]);

  const handleNav = (sectionId: string) => {
    if (sectionId === 'tasting') {
      setActiveLoungeTab('tastings');
    } else if (sectionId === 'board-games') {
      setActiveLoungeTab('games');
    } else if (sectionId === 'day-puzzles') {
      setActiveLoungeTab('puzzles');
    }
    
    if (sectionId === 'menu') {
      setActiveSection('hero');
      const params = new URLSearchParams(window.location.search);
      params.set('view', 'menu');
      const newUrl = `${window.location.pathname}?${params.toString()}`;
      window.history.replaceState({ path: newUrl }, '', newUrl);

      setTimeout(() => {
        const el = document.getElementById('menu');
        if (el) {
          el.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
      return;
    }
    
    setActiveSection(sectionId);
    window.scrollTo({ top: 0, behavior: 'instant' });
  };

  return (
    <div className={`relative min-h-screen bg-neutral-light select-none selection:bg-primary/20 selection:text-primary ${lang === 'vn' ? 'font-vietnamese' : ''}`}>
      
      {/* Navigation Header */}
      <Header 
        lang={lang} 
        setLang={setLang} 
        onNavigate={handleNav} 
        activeSection={activeSection} 
      />



      {/* Central View Content with Page Transitions */}
      <main className="min-h-[80vh] pt-24 pb-36">
        <AnimatePresence mode="wait">
          {activeSection === 'hero' && (
            <motion.div
              key="hero"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.25 }}
              className="space-y-4"
            >
              <Hero
                onGoToMenu={() => handleNav('menu')}
                onGoToBooking={() => handleNav('reservation')}
                onNavigate={handleNav}
                lang={lang}
              />
              <MenuSection 
                lang={lang} 
                isAdmin={false} 
                items={items} 
                onAddItem={handleAddItem}
                onEditItem={handleEditItem}
                onDeleteItem={handleDeleteItem}
                onNavigate={handleNav}
              />
              <ExploreExperiences
                onNavigate={handleNav}
                lang={lang}
              />
            </motion.div>
          )}

          {(activeSection === 'tasting' || activeSection === 'board-games' || activeSection === 'day-puzzles') && (
            <motion.div
              key="tasting-hub"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.25 }}
            >
              <ExperienceHub 
                lang={lang} 
                activeTab={activeLoungeTab} 
                setActiveTab={(tab) => {
                  setActiveLoungeTab(tab);
                  if (tab === 'tastings') setActiveSection('tasting');
                  else if (tab === 'games') setActiveSection('board-games');
                  else if (tab === 'puzzles') setActiveSection('day-puzzles');
                }} 
                onGoToBooking={() => handleNav('reservation')} 
                onNavigate={handleNav}
              />
            </motion.div>
          )}

          {activeSection === 'movie-night' && (
            <motion.div
              key="movie-night"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.25 }}
            >
              <CinemaBackyard lang={lang} onNavigate={handleNav} />
            </motion.div>
          )}

          {activeSection === 'reservation' && (
            <motion.div
              key="reservation"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.25 }}
            >
              <ReservationSection lang={lang} onNavigate={handleNav} />
            </motion.div>
          )}
        </AnimatePresence>
      </main>

      {/* Sticky Floating Bottom Activities Navigation Bar (All Platforms) */}
      <div 
        className="fixed bottom-4 left-4 right-4 md:left-1/2 md:right-auto md:w-[500px] md:-translate-x-1/2 z-50 bg-[#121214]/95 backdrop-blur-md border border-white/15 rounded-2xl shadow-[0_12px_40px_rgba(0,0,0,0.6)] flex flex-col overflow-hidden animate-in fade-in slide-in-from-bottom-4 duration-300"
      >
        {/* Map & Social Utilities Strip */}
        <div className="flex items-center justify-between px-4 py-2 border-b border-white/5 bg-white/[0.02]">
          {/* Google Map Link */}
          <a 
            href="https://www.google.com/maps/search/?api=1&query=Saime+Kitchen+%26+Bar+144+Ly+Thai+To+Hoi+An"
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-1.5 text-[11px] font-sans font-bold text-rose-400 hover:text-rose-300 transition-colors"
          >
            <MapPin className="w-3.5 h-3.5 shrink-0 text-rose-500 animate-pulse" />
            <span>{lang === 'en' ? 'Directions (Map)' : 'Chỉ đường (Bản Đồ)'}</span>
          </a>

          {/* Social Links */}
          <div className="flex items-center gap-3">
            <a 
              href="https://wa.me/84964023683" 
              target="_blank" 
              rel="noreferrer" 
              className="p-1 text-white/60 hover:text-emerald-400 transition-colors"
              title="WhatsApp"
            >
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.335-1.662c1.746.953 3.71 1.455 5.703 1.457h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
            </a>
            <a 
              href="https://www.instagram.com/saime_kitchen.bar/" 
              target="_blank" 
              rel="noreferrer" 
              className="p-1 text-white/60 hover:text-rose-400 transition-colors"
              title="Instagram"
            >
              <Instagram className="w-4 h-4" />
            </a>
            <a 
              href="https://www.facebook.com/profile.php?id=61589897489896" 
              target="_blank" 
              rel="noreferrer" 
              className="p-1 text-white/60 hover:text-rose-400 transition-colors"
              title="Facebook"
            >
              <Facebook className="w-4 h-4" />
            </a>
            <a 
              href="https://www.tiktok.com/@saime.kitchen.bar?lang=en" 
              target="_blank" 
              rel="noreferrer" 
              className="p-1 text-white/60 hover:text-rose-400 transition-colors"
              title="TikTok"
            >
              <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.17-2.86-.74-3.94-1.74-.22-.22-.44-.45-.63-.7-.01 2.05-.01 4.11-.01 6.16 0 1.54-.31 3.14-1.12 4.46-1.15 1.98-3.32 3.32-5.61 3.49-1.99.18-4.14-.35-5.63-1.75-1.92-1.72-2.58-4.66-1.56-7.07.82-1.99 2.76-3.48 4.9-3.76.21-.03.43-.04.64-.05v4.06c-1.1.26-2.11 1.09-2.38 2.24-.39 1.56.49 3.33 2.01 3.79 1.15.35 2.5-.04 3.17-1.02.44-.64.55-1.44.53-2.22.02-3.83.01-7.66.01-11.49z"/>
              </svg>
            </a>
          </div>
        </div>

        {/* Main Core Activities Tabs */}
        <div className="grid grid-cols-5 py-2 px-1 text-center select-none bg-black/40">
          {/* Tab 1: Menu */}
          <button
            onClick={() => handleNav('menu')}
            className={`flex flex-col items-center justify-center py-1 rounded-xl transition-all cursor-pointer ${
              activeSection === 'hero' 
                ? 'text-rose-400 font-bold bg-white/[0.04]' 
                : 'text-white/50 hover:text-white/80'
            }`}
          >
            <Utensils className={`w-4.5 h-4.5 mb-1 transition-transform duration-300 ${activeSection === 'hero' ? 'scale-110 text-rose-400' : ''}`} />
            <span className="text-[9px] tracking-tight truncate max-w-full px-1">
              {lang === 'en' ? 'Menu' : 'Thực Đơn'}
            </span>
          </button>

          {/* Tab 2: Movie Nights */}
          <button
            onClick={() => handleNav('movie-night')}
            className={`flex flex-col items-center justify-center py-1 rounded-xl transition-all cursor-pointer ${
              activeSection === 'movie-night' 
                ? 'text-rose-400 font-bold bg-white/[0.04]' 
                : 'text-white/50 hover:text-white/80'
            }`}
          >
            <Film className={`w-4.5 h-4.5 mb-1 transition-transform duration-300 ${activeSection === 'movie-night' ? 'scale-110 text-rose-400' : ''}`} />
            <span className="text-[9px] tracking-tight truncate max-w-full px-1">
              {lang === 'en' ? 'Cinema' : 'Phim Ảnh'}
            </span>
          </button>

          {/* Tab 3: Boardgames */}
          <button
            onClick={() => handleNav('board-games')}
            className={`flex flex-col items-center justify-center py-1 rounded-xl transition-all cursor-pointer ${
              activeSection === 'board-games' 
                ? 'text-rose-400 font-bold bg-white/[0.04]' 
                : 'text-white/50 hover:text-white/80'
            }`}
          >
            <Dices className={`w-4.5 h-4.5 mb-1 transition-transform duration-300 ${activeSection === 'board-games' ? 'scale-110 text-rose-400' : ''}`} />
            <span className="text-[9px] tracking-tight truncate max-w-full px-1">
              {lang === 'en' ? 'Games' : 'Trò Chơi'}
            </span>
          </button>

          {/* Tab 4: Puzzles */}
          <button
            onClick={() => handleNav('day-puzzles')}
            className={`flex flex-col items-center justify-center py-1 rounded-xl transition-all cursor-pointer ${
              activeSection === 'day-puzzles' 
                ? 'text-rose-400 font-bold bg-white/[0.04]' 
                : 'text-white/50 hover:text-white/80'
            }`}
          >
            <Puzzle className={`w-4.5 h-4.5 mb-1 transition-transform duration-300 ${activeSection === 'day-puzzles' ? 'scale-110 text-rose-400' : ''}`} />
            <span className="text-[9px] tracking-tight truncate max-w-full px-1">
              {lang === 'en' ? 'Puzzles' : 'Trí Tuệ'}
            </span>
          </button>

          {/* Tab 5: Tasting Experience */}
          <button
            onClick={() => handleNav('tasting')}
            className={`flex flex-col items-center justify-center py-1 rounded-xl transition-all cursor-pointer ${
              activeSection === 'tasting' 
                ? 'text-rose-400 font-bold bg-white/[0.04]' 
                : 'text-white/50 hover:text-white/80'
            }`}
          >
            <Sparkles className={`w-4.5 h-4.5 mb-1 transition-transform duration-300 ${activeSection === 'tasting' ? 'scale-110 text-rose-400' : ''}`} />
            <span className="text-[9px] tracking-tight truncate max-w-full px-1">
              {lang === 'en' ? 'Tastings' : 'Trải Nghiệm'}
            </span>
          </button>
        </div>
      </div>

    </div>
  );
}
