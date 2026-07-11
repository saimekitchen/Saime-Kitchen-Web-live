import { useState, useEffect, useRef } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import ExploreExperiences from './components/ExploreExperiences';
import TastingsPage from './components/TastingsPage';
import BoardGamesPage from './components/BoardGamesPage';
import ChessSection from './components/ChessSection';
import SpecialOffers from './components/SpecialOffers';
import CinemaBackyard from './components/CinemaBackyard';
import MenuSection from './components/MenuSection';
import ReservationSection from './components/ReservationSection';
import Footer from './components/Footer';
import { MenuItem } from './types';
import { MENU_ITEMS } from './data';
import { translations } from './translations';
import { motion, AnimatePresence } from 'motion/react';
import { Volume2, Instagram, Facebook, MapPin, Utensils, Film, Dices, Tag, Sparkles, Crown } from 'lucide-react';

export default function App() {
  const [activeSection, setActiveSection] = useState<string>('hero');
  const [activeLoungeTab, setActiveLoungeTab] = useState<'tastings' | 'puzzles' | 'games'>('tastings');
  const [showWelcomeBroadcast, setShowWelcomeBroadcast] = useState<boolean>(false);
  const [currentBroadcastIndex, setCurrentBroadcastIndex] = useState<number>(0);
  const [showBottomBar, setShowBottomBar] = useState(true);
  const lastScrollYRef = useRef(0);
  
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
    const CURRENT_VERSION = 'saime_v3.9_vegetarian_rainbow_yogurt';
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
              if (defaultItem.imageScale !== item.imageScale) {
                item.imageScale = defaultItem.imageScale;
                modified = true;
              }
              if (defaultItem.imageXOffset !== item.imageXOffset) {
                item.imageXOffset = defaultItem.imageXOffset;
                modified = true;
              }
              if (defaultItem.imageYOffset !== item.imageYOffset) {
                item.imageYOffset = defaultItem.imageYOffset;
                modified = true;
              }
              if (defaultItem.imageHeight !== item.imageHeight) {
                item.imageHeight = defaultItem.imageHeight;
                modified = true;
              }
              if (defaultItem.flipHorizontal !== item.flipHorizontal) {
                item.flipHorizontal = defaultItem.flipHorizontal;
                modified = true;
              }
              if (defaultItem.imageFit !== item.imageFit) {
                item.imageFit = defaultItem.imageFit;
                modified = true;
              }
              if (defaultItem.cardAspect !== item.cardAspect) {
                item.cardAspect = defaultItem.cardAspect;
                modified = true;
              }
              if (!!defaultItem.isHealthy !== !!item.isHealthy) {
                item.isHealthy = defaultItem.isHealthy;
                modified = true;
              }
              if (!!defaultItem.isVegetarian !== !!item.isVegetarian) {
                item.isVegetarian = defaultItem.isVegetarian;
                modified = true;
              }
              if (!!defaultItem.isSpicy !== !!item.isSpicy) {
                item.isSpicy = defaultItem.isSpicy;
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
      const isMobile = window.innerWidth < 768;

      if (isMobile) {
        if (Math.abs(currentScrollY - lastScrollYRef.current) < 10) return;

        if (currentScrollY > lastScrollYRef.current && currentScrollY > 50) {
          // Scrolling down -> show bottom bar
          setShowBottomBar(true);
        } else if (currentScrollY < lastScrollYRef.current) {
          // Scrolling up -> hide bottom bar
          setShowBottomBar(false);
        }
      } else {
        setShowBottomBar(true);
      }
      
      lastScrollYRef.current = currentScrollY;
    };

    window.addEventListener('scroll', handleScrollMobile, { passive: true });
    return () => window.removeEventListener('scroll', handleScrollMobile);
  }, []);

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
      } else if (view === 'games' || view === 'board-games' || view === 'puzzles' || view === 'day-puzzles') {
        setActiveLoungeTab('games');
        setActiveSection('board-games');
      } else if (view === 'chess' || view === 'chess-club') {
        handleNav('chess');
      } else if (view === 'offers' || view === 'special-offers') {
        setActiveSection('special-offers');
      } else if (view === 'menu' || view === 'healthy-menu') {
        setActiveSection('hero');
        setTimeout(() => {
          const el = document.getElementById('menu');
          if (el) {
            el.scrollIntoView({ behavior: 'smooth' });
          }
          if (view === 'healthy-menu') {
            window.dispatchEvent(new CustomEvent('saime_select_menu', { detail: { tab: 'bistro', division: 'healthy' } }));
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
    } else if (activeSection === 'chess') {
      viewValue = 'chess';
    } else if (activeSection === 'special-offers') {
      viewValue = 'offers';
    } else if (activeSection === 'reservation') {
      viewValue = 'reservation';
    } else if (activeSection === 'hero') {
      const currentQueryView = params.get('view')?.toLowerCase();
      if (currentQueryView === 'healthy-menu') {
        viewValue = 'healthy-menu';
      } else if (currentQueryView === 'menu') {
        viewValue = 'menu';
      } else {
        // Fallback to auto-scrolling detection if no explicit view is set yet
        const el = document.getElementById('menu');
        const isMenuScrolled = el && Math.abs(el.getBoundingClientRect().top) < window.innerHeight;
        viewValue = isMenuScrolled ? 'menu' : 'home';
      }
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
    let targetSection = sectionId;
    if (targetSection === 'day-puzzles') {
      targetSection = 'board-games';
    }

    if (targetSection === 'tasting') {
      setActiveLoungeTab('tastings');
    } else if (targetSection === 'board-games') {
      setActiveLoungeTab('games');
    }
    
    if (targetSection === 'menu' || targetSection === 'healthy-menu') {
      setActiveSection('hero');
      const params = new URLSearchParams(window.location.search);
      params.set('view', targetSection);
      const newUrl = `${window.location.pathname}?${params.toString()}`;
      window.history.replaceState({ path: newUrl }, '', newUrl);

      setTimeout(() => {
        const el = document.getElementById('menu');
        if (el) {
          el.scrollIntoView({ behavior: 'smooth' });
        }
        if (targetSection === 'healthy-menu') {
          window.dispatchEvent(new CustomEvent('saime_select_menu', { detail: { tab: 'bistro', division: 'healthy' } }));
        }
      }, 150);
      return;
    }
    
    setActiveSection(targetSection);
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

          {activeSection === 'tasting' && (
            <motion.div
              key="tasting-page"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.25 }}
            >
              <TastingsPage 
                lang={lang} 
                onNavigate={handleNav}
                onGoToBooking={() => handleNav('reservation')} 
              />
            </motion.div>
          )}

          {activeSection === 'board-games' && (
            <motion.div
              key="board-games-page"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.25 }}
            >
              <BoardGamesPage 
                lang={lang} 
                onNavigate={handleNav}
              />
            </motion.div>
          )}

          {activeSection === 'special-offers' && (
            <motion.div
              key="special-offers"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.25 }}
            >
              <SpecialOffers 
                lang={lang} 
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

          {activeSection === 'chess' && (
            <motion.div
              key="chess-section"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.25 }}
            >
              <ChessSection lang={lang} onNavigate={handleNav} />
            </motion.div>
          )}
        </AnimatePresence>
      </main>

      {/* Global Brand Footer & QR Scanner Access */}
      <Footer lang={lang} onNavigate={handleNav} />

      {/* Sticky Floating Bottom Activities Navigation Bar (All Platforms) */}
      <div 
        className={`fixed bottom-4 left-4 right-4 md:left-1/2 md:right-auto md:w-[500px] md:-translate-x-1/2 z-50 bg-[#121214]/95 backdrop-blur-md border border-white/15 rounded-2xl shadow-[0_12px_40px_rgba(0,0,0,0.6)] flex flex-col overflow-hidden transition-all duration-300 ${
          showBottomBar ? 'translate-y-0 opacity-100' : 'max-md:translate-y-[150%] max-md:opacity-0 max-md:pointer-events-none'
        }`}
      >
        {/* Map & Social Utilities Strip */}
        <div className="flex items-center justify-between px-3 py-2.5 border-b border-white/12 bg-[#1c1c22]">
          {/* Google Map Link - ELEGANT BALANCED CALL TO ACTION */}
          <a 
            href="https://www.google.com/maps/search/?api=1&query=Saime+Kitchen+%26+Bar+144+Ly+Thai+To+Hoi+An"
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-1.5 text-xs font-sans font-bold text-white hover:text-amber-300 pr-5 transition-all shrink-0 active:scale-[0.98]"
          >
            <MapPin className="w-4 h-4 text-white shrink-0" />
            <span className="tracking-wide">GOOGLE MAPS</span>
          </a>

          {/* Social Links */}
          <div className="flex items-center gap-3">
            <a 
              href="https://m.me/61589897489896" 
              target="_blank" 
              rel="noreferrer" 
              className="p-1 text-white/60 hover:text-blue-400 transition-colors"
              title="Messenger"
            >
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                <path d="M12 2C6.477 2 2 6.145 2 11.258c0 2.914 1.45 5.518 3.71 7.21v3.136c0 .193.18.33.354.264l3.524-1.34c.783.216 1.61.33 2.412.33 5.523 0 10-4.146 10-9.26C22 6.145 17.523 2 12 2zm1.09 12.33l-2.454-2.624-4.8 2.624 5.275-5.603 2.51 2.624 4.744-2.624-5.275 5.603z"/>
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

          {/* Tab 4: Chess Club */}
          <button
            onClick={() => handleNav('chess')}
            className={`flex flex-col items-center justify-center py-1 rounded-xl transition-all cursor-pointer ${
              activeSection === 'chess' 
                ? 'text-rose-400 font-bold bg-white/[0.04]' 
                : 'text-white/50 hover:text-white/80'
            }`}
          >
            <Crown className={`w-4.5 h-4.5 mb-1 transition-transform duration-300 ${activeSection === 'chess' ? 'scale-110 text-rose-400' : ''}`} />
            <span className="text-[9px] tracking-tight truncate max-w-full px-1">
              {lang === 'en' ? 'Chess Club' : 'Câu Lạc Câu Cờ'}
            </span>
          </button>

          {/* Tab 5: Special Offers */}
          <button
            onClick={() => handleNav('special-offers')}
            className={`flex flex-col items-center justify-center py-1 rounded-xl transition-all cursor-pointer ${
              activeSection === 'special-offers' 
                ? 'text-rose-400 font-bold bg-white/[0.04]' 
                : 'text-white/50 hover:text-white/80'
            }`}
          >
            <Tag className={`w-4.5 h-4.5 mb-1 transition-transform duration-300 ${activeSection === 'special-offers' ? 'scale-110 text-rose-400' : ''}`} />
            <span className="text-[9px] tracking-tight truncate max-w-full px-1">
              {lang === 'en' ? 'Offers' : 'Ưu Đãi'}
            </span>
          </button>
        </div>
      </div>

    </div>
  );
}
